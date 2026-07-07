# MOBILE PLAY MODE

PROJECT ASTER ENGINE

fully supports

Mobile Play

including

- iPad
- Tablet
- Mobile Phone

without requiring

continuous access

to GitHub

or

VS Code.

---

# MOBILE SAVE PIPELINE

Player

↓

Play Episode

↓

Episode Complete

↓

Player types

เซฟเกม

↓

Game Master creates

SESSION_UPDATE.md

↓

Archivist validates

Session Data

↓

Archivist creates

SAVE SUMMARY

↓

SAVE COMPLETE

---

# SAVE SUMMARY

SAVE SUMMARY

is the official

mobile session transfer format.

Its purpose

is to allow

Campaign Continuation

between ChatGPT Sessions

without requiring

manual database updates.

SAVE SUMMARY

contains

all information required

to continue

the Campaign.

---

# SAVE SUMMARY CONTENTS

Every SAVE SUMMARY

must include

- Save Version
- Episode Number
- World Day
- Current Arc
- Current Island
- Current Location
- Story Summary
- Active Objectives
- Player Status
- Crew Status
- Ship Status
- Current Inventory
- Current Money
- Reputation
- Bounty
- Devil Fruit Status
- Haki Status
- Relationship Changes
- NPC Changes
- Faction Changes
- World Changes
- Economy Changes
- Important Flags
- Future Hooks

No gameplay information

required for the next Session

may be omitted.

---

# MOBILE LOAD PIPELINE

Player

↓

Open New Chat

↓

Upload

SAVE SUMMARY

↓

Game Master

loads

SAVE SUMMARY

↓

Campaign resumes

immediately

from the latest Save.

No additional files

are required

for normal gameplay.

---

# DESKTOP SYNCHRONIZATION

When returning

to a desktop computer

the player

may synchronize

the Repository.

Synchronization includes

- CURRENT_STATE.md
- WORLD_STATE.md
- CURRENT_PLAYER.md
- CURRENT_CREW.md
- CURRENT_WORLD.md
- CURRENT_NPCS.md
- CURRENT_ISLANDS.md
- CURRENT_FACTIONS.md
- CURRENT_ITEMS.md
- CURRENT_DEVIL_FRUITS.md
- CURRENT_SHIPS.md
- Databases
- Logs

GitHub

remains

the permanent backup

and

Source Repository

of PROJECT ASTER ENGINE.

Desktop synchronization

is optional

and does not affect

Campaign Continuity.

---

# MOBILE PLAY RULES

During Mobile Play

SAVE SUMMARY

is considered

the active session state.

CURRENT_STATE.md

does not need

to be updated

after every Episode.

GitHub

does not need

to be updated

after every Episode.

Players

may synchronize

multiple Episodes

at a later time.

Campaign Continuity

must always follow

the latest

SAVE SUMMARY.

---

# MOBILE PHILOSOPHY

The purpose

of Mobile Play Mode

is to remove

technical barriers

between

the player

and

the adventure.

The player

should focus

on playing

the Campaign.

Repository maintenance

should never interrupt

Narrative Simulation.

SAVE SUMMARY

exists

to preserve

Campaign Continuity

while allowing

PROJECT ASTER ENGINE

to be played

comfortably

on mobile devices.

---

# SAVE SUMMARY LIFECYCLE

SAVE SUMMARY

always represents

the latest Canon State

of the Campaign.

Each completed Episode

replaces

the previous

SAVE SUMMARY.

Only

one

SAVE SUMMARY

is considered

Active.

Older

SAVE SUMMARY

files

are considered

Archive.

---

# SAVE SUMMARY VERSION

Every SAVE SUMMARY

must contain

Save Version

Episode Number

Creation Date

World Day

Campaign Version

Engine Version

This information

allows

Game Master

and

Archivist

to verify

that the latest Save

is being used.

---

# SAVE SUMMARY VALIDATION

Before starting

a new Session

Game Master

must verify

- Save Version
- Episode Number
- Current Arc
- Current Island
- Player Status
- Crew Status
- Ship Status
- Active Objectives
- Timeline
- World Day

If any required

information

is missing

Game Master

must request

a corrected

SAVE SUMMARY

before continuing.

---

# SAVE SUMMARY AUTHORITY

During Mobile Play

SAVE SUMMARY

becomes

the temporary

Source of Truth.

For Mobile Sessions

