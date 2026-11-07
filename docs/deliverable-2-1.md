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

Each requirement is linked to one or more test cases. Writing a test does not mean the feature is finished or has passed. Full means all parts of the requirement were tested successfully. Partial means only some parts were tested successfully. Uncovered means the feature has not been tested successfully yet. Passing a demo test does not prove that real accounts are secure.

| ID and use case | Requirement summary | Test cases | Validation |
| :---- | :---- | :---- | :---- |
| FR1 UC-11 | Account registration, sign-in and sign-out with session ending. | TC-001, TC-031, TC-038 | Uncovered |
| FR2 UC-11 | View public profiles and edit own display name and description. | TC-002, TC-031, TC-032, TC-040 | Partial |
| FR3 UC-01 | Search title/author and view book details, including a clear empty result. | TC-003, TC-004, TC-039, TC-042 | Full |
| FR4 UC-02 | Keep one main reading status per reader and book. Add, move, and remove books; set or clear completion dates; support custom shelves. | TC-005, TC-006, TC-007, TC-008, TC-012, TC-031, TC-039, TC-043, TC-044 | Partial |
| FR5 UC-03 | Accept whole pages 0 to known positive total; calculate page/total x 100; disable unknown totals and prompt for completion at 100%. | TC-009, TC-010, TC-011, TC-012, TC-039, TC-042, TC-043 | Full |
| FR6 UC-04, UC-05 | Publish, browse, edit and delete own ratings/reviews; show review on book and profile. | TC-013, TC-014, TC-015, TC-031, TC-037, TC-039, TC-040, TC-042 | Partial |
| FR7 UC-07 | Book-specific threads/replies with contributor display name and posting time. | TC-016, TC-017, TC-039, TC-040, TC-042 | Full |
| FR8 UC-07 | Contributors flag spoiler content; hide text until deliberate reveal. Page/percentage threshold extension remains in US8 backlog. | TC-018, TC-019, TC-039 | Full |

# **Functional Traceability Continued**

| ID and use case | Requirement summary | Test cases | Validation |
| :---- | :---- | :---- | :---- |
| FR9 UC-12 | Read supported EPUBs; owner-only passage notes with create/revisit/delete; safe errors for unreadable files. | TC-020, TC-031, TC-036 | Uncovered |
| FR10 UC-09 | Private date-filtered summaries of completed books, grouped by genre and author. | TC-021, TC-036 | Uncovered |
| FR11 UC-04, UC-05 | Quarter-star overall rating; optional prose/characters/plot sub-ratings and content warnings; preserve old reviews. | TC-014, TC-022 | Partial |
| FR12 UC-13 | Book-specific buddy groups with invitations, accept/reject and accepted-member-only discussion. | TC-023, TC-036 | Uncovered |
| FR13 UC-14 | Suggest books with the most reviews first. If review counts tie, sort by title. Each suggestion opens its book details. | TC-024 | Uncovered |
| FR14 UC-15 | Allow author applications for specific books; admin approves verification and labelled author participation. | TC-025 | Uncovered |
| FR15 UC-06 | Follow/unfollow readers; suggestions and feed expose only community-visible activity. | TC-026 | Uncovered |
| FR16 UC-08, UC-10 | Readers can report content. Only admins can review reports, dismiss them, remove content, or issue warnings. Each decision is recorded. | TC-027 | Uncovered |

**Coverage summary:** 4 requirements are fully tested (FR3, FR5, FR7, FR8), 4 are partly tested (FR2, FR4, FR6, FR11), and 8 are not yet tested (FR1, FR9, FR10, FR12-FR16). All 16 have planned test cases. These counts describe requirement testing, not how many lines of code were tested.

# **Non Functional Test Coverage**

