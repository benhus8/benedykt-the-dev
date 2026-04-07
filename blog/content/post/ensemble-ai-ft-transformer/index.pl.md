---
title: EnsembleAI 2026
description: Transformery rządzą!!!
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

Powiem szczerze, że długo się zbierałem do napisania tego posta i najbardziej winię za to chyba zmęczenie, które jest z hackathonami dosyć mocno powiązane. Niemniej jednak po upływie dwóch tygodni, podczas długiej podróży z Suwałk do Poznania, postanowiłem napisać kilka słów o zadaniu, nad którym miałem okazję popracować najwięcej podczas tej edycji EnsembleAI, a które też finalnie dało nam wejście do top 4 i sposobność do zawalczenia o podium!

## **Krótki wstęp o formule hackathonu EnsembleAI**
Aby zrozumieć, jakie emocje towarzyszyły mi oraz mojemu zespołowi podczas tej zażartej walki, musimy zacząć od opisu formuły hackathonu, bo jest ona co najmniej nietypowa i zapewnia strzały dopaminy mocniejsze niż Reelsy z Instagrama.
Każde z 4 zadań jest punktowane oddzielnie, a punktacja przydzielana jest na podstawie podesłanych rozwiązań, specyficznych dla każdego zadania. W naszym przypadku był to na przykład plik CSV z predykcjami miesięcznego zużycia energii dla konkretnego przedziału czasu. Dlatego też głównym punktem hackathonu była strona z leaderboardem, gdzie za zajęte miejsce w tasku przydzielane były odpowiednie punkty.
Rozwiązania można było przesyłać tylko co określony z góry czas, by między innymi uniknąć DDOS-owania serwerów. A więc, jak widać, po każdym kolejnym przesłaniu pliku następował pełen napięcia okres oczekiwania: czy i o ile nasze rozwiązanie poprawiło pozycję w rankingu.
![Meme z oczekiwaniem na wyniki](meme.png)

## **Ale może od początku: co, jak, gdzie i w ogóle po co?**
Zadanie zostało zorganizowane przez jednego z partnerów hackathonu – Euros Energy, który je sformułował, a także dostarczył nam dane. A więc o co tam chodziło? W dokumencie opisującym problem dostaliśmy nakreślony obraz tego, jak masowa elektryfikacja jest kamieniem milowym transformacji energetycznej w Polsce. Jednak dla dystrybutorów energii szybki wzrost liczby pomp ciepła stwarza spore wyzwania. A co za tym idzie również dokładne prognozowanie zapotrzebowania na energię jest co najmniej niezbędne, aby zapobiec przeciążeniom sieci, a w związku z tym jej awariom.

## **Dane, jakie dostaliśmy**
Jak mówimy o uczeniu maszynowym i predykcji, to wstyd nie zacząć od danych, jakie otrzymaliśmy, a więc by nie siać niezadowolenia od nich zacznę: Każdy zespół miał do dyspozycji 3 główne zbiory:

- Train: Październik 2024 – Kwiecień 2025
- Validation: Maj 2025 – Czerwiec 2025
Oraz zbiór:
- Test: Lipiec 2025 – Październik 2025

Na tym ostatnim zbiorze wykonywaliśmy predykcje przy każdym submission, **JEDNAKŻE ICH FINALNA OCENA BYŁA BRANA POD UWAGĘ TYLKO PODCZAS OSTATNIEGO, FINALNEGO SUBMISSION PO KOŃCU HACKATHONU!** A więc trenując model, żaden zespół nie był pewien, jak jego model finalnie generalizuje na danych, których zupełnie nie widział, a ich specyfika również mogła być zgoła inna, bo jednak okresy letnie charakteryzują się zupełnie inną pracą pomp ciepła niż te w okresie jesienno-zimowym.

Słowem podsumowania: finalnie w danych mieliśmy ok. 600 różnych sensorów, które nadsyłały nam logi w odstępach 5-minutowych w przedstawionych powyżej okresach, co dawało nam ok. 65 milionów wierszy (10.42 GB!) do analizy.

## **Cel** 
Krótko i na temat: naszym zadaniem było dostarczenie predykcji dla każdego sensora, która zawierała miesięczną predykcję średniej x2. Na dole wrzucam dokładny i piękny wzór zawarty w opisie zadania:

