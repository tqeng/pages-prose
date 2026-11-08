# Project Iteration 3: Testing and Initial Development 

# Introduction

**Project Name:** Pages & Prose

**Team Number:** 8

**Team Members:** Jeffray Zhang, Liam West, Muskaan Sengupta, Tina Kaus, Arya Holmukhe

**Course:** DIGT2107 Practice of Software Development

**Document Overview:** This report shows how we tested the requirements from Deliverable 1.2. It includes the test plan, results, test cases, GitHub branches, and work planned for the team.

# **Iteration Goals and Objectives**

1\. Build the main reading features: book search, shelves, progress, reviews, discussions, and basic spoiler hiding (US2-US5, US7-US8; FR3-FR8 and FR11).

2\. Keep the screens, app rules, and data storage in separate files so they are easier to change.

3\. Run unit and browser tests. Save the results and record any problems we find and fix.

4\. Write tests for every functional and non-functional requirement, including features planned for later.

5\. Organize the main, development, and feature branches. Save the report and test files, and mark the submission with the ITR2.1 tag.

# **Requirement to Test Case Traceability**

Each requirement is linked to one or more test cases. Writing a test does not mean the feature is finished or has passed. Fully Covered means all parts of the requirement were tested successfully. Partially Covered means only some parts were tested successfully. Uncovered means the feature has not been tested successfully yet. Passing a demo test does not prove that real accounts are secure.

| Requirement ID | Requirement Description | Test Case ID | Test Case Description | Coverage |
| :---- | :---- | :---- | :---- | :---- |
| FR1 | Account registration, sign-in and sign-out with session ending. Use case: UC-11 | TC-001 TC-031 TC-038 | TC-001: Account registration and session lifecycle TC-031: Check real sign-in and access rules TC-038: Guest access boundary | Uncovered |
| FR2 | View public profiles and edit own display name and description. Use case: UC-11 | TC-002 TC-031 TC-032 TC-040 | TC-002: Edit profile and retain community reviews TC-031: Check real sign-in and access rules TC-032: Keep saved data when the app reopens TC-040: Public profile review and discussion visibility | Partially Covered |
| FR3 | Search title/author and view book details, including a clear empty result. Use case: UC-01 | TC-003 TC-004 TC-039 TC-042 | TC-003: Search title or author and read details TC-004: Empty and unmatched search TC-039: Browser reading and discussion journey TC-042: Reject unknown resources and unshelved progress | Fully Covered |
| FR4 | Keep one main reading status per reader and book. Add, move, and remove books; set or clear completion dates; support custom shelves. Use case: UC-02 | TC-005 TC-006 TC-007 TC-008 TC-012 TC-031 TC-039 TC-043 TC-044 | TC-005: Add and move one primary shelf record TC-006: Completion date lifecycle TC-007: Remove only the current reader shelf entry TC-008: Custom shelf organisation TC-012: Prompt before recording completion TC-031: Check real sign-in and access rules TC-039: Browser reading and discussion journey TC-043: Demo reading-list separation TC-044: Completion date remains stable on repeat saves | Partially Covered |
| FR5 | Accept whole pages 0 to known positive total; calculate page/total x 100; disable unknown totals and prompt for completion at 100%. Use case: UC-03 | TC-009 TC-010 TC-011 TC-012 TC-039 TC-042 TC-043 | TC-009: Progress boundaries and calculation TC-010: Reject invalid progress without data loss TC-011: Unknown and zero page totals TC-012: Prompt before recording completion TC-039: Browser reading and discussion journey TC-042: Reject unknown resources and unshelved progress TC-043: Demo reading-list separation | Fully Covered |
| FR6 | Publish, browse, edit and delete own ratings/reviews; show review on book and profile. Use cases: UC-04, UC-05 | TC-013 TC-014 TC-015 TC-031 TC-037 TC-039 TC-040 TC-042 | TC-013: Review create edit delete and profile link TC-014: Quarter-star boundaries and increments TC-015: Only edit or delete your own review TC-031: Check real sign-in and access rules TC-037: Render untrusted review text safely TC-039: Browser reading and discussion journey TC-040: Public profile review and discussion visibility TC-042: Reject unknown resources and unshelved progress | Partially Covered |
| FR7 | Book-specific threads/replies with contributor display name and posting time. Use case: UC-07 | TC-016 TC-017 TC-039 TC-040 TC-042 | TC-016: Book-specific threads and replies TC-017: Reject invalid discussion contributions TC-039: Browser reading and discussion journey TC-040: Public profile review and discussion visibility TC-042: Reject unknown resources and unshelved progress | Fully Covered |
| FR8 | Contributors flag spoiler content; hide text until deliberate reveal. Page/percentage threshold extension remains in US8 backlog. Use case: UC-07 | TC-018 TC-019 TC-039 | TC-018: Spoilers hidden until explicit reveal TC-019: Page-based spoiler thresholds TC-039: Browser reading and discussion journey | Fully Covered |

# **Functional Traceability Continued**

