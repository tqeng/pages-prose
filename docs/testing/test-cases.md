# Detailed Test Cases

44 designed cases. Actual execution evidence is retained in the adjacent result files.


## TC-001 Account registration and session lifecycle

Requirements: FR1, NFR4

Preconditions: Future authentication service; unused email; two browser sessions.

1. Register a reader with a valid email and password.

2. Reject duplicate email and wrong password.

3. Sign in, capture the session, then sign out.

4. Retry a protected request with the old session.

Expected: Registration succeeds once; passwords are hashed with a dedicated password hash; invalid credentials fail; sign-out invalidates the session.

Actual: Blocked: demo selection has no registration, password storage or authenticated server session.

Status: Blocked; priority: High


## TC-002 Edit profile and retain community reviews

Requirements: FR2

Preconditions: Alice selected; fresh service and b1 available.

1. Publish a 4-star b1 review.

2. Save display name " Alice A " and bio " Bio ".

3. Read Alice profile and its reviews.

4. Attempt a blank display name.

Expected: Name and bio are trimmed and updated; review remains visible; blank name is rejected.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-003 Search title or author and read details

Requirements: FR3

Preconditions: Fresh catalogue with b1 Pride and Prejudice and b2 Frankenstein.

1. Search " PRIDE ".

2. Search "shelley".

3. Open b1 details.

Expected: Queries are case-insensitive and trimmed; correct book returned; details show title, author and 432 pages.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-004 Empty and unmatched search

Requirements: FR3

Preconditions: Five-book sample catalogue.

1. Submit whitespace only.

2. Search "zzzzzz".

Expected: Whitespace returns all five books; unmatched query returns an empty result set; UI no-results text is checked during manual follow-up.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-005 Add and move one primary shelf record

Requirements: FR4

Preconditions: Alice selected and b1 absent from her shelves.

1. Add b1 as Want to Read.

2. Move b1 to Currently Reading.

3. Attempt Favourite Read as primary status.

Expected: Exactly one record remains with Currently Reading; unsupported primary status is rejected.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-006 Completion date lifecycle

Requirements: FR4

Preconditions: Alice selected; fixed test clock 2026-11-07T18:00:00Z.

1. Mark b1 Completed.

2. Inspect completedAt.

3. Move b1 to Want to Read.

Expected: Completion date equals the test clock; leaving Completed clears that date.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-007 Remove only the current reader shelf entry

Requirements: FR4, NFR8

Preconditions: Alice and Bob each have b1 on a shelf.

1. As Bob remove b1.

2. Read Bob shelves.

3. Switch to Alice and read her shelves.

Expected: Bob has no b1 entry; Alice entry is retained.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-008 Custom shelf organisation

Requirements: FR4

Preconditions: Future custom-shelf UI and service; Alice owns a b1 entry.

1. Create shelf "Summer".

2. Assign b1 while retaining its primary status.

3. Rename shelf then remove the custom membership.

Expected: Custom label changes do not duplicate or erase the primary status or progress.

Actual: Blocked: custom shelf creation and membership are not implemented.

Status: Blocked; priority: Medium


## TC-009 Progress boundaries and calculation

Requirements: FR5

Preconditions: Alice has b1 Currently Reading; total 432 pages.

1. Save pages 0, 216 and 432 in sequence.

2. Inspect percentage after each save.

Expected: All values accepted; percentages are exactly 0, 50 and 100.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-010 Reject invalid progress without data loss

Requirements: FR5, NFR5

Preconditions: Alice has b1 page 20 saved.

1. Attempt -1, 433, 1.5, NaN, Infinity and string "10" through the service.

2. Read the stored page.

Expected: Each invalid input is rejected and page 20 remains. UI converts valid numeric input before calling the service.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-011 Unknown and zero page totals

Requirements: FR5

Preconditions: b5 has missing pages; Alice has shelved it.

1. Attempt to save page 0.

2. Repeat with b5 total pages set to zero.

Expected: Both saves are rejected as tracking unavailable; percentage is not calculated.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-012 Prompt before recording completion

Requirements: FR5, FR4

Preconditions: Alice has b1 Currently Reading.

1. Save page 432.

2. Inspect status and completion prompt flag.

3. Explicitly move to Completed and repeat save.

Expected: Last-page save requests confirmation without changing status; Completed suppresses further prompts.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-013 Review create edit delete and profile link

Requirements: FR6

Preconditions: Alice selected, b1 available, no existing review.

1. Publish 4-star review " Good ".

2. Find it on the book and profile.

3. Edit to 4.25 stars and "Better".

4. Delete the review.

