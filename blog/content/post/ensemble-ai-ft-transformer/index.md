---
title: EnsembleAI 2026
description: Transformers rule!!!
slug: ensemble-ai-2026
date: 2026-04-07   16:00:00+0000
image: cover.jpeg
categories:
  - Hackathon
tags:
  - ensembleAI
  - PW
  - GHOST
  - AI
  - Transformers
  - Hackathon
---

To be honest, I put off writing this post for a long time, and I mostly blame the fatigue that comes with hackathons. Still, after two weeks had passed, during a long trip from Suwałki to Poznań, I decided to write a few words about the task I had the chance to work on the most during this edition of EnsembleAI, which ultimately got us into the top 4 and gave us a shot at the podium!

## **A short introduction to the EnsembleAI hackathon format**
To understand the emotions that my team and I felt during this fierce competition, we need to start with the hackathon format, because it is at least unconventional and delivers dopamine hits stronger than Instagram Reels.
Each of the 4 tasks is scored separately, and points are assigned based on the submitted solutions, specific to each task. In our case, that was for example a CSV file with predictions of monthly energy consumption for a given time window. That is why the main hub of the hackathon was a leaderboard page, where the place achieved in a task translated into points.
Submissions could only be sent at predefined intervals, partly to avoid DDoS-ing the servers. So, as you can imagine, after each file submission came a tense waiting period: did our solution improve the ranking, and by how much?
![Meme about waiting for results](meme.png)

## **But let us start from the beginning: what, how, where, and why?**
The task was organized by one of the hackathon partners, Euros Energy, which designed it and also provided the data. So what was it all about? In the problem statement, we were given a picture of how mass electrification is a milestone in Poland's energy transition. However, for energy distributors, the rapid growth of heat pump installations creates serious challenges. That means accurate demand forecasting is essential to prevent grid overloads and, as a result, outages.

## **The data we received**
Whenever we talk about machine learning and prediction, it would be a shame not to start with the data, so before I bore you with anything else, let me begin there. Each team had access to 3 main datasets:

- Train: October 2024 – April 2025
- Validation: May 2025 – June 2025
- Test: July 2025 – October 2025

We made predictions on that last dataset with every submission, **HOWEVER, THE FINAL SCORE ONLY COUNTED DURING THE LAST, FINAL SUBMISSION AFTER THE HACKATHON ENDED!** So while training the model, no team was sure how well it would generalize to data it had never seen before, especially since summer periods can behave very differently from autumn and winter, when heat pumps operate in a much more intense way.

In summary, the dataset contained around 600 different sensors, sending logs every 5 minutes during the periods above, which gave us about 65 million rows (10.42 GB!) to analyze.

## **The goal**
Short and simple: our task was to provide a prediction for each sensor, containing a monthly prediction of the mean x2. Below I am dropping the exact and beautiful formula from the task description:

![Prediction target formula](prediction_target_hck.png)

And the evaluation metric on the live leaderboard as well as the final leaderboard was MAE:

![MAE as the evaluation metric](mae.png)

So, time to describe our efforts and the path that led us straight to 3rd place in the entire hackathon!

## **Feature engineering and data preprocessing**
At the very beginning, of course, the first thing to do was to take a close look at the data and its distributions, and that is exactly what I did. But even before that, at the very end of the instructions provided by the organizers, we could find this section:

![Instruction section about DoS](dos.png)

At that moment I thought we should start with that, because surely every team would do it, right? Right?? Well, it turned out that not everyone did :D and who knows, maybe that gave us a few extra points?

