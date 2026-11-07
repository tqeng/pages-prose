# Deliverable 2.1 Test Plan

## Objective

Validate the implemented reading/community loop and design tests for every requirement. The register contains 16 FRs and eight NFRs, retaining 1.2 IDs and formalizing author verification, following and moderation.

## Fixtures

Unit cases use fresh services, Alice/Bob, five books and a controlled clock. Browser checks use a fresh context. b1 has 432 pages, b2 280 and b5 no total. Performance substitutes 100 generated books and one reader. Future privacy/group fixtures add Charlie and a real authenticated backend.

## Execution

1. Run `npm test` and preserve TAP. Unit titles contain case IDs.
2. Start `npm start`, prepare Playwright/Chromium as in README and run `node tests/browser.mjs`.
3. Inspect `browser-results.json` and screenshots in `docs/evidence/`.
4. Match results to `test-cases.json` and `traceability.csv` before changing validation labels.
5. Recruit five first-time participants for TC-029; record observations rather than developer estimates.

## Layers and decision rules

Unit checks cover rules, isolation, view models and adapter contracts. Browser checks cover the journey, reload, error feedback, escaped review text and sampled keyboard operation. Performance times 20 searches and 20 updates from submission through DOM update and two animation frames as a display proxy; each class needs 19/20 within 2,000 ms. Local timings do not establish backend scale.

Pass requires every stated assertion. Fail means observed mismatch. Blocked means missing prerequisites. Initial keyboard search failed because rerender lost focus; the handler now focuses the replacement Search button and the rerun passed. Full sequential keyboard and screen-reader audit remains open.

## Results and limits

November 7, 2026: 24 unit and five browser checks passed; 29 of 44 cases are Pass and 15 Blocked. Raw results are adjacent. Four FRs are fully validated, four partially and eight uncovered; all have designed tests. NFR status labels are omitted as permitted; report evidence and gaps apply.

Demo selection is not authentication. Full NFR4/NFR8 need backend enforcement. NFR2 awaits participants; NFR3 is sampled; NFR7 awaits persistent service. Failed-save and real reload checks passed. Corrupted local JSON recovery remains backlog work.

## Defects and exit criteria

Record requirement/case IDs, steps, expected/actual, environment, severity, owner and evidence. Fix on a feature branch and rerun affected checks. Shared-state changes require the full unit suite and browser journey. Release after core checks pass and deferred areas are explicit. Verify remote branches, report, artifacts and ITR2.1 tag before separate eClass submission.
