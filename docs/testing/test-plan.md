# Deliverable 2.1 Test Plan

## Scope

This iteration focuses on core functionality and testing of that core functionality. Tests are traced to eight functional requirements (FR1-FR8) and three non-functional requirements (NFR1-NFR3).

| ID | Requirement |
| --- | --- |
| FR1 | Account registration, sign-in and sign-out with session ending. |
| FR2 | View public profiles and edit your own display name and description. |
| FR3 | Search title/author and view book details, including a clear empty result. |
| FR4 | Keep one main reading status per reader/book. Add, move, remove books. |
| FR5 | Accept whole pages 0 to known positive total; disable unknown totals. |
| FR6 | Publish, browse, edit and delete own ratings/reviews. |
| FR7 | Book-specific threads/replies with display name and posting time. |
| FR8 | Contributors flag spoiler content; hide text until explicit reveal. |
| NFR1 | Reject changes to other user profiles; valid sessions. |
| NFR2 | Saved records survive reopening; errors don't erase data. |
| NFR3 | Strict owner privacy for shelves, progress, etc. |

## Test cases

All test cases are executed manually against the running prototype (`npm start`).

Ten detailed cases (TC-001 to TC-010) are listed in [test-cases.md](test-cases.md) and [test-cases.json](test-cases.json). The requirement-to-case mapping and coverage labels are in [traceability.csv](traceability.csv).

## Results

- **9 Pass:** TC-002 to TC-010.
- **1 Blocked:** TC-001, because there is no backend authentication yet.

Coverage: FR3, FR5, FR7 and FR8 are fully covered; FR2, FR4 and FR6 are partially covered; FR1 is uncovered. NFR coverage labels are not required.

## Screenshots

| Screenshot | What it shows | Related cases |
| --- | --- | --- |
| [Discovery screen](../evidence/prototype-discover.png) | Book search with an empty query listing all five sample catalogue books. | TC-003 |
| [Book screen](../evidence/prototype-book.png) | Pride and Prejudice as Alice: Completed status at page 432 (100% complete), a 4.25-star review she can edit or delete, and a book thread with a hidden spoiler and a reply. | TC-004, TC-005, TC-006, TC-007, TC-008 |

## Next testing work

| Week | Testing focus |
| --- | --- |
| Week 1 (Nov 9-15) | Build real sign-in and access rules (FR1/NFR1) and start custom shelves. Run sign-in tests and checks for attempts to change another user's data. |
| Week 2 (Nov 16-22) | Connect shared storage and the extra review fields. Check reopening, failed saves and older reviews. Record results and remaining problems. |
| Week 3 (Nov 23-29) | Fix major problems, demonstrate the full workflow and collect feedback. |