| ID | Tests | Evidence and remaining work |
| :---- | :---- | :---- |
| NFR1 | TC-028 | The 100-book speed test passed: all 20 searches and all 20 shelf updates finished within two seconds. Timing includes updating the screen and waiting two browser frames. |
| NFR2 | TC-029 | The test is planned. We still need five first-time readers to try it and record their times and actions. |
| NFR3 | TC-030 | The sample keyboard test passed after fixing lost focus in search. We still need to check every control, the full Tab order, and screen-reader use. |
| NFR4 | TC-001/015/020/025/027/031/037 | Tests checked who can change a review and whether unsafe review text stays plain. Real sign-in, password hashing, logout sessions, and server access checks are not built yet. |
| NFR5 | TC-010/022/032/033/039/041 | Saved data stayed after reopening the app. Failed saves kept the old data and showed an error. Tests for preserving old reviews after adding new fields are still planned. |
| NFR6 | TC-034 | The same search, shelf, and progress checks passed with both storage options. The screens use the app rules rather than saving data directly. |
| NFR7 | TC-035 | The planned test uses 10,000 books and 50 users for five minutes. It cannot run until shared server storage is built. |
| NFR8 | TC-007/020/021/023/026/036/040/043 | The demo kept Alice's and Bob's shelves separate and showed public content correctly. Full privacy checks for EPUBs, summaries, groups, and real accounts are still needed. |

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

**Related requirements:** FR1, NFR4

**Preconditions:** Future authentication service; unused email; two browser sessions.

**Steps:** 1\. Register a reader with a valid email and password. 2\. Reject duplicate email and wrong password. 3\. Sign in, capture the session, then sign out. 4\. Retry a protected request with the old session.

**Expected:** Registration succeeds once; passwords are hashed with a dedicated password hash; invalid credentials fail; sign-out invalidates the session.

**Actual:** Blocked: the demo has no sign-up, password storage, or real sign-in sessions.

**Status:** Blocked   **Priority:** High

## **TC-002 Edit profile and retain community reviews**

**Related requirements:** FR2

**Preconditions:** Alice selected; fresh service and b1 available.

**Steps:** 1\. Publish a 4-star b1 review. 2\. Save display name " Alice A " and bio " Bio ". 3\. Read Alice profile and its reviews. 4\. Attempt a blank display name.

**Expected:** Name and bio are trimmed and updated; review remains visible; blank name is rejected.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-003 Search title or author and read details**

**Related requirements:** FR3

**Preconditions:** Fresh catalogue with b1 Pride and Prejudice and b2 Frankenstein.

**Steps:** 1\. Search " PRIDE ". 2\. Search "shelley". 3\. Open b1 details.

**Expected:** Queries are case-insensitive and trimmed; correct book returned; details show title, author and 432 pages.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-004 Empty and unmatched search**

**Related requirements:** FR3

**Preconditions:** Five-book sample catalogue.

**Steps:** 1\. Submit whitespace only. 2\. Search "zzzzzz".

**Expected:** Whitespace returns all five books; unmatched query returns an empty result set; UI no-results text is checked during manual follow-up.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-005 Add and move one primary shelf record**

**Related requirements:** FR4

**Preconditions:** Alice selected and b1 absent from her shelves.

**Steps:** 1\. Add b1 as Want to Read. 2\. Move b1 to Currently Reading. 3\. Attempt Favourite Read as main status.

**Expected:** Exactly one record remains with Currently Reading; invalid main reading status is rejected.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-006 Completion date lifecycle**

**Related requirements:** FR4

**Preconditions:** Alice selected; fixed test clock 2026-11-07T18:00:00Z.

**Steps:** 1\. Mark b1 Completed. 2\. Inspect completedAt. 3\. Move b1 to Want to Read.

**Expected:** Completion date equals the test clock; leaving Completed clears that date.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-007 Remove only the current reader shelf entry**

**Related requirements:** FR4, NFR8

**Preconditions:** Alice and Bob each have b1 on a shelf.

**Steps:** 1\. As Bob remove b1. 2\. Read Bob shelves. 3\. Switch to Alice and read her shelves.

**Expected:** Bob has no b1 entry; Alice entry is retained.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-008 Custom shelf organisation**

**Related requirements:** FR4

**Preconditions:** Future custom-shelf UI and service; Alice owns a b1 entry.

**Steps:** 1\. Create shelf "Summer". 2\. Assign b1 while retaining its main status. 3\. Rename shelf then remove the custom membership.

**Expected:** Custom label changes do not duplicate or erase the main status or progress.

**Actual:** Blocked: custom shelf creation and membership are not implemented.

**Status:** Blocked   **Priority:** Medium

# **Detailed Test Cases Continued**

## **TC-009 Progress boundaries and calculation**

**Related requirements:** FR5

**Preconditions:** Alice has b1 Currently Reading; total 432 pages.

**Steps:** 1\. Save pages 0, 216 and 432 in sequence. 2\. Inspect percentage after each save.

