# =====================================================
# FILE : 04_SHIPS\ASTER_WING.md
# =====================================================

# ASTER WING

## BASIC INFORMATION

Name:
Aster Wing

Nickname:
The Wing of the Stars

Type:
Brig

Class:
Medium Sailing Ship

Affiliation:
Future Crew

Status:
Not Yet Acquired

Condition:
Excellent

---

## CAPACITY

Crew Capacity:
10

Current Crew:
0

Cargo Capacity:
Medium

Voyage Range:
Long Distance

---

## SPECIFICATIONS

Length:
28 meters

Beam:
7.5 meters

Masts:
2

Decks:
2

Cannons:
6

Harpoon Launchers:
2

---

## FACILITIES

Captain's Cabin

Navigator's Room

Medical Room

Kitchen

Crew Quarters

Cargo Hold

Storage Room

Crow's Nest

Workshop

Small Library

Armory

---

## PERFORMANCE

Speed:
★★★★☆

Durability:
★★★★☆

Maneuverability:
★★★★★

Cargo Capacity:
★★★☆☆

Comfort:
★★★★☆

---

## SPECIAL FEATURES

Balanced Hull

Excellent Stability

Designed for Long Voyages

Large Medical Room

Wide Navigation Deck

Expandable Interior

---

## CURRENT UPGRADES

None

---

## FUTURE UPGRADES

Sea Prism Stone Coating

Steel Reinforced Hull

Advanced Navigation System

Emergency Medical Bay

Expanded Workshop

Improved Cannon Battery

---

## HISTORY

Originally constructed by skilled civilian shipwrights for long-range exploration and trade.

The vessel later passed through several owners before eventually awaiting its future crew.

With a balanced design, reliable handling, and room for a growing crew, Aster Wing became the ship chosen to begin their journey across the seas.

---



# =====================================================
# FILE : 04_SHIPS\SHIP_BLUEPRINT.md
# =====================================================

# SHIP_BLUEPRINT.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Ship Generation System)

---

# ⚓ SHIP BLUEPRINT SYSTEM

ระบบนี้คือ “โรงงานสร้างเรือ” ของโลกทั้งใบ

แทนที่จะออกแบบเรือทีละลำ  
ระบบนี้จะสร้างเรือจาก “โครงสร้างแม่แบบ (Blueprint)”

---

# 🧭 CORE PRINCIPLE

- One system generates infinite ships
- Every ship must have narrative logic
- No random ship without cause
- Blueprint defines identity, not stats only

---

# 🧬 SHIP BLUEPRINT STRUCTURE

ทุกเรือในโลกจะถูกสร้างจาก Blueprint ดังนี้:

## Required Components:

- Ship Class
- Purpose
- Origin Type
- Builder Archetype
- Crew Compatibility Profile

---

# 🚢 SHIP CLASS TYPES

## 1. Small Vessel
- เรือขนาดเล็ก
- เร็ว / คล่องตัวสูง
- Crew ต่ำ

## 2. Standard Ship
- สมดุลทุกด้าน
- ใช้โดย Pirate Crew ส่วนใหญ่

## 3. Warship Class
- เรือรบขนาดใหญ่
- ใช้โดย Marine / Faction

## 4. Capital Ship
- เรือธง / เรือแม่ทัพ
- มีระบบหลาย Deck

## 5. Mythic Vessel
- เรือระดับตำนาน
- มี “Will” และ Memory สูงผิดปกติ

---

# 🎯 SHIP PURPOSE TYPES

- Exploration (สำรวจ)
- Combat (รบ)
- Transport (ขนส่ง)
- Raid (ปล้น / บุก)
- Command (เรือบัญชาการ)
- Mystery (ไม่ทราบจุดประสงค์)

---

# 🏗️ BUILDER ARCHETYPE

เรือถูกสร้างโดย “ตัวตนของคนสร้าง”

## Types:

- Master Shipwright (ช่างระดับตำนาน)
- Naval Engineer (ระบบทหาร)
- Pirate Improviser (สร้างแบบดิบ)
- Ancient Civilization (โบราณ)
- Unknown Origin (ไม่มีผู้สร้างชัดเจน)

