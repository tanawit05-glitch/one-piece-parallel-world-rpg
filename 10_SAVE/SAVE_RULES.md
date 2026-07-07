# PROJECT ASTER ENGINE

# SAVE RULES

Version: 2.0

Status: Canon

Priority: Critical

Owner: Archivist

---

# PURPOSE

The Save System

maintains

the current state

of the campaign.

Save Files

represent

the latest

official state

of the world.

Every new session

must begin

by loading

the Save Files.

Save Files

are not history.

Save Files

are snapshots

of the current world.

---

# DESIGN PHILOSOPHY

History

answers

"What happened?"

Save

answers

"What exists now?"

History

belongs

inside

09_LOGS.

Current State

belongs

inside

10_SAVE.

Never mix

History

with

Current State.

---

# OBJECTIVES

The Save System

must

- Preserve continuity

- Preserve consistency

- Preserve Canon

- Preserve world state

- Preserve player progress

- Preserve NPC state

- Preserve faction state

- Preserve economy

- Preserve relationships

The Save System

must never

record

unnecessary history.

---

# SAVE HIERARCHY

Priority Order

CURRENT_STATE.md

↓

Current Save Files

↓

WORLD_STATE.md

↓

Databases

↓

History Logs

↓

Archives

Higher priority

always overrides

lower priority.

History

never overrides

Current State.

---

# SAVE FILES

CURRENT_STATE.md

Master Snapshot

---

CURRENT_PLAYER.md

Current Player Status

---

CURRENT_CREW.md

Current Crew Status

---

CURRENT_WORLD.md

Current World Status

---

CURRENT_NPCS.md

Current NPC Status

---

CURRENT_ISLANDS.md

Current Island Status

---

CURRENT_FACTIONS.md

Current Faction Status

---

CURRENT_ITEMS.md

Current Important Items

---

CURRENT_DEVIL_FRUITS.md

Current Devil Fruit Owners

---

CURRENT_SHIPS.md

Current Ship Status

---

WORLD_STATE.md

Global World Status

---

# SAVE TRIGGER

The Save System

is activated

only when

one of the following

conditions

is true.

- Player requests Save

- Episode ends

- Session ends

- Auto Save Event

No Save

may occur

during active gameplay

unless

explicitly requested.

---

# SAVE PROCESS

Player

↓

Requests Save

↓

Game Master

creates

SESSION_UPDATE.md

↓

Archivist

validates

SESSION_UPDATE.md

↓

Archivist

updates

Save Files

↓

Archivist

updates

Databases

↓

Archivist

updates

History Logs

↓

Validation

↓

SAVE COMPLETE

---

# SAVE PRINCIPLES

Every Save

must

represent

the latest

official state

of the world.

Do not

record

past events.

Do not

record

future events.

Do not

record

speculation.

Do not

record

cancelled actions.

Only

confirmed gameplay

may be saved.

---

# CHANGE DETECTION

Before updating

Archivist

must determine

which data

actually changed.

If nothing changed

the file

must not

be modified.

Only affected files

are updated.

---

# UPDATE RULES

Example

Player HP changed

↓

CURRENT_PLAYER.md

---

Crew gained

a new member

↓

CURRENT_CREW.md

---

Ship damaged

↓

CURRENT_SHIPS.md

---

NPC died

↓

CURRENT_NPCS.md

WORLD_STATE.md

(if applicable)

---

Island destroyed

↓

CURRENT_ISLANDS.md

CURRENT_WORLD.md

WORLD_STATE.md

---

Player bounty changed

↓

CURRENT_PLAYER.md

CURRENT_FACTIONS.md

CURRENT_STATE.md

---

Devil Fruit ownership changed

↓

CURRENT_DEVIL_FRUITS.md

CURRENT_PLAYER.md

CURRENT_NPCS.md

---

Major political event

↓

CURRENT_WORLD.md

WORLD_STATE.md

CURRENT_FACTIONS.md

---

# LOAD ORDER

Every new session

must begin

with

CURRENT_STATE.md

↓

CURRENT_PLAYER.md

↓

CURRENT_CREW.md

↓

CURRENT_WORLD.md

↓

CURRENT_NPCS.md

↓

CURRENT_ISLANDS.md

↓

CURRENT_FACTIONS.md

↓

CURRENT_ITEMS.md

↓

CURRENT_DEVIL_FRUITS.md

↓

CURRENT_SHIPS.md

↓

WORLD_STATE.md

No gameplay

may begin

until

all required files

have been loaded.

---

# LOAD VALIDATION

