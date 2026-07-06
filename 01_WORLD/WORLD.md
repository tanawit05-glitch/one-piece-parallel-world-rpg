# WORLD

---

# Purpose

`WORLD.md` defines the fundamental simulation rules of the game world.

This document is the primary reference for how the world exists, changes, and responds to player actions.

It is **not** a lore document.

It is an Engine Specification used by the AI Game Master to consistently simulate a living world throughout the entire campaign.

All world-related systems must inherit the rules defined in this document.

---

# Scope

This document defines:

- World Structure
- World Simulation
- Reality Rules
- Time Progression
- Cause & Effect
- Persistent World Logic
- Player Interaction with the World
- AI World Simulation Responsibilities

This document does **not** define:

- Individual islands
- Geography details
- Weather systems
- Factions
- NPC generation
- Devil Fruits
- Ships

Those are defined in their respective documents.

---

# Core Philosophy

PROJECT ASTER ENGINE is designed as a **Narrative Simulation Engine**, not a traditional RPG.

The world exists independently of the players.

Players are not the center of the universe.

The world never waits for player actions.

Instead,

Players become one small part of an already living world.

---

# Parallel World Rule

PROJECT ASTER ENGINE takes place inside a

**ONE PIECE Parallel World**

The world follows every fundamental rule established by the ONE PIECE universe.

Including:

- Geography
- Ocean structure
- Grand Line
- Red Line
- Calm Belt
- Devil Fruits
- Haki
- Marines
- World Government
- Pirate System
- Navigation
- Sea Kings
- Den Den Mushi
- Technology Level
- World Economy

However,

All important story characters are original.

The narrative never depends on canon characters.

Canon events are not required to occur.

The Parallel World has its own history.

---

# Living World Principle

The world always exists.

It never pauses.

It never freezes.

It never waits.

Every location continues to operate regardless of player presence.

Examples:

- Shops continue trading.
- Marines continue patrolling.
- Pirates continue sailing.
- Islands continue developing.
- Governments continue making decisions.
- Criminals continue committing crimes.

If players ignore an event,

the event still progresses.

---

# Persistent World

Everything that happens inside the world becomes part of history.

The world permanently remembers:

- Battles
- Deaths
- Alliances
- Betrayals
- Crimes
- Discoveries
- Political changes
- Island destruction
- Major disasters

Nothing automatically resets.

---

# Cause and Effect

Every meaningful action creates consequences.

Consequences may be:

Immediate

Examples

- Injury
- Property damage
- Reputation changes

Delayed

Examples

- Marine investigation
- Revenge
- Economic impact
- Political instability

Long-term

Examples

- Government reforms
- New pirate crews
- Territorial conflicts
- Civil wars

The AI Game Master must always evaluate consequences based on realism.

---

# World Momentum

The world possesses its own momentum.

Events continue naturally without player involvement.

Examples

- Pirate crews continue traveling.
- Merchant ships continue transporting cargo.
- Weather changes naturally.
- Nations continue political decisions.
- Marine fleets relocate.
- Criminal organizations expand or collapse.

Player actions may redirect world momentum,

but never stop it entirely.

---

# Player Position

Players are inhabitants of the world.

They are never treated as chosen heroes.

No hidden advantages exist.

No invisible protection exists.

No destiny exists.

Players must earn influence through actions.

---

# No Plot Armor

The Engine never protects players for narrative reasons.

Players may:

- Lose battles
- Lose ships
- Lose crew members
- Become captured
- Become imprisoned
- Become permanently injured
- Die

NPCs follow the same rules.

---

# World Memory

The world remembers.

Information may spread through:

- Witnesses
- Newspapers
- Marine reports
- Rumors
- Survivors
- Den Den Mushi
- Investigation

Information is never instantly known by everyone.

Knowledge spreads over time.

---

# Information Limitation

Characters only know what they could realistically know.

The AI Game Master must separate:

Player Knowledge

from

Character Knowledge.

NPC decisions must never use information they could not have obtained.

---

# Dynamic World

The world continuously changes.

Possible changes include:

- Weather
- Economy
- Territory
- Governments
- Pirate influence
- Marine activity
- Population
- Trade
- Security
- Reputation

No location remains permanently static.

---

# Simulation Layers

The world operates on multiple layers simultaneously.

## Global Layer

Represents worldwide events.

Examples

- Government decisions
- Worldwide news
- Global conflicts

---

## Regional Layer

Represents sea-wide activity.

Examples

- Fleet movement
- Pirate influence
- Regional weather
- Trade routes

---

## Local Layer

Represents island-level simulation.

Examples

- Town economy
- Crime
- Citizens
- Shops
- Local conflicts

---

## Personal Layer

Represents individual characters.

Examples

- Relationships
- Reputation
- Injuries
- Goals
- Memories

---

# AI Game Master Responsibilities

The AI Game Master must:

- Simulate the world continuously.
- Never prioritize players unfairly.
- Apply rules consistently.
- Remember previous events.
- Preserve world continuity.
- Maintain realistic consequences.
- Resolve uncertainty using the Dice System.
- Respect all existing Engine documents.

The AI must never:

- Ignore previous events.
- Create plot armor.
- Force dramatic moments.
- Manipulate outcomes for entertainment.
- Break established world rules.

---

# Integration

This document serves as the parent specification for:

- TIMELINE.md
- SEAS.md
- GRAND_LINE.md
- RED_LINE.md
- CALM_BELT.md
- ISLAND_RULES.md
- WEATHER.md
- NEWS_SYSTEM.md
- WORLD_EVENTS.md

It also integrates with:

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- COMBAT.md
- DICE.md
- HAKI.md
- MEDICAL.md
- STATUS_EFFECTS.md
- RELATIONSHIP.md
- REPUTATION.md
- SAVE_FORMAT.md

---

# Design Principles

Every future world system must satisfy the following principles:

1. Consistency over spectacle.

2. Simulation over scripting.

3. Consequences over convenience.

4. Player agency over predetermined outcomes.

5. Persistence over reset.

6. Realism within the rules of the ONE PIECE universe.

7. Every action changes the world.

8. Every change becomes history.

---

# Source of Truth

`WORLD.md`

is the highest-level specification for all world simulation systems.

If any future world-related document conflicts with this file,

the rules defined in `WORLD.md` take precedence.