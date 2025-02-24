---
title: SpeedDatingMatcher – Event Management z Django i Next.js
description: System do organizacji wydarzeń speed datingowych
slug: speeddating-matcher
date: 2025-02-23 17:00:00+0000
image: cover.png
categories:
  - Projekt
tags:
  - Django
  - Next.js
  - Brevo
  - Python
  - BeautifulSoup4
  - Docker
---

## Skąd wziął się pomysł?
Pomysł na **SpeedDatingMatcher** zrodził się dzięki mojej siostrze Róży, która studiuje na Uniwersytecie Medycznym w Białymstoku. Co więcej, nie tylko studiuje – prowadzi również uczelniane pismo – [Młody Medyk](https://www.instagram.com/mlodymedyk_/). Od dwóch lat jej organizacja studencka organizuje eventy speed datingowe. No i tutaj pojawił się problem – według relacji Róży nic nie okazuje się bardziej żmudne, okropne i jest bólem nie do zniesienia jak sprawdzenie preferencji kontaktu uczestników oraz wysyłanie do nich maili z informacją zwrotną. Jeśli dobrze pamiętam to podczas wypowiadania tych słów, uroniła nawet nie jedną, a dwie łzy, ale takie krokodyle nawyki nabyła już w dzieciństwie. Mimo wszystko jako starszy brat-deweloper postanowiłem jej pomóc i wziąłem sprawy w swoje ręce.
## Czym jest SpeedDatingMatcher?

**SpeedDatingMatcher** to system do zarządzania wydarzeniami speed datingowymi. Obsługuje rejestrację uczestników, dopasowywanie preferencji (kto chce się skontaktować z kim) oraz wysyłanie maili z kontaktami dzięki integracji z **Brevo**. Pierwsza wersja została wdrożona na **Microsoft Azure**, ale nie będę ukrywał – brak doświadczenia z SSR dał mi w kość. Skończyło się to większą frustracją, niż się spodziewałem, ale ostatecznie udało mi się aplikację uruchomić.

W tegorocznej edycji (2025) postanowiłem podejść do tematu bardziej rozsądnie – nie tylko ze względu na moje doświadczenie z Azure, a również to finansowe, bo pakiet edukacyjnych stu dolarów całkowicie wykorzystałem na poprzednią edycję. Finalnie postawiłem na **VPS** z wykorzystaniem **Dockera** i **nginx**. Miałem też do dyspozycji serwer **AWS EC2 Free Tier**, ale wiedziałem, że wkrótce będę potrzebował serwera do tego bloga, więc od razu zdecydowałem się na VPS.

## Jak to działa?
Głównym celem aplikacji nie jest tylko wysyłanie maili, ale **automatyczne dopasowywanie uczestników** wydarzenia. Jak to działa?
Jeśli uczestnik z numerem 3 chce skontaktować się z numerem 2 oraz 1, muszę sprawdzić, czy zarówno numer 2, jak i 1 również chcą kontaktu z numerem 3. Dopiero wtedy, gdy jest **wzajemna chęć kontaktu**, wysyłamy maila. Sytuację obrazuje poniższa grafika:

![Graf przedstawiający dopasowanie preferencji](/persons_preferences.png)


Aplikacja oferuje m.in.:
- **Zarządzanie wydarzeniami randkowymi** – Kompleksowe zarządzanie uczestnikami i spotkaniami.
- **Walidacja emaili** – Sprawdzanie poprawności podanych adresów email.
- **Integracja z Brevo** – Automatyczne powiadomienia i przypomnienia dla uczestników.

Dzięki wykorzystaniu **Django**, mogę łatwo zarządzać użytkownikami i ich danymi.

## Stack technologiczny
- **Django** – Backend i zarządzanie bazą danych.
- **Next.js** – Szybki frontend z renderowaniem po stronie serwera.
- **Brevo** – Integracja do wysyłania e-maili.
- **BeautifulSoup4** – Dynamiczna modyfikacja szablonów HTML w mailach.
- **Microsoft Azure** – Hosting aplikacji w chmurze (pierwsza wersja).
- **Docker** – Konteneryzacja aplikacji.
- **Nginx** – Reverse proxy na serwerze VPS.

## Czego się nauczyłem i co dalej?
Szczerze mówiąc, był to **pierwszy poważniejszy projekt**, który zrealizowałem poza pracą. Gdybym powiedział, że planowanie architektury, dobór technologii oraz pisanie kodu nie sprawiło mi ogromnej frajdy, to bym skłamał. Ten projekt naprawdę rozbudził moją deweloperską pasję.

Mogłem **przetestować swoje pomysły**, a przy okazji **nauczyć się dużo o SSR, Django i Azure**. Nie było łatwo, ale każde wyzwanie było nową lekcją.

Projekt współtworzyłem z [Maćkiem](https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/), co pozwoliło mi zdobyć cenne doświadczenie w **zarządzaniu zadaniami**, **współpracy zespołowej** oraz **Code Review**.

Chcesz dowiedzieć się więcej? Sprawdź **repozytorium na [GitHubie](https://github.com/benhus8/SpeedDatingMatcher)**.