Expected: One trimmed review is created; edits replace it; deletion removes it from book and profile.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-014 Quarter-star boundaries and increments

Requirements: FR6, FR11

Preconditions: Alice selected and b1 available.

1. Save every value from 0.25 to 5 in 0.25 increments.

2. Attempt 0, 5.25, 4.1, NaN, Infinity and string "4".

Expected: All 20 valid values are accepted; every invalid value is rejected without creating a second review.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-015 Review ownership through application rules

Requirements: FR6, NFR4

Preconditions: Alice has an existing b1 review.

1. Switch to Bob.

2. Attempt to edit Alice review by its ID.

3. Attempt to delete it.

4. Read the review.

Expected: Both operations are rejected and original text remains. This checks demo service ownership, not authenticated security.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-016 Book-specific threads and replies

Requirements: FR7

Preconditions: Alice selected; b1 and b2 exist; fixed test clock.

1. Create a b1 thread.

2. Reply to its ID.

3. Inspect b1 and b2 discussions.

Expected: b1 contains thread and reply with author, parent and timestamp; b2 contains neither.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-017 Reject invalid discussion contributions

Requirements: FR7

Preconditions: Alice has a thread on b1.

1. Attempt whitespace-only post.

2. Reply to an absent thread.

3. Reply on b2 using the b1 parent ID.

Expected: Every invalid contribution fails; no extra posts are saved.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-018 Spoilers hidden until explicit reveal

Requirements: FR8

Preconditions: Alice posts b1 text "Ending" flagged as spoiler.

1. Read discussion without revealed IDs.

2. Read it with the post ID explicitly revealed.

3. Read again without that ID.

Expected: Hidden view contains no spoiler text; explicit reveal returns text; a new view defaults to hidden.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-019 Page-based spoiler thresholds

Requirements: FR8

Preconditions: Future threshold metadata and UI; readers at different progress points.

1. Flag a post at page 200 of 432.

2. Open as readers below and above page 200.

3. Explicitly reveal as the reader below page 200.

Expected: Future threshold feature respects each reader progress and deliberate reveal; no spoiler text leaks into hidden content.

Actual: Blocked: US8 threshold extension deferred; current FR8 boolean flag and reveal are tested in TC-018 and TC-039.

Status: Blocked; priority: Medium


## TC-020 EPUB notes privacy and invalid files

Requirements: FR9, NFR4, NFR8

Preconditions: Future EPUB reader; valid EPUB, corrupt EPUB and non-EPUB files; Alice and Bob.

1. Open valid EPUB; create, reopen and delete a passage note.

2. Attempt Bob access to Alice note.

3. Import corrupt and unsupported files.

Expected: Notes retain correct passage anchors and owner privacy; invalid files show errors without removing saved notes.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Low


## TC-021 Date-filtered reading summaries

Requirements: FR10, NFR8

Preconditions: Future analytics; known completion dates including date-range boundaries, genres and authors.

1. Select an inclusive date range.

2. Compare total and per-genre/per-author counts to fixtures.

3. Select an empty range.

4. Attempt Bob access to Alice summary.

Expected: Counts match boundary fixtures; empty range is zero; Bob cannot retrieve Alice summary.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Low


## TC-022 Optional sub-ratings warnings and migration

Requirements: FR11, NFR5

Preconditions: Future enhanced review editor; existing overall-only review.

1. Reopen old review.

2. Save without sub-ratings.

3. Add prose, characters and plot sub-ratings and warnings.

4. Reject an invalid sub-rating and reopen.

Expected: Old review remains readable; fields are optional; valid details persist; invalid save leaves the last saved version intact.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-023 Buddy-read invitation and membership privacy

Requirements: FR12, NFR8

Preconditions: Future buddy-read groups; Alice, Bob and non-member Charlie.

1. Alice creates b1 group and invites Bob.

2. Bob rejects then accepts a new invitation.

3. Charlie attempts direct group read/write.

4. Bob opens discussion after acceptance.

Expected: Rejected or unaccepted members have no access; accepted Bob can read/write; Charlie is denied.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-024 Deterministic community recommendations

Requirements: FR13

Preconditions: Future recommendation service; books with 3, 2, 2 and 0 reviews.

1. Request recommendations.

2. Verify descending review counts and alphabetical title tie-break.

3. Follow each book link.

4. Repeat with no reviews.

Expected: Correct stable order and detail links; empty activity is handled clearly.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-025 Verified author application and admin decision

Requirements: FR14, NFR4

Preconditions: Future author verification; reader, applicant and admin accounts.

1. Apply for a specific book.

2. Attempt verification as ordinary reader.

3. Approve as admin.

4. Post as the verified author.

