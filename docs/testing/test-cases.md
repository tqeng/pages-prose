# Detailed Test Cases

| Field | Details |
| --- | --- |
| Test Case ID | TC-001 |
| Title | Authentication and session security |
| Related Req | FR1, NFR1 |
| Preconditions | Future authentication service; unused email; two browser sessions. |
| Steps | 1. Register a reader with valid email and password.<br>2. Reject duplicate email and wrong password.<br>3. Sign in, capture session, then sign out.<br>4. Retry protected request with old session (verify invalidation). |
| Expected Result | Registration succeeds; passwords securely hashed; sign-out cleanly drops session. |
| Status | Blocked (No backend auth yet) |

| Field | Details |
| --- | --- |
| Test Case ID | TC-002 |
| Title | Edit profile and retain community reviews |
| Related Req | FR2 |
| Steps | 1. Publish 4-star review.<br>2. Save display name "Alice A" and bio "Bio".<br>3. Read Alice's profile and check reviews.<br>4. Attempt blank display name. |
| Expected Result | Name and bio update; review remains visible; blank name rejected. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-003 |
| Title | Search queries (Valid and Empty) |
| Related Req | FR3 |
| Steps | 1. Search valid title ("PRIDE").<br>2. Search unmatched query ("zzzzzz").<br>3. Submit whitespace only. |
| Expected Result | Valid search returns book details. Unmatched returns empty state. Whitespace returns all catalog items. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-004 |
| Title | Shelf lifecycle and privacy boundaries |
| Related Req | FR4, NFR3 |
| Steps | 1. Add b1 to Want to Read.<br>2. Move to Currently Reading.<br>3. Switch to second user and remove b1. |
| Expected Result | Only one primary status remains for User 1. User 2 removing their copy doesn't affect User 1's copy. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-005 |
| Title | Progress calculations and validation |
| Related Req | FR5, NFR2 |
| Steps | 1. Save boundaries (0, midpoint, 100%).<br>2. Attempt invalid inputs (-1, 9999, NaN, "string"). |
| Expected Result | Percentages calculate correctly (0, 50, 100). Invalid inputs are rejected without losing previously saved data. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-006 |
| Title | Review creation, editing, and authorization |
| Related Req | FR6, NFR1 |
| Steps | 1. Publish 4-star review.<br>2. Edit to 4.25 stars.<br>3. Switch user and attempt to edit/delete the first user's review. |
| Expected Result | Owner can edit/delete successfully. Non-owner actions are strictly rejected. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-007 |
| Title | Book-specific threads and replies |
| Related Req | FR7 |
| Steps | 1. Create a b1 thread.<br>2. Reply to its ID.<br>3. Inspect b1 and b2 discussions. |
| Expected Result | b1 contains thread and reply with author, parent and timestamp; b2 contains neither. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-008 |
| Title | Spoilers hidden until explicit reveal |
| Related Req | FR8 |
| Steps | 1. Read discussion without revealed IDs.<br>2. Read it with the post ID explicitly revealed.<br>3. Read again without that ID. |
| Expected Result | Hidden view contains no spoiler text; explicit reveal returns text; new view defaults to hidden. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-009 |
| Title | Render untrusted review text safely (XSS) |
| Related Req | FR6, NFR1 |
| Steps | 1. Save review text containing an injected script.<br>2. Inspect rendered DOM and window execution marker. |
| Expected Result | Injected script tags are rendered literally; browser execution marker is never fired. |
| Status | Pass |

| Field | Details |
| --- | --- |
| Test Case ID | TC-010 |
| Title | Data persistence and error handling |
| Related Req | NFR2 |
| Steps | 1. Save user data (shelf, page, review).<br>2. Restart/Reopen service from stored JSON.<br>3. Inject simulated "Disk Full" save error. |
| Expected Result | Saved data survives reboot. Errors throw cleanly but do not corrupt in-memory or previously saved disk state. |
| Status | Pass |