| Requirement ID | Requirement Description | Test Case ID | Test Case Description | Coverage |
| :---- | :---- | :---- | :---- | :---- |
| FR9 | Read supported EPUBs; owner-only passage notes with create/revisit/delete; safe errors for unreadable files. Use case: UC-12 | TC-020 TC-031 TC-036 | TC-020: EPUB notes privacy and invalid files TC-031: Check real sign-in and access rules TC-036: Private records cannot be retrieved by another account | Uncovered |
| FR10 | Private date-filtered summaries of completed books, grouped by genre and author. Use case: UC-09 | TC-021 TC-036 | TC-021: Date-filtered reading summaries TC-036: Private records cannot be retrieved by another account | Uncovered |
| FR11 | Quarter-star overall rating; optional prose/characters/plot sub-ratings and content warnings; preserve old reviews. Use cases: UC-04, UC-05 | TC-014 TC-022 | TC-014: Quarter-star boundaries and increments TC-022: Optional sub-ratings warnings and migration | Partially Covered |
| FR12 | Book-specific buddy groups with invitations, accept/reject and accepted-member-only discussion. Use case: UC-13 | TC-023 TC-036 | TC-023: Buddy-read invitation and membership privacy TC-036: Private records cannot be retrieved by another account | Uncovered |
| FR13 | Suggest books with the most reviews first. If review counts tie, sort by title. Each suggestion opens its book details. Use case: UC-14 | TC-024 | TC-024: Deterministic community recommendations | Uncovered |
| FR14 | Allow author applications for specific books; admin approves verification and labelled author participation. Use case: UC-15 | TC-025 | TC-025: Verified author application and admin decision | Uncovered |
| FR15 | Follow/unfollow readers; suggestions and feed expose only community-visible activity. Use case: UC-06 | TC-026 | TC-026: Follow feed without private activity leakage | Uncovered |
| FR16 | Readers can report content. Only admins can review reports, dismiss them, remove content, or issue warnings. Each decision is recorded. Use cases: UC-08, UC-10 | TC-027 | TC-027: Report and moderate with role enforcement | Uncovered |

**Coverage summary:** 4 requirements are fully tested (FR3, FR5, FR7, FR8), 4 are partly tested (FR2, FR4, FR6, FR11), and 8 are not yet tested (FR1, FR9, FR10, FR12-FR16). All 16 have planned test cases. These counts describe requirement testing, not how many lines of code were tested.

# **Non Functional Test Coverage**

| Requirement ID | Requirement Description | Test Case ID | Test Case Description | Coverage |
| :---- | :---- | :---- | :---- | :---- |
| NFR1 | With 100 sample books and one active user, at least 19/20 searches and 19/20 shelf updates finish within 2 seconds from submission to displayed result. | TC-028 | TC-028: Measure 100-book browser performance | Not required |
| NFR2 | Add from details in at most three actions; at least 4/5 first-time readers complete search, add and status change within 3 minutes with only a task prompt. | TC-029 | TC-029: First-time usability and action count | Not required |
| NFR3 | Core controls have visible labels or accessible names, keyboard operation and visible focus; core workflow is mouse-free; status/errors do not rely on colour alone. | TC-030 | TC-030: Keyboard access labels and focus sample | Not required |
| NFR4 | Authenticated operations reject changes to another user profile, shelf, review or note; dedicated password hashing; sign-out invalidates session. | TC-001 TC-015 TC-020 TC-025 TC-027 TC-031 TC-037 | TC-001: Account registration and session lifecycle TC-015: Only edit or delete your own review TC-020: EPUB notes privacy and invalid files TC-025: Verified author application and admin decision TC-027: Report and moderate with role enforcement TC-031: Check real sign-in and access rules TC-037: Render untrusted review text safely | Not required |
| NFR5 | Saved personal records survive reopening; failed save shows error, retains last saved data and never claims success. In-memory adapter is test-only. | TC-010 TC-022 TC-032 TC-033 TC-039 TC-041 | TC-010: Reject invalid progress without data loss TC-022: Optional sub-ratings warnings and migration TC-032: Keep saved data when the app reopens TC-033: Failed saves keep existing data TC-039: Browser reading and discussion journey TC-041: Browser save error and truthful feedback | Not required |
| NFR6 | Separate presentation, application rules and storage. Adapter replacement requires no changes to search or shelf screens; verify same checks and dependencies. | TC-034 | TC-034: Change storage without changing the screens | Not required |
| NFR7 | Future persistent service: 10,000 books, 50 concurrent users, five-minute trial; at least 95% of searches/updates within 3 seconds and error rate below 1%; record hardware/workload. | TC-035 | TC-035: Future test with many books and users | Not required |
| NFR8 | Shelves, progress, EPUBs, notes and summaries are owner-private; profiles/reviews/public forum community-visible; groups accepted-member-only; verify second-account retrieval. | TC-007 TC-020 TC-021 TC-023 TC-026 TC-036 TC-040 TC-043 | TC-007: Remove only the current reader shelf entry TC-020: EPUB notes privacy and invalid files TC-021: Date-filtered reading summaries TC-023: Buddy-read invitation and membership privacy TC-026: Follow feed without private activity leakage TC-036: Private records cannot be retrieved by another account TC-040: Public profile review and discussion visibility TC-043: Demo reading-list separation | Not required |

**Next steps:** add real sign-in and access checks; finish custom shelves and extra review fields; test the app with new readers; finish the keyboard checks; and build shared data storage before testing many users or private records. Tests that cannot run yet are marked Blocked.

# **Test Plan and Actual Results**

**Scope:** Unit tests check the app's rules and storage. Browser tests check the reading workflow, what appears on screen, keyboard use, error messages, and speed. Tests for features that are not built yet are planned but marked Blocked.

