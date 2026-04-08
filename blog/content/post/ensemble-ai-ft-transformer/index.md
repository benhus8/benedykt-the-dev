---
title: Transformers Cutting Down Trees - EnsembleAI 2026
description: How a Transformer swallowed 65 million rows and took 1st place out of 45 teams
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

## Prologue
No excuses, I took a long time to write this post. Post-hackathon fatigue can hit hard, and describing what we managed to achieve during those 24 hours is no small challenge, because there were many attempts and many different approaches. But now, looking through the train window on my way from Suwalki to Poznan, I can feel the writing flow taking over, just like a Windows update on a random Tuesday at 12:40.

Imagine a table with 65 million rows. I know that is hard to picture, so here is some help: 65 million rows in Times New Roman is about 1,300,000 A4 pages.

Now imagine reading those 1,300,000 pages and then predicting energy consumption from them. Not exactly easy. So as we all know, for this kind of challenge the first thing we usually reach for is decision trees. We did the same at first. But after a few hours we decided to do something completely different and used a model that was originally designed for almost the opposite kind of task, and only recently started being adapted to many other domains. Come along if you want to see a forest of regression trees first, and then I will tell you how that one crazy experiment brought us **1st place out of 45 teams in this task**, and why sometimes it is worth throwing the safe instruction manual out the window.

## **A short intro to the EnsembleAI hackathon format**
To understand the emotions my team and I felt during this fierce battle, we need to start with the hackathon format, because it is at least unusual and gives dopamine hits stronger than Instagram Reels.
Each of the 4 tasks is scored separately, and points are assigned based on submitted solutions specific to each task. In task 3, which I worked on, that was for example a CSV file with predictions of monthly energy consumption for a given time interval. Because of this setup, the leaderboard page was the central place of the hackathon, where each position in a task translated into points.
Submissions could be sent only at predefined intervals, among other reasons to avoid DDoS-ing the servers. So after every upload there was always a tense waiting period: did our solution improve the ranking, and by how much?
![Meme about waiting for results](meme.png)

## **But maybe from the beginning: what, how, where, and why?**
The task was defined by one of the hackathon partners, Euros Energy, which also provided the data. So what was it about? In the problem statement, we got a clear picture of how mass electrification is a milestone for Poland's energy transition. But for energy distributors, the fast growth in heat pumps creates major challenges. That is why accurate demand forecasting is essential to prevent grid overloads and, as a result, failures.

## **The data we got**
When we talk about machine learning and prediction, it would be a shame not to start with the data, so let us do exactly that. Each team had access to 3 main datasets:

- Train: October 2024 - April 2025
- Validation: May 2025 - June 2025
And also:
- Test: July 2025 - October 2025

We made predictions on that last dataset for every submission, but here comes the twist that decided everything. It was the familiar Kaggle mechanism: Public vs Private Leaderboard. The Test set was technically available to everyone, but... it did not include our "y" target. So there was no way to retrain on it or verify results on our own.

For the full 24 hours, we were fighting "in the dark," seeing results only for a small slice of the data on the board. But those points did not carry the final weight in the overall ranking. The final score deciding the podium was computed on the remaining, fully hidden part of Test, and nobody knew those results until the very end. That made the last minutes of the hackathon pure emotional lottery, because summer behavior could be very different from the autumn-winter period we mostly trained on.

In short: in the end we had around 600 sensors sending logs every 5 minutes in the periods above, which gave us around 65 million rows (10.42 GB!) to analyze.

## **Goal**
Short and simple: the prediction target was not instantaneous power, but the monthly average value of the grid load indicator (x2) for each device. So we moved from high-resolution data (readings every 5 minutes) to monthly aggregates. Below is the exact formula from the task description:

![Prediction target formula](prediction_target_hck.png)

And the metric on both the _live_ and final leaderboard was MAE:

![MAE as the evaluation metric](mae.png)

So, time to describe our efforts and the road that took us straight to 3rd place in the whole hackathon.