**Expected:** All values accepted; percentages are exactly 0, 50 and 100\.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-010 Reject invalid progress without data loss**

**Related requirements:** FR5, NFR5

**Preconditions:** Alice has b1 page 20 saved.

**Steps:** 1\. Attempt \-1, 433, 1.5, NaN, Infinity and string "10" through the service. 2\. Read the stored page.

**Expected:** Each invalid input is rejected and page 20 remains. UI converts valid numeric input before calling the service.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-011 Unknown and zero page totals**

**Related requirements:** FR5

**Preconditions:** b5 has missing pages; Alice has shelved it.

**Steps:** 1\. Attempt to save page 0\. 2\. Repeat with b5 total pages set to zero.

**Expected:** Both saves are rejected as tracking unavailable; percentage is not calculated.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-012 Prompt before recording completion**

**Related requirements:** FR5, FR4

**Preconditions:** Alice has b1 Currently Reading.

**Steps:** 1\. Save page 432\. 2\. Inspect status and completion prompt flag. 3\. Explicitly move to Completed and repeat save.

**Expected:** Last-page save requests confirmation without changing status; Completed suppresses further prompts.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-013 Review create edit delete and profile link**

**Related requirements:** FR6

**Preconditions:** Alice selected, b1 available, no existing review.

**Steps:** 1\. Publish 4-star review " Good ". 2\. Find it on the book and profile. 3\. Edit to 4.25 stars and "Better". 4\. Delete the review.

**Expected:** One trimmed review is created; edits replace it; deletion removes it from book and profile.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-014 Quarter-star boundaries and increments**

**Related requirements:** FR6, FR11

**Preconditions:** Alice selected and b1 available.

**Steps:** 1\. Save every value from 0.25 to 5 in 0.25 increments. 2\. Attempt 0, 5.25, 4.1, NaN, Infinity and string "4".

**Expected:** All 20 valid values are accepted; every invalid value is rejected without creating a second review.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-015 Only edit or delete your own review**

**Related requirements:** FR6, NFR4

**Preconditions:** Alice has an existing b1 review.

**Steps:** 1\. Switch to Bob. 2\. Attempt to edit Alice review by its ID. 3\. Attempt to delete it. 4\. Read the review.

**Expected:** Both operations are rejected and original text remains. This checks demo checks on who owns a record, not security with real sign-in.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-016 Book-specific threads and replies**

**Related requirements:** FR7

**Preconditions:** Alice selected; b1 and b2 exist; fixed test clock.

**Steps:** 1\. Create a b1 thread. 2\. Reply to its ID. 3\. Inspect b1 and b2 discussions.

**Expected:** b1 contains thread and reply with author, parent and timestamp; b2 contains neither.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-017 Reject invalid discussion contributions**

**Related requirements:** FR7

**Preconditions:** Alice has a thread on b1.

**Steps:** 1\. Attempt whitespace-only post. 2\. Reply to an absent thread. 3\. Reply on b2 using the b1 parent ID.

**Expected:** Every invalid contribution fails; no extra posts are saved.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-018 Spoilers hidden until explicit reveal**

**Related requirements:** FR8

**Preconditions:** Alice posts b1 text "Ending" flagged as spoiler.

**Steps:** 1\. Read discussion without revealed IDs. 2\. Read it with the post ID explicitly revealed. 3\. Read again without that ID.

**Expected:** Hidden view contains no spoiler text; explicit reveal returns text; a new view defaults to hidden.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-019 Page-based spoiler thresholds**

**Related requirements:** FR8

**Preconditions:** Future threshold metadata and UI; readers at different progress points.

**Steps:** 1\. Flag a post at page 200 of 432\. 2\. Open as readers below and above page 200\. 3\. Explicitly reveal as the reader below page 200\.

**Expected:** Future threshold feature respects each reader progress and deliberate reveal; no spoiler text leaks into hidden content.

**Actual:** Blocked: US8 threshold extension deferred; current FR8 boolean flag and reveal are tested in TC-018 and TC-039.

**Status:** Blocked   **Priority:** Medium

## **TC-020 EPUB notes privacy and invalid files**

**Related requirements:** FR9, NFR4, NFR8

**Preconditions:** Future EPUB reader; valid EPUB, corrupt EPUB and non-EPUB files; Alice and Bob.

