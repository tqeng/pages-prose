# Pages & Prose

Team 8's DIGT2107 community reading prototype. Discover a book, save it to a shelf, record progress, review it and join a spoiler-aware discussion.

## Run the prototype

Requires Node.js 22 or later. No installation is needed.

```sh
npm start
```

Open http://127.0.0.1:3000 and choose Alice or Bob from **Demo reader**. Search Austen, open Pride and Prejudice, add it, save page 432, then explicitly choose Completed. Try a 4.25-star review and spoiler discussion. Refresh, choose Alice again, and check My shelves.

These are demo identities, not secure accounts. Records share one browser origin and are inspectable with browser tools. Use sample data only. There is no server authentication, shared database or production privacy boundary. Browser data can be cleared; malformed saved JSON currently needs local storage reset. The interface uses a simple black-and-white wireframe layout with book-cover placeholders.

## Tests

The Deliverable 2.1 test documentation covers core functionality: eight functional requirements (FR1-FR8) and three non-functional requirements (NFR1-NFR3), traced to **10 detailed test cases**. 

## Docs

- [Test plan](docs/testing/test-plan.md)
- [10 detailed cases](docs/testing/test-cases.md) and [structured cases](docs/testing/test-cases.json)
- [Traceability matrix](docs/testing/traceability.csv)
- Prototype screenshots: [discovery screen](docs/evidence/prototype-discover.png) (TC-003) and [book screen](docs/evidence/prototype-book.png) (TC-004 to TC-008)

## Structure

`src/ui.mjs` handles presentation; `src/core.mjs` handles rules; `src/storage.mjs` implements adapters; `src/catalogue.mjs` holds fixtures. `docs/testing/` holds the manual test documentation.

## Scope and next work

Implemented: title/author search, three primary shelves, progress, completion dates, profile editing, quarter-star review editing/deletion, public reviews/profiles, threads/replies, boolean spoiler reveal and local persistence.

Deferred: accounts/sessions, custom shelves, follow/feed, sub-ratings/warnings, author verification, EPUB notes, analytics, groups, recommendations, moderation and spoiler thresholds. Complete authentication before treating demo ownership as security. The report includes proposed team allocations and the next three-week plan.