Priority Order

1.

SAVE SUMMARY

↓

2.

SESSION_UPDATE.md

↓

3.

Repository Files

↓

4.

GitHub Backup

When Desktop Synchronization

is completed

Repository Files

become

the official

Source of Truth

again.

---

# SYNCHRONIZATION POLICY

Desktop Synchronization

may occur

at any time.

Recommended

- End of Story Arc
- Every 5 Episodes
- Every 10 Episodes
- Before Major Engine Updates

Synchronization

must never

modify

Campaign History.

It only updates

the Repository

to match

the latest

SAVE SUMMARY.

---

# MOBILE DESIGN GOAL

The player

should never

need

a computer

to continue

the Campaign.

An iPad

or

mobile device

must be sufficient

to

- Continue the story
- Save progress
- Resume the Campaign
- Preserve continuity

PROJECT ASTER ENGINE

must remain

fully playable

without

desktop access.

---

# FINAL PRINCIPLE

Gameplay

always comes first.

Save Management

exists

to support

the Campaign.

It must never

become

an obstacle

to playing.

Technology

serves

the Narrative.

Never

the other way around.

---

# END OF MOBILE PLAY MODE

---

# CONFLICT RESOLUTION

Whenever

conflicting information

is detected

during

Save

Load

or

Synchronization

the following

priority order

must be used.

1.

SAVE SUMMARY

↓

2.

SESSION_UPDATE.md

↓

3.

CURRENT_STATE.md

↓

4.

WORLD_STATE.md

↓

5.

Current Save Files

↓

6.

History Logs

↓

7.

Archive

Higher Priority

always overrides

Lower Priority.

Archivist

must never

overwrite

higher priority

information.

---

# FILE LOCK

During

Save Process

all Save Files

enter

Locked State.

Only

Archivist

may modify

Save Files.

Game Master

must not

continue gameplay

until

SAVE COMPLETE.

If Save Process

fails

no Save File

may be modified.

---

# SESSION STATES

Every Session

must exist

in one

of the following

states.

## SESSION START

Latest Save

loaded.

Simulation

ready.

---

## ACTIVE SESSION

Narrative

Combat

Exploration

Dialogue

World Simulation

are active.

No Save Files

may be modified.

Only

Temporary Memory

may change.

---

## SAVE PROCESS

Gameplay

is finished.

Archivist

validates

all confirmed

information.

SAVE SUMMARY

is generated.

---

## SAVE COMPLETE

Campaign

is now

Canon.

Next Session

must always

begin

from

the latest

SAVE SUMMARY.

---

# CHANGE POLICY

Allowed

- Update Save Files
- Append Logs
- Synchronize Repository
- Correct Formatting
- Update References
- Improve Documentation

Not Allowed

- Delete History
- Rewrite Episodes
- Retcon Story
- Change Player Decisions
- Invent Missing Events
- Skip Validation
- Ignore Timeline
- Ignore Canon

Every modification

must preserve

Campaign Continuity.

---

# REPOSITORY SYNCHRONIZATION

Repository

is the

permanent

storage

of PROJECT ASTER ENGINE.

Synchronization

updates

the Repository

to match

the latest

SAVE SUMMARY.

Synchronization

must never

change

existing

Campaign History.

Repository

exists

for

- Backup
- Version Control
- Long-term Storage
- Engine Development

Gameplay

does not depend

on

Repository access.

---

# GIT WORKFLOW

Development

↓

Review

↓

Rewrite

↓

Commit

↓

Push

↓

GitHub

↓

Production

GitHub

is the

official

Source Repository

for

PROJECT ASTER ENGINE.

---

# ARCHIVIST RESPONSIBILITY

Archivist

must

record

only

confirmed information.

Archivist

must never

guess

invent

estimate

or

assume

missing data.

Unknown information

remains

unchanged

until confirmed

during gameplay.

Every Save

must be

fully traceable

to

SESSION_UPDATE.md

and

SAVE SUMMARY.

---

# FINAL PRINCIPLES

Gameplay

always

comes first.

Narrative

always

comes before

maintenance.

Technology

exists

to support

the player.

Repository

exists

to support

the Campaign.

Save System

exists

to preserve

Canon.

Every Episode

must end

with

one

valid

SAVE SUMMARY.

That SAVE SUMMARY

becomes

the starting point

of

the next

Episode.

---

# END OF WORKFLOW