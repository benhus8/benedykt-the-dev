---
title: SpeedDatingMatcher – Event Management with Django and Next.js
description: A system for organizing speed dating events
slug: speeddating-matcher
date: 2025-02-23 00:00:00+0000
image: cover.png
categories:
  - Project
tags:
  - Django
  - Next.js
  - Brevo
  - Python
  - Docker
---

## Where Did the Idea Come From?
I am lucky to have my sister Róża, who studies at the Medical University of Białystok. Moreover, not only does she study there, but she also runs the university magazine – [Młody Medyk](https://www.instagram.com/mlodymedyk_/). For about two years, the student organization under Róża's leadership has been organizing speed dating events. And this is exactly where the problem arose, which the future Doctor brought to me. As a mature developer, I decided to roll up my sleeves and solve it.

## What is SpeedDatingMatcher?

**SpeedDatingMatcher** is an event management system specifically designed for adding participants, their preferences (willingness to contact after the event), and sending emails with contact information to selected people. The application handles email communication through integration with **Brevo**. The first edition was deployed on **Microsoft Azure**, but honestly, I wasn't fully aware of all the SSR properties, and the whole endeavor ended with considerable frustration with Azure, although I eventually managed to deploy the system on it.

In this year's edition of the application (2025), I opted for a more civilized approach: **VPS** with **Docker** and **nginx**. I also had access to a **Free Tier AWS EC2** server, but since I was planning to create this blog in the near future, I decided to purchase server access right away.

## Features
The main task of the application was not only sending emails but also **automatically matching people** participating in the event. That is:
if a person with number 3 wanted to contact numbers 2 and 1, then before sending the email, I needed to check if both person 2 and 1 also wanted to contact number 3. Only if there is a **mutual preference**, the email is sent. This situation is illustrated by the following graphic:

![Graph showing preference matching](/persons_preferences.png)

It is clearly visible that the email is sent only when a **cycle of length 2** is found in the graph.

Ultimately, the application enables:

- **Managing speed dating events** – Comprehensive management of participants and meetings.
- **Email validation** – Ensuring that all provided email addresses are correct.
- **Integration with Brevo** – Automatic sending of notifications and reminders to participants.

Additionally, thanks to **Django**, it's easy to create and manage users.

## Tech Stack
- **Django** – Backend and database management.
- **Next.js** – Fast frontend with server-side rendering capabilities.
- **Brevo** – Integration for sending emails.
- **BeautifulSoup4** – Dynamic modification of HTML email templates.
- **Microsoft Azure** – Cloud hosting for the first version.
- **Docker** – Containerization of solutions.
- **Nginx** – Reverse proxy on the VPS server.

## Summary
Honestly, this was my **first serious project** realized outside of work. I would be lying if I said that planning the architecture, selecting technologies, and writing the solution didn't give me immense joy and didn't awaken my developer's soul.

Thanks to this project, I had the opportunity to **test my ideas** and also **get familiar with SSR, Django, and Azure**.

I co-created the project with [Maciek](https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/), which provided an opportunity to **manage tasks**, divide them, and conduct **mutual Code Review**.

Want to learn more? Check out the **repository on [GitHub](https://github.com/benhus8/SpeedDatingMatcher)**.