## **Feature engineering and data preprocessing**
At the start, of course, we had to inspect the data and distributions closely, and that is what I did. But even before that, at the very end of the organizer instructions, we found this section:

![Instruction section about DoS](dos.png)

At that point I thought we should start from there and add information to each sensor about which energy distributor it belongs to. Surely every team would do that, right? Right?? Well, in the end it turned out they did not :D and who knows, maybe that gave us those extra points.

The data included latitude and longitude for every sensor, so based on that I decided to locate each device in a specific voivodeship by querying the GeoPy API. It turned out the data was probably anonymized or contained errors, because some locations were incorrect and GeoPy could not find the right place. In those cases, we used KNN to find the nearest sensor that was correctly located and had an assigned operator. Then a mapping assigned each voivodeship to one of the distributors such as PGE, Enea, or Tauron, and that gave us our first interesting feature.
Another important aspect was data aggregation. There was a lot of data, enough to overwhelm many models, so we chose hourly aggregation. It seemed to significantly reduce dataset size, remove noise from 5-minute logs, create room for pattern detection, and still remain a useful prediction unit.


Overall, the problem was quite interesting because at first I approached it as a time-series prediction task. But after deeper thought, this is really a **plain regression problem**. Sure, measurements come every 5 minutes, but the target is MONTHLY! That is a strong aggregation, and as my university professor would say: we clearly need the sharpest axe possible for this prediction, not a scalpel. Plus, a fairly universal axe that can connect important features in autumn and then apply those insights in summer too.

## **First approach**
My first approach was CatBoost. We had some categorical and numerical features, so I decided boosting trees could fit this world quite well. So we went full speed with CatBoost and the following hyperparameters (without tuning at that point):
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
And as they say: boom. It hit hard, because our first model got 0.0074 MAE. 0.0074!!!! That is really tiny... especially with monthly aggregation and this data profile.

![First leaderboard result](first_leaderboard.png)

Then came a barrage of feature-engineering rounds, exploration, and trial-and-error. In the end, while fighting other teams that reached similar results and eventually overtook us, our last CatBoost step was Optuna to squeeze as much as possible out of it. We got MAE = 0.0044. Every model iteration was a real battle, and I still think getting that value from a tree model alone was a strong result. Especially because, slight spoiler, Transformer is a much heavier architecture, so it is hard to compare the two directly since they sit at opposite ends of efficiency and compute requirements. Still, I consider that result really good given our knowledge and skills.

## **Autobots, roll out**
When did we abandon our beautiful tree? First, when I felt that further changes, attempts, and feature engineering were no longer moving the needle, or moved it too little to climb higher. Second, when the Transformers team beat us and, in a way, inspired us.
After a short research phase, I decided to bring truly heavy artillery: Feature Tokenizer Transformer. It is a relatively fresh architecture that has recently become more and more popular in Kaggle competitions.

![](ja_i_transformer.png)

### General idea and mechanism of Feature Tokenizer Transformer

