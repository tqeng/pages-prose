# Pages & Prose

Team 8's DIGT2107 community reading prototype. Discover a book, save it to a shelf, record progress, review it and join a spoiler-aware discussion.

## Run the prototype

Requires Node.js 22 or later. No installation is needed for the app or unit tests.

```sh
npm start
```

Open http://127.0.0.1:3000 and choose Alice or Bob from **Demo reader**. Search Austen, open Pride and Prejudice, add it, save page 432, then explicitly choose Completed. Try a 4.25-star review and spoiler discussion. Refresh, choose Alice again, and check My shelves.

These are demo identities, not secure accounts. Records share one browser origin and are inspectable with browser tools. Use sample data only. There is no server authentication, shared database or production privacy boundary. Browser data can be cleared; malformed saved JSON currently needs local storage reset. The interface uses a simple black-and-white wireframe layout with book-cover placeholders.

## Scope and next work

Implemented: title/author search, three primary shelves, progress, completion dates, profile editing, quarter-star review editing/deletion, public reviews/profiles, threads/replies, boolean spoiler reveal and local persistence.

Later: accounts/sessions, custom shelves, follow/feed, sub-ratings/warnings, author verification, EPUB notes, analytics, groups, recommendations, moderation and spoiler thresholds. Complete authentication before treating demo ownership as security. The report includes proposed team allocations and the next three-week plan.
