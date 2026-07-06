# TIMELINE

---

# Purpose

`TIMELINE.md` defines how time progresses throughout PROJECT ASTER ENGINE.

Time is one of the core simulation systems.

Every event, action, journey, recovery, investigation, construction, and world change must consume time.

The world continues to move regardless of player actions.

---

# Scope

This document defines:

- World Time
- Time Progression
- Time Scale
- Event Order
- Time Consumption
- Simultaneous Events
- Time Continuity
- AI Time Management

This document does not define:

- Weather
- Geography
- NPC Schedule
- World Events
- Island Systems

Those systems reference this document.

---

# Core Principle

Time never stops.

Time never rewinds.

Time never skips without consequence.

Every meaningful action consumes time.

The world advances continuously.

---

# Timeline Authority

Timeline is the single source of chronological truth.

Whenever multiple systems interact,

Timeline determines:

- Event order
- Recovery duration
- Travel duration
- Investigation timing
- News propagation
- Reputation changes
- World Event progression

No system may ignore time progression.

---

# World Clock

The world operates on a continuous clock.

Time always moves forward.

The Game Master is responsible for maintaining chronological consistency.

Every event receives a chronological position.

Earlier events cannot be affected by later events.

---

# Time Unit

The Engine recognizes the following units.

## Minute

Used for:

- Combat aftermath
- Medical treatment
- Short conversations
- Immediate actions

---

## Hour

Used for:

- Travel inside islands
- Repairs
- Investigation
- Patrol
- Commerce
- Rest

---

## Day

Used for:

- Sea travel
- Recovery
- Construction
- Training
- Island activities

---

## Week

Used for:

- Long voyages
- Political changes
- Economic fluctuation
- Organization movement

---

## Month

Used for:

- Territory expansion
- Government response
- Crew development
- World-scale consequences

---

# Action Time

Every meaningful action consumes time.

Examples

Combat

→ Minutes

Medical Treatment

→ Minutes to Days

Sea Travel

→ Hours to Weeks

Investigation

→ Hours to Days

Negotiation

→ Minutes to Hours

Ship Repair

→ Hours to Weeks

Training

→ Days to Months

The exact duration is determined by the relevant system.

---

# Simultaneous Events

Multiple events may occur simultaneously.

Examples

- Players are sailing.
- Marines launch an operation.
- Pirates attack another island.
- Storms develop.
- Merchants transport cargo.

The AI must continue simulating unrelated events.

The world never freezes while players are occupied.

---

# Time During Combat

Combat uses detailed time resolution.

Outside combat,

the world continues normally.

Large-scale events occurring elsewhere continue unless specifically interrupted.

---

# Time During Travel

Travel never skips time.

While traveling,

the following may occur:

- Weather changes
- Random encounters
- Marine patrols
- Pirate sightings
- Mechanical failures
- Sea King encounters
- World News updates

Travel is active simulation,

not fast travel.

---

# Downtime

Downtime represents periods without immediate conflict.

Possible downtime activities include:

- Training
- Reading
- Crafting
- Medical care
- Ship maintenance
- Crew interaction
- Commerce
- Information gathering

Downtime still advances world time.

---

# Time Dependency

Many systems depend on time.

Examples

Medical

Recovery requires time.

Relationship

Trust develops over time.

Reputation

Public opinion spreads over time.

Economy

Markets change over time.

World Events

Political situations evolve over time.

No system updates instantly without justification.

---

# Delayed Consequences

Consequences do not always occur immediately.

Examples

A Marine investigation may begin days later.

A newspaper may publish several days later.

A bounty adjustment may require weeks.

Political decisions may require months.

Delayed consequences improve world realism.

---

# Historical Record

Every completed event becomes history.

History cannot be erased.

Future systems may reference historical events.

Examples

Battles

Shipwrecks

Executions

Discoveries

Political agreements

Natural disasters

Crew formation

Historic events may influence future decisions.

---

# Timeline Consistency

The AI Game Master must prevent chronological contradictions.

Examples of invalid situations:

A character arriving before departure.

News appearing before an event occurred.

Recovery completing before treatment.

Construction finishing before work begins.

Cause must always precede effect.

---

# World Progression

Even if players remain inactive,

time continues.

Possible consequences include:

- Governments act.
- Pirates expand territory.
- Islands recover.
- Weather changes.
- Trade continues.
- Criminal activity increases.
- Marine patrols relocate.

Waiting is a decision with consequences.

---

# AI Game Master Responsibilities

The AI must:

- Track chronological order.
- Advance time consistently.
- Apply realistic durations.
- Continue world simulation.
- Synchronize simultaneous events.
- Preserve historical continuity.

The AI must never:

- Freeze the world.
- Ignore elapsed time.
- Skip consequences.
- Reverse chronology.
- Create impossible timelines.

---

# Integration

Referenced by:

- WORLD.md
- SEAS.md
- WEATHER.md
- WORLD_EVENTS.md
- NEWS_SYSTEM.md
- ISLAND_RULES.md

Integrated with:

- COMBAT.md
- DICE.md
- MEDICAL.md
- RELATIONSHIP.md
- REPUTATION.md
- SAVE_FORMAT.md

---

# Design Principles

Time is a resource.

Time creates opportunity.

Time creates consequences.

Time creates history.

Every action consumes time.

Every passing moment changes the world.

---

# Source of Truth

`TIMELINE.md`

is the authoritative specification for chronological progression inside PROJECT ASTER ENGINE.

All future systems that consume, manipulate, or reference time must follow the rules defined in this document.