The data included information such as the latitude and longitude of each sensor, so based on that I decided to start by locating each sensor in a specific voivodeship, querying the GeoPy API. It turned out the data was probably anonymized or contained errors, because some locations were mapped incorrectly and GeoPy could not find the right place. In those cases, we used a KNN algorithm to find the nearest sensor that was correctly placed in our data and had an assigned operator. The map we built later assigned each voivodeship to one of the energy distributors, such as PGE, Enea, or Tauron, and that gave us our first interesting feature.
Another important aspect was data aggregation. There was a lot of it, which could overwhelm even a strong model, so we decided to aggregate hourly. That seemed to reduce the dataset substantially, remove noise from 5-minute measurements, create room for pattern detection, and still remain a meaningful prediction unit.
Overall, the problem was pretty interesting, because at first I thought about it, and initially approached it, like a time series forecasting task. But after thinking about it more deeply, it is really just a plain regression problem. Sure, the logs come every 5 minutes, but the prediction is MONTHLY! That is a pretty strong aggregation, and as my university professor would say, we clearly need the sharpest possible axe for this prediction, not a scalpel. More importantly, we need a fairly universal axe that can learn features in autumn and then apply those lessons and make sense of them in summer as well.

During those 24 hours I tested many different features, sometimes asking an LLM whether it had any interesting ideas. In the end, I will list what was added and what was finally used to train our Transformer (slight spoiler XD):

- **deviceType**: the device type, which helps the model capture differences in operating behavior between equipment classes.

- **x3**: an additional categorical feature from the input data, which adds information about the device profile and configuration.

- **operator**: the name of the provider operator, allowing the model to account for differences caused by operating conditions and policies.

- **voivodeship**: the administrative region, that is, the geographic context that affects climate and system seasonality among other things.

- **device_operator_combo**: a combination of the device and the operator, which helps capture interactions specific to a given pair.

- **t1_mean-t13_mean**: the mean value of the t1-t13 signals in a time window, describing their typical level.

- **t8_max**: the maximum value of t8, describing extreme peaks and periods of high load.

- **t8_std**: the standard deviation of t8, measuring the variability and nervousness of the signal.

- **t7_max**: the maximum of t7, which indicates momentary extreme states of the system.

- **t4_min**: the minimum of t4, useful for detecting deep drops and boundary conditions.

- **delta_load**: the change in load between time points, showing the dynamics of the system.

- **delta_source**: the change on the source side, which may reflect switching events or shifts in supply conditions.

- **cwu_demand**: the DHW demand signal, which directly affects system operation.

- **delta_temp_out_in**: the difference between output and input temperature, describing energy transfer and process efficiency.

- **cwu_spike**: a flag for a sudden increase in DHW demand, useful for modeling short and abrupt events.

- **hour_sin**: the sine of the hour of day, encoding daily cyclicity without an artificial jump between 23:00 and 00:00.

- **hour_cos**: the cosine of the hour of day, complementing the sine above and letting the model reconstruct the full daily phase.

- **month_sin**: the sine of the month, representing yearly seasonality in a continuous way.

- **month_cos**: the cosine of the month, which together with the month sine closes the cyclic representation of the seasons.

## **First approach**
My first approach was CatBoost. There were some categorical features and some numerical ones, and as you can see above, I had also added a few nominal features myself, so I decided that boosting trees might fit this world quite well. So right from the start I went all in with CatBoost using the following hyperparameters (without tuning):

```python
CatBoostRegressor(
	iterations=800,
	learning_rate=0.05,
	depth=6,
	loss_function="MAE",
	cat_features=CATEGORICAL_FEATURES,
	random_seed=42,
	verbose=100,
)
```

And as people say: boom, it landed, and hard, because our first model scored 0.0074 MAE. 0.0074!!! Man, that is really low... Especially for monthly aggregation and data with this kind of characteristics!

![First leaderboard result](first_leaderboard.png)

After that came a barrage of feature-engineering phases, wandering, and exploratory work. In summary, while fighting other teams that also ultimately reached similar results and eventually overtook us, our final move with CatBoost was to use Optuna to squeeze as much as possible out of it. We achieved an MAE of 0.0044. Each subsequent model was truly a fight, and I think getting that low with a tree model alone was a really solid achievement. Especially, to spoil things a little, because the Transformer is a much, much heavier architecture, so it is hard to compare the two models directly since they sit at opposite ends of efficiency and compute requirements. In the end, I still consider that result really good given our knowledge and experience.

