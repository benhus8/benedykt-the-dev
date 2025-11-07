---
title: MLA-C01, or How I Passed the Machine Learning Engineer - Associate Exam
description: A story in 3 acts + AI-generated images
slug: aws-mla-c01-en
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
  - Studying
---

# MLA-C01: How I Passed the Machine Learning Engineer - Associate Exam

## The Beginning

I recently managed to successfully pass my first cloud-related certification. I landed on the AWS Machine Learning Engineer - Associate, and honestly, deciding to take this specific exam was a pretty crazy choice :D. Why? Because I previously knew AWS architecture at a very basic level, which I had the chance to learn while creating my engineering thesis in collaboration with OLX. Back then, I had the opportunity to use services like Cognito, S3, Translate, and a few models from Bedrock. I knew literally nothing about concepts like VPC or IAM, which is, of course, pretty natural, as I simply didn't need them while developing my project.

But getting back to it, why THIS specific certificate? Well, an announcement popped up at work that you could take part in a course, and completing it would get you a voucher for the exam. At that exact moment, I was taking a subject at university closely related to concepts like MLOps (Machine Learning Operations), which showed me just how much I enjoy this topic—in fact, it fascinates me (shout-out to Janek, our instructor ;)). And just like that, I didn't hesitate for long. I filled out the form in a few seconds and, in the end, found myself on the list of course participants.

I think the course was quite valuable. I don't remember the exact topics covered in the lecture part, but every meeting ended with labs where we could mess around with, among other things, SageMaker (the platform for building, training, and deploying models). I found this valuable from a practical standpoint, and, you know, processing and running models on SageMaker is pretty expensive, so I hadn't had many opportunities (a big fat zero) to use it before. After the course, I received the voucher, and this is where my rather long road to the exam began.

## The Preparation

I want to start by saying that I consider the first semester of my Artificial Intelligence specialization to be one of the toughest of my entire studies: there were a ton of projects, the exams weren't the easiest, and all of this was accompanied by a 3/4 time job. In one word: a wild ride. That's why, finishing the course in April, I decided to postpone the exam date to June—back then, it seemed to make a lot of sense. Without further ado, let's jump to June.

In June, after finishing the exam session (with no retakes), I realized I had absolutely no energy after work (now full-time for the summer) to sit down and cram for the exam, so I pushed my studying to July.

And in July, you know how summer is... ah, gotcha ;) In July, I really did start preparing. And since we're talking about preparations, I'm ending my dear diary format and switching to a more substantive tone, so that everyone who came here for the "meat"—i.e., how to pass the MLA-C01 exam—will know how I did it.

![Music has always played an important role in my life, and I'll be honest, no song gets me in the mood to study like "Gospel" by the March Fourth Marching Band. If that tune rings a bell, I'll give you a hint - Mike Wazowski. No? Ehh, how can you not know such widely known cinema? I'm talking about "Monsters University," and the track plays right when Mike is studying for his monster exams. Doesn't this graphic look just like a frame from when "Gospel" is playing? For me, it definitely does!](plan.png)

## How I Studied for the Exam

