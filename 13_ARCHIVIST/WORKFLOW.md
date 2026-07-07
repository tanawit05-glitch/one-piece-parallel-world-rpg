# PROJECT ASTER ENGINE

# WORKFLOW

Version: 2.0

Status: Canon

Owner: System Architect

---

# DEVELOPMENT PIPELINE

VS Code

↓

Codex

↓

Review

↓

GitHub

↓

Production

---

# GAMEPLAY PIPELINE

Player

↓

Game Master

↓

Narrative Simulation

↓

Episode Complete

---

# SAVE PIPELINE

Player types

เซฟเกม

↓

Game Master creates

SESSION_UPDATE.md

↓

Archivist starts Save Process

---

# LOAD ORDER

Archivist reads

1. CURRENT_STATE.md
2. WORLD_STATE.md
3. CURRENT_PLAYER.md
4. CURRENT_CREW.md
5. CURRENT_WORLD.md
6. CURRENT_NPCS.md
7. CURRENT_ISLANDS.md
8. CURRENT_FACTIONS.md
9. CURRENT_ITEMS.md
10. CURRENT_DEVIL_FRUITS.md
11. CURRENT_SHIPS.md
12. SESSION_UPDATE.md

---

# VALIDATION

Before updating

Archivist verifies

- Episode Number
- World Day
- Timeline
- Current Arc
- Current Island
- Player Status
- Crew Status
- NPC Status
- Ship Status
- Item Status
- Devil Fruit Status
- Faction Status
- World Consistency

If any conflict exists

Stop Update

Report Conflict

Never overwrite conflicting data.

---

# UPDATE ORDER

## STEP 1

Update

CURRENT_STATE.md

---

## STEP 2

Update

CURRENT_PLAYER.md

CURRENT_CREW.md

CURRENT_WORLD.md

CURRENT_NPCS.md

CURRENT_ISLANDS.md

CURRENT_FACTIONS.md

CURRENT_ITEMS.md

CURRENT_DEVIL_FRUITS.md

CURRENT_SHIPS.md

---

## STEP 3

If the world changed

Update

WORLD_STATE.md

Otherwise

Skip

---

## STEP 4

Update Databases

NPC Database

World Database

Crew Database

Ship Database

Item Database

Devil Fruit Database

Faction Database

---

## STEP 5

Update Logs

CAMPAIGN_LOG.md

EPISODE_LOG.md

PLAYER_HISTORY.md

CREW_HISTORY.md

NEWS_ARCHIVE.md

---

# FINAL VALIDATION

Archivist checks

- Timeline continuity
- Character continuity
- Crew continuity
- NPC continuity
- Island continuity
- World continuity
- Economy continuity
- Bounty continuity
- Ship continuity
- Devil Fruit continuity
- Relationship continuity
- Database integrity

If validation fails

Rollback update

Report Error

---

# SAVE COMPLETE

Generate

SAVE REPORT

Including

- Episode
- World Day
- Updated Files
- Updated Databases
- Warnings
- Validation Result

↓

Ready for Next Session

---

# GIT WORKFLOW

Review

↓

Commit

↓

Push

↓

GitHub

GitHub is always the latest Source of Truth.

---

# SYSTEM RULES

Game Master never edits databases.

Game Master never edits save files.

Game Master never edits history files.

Archivist never creates story.

Archivist never changes gameplay.

Archivist only updates data that already happened.

Every save must update CURRENT_STATE.md.

WORLD_STATE.md is updated only if the world actually changes.

Logs are append-only.

History is never rewritten.

Databases must always preserve continuity.

Rollback before overwrite.

GitHub is the final Source of Truth.

---

# SESSION LIFECYCLE

## SESSION START

Archivist loads

↓

CURRENT_STATE.md

↓

Determine

- Current Episode
- World Day
- Current Arc
- Current Island
- Active Objectives
- Active World Events

↓

Load only required databases

↓

Game Master starts simulation

---

## DURING GAME

Game Master

may create

Temporary Memory

Examples

- Combat Results

- NPC Decisions

- Reputation Changes

- Economy Changes

- Item Usage

- Ship Damage

- Relationship Changes

Temporary Memory

is NOT Canon.

Nothing is saved

until Session ends.

---

## SESSION END

Game Master creates

SESSION_UPDATE.md

SESSION_UPDATE.md

must contain

- Episode
- World Day
- Story Summary
- Decisions
- Battles
- Exploration
- Rewards
- Reputation
- Bounty
- NPC Changes
- Crew Changes
- Ship Changes
- World Changes
- Future Hooks

No database

is updated

before

SESSION_UPDATE.md

exists.

---

# ARCHIVIST RESPONSIBILITY

Archivist

must never

guess information.

Archivist

must never

invent missing data.

Archivist

must only record

confirmed events.

Unknown information

must remain unchanged.

---

# DATABASE RULES

Every update

must satisfy

Consistency

↓

Continuity

↓

Traceability

↓

Canonical Accuracy

Every modification

must be

reproducible

from

SESSION_UPDATE.md

---

# CHANGE POLICY

Allowed

Update

Append

Correct formatting

Link references

Synchronize databases

Not Allowed

Delete history

Rewrite old Episodes

Change established facts

Retcon events

Modify player choices

Invent outcomes

Skip validation

---

# CONFLICT RESOLUTION

If two files conflict

Priority Order

1.

CURRENT_STATE.md

↓

2.

SESSION_UPDATE.md

↓

3.

WORLD_STATE.md

↓

4.

Current Databases

↓

5.

History Logs

↓

6.

Archive

Never overwrite

higher priority data.

---

# FILE LOCK

During Save

all Save Files

are considered

Locked.

Only Archivist

may modify

them.

Game Master

must wait

until

SAVE COMPLETE.

---

# VERSION CONTROL

Every save

increments

Save Version

Example

Save v1

↓

Save v2

↓

Save v3

Version Number

must be stored

inside

CURRENT_STATE.md

Rollback

always restores

the previous version.

---

# END OF WORKFLOW