**Steps:** 1\. Open valid EPUB; create, reopen and delete a passage note. 2\. Attempt Bob access to Alice note. 3\. Import corrupt and unsupported files.

**Expected:** Notes retain correct passage anchors and owner privacy; invalid files show errors without removing saved notes.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Low

# **Detailed Test Cases Continued**

## **TC-021 Date-filtered reading summaries**

**Related requirements:** FR10, NFR8

**Preconditions:** Future analytics; known completion dates including date-range boundaries, genres and authors.

**Steps:** 1\. Select an inclusive date range. 2\. Compare total and per-genre/per-author counts to fixtures. 3\. Select an empty range. 4\. Attempt Bob access to Alice summary.

**Expected:** Counts match boundary fixtures; empty range is zero; Bob cannot retrieve Alice summary.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Low

## **TC-022 Optional sub-ratings warnings and migration**

**Related requirements:** FR11, NFR5

**Preconditions:** Future enhanced review editor; existing overall-only review.

**Steps:** 1\. Reopen old review. 2\. Save without sub-ratings. 3\. Add prose, characters and plot sub-ratings and warnings. 4\. Reject an invalid sub-rating and reopen.

**Expected:** Old review remains readable; fields are optional; valid details persist; invalid save leaves the last saved version intact.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

## **TC-023 Buddy-read invitation and membership privacy**

**Related requirements:** FR12, NFR8

**Preconditions:** Future buddy-read groups; Alice, Bob and non-member Charlie.

**Steps:** 1\. Alice creates b1 group and invites Bob. 2\. Bob rejects then accepts a new invitation. 3\. Charlie attempts direct group read/write. 4\. Bob opens discussion after acceptance.

**Expected:** Rejected or unaccepted members have no access; accepted Bob can read/write; Charlie is denied.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

## **TC-024 Deterministic community recommendations**

**Related requirements:** FR13

**Preconditions:** Future recommendation service; books with 3, 2, 2 and 0 reviews.

**Steps:** 1\. Request recommendations. 2\. Verify descending review counts and alphabetical title tie-break. 3\. Follow each book link. 4\. Repeat with no reviews.

**Expected:** Correct stable order and detail links; empty activity is handled clearly.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

# **Detailed Test Cases Continued**

## **TC-025 Verified author application and admin decision**

**Related requirements:** FR14, NFR4

**Preconditions:** Future author verification; reader, applicant and admin accounts.

**Steps:** 1\. Apply for a specific book. 2\. Attempt verification as ordinary reader. 3\. Approve as admin. 4\. Post as the verified author.

**Expected:** Only admin can verify; badge is tied to the approved author/book; posts visibly identify author; failed applications do not grant a badge.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

## **TC-026 Follow feed without private activity leakage**

**Related requirements:** FR15, NFR8

**Preconditions:** Future follow/feed service; Alice and Bob with public reviews and private shelf activity.

**Steps:** 1\. Alice follows Bob. 2\. Inspect following list, suggestions and feed. 3\. Confirm only public activity appears. 4\. Unfollow and publish another Bob review.

**Expected:** Following list and eligible review feed update; private progress and shelves never appear; unfollowed future activity is excluded.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

## **TC-027 Report and moderate with role enforcement**

**Related requirements:** FR16, NFR4

**Preconditions:** Future reports and moderation; existing review/thread; reader and admin.

**Steps:** 1\. Report content; verify confirmation without automatic removal. 2\. Attempt reader access to queue. 3\. Admin dismisses one report and removes another item. 4\. Resolve a report whose content was already removed.

**Expected:** Reader queue access denied; resolution action, admin and timestamp recorded; removed content hidden; already-removed case handled.

**Actual:** Blocked: this feature has not been built yet.

**Status:** Blocked   **Priority:** Medium

## **TC-028 Measure 100-book browser performance**

**Related requirements:** NFR1

**Preconditions:** Fresh local browser; 100 generated book fixtures; one selected reader; fixed viewport.

**Steps:** 1\. Run 20 title searches. 2\. Run 20 alternating shelf-status saves. 3\. Time submission through DOM update and two animation frames. 4\. Record environment and all timings.

**Expected:** At least 19 of 20 searches AND 19 of 20 shelf updates complete within 2,000 ms.

**Actual:** With 100 books and one reader, all 20 searches and all 20 shelf updates finished within two seconds. The slowest search took 6.5 ms; the slowest update took 6.6 ms.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-029 First-time usability and action count**