Before gameplay

Archivist verifies

- Save Files exist

- Episode Number

- World Day

- Current Arc

- Current Island

- Current Objectives

- Player Location

- Ship Location

- Crew Status

- Database Integrity

If validation fails

Stop immediately.

Do not

start gameplay.

---

# DATA CONSISTENCY

Every Save

must preserve

complete consistency

between

Save Files

Databases

History Logs

No file

may contain

information

that conflicts

with another file.

Whenever

one value changes

all related files

must also

be updated.

Example

NPC dies

↓

CURRENT_NPCS.md

↓

CURRENT_FACTIONS.md

↓

CURRENT_WORLD.md

↓

WORLD_STATE.md

↓

History Logs

---

# WHAT TO SAVE

Save only

the current state

of

Player

Crew

NPCs

Ships

Items

Devil Fruits

Factions

World

Islands

Economy

Relationships

Active Objectives

Current Location

Current Conditions

Current Reputation

Current Bounty

Current Ownership

Current Status

---

# WHAT NOT TO SAVE

Never save

Dialogue

Story narration

Dice rolls

Combat logs

Developer Notes

Internal AI reasoning

Alternative outcomes

Cancelled actions

Test sessions

Debug information

What-if scenarios

Future predictions

Personal opinions

These belong

inside

History Logs

or

Developer Documents

Never

inside

Save Files.

---

# PLAYER REQUEST

When

the player requests

Save

Game Master

must immediately

stop gameplay

and generate

SESSION_UPDATE.md

Only after

Archivist

has completed

the Save Process

may

the next session

begin.

---

# AUTO SAVE

Auto Save

may occur

only when

- Episode Complete

- Arc Complete

- Major World Event

- Major Story Milestone

- Manual Developer Trigger

Auto Save

must follow

the same validation

as

Manual Save.

---

# SAVE FREQUENCY

Recommended

One Save

per Episode.

Additional Saves

are allowed

only when

required

by gameplay

or

developer instructions.

Avoid

unnecessary saves.

Every Save

should represent

a meaningful

change

to the world.

---

# SAVE TRANSACTION

Every Save

must be Atomic.

Either

every required file

is updated

successfully

or

nothing

is updated.

Partial Saves

are forbidden.

Rollback

must occur

before

leaving

an inconsistent state.

---

# ERROR RECOVERY

If

any Save Process

fails

Archivist

must immediately

stop

all updates.

Do not

continue

saving.

Restore

the previous

validated Save State.

Generate

an Error Report.

The report

must include

- Error Type

- Failed Step

- Affected Files

- Validation Status

- Recovery Status

No gameplay

may continue

until

the Save System

returns

to

a valid state.

---

# SAVE VALIDATION

Before

SAVE COMPLETE

Archivist

must verify

- Timeline Integrity

- Canon Integrity

- Player Integrity

- Crew Integrity

- NPC Integrity

- World Integrity

- Island Integrity

- Ship Integrity

- Item Integrity

- Devil Fruit Ownership

- Faction Integrity

- Economy Integrity

- Bounty Integrity

- Relationship Integrity

- Quest Integrity

- Active Objectives

- Current Locations

- No Duplicate IDs

- No Missing References

- No Broken Links

Every validation

must pass

before

the Save

is accepted.

---

# SAVE REPORT

After

every successful Save

generate

SAVE REPORT

==================================================

SAVE REPORT

Episode :

World Day :

Current Arc :

Current Island :

Save Version :

Save Time :

---

Updated Save Files

-

-

-

---

Updated Databases

-

-

-

---

Updated Logs

-

-

-

---

Validation

Passed / Failed

---

Warnings

-

---

Conflicts

None / Listed

---

Rollback

Yes / No

==================================================

---

# SUCCESS CONDITIONS

A Save

is successful

only if

- Validation Passed

- No Conflicts

- No Timeline Errors

- No Canon Violations

- No Missing References

- No Duplicate IDs

- Every affected file updated

- Save Report generated

If any condition

fails

the Save

is considered

Failed.

---

# GOLDEN RULES

Save Files

always represent

the present.

History Logs

always represent

the past.

Databases

must always

agree

with

Save Files.

Never

guess.

Never

invent.

Never

rewrite

history.

Never

modify

completed Episodes.

Never

change

player decisions.

Never

skip

validation.

Rollback

before

overwrite.

Validation

before

Save.

Consistency

before

speed.

Canon

before

convenience.

GitHub

is always

the final

Source of Truth.

---

# END OF DOCUMENT