Expected: Only admin can verify; badge is tied to the approved author/book; posts visibly identify author; failed applications do not grant a badge.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-026 Follow feed without private activity leakage

Requirements: FR15, NFR8

Preconditions: Future follow/feed service; Alice and Bob with public reviews and private shelf activity.

1. Alice follows Bob.

2. Inspect following list, suggestions and feed.

3. Confirm only public activity appears.

4. Unfollow and publish another Bob review.

Expected: Following list and eligible review feed update; private progress and shelves never appear; unfollowed future activity is excluded.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-027 Report and moderate with role enforcement

Requirements: FR16, NFR4

Preconditions: Future reports and moderation; existing review/thread; reader and admin.

1. Report content; verify confirmation without automatic removal.

2. Attempt reader access to queue.

3. Admin dismisses one report and removes another item.

4. Resolve a report whose content was already removed.

Expected: Reader queue access denied; resolution action, admin and timestamp recorded; removed content hidden; already-removed case handled.

Actual: Feature is outside the implemented prototype; execution awaits its implementation.

Status: Blocked; priority: Medium


## TC-028 Measure 100-book browser performance

Requirements: NFR1

Preconditions: Fresh local browser; 100 generated book fixtures; one selected reader; fixed viewport.

1. Run 20 title searches.

2. Run 20 alternating shelf-status saves.

3. Time submission through DOM update and two animation frames.

4. Record environment and all timings.

Expected: At least 19 of 20 searches AND 19 of 20 shelf updates complete within 2,000 ms.

Actual: 100 books, one reader: 20/20 searches and 20/20 updates within 2 seconds; maxima 6.6 ms and 6.5 ms.

Status: Pass; priority: High


## TC-029 First-time usability and action count

Requirements: NFR2

Preconditions: Five first-time participants, fresh demo data and a timer; no coaching.

1. Give only: "Find Frankenstein, add it, then mark Currently Reading".

2. Count actions from book details to shelf addition.

3. Record completion time and errors for each participant.

Expected: Shelf addition takes at most three actions; at least four of five participants finish the full task within three minutes.

Actual: Blocked: five first-time participants have not been recruited; no user-study results claimed.

Status: Blocked; priority: Medium


## TC-030 Keyboard access labels and focus sample

Requirements: NFR3

Preconditions: Browser with Alice selected and fresh interactive page.

1. Inspect discovery input labels.

2. Focus search once, then type and use Tab/Enter to open Frankenstein.

3. Use keyboard after setting focus to shelf, progress and review controls.

4. Inspect focus outline and textual feedback.

Expected: Sample operations work without mouse clicks; discovery controls have labels; focus is visible and status/error text is readable. Full sequential-navigation and screen-reader audit remains required.

Actual: Search, open, add, progress and review operated with keyboard after programmatic focus; visible 3px outline and labels checked on discovery. Full manual keyboard and assistive-technology audit pending.

Status: Pass; priority: Medium


## TC-031 Authenticated security across protected operations

Requirements: NFR4, FR1, FR2, FR4, FR6, FR9

Preconditions: Future backend authentication; two accounts; password database and invalidated session fixtures.

1. Inspect password hashes.

2. Use Bob credentials to alter Alice profile, shelf, review and note by ID.

3. Sign out Alice and replay the old session.

Expected: Every cross-account write and invalidated-session request is denied server-side; passwords use a dedicated password-hashing function.

Actual: Blocked: browser demo selection and localStorage cannot meet backend authentication or security requirements.

Status: Blocked; priority: High


## TC-032 Reload through storage adapter

Requirements: NFR5, FR2, FR4, FR5, FR6, FR7

Preconditions: Map-backed browser-storage test double; fresh service.

1. Save profile, shelf, page, review and discussion.

2. Construct a new service using the same stored JSON.

3. Read each record.

Expected: All saved values remain. TC-039 separately verifies an actual browser reload.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-033 Failed application saves are atomic

Requirements: NFR5

Preconditions: MemoryStore with one saved shelf; inject save exception "Disk full".

1. Try changing shelf, progress, removing entry, publishing review/post and editing profile.

2. After each error compare service state and adapter state to original.

Expected: Every operation throws; neither last saved state nor in-memory application state changes.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-034 Replace storage without changing screens

Requirements: NFR6

Preconditions: MemoryStore and BrowserStore test double implementing load/save.

1. Run identical search, shelf and progress assertions with each adapter.

2. Review UI imports and service dependency boundaries.

Expected: Same application contract works with both adapters; screens use ReadingService methods; no direct data reads/writes in screen handlers. UI composition still selects an adapter.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: Medium


## TC-035 Future persistent-service scalability target