The description below is based on the paper that introduced [FT-Transformer](https://arxiv.org/abs/2106.11959). The images also come from the same source.

From the top: in our dataset, and in tabular datasets in general, we mostly deal with two types of features: categorical and numerical.

As we know, Transformers were widely used in NLP in generative models like GPT, or encoder-decoder models like T5. So how do we force this architecture to process not token embeddings this time, but categories and numbers together?

### Main component: Feature Tokenizer

This is exactly what the Feature Tokenizer does. It is the key gem of this approach, and it works in two specific ways:

- **Numerical features:** relatively straightforward -> we take a scalar, multiply it by a learned weight vector with embedding-size length, add bias, and that scalar gets stretched into an embedding of the target size.

- **Categorical features:** similar to NLP token handling. Each feature value is first transformed into a _one-hot encoding_ representation, then multiplied by a weight matrix. In short math terms, this is selecting a specific row from that matrix plus, of course, bias.


>_One-hot encoding_ means changing a categorical value into a binary vector. Sounds weird, but it is simple. Example: we have a feature "Color" in a motorcycle dataset. Suppose there are two colors: red and black. In vector form, that is `[Red, Black]`, so red is first position, black second. The one-hot representation is like turning lights on, so red is `[1,0]`, black is `[0,1]`.

All feature values are concatenated into a large matrix **_T_**. Then on top of it we append a randomly initialized `[CLS]` vector with the same length. Next, the entire matrix is processed and passed into the Transformer, so **_T_** represents one row in our table (including that extra `[CLS]` vector). Diagram below:

![FT-Transformer architecture](arch_ft_transformer.png)

But why `[CLS]`? CLS stands for _Classification_, and the main role of this vector is gathering information across all layers during the forward pass.

Then, as you can see, our **_T_** vector with processed features goes into the Transformer, passes normalization, and then goes to _Multi-Head Self-Attention_. This layer lets the model discover the context needed to get a result closest to ideal. In our case, context means other columns in the table, so values from matrix **_T_**. That context is what, among other things, gets accumulated in `[CLS]`.

And why **Multi-Head**? Similar to language models where one head can capture grammar and another emotion, here each head looks for a different context in our data row. That means one head can track hard geographic dependencies (for example, consumption vs voivodeship/operator), another can search for hidden technical relations (pump model vs consumption), and `[CLS]` receives a full multidimensional picture instead of one averaged mush.

Finally, we discard all other rows from matrix **_T_** except `[CLS]`, which carries the core information needed for downstream processing (in our case, predicting specific consumption), and that goes straight into classification/regression.

That is the extended short version of how the whole thing works under the hood.

##  Applying FT-Transformer in our task

###  Final feature engineering
During those 24 hours I tested many feature ideas, often asking an LLM if it had interesting suggestions. So here is what we added and finally used to train our Transformer, though some of these features were also used for CatBoost.
- **deviceType** helps the model capture differences in operating behavior.

- **x3** is an additional categorical feature carrying information about heating curve type.

- **operator** lets the model account for differences from operating conditions and policies.

- **voivodeship** adds geographic context affecting climate and system seasonality.

- **device_operator_combo** captures interactions specific to a given device-operator pair.

- **t1_mean-t13_mean** is the average value of signals t1-t13 in a time window, describing typical level.

- **t8_max** is the maximum of t8, describing extreme peaks and high-load episodes.

- **t8_std** is the standard deviation of t8, measuring signal variability.

- **t7_max** is the maximum of t7, indicating short extreme system states.

- **t4_min** is the minimum of t4, useful for detecting deep drops.

- **delta_load** is the change in load over time points, capturing system dynamics.

- **delta_source** is the change on the source side, potentially reflecting switches or power condition jumps.

- **cwu_demand** is DHW demand, directly affecting system operation.

- **delta_temp_out_in** is output-input temperature difference, describing energy transfer and process efficiency.

- **cwu_spike** is a flag for sudden DHW demand increase, useful for short and abrupt events.

- **hour_sin** is sine of hour-of-day, encoding cyclic time without artificial jump between 23:00 and 00:00.

- **hour_cos** is cosine of hour-of-day, complementing the above and reconstructing full daily phase.

- **month_sin** is sine of month, representing yearly seasonality continuously.

- **month_cos** is cosine of month, closing cyclical season representation together with month_sin.


### Under the hood: network, head, and hyperparameters
Theory is theory, but now let us move to how we adapted these Transformer blocks to our dataset.

In theory, numbers are linearly projected by learned vectors. But we went one step further: each numerical feature was first processed before entering Transformer by a small neural network, namely MLP (Multi Layer Perceptron):
```
nn.Sequential( nn.Linear(1, embed_dim // 2), nn.ReLU(), nn.Linear(embed_dim // 2, embed_dim), )
```
We did this because not all features influence the result linearly, so we injected some nonlinearity before Transformer input.

Categorical features were embedded in the standard way described above. The only addition was OOV slots (Out of Vocabulary), in case an operator or deviceType was unseen.
What happens next is the classic Feature Tokenizer Transformer described earlier. Hyperparameters we used:
- Embedding size: 64
- Multi head attentions: 8
- Transformer layers: 3
- Dropout: 0.1

After data passes all Transformer layers, we reach the final part, the regression head. The idea is simple: from the whole matrix we extract only the specific [CLS] vector mentioned earlier. Why this one? Because thanks to attention, it has absorbed information from all other columns and carries a condensed representation of the full row.

The remaining vectors (for example region-related) are simply cut off because they already did their job. Our [CLS] goes into a tiny neural head made of normalization layer and ReLU activation, which finally compresses all those complex numbers into one final value.

At the very end, we also added a hard safety guard. Since we predict energy consumption, negative values make no physical sense, so we clipped everything below zero to prevent nonsense outputs.

### Training phase

A few words about how we approached model training overall. We wanted to do it efficiently, without pointless Transformer training and without wasting precious hackathon time. We had two main phases:

**Phase 1, the test ground** Instead of training on everything, we made a hard time cut at the beginning of February. The model trained on data before that date and then predicted the future, what happened after February 1. Why date split and not random? Because for energy consumption, random split would cause data leakage, meaning the model would see the "future" to predict the "past." In this phase we also added Early Stopping so training stopped when improvement stalled. Of course, we saved all checkpoints. This phase gave us realistic MAE before submitting anything to organizers.

**Phase 2, full speed ahead** After many tests in Phase 1 confirmed architecture stability, we moved to Phase 2 -> **more data = better model**. At the end we removed the February 1 cutoff and fed all available historical training data. This heavily fed and tuned model generated final predictions that went into our final _submission_ file.

### Small tip at the end
It is worth mentioning that the Transformer learned a scaled mean average x2 value using StandardScaler. Neural networks generally like normalized values, so this likely added another brick to more stable and efficient FT-Transformer training. Right before saving predicted values to output, predictions were properly inverse-scaled to target values.

![Final leaderboard result](leaderboard_task_3.png)
##  Epilogue

So why could this work, and now we can say it **did work**? It is hard to say anything with 100% certainty, because large and complex neural networks are still kind of black boxes. Surely each of the listed practices helped a bit. But if I had to pick one thing with bigger impact, I would point to the famous _Multi-Head Self-Attention_ mechanism.
The main challenge in this data was extracting universal knowledge from autumn-winter months, when heat pumps typically run at high load, and transferring that knowledge to summer consumption, when usage is much lower. In FT-Transformer, the context mechanism could model how strongly features affect output and how much specific attributes should be considered in special cases. On top of that, our nonlinear MLP that processed numerical values could enrich these features and assign more meaningful influence. As we know, Transformers can generalize well, and I believe that was the first violin in this task.
Still, credit goes to the teams right behind us. Even though the second team had a worse result than ours (by over 50%), we were probably the only team that pulled out such heavy artillery as Transformer for this task. Other teams used tree regressors like LightGBM, and considering the complexity gap between our architecture and theirs, they did a really great job. Still, we managed to take the lead, and we can be proud of our solution.

## So... next year?
Another EnsembleAI and another time I had an amazing experience. Huge thanks to the organizers for such a great event and to my DNS team (Team of Missing Szymon), in this lineup:
- [Jakub Hudziak](https://www.linkedin.com/in/jhudziak/)
- [Jakub Binkowski](https://www.linkedin.com/in/jakub-binkowski-80136825b/)
- [Maciej Kaszkowiak](https://www.linkedin.com/in/maciej-kaszkowiak/)
- [Maciej Mazur](https://www.linkedin.com/in/maciej-mazur-90064b2b4/)
- and of course me :D

We brought the fire, guys, and I hope not for the last time. I may be repeating myself, but I mean it every single time. So, see you next year?