The most important discovery, and something that helped me immensely, was the [AWSCertifications](https://www.reddit.com/r/AWSCertifications/) group on Reddit. In short: it's a goldmine of people who are taking, have passed, or are studying for their AWS exams. You can find literally everything on the topic there, from notes to advice on how to answer and analyze questions. New posts appear there daily, so I recommend reading through the experiences of the many people who have already walked this same path.

After reading, I had my first conclusion: I had to start with Stephane Maarek's courses on Udemy. And so I did. I watched about 24 hours of lectures covering the entire scope of the exam, from data processing to deploying models on SageMaker. At first, I tried to take my own notes, and that would have been valuable, but I'll point out that I knew nothing, and everything I heard was new to me. What's more, it wouldn't have taken 24 hours, but probably twice that. After a few sections, I stopped and just decided to absorb the knowledge as it came and understand as much as I could. So I recommend this step to everyone. I listened to these lectures not only by watching them intently but also sometimes while making dinner, and I feel like even in that format, something stuck in my head.

It's worth noting (this is something I learned from Reddit) that some sections, like data processing, Stephane Maarek took from other, more advanced exams. Sometimes the knowledge is very detailed, maybe even too detailed for the Associate level (there are 4 main levels of AWS exams, from easiest to hardest with the most detail: Practitioner, Associate, Specialty, Professional). Nevertheless, after taking the exam, I think it's better to know more than less, because some questions were indeed very detailed. Additionally, there's a segment on popular architectures where the Transformer architecture is discussed—you can definitely skip that, and if you're in a hurry, I recommend it. If not, it's always good to broaden your horizons.

After the lectures, I took another course from Stephane Maarek - Practice Exams. Three full practice exams that are genuinely difficult. Fresh off watching the lectures, I scored: 66%, 67%, and 70% respectively. And to pass the exam, you need 72%. Even though the results weren't the best, it was from these practice exams that I learned and remembered the most. Why? Because I guess that's just how I work. Even though they were still multiple-choice questions, they have a very practical feel. You analyze what the best solution is for a given "story," e.g.: Company A wants to host a model, they want to do it as cheaply as possible, but they must account for sudden, unpredictable spikes in their application's traffic—what should they use? And with each question, you analyze and learn which AWS solution is best for the job, what its specifics are, and, of course, its cost.

I liked this format, and even though it was quite hard at first, it was much better for me than listening to dry lectures (although I still recommend doing those). I also recommend paying attention to the purely Machine Learning aspects: regularization, overfitting, metrics, or even quantization and fine-tuning, like LoRa.

![](reddit.png)

After finishing those tests, I still didn't feel confident, and since learning from my mistakes proved to be effective for me, I decided to look for more tests. And this is where Tutorials Dojo comes in—a nice refresher, but the tests are significantly easier than the real exam and Maarek's tests. There were a few interesting and unconventional questions, but I think they are worth doing more for the sake of exploring knowledge and learning other service use cases than for actual preparation for the questions on the original exam. Nevertheless, I would still do them, just in a different order: Maarek's Lectures, then Tutorials Dojo's Questions, and finally, as the final boss, Maarek's Exams.

After doing the TD (Tutorials Dojo) exams, I went back to Maarek's exams (about 2 months had passed since I first did them, you know, vacation and stuff...) and on the second attempt, I scored: 81%, 86%, and 81%. During this second pass, I took comprehensive notes, both on the questions I got wrong and on the correct ones. Because sometimes you just *feel* the answer but aren't 100% sure—it's worth analyzing those too, to understand them and gain certainty in your choice.

After that, I scheduled my exam. For the few days leading up to it, I only reviewed Maarek's full presentation and my own notes. I had an extra 30-minute accommodation for the exam because I'm not a native English speaker, and I won't lie, it came in pretty handy. During my first pass through the questions, I didn't waste much time and just marked the answer that I felt and understood the most. This allowed me to get through two full passes in the allotted time. The second pass was much calmer, analyzing each question heavily, which allowed me to rethink my answers and ultimately change 7-8 of them after I discovered a few keywords in both the answers and the questions. And so, about 11 hours after the exam, I got a message that I passed with a score of 818, and I'm quite proud of it (just as I am of the badge I received from AWS).
{{< figure src="badge.png" alt="AWS badge" width="150" >}}
I'd summarize the exam itself in one word: **tricky**. Many answers seem correct but have one little word that totally changes their meaning. It was the same with the questions. So, I recommend decomposing the questions in your head into their components, figuring out what the exact requirements are, what you want to achieve, and what to focus on.

## LLMs in the Learning Process

I think it's also worth mentioning how I used AI while studying. On the aforementioned Reddit, there are a ton of threads on this topic, and as they say, "opinions are divided."

If I had to summarize how I used AI in one sentence, it would be the word: **Why?**
If a practice test had an explanation, but I felt it wasn't enough, I would go to Gemini or ChatGPT with that exact question. At first, I double-checked if their answers matched the AWS documentation, but after a while, I stopped, because the answers were correct time after time.
I think it's great to use these tools in exactly this way—for illustrating, describing, and explaining concepts better. For showing use cases or giving simple examples.

What's important is that **I never once used LLMs to just give me the correct answer to a question**. I preferred to choose the most logical option myself (even if it was wrong) and only *afterward* ask the AI for an explanation. And this method worked brilliantly for me.

## What Now?

To everyone who is studying, I wish you good luck! For those who didn't pass, I hope my path helps you conquer the exam on the second try. And to everyone else—thanks for reading this post! If you have any questions, write to me via email or on my socials. I'm happy to answer questions and help as best I can. Below, I'm dropping a section for people who just want the short version of how I studied. Now, as always, the question remains: what will occupy my mind next...?

## How I Passed MLA-C01 (TL;DR Version)

* **Started on Reddit:** I browsed [AWSCertifications](https://www.reddit.com/r/AWSCertifications/). Great stuff for seeing how others studied and what tips they have.
* **Stephane Maarek's Lectures (Udemy):** First, I watched the entire course (~24h). At this stage, I was mainly absorbing knowledge to get the big picture.
* **Tutorials Dojo Tests:** I did these third, but I recommend doing them second. They were good for learning more service use cases, but I felt they were easier than the real exam.
* **Stephane Maarek's Practice Exams (Udemy):** This was the "final boss" for me and the most important stage. These tests are really hard (my first scores were 66-70%), and I learned the most from them.
* **My Key to Success:** While doing the tests, I took very detailed notes. I analyzed not only the questions I got wrong but also the ones I got right (especially if it was just a "gut feeling"). The goal was to truly understand *why* a specific option was the best. This allowed me to gain knowledge, remember it, and understand the concepts.
* **Recommended Order:** Maarek's Lectures -> Tutorials Dojo Tests -> Maarek's Tests + taking in-depth notes.
* **Before the Exam:** I reviewed only my own notes and the slides from Maarek's course.
* **On the Exam:** I read the questions very carefully. They are "tricky." I broke them down in my head by requirements, looked for keywords, and did two full passes through all the questions.