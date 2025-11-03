---
title: MLA-C01, or How I Passed the Machine Learning Engineer - Associate Exam
description: A story in 3 acts + AI-generated images
slug: aws-mla-c01
date: 2025-11-03 12:00:00+0000
image: cover.png
categories:
  - AWS
  - Certification
tags:
  - AWS
  - Cloud
  - MLA-C01
  - Exam
  - Learning
---

# MLA-C01: How I Passed the Machine Learning Engineer - Associate Exam

## Beginnings

I recently managed to successfully pass my first cloud-related certification. I chose the AWS Machine Learning Engineer - Associate, and honestly, the decision to take this specific certification was a pretty crazy choice :D. Why? I previously knew AWS architecture at a very basic level. I learned a bit of it while creating my engineering thesis in collaboration with OLX. I had the opportunity to use services like Cognito, S3, Translate, and a few models from Bedrock. I knew literally nothing about concepts like VPC or IAM, which is quite natural, as I simply didn't need them while developing the project.

But back to the point, why THIS certification? Well, an announcement appeared at work that you could take part in a course, and completing it would grant a voucher for the exam. At that moment, I had a subject at university closely related to concepts like MLOps (Machine Learning Operations), which showed me how much I enjoy this topic, and in fact, it fascinates me (shout-out to Janek, our instructor ;)). And just like that, I didn't hesitate for long, filled out the form in a few seconds, and finally found myself on the list of course participants.

I think the course was quite valuable. I don't remember exactly what topics were covered in the lecture part, but each of our meetings ended with labs where we could work and play with SageMaker (a platform for building, training, and deploying models), among other things. I believe this was valuable, definitely from a practical standpoint, and you know, processing and running models on SageMaker is quite expensive, so I didn't have many opportunities (a round zero) to use it before. After the course, I received the voucher, and this is where my rather long journey to the exam began.

## Preparations

First off, I'd like to point out that I consider the first semester of my Artificial Intelligence specialization to be one of the toughest during my entire studies: there were tons of projects, the exams weren't the easiest, and all this was accompanied by a 3/4-time job. In one word: a wild ride. That's why, finishing the course in April, I decided to postpone the exam date to June – back then, it seemed to make a lot of sense to me. Without further ado, let's jump to June.

In June, after the exam session ended (with no retakes), I realized I had absolutely no energy after work (now full-time) to also sit down and cram for the exam, so I moved my studying to July.

And in July, you know, summer holidays... ah, gotcha ;) In July, I really started preparing, and speaking of preparations, I'm dropping the form of my beloved diary and switching to a more substantive tone, so that everyone who came here for the "meat" – i.e., how to pass the MLA-C01 exam – knows how I managed to do it.

![These AI photos are getting better and better...](plan.png)


## How did I study for the exam?