**Test data:** We use Alice and Bob as demo readers. Book b1 has 432 pages, b2 has 280 pages, and b5 has no page total. Unit tests use a fixed date. Browser tests start with empty storage. The speed test uses 100 sample books. Future privacy tests will need a third user, real sign-in, and group invitations.

**Test environment:** Windows 11 (10.0.26300), Node 22.21.0, Chrome 157.0.8103.38, and Playwright. The computer has an AMD Ryzen 7 8700F processor and 32 GB of RAM. The browser window is 1440 x 1050 pixels. The app runs locally and saves data in the browser. The updated prototype passed all 24 unit tests and five browser checks on November 7, 2026 at 6:48 p.m. Toronto time.

| Result category | Recorded outcome |
| :---- | :---- |
| Designed cases | 44 unique cases covering 16 FRs and eight NFRs. |
| Unit suite | 24 tests passed, 0 failed; node \--test tests/core.test.mjs; raw TAP in docs/testing/unit-results.tap. |
| Browser suite | 5 checks passed, 0 failed; tests/browser.mjs; raw environment/timings in docs/testing/browser-results.json. |
| Case status totals | 29 Pass and 15 Blocked. A blocked test needs a feature or test setup that is not available yet. |
| Regression discovered | The first keyboard search test lost focus after the screen refreshed. The code now returns focus to Search, and the browser tests passed when rerun. |
| Exit assessment | The available tests passed for the local prototype. Real account security, full privacy, new-reader testing, accessibility, and support for many users still need work. |

## **Execution and Defect Handling**

Start each test with fresh sample data. Follow the steps, compare the result with what was expected, and save the output or screenshots. Use Pass when the test meets its expected result, Fail when it does not, and Blocked when a needed feature or setup is missing. For each problem, record the test ID, steps, expected and actual results, severity, and person responsible. After a fix, rerun the affected tests. If the fix changes shared data, rerun all unit tests and the full browser workflow.

# **Detailed Test Cases**

Each test case lists its ID, related requirements, title, setup, steps, expected result, actual result, status, and priority. Blocked tests explain what is needed before they can run. A Pass applies only to the checks described in that case.

## **TC-001 Account registration and session lifecycle**

| Test Case ID | TC-001 |
| :---- | :---- |
| **Title** | Account registration and session lifecycle |
| **Related Requirement ID(s)** | FR1, NFR4 |
| **Preconditions** | Future authentication service; unused email; two browser sessions. |
| **Steps** | 1\. Register a reader with a valid email and password. 2\. Reject duplicate email and wrong password. 3\. Sign in, capture the session, then sign out. 4\. Retry a protected request with the old session. |
| **Expected Result** | Registration succeeds once; passwords are hashed with a dedicated password hash; invalid credentials fail; sign-out invalidates the session. |
| **Actual Result** | Blocked: the demo has no sign-up, password storage, or real sign-in sessions. |
| **Status** | Blocked |
| **Priority** | High |

## **TC-002 Edit profile and retain community reviews**

| Test Case ID | TC-002 |
| :---- | :---- |
| **Title** | Edit profile and retain community reviews |
| **Related Requirement ID(s)** | FR2 |
| **Preconditions** | Alice selected; fresh service and b1 available. |
| **Steps** | 1\. Publish a 4-star b1 review. 2\. Save display name " Alice A " and bio " Bio ". 3\. Read Alice profile and its reviews. 4\. Attempt a blank display name. |
| **Expected Result** | Name and bio are trimmed and updated; review remains visible; blank name is rejected. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-003 Search title or author and read details**

| Test Case ID | TC-003 |
| :---- | :---- |
| **Title** | Search title or author and read details |
| **Related Requirement ID(s)** | FR3 |
| **Preconditions** | Fresh catalogue with b1 Pride and Prejudice and b2 Frankenstein. |
| **Steps** | 1\. Search " PRIDE ". 2\. Search "shelley". 3\. Open b1 details. |
| **Expected Result** | Queries are case-insensitive and trimmed; correct book returned; details show title, author and 432 pages. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-004 Empty and unmatched search**

| Test Case ID | TC-004 |
| :---- | :---- |
| **Title** | Empty and unmatched search |
| **Related Requirement ID(s)** | FR3 |
| **Preconditions** | Five-book sample catalogue. |
| **Steps** | 1\. Submit whitespace only. 2\. Search "zzzzzz". |
| **Expected Result** | Whitespace returns all five books; unmatched query returns an empty result set; UI no-results text is checked during manual follow-up. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-005 Add and move one primary shelf record**

| Test Case ID | TC-005 |
| :---- | :---- |
| **Title** | Add and move one primary shelf record |
| **Related Requirement ID(s)** | FR4 |
| **Preconditions** | Alice selected and b1 absent from her shelves. |
| **Steps** | 1\. Add b1 as Want to Read. 2\. Move b1 to Currently Reading. 3\. Attempt Favourite Read as main status. |
| **Expected Result** | Exactly one record remains with Currently Reading; invalid main reading status is rejected. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-006 Completion date lifecycle**

| Test Case ID | TC-006 |
| :---- | :---- |
| **Title** | Completion date lifecycle |
| **Related Requirement ID(s)** | FR4 |
| **Preconditions** | Alice selected; fixed test clock 2026-11-07T18:00:00Z. |
| **Steps** | 1\. Mark b1 Completed. 2\. Inspect completedAt. 3\. Move b1 to Want to Read. |
| **Expected Result** | Completion date equals the test clock; leaving Completed clears that date. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-007 Remove only the current reader shelf entry**