**Related requirements:** NFR2

**Preconditions:** Five first-time participants, fresh demo data and a timer; no coaching.

**Steps:** 1\. Give only: "Find Frankenstein, add it, then mark Currently Reading". 2\. Count actions from book details to shelf addition. 3\. Record completion time and errors for each participant.

**Expected:** Shelf addition takes at most three actions; at least four of five participants finish the full task within three minutes.

**Actual:** Blocked: five first-time participants have not been recruited; no user-study results claimed.

**Status:** Blocked   **Priority:** Medium

## **TC-030 Keyboard access labels and focus sample**

**Related requirements:** NFR3

**Preconditions:** Browser with Alice selected and fresh interactive page.

**Steps:** 1\. Inspect discovery input labels. 2\. Focus search once, then type and use Tab/Enter to open Frankenstein. 3\. Use keyboard after setting focus to shelf, progress and review controls. 4\. Inspect focus outline and textual feedback.

**Expected:** Sample operations work without mouse clicks; discovery controls have labels; focus is visible and status/error text is readable. Full sequential-navigation and screen-reader audit remains required.

**Actual:** Search, open, add, progress and review operated with keyboard after a test script setting the keyboard focus; visible 3px outline and labels checked on discovery. Full manual keyboard and assistive-technology audit pending.

**Status:** Pass   **Priority:** Medium

## **TC-031 Check real sign-in and access rules**

**Related requirements:** NFR4, FR1, FR2, FR4, FR6, FR9

**Preconditions:** Future server-side sign-in; two accounts; password database and ended session fixtures.

**Steps:** 1\. Inspect password hashes. 2\. Use Bob credentials to alter Alice profile, shelf, review and note by ID. 3\. Sign out Alice and replay the old session.

**Expected:** Every attempt to change another user's data and request using a session that has ended is denied server-side; passwords use a a password-hashing tool designed to store passwords safely.

**Actual:** Blocked: browser demo selection and localStorage cannot meet server-side sign-in or security requirements.

**Status:** Blocked   **Priority:** High

## **TC-032 Keep saved data when the app reopens**

**Related requirements:** NFR5, FR2, FR4, FR5, FR6, FR7

**Preconditions:** Map-backed test version of browser storage; fresh service.

**Steps:** 1\. Save profile, shelf, page, review and discussion. 2\. Construct a new service using the same stored JSON. 3\. Read each record.

**Expected:** All saved values remain. TC-039 separately verifies an actual browser reload.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-033 Failed saves keep existing data**

**Related requirements:** NFR5

**Preconditions:** MemoryStore with one saved shelf; inject save exception "Disk full".

**Steps:** 1\. Try changing shelf, progress, removing entry, publishing review/post and editing profile. 2\. After each error compare service state and adapter state to original.

**Expected:** Every operation throws; neither last saved state nor in-memory application state changes.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-034 Change storage without changing the screens**

**Related requirements:** NFR6

**Preconditions:** MemoryStore and test version of BrowserStore implementing load/save.

**Steps:** 1\. Run identical search, shelf and progress assertions with each adapter. 2\. Review UI imports and service dependency boundaries.

**Expected:** Same application contract works with both adapters; screens use ReadingService methods; no direct data reads/writes in screen handlers. UI composition still selects an adapter.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** Medium

## **TC-035 Future test with many books and users**

**Related requirements:** NFR7

**Preconditions:** Future deployed persistent service; 10,000 books; 50 concurrent authenticated users; recorded hardware.

**Steps:** 1\. Run mixed search and shelf-update workload for five minutes. 2\. Measure each action from the user's action to the visible result. 3\. Calculate fraction within three seconds and error rate.

**Expected:** At least 95% of actions finish within three seconds and error rate is below 1%; publish hardware, workload and raw measurements.

**Actual:** Blocked: persistent multi-user service does not exist; local performance timings cannot validate this target.

**Status:** Blocked   **Priority:** Low

## **TC-036 Private records cannot be retrieved by another account**

**Related requirements:** NFR8, FR4, FR5, FR9, FR10, FR12

**Preconditions:** Future server with real sign-in; Alice private shelves, progress, EPUB, notes, summary and group.