![Wzór celu predykcji](prediction_target_hck.png)

A metryką oceny na _live leaderboardzie_ oraz tym finalnym leaderboardzie było MAE:

![MAE jako metryka oceny](mae.png)

Także co, pora opisać nasze starania oraz drogę, która poprowadziła nas prościutko na 3 miejsce w całym hackathonie!


## **Feature Engineering oraz Preprocessing danych**
Na samym starcie wiadomo, trzeba przyjrzeć się blisko danym oraz rozkładom i tak też zrobiłem, ale jeszcze przed tym, na samym końcu instrukcji dostarczonej przez organizatorów, mogliśmy znaleźć taką oto sekcję:

![Instrukcja z sekcją o DoS](dos.png)

W tamtym momencie pomyślałem, że trzeba od tego zacząć, w końcu każdy team pewnie to zrobi, prawda? Prawda?? No finalnie okazało się, że nie :D i kto wie, może to nam dało te kilka punktów więcej?

W danych mieliśmy takie informacje jak szerokość oraz długość geograficzna każdego sensora, a więc na tej podstawie postanowiłem na start zlokalizować każdy sensor w konkretnym województwie, odpytując API GeoPy. Okazało się, że dane zostały chyba zanonimizowane albo były w nich błędy, bo niektóre lokalizacje były niepoprawnie umiejscowione oraz GeoPy nie mogło znaleźć odpowiedniego miejsca. W takich wypadkach użyliśmy algorytmu KNN do znalezienia najbliższego sensora, który jest poprawnie umiejscowiony w naszych danych oraz ma przypisanego operatora. Później stworzona mapa przypisywała każde województwo do jednego z dystrybutorów energii takich jak PGE, Enea lub Tauron i tak oto mieliśmy pierwszy ciekawy feature.
Kolejnym ważnym aspektem była agregacja danych. Było ich naprawdę mnóstwo, co mogło przytłoczyć niejeden model, więc decyzja padła na agregację godzinową. Wydawało się to zmniejszać całkiem znacznie zbiór danych, eliminować szum z zapisów prowadzonych co 5 minut, dawać przestrzeń na wykrycie schematów, a także być wartościową jednostką predykcyjną.
Ogólnie problem był dosyć ciekawy, bo na początku wydawało mi się i tak też z początku podchodziłem do tego zadania jak do predykcji szeregów czasowych. Jednak po głębszym zastanowieniu, tak naprawdę mamy tu najzwyklejszy problem regresji. Wiadomo, interwały są prowadzone co 5 minut, ale predykcja to predykcja MIESIĘCZNA! A więc to dosyć mocne zaokrąglenie, a jakby to powiedział mój profesor z politechniki: musimy ewidentnie użyć jak najbardziej precyzyjnej siekiery do tej predykcji, a nie skalpela. Co więcej, w miarę uniwersalnej siekiery, która będzie umiała złapać cechy jesienią, po czym zaaplikować je i wyciągnąć z nich wnioski również latem.

W trakcie tych 24 godzin dużo testowałem z różnymi featureami, nieraz pytając LLMa, czy może on ma jakieś ciekawe pomysły. W sumie wylistuję tu to, co udało się dodać i co finalnie zostało wykorzystane do ostatecznego nauczenia naszego Transformera (lekki spoiler XD):

- **deviceType**, czyli typ urządzenia, który pomaga modelowi uchwycić różnice w charakterystyce pracy między klasami sprzętu.
    
- **x3** to dodatkowa cecha kategoryczna z danych wejściowych, która wnosi informację o profilu oraz konfiguracji urządzenia.
    
- **operator**, a mianowicie nazwa operatora dostawcy, pozwalająca modelowi uwzględnić różnice wynikające z warunków eksploatacji oraz polityk działania.
    
- **voivodeship** to województwo, czyli kontekst geograficzny wpływający między innymi na klimat oraz sezonowość zachowania systemu.
    
- **device_operator_combo**, czyli połączenie urządzenia oraz operatora, które pozwala łapać interakcje specyficzne dla konkretnej pary.
    
- **t1_mean-t13_mean** oznacza średnią wartość sygnału t1-t13 w oknie czasu opisującą jego typowy poziom.