| Test Case ID | TC-007 |
| :---- | :---- |
| **Title** | Remove only the current reader shelf entry |
| **Related Requirement ID(s)** | FR4, NFR8 |
| **Preconditions** | Alice and Bob each have b1 on a shelf. |
| **Steps** | 1\. As Bob remove b1. 2\. Read Bob shelves. 3\. Switch to Alice and read her shelves. |
| **Expected Result** | Bob has no b1 entry; Alice entry is retained. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-008 Custom shelf organisation**

| Test Case ID | TC-008 |
| :---- | :---- |
| **Title** | Custom shelf organisation |
| **Related Requirement ID(s)** | FR4 |
| **Preconditions** | Future custom-shelf UI and service; Alice owns a b1 entry. |
| **Steps** | 1\. Create shelf "Summer". 2\. Assign b1 while retaining its main status. 3\. Rename shelf then remove the custom membership. |
| **Expected Result** | Custom label changes do not duplicate or erase the main status or progress. |
| **Actual Result** | Blocked: custom shelf creation and membership are not implemented. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-009 Progress boundaries and calculation**

| Test Case ID | TC-009 |
| :---- | :---- |
| **Title** | Progress boundaries and calculation |
| **Related Requirement ID(s)** | FR5 |
| **Preconditions** | Alice has b1 Currently Reading; total 432 pages. |
| **Steps** | 1\. Save pages 0, 216 and 432 in sequence. 2\. Inspect percentage after each save. |
| **Expected Result** | All values accepted; percentages are exactly 0, 50 and 100\. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-010 Reject invalid progress without data loss**

| Test Case ID | TC-010 |
| :---- | :---- |
| **Title** | Reject invalid progress without data loss |
| **Related Requirement ID(s)** | FR5, NFR5 |
| **Preconditions** | Alice has b1 page 20 saved. |
| **Steps** | 1\. Attempt \-1, 433, 1.5, NaN, Infinity and string "10" through the service. 2\. Read the stored page. |
| **Expected Result** | Each invalid input is rejected and page 20 remains. UI converts valid numeric input before calling the service. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-011 Unknown and zero page totals**

| Test Case ID | TC-011 |
| :---- | :---- |
| **Title** | Unknown and zero page totals |
| **Related Requirement ID(s)** | FR5 |
| **Preconditions** | b5 has missing pages; Alice has shelved it. |
| **Steps** | 1\. Attempt to save page 0\. 2\. Repeat with b5 total pages set to zero. |
| **Expected Result** | Both saves are rejected as tracking unavailable; percentage is not calculated. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-012 Prompt before recording completion**

| Test Case ID | TC-012 |
| :---- | :---- |
| **Title** | Prompt before recording completion |
| **Related Requirement ID(s)** | FR5, FR4 |
| **Preconditions** | Alice has b1 Currently Reading. |
| **Steps** | 1\. Save page 432\. 2\. Inspect status and completion prompt flag. 3\. Explicitly move to Completed and repeat save. |
| **Expected Result** | Last-page save requests confirmation without changing status; Completed suppresses further prompts. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-013 Review create edit delete and profile link**

| Test Case ID | TC-013 |
| :---- | :---- |
| **Title** | Review create edit delete and profile link |
| **Related Requirement ID(s)** | FR6 |
| **Preconditions** | Alice selected, b1 available, no existing review. |
| **Steps** | 1\. Publish 4-star review " Good ". 2\. Find it on the book and profile. 3\. Edit to 4.25 stars and "Better". 4\. Delete the review. |
| **Expected Result** | One trimmed review is created; edits replace it; deletion removes it from book and profile. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-014 Quarter-star boundaries and increments**

| Test Case ID | TC-014 |
| :---- | :---- |
| **Title** | Quarter-star boundaries and increments |
| **Related Requirement ID(s)** | FR6, FR11 |
| **Preconditions** | Alice selected and b1 available. |
| **Steps** | 1\. Save every value from 0.25 to 5 in 0.25 increments. 2\. Attempt 0, 5.25, 4.1, NaN, Infinity and string "4". |
| **Expected Result** | All 20 valid values are accepted; every invalid value is rejected without creating a second review. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-015 Only edit or delete your own review**

| Test Case ID | TC-015 |
| :---- | :---- |
| **Title** | Only edit or delete your own review |
| **Related Requirement ID(s)** | FR6, NFR4 |
| **Preconditions** | Alice has an existing b1 review. |
| **Steps** | 1\. Switch to Bob. 2\. Attempt to edit Alice review by its ID. 3\. Attempt to delete it. 4\. Read the review. |
| **Expected Result** | Both operations are rejected and original text remains. This checks demo checks on who owns a record, not security with real sign-in. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-016 Book-specific threads and replies**

| Test Case ID | TC-016 |
| :---- | :---- |
| **Title** | Book-specific threads and replies |
| **Related Requirement ID(s)** | FR7 |
| **Preconditions** | Alice selected; b1 and b2 exist; fixed test clock. |
| **Steps** | 1\. Create a b1 thread. 2\. Reply to its ID. 3\. Inspect b1 and b2 discussions. |
| **Expected Result** | b1 contains thread and reply with author, parent and timestamp; b2 contains neither. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-017 Reject invalid discussion contributions**