## **Autobots, roll out**
When did we abandon our beautiful tree? First, when I truly felt that the next changes, attempts, and feature engineering were no longer moving the needle, or were changing things so little that we could not climb the ranking. Second, when the Transformers team beat us, which, in a way, inspired us...
After a short research phase, I decided to pull out the really, really heavy artillery: the Feature Tokenizer Transformer. You could say it is a fairly fresh architecture that has recently been gaining more and more popularity in Kaggle-style battles.
![FT-Transformer diagram from the source](Post hackathon -reviewed-3.png)

### The general idea and how the Feature Tokenizer Transformer works

The description below is based on the paper that introduced [the FT-Transformer](https://arxiv.org/abs/2106.11959). Of course, the images also come from the same source.

Let us start from the beginning. As we know, in our dataset and generally in tabular datasets, we mostly deal with two types of features: categorical, such as classes, and numerical, which represent concrete numeric values.

As we know, Transformers were widely used in natural language processing (NLP) in generative models such as GPT, or encoder-decoder models such as T5. So how do we make our architecture process not token embeddings from text, but categories and numbers at the same time?

### The main component: the Feature Tokenizer

That is exactly what the Feature Tokenizer component is responsible for. It is the jewel of this approach, and it works in two specific ways:

- **Numerical features:** here the matter is relatively simple -> we take our number, multiply it by a learned weight vector with the length of our output embedding, add a bias, and that is how our numerical value gets expanded to the given length, creating an embedding of the desired size.

- **Categorical features:** here it works similarly to text processing in NLP. Each feature value is first transformed into a one-hot encoding representation, and then multiplied by a weight matrix. In simple mathematical terms, this is basically the same as selecting a single row from that matrix.

One-hot encoding is a way of changing a categorical value into a binary sequence. It sounds strange, but it is actually very simple. A simple example: we have a "Color" feature in a motorcycle dataset. Suppose our dataset has two colors, red and black. If we put that into a vector, it could look like this: [Red, Black], so the first position represents red and the second one black. One-hot encoding is like turning on lights, so if we wanted to represent that the motorcycle is red, it would look like this: [1,0], and black would be [0,1]. Any other color, such as green in a Kawasaki, would get all zeros: [0,0].

All of our feature values are then concatenated into a large matrix T. On top of that, a randomly initialized [CLS] vector of the same length is added at the very beginning. The whole matrix is then processed and fed into our Transformer, so T represents one row in our table, naturally including that extra [CLS] vector. Here is what it looks like:

![FT-Transformer architecture](arch_ft_transformer.png)

But what is the point of [CLS]? CLS stands for Classification, and the main job of this vector is to collect information throughout the whole network from all layers.

Then, as you can see, our T vector with processed features goes into the Transformer, passes normalization, and then moves to the Multi-Head Self-Attention unit. This layer allows the model to extract the context needed to reach the result closest to the ideal one, and in our case that context is the other columns of the table, meaning the values in matrix T. And that context, among other things, is what gets stored in the [CLS] vector.

Why is it called **Multi-Head**? Just like in language models one head can catch grammar from text and another can catch emotion, here each head looks for a different context in our row of data. That way, at the same time, one head can track hard geographic dependencies (for example, consumption relative to voivodeship/operator), another can look for hidden technical relationships (pump model vs. consumption), and our [CLS] token gets a full, multidimensional picture instead of a single averaged mush.

At the very end, we throw away all rows of matrix T except our [CLS], which contains the essence, meaning all the information needed for further processing (in our case, predicting the actual consumption), and then it goes straight into classification/regression.

And that is basically the whole story, in a somewhat condensed form, of how all this works under the hood.

### Applying the FT-Transformer to our task

Theory is theory, but now it is time to explain how we adapted those Transformer blocks to our dataset.

So, in theory I said that numbers are simply multiplied by a weight vector. However, we went one step further, and as a result each numerical feature was processed before entering the Transformer by a small neural network, namely an MLP (Multi Layer Perceptron):

```python
nn.Sequential( nn.Linear(1, embed_dim // 2), nn.ReLU(), nn.Linear(embed_dim // 2, embed_dim), )
```

We did this because not all features have to affect the result linearly, so we decided to add a bit of non-linearity before the Transformer itself.

Categorical features were converted into embeddings in the standard way, as described above. The only addition was support for OOV, meaning Out of Vocabulary, in case a given operator or deviceType was unknown.
What happens next is the classic Feature Transformer. As for hyperparameters, we used:

- Embedding size: 64
- Multi-head attention heads: 8
- Transformer layers: 3
- Dropout: 0.1

After passing through all Transformer layers, we had a regression head:

```python
tokens = torch.cat([cls, x_num_tok, x_cat_tok], dim=1)
out = self.transformer(tokens)
return self.head(out[:, 0]).squeeze(-1)
```

`out[:, 0]` means extracting only the [CLS] token after the entire Transformer block. Then our [CLS] goes into the head (`self.head`), which is again a small network (LayerNorm, then ReLU, and finally Linear) and compresses this representation down to a single number. Additionally, in our context, a negative output makes no physical sense. That is why at the end we applied a hard domain constraint and clipped all values predicting consumption below zero.

### Training phase

A few words about how we approached training our model in general. We tried to do it efficiently, so we would not train our Transformer pointlessly or waste precious hackathon time. We had two main phases:

**Phase 1, a testing ground** Instead of training on everything, we made a hard cut in time at the beginning of February. The model trained on data before that date, and then we made it predict the future, meaning what happened after February 1. Why split by date instead of randomly? Because in the case of energy consumption, a random split would cause data leakage, meaning the model would see the "future" in order to predict the "past." In this phase we also added Early Stopping, so the model would stop training when it no longer improved. Of course, we saved all checkpoints. This phase told us what our real MAE was before we had sent anything to the organizers.

**Phase 2, full speed ahead** Once, after many tests in Phase 1, we made sure that our architecture (all those nonlinear tokenizers and hyperparameters) was stable, we moved on to Phase 2. The rule is simple: **more data = a better model**. In the end we removed the February 1 cutoff and fed the model absolutely all available historical training data. That heavily loaded and tuned model generated the final predictions that went into our submission file.

### A small tip at the end
It is also worth mentioning that the Transformer itself learned the scaled mean average x2 value using a StandardScaler. Neural networks generally like normalized values, so that probably also helped make the training of our FT-Transformer more stable and more effective. Before writing the predicted value to the output file, it was scaled back to the target values in the proper way.

![Final leaderboard result](leaderboard_task_3.png)

## **Summary**

So why could this work, and even, one could say, did work? Well, it is hard to say with 100% certainty, because very large and complex neural networks are kind of a black box. Certainly each of these pieces contributed a bit. But if I had to guess, I would put the main emphasis on that famous Multi-Head Self-Attention mechanism.
The main problem and challenge in this data was to extract reasonably universal knowledge from the autumn and winter months, when the heat pump usually runs at full power, and transfer it to summer consumption, when pump usage is much lower. In the FT-Transformer, the advanced contextual mechanism could model how strongly individual features affect the result and how specific attributes should be taken into account in special cases. On top of that, our nonlinear MLP that processed the numerical values could also enrich those features and give them a more concrete impact on the result. As we know, Transformers generalize very well, and I think that is what played the first violin in this task.
Still, credit has to go to the other teams that were right behind us. Even though the second team had a worse score than ours, we were probably the only ones who pulled such a heavy piece of machinery as a Transformer into this task. Other teams relied on tree-based regressors such as LightGBM, and given the difference in complexity between our architecture and theirs, they did a really great job. Still, we managed to take the lead, and we can be proud of our solution!

## **So... next year?**
Another EnsembleAI and another year of great fun for me. Huge thanks to the organizers for such an excellent event, and to my team DNS, meaning the Team of the Missing Szymon, consisting of:

- Jakub Hudziak
- Jakub Binkowski
- Maciej Kaszkowiak
- Maciej Mazur
- and of course me :D

We brought the fire, guys, and I hope it was not for the last time! I probably keep repeating myself, but every time I say this I mean it honestly. So, see you next year?