Requirements: NFR7

Preconditions: Future deployed persistent service; 10,000 books; 50 concurrent authenticated users; recorded hardware.

1. Run mixed search and shelf-update workload for five minutes.

2. Measure each action end to end.

3. Calculate fraction within three seconds and application error rate.

Expected: At least 95% of actions finish within three seconds and error rate is below 1%; publish hardware, workload and raw measurements.

Actual: Blocked: persistent multi-user service does not exist; local performance timings cannot validate this target.

Status: Blocked; priority: Low


## TC-036 Private records cannot be retrieved by another account

Requirements: NFR8, FR4, FR5, FR9, FR10, FR12

Preconditions: Future authenticated backend; Alice private shelves, progress, EPUB, notes, summary and group.

1. As Bob request each Alice resource by direct ID and list endpoints.

2. Attempt unaccepted group discussion reads.

3. Verify public profile, review and forum remain accessible.

Expected: All private resource retrieval is denied, not just hidden in UI; public resources remain visible.

Actual: Blocked: full privacy needs authenticated server storage; demo isolation in TC-043 is insufficient.

Status: Blocked; priority: High


## TC-037 Render untrusted review text safely

Requirements: FR6, NFR4

Preconditions: Browser demo with Alice selected and b1 details.

1. Save review text <img src=x onerror="window.xssExecuted=true">.

2. Inspect rendered DOM and window execution marker.

Expected: Text displays literally; no injected image or script executes. This is one rendering check, not a complete security audit.

Actual: Review payload rendered as literal text; no image element or script execution.

Status: Pass; priority: High


## TC-038 Guest access boundary

Requirements: FR1, FR2, FR3, FR4, FR5, FR6, FR7

Preconditions: Fresh service signed out.

1. Search and read public reviews.

2. Attempt private shelf access and each profile/shelf/progress/review/post mutation.

Expected: Public reads work; all listed operations requiring a selected reader are rejected. Real authentication remains deferred.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-039 Browser reading and discussion journey

Requirements: FR3, FR4, FR5, FR6, FR7, FR8, NFR5

Preconditions: Fresh browser using the five-book catalogue; Alice and Bob demo identities.

1. Search Austen and open book.

2. Add, move, reach final page and confirm Completed.

3. Save 4.25-star review; post spoiler thread and reply.

4. Reveal spoiler then switch to Bob.

5. Reload, select Alice and inspect shelf.

Expected: Workflow renders correct data; spoiler text absent before reveal and hidden again after reader switch; Bob shelves empty; Alice Completed survives reload; no page errors.

Actual: Search, add, move, progress prompt, review, spoiler reveal, reply, reader isolation and real page reload passed; two screenshots saved; no page errors.

Status: Pass; priority: High


## TC-040 Public profile review and discussion visibility

Requirements: FR2, FR6, FR7, NFR8

Preconditions: Alice selected in fresh service.

1. Publish review and ordinary post.

2. Sign out and read book reviews, Alice public profile and discussion.

Expected: All community-visible content remains readable; no private shelves are included in the public profile object.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-041 Browser save error and truthful feedback

Requirements: NFR5

Preconditions: Browser has a saved Completed entry; inject localStorage.setItem failure.

1. Try changing status to Want to Read.

2. Inspect message.

3. Restore storage and reopen My shelves.

Expected: Error text appears instead of success; last saved Completed status remains.

Actual: Failed browser save displayed an error and retained Completed; no success message.

Status: Pass; priority: High


## TC-042 Reject unknown resources and unshelved progress

Requirements: FR3, FR4, FR5, FR6, FR7

Preconditions: Alice selected with no shelves.

1. Request absent book details.

2. Try shelf, review and thread with absent book ID.

3. Update b1 progress before shelving it.

Expected: Every invalid operation is rejected; no shelf records are created.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-043 Demo reading-list separation

Requirements: FR4, FR5, NFR8

Preconditions: Alice selected in fresh service.

1. Alice shelves b1.

2. Switch to Bob and try shelves("alice").

3. Bob shelves b2.

4. Switch back to Alice.

Expected: Bob gets no Alice list and owner override is rejected; Alice still sees only b1. Browser data remains inspectable locally, so this is not full NFR8 validation.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: High


## TC-044 Completion date remains stable on repeat saves

Requirements: FR4

Preconditions: Alice selected; controlled clock can advance one day.

1. Complete b1.

2. Advance clock and save Completed again.

3. Move away from Completed then complete again.

Expected: Repeated same-status save preserves first date; a later new completion records the new date.

Actual: Automated assertions passed; see matching ID in unit-results.tap.

Status: Pass; priority: Medium
