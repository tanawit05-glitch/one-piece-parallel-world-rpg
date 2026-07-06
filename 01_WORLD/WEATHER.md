# WEATHER

---

# Purpose

`WEATHER.md` defines the global weather simulation system of PROJECT ASTER ENGINE.

Weather is a living world system that continuously changes over time.

It influences navigation, travel, combat, economy, exploration, communication, and world events.

Weather exists independently of player actions.

---

# Scope

This document defines:

- Weather Simulation
- Climate Zones
- Weather Progression
- Weather Intensity
- Environmental Effects
- Travel Influence
- Combat Influence
- World Interaction

This document does not define:

- Island Geography
- Navigation Mechanics
- Sea Kings
- Natural Disasters
- World Events

Those systems reference this document.

---

# Core Principle

Weather is dynamic.

Weather is persistent.

Weather is impartial.

Weather affects every character equally.

The world never maintains permanent weather unless explicitly defined.

---

# Weather Simulation

Weather continuously evolves throughout the world.

Every sea region maintains its own weather conditions.

Weather may change naturally over time.

Changes occur regardless of player location.

---

# Regional Independence

Weather is simulated independently for each region.

Possible regional differences include:

- Clear skies
- Heavy rain
- Thunderstorms
- Dense fog
- Snowfall
- Heat waves
- Strong winds
- Calm conditions

Neighboring regions are not required to share identical weather.

---

# Climate Zones

Every island belongs to a climate environment.

Possible climates include:

- Tropical
- Temperate
- Desert
- Arctic
- Volcanic
- Jungle
- Mountain
- Mixed Climate

Climate influences the probability of future weather.

Climate does not determine weather with certainty.

---

# Weather States

Possible weather conditions include:

- Clear
- Cloudy
- Rain
- Heavy Rain
- Storm
- Thunderstorm
- Fog
- Snow
- Blizzard
- Heat Wave
- Strong Wind
- Extreme Wind

Additional weather types may be introduced by future systems.

---

# Weather Intensity

Every weather condition possesses an intensity.

Suggested levels include:

- Mild
- Moderate
- Severe
- Extreme

Higher intensity produces greater environmental influence.

---

# Weather Duration

Weather is temporary.

Every weather state has a beginning,

a duration,

and an ending.

Weather should transition naturally whenever possible.

Abrupt changes require reasonable explanation.

---

# Environmental Effects

Weather may influence:

- Visibility
- Temperature
- Sea Conditions
- Wind Strength
- Ground Conditions
- Natural Hazards

Environmental effects should remain logically consistent.

---

# Travel Influence

Weather directly affects travel.

Possible consequences include:

- Reduced speed
- Delayed arrival
- Increased fuel consumption
- Sail efficiency changes
- Dangerous sea conditions
- Route adjustments

Travel systems must reference current weather conditions.

---

# Combat Influence

Weather may influence combat.

Examples include:

- Reduced visibility
- Limited ranged attacks
- Slippery terrain
- Strong winds
- Lightning hazards
- Extreme heat
- Extreme cold

Combat systems determine the exact mechanical effects.

---

# Economy Influence

Weather may affect local economies.

Examples include:

- Fishing productivity
- Agriculture
- Shipping
- Port activity
- Resource availability

Economic changes occur naturally over time.

---

# Population Behavior

Citizens respond realistically to weather.

Possible responses include:

- Seeking shelter
- Delayed travel
- Cancelled markets
- Increased indoor activity
- Emergency preparation

NPC behavior should reflect environmental conditions.

---

# Weather Progression

Weather changes gradually.

Typical progression may include:

Clear

↓

Cloudy

↓

Rain

↓

Storm

↓

Heavy Storm

↓

Rain

↓

Cloudy

↓

Clear

The AI Game Master should avoid unrealistic oscillation between extreme weather conditions.

---

# Extreme Weather

Extreme weather is uncommon.

Examples include:

- Hurricanes
- Massive Thunderstorms
- Blizzard Conditions
- Extreme Heat
- Oceanic Super Storms

Extreme weather may trigger World Events.

---

# Weather Memory

Weather leaves consequences.

Examples include:

- Flood damage
- Crop failure
- Port destruction
- Shipwrecks
- Landslides

Environmental recovery requires time.

---

# AI Game Master Responsibilities

The AI must:

- Simulate weather continuously.
- Maintain regional consistency.
- Respect climate influences.
- Apply weather equally.
- Preserve environmental continuity.

The AI must never:

- Ignore weather effects.
- Change weather without reason.
- Favor players through weather.
- Maintain static weather indefinitely.

---

# Integration

Parent Documents:

- WORLD.md
- TIMELINE.md
- SEAS.md
- ISLAND_RULES.md

Related Documents:

- NEWS_SYSTEM.md
- WORLD_EVENTS.md

Integrated Systems:

- COMBAT.md
- DICE.md
- MEDICAL.md
- SHIPS.md
- REPUTATION.md
- SAVE_FORMAT.md

---

# Design Principles

Weather creates uncertainty.

Uncertainty creates preparation.

Preparation creates meaningful decisions.

Weather should shape the world,

not merely decorate it.

---

# Source of Truth

`WEATHER.md`

is the authoritative specification governing weather simulation throughout PROJECT ASTER ENGINE.

All future systems involving climate, environmental conditions, travel, combat, and world simulation must inherit the rules defined in this document.