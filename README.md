# Portfolio – Dr. Hikmet Karčić

Lična web stranica sa fokusom na istraživanja o genocidu, logorski sistemu, negiranju i kulturi sjećanja. Sajt je statički i funkcioniše bez backend-a.

## SEO podešavanja

- Dodani su meta tagovi (description, keywords, robots) i Open Graph/Twitter kartice na svim stranicama.
- U `index.html` su dodani Schema.org strukturirani podaci (Person).
- `robots.txt` i `sitemap.xml` se nalaze u root direktoriju.

### URL sajta

U datotekama `sitemap.xml` i `<link rel="canonical">` korišten je GitHub Pages URL:

```
https://sabanijas-web.github.io/Hikmet_Karcic
```

Ako koristite drugi domen (npr. prilagođeni), zamijenite ga u:

- `sitemap.xml` (`<loc>` vrijednosti)
- `<link rel="canonical">` u `index.html`, `research.html`, `projects.html`, `media.html`, `lectures.html`, `about.html`, `contact.html`
- `robots.txt` (linija `Sitemap:`)

## Lokalno pokretanje

Otvorite `index.html` direktno u browseru ili pokrenite jednostavan lokalni server (npr. `python -m http.server`) i otvorite `http://localhost:8000/`.

## Struktura

- `index.html` – naslovna
- `research.html` – publikacije
- `projects.html` – projekti
- `media.html` – mediji
- `lectures.html` – predavanja i konferencije
- `about.html` – o autoru
- `contact.html` – kontakt
- `style.css` – stilovi
- `robots.txt`, `sitemap.xml` – SEO