- **t8_max** wyznacza maksymalną wartość t8 opisującą skrajne piki oraz epizody wysokiego obciążenia.
    
- **t8_std** to odchylenie standardowe t8 mierzące zmienność oraz „nerwowość” sygnału.
    
- **t7_max** oznacza maksimum t7, które wskazuje na chwilowe ekstremalne stany systemu.
    
- **t4_min** to minimum t4 przydatne do wykrywania głębokich spadków oraz warunków granicznych.
    
- **delta_load** jest zmianą obciążenia między punktami czasowymi pokazującą dynamikę pracy układu.
    
- **delta_source** wyznacza zmianę po stronie źródła, która może odzwierciedlać przełączenia lub skoki warunków zasilania.
    
- **cwu_demand** to zapotrzebowanie na CWU, czyli sygnał popytu wpływający bezpośrednio na pracę systemu.
    
- **delta_temp_out_in** oznacza różnicę temperatury wyjścia oraz wejścia opisującą transfer energii a także efektywność procesu.
    
- **cwu_spike** jest flagą nagłego wzrostu zapotrzebowania CWU pomocną przy modelowaniu krótkich i gwałtownych zdarzeń.
    
- **hour_sin** to sinus z godziny doby, który koduje cykliczność czasu bez sztucznego przeskoku między godziną 23:00 a 00:00.
    
- **hour_cos** stanowi cosinus z godziny doby uzupełniający powyższy sinus i pozwalający modelowi odtworzyć pełną fazę dobową.
    
- **month_sin** jest sinusem z miesiąca reprezentującym sezonowość roczną w sposób ciągły.
    
- **month_cos** to cosinus z miesiąca, który razem z sinusem miesiąca domyka cykliczną reprezentację pór roku.

## **Pierwsze podejście** 
Jako pierwsze podejście zdecydowałem się na CatBoosta. Było trochę cech kategorycznych oraz trochę liczbowych, a jak widać wyżej, sam też dodałem kilka cech nominalnych, więc postanowiłem, że drzewa boostingowe mogą się całkiem dobrze odnaleźć w tym świecie. Także na start na pełnej wleciał CatBoost z następującymi hiperparametrami (bez strojenia):
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
I jak to się mówi: benc! Siadło, a do tego grubo, bo nasz pierwszy model miał 0.0074 MAE. 0.0074!!!! Kurczę, to naprawdę jest mało... Szczególnie przy agregacji miesięcznej oraz przy takiej specyfice danych!

![Pierwszy wynik na leaderboardzie](first_leaderboard.png)

Po tym nastąpiła salwa kolejnych faz inżynierii cech, błądzenia i eksploracji zbioru. Summa summarum, walcząc z innymi teamami, które finalnie również dobrały się do podobnych wyników, a ostatecznie nas przeskoczyły, jako ostatni krok i wykorzystanie CatBoosta użyliśmy Optuny, by wycisnąć z niego, ile się dało. Otrzymaliśmy wynik MAE na poziomie 0.0044. Każdy z kolejnych modeli to naprawdę była walka i uważam, że zejście nadal na samym drzewku do takiej wartości to było naprawdę dobre osiągnięcie. Tym bardziej, trochę spoilerując, że jednak Transformer to architektura znacznie, ale to znacznie cięższa, więc nawet ciężko porównać te dwa modele między sobą, bo stoją one na dwóch różnych końcach efektywności oraz wymagań obliczeniowych. Także finalnie i tak uważam ten wynik za naprawdę dobry jak na naszą wiedzę oraz umiejętności.

## **Autoboty do boju**
Kiedy porzuciliśmy nasze piękne drzewko? Po pierwsze wtedy, gdy naprawdę poczułem, że kolejne zmiany, próby oraz feature engineering nic nie zmieniają albo zmieniają na tyle mało, że nie jesteśmy w stanie skoczyć wyżej w rankingu. Po drugie: kiedy drużyna Transformers nam nakopała, a tym samym, można powiedzieć, nas natchnęła...
Po krótkim researchu postanowiłem wyciągnąć naprawdę, ale to naprawdę ciężkie działa, a mianowicie Feature Tokenizer Transformer. Jest to, można powiedzieć, w miarę świeża architektura, która zdobywa ostatnio coraz większą popularność podczas kagglowych przepychanek.
![Schemat FT-Transformera ze źródła](Post hackathon -reviewed-3.png)