| Test Case ID | TC-017 |
| :---- | :---- |
| **Title** | Reject invalid discussion contributions |
| **Related Requirement ID(s)** | FR7 |
| **Preconditions** | Alice has a thread on b1. |
| **Steps** | 1\. Attempt whitespace-only post. 2\. Reply to an absent thread. 3\. Reply on b2 using the b1 parent ID. |
| **Expected Result** | Every invalid contribution fails; no extra posts are saved. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-018 Spoilers hidden until explicit reveal**

| Test Case ID | TC-018 |
| :---- | :---- |
| **Title** | Spoilers hidden until explicit reveal |
| **Related Requirement ID(s)** | FR8 |
| **Preconditions** | Alice posts b1 text "Ending" flagged as spoiler. |
| **Steps** | 1\. Read discussion without revealed IDs. 2\. Read it with the post ID explicitly revealed. 3\. Read again without that ID. |
| **Expected Result** | Hidden view contains no spoiler text; explicit reveal returns text; a new view defaults to hidden. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-019 Page-based spoiler thresholds**

| Test Case ID | TC-019 |
| :---- | :---- |
| **Title** | Page-based spoiler thresholds |
| **Related Requirement ID(s)** | FR8 |
| **Preconditions** | Future threshold metadata and UI; readers at different progress points. |
| **Steps** | 1\. Flag a post at page 200 of 432\. 2\. Open as readers below and above page 200\. 3\. Explicitly reveal as the reader below page 200\. |
| **Expected Result** | Future threshold feature respects each reader progress and deliberate reveal; no spoiler text leaks into hidden content. |
| **Actual Result** | Blocked: US8 threshold extension deferred; current FR8 boolean flag and reveal are tested in TC-018 and TC-039. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-020 EPUB notes privacy and invalid files**

| Test Case ID | TC-020 |
| :---- | :---- |
| **Title** | EPUB notes privacy and invalid files |
| **Related Requirement ID(s)** | FR9, NFR4, NFR8 |
| **Preconditions** | Future EPUB reader; valid EPUB, corrupt EPUB and non-EPUB files; Alice and Bob. |
| **Steps** | 1\. Open valid EPUB; create, reopen and delete a passage note. 2\. Attempt Bob access to Alice note. 3\. Import corrupt and unsupported files. |
| **Expected Result** | Notes retain correct passage anchors and owner privacy; invalid files show errors without removing saved notes. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Low |

## **TC-021 Date-filtered reading summaries**

| Test Case ID | TC-021 |
| :---- | :---- |
| **Title** | Date-filtered reading summaries |
| **Related Requirement ID(s)** | FR10, NFR8 |
| **Preconditions** | Future analytics; known completion dates including date-range boundaries, genres and authors. |
| **Steps** | 1\. Select an inclusive date range. 2\. Compare total and per-genre/per-author counts to fixtures. 3\. Select an empty range. 4\. Attempt Bob access to Alice summary. |
| **Expected Result** | Counts match boundary fixtures; empty range is zero; Bob cannot retrieve Alice summary. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Low |

## **TC-022 Optional sub-ratings warnings and migration**

| Test Case ID | TC-022 |
| :---- | :---- |
| **Title** | Optional sub-ratings warnings and migration |
| **Related Requirement ID(s)** | FR11, NFR5 |
| **Preconditions** | Future enhanced review editor; existing overall-only review. |
| **Steps** | 1\. Reopen old review. 2\. Save without sub-ratings. 3\. Add prose, characters and plot sub-ratings and warnings. 4\. Reject an invalid sub-rating and reopen. |
| **Expected Result** | Old review remains readable; fields are optional; valid details persist; invalid save leaves the last saved version intact. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-023 Buddy-read invitation and membership privacy**

| Test Case ID | TC-023 |
| :---- | :---- |
| **Title** | Buddy-read invitation and membership privacy |
| **Related Requirement ID(s)** | FR12, NFR8 |
| **Preconditions** | Future buddy-read groups; Alice, Bob and non-member Charlie. |
| **Steps** | 1\. Alice creates b1 group and invites Bob. 2\. Bob rejects then accepts a new invitation. 3\. Charlie attempts direct group read/write. 4\. Bob opens discussion after acceptance. |
| **Expected Result** | Rejected or unaccepted members have no access; accepted Bob can read/write; Charlie is denied. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-024 Deterministic community recommendations**

| Test Case ID | TC-024 |
| :---- | :---- |
| **Title** | Deterministic community recommendations |
| **Related Requirement ID(s)** | FR13 |
| **Preconditions** | Future recommendation service; books with 3, 2, 2 and 0 reviews. |
| **Steps** | 1\. Request recommendations. 2\. Verify descending review counts and alphabetical title tie-break. 3\. Follow each book link. 4\. Repeat with no reviews. |
| **Expected Result** | Correct stable order and detail links; empty activity is handled clearly. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-025 Verified author application and admin decision**

| Test Case ID | TC-025 |
| :---- | :---- |
| **Title** | Verified author application and admin decision |
| **Related Requirement ID(s)** | FR14, NFR4 |
| **Preconditions** | Future author verification; reader, applicant and admin accounts. |
| **Steps** | 1\. Apply for a specific book. 2\. Attempt verification as ordinary reader. 3\. Approve as admin. 4\. Post as the verified author. |
| **Expected Result** | Only admin can verify; badge is tied to the approved author/book; posts visibly identify author; failed applications do not grant a badge. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-026 Follow feed without private activity leakage**

