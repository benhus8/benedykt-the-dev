---
title: SpeedDatingMatcher – Event Management z Django i Next.js
description: System do oganizacji wydarzeń speed datingowych
slug: speeddating-matcher
date: 2025-02-23 00:00:00+0000
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
Mam szczęście posiadania siostry Róży, która studiuje na Uniwersytecie Medycznym w Białymstoku. Co więcej, nie tylko studiuje, ale także prowadzi uczelniane pismo – [Młodego Medyka](https://www.instagram.com/mlodymedyk_/). Od około dwóch lat organizacja studencka pod przewodnictwem Róży organizuje eventy speed datingowe. I właśnie tutaj pojawił się problem, z którym przyszła do mnie przyszła Pani Doktor. Jako dojrzały deweloper postanowiłem zakasać rękawy i go rozwiązać.

## Czym jest SpeedDatingMatcher?

**SpeedDatingMatcher** to system zarządzania wydarzeniami randkowymi, a dokładnie dodawaniu osób ich preferncji (chęci kontaktu po wydarzeniu) oraz wysłaniu maili z kontaktemi do wybranych osób. Aplikacja obsługuje komunikację mailową dzięki integracji z **Brevo**. Pierwsza edycja została wdrożona na **Microsoft Azure**, ale z ręką na sercu przyznaję, że nie byłem świadom wszystkich właściwości SSR i całe to przedsięwzięcie skończyło się znacznym zrażeniem do Azure, choć finalnie udało mi się system na nim wdrożyć.

W tegorocznym wydaniu aplikacji (2025) postawiłem na bardziej cywilizowany sposób: **VPS** z wykorzystaniem **Dockera** i **nginx**. Do dyspozycji miałem również serwer **Free Tier AWS EC2**, ale w niedalekiej przyszłości chciałem również stworzyć tego bloga, więc postanowiłem zakupić od razu dostęp do serwera.

## Funkcjonalności
Głównym zadaniem aplikacji było nie tylko rozsyłanie maili, ale także **automatyczne dopasowanie osób** biorących udział w evencie. To znaczy:
jeśli osoba z numerkiem 3 chciała mieć kontakt z numerkiem 2 oraz 1, to aby wysłać maila, muszę sprawdzić, czy zarówno osoba 2, jak i 1 chcą mieć kontakt z numerkiem 3. Tylko jeśli mamy **preferencję w dwie strony**, to wysyłamy maila. Sytuację obrazuje poniższa grafika:

![Graf przedstawiający dopasowanie preferencji](/persons_preferences.png)

Idealnie widać, że wysyłamy maila tylko wtedy, gdy na grafie znajdziemy **cykl o długości 2**.

Finalnie aplikacja umożliwia:

- **Zarządzanie wydarzeniami randkowymi** – Kompleksowe zarządzanie uczestnikami i spotkaniami.
- **Walidacja emaili** – Upewnienie się, że wszystkie podane adresy email są poprawne.
- **Integracja z Brevo** – Automatyczne wysyłanie powiadomień i przypomnień do uczestników.

Dodatkowo, dzięki wykorzystaniu **Django**, można łatwo tworzyć użytkowników i nimi zarządzać.

## Stack technologiczny
- **Django** – Backend i zarządzanie bazą danych.
- **Next.js** – Szybki frontend z możliwością server-side rendering.
- **Brevo** – Integracja do wysyłania e-maili.
- **BeautifulSoup4** – dynamiczna modyfikacja szablonami html maili.
- **Microsoft Azure** – Hosting aplikacji w chmurze (1 wersja). 
- **Docker** – Konteneryzacja rozwiązań.
- **Nginx** - reverse proxy na serwerze VPS.


## Podsumowanie
Prawdę mówiąc, był to **pierwszy poważniejszy projekt** zrealizowany przeze mnie poza pracą. Skłamałbym, gdybym powiedział, że samodzielne planowanie architektury, wykorzystanych technologii i sposobu napisania rozwiązania nie dawało mi ogromnej frajdy oraz nie rozbudziło mojej deweloperskiej duszy.

Dzięki temu projektowi miałem okazję **przetestować swoje pomysły**, ale również **zapoznać się z SSR, Django oraz Azurem**.

Projekt współtworzyłem z [Maćkiem](https://www.linkedin.com/in/maciej-korsakowski-a65b0226a/), co było okazją do **zarządzania zadaniami**, ich dzielenia oraz wzajemnego **Code Review**.

Chcesz dowiedzieć się więcej? Sprawdź **repozytorium na [GitHubie](https://github.com/benhus8/SpeedDatingMatcher)**.