The most important discovery and something that helped me a lot was the [AWSCertifications](https://www.reddit.com/r/AWSCertifications/) group on Reddit. In short: it's a hub for people who are taking, have passed, or are studying for their AWS exams. You can find literally everything on this topic there, from notes to tips on how to answer and analyze questions. New posts appear there daily, so I recommend reading the experiences of the many people who have already gone down the same path.

After reading, I had my first conclusion: I needed to start with Stephane Maarek's courses on Udemy. So I did, and I watched about 24 hours of lectures covering the entire scope of the exam. From data processing to deploying models on SageMaker. At first, I tried to take my own notes, and that certainly would have been valuable, but I'll point out that I knew nothing, and everything I heard was new to me. What's more, it wouldn't have taken 24 hours, but probably twice that. After a few sections, I stopped and decided to just absorb the knowledge as it came and understand as much as possible. So I recommend this step to everyone; I listened to these lectures not only by watching them attentively but sometimes while preparing dinner, and it seems that even in that form, something stuck in my head.

It's worth noting (this is something I learned from Reddit) that Stephane Maarek took some sections, like data processing, from other, more advanced exams. Sometimes the knowledge is highly detailed, maybe even too much for the Associate level (there are 4 main levels of AWS exams, from the easiest to the hardest with the most details: Practitioner, Associate, Specialty, Professional). Nevertheless, after the exam, I believe it's better to know more than less, because some questions were really very detailed. Additionally, there's also a segment on popular architectures, and the Transformer architecture is discussed – you can definitely skip this, and I recommend it if you're in a hurry. If not, it's always good to broaden your horizons.

After the lectures, I took another course from Stephane Maarek - Practice Exams. Three full practice exams that are really difficult. Fresh after watching the lectures, I scored: 66%, 67%, and 70%. And to pass the exam, you need 72%. Even though the results weren't the best, it was from these practice exams that I learned and remembered the most. Why? Because I guess that's how I operate, and even though they were still multiple-choice questions, they have a very practical feel. So, we analyze which solutions are best for a given "story," e.g.: Company A wants to host a model, they want to do it as cheaply as possible, but they must pay attention to the fact that there are sudden, unpredictable spikes in their application's traffic – what must they use? And with each subsequent question, we analyze and learn which AWS solution is best to apply, what its specifics are, and, of course, the price.

I liked this format, and even though it was quite difficult at first, it was much better for me than listening to dry lectures (although I still recommend doing that). I also recommend paying attention to the pure Machine Learning aspects: regularization, overfitting, metrics, or even quantization or fine-tuning, like LoRa.

![This is exactly how I imagine the AWSCertifications community on Reddit - hundreds, if not thousands, of AWS enthusiasts from all over the world](reddit.png)

After going through the tests, I still didn't feel confident, and since learning from mistakes turned out to be effective for me, I decided to look for more tests. And this is where Tutorials Dojo comes in - a nice refresher, but the tests are significantly easier than the real exam and Maarek's tests. There were a few interesting and unconventional questions, but I think they are worth doing to explore your knowledge and learn more service use cases, rather than for real preparation for the questions on the original exam. Nevertheless, I would still do them, just in a different order: Maarek's Lectures, Tutorials Dojo Questions, and finally, as the "final boss," Maarek's Exams.

After completing the TD (Tutorials Dojo) exams, I returned to Maarek's exams (about 2 months had passed since I first did them, you know, vacation and such...) and on the second attempt, I scored: 81%, 86%, and 81%. During this next attempt at these exams, I took comprehensive notes, both on the questions I got wrong and also the correct ones, because sometimes you "feel" the answer but aren't sure - it's worth analyzing those too, understanding them, and gaining certainty in your choice.

After that, I signed up for the exam, and in the few days leading up to it, I only read Maarek's full presentation and my own notes. On the exam, I had an extra 30 minutes of accommodation because I'm not a native English speaker, and I must say, it came in pretty handy. During the first pass through the questions, I didn't waste much time and marked the answer I felt and understood the most. This allowed me to complete two such passes within the time limit. The second one was calm, analyzing each question thoroughly, which allowed me to rethink my answers and finally change 7-8 of them, as I discovered a few keywords in both the answers and the questions. And so, about 11 hours after the exam, I got a message that I had passed with a score of 818, and I'm quite proud of it (as well as the badge I received from AWS).
{{< figure src="badge.png" alt="AWS badge" width="150" >}}
I would summarize the exam itself in one word: tricky. Many answers seem correct but have one little word that completely changes their meaning. It was the same with the questions. So, I recommend decomposing the questions in your head into their components, finding out what the exact requirements are, what you want to achieve, and what to focus on.

## What now?

To everyone who is studying, I wish you good luck! For those who didn't pass, I hope my path helps you conquer the exam on your second try, and to the rest – thanks for reading this post! If you have any questions, write to my email or social media. I'll be happy to answer questions and help as best I can. At the bottom, I'm adding a section for people who just want a brief summary of how my studies went. Now, as always, the question remains: what will occupy my mind next...?

## How I managed to pass MLA-C01 (TL;DR version)

* I started on Reddit: I browsed [AWSCertifications](https://www.reddit.com/r/AWSCertifications/). A great way to see how others studied and what tips they have.
* Stephane Maarek's Lectures (Udemy): First, I watched the entire course (~24h). At this stage, I was mainly absorbing knowledge to get the big picture.
* Tutorials Dojo Tests: I did these third but i recommend do it as a second step. They were good for learning more service use cases, but I felt they were easier than the real exam.
* Stephane Maarek's Practice Tests (Udemy): This was the "final boss" for me and the most important stage. These tests are really hard (my first scores were 66-70%), and I learned the most from them.
* The key to success (for me): While taking tests, I took very detailed notes. I analyzed not only the questions I got wrong but also the ones I answered correctly (especially if it was a "gut feeling"). The point was to truly understand why a particular option was the best. This allowed me to gain knowledge, memorize, and understand the concepts.
* Recommended order: Maarek's Lectures -> Tutorials Dojo Tests -> Maarek's Tests + taking in-depth notes.
* Before the exam: I only reviewed my own notes and the slides from Maarek's course.
* On the exam: I read the questions very carefully. They are "tricky." I broke them down in my head into requirements, looked for keywords, and did two passes through all the questions.