| Test Case ID | TC-026 |
| :---- | :---- |
| **Title** | Follow feed without private activity leakage |
| **Related Requirement ID(s)** | FR15, NFR8 |
| **Preconditions** | Future follow/feed service; Alice and Bob with public reviews and private shelf activity. |
| **Steps** | 1\. Alice follows Bob. 2\. Inspect following list, suggestions and feed. 3\. Confirm only public activity appears. 4\. Unfollow and publish another Bob review. |
| **Expected Result** | Following list and eligible review feed update; private progress and shelves never appear; unfollowed future activity is excluded. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-027 Report and moderate with role enforcement**

| Test Case ID | TC-027 |
| :---- | :---- |
| **Title** | Report and moderate with role enforcement |
| **Related Requirement ID(s)** | FR16, NFR4 |
| **Preconditions** | Future reports and moderation; existing review/thread; reader and admin. |
| **Steps** | 1\. Report content; verify confirmation without automatic removal. 2\. Attempt reader access to queue. 3\. Admin dismisses one report and removes another item. 4\. Resolve a report whose content was already removed. |
| **Expected Result** | Reader queue access denied; resolution action, admin and timestamp recorded; removed content hidden; already-removed case handled. |
| **Actual Result** | Blocked: this feature has not been built yet. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-028 Measure 100-book browser performance**

| Test Case ID | TC-028 |
| :---- | :---- |
| **Title** | Measure 100-book browser performance |
| **Related Requirement ID(s)** | NFR1 |
| **Preconditions** | Fresh local browser; 100 generated book fixtures; one selected reader; fixed viewport. |
| **Steps** | 1\. Run 20 title searches. 2\. Run 20 alternating shelf-status saves. 3\. Time submission through DOM update and two animation frames. 4\. Record environment and all timings. |
| **Expected Result** | At least 19 of 20 searches AND 19 of 20 shelf updates complete within 2,000 ms. |
| **Actual Result** | With 100 books and one reader, all 20 searches and all 20 shelf updates finished within two seconds. The slowest search took 6.5 ms; the slowest update took 6.6 ms. |
| **Status** | Pass |
| **Priority** | High |

## **TC-029 First-time usability and action count**

| Test Case ID | TC-029 |
| :---- | :---- |
| **Title** | First-time usability and action count |
| **Related Requirement ID(s)** | NFR2 |
| **Preconditions** | Five first-time participants, fresh demo data and a timer; no coaching. |
| **Steps** | 1\. Give only: "Find Frankenstein, add it, then mark Currently Reading". 2\. Count actions from book details to shelf addition. 3\. Record completion time and errors for each participant. |
| **Expected Result** | Shelf addition takes at most three actions; at least four of five participants finish the full task within three minutes. |
| **Actual Result** | Blocked: five first-time participants have not been recruited; no user-study results claimed. |
| **Status** | Blocked |
| **Priority** | Medium |

## **TC-030 Keyboard access labels and focus sample**

| Test Case ID | TC-030 |
| :---- | :---- |
| **Title** | Keyboard access labels and focus sample |
| **Related Requirement ID(s)** | NFR3 |
| **Preconditions** | Browser with Alice selected and fresh interactive page. |
| **Steps** | 1\. Inspect discovery input labels. 2\. Focus search once, then type and use Tab/Enter to open Frankenstein. 3\. Use keyboard after setting focus to shelf, progress and review controls. 4\. Inspect focus outline and textual feedback. |
| **Expected Result** | Sample operations work without mouse clicks; discovery controls have labels; focus is visible and status/error text is readable. Full sequential-navigation and screen-reader audit remains required. |
| **Actual Result** | Search, open, add, progress and review operated with keyboard after a test script setting the keyboard focus; visible 3px outline and labels checked on discovery. Full manual keyboard and assistive-technology audit pending. |
| **Status** | Pass |
| **Priority** | Medium |

## **TC-031 Check real sign-in and access rules**

| Test Case ID | TC-031 |
| :---- | :---- |
| **Title** | Check real sign-in and access rules |
| **Related Requirement ID(s)** | NFR4, FR1, FR2, FR4, FR6, FR9 |
| **Preconditions** | Future server-side sign-in; two accounts; password database and ended session fixtures. |
| **Steps** | 1\. Inspect password hashes. 2\. Use Bob credentials to alter Alice profile, shelf, review and note by ID. 3\. Sign out Alice and replay the old session. |
| **Expected Result** | Every attempt to change another user's data and request using a session that has ended is denied server-side; passwords use a a password-hashing tool designed to store passwords safely. |
| **Actual Result** | Blocked: browser demo selection and localStorage cannot meet server-side sign-in or security requirements. |
| **Status** | Blocked |
| **Priority** | High |

## **TC-032 Keep saved data when the app reopens**

| Test Case ID | TC-032 |
| :---- | :---- |
| **Title** | Keep saved data when the app reopens |
| **Related Requirement ID(s)** | NFR5, FR2, FR4, FR5, FR6, FR7 |
| **Preconditions** | Map-backed test version of browser storage; fresh service. |
| **Steps** | 1\. Save profile, shelf, page, review and discussion. 2\. Construct a new service using the same stored JSON. 3\. Read each record. |
| **Expected Result** | All saved values remain. TC-039 separately verifies an actual browser reload. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-033 Failed saves keep existing data**