---

# 🧠 CREW COMPATIBILITY PROFILE

เรือแต่ละลำ “เหมาะกับ Crew แบบไหน”

## Profiles:

- Aggressive Crew Fit
- Disciplined Crew Fit
- Chaotic Crew Fit
- Explorer Crew Fit
- Mixed Harmony Fit

👉 ถ้า mismatch → เกิด Conflict บนเรือ

---

# 📊 BLUEPRINT CORE OUTPUT

เมื่อสร้างเรือ ระบบจะ output:

## SHIP INSTANCE

- Name (generated or assigned)
- Class
- Core Stats
- Personality Seed
- Starting Memory Fragment

---

# 🌊 SHIP GENERATION RULE

ทุกการสร้างเรือต้องมี:

## 1. Narrative Reason
- ทำไมเรือลำนี้ถึงเกิดขึ้น

## 2. World Context
- อยู่ faction ไหน / ยุคไหน

## 3. Purpose Anchor
- ใช้ทำอะไรในโลกนี้

---

# ⚠️ RANDOMIZATION RULE

ห้าม random แบบไม่มีเหตุผล

ต้องใช้:

- World state
- Faction needs
- Story necessity
- Crew compatibility

---

# 🔥 SPECIAL BLUEPRINT MODIFIERS

## 1. Battle-Hardened Modifier
- ผ่านสงครามมาแล้ว
- มี Damage Memory

## 2. Experimental Modifier
- เทคโนโลยีแปลก
- พฤติกรรมไม่คงที่

## 3. Cursed Vessel Modifier
- มี Trauma Memory
- ส่งผลต่อ Crew Morale

## 4. Legendary Blueprint
- เชื่อมกับเหตุการณ์ในอดีตของโลก

---

# 🧩 LINK TO OTHER SYSTEMS

- SHIP_CORE → defines life rules
- SHIP_MEMORY → stores experience
- SHIP_EVOLUTION → growth system
- WORLD → decides ship spawn logic

---

# 🧠 SIMULATION RULE

Game Master must:

- Never create ship without blueprint logic
- Always tie ship to world narrative
- Ensure ship affects story, not just travel

---

# END OF FILE

# =====================================================
# FILE : 04_SHIPS\SHIP_COMBAT.md
# =====================================================

# SHIP_COMBAT.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Naval Combat Narrative System)

---

# ⚔️ SHIP COMBAT SYSTEM

ระบบการต่อสู้ระหว่างเรือ  
ไม่ใช่ยิงค่า HP แต่คือ “สงครามเชิงเรื่องเล่า”

---

# 🌊 CORE PRINCIPLE

- Combat is narrative, not math
- Damage creates story changes
- Crew affects ship performance
- Environment is part of combat

---

# 🚢 COMBAT TYPES

## 1. Ship vs Ship
- ยิงปืนใหญ่ / board / หลบหลีก

## 2. Fleet Battle
- หลายเรือพร้อมกัน
- ใช้ faction logic

## 3. Chase Battle
- ไล่ล่าในทะเล
- Speed + Navigation สำคัญ

## 4. Survival Battle
- หนีจากศัตรู / พายุ / Buster Call

---

# 🧠 COMBAT FLOW

## Phase 1: Detection
- พบศัตรู
- วิเคราะห์สถานการณ์

## Phase 2: Positioning
- จัดตำแหน่งเรือ
- เลือกกลยุทธ์

## Phase 3: Engagement
- ยิง / หลบ / เข้าปะทะ

## Phase 4: Boarding (optional)
- เข้าสู่การสู้แบบ Crew vs Crew

## Phase 5: Resolution
- ผลกระทบต่อเรือ + Crew + World

---

# ⚓ SHIP DAMAGE SYSTEM

Damage แบ่งเป็น:

## 1. Structural Damage
- ตัวเรือเสียหาย

## 2. Functional Damage
- ระบบบางส่วนใช้งานไม่ได้

## 3. Emotional Damage
- Crew morale ลด
- Ship “stress” เพิ่ม

