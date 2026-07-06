# FACTIONS

---

# Purpose

`FACTIONS.md` defines the organization simulation framework of PROJECT ASTER ENGINE.

A Faction is any organized group capable of acting independently within the world simulation.

Factions possess objectives, resources, influence, territory, leadership, memory, and the ability to react to changes without player involvement.

This document is the parent specification for every organizational system in PROJECT ASTER ENGINE.

---

# Scope

This document defines:

- Faction Definition
- Organizational Scale
- Organizational Identity
- Organizational Lifecycle
- Objectives
- Resources
- Leadership
- Membership
- Intelligence
- Decision Making
- Influence
- Territory
- Diplomacy
- Organizational Growth
- Organizational Decline
- Organizational Memory
- Simulation Rules
- AI Responsibilities

This document does not define:

- Marines
- World Government
- Pirate Crews
- Revolutionary Army
- Criminal Organizations
- Individual NPCs

Those systems are defined in their own documents.

---

# Core Principle

Factions are living organizations.

Every faction acts according to its own goals.

Every faction changes over time.

Every faction is affected by the world.

Players may influence factions but never become the center of every organization.

---

# Organizational Definition

A Faction is any organized body capable of making collective decisions.

A faction may possess:

- Leadership
- Members
- Territory
- Resources
- Ships
- Infrastructure
- Intelligence
- Reputation
- Political Influence
- Military Capability

Not every faction possesses every attribute equally.

---

# Living Organization Principle

Every faction continuously performs activities regardless of player presence.

Examples include:

- Recruitment
- Training
- Trade
- Intelligence Gathering
- Diplomacy
- Patrols
- Expansion
- Defense
- Research
- Logistics

Faction simulation never pauses.

---

# Organizational Scale

The Engine recognizes three organizational scales.

## Global Organization

Operates across multiple seas.

Examples:

- World Government
- Marines
- Revolutionary Army

## Regional Organization

Operates within one sea or a large geographical region.

Examples:

- Large Pirate Alliances
- Regional Criminal Syndicates

## Local Organization

Operates on one island or a small group of islands.

Examples:

- Local Pirate Crews
- Merchant Guilds
- Island Militias
- Criminal Gangs

Organizations may grow or decline between scales.

---

# Organizational Lifecycle

Every faction follows a natural lifecycle.

Create

↓

Grow

↓

Peak

↓

Decline

↓

Collapse

↓

Rebuild (Optional)

---

# Organizational Identity

Identity includes:

- Ideology
- Objectives
- Culture
- Methods
- Discipline
- Public Image
- Operational Style

Identity should remain internally consistent.

---

# Objectives

Objectives exist on three levels.

Short-Term

- Complete operations
- Recruit members
- Acquire supplies

Medium-Term

- Expand influence
- Increase wealth
- Strengthen logistics

Long-Term

- Dominate territory
- Achieve ideological goals
- Secure organizational survival

Objectives evolve with the world.

---

# Resources

Resources include:

- Personnel
- Ships
- Equipment
- Money
- Supplies
- Intelligence
- Infrastructure
- Political Support

Resources are finite.

---

# Leadership

Leadership provides:

- Strategic Direction
- Operational Priorities
- Resource Allocation
- Organizational Decisions

Leadership may change due to:

- Death
- Promotion
- Election
- Coup
- Betrayal
- Retirement

---

# Membership

Members contribute to organizational capability.

Membership affects:

- Information Sharing
- Operational Capacity
- Resource Production
- Organizational Growth

Members retain individual personalities.

---

# Intelligence

Organizations gather information through:

- Scouts
- Informants
- Newspapers
- Den Den Mushi
- Merchants
- Government Reports
- Witnesses

Information is never perfect.

---

# Decision Making

Organizations evaluate:

Goal

↓

Information

↓

Resources

↓

Risk

↓

Decision

↓

Operation

↓

Consequence

↓

Memory

↓

Repeat

---

# Influence

Influence represents organizational power.

Influence may exist through:

- Military
- Economy
- Politics
- Public Support
- Fear
- Information Networks

Influence varies by region.

---

# Territory

Organizations may control:

- Islands
- Ports
- Bases
- Headquarters
- Trade Routes
- Hidden Facilities

Territory requires continuous maintenance.

---

# Diplomacy

Faction relationships include:

- Alliance
- Cooperation
- Neutral
- Rivalry
- Hostility
- War

Diplomatic status may change over time.

---

# Organizational Growth

Growth may occur through:

- Recruitment
- Economic Success
- Territorial Expansion
- Technological Development
- Successful Operations

Growth increases responsibility.

---

# Organizational Decline

Decline may result from:

- Military Defeat
- Corruption
- Resource Shortages
- Internal Conflict
- Political Failure
- Leadership Loss

Decline influences future decisions.

---

# Organizational Memory

Organizations remember:

- Wars
- Alliances
- Betrayals
- Major Operations
- Territorial Losses
- Victories
- Political Agreements

Historical memory influences future behavior.

---

# Simulation Loop

Every Timeline Update

Observe World

↓

Gather Intelligence

↓

Evaluate Objectives

↓

Assess Resources

↓

Determine Priorities

↓

Execute Operations

↓

Record Results

↓

Update Organizational Memory

↓

Repeat

---

# AI Game Master Responsibilities

The AI must:

- Simulate every faction continuously.
- Respect organizational identity.
- Respect logistics.
- Respect diplomacy.
- Preserve historical consistency.
- Apply identical rules to players and NPCs.

The AI must never:

- Freeze inactive factions.
- Give omniscient knowledge.
- Ignore resource limitations.
- Ignore travel time.
- Force narrative outcomes.

---

# Dependencies

Required Documents:

- WORLD.md
- TIMELINE.md
- NEWS_SYSTEM.md
- WORLD_EVENTS.md

Referenced Documents:

- MARINES.md
- WORLD_GOVERNMENT.md
- PIRATES.md
- REVOLUTIONARY_ARMY.md
- INFLUENCE.md
- TERRITORY.md
- DIPLOMACY.md
- OPERATIONS.md

Future Extensions:

- NPCS.md
- CREW.md
- SHIPS.md

---

# Integration

Integrated Systems:

- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- REPUTATION.md
- RELATIONSHIP.md
- SAVE_FORMAT.md

---

# Design Principles

Organizations create conflict.

Conflict creates change.

Change creates history.

History shapes organizations.

Every faction must adapt or decline.

---

# Source of Truth

`FACTIONS.md` is the authoritative specification governing all organizational simulation within PROJECT ASTER ENGINE.

All faction-related systems must inherit the rules defined in this document.