| Test Case ID | TC-033 |
| :---- | :---- |
| **Title** | Failed saves keep existing data |
| **Related Requirement ID(s)** | NFR5 |
| **Preconditions** | MemoryStore with one saved shelf; inject save exception "Disk full". |
| **Steps** | 1\. Try changing shelf, progress, removing entry, publishing review/post and editing profile. 2\. After each error compare service state and adapter state to original. |
| **Expected Result** | Every operation throws; neither last saved state nor in-memory application state changes. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-034 Change storage without changing the screens**

| Test Case ID | TC-034 |
| :---- | :---- |
| **Title** | Change storage without changing the screens |
| **Related Requirement ID(s)** | NFR6 |
| **Preconditions** | MemoryStore and test version of BrowserStore implementing load/save. |
| **Steps** | 1\. Run identical search, shelf and progress assertions with each adapter. 2\. Review UI imports and service dependency boundaries. |
| **Expected Result** | Same application contract works with both adapters; screens use ReadingService methods; no direct data reads/writes in screen handlers. UI composition still selects an adapter. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | Medium |

## **TC-035 Future test with many books and users**

| Test Case ID | TC-035 |
| :---- | :---- |
| **Title** | Future test with many books and users |
| **Related Requirement ID(s)** | NFR7 |
| **Preconditions** | Future deployed persistent service; 10,000 books; 50 concurrent authenticated users; recorded hardware. |
| **Steps** | 1\. Run mixed search and shelf-update workload for five minutes. 2\. Measure each action from the user's action to the visible result. 3\. Calculate fraction within three seconds and error rate. |
| **Expected Result** | At least 95% of actions finish within three seconds and error rate is below 1%; publish hardware, workload and raw measurements. |
| **Actual Result** | Blocked: persistent multi-user service does not exist; local performance timings cannot validate this target. |
| **Status** | Blocked |
| **Priority** | Low |

## **TC-036 Private records cannot be retrieved by another account**

| Test Case ID | TC-036 |
| :---- | :---- |
| **Title** | Private records cannot be retrieved by another account |
| **Related Requirement ID(s)** | NFR8, FR4, FR5, FR9, FR10, FR12 |
| **Preconditions** | Future server with real sign-in; Alice private shelves, progress, EPUB, notes, summary and group. |
| **Steps** | 1\. As Bob request each Alice resource by direct ID and list endpoints. 2\. Attempt unaccepted group discussion reads. 3\. Verify public profile, review and forum remain accessible. |
| **Expected Result** | All access to private records is denied, not just hidden in UI; public resources remain visible. |
| **Actual Result** | Blocked: full privacy needs server storage protected by real sign-in; demo isolation in TC-043 is insufficient. |
| **Status** | Blocked |
| **Priority** | High |

## **TC-037 Render untrusted review text safely**

| Test Case ID | TC-037 |
| :---- | :---- |
| **Title** | Render untrusted review text safely |
| **Related Requirement ID(s)** | FR6, NFR4 |
| **Preconditions** | Browser demo with Alice selected and b1 details. |
| **Steps** | 1\. Save review text \<img src=x onerror="window.xssExecuted=true"\>. 2\. Inspect rendered DOM and window execution marker. |
| **Expected Result** | Text displays literally; no injected image or script executes. This is one rendering check, not a complete security audit. |
| **Actual Result** | Review payload rendered as literal text; no image element or script execution. |
| **Status** | Pass |
| **Priority** | High |

## **TC-038 Guest access boundary**

| Test Case ID | TC-038 |
| :---- | :---- |
| **Title** | Guest access boundary |
| **Related Requirement ID(s)** | FR1, FR2, FR3, FR4, FR5, FR6, FR7 |
| **Preconditions** | Fresh service signed out. |
| **Steps** | 1\. Search and read public reviews. 2\. Attempt private shelf access and each profile/shelf/progress/review/post mutation. |
| **Expected Result** | Public reads work; all listed operations requiring a selected reader are rejected. Real authentication remains deferred. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-039 Browser reading and discussion journey**

| Test Case ID | TC-039 |
| :---- | :---- |
| **Title** | Browser reading and discussion journey |
| **Related Requirement ID(s)** | FR3, FR4, FR5, FR6, FR7, FR8, NFR5 |
| **Preconditions** | Fresh browser using the five-book catalogue; Alice and Bob demo identities. |
| **Steps** | 1\. Search Austen and open book. 2\. Add, move, reach final page and confirm Completed. 3\. Save 4.25-star review; post spoiler thread and reply. 4\. Reveal spoiler then switch to Bob. 5\. Reload, select Alice and inspect shelf. |
| **Expected Result** | Workflow renders correct data; spoiler text absent before reveal and hidden again after reader switch; Bob shelves empty; Alice Completed survives reload; no page errors. |
| **Actual Result** | Search, add, move, progress prompt, review, spoiler reveal, reply, reader isolation and real page reload passed; two screenshots saved; no page errors. |
| **Status** | Pass |
| **Priority** | High |

## **TC-040 Public profile review and discussion visibility**

| Test Case ID | TC-040 |
| :---- | :---- |
| **Title** | Public profile review and discussion visibility |
| **Related Requirement ID(s)** | FR2, FR6, FR7, NFR8 |
| **Preconditions** | Alice selected in fresh service. |
| **Steps** | 1\. Publish review and ordinary post. 2\. Sign out and read book reviews, Alice public profile and discussion. |
| **Expected Result** | All community-visible content remains readable; no private shelves are included in the public profile object. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-041 Browser save error and truthful feedback**