---

# 🔥 CRITICAL EVENTS

- Mast destroyed
- Hull breach
- Engine failure
- Navigation lost
- Fire outbreak

👉 ทุกเหตุการณ์ = story branch

---

# 🧩 CREW IMPACT RULE

Crew มีผลโดยตรง:

- Doctor → ลด damage effect
- Navigator → เพิ่ม escape chance
- Combat Specialist → เพิ่ม boarding success

---

# ⚠️ COMBAT END RULE

ไม่มี “ชนะ/แพ้” แบบเดียว

ผลลัพธ์อาจเป็น:
- Win
- Escape
- Partial Loss
- Pyrrhic Victory
- Narrative Defeat

---

# END OF FILE

# =====================================================
# FILE : 04_SHIPS\SHIP_CORE.md
# =====================================================

# SHIP_CORE.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Living Vessel System)

---

# ⚓ SHIP SYSTEM OVERVIEW

ใน PROJECT ASTER ENGINE  
“Ship” ไม่ใช่พาหนะ

แต่คือ:

> 🧠 “Living Entity of the Sea”  
> สิ่งมีชีวิตที่ผูกพันกับ Crew และเติบโตไปพร้อมกับเรื่องราว

---

# 🌊 CORE PHILOSOPHY

- Ship is a Character
- Ship remembers everything
- Ship is emotionally linked to Crew
- Ship evolves through narrative, not currency
- Damage is story, not numbers

---

# 🧬 SHIP IDENTITY SYSTEM

ทุกเรือต้องมี “ตัวตน”

## Required Fields:

- Ship Name
- Ship Class
- Origin Story
- Builder / Shipwright
- Initial Purpose

---

## 🎭 SHIP PERSONA (บุคลิกเรือ)

เรือสามารถมีบุคลิกแบบ:

- Loyal (ภักดี)
- Wild (ดื้อ / ไม่เสถียร)
- Protective (ปกป้อง Crew)
- Aggressive (พร้อมสู้)
- Silent Observer (เงียบ แต่รับรู้ทุกอย่าง)

👉 บุคลิกจะ “เปลี่ยนตามเหตุการณ์”

---

# 🧠 SHIP MEMORY SYSTEM

เรือ “จำทุกอย่าง”

## Memory Types:

### 1. Journey Memory
- เส้นทางที่เคยเดินทาง
- เกาะที่เคยไป

### 2. Combat Memory
- ศึกที่เคยผ่าน
- ความเสียหายที่เคยเกิด

### 3. Emotional Memory
- เหตุการณ์สำคัญของ Crew
- การสูญเสีย / ชัยชนะ

---

# 🧱 SHIP STRUCTURE SYSTEM

เรือประกอบด้วย “Living Zones”

## Core Zones:

- 🏠 Main Deck (ศูนย์กลางชีวิต)
- 🍳 Kitchen / Mess Hall
- 🛏 Crew Quarters
- ⚓ Control Room / Helm
- 🧰 Workshop / Repair Zone
- 📦 Storage Hold

## Special Zones (ปลดล็อกภายหลัง):

- Medical Bay
- Training Deck
- Secret Room
- Devil Fruit Storage (ถ้ามีในโลก)

---

# 📊 SHIP CORE STATS (เชิงนามธรรม)

## 1. Integrity
- ความสมบูรณ์ของตัวเรือ

## 2. Mobility
- ความสามารถในการเคลื่อนที่ในทะเล

## 3. Endurance
- ความสามารถรับความเสียหาย

## 4. Harmony
- ความสอดคล้องกับ Crew

## 5. Presence
- “ความรู้สึกของเรือในโลก”
  (เรือที่มีชื่อเสียง = Presence สูง)

---

# 🔥 SHIP DAMAGE MODEL

ความเสียหายไม่ใช่ HP

แต่คือ:

- Structural Damage
- Emotional Damage (เรือ “รู้สึกเสียหาย”)
- Functional Loss (ห้อง / ระบบใช้งานไม่ได้)

---

# ⚙️ SHIP EVOLUTION RULE

