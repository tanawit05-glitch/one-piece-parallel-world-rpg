# SEAS

---

# Purpose

`SEAS.md` defines the global ocean structure of PROJECT ASTER ENGINE.

The sea is the primary environment of the world.

Nearly every journey, trade route, military operation, pirate activity, and exploration depends on the ocean.

This document defines how the oceans are divided and how they behave within the simulation.

---

# Scope

This document defines:

- Ocean Structure
- Sea Classification
- Regional Boundaries
- Ocean Navigation
- Ocean Simulation
- Cross-Sea Travel
- Sea Accessibility

This document does not define:

- Grand Line
- Red Line
- Calm Belt
- Weather
- Individual Islands

These are defined in their own documents.

---

# Core Principle

The ocean is the foundation of the world.

Every location belongs to a sea.

Every voyage occurs through connected oceans.

No island exists independently from the world's ocean system.

---

# World Ocean Structure

The world is divided into multiple major regions.

These regions are separated by natural barriers.

Each region has unique navigation conditions.

Each region develops independently while remaining connected through global events.

---

# Sea Classification

The Engine recognizes the following sea regions.

## North Blue

Stable ocean.

Moderate marine activity.

Moderate pirate activity.

Balanced trade routes.

---

## East Blue

Relatively peaceful.

Lower average pirate threat.

High civilian population.

Strong merchant activity.

---

## West Blue

Politically diverse.

Higher organized crime activity.

Moderate Marine presence.

---

## South Blue

Rich biodiversity.

Unpredictable regional conditions.

Frequent long-distance trade.

---

## Grand Line

Highly unpredictable.

Extreme environmental variation.

Advanced navigation required.

Defined in `GRAND_LINE.md`.

---

## Calm Belt

Extremely dangerous.

Minimal wind.

Minimal ocean current.

Dense Sea King population.

Defined in `CALM_BELT.md`.

---

# Ocean Boundaries

Every sea has physical boundaries.

Crossing into another region requires realistic travel.

The world never treats sea transitions as instant.

---

# Regional Identity

Each sea develops independently.

Possible differences include:

- Economy
- Crime
- Marine Activity
- Pirate Presence
- Technology
- Culture
- Trade
- Politics

No two seas are required to evolve identically.

---

# Ocean Simulation

Every sea continuously simulates:

- Trade
- Ship Movement
- Pirate Activity
- Marine Patrols
- Weather Influence
- Population Movement
- Economic Flow

Simulation continues regardless of player location.

---

# Navigation

Travel always follows navigable routes.

Ships cannot teleport.

Every voyage consumes:

- Time
- Resources
- Crew stamina
- Ship durability

Navigation rules are expanded in future documents.

---

# Sea Accessibility

Different regions have different accessibility.

Accessibility depends on:

- Geography
- Ocean Conditions
- Ship Capability
- Navigation Skill
- Government Restrictions
- Natural Hazards

The AI Game Master determines accessibility based on established world rules.

---

# Ocean Influence

The surrounding sea influences nearby islands.

Possible effects include:

- Economy
- Imports
- Exports
- Marine Presence
- Pirate Activity
- News Speed
- Travel Frequency
- Resource Availability

Island simulation must consider its surrounding sea.

---

# Cross-Regional Influence

Events occurring in one sea may eventually affect another.

Examples include:

- Economic shifts
- Pirate expansion
- Government campaigns
- Refugee movement
- Epidemics
- Trade disruption

The spread of influence requires time.

Immediate worldwide effects should be avoided unless justified.

---

# AI Game Master Responsibilities

The AI must:

- Maintain regional consistency.
- Simulate activity in every sea.
- Respect geographical boundaries.
- Continue world movement during player absence.
- Apply realistic travel limitations.

The AI must never:

- Ignore regional differences.
- Instantly move ships across oceans.
- Freeze inactive regions.
- Treat all seas identically.

---

# Integration

Parent Document:

- WORLD.md

Related Documents:

- TIMELINE.md
- GRAND_LINE.md
- RED_LINE.md
- CALM_BELT.md
- ISLAND_RULES.md
- WEATHER.md
- WORLD_EVENTS.md

Integrated Systems:

- DICE.md
- COMBAT.md
- REPUTATION.md
- SAVE_FORMAT.md

---

# Source of Truth

`SEAS.md`

is the authoritative specification for global ocean classification and regional sea simulation.

All sea-related documents inherit the rules defined here.