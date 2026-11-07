# Pages & Prose

Team 8's DIGT2107 community reading prototype. Discover a book, save it to a shelf, record progress, review it and join a spoiler-aware discussion.

## Run the prototype

Requires Node.js 22 or later. No installation is needed for the app or unit tests.

```sh
npm start
```

Open http://127.0.0.1:3000 and choose Alice or Bob from **Demo reader**. Search Austen, open Pride and Prejudice, add it, save page 432, then explicitly choose Completed. Try a 4.25-star review and spoiler discussion. Refresh, choose Alice again, and check My shelves.

These are demo identities, not secure accounts. Records share one browser origin and are inspectable with browser tools. Use sample data only. There is no server authentication, shared database or production privacy boundary. Browser data can be cleared; malformed saved JSON currently needs local storage reset. The interface uses a simple black-and-white wireframe layout with book-cover placeholders.

## Tests

```sh
npm test
```

The 24 unit cases cover search, shelves, completion dates, progress/rating boundaries, ownership rules, discussions, spoilers, adapters and failed saves.

For five browser checks, install Playwright, provide Chromium, start the app in another terminal, then run:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/browser.mjs
```

Alternatively set `PLAYWRIGHT_PATH` to an existing module entry and `BROWSER_EXECUTABLE` to Chrome/Chromium. Recorded tests used Chrome on Windows through Playwright. Browser tests create fresh data, substitute 100 performance fixtures and overwrite evidence with the latest run.

Recorded: **24 unit tests and five browser checks passed**. Of **44 designed cases**, 29 passed and 15 are blocked by future features or missing participant/backend prerequisites. These are case outcomes, not source-code coverage percentages. Keyboard testing is a sample with programmatic focus setup, not a full accessibility audit.

## Submission artifacts

- [Deliverable PDF](docs/deliverable-2-1.pdf) and [editable report](docs/deliverable-2-1.md)
- [Test plan](docs/testing/test-plan.md)
- [44 detailed cases](docs/testing/test-cases.md) and [structured cases](docs/testing/test-cases.json)
- [Traceability matrix](docs/testing/traceability.csv)
- [Unit output](docs/testing/unit-results.tap) and [browser environment/timings](docs/testing/browser-results.json)
- [Discovery](docs/evidence/prototype-discover.png) and [book screen](docs/evidence/prototype-book.png) screenshots

## Structure and branches

`src/ui.mjs` handles presentation; `src/core.mjs` handles rules; `src/storage.mjs` implements adapters; `src/catalogue.mjs` holds fixtures. `tests/` contains executable checks and `docs/` holds evidence.

`main` is stable; `development` integrates ongoing work. `feature/core-reading`, `feature/testing` and `feature/deliverable-2-1` preserve coherent changes. Milestone tag: `ITR2.1`. Commits use actual work timestamps and the configured Jeffray Zhang identity. Shared history is not rewritten.

## Scope and next work

Implemented: title/author search, three primary shelves, progress, completion dates, profile editing, quarter-star review editing/deletion, public reviews/profiles, threads/replies, boolean spoiler reveal and local persistence.

Deferred: accounts/sessions, custom shelves, follow/feed, sub-ratings/warnings, author verification, EPUB notes, analytics, groups, recommendations, moderation and spoiler thresholds. Complete authentication before treating demo ownership as security. The report includes proposed team allocations and the next three-week plan.