เรือจะ evolve ผ่าน:

## 1. Crisis Events
- รอดจากการโจมตีใหญ่

## 2. Crew Bond Growth
- Crew แข็งแกร่งขึ้น → เรือเปลี่ยน

## 3. Repair Narratives
- การซ่อมแซมมีความหมาย

## 4. Symbolic Events
- เหตุการณ์สำคัญทางอารมณ์

---

# ⚔️ SHIP ROLE IN GAMEPLAY

เรือสามารถ:

- เป็น Base of Operations
- เป็น Combat Unit
- เป็น Narrative Anchor
- เป็น Memory Holder ของทั้งทีม

---

# 🧭 SHIP + CREW LINK SYSTEM

Ship เชื่อมกับ Crew โดยตรง:

- Crew Morale → Ship Harmony
- Crew Conflict → Ship Stress
- Crew Memory → Ship Memory

👉 ถ้า Crew พัง → เรือ “เปลี่ยนสภาพ”

---

# ⚠️ CRITICAL RULE

- ห้าม treat ship เป็น object ธรรมดา
- ห้ามแยก ship ออกจาก narrative
- ทุก damage ต้องมี story consequence

---

# 🌊 END OF FILE

# =====================================================
# FILE : 04_SHIPS\SHIP_DATABASE.md
# =====================================================

# SHIP DATABASE

PROJECT ASTER ENGINE

Module:
04_SHIPS

Version:
2.0

Status:
Production

Authority:
Ship Database

Dependencies:

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- SAVE_FORMAT.md
- NAVIGATION.md
- COMBAT.md


---

# 1. PURPOSE


SHIP DATABASE

เป็นฐานข้อมูลเรือทั้งหมดในโลก

ASTER ENGINE

เรือไม่ใช่เพียง Object

แต่เป็น Entity ที่มี:

- ประวัติ
- สภาพ
- ความสัมพันธ์
- ความทรงจำ
- ผลกระทบจากเหตุการณ์


หน้าที่ของไฟล์นี้:

- เก็บข้อมูลเรือ
- ติดตามสถานะเรือ
- บันทึกประวัติ
- เชื่อมโยงกับ Crew และ World


ไม่ทำหน้าที่:

- กำหนด Combat Rules
- กำหนด Navigation Rules
- กำหนด Ship Evolution System


---

# 2. SHIP RECORD STANDARD


## Ship ID

รหัสเฉพาะของเรือ


ตัวอย่าง:

SHIP-0001


---

## Basic Information


Ship Name:

-


Ship Type:

-


Ship Class:

-


Origin:

-


Builder:

-


Creation Date:

-


First Appearance:

Episode:


Current Status:

- Active
- Damaged
- Destroyed
- Lost
- Captured
- Retired


Current Location:

-

# 3. SHIP CONDITION


ข้อมูลสภาพปัจจุบันของเรือ


## Hull Integrity

สภาพโครงสร้างเรือ

-


## Mobility Condition

สภาพความสามารถในการเดินทาง

-


## Equipment Condition

สภาพอุปกรณ์สำคัญ

-


## Damage Status

ความเสียหายปัจจุบัน

-


## Repair Status

สถานะการซ่อมแซม

-


---

# 4. SHIP STRUCTURE


ข้อมูลพื้นที่ภายในเรือ


## Main Areas


Captain Room:

-


Crew Quarters:

-


Medical Bay:

-


Kitchen:

-


Storage:

-


Workshop:

-


Control Area:

-


Observation Deck:

-


---

## Special Areas


พื้นที่พิเศษ:

-


---

# 5. SHIP EQUIPMENT


ข้อมูลอุปกรณ์ประจำเรือ


## Main Equipment

-


## Weapons

-


## Defensive Equipment

-


## Special Equipment

-


หมายเหตุ:

รายละเอียดการใช้งานระบบต่อสู้

ให้อ้างอิง COMBAT.md


---

# 6. SHIP CREW CONNECTION


ความสัมพันธ์ระหว่างเรือและผู้ใช้งาน


## Current Captain

-


