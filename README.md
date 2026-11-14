Projekt koncepcyjny do portfolio – fikcyjna marka

# Stream Overlay Pack

**Problem.** Streamer potrzebuje czytelnych scen i powtarzalnej oprawy bez osobnej aplikacji.

**Rozwiązanie.** Każda plansza ma własny adres i przezroczyste tło.

**Sekcje.** Nakładki, Parametry URL.

**Technologie.** HTML, Tailwind CSS, CSS, JavaScript bez frameworków. Font Space Grotesk z Google Fonts.

**Grafiki.** Własne SVG i zrzuty interfejsu.

**GitHub Pages.** [Adres demo](https://andriu-tsap.github.io/stream-overlay-pack/).

**Lokalnie.** Uruchom serwer statyczny w katalogu projektu poleceniem python3 -m http.server 8000. Treść jest w HTML, motyw w style.css, zachowanie w app.js. Aby ponownie skompilować Tailwind, zainstaluj tailwindcss@4 i @tailwindcss/cli@4 i uruchom npx @tailwindcss/cli -i tailwind.input.css -o tailwind.css --minify.

## Zrzuty ekranu

[Desktop](screenshots/desktop.png) · [Mobile](screenshots/mobile.png)

## Lighthouse

<!-- AUDIT:START -->
Pomiar strony głównej na lokalnym serwerze statycznym w GitHub Actions (Chromium · Lighthouse 12).

| Tryb | Wydajność | Dostępność | Dobre praktyki | SEO |
| --- | ---: | ---: | ---: | ---: |
| desktop | 100 | 100 | 100 | 100 |
| mobile | 100 | 100 | 100 | 100 |
<!-- AUDIT:END -->

## OBS Studio

1. Wybierz planszę na stronie demo i skopiuj jej publiczny adres.
2. W panelu Źródła wybierz + → Przeglądarka.
3. Wklej adres w pole URL. Ustaw szerokość 1920 i wysokość 1080. Pozostaw przezroczyste tło.
4. Przenieś źródło nad obraz kamery. Dla ramki dopasuj kamerę do prawego dolnego obszaru.
5. Do paska dodaj parametr ?nick=Gracz. Alert odtwarza się po załadowaniu URL-a ?alert=follow&nick=Gracz lub ?alert=sub&nick=Gracz. Do testów użyj odświeżenia źródła. Parametry nie są połączone z kontem streamingowym.