### Ogólny zamysł i sposób działania Feature Tokenizer Transformera

Zawarty poniżej opis opiera się na pracy, która właśnie [FT-Transformera wprowadziła](https://arxiv.org/abs/2106.11959). Oczywiście obrazki również pochodzą z tego samego źródła.

Od początku. Jak wiemy, w naszym i ogólnie w datasetach mamy do czynienia głównie z dwoma typami cech: nominalne, czyli takie jak kategorie, oraz numeryczne, przedstawiające konkretną wartość liczbową.

Jak wiemy, Transformery zostały szeroko wykorzystane w przetwarzaniu języka naturalnego (NLP) w modelach generatywnych, takich jak GPT, czy koder-dekoder, takich jak T5. Jak więc zmusić naszą architekturę do przetwarzania nie konkretnych embeddingów stworzonych z tokenów, a właśnie kategorii i liczb jednocześnie?

### Główny komponent: Feature Tokenizer

I właśnie za to odpowiada nasz komponent Feature Tokenizer. Jest on taką perełką tego podejścia, a działa na dwa konkretne sposoby:

- **Cechy numeryczne:** Tutaj sprawa jest względnie prosta --> bierzemy naszą liczbę, mnożymy ją przez wyuczony wektor wag o długości naszego wyjściowego embeddingu, dodajemy bias i tak właśnie nasza wartość liczbowa rozciągnęła się do danej długości, tworząc nam embedding o zadanej wielkości.
    
- **Cechy kategoryczne:** I tutaj działa to dosyć podobnie jak przetwarzanie słów w NLP. Każda wartość cechy na początku jest transformowana do reprezentacji _one-hot encoding_, a następnie jest wymnażana przez macierz wag. Tak w skrócie matematycznie działa to po prostu jak wybieranie konkretnego wiersza z tej macierzy.
    

>_One-hot encoding_ to zmiana reprezentacji danej wartości kategorycznej na ciąg binarny. Brzmi to dziwnie, ale jest naprawdę proste. Prosty przykład: mamy cechę "Kolor" w datasecie motocykli. W naszym datasecie mamy dwa kolory – czerwony i czarny. Wrzucając to w wektor, możemy to wrzucić tak: `[Czerwony, Czarny]`, a więc na pierwszym miejscu mamy wartość czerwony, a na drugim wartość czarny. Reprezentacja _one-hot encoding_ to tak jakby zapalanie lampek, więc jeśli mielibyśmy przedstawić, że motocykl jest czerwony, to byłoby to tak: `[1,0]`, a czarny to `[0,1]`. Z kolei jakikolwiek inny kolor niż czerwony lub czarny (na przykład zielone Kawasaki) dostałby same zera: `[0,0]`.

Tak oto wszystkie wartości naszych cech są połączone za pomocą konkatenacji w wielką macierz $T$. Następnie na samą górę doklejany jest losowo zainicjowany wektor `[CLS]` o takiej samej długości. Dalej cała ta macierz jest przetwarzana i podana do naszego Transformera, tak więc $T$ reprezentuje nam tak jakby jeden wiersz w naszej tabeli (oczywiście wliczając w to ten dodatkowy wektor `[CLS]`). Na dole zdjątko, jak to się prezentuje:

![Architektura FT-Transformera](arch_ft_transformer.png)

Ale po co ten `[CLS]`? CLS to skrót od _Classification_, a głównym zadaniem tego wektora jest zbieranie informacji podczas przejścia przez całą sieć ze wszystkich warstw.

Dalej, jak widać, nasz wektor $T$ z przetworzonymi cechami ląduje w Transformerze, przechodzi normalizację i następnie idzie do unitu _Multi-Head Self-Attention_. Dzięki tej warstwie model może wyłonić kontekst, jaki jest potrzebny do osiągnięcia wyniku najbardziej zbliżonego do ideału, a w naszym przypadku kontekst to inne kolumny tabeli, czyli wartości z macierzy $T$. I właśnie ten kontekst, między innymi, składuje nam wektor `[CLS]`.

A dlaczego ta uwaga jest **„Multi-Head”** ? Podobnie jak w modelach językowych jedna głowa może wyłapywać z tekstu gramatykę, a inna emocje, tak tutaj każda z głów szuka w naszym wierszu danych zupełnie innego kontekstu. Dzięki temu w tym samym czasie jedna „głowa” może śledzić tylko twarde zależności geograficzne (np. zuzycia do województwa/operatora), inna szuka ukrytych powiązań technicznych (model pompy vs zużycie), a nasz token `[CLS]` dostaje na końcu pełny, wielowymiarowy obraz sytuacji zamiast jednej, uśrednionej papki.

Na samym zaś końcu wyrzucamy wszystkie inne wiersze z macierzy $T$ prócz naszego `[CLS]`, który zawiera takie meritum czyli całą informację potrzebną do dalszego przetwarzania (w naszym zadaniu do przewidzenia konkretnego zużycia) i dalej idzie to prosto do klasyfikacji/regresji.

I to by było na tyle, w takim pewnie trochę obszernym skrócie, jak to wszystko działa pod maską.

##  Zastosowanie FTTransformera w naszym zadaniu

Teoria teorią, ale teraz pora przejść do tego, jak my te właśnie Transformerowe klocki zaadaptowaliśmy do naszego datasetu.

A więc teoretycznie mówiłem, że liczby są prosto wymnażane przez wektor wag. Jednakże my poszliśmy o krok dalej, a co za tym idzie każda cecha numeryczna była przetwarzana jeszcze przed samym wejściem do Transformera przez małą sieć neuronową, a mianowicie MLP (Multi Layer Perceptron):
```
nn.Sequential( nn.Linear(1, embed_dim // 2), nn.ReLU(), nn.Linear(embed_dim // 2, embed_dim), )
```
Zrobiliśmy to, bo nie wszystkie cechy mogą wpływać liniowo na wynik, dlatego postanowiliśmy trochę tej nieliniowości dorzucić jeszcze przed samym wejściem do Transformera.

Cechy kategoryczne były standardowo zamieniane na embeddingi zgodnie z poprzednim opisem. Jedyne co, to dodaliśmy też miejsce na OOV, czyli Out of Vocabulary, w razie gdyby na przykład konkretny operator czy deviceType był nieznany.
To, co dalej się dzieje, to klasyczny Feature Transformer. Jeśli chodzi o hiperparametry, to zastosowaliśmy:
- Embedding size: 64
- Multi head attentions: 8
- Transformer layers: 3
- Dropout: 0.1

Po przejściu przez wszystkie warstwy Transformera mieliśmy głowicę regresyjną:
```
tokens = torch.cat([cls, x_num_tok, x_cat_tok], dim=1)
out = self.transformer(tokens)
return self.head(out[:, 0]).squeeze(-1)
```
`out[:, 0]` to wyciągnięcie tylko tokena `[CLS]` po przejściu przez cały blok Transformera. Następnie nasz `[CLS]` ląduje w głowicy (`self.head`), która znów jest malutką siecią (LayerNorm, następnie ReLU, a na końcu Linear) oraz zgniata tę reprezentację do jednej liczby. Dodatkowo w naszym kontekście ujemny wynik fizycznie nie ma sensu. Dlatego na samym końcu zastosowaliśmy twardy ogranicznik z wiedzy domenowej i ucinaliśmy wszystkie wartości, które przewidywały zużycie poniżej zera.
### Faza treningu

Kilka słów o tym, jak w ogóle podeszliśmy do uczenia naszego modelu. Staraliśmy się do tego podejść optymalnie, by nie uczyć bez sensu naszego Transformera oraz nie marnować tak ważnego na hackathonie czasu. Mieliśmy dwie główne fazy:

**Faza 1, czyli taki poligon doświadczalny** Zamiast trenować na wszystkim, zrobiliśmy twarde cięcie w czasie na początku lutego. Model uczył się na danych sprzed tej daty, a następnie kazaliśmy mu przewidywać przyszłość, czyli to, co działo się po 1 lutego. Dlaczego podział po dacie, a nie losowy? Bo w przypadku zużycia energii losowy podział spowodowałby wyciek danych, czyli model widziałby "przyszłość", żeby przewidzieć "przeszłość". W tej fazie dorzuciliśmy też Early Stopping, by model przerywał naukę, gdy przestanie się poprawiać. Oczywiście zapisywaliśmy wszystkie checkpointy. Dzięki tej fazie wiedzieliśmy, jakie jest nasze realne MAE, zanim w ogóle wysłaliśmy cokolwiek do organizatorów.

**Faza 2, czyli cała naprzód** Gdy po wielu testach w Fazie 1 upewniliśmy się, że nasza architektura (te wszystkie nieliniowe tokenizery oraz hiperparametry) działa stabilnie, to przeszliśmy właśnie do Fazy 2. Zasada jest prosta: **więcej danych = lepszy model**. Na sam koniec zdjęliśmy blokadę z 1 lutego i wrzuciliśmy do pieca absolutnie wszystkie dostępne dane treningowe z przeszłości. Tak potężnie nafeedowany oraz wyregulowany model wygenerował ostateczne predykcje, które trafiły do naszego finałowego pliku _submission_.

### Mały tip na sam koniec
Warto jeszcze wspomnieć, że sam Transformer uczył się przeskalowanej wartości mean average x2 za pomocą StandardScalera. Sieci neuronowe lubią ogólnie właśnie znormalizowane wartości, więc pewnie to też mogło dołożyć swoją cegiełkę do stabilniejszego i bardziej efektywnego uczenia naszego FTTransformera. Przed samym zapisaniem przewidzianej wartości do pliku wynikowego była ona w odpowiedni sposób przeskalowana do docelowych wartości.

![Wynik końcowy na leaderboardzie](leaderboard_task_3.png)
##  Podsumowanie

A więc tak, czemu to mogło zadziałać, a nawet można powiedzieć, że zadziałało? Cóż, wiadomo, że ciężko powiedzieć w 100%, bo jednak tak duże oraz złożone sieci neuronowe to taka trochę czarna skrzynka. Na pewno każda z tych rzeczy zadziałała po trochu. Jednak gdybym miał strzelać, to położyłbym nacisk na ten sławetny mechanizm _Multi-Head Self-Attention_.
Głównym problemem oraz wyzwaniem w tych danych było właśnie wyciągnięcie w miarę uniwersalnej wiedzy z miesięcy jesienno-zimowych, kiedy pompa ciepła zazwyczaj działa na pełnych obrotach, i przeniesienie jej na letnie zużycie, kiedy to wykorzystanie pomp jest znacznie mniejsze. W FT-Transformerze zaawansowany mechanizm kontekstowy mógł modelować, jak mocno dane cechy mają wpływ na wynik oraz jak bardzo specyficzne atrybuty powinny być brane pod uwagę w szczególnych przypadkach. Dodatkowo jeszcze nasz nieliniowy MLP, który przetwarzał nasze wartości numeryczne, też mógł wzbogacić te cechy i nadać im konkretny wpływ na wynik. Jak wiemy, Transformery świetnie generalizują i wydaje mi się, że to właśnie ta cecha zagrała pierwsze skrzypce w tym zadaniu. 
Niemniej jednak trzeba oddać honory innym drużynom, które były tuż pod nami. Mimo iż druga drużyna miała wynik gorszy od naszego, to chyba jako jedyni wyciągnęliśmy tak ciężkie działo jak Transformer do tego zadania. Inne drużyny korzystały z drzew regresyjnych takich jak LightGBM i biorąc pod uwagę różnicę w skomplikowaniu naszej oraz ich architektury, to wykonali oni naprawdę świetną robotę. Niemniej jednak to nam udało się wyjść na prowadzenie i z naszego rozwiązania możemy być dumni!

## To co... za rok?
Kolejny EnsembleAI i kolejny raz świetnie się na nim bawiłem. Wielkie dzięki dla organizatorów za tak świetny event oraz dla mojej drużyny DNS, czyli Drużyny Nieobecnego Szymona, w składzie:
- Jakub Hudziak
- Jakub Binkowski
- Maciej Kaszkowiak
- Maciej Mazur
- oraz oczywiście ja :D

Daliśmy ognia chłopaki i mam nadzieję, że nie po raz ostatni! Chyba się już powtarzam, jednak mówię to za każdym razem szczerze. To co, do zobaczenia za rok?
