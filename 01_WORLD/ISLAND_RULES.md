# ISLAND_RULES

---

# Purpose

`ISLAND_RULES.md` defines how islands function within PROJECT ASTER ENGINE.

Every island is an independent simulation entity with its own identity, population, economy, security, politics, and history.

Islands are living locations that continue evolving regardless of player presence.

This document establishes the rules required to simulate islands consistently across the world.

---

# Scope

This document defines:

- Island Identity
- Island Simulation
- Population
- Economy
- Security
- Development
- Political Stability
- Island Memory

This document does not define:

- Individual islands
- NPC generation
- Weather
- Factions
- World Events

Those systems reference this document.

---

# Core Principle

Every island is alive.

Every island changes.

Every island remembers.

No island exists solely for player interaction.

Each island develops according to its own circumstances.

---

# Island Identity

Every island possesses a unique identity.

An island may differ in:

- Geography
- Climate
- Population
- Culture
- Economy
- Technology
- Government
- Security
- Resources
- Local Laws

No two islands are required to share identical characteristics.

---

# Independent Simulation

Each island is simulated independently.

Simulation continues even when:

- Players leave.
- Players never visit.
- Players ignore local events.

The world does not pause outside the player's view.

---

# Population

Every island contains a living population.

Population continuously performs daily activities such as:

- Working
- Trading
- Traveling
- Farming
- Fishing
- Studying
- Governing
- Socializing

Citizens are not static background objects.

Population behavior changes according to local conditions.

---

# Economy

Each island maintains its own economy.

Economic conditions are influenced by:

- Local resources
- Imports
- Exports
- Trade routes
- Crime
- Government policies
- Natural disasters
- War
- Population

Economic conditions evolve over time.

---

# Security

Every island possesses a level of security.

Security may be provided by:

- Marines
- Local military
- Kingdom guards
- Private organizations
- Pirate protection
- Community defense

Security strength changes according to world conditions.

---

# Political Stability

Political stability is dynamic.

Factors affecting stability include:

- Leadership
- Economy
- Crime
- Public trust
- External pressure
- War
- Revolutionary activity

Political conditions may improve or deteriorate over time.

---

# Infrastructure

Infrastructure represents the island's functional development.

Examples include:

- Ports
- Roads
- Hospitals
- Schools
- Shipyards
- Markets
- Defensive structures
- Communication facilities

Infrastructure may be constructed, expanded, damaged, repaired, or destroyed.

---

# Resource Availability

Every island possesses finite resources.

Examples include:

- Food
- Fresh water
- Timber
- Stone
- Minerals
- Fuel
- Livestock
- Manufactured goods

Resource availability influences local development and trade.

---

# Local Conflict

Conflicts may emerge naturally.

Examples include:

- Crime
- Political disputes
- Labor strikes
- Pirate attacks
- Civil unrest
- Resource shortages

Conflicts develop according to world simulation.

They are not created solely for player involvement.

---

# Island Development

Every island evolves over time.

Possible developments include:

- Population growth
- Economic expansion
- Technological advancement
- Political reform
- Urban development
- Cultural change
- Infrastructure improvement

Development occurs gradually.

---

# Island Decline

Islands may also deteriorate.

Possible causes include:

- War
- Disease
- Natural disasters
- Economic collapse
- Corruption
- Pirate occupation
- Population decline

Decline is part of normal world simulation.

---

# Island Memory

Every island retains historical memory.

Historical records may include:

- Battles
- Disasters
- Elections
- Revolutions
- Pirate attacks
- Famous visitors
- Major discoveries
- Economic crises

Historical events influence future simulation.

---

# Player Influence

Players may influence islands through their actions.

Possible effects include:

- Improving security
- Destabilizing governments
- Stimulating trade
- Damaging infrastructure
- Creating alliances
- Inspiring rebellion

Player influence is never absolute.

The island continues responding through its own systems.

---

# Long-Term Evolution

Island conditions should never remain permanently static.

Over time an island may become:

- Wealthier
- Poorer
- Safer
- More dangerous
- Politically stronger
- Politically unstable
- More populated
- Less populated

Long-term change should emerge naturally from accumulated events.

---

# AI Game Master Responsibilities

The AI must:

- Simulate islands independently.
- Preserve historical continuity.
- Apply realistic social and economic change.
- Respect previous player actions.
- Continue simulation during player absence.

The AI must never:

- Reset island conditions.
- Ignore historical consequences.
- Freeze inactive islands.
- Treat islands as static quest hubs.

---

# Integration

Parent Documents:

- WORLD.md
- TIMELINE.md
- SEAS.md

Related Documents:

- WEATHER.md
- NEWS_SYSTEM.md
- WORLD_EVENTS.md

Future Documents:

- FACTIONS.md
- NPCS.md
- ITEMS.md
- SHIPS.md

Integrated Systems:

- RELATIONSHIP.md
- REPUTATION.md
- COMBAT.md
- MEDICAL.md
- SAVE_FORMAT.md

---

# Design Principles

An island is not a level.

An island is not a quest area.

An island is a living society.

Societies evolve.

History accumulates.

Player actions become part of that history.

---

# Source of Truth

`ISLAND_RULES.md`

is the authoritative specification governing the simulation of islands.

All future systems involving settlements, societies, local governments, economies, and island development must inherit the rules defined in this document.