## Current Crew

-


## Crew History

-


---

## Important Bonds


สมาชิกที่มีความสัมพันธ์พิเศษกับเรือ


-


---

# 7. SHIP MEMORY


เรือสามารถมีประวัติจากเหตุการณ์ที่ผ่านมา


## Journey Memory


สถานที่สำคัญที่เคยเดินทางผ่าน


-


---

## Battle Memory


เหตุการณ์การต่อสู้สำคัญ


-


---

## Crew Memory


เหตุการณ์สำคัญของลูกเรือ


-


---

# 8. DAMAGE RECORD


บันทึกความเสียหาย


## Major Damage


-


---

## Repairs


-


---

## Permanent Changes


การเปลี่ยนแปลงถาวรของเรือ


-

# 9. SHIP HISTORY


ประวัติของเรือ


## Origin Story


เหตุผลที่เรือถูกสร้างขึ้น


-


---

## Previous Owners


เจ้าของเดิม


-


---

## Major Events


เหตุการณ์สำคัญที่เกี่ยวข้องกับเรือ


-


---

## Famous Moments


เหตุการณ์ที่ทำให้เรือเป็นที่จดจำ


-


---

# 10. OWNERSHIP HISTORY


ลำดับผู้ครอบครองเรือ


## Current Owner

-


## Previous Owners

-


## Ownership Changes


เหตุผลที่เปลี่ยนเจ้าของ


-


---

# 11. CURRENT WORLD STATE


สถานะปัจจุบันของเรือ


## Current Location

-


## Current Destination

-


## Cargo

-


## Supplies

-


## Passengers

-


## Prisoners

-


## Current Damage

-


## Repair Required

-


---

# 12. NARRATIVE IMPORTANCE


ความสำคัญต่อโลกและเรื่องราว


## Importance Level


- Minor
- Major
- Legendary


---

## Role In World


บทบาทของเรือในโลก


-


---

## Can Be Destroyed


Yes / No


---

## Condition For Destruction


เงื่อนไขที่ทำให้เรือถูกทำลาย


-


---

## Impact If Lost


ผลกระทบเมื่อเรือสูญหาย


-


---

# 13. TAGS


- Ship
- Vessel
- Crew Related
- Historical


---

# 14. GM DATABASE RULES


## Update Rules


ข้อมูลเรือต้องเปลี่ยนแปลงเมื่อ:


- เกิดเหตุการณ์ในโลก
- เกิดความเสียหาย
- เปลี่ยนเจ้าของ
- มีการซ่อมแซม
- มีการดัดแปลง


---

## Restrictions


ห้าม:


- เปลี่ยนสถานะเรือเพื่อช่วยผู้เล่น
- ทำลายเรือเพื่อสร้างดราม่าโดยไม่มีเหตุผล
- เพิ่มความสามารถใหม่โดยไม่มีเหตุการณ์รองรับ


---

# 15. RELATED DOCUMENTS


- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- NAVIGATION.md
- COMBAT.md
- SAVE_FORMAT.md


---

# DOCUMENT STATUS


Document Name:

SHIP_DATABASE.md


Version:

2.0


Engine:

ASTER ENGINE v1.x


Status:

Production


Authority:

Ship Database


Last Reviewed:

TBD


---

# END OF DOCUMENT

# =====================================================
# FILE : 04_SHIPS\SHIP_STATS.md
# =====================================================

# SHIP_STATS.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Operational Ship Metrics)

---

# 📊 SHIP STAT SYSTEM

ระบบนี้ใช้กำหนด “ความสามารถเชิงปฏิบัติการ” ของเรือ  
ไม่ใช่ตัวเลขแข็ง แต่เป็น “ความสามารถเชิง narrative ที่วัดผลได้”

---

# ⚓ CORE STATS

## 1. Hull Integrity
ความแข็งแรงของโครงเรือ
- ส่งผลต่อการรับ damage
- ถ้าต่ำ → แตก / รั่ว / ใช้งานไม่ได้บางส่วน

---