**Steps:** 1\. As Bob request each Alice resource by direct ID and list endpoints. 2\. Attempt unaccepted group discussion reads. 3\. Verify public profile, review and forum remain accessible.

**Expected:** All access to private records is denied, not just hidden in UI; public resources remain visible.

**Actual:** Blocked: full privacy needs server storage protected by real sign-in; demo isolation in TC-043 is insufficient.

**Status:** Blocked   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-037 Render untrusted review text safely**

**Related requirements:** FR6, NFR4

**Preconditions:** Browser demo with Alice selected and b1 details.

**Steps:** 1\. Save review text \<img src=x onerror="window.xssExecuted=true"\>. 2\. Inspect rendered DOM and window execution marker.

**Expected:** Text displays literally; no injected image or script executes. This is one rendering check, not a complete security audit.

**Actual:** Review payload rendered as literal text; no image element or script execution.

**Status:** Pass   **Priority:** High

## **TC-038 Guest access boundary**

**Related requirements:** FR1, FR2, FR3, FR4, FR5, FR6, FR7

**Preconditions:** Fresh service signed out.

**Steps:** 1\. Search and read public reviews. 2\. Attempt private shelf access and each profile/shelf/progress/review/post mutation.

**Expected:** Public reads work; all listed operations requiring a selected reader are rejected. Real authentication remains deferred.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-039 Browser reading and discussion journey**

**Related requirements:** FR3, FR4, FR5, FR6, FR7, FR8, NFR5

**Preconditions:** Fresh browser using the five-book catalogue; Alice and Bob demo identities.

**Steps:** 1\. Search Austen and open book. 2\. Add, move, reach final page and confirm Completed. 3\. Save 4.25-star review; post spoiler thread and reply. 4\. Reveal spoiler then switch to Bob. 5\. Reload, select Alice and inspect shelf.

**Expected:** Workflow renders correct data; spoiler text absent before reveal and hidden again after reader switch; Bob shelves empty; Alice Completed survives reload; no page errors.

**Actual:** Search, add, move, progress prompt, review, spoiler reveal, reply, reader isolation and real page reload passed; two screenshots saved; no page errors.

**Status:** Pass   **Priority:** High

## **TC-040 Public profile review and discussion visibility**

**Related requirements:** FR2, FR6, FR7, NFR8

**Preconditions:** Alice selected in fresh service.

**Steps:** 1\. Publish review and ordinary post. 2\. Sign out and read book reviews, Alice public profile and discussion.

**Expected:** All community-visible content remains readable; no private shelves are included in the public profile object.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

# **Detailed Test Cases Continued**

## **TC-041 Browser save error and truthful feedback**

**Related requirements:** NFR5

**Preconditions:** Browser has a saved Completed entry; inject localStorage.setItem failure.

**Steps:** 1\. Try changing status to Want to Read. 2\. Inspect message. 3\. Restore storage and reopen My shelves.

**Expected:** Error text appears instead of success; last saved Completed status remains.

**Actual:** Failed browser save displayed an error and retained Completed; no success message.

**Status:** Pass   **Priority:** High

## **TC-042 Reject unknown resources and unshelved progress**

**Related requirements:** FR3, FR4, FR5, FR6, FR7

**Preconditions:** Alice selected with no shelves.

**Steps:** 1\. Request absent book details. 2\. Try shelf, review and thread with absent book ID. 3\. Update b1 progress before shelving it.

**Expected:** Every invalid operation is rejected; no shelf records are created.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-043 Demo reading-list separation**

**Related requirements:** FR4, FR5, NFR8

**Preconditions:** Alice selected in fresh service.

**Steps:** 1\. Alice shelves b1. 2\. Switch to Bob and try shelves("alice"). 3\. Bob shelves b2. 4\. Switch back to Alice.

**Expected:** Bob gets no Alice list and owner override is rejected; Alice still sees only b1. Browser data remains inspectable locally, so this is not full NFR8 checking.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** High

## **TC-044 Completion date remains stable on repeat saves**

**Related requirements:** FR4

**Preconditions:** Alice selected; controlled clock can advance one day.

**Steps:** 1\. Complete b1. 2\. Advance clock and save Completed again. 3\. Move away from Completed then complete again.

**Expected:** Repeated same-status save preserves first date; a later new completion records the new date.

**Actual:** Passed. See this test's result in unit-results.tap.

**Status:** Pass   **Priority:** Medium

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