| Test Case ID | TC-041 |
| :---- | :---- |
| **Title** | Browser save error and truthful feedback |
| **Related Requirement ID(s)** | NFR5 |
| **Preconditions** | Browser has a saved Completed entry; inject localStorage.setItem failure. |
| **Steps** | 1\. Try changing status to Want to Read. 2\. Inspect message. 3\. Restore storage and reopen My shelves. |
| **Expected Result** | Error text appears instead of success; last saved Completed status remains. |
| **Actual Result** | Failed browser save displayed an error and retained Completed; no success message. |
| **Status** | Pass |
| **Priority** | High |

## **TC-042 Reject unknown resources and unshelved progress**

| Test Case ID | TC-042 |
| :---- | :---- |
| **Title** | Reject unknown resources and unshelved progress |
| **Related Requirement ID(s)** | FR3, FR4, FR5, FR6, FR7 |
| **Preconditions** | Alice selected with no shelves. |
| **Steps** | 1\. Request absent book details. 2\. Try shelf, review and thread with absent book ID. 3\. Update b1 progress before shelving it. |
| **Expected Result** | Every invalid operation is rejected; no shelf records are created. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-043 Demo reading-list separation**

| Test Case ID | TC-043 |
| :---- | :---- |
| **Title** | Demo reading-list separation |
| **Related Requirement ID(s)** | FR4, FR5, NFR8 |
| **Preconditions** | Alice selected in fresh service. |
| **Steps** | 1\. Alice shelves b1. 2\. Switch to Bob and try shelves("alice"). 3\. Bob shelves b2. 4\. Switch back to Alice. |
| **Expected Result** | Bob gets no Alice list and owner override is rejected; Alice still sees only b1. Browser data remains inspectable locally, so this is not full NFR8 checking. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | High |

## **TC-044 Completion date remains stable on repeat saves**

| Test Case ID | TC-044 |
| :---- | :---- |
| **Title** | Completion date remains stable on repeat saves |
| **Related Requirement ID(s)** | FR4 |
| **Preconditions** | Alice selected; controlled clock can advance one day. |
| **Steps** | 1\. Complete b1. 2\. Advance clock and save Completed again. 3\. Move away from Completed then complete again. |
| **Expected Result** | Repeated same-status save preserves first date; a later new completion records the new date. |
| **Actual Result** | Passed. See this test's result in unit-results.tap. |
| **Status** | Pass |
| **Priority** | Medium |

# **Task Allocation and Timeline**

The table below suggests each person's work for the next three weeks. These are planned tasks, not claims that the work is already done. The November 8 submission is the current checkpoint.

| Member | Proposed coding testing and documentation responsibility |
| :---- | :---- |
| Jeffray Zhang | Connect the reading features and prepare the release. Retest shelves and progress, update the test matrix, and collect the submission files. |
| Liam West | Build real sign-in, logout, and access rules. Test that users cannot change other users' data. Document the setup and security choices. |
| Muskaan Sengupta | Add extra review ratings and content warnings. Check valid and invalid inputs and make sure older reviews still work. Update the FR11 tests. |
| Tina Kaus | Improve search, shelves, profiles, and custom shelves. Arrange testing with five first-time readers, check keyboard use, and record feedback. |
| Arya Holmukhe | Improve discussions, spoiler controls, and moderation. Test replies and access rules. Update use cases, problem reports, and sample data for future group tests. |

| Time window | Deliverables and exit checks |
| :---- | :---- |
| Current checkpoint Nov 7-8 | Finish the prototype, 24 unit tests, five browser checks, the 44-case plan, and the report. Check the branches and ITR2.1 tag, then submit the PDF on eClass. |
| Week 1 Nov 9-15 | Build real sign-in and access rules (FR1/NFR4), and start custom shelves. By the end of the week, run sign-in tests and checks for attempts to change another user's data. |
| Week 2 Nov 16-22 | Connect shared storage and the extra review fields. Check reopening, failed saves, and older reviews. Run the five-reader study and full keyboard check. Record results and remaining problems. |
| Week 3 Nov 23-29 | Fix major problems, demonstrate the full workflow, and collect feedback. Check whether the app is ready for the many-user speed test; the single-browser demo cannot prove this. |

# **Code Repository and Branching Strategy**

**Repository:** https\://github.com/tqeng/pages-prose

| Branch or artifact | Purpose |
| :---- | :---- |
| main | The stable version, updated after tests and report checks pass. |
| development | The working version where tested feature changes are combined. |
| feature/core-reading | The main reading and discussion features. |
| feature/testing | Tests, fixes found during testing, recorded results, and screenshots. |
| feature/deliverable-2-1 | The test plan, requirement-to-test links, work plan, and submission report. |
| ITR2.1 | The tag for the original stable submission. Check it on GitHub before submitting. |
| docs/deliverable-2-1.pdf and .md | Formatted eClass submission and editable text source. |
| docs/testing/ | test-cases.json, traceability.csv, test-plan.md, unit-results.tap, browser-results.json and browser-run.txt. |
| docs/evidence/ and tests/ | Actual prototype screenshots and executable unit/browser test suites. |

**Workflow:** Start a feature branch from development. Make one clear change, run its tests, and commit it with a short description. Add the tested change to development. When the full version is ready, check it again and merge it into main. The original submission is marked ITR2.1. Keep the feature branches so the work can be reviewed.