## 2. Sail / Engine Efficiency
ความเร็วและพลังขับเคลื่อน
- ใช้ในการหนี / ไล่ล่า / เดินทาง

---

## 3. Maneuverability
ความคล่องตัวในการหลบการโจมตี
- เรือใหญ่ = ต่ำ
- เรือเล็ก = สูง

---

## 4. Cargo Capacity
ความสามารถในการบรรทุก
- คน / อาวุธ / ของ / ทรัพยากร

---

## 5. Combat Readiness
ความพร้อมในการรบ
- ไม่ใช่พลังยิง
- แต่คือ “ความพร้อมทั้งระบบ”

---

## 6. Crew Harmony Link
ความเชื่อมโยงกับ Crew
- สูง = เรือทำงานดีขึ้น
- ต่ำ = ระบบผิดพลาด / ช้า / ไม่เสถียร

---

## 7. Narrative Presence
“ชื่อเสียงของเรือในโลก”
- เรือที่ถูกเล่าขาน = มี Presence สูง
- ส่งผลต่อ NPC reaction

---

## 8. Supply Stability

ระดับความมั่นคงของเสบียง

- อาหาร
- น้ำ
- ยา
- วัสดุซ่อม

มีผลต่อการเดินทางระยะยาว

---

# 🔄 STAT DYNAMICS RULE

Stats ไม่คงที่

สามารถเปลี่ยนจาก:
- การเดินทาง
- การสู้รบ
- เหตุการณ์สำคัญ
- ความสัมพันธ์ Crew

---

# ⚠️ DAMAGE INTERPRETATION

การลด stat = ไม่ใช่ -1 แบบเกมทั่วไป

แต่คือ:
- ระบบเสีย
- ห้องพัง
- ความเชื่อมโยงลดลง
- story consequence

---

# END OF FILE

# =====================================================
# FILE : 04_SHIPS\SHIP_TRAVEL.md
# =====================================================

# SHIP_TRAVEL.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Sea Navigation & World Movement)

---

# 🌊 TRAVEL SYSTEM OVERVIEW

ระบบการเดินเรือในโลก ASTER ENGINE  
ไม่ใช่ fast travel แต่คือ “การใช้ชีวิตบนทะเล”

---

# 🧭 CORE PRINCIPLE

- Travel is story, not movement
- Every sea has personality
- Navigation creates events
- Time matters

---

# 🌊 SEA LAYER SYSTEM

โลกแบ่งเป็น:

## 1. Calm Sea
- ปลอดภัย
- เหมาะเริ่มต้น

## 2. Dangerous Sea
- มีโจรสลัด / สัตว์ทะเล

## 3. Storm Zones
- พายุ / สภาพอากาศผิดปกติ

## 4. Forbidden Sea
- เขตต้องห้าม
- มี World Government control

## 5. Myth Sea
- พื้นที่ตำนาน
- เหตุการณ์แปลกประหลาด

---

# 🧭 NAVIGATION SYSTEM

ต้องใช้:

- Navigator skill
- Ship condition
- Weather reading
- World map knowledge

---

# ⚠️ TRAVEL EVENTS

ระหว่างเดินทางอาจเกิด:

- Storm encounter
- Pirate ambush
- Lost route
- Island discovery
- Sea monster encounter
- Merchant convoy
- Marine inspection

# TRAVEL RULE

การเดินทางไม่รับประกันว่าจะเกิดเหตุการณ์เสมอ

บางครั้งหลายวันอาจผ่านไปอย่างสงบ

บางครั้งเหตุการณ์หลายอย่างอาจเกิดขึ้นภายในวันเดียว

---

# ⏳ TIME IMPACT SYSTEM

เวลาเดินทาง = มีผลจริง:

- Crew fatigue
- Resource consumption
- Event probability change

---

# 🧠 CREW + SHIP TRAVEL LINK

- Navigator → ลด random danger
- Ship Harmony → ลด breakdown
- Morale → ลด travel crisis

---

# 🌍 DISCOVERY SYSTEM

การเดินทางอาจ unlock:

- New islands
- Hidden routes
- Faction territory
- Legendary locations

---

# END OF FILE

