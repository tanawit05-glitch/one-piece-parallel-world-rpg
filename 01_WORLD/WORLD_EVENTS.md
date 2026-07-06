# WORLD_EVENTS

---

# Purpose

`WORLD_EVENTS.md` defines how world-scale events are generated, developed, propagated, resolved, and remembered throughout PROJECT ASTER ENGINE.

World Events are independent simulation processes.

They are not quests.

They are not scripted storylines.

They emerge naturally from the world's current state and continue regardless of player involvement.

---

# Scope

This document defines:

- World Event Generation
- Event Lifecycle
- Event Escalation
- Event Resolution
- Event Persistence
- Event Interaction
- Global Consequences

This document does not define:

- Individual island events
- NPC behavior
- Combat mechanics
- Reputation mechanics
- Faction mechanics

Those systems reference this document.

---

# Core Principle

Events are consequences.

The world continuously produces events.

Events influence the world.

Events influence other events.

History is created through accumulated events.

---

# World Event

A World Event is any meaningful occurrence capable of changing the state of the world.

Examples include:

- War
- Pirate invasion
- Government operation
- Economic crisis
- Disease outbreak
- Natural disaster
- Scientific discovery
- Revolutionary movement
- Assassination
- Trade disruption
- Major expedition

Events may occur at any scale.

---

# Event Sources

Events may originate from:

- Natural phenomena
- Governments
- Pirate crews
- Revolutionary organizations
- Criminal organizations
- Civilian activity
- Economic change
- Environmental change
- Previous events

Events should always have a believable origin.

---

# Event Lifecycle

Every World Event follows the same lifecycle.

Event Creation

↓

Event Development

↓

Event Escalation (optional)

↓

Event Resolution

↓

Historical Record

No event should appear or disappear without explanation.

---

# Event Development

Events evolve over time.

Possible developments include:

- Expansion
- Containment
- Negotiation
- Failure
- Escalation
- Fragmentation
- Recovery

Development depends on world conditions rather than narrative necessity.

---

# Event Escalation

Some events grow larger.

Examples include:

Minor Crime

↓

Organized Crime

↓

Regional Crisis

↓

National Emergency

↓

Global Incident

Escalation is not guaranteed.

The world determines whether escalation occurs.

---

# Event Resolution

Events may conclude through:

- Natural resolution
- Military intervention
- Political negotiation
- Economic recovery
- Scientific advancement
- Player action
- NPC action

Every resolution produces consequences.

---

# Event Persistence

Completed events remain part of world history.

Future systems may reference historical events.

Examples include:

- Memorials
- Political reforms
- Public opinion
- Territorial disputes
- Cultural change
- Economic recovery

Events are never erased.

---

# Event Interaction

Multiple events may influence one another.

Examples:

A hurricane destroys a port.

↓

Trade declines.

↓

Food shortages occur.

↓

Crime increases.

↓

Marine deployment expands.

↓

Pirate activity shifts.

↓

Political instability develops.

One event may generate multiple additional events.

---

# Event Priority

Events differ in significance.

Suggested priority levels include:

- Local
- Regional
- National
- Global

Priority affects:

- News coverage
- Government response
- Resource allocation
- Public awareness

Priority does not determine importance to individual players.

---

# Event Duration

Events consume time.

Possible durations include:

- Minutes
- Hours
- Days
- Weeks
- Months
- Years

Long-term events may continue throughout an entire campaign.

---

# Event Visibility

Not every event is publicly known.

Possible visibility states include:

- Secret
- Restricted
- Local Knowledge
- Regional Knowledge
- Global Knowledge

Visibility depends on the News System.

---

# Event Consequences

Every completed event should influence one or more systems.

Possible affected systems include:

- Reputation
- Relationships
- Economy
- Politics
- Security
- Population
- Trade
- Territory
- Weather
- Navigation

No significant event should leave the world unchanged.

---

# Event Chains

Events may trigger additional events.

Examples include:

Storm

↓

Shipwreck

↓

Missing Cargo

↓

Economic Loss

↓

Food Inflation

↓

Civil Unrest

↓

Revolution

↓

Government Response

↓

Military Deployment

↓

Political Reform

The AI Game Master should encourage logical event chains.

---

# Player Interaction

Players may:

- Prevent events.
- Accelerate events.
- Redirect events.
- Participate in events.
- Ignore events.

Ignoring an event is a meaningful decision.

The event continues unless realistically stopped.

---

# AI Game Master Responsibilities

The AI must:

- Continuously simulate world events.
- Preserve logical causality.
- Respect previous events.
- Apply realistic consequences.
- Maintain historical continuity.
- Prevent contradictory event timelines.

The AI must never:

- Create events solely for dramatic effect.
- Ignore completed events.
- Remove consequences without reason.
- Force players into events.
- Freeze world development.

---

# Integration

Parent Documents:

- WORLD.md
- TIMELINE.md
- WEATHER.md
- NEWS_SYSTEM.md
- ISLAND_RULES.md

Related Documents:

- SEAS.md
- GRAND_LINE.md
- RED_LINE.md
- CALM_BELT.md

Integrated Systems:

- REPUTATION.md
- RELATIONSHIP.md
- COMBAT.md
- MEDICAL.md
- FACTIONS.md
- NPCS.md
- SAVE_FORMAT.md

---

# Design Principles

The world creates events.

Events create consequences.

Consequences create history.

History shapes the future.

Players influence history,

but history does not exist solely because of players.

---

# Source of Truth

`WORLD_EVENTS.md`

is the authoritative specification governing the generation, progression, interaction, resolution, and historical persistence of world events throughout PROJECT ASTER ENGINE.

All future systems that create, modify, respond to, or record world events must inherit the rules defined in this document.