# Detailed Test Cases

| Field | Details |
| --- | --- |
| Test Case ID | TC-001 |
| Title | Account registration and session lifecycle |
| Related Requirement ID(s) | FR1, NFR4 |
| Preconditions | Future authentication service; unused email; two browser sessions. |
| Steps | 1. Register a reader with a valid email and password.<br>2. Reject duplicate email and wrong password.<br>3. Sign in, capture the session, then sign out.<br>4. Retry a protected request with the old session. |
| Expected Result | Registration succeeds once; passwords are hashed with a dedicated password hash; invalid credentials fail; sign-out invalidates the session. |
| Actual Result | Blocked: the demo has no sign-up, password storage, or real sign-in sessions. |
| Status | Blocked |
| Priority | High |
| Test Case ID | TC-002 |
| Title | Edit profile and retain community reviews |
| Related Requirement ID(s) | FR2 |
| Preconditions | Alice selected; fresh service and b1 available. |
| Steps | 1. Publish a 4-star b1 review.<br>2. Save display name " Alice A " and bio " Bio ".<br>3. Read Alice profile and its reviews.<br>4. Attempt a blank display name. |
| Expected Result | Name and bio are trimmed and updated; review remains visible; blank name is rejected. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-003 |
| Title | Search title or author and read details |
| Related Requirement ID(s) | FR3 |
| Preconditions | Fresh catalogue with b1 Pride and Prejudice and b2 Frankenstein. |
| Steps | 1. Search " PRIDE ".<br>2. Search "shelley".<br>3. Open b1 details. |
| Expected Result | Queries are case-insensitive and trimmed; correct book returned; details show title, author and 432 pages. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-004 |
| Title | Empty and unmatched search |
| Related Requirement ID(s) | FR3 |
| Preconditions | Five-book sample catalogue. |
| Steps | 1. Submit whitespace only.<br>2. Search "zzzzzz". |
| Expected Result | Whitespace returns all five books; unmatched query returns an empty result set; UI no-results text is checked during manual follow-up. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-005 |
| Title | Add and move one primary shelf record |
| Related Requirement ID(s) | FR4 |
| Preconditions | Alice selected and b1 absent from her shelves. |
| Steps | 1. Add b1 as Want to Read.<br>2. Move b1 to Currently Reading.<br>3. Attempt Favourite Read as main status. |
| Expected Result | Exactly one record remains with Currently Reading; invalid main reading status is rejected. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-006 |
| Title | Completion date lifecycle |
| Related Requirement ID(s) | FR4 |
| Preconditions | Alice selected; fixed test clock 2026-11-07T18:00:00Z. |
| Steps | 1. Mark b1 Completed.<br>2. Inspect completedAt.<br>3. Move b1 to Want to Read. |
| Expected Result | Completion date equals the test clock; leaving Completed clears that date. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-007 |
| Title | Remove only the current reader shelf entry |
| Related Requirement ID(s) | FR4, NFR8 |
| Preconditions | Alice and Bob each have b1 on a shelf. |
| Steps | 1. As Bob remove b1.<br>2. Read Bob shelves.<br>3. Switch to Alice and read her shelves. |
| Expected Result | Bob has no b1 entry; Alice entry is retained. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-008 |
| Title | Custom shelf organisation |
| Related Requirement ID(s) | FR4 |
| Preconditions | Future custom-shelf UI and service; Alice owns a b1 entry. |
| Steps | 1. Create shelf "Summer".<br>2. Assign b1 while retaining its main status.<br>3. Rename shelf then remove the custom membership. |
| Expected Result | Custom label changes do not duplicate or erase the main status or progress. |
| Actual Result | Blocked: custom shelf creation and membership are not implemented. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-009 |
| Title | Progress boundaries and calculation |
| Related Requirement ID(s) | FR5 |
| Preconditions | Alice has b1 Currently Reading; total 432 pages. |
| Steps | 1. Save pages 0, 216 and 432 in sequence.<br>2. Inspect percentage after each save. |
| Expected Result | All values accepted; percentages are exactly 0, 50 and 100. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-010 |
| Title | Reject invalid progress without data loss |
| Related Requirement ID(s) | FR5, NFR5 |
| Preconditions | Alice has b1 page 20 saved. |
| Steps | 1. Attempt -1, 433, 1.5, NaN, Infinity and string "10" through the service.<br>2. Read the stored page. |
| Expected Result | Each invalid input is rejected and page 20 remains. UI converts valid numeric input before calling the service. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-011 |
| Title | Unknown and zero page totals |
| Related Requirement ID(s) | FR5 |
| Preconditions | b5 has missing pages; Alice has shelved it. |
| Steps | 1. Attempt to save page 0.<br>2. Repeat with b5 total pages set to zero. |
| Expected Result | Both saves are rejected as tracking unavailable; percentage is not calculated. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-012 |
| Title | Prompt before recording completion |
| Related Requirement ID(s) | FR5, FR4 |
| Preconditions | Alice has b1 Currently Reading. |
| Steps | 1. Save page 432.<br>2. Inspect status and completion prompt flag.<br>3. Explicitly move to Completed and repeat save. |
| Expected Result | Last-page save requests confirmation without changing status; Completed suppresses further prompts. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-013 |
| Title | Review create edit delete and profile link |
| Related Requirement ID(s) | FR6 |
| Preconditions | Alice selected, b1 available, no existing review. |
| Steps | 1. Publish 4-star review " Good ".<br>2. Find it on the book and profile.<br>3. Edit to 4.25 stars and "Better".<br>4. Delete the review. |
| Expected Result | One trimmed review is created; edits replace it; deletion removes it from book and profile. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-014 |
| Title | Quarter-star boundaries and increments |
| Related Requirement ID(s) | FR6, FR11 |
| Preconditions | Alice selected and b1 available. |
| Steps | 1. Save every value from 0.25 to 5 in 0.25 increments.<br>2. Attempt 0, 5.25, 4.1, NaN, Infinity and string "4". |
| Expected Result | All 20 valid values are accepted; every invalid value is rejected without creating a second review. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-015 |
| Title | Only edit or delete your own review |
| Related Requirement ID(s) | FR6, NFR4 |
| Preconditions | Alice has an existing b1 review. |
| Steps | 1. Switch to Bob.<br>2. Attempt to edit Alice review by its ID.<br>3. Attempt to delete it.<br>4. Read the review. |
| Expected Result | Both operations are rejected and original text remains. This checks demo checks on who owns a record, not security with real sign-in. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-016 |
| Title | Book-specific threads and replies |
| Related Requirement ID(s) | FR7 |
| Preconditions | Alice selected; b1 and b2 exist; fixed test clock. |
| Steps | 1. Create a b1 thread.<br>2. Reply to its ID.<br>3. Inspect b1 and b2 discussions. |
| Expected Result | b1 contains thread and reply with author, parent and timestamp; b2 contains neither. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-017 |
| Title | Reject invalid discussion contributions |
| Related Requirement ID(s) | FR7 |
| Preconditions | Alice has a thread on b1. |
| Steps | 1. Attempt whitespace-only post.<br>2. Reply to an absent thread.<br>3. Reply on b2 using the b1 parent ID. |
| Expected Result | Every invalid contribution fails; no extra posts are saved. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-018 |
| Title | Spoilers hidden until explicit reveal |
| Related Requirement ID(s) | FR8 |
| Preconditions | Alice posts b1 text "Ending" flagged as spoiler. |
| Steps | 1. Read discussion without revealed IDs.<br>2. Read it with the post ID explicitly revealed.<br>3. Read again without that ID. |
| Expected Result | Hidden view contains no spoiler text; explicit reveal returns text; a new view defaults to hidden. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-019 |
| Title | Page-based spoiler thresholds |
| Related Requirement ID(s) | FR8 |
| Preconditions | Future threshold metadata and UI; readers at different progress points. |
| Steps | 1. Flag a post at page 200 of 432.<br>2. Open as readers below and above page 200.<br>3. Explicitly reveal as the reader below page 200. |
| Expected Result | Future threshold feature respects each reader progress and deliberate reveal; no spoiler text leaks into hidden content. |
| Actual Result | Blocked: US8 threshold extension deferred; current FR8 boolean flag and reveal are tested in TC-018 and TC-039. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-020 |
| Title | EPUB notes privacy and invalid files |
| Related Requirement ID(s) | FR9, NFR4, NFR8 |
| Preconditions | Future EPUB reader; valid EPUB, corrupt EPUB and non-EPUB files; Alice and Bob. |
| Steps | 1. Open valid EPUB; create, reopen and delete a passage note.<br>2. Attempt Bob access to Alice note.<br>3. Import corrupt and unsupported files. |
| Expected Result | Notes retain correct passage anchors and owner privacy; invalid files show errors without removing saved notes. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Low |
| Test Case ID | TC-021 |
| Title | Date-filtered reading summaries |
| Related Requirement ID(s) | FR10, NFR8 |
| Preconditions | Future analytics; known completion dates including date-range boundaries, genres and authors. |
| Steps | 1. Select an inclusive date range.<br>2. Compare total and per-genre/per-author counts to fixtures.<br>3. Select an empty range.<br>4. Attempt Bob access to Alice summary. |
| Expected Result | Counts match boundary fixtures; empty range is zero; Bob cannot retrieve Alice summary. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Low |
| Test Case ID | TC-022 |
| Title | Optional sub-ratings warnings and migration |
| Related Requirement ID(s) | FR11, NFR5 |
| Preconditions | Future enhanced review editor; existing overall-only review. |
| Steps | 1. Reopen old review.<br>2. Save without sub-ratings.<br>3. Add prose, characters and plot sub-ratings and warnings.<br>4. Reject an invalid sub-rating and reopen. |
| Expected Result | Old review remains readable; fields are optional; valid details persist; invalid save leaves the last saved version intact. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-023 |
| Title | Buddy-read invitation and membership privacy |
| Related Requirement ID(s) | FR12, NFR8 |
| Preconditions | Future buddy-read groups; Alice, Bob and non-member Charlie. |
| Steps | 1. Alice creates b1 group and invites Bob.<br>2. Bob rejects then accepts a new invitation.<br>3. Charlie attempts direct group read/write.<br>4. Bob opens discussion after acceptance. |
| Expected Result | Rejected or unaccepted members have no access; accepted Bob can read/write; Charlie is denied. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-024 |
| Title | Deterministic community recommendations |
| Related Requirement ID(s) | FR13 |
| Preconditions | Future recommendation service; books with 3, 2, 2 and 0 reviews. |
| Steps | 1. Request recommendations.<br>2. Verify descending review counts and alphabetical title tie-break.<br>3. Follow each book link.<br>4. Repeat with no reviews. |
| Expected Result | Correct stable order and detail links; empty activity is handled clearly. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-025 |
| Title | Verified author application and admin decision |
| Related Requirement ID(s) | FR14, NFR4 |
| Preconditions | Future author verification; reader, applicant and admin accounts. |
| Steps | 1. Apply for a specific book.<br>2. Attempt verification as ordinary reader.<br>3. Approve as admin.<br>4. Post as the verified author. |
| Expected Result | Only admin can verify; badge is tied to the approved author/book; posts visibly identify author; failed applications do not grant a badge. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-026 |
| Title | Follow feed without private activity leakage |
| Related Requirement ID(s) | FR15, NFR8 |
| Preconditions | Future follow/feed service; Alice and Bob with public reviews and private shelf activity. |
| Steps | 1. Alice follows Bob.<br>2. Inspect following list, suggestions and feed.<br>3. Confirm only public activity appears.<br>4. Unfollow and publish another Bob review. |
| Expected Result | Following list and eligible review feed update; private progress and shelves never appear; unfollowed future activity is excluded. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-027 |
| Title | Report and moderate with role enforcement |
| Related Requirement ID(s) | FR16, NFR4 |
| Preconditions | Future reports and moderation; existing review/thread; reader and admin. |
| Steps | 1. Report content; verify confirmation without automatic removal.<br>2. Attempt reader access to queue.<br>3. Admin dismisses one report and removes another item.<br>4. Resolve a report whose content was already removed. |
| Expected Result | Reader queue access denied; resolution action, admin and timestamp recorded; removed content hidden; already-removed case handled. |
| Actual Result | Blocked: this feature has not been built yet. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-028 |
| Title | Measure 100-book browser performance |
| Related Requirement ID(s) | NFR1 |
| Preconditions | Fresh local browser; 100 generated book fixtures; one selected reader; fixed viewport. |
| Steps | 1. Run 20 title searches.<br>2. Run 20 alternating shelf-status saves.<br>3. Time submission through DOM update and two animation frames.<br>4. Record environment and all timings. |
| Expected Result | At least 19 of 20 searches AND 19 of 20 shelf updates complete within 2,000 ms. |
| Actual Result | With 100 books and one reader, all 20 searches and all 20 shelf updates finished within two seconds. The slowest search took 6.5 ms; the slowest update took 6.6 ms. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-029 |
| Title | First-time usability and action count |
| Related Requirement ID(s) | NFR2 |
| Preconditions | Five first-time participants, fresh demo data and a timer; no coaching. |
| Steps | 1. Give only: "Find Frankenstein, add it, then mark Currently Reading".<br>2. Count actions from book details to shelf addition.<br>3. Record completion time and errors for each participant. |
| Expected Result | Shelf addition takes at most three actions; at least four of five participants finish the full task within three minutes. |
| Actual Result | Blocked: five first-time participants have not been recruited; no user-study results claimed. |
| Status | Blocked |
| Priority | Medium |
| Test Case ID | TC-030 |
| Title | Keyboard access labels and focus sample |
| Related Requirement ID(s) | NFR3 |
| Preconditions | Browser with Alice selected and fresh interactive page. |
| Steps | 1. Inspect discovery input labels.<br>2. Focus search once, then type and use Tab/Enter to open Frankenstein.<br>3. Use keyboard after setting focus to shelf, progress and review controls.<br>4. Inspect focus outline and textual feedback. |
| Expected Result | Sample operations work without mouse clicks; discovery controls have labels; focus is visible and status/error text is readable. Full sequential-navigation and screen-reader audit remains required. |
| Actual Result | Search, open, add, progress and review operated with keyboard after a test script setting the keyboard focus; visible 3px outline and labels checked on discovery. Full manual keyboard and assistive-technology audit pending. |
| Status | Pass |
| Priority | Medium |
| Test Case ID | TC-031 |
| Title | Check real sign-in and access rules |
| Related Requirement ID(s) | NFR4, FR1, FR2, FR4, FR6, FR9 |
| Preconditions | Future server-side sign-in; two accounts; password database and ended session fixtures. |
| Steps | 1. Inspect password hashes.<br>2. Use Bob credentials to alter Alice profile, shelf, review and note by ID.<br>3. Sign out Alice and replay the old session. |
| Expected Result | Every attempt to change another user's data and request using a session that has ended is denied server-side; passwords use a a password-hashing tool designed to store passwords safely. |
| Actual Result | Blocked: browser demo selection and localStorage cannot meet server-side sign-in or security requirements. |
| Status | Blocked |
| Priority | High |
| Test Case ID | TC-032 |
| Title | Keep saved data when the app reopens |
| Related Requirement ID(s) | NFR5, FR2, FR4, FR5, FR6, FR7 |
| Preconditions | Map-backed test version of browser storage; fresh service. |
| Steps | 1. Save profile, shelf, page, review and discussion.<br>2. Construct a new service using the same stored JSON.<br>3. Read each record. |
| Expected Result | All saved values remain. TC-039 separately verifies an actual browser reload. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-033 |
| Title | Failed saves keep existing data |
| Related Requirement ID(s) | NFR5 |
| Preconditions | MemoryStore with one saved shelf; inject save exception "Disk full". |
| Steps | 1. Try changing shelf, progress, removing entry, publishing review/post and editing profile.<br>2. After each error compare service state and adapter state to original. |
| Expected Result | Every operation throws; neither last saved state nor in-memory application state changes. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-034 |
| Title | Change storage without changing the screens |
| Related Requirement ID(s) | NFR6 |
| Preconditions | MemoryStore and test version of BrowserStore implementing load/save. |
| Steps | 1. Run identical search, shelf and progress assertions with each adapter.<br>2. Review UI imports and service dependency boundaries. |
| Expected Result | Same application contract works with both adapters; screens use ReadingService methods; no direct data reads/writes in screen handlers. UI composition still selects an adapter. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | Medium |
| Test Case ID | TC-035 |
| Title | Future test with many books and users |
| Related Requirement ID(s) | NFR7 |
| Preconditions | Future deployed persistent service; 10,000 books; 50 concurrent authenticated users; recorded hardware. |
| Steps | 1. Run mixed search and shelf-update workload for five minutes.<br>2. Measure each action from the user's action to the visible result.<br>3. Calculate fraction within three seconds and error rate. |
| Expected Result | At least 95% of actions finish within three seconds and error rate is below 1%; publish hardware, workload and raw measurements. |
| Actual Result | Blocked: persistent multi-user service does not exist; local performance timings cannot validate this target. |
| Status | Blocked |
| Priority | Low |
| Test Case ID | TC-036 |
| Title | Private records cannot be retrieved by another account |
| Related Requirement ID(s) | NFR8, FR4, FR5, FR9, FR10, FR12 |
| Preconditions | Future server with real sign-in; Alice private shelves, progress, EPUB, notes, summary and group. |
| Steps | 1. As Bob request each Alice resource by direct ID and list endpoints.<br>2. Attempt unaccepted group discussion reads.<br>3. Verify public profile, review and forum remain accessible. |
| Expected Result | All access to private records is denied, not just hidden in UI; public resources remain visible. |
| Actual Result | Blocked: full privacy needs server storage protected by real sign-in; demo isolation in TC-043 is insufficient. |
| Status | Blocked |
| Priority | High |
| Test Case ID | TC-037 |
| Title | Render untrusted review text safely |
| Related Requirement ID(s) | FR6, NFR4 |
| Preconditions | Browser demo with Alice selected and b1 details. |
| Steps | 1. Save review text <img src=x onerror="window.xssExecuted=true">.<br>2. Inspect rendered DOM and window execution marker. |
| Expected Result | Text displays literally; no injected image or script executes. This is one rendering check, not a complete security audit. |
| Actual Result | Review payload rendered as literal text; no image element or script execution. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-038 |
| Title | Guest access boundary |
| Related Requirement ID(s) | FR1, FR2, FR3, FR4, FR5, FR6, FR7 |
| Preconditions | Fresh service signed out. |
| Steps | 1. Search and read public reviews.<br>2. Attempt private shelf access and each profile/shelf/progress/review/post mutation. |
| Expected Result | Public reads work; all listed operations requiring a selected reader are rejected. Real authentication remains deferred. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-039 |
| Title | Browser reading and discussion journey |
| Related Requirement ID(s) | FR3, FR4, FR5, FR6, FR7, FR8, NFR5 |
| Preconditions | Fresh browser using the five-book catalogue; Alice and Bob demo identities. |
| Steps | 1. Search Austen and open book.<br>2. Add, move, reach final page and confirm Completed.<br>3. Save 4.25-star review; post spoiler thread and reply.<br>4. Reveal spoiler then switch to Bob.<br>5. Reload, select Alice and inspect shelf. |
| Expected Result | Workflow renders correct data; spoiler text absent before reveal and hidden again after reader switch; Bob shelves empty; Alice Completed survives reload; no page errors. |
| Actual Result | Search, add, move, progress prompt, review, spoiler reveal, reply, reader isolation and real page reload passed; two screenshots saved; no page errors. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-040 |
| Title | Public profile review and discussion visibility |
| Related Requirement ID(s) | FR2, FR6, FR7, NFR8 |
| Preconditions | Alice selected in fresh service. |
| Steps | 1. Publish review and ordinary post.<br>2. Sign out and read book reviews, Alice public profile and discussion. |
| Expected Result | All community-visible content remains readable; no private shelves are included in the public profile object. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-041 |
| Title | Browser save error and truthful feedback |
| Related Requirement ID(s) | NFR5 |
| Preconditions | Browser has a saved Completed entry; inject localStorage.setItem failure. |
| Steps | 1. Try changing status to Want to Read.<br>2. Inspect message.<br>3. Restore storage and reopen My shelves. |
| Expected Result | Error text appears instead of success; last saved Completed status remains. |
| Actual Result | Failed browser save displayed an error and retained Completed; no success message. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-042 |
| Title | Reject unknown resources and unshelved progress |
| Related Requirement ID(s) | FR3, FR4, FR5, FR6, FR7 |
| Preconditions | Alice selected with no shelves. |
| Steps | 1. Request absent book details.<br>2. Try shelf, review and thread with absent book ID.<br>3. Update b1 progress before shelving it. |
| Expected Result | Every invalid operation is rejected; no shelf records are created. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-043 |
| Title | Demo reading-list separation |
| Related Requirement ID(s) | FR4, FR5, NFR8 |
| Preconditions | Alice selected in fresh service. |
| Steps | 1. Alice shelves b1.<br>2. Switch to Bob and try shelves("alice").<br>3. Bob shelves b2.<br>4. Switch back to Alice. |
| Expected Result | Bob gets no Alice list and owner override is rejected; Alice still sees only b1. Browser data remains inspectable locally, so this is not full NFR8 checking. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | High |
| Test Case ID | TC-044 |
| Title | Completion date remains stable on repeat saves |
| Related Requirement ID(s) | FR4 |
| Preconditions | Alice selected; controlled clock can advance one day. |
| Steps | 1. Complete b1.<br>2. Advance clock and save Completed again.<br>3. Move away from Completed then complete again. |
| Expected Result | Repeated same-status save preserves first date; a later new completion records the new date. |
| Actual Result | Passed. See this test's result in unit-results.tap. |
| Status | Pass |
| Priority | Medium |
