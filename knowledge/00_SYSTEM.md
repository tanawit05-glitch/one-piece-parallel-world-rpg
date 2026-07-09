# =====================================================
# FILE : 00_SYSTEM\AI_WORKFLOW.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# AI WORKFLOW

Document Version : 2.0

Status : Production

Document Type : AI Operation Standard

Authority :

SYSTEM.md

---

# 1. PURPOSE

AI_WORKFLOW.md

กำหนดขั้นตอนการทำงานของ AI

ภายใน PROJECT ASTER ENGINE

---

หน้าที่:

- กำหนดลำดับการตรวจข้อมูล
- กำหนดกระบวนการวิเคราะห์
- กำหนดขั้นตอนการสร้างผลลัพธ์
- ลดความผิดพลาดจากการเดา

---

AI_WORKFLOW.md

ไม่กำหนด:

- กฎของ Engine
- กฎการเล่น
- Canon
- World Data

ให้อ้างอิง:

SYSTEM.md

RULES.md

GAME_MASTER.md

---

# 2. CORE PRINCIPLE

AI ต้องทำงานตามลำดับ:

Repository

↓

Authority

↓

Context

↓

Logic

↓

Response

---

AI ต้องยึด:

Repository Before Memory

---

ข้อมูลใน Repository

มีความสำคัญกว่า

ความจำจาก Session ก่อนหน้า

---

# 3. SESSION START WORKFLOW

เมื่อเริ่ม Session

AI ต้องตรวจ:

## Step 1

อ่าน SYSTEM.md

เพื่อรับ:

- Authority
- Philosophy
- Rules Hierarchy

---

## Step 2

อ่าน SAVE

เพื่อรับ:

- Current World State
- Player State
- Active Events

---

## Step 3

ตรวจ Module ที่เกี่ยวข้อง

เช่น:

Combat

↓

COMBAT.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

---

## Step 4

ตรวจ Current Context

ได้แก่:

- Location
- Time
- Situation
- Characters Present

# 4. ACTION ANALYSIS WORKFLOW

เมื่อผู้เล่นทำ Action

AI ต้องวิเคราะห์ตามลำดับ:

---

## Step 1: Understand Action

ตรวจสอบ:

- ผู้เล่นต้องการทำอะไร
- เป้าหมายคืออะไร
- วิธีการคืออะไร

---

## Step 2: Check World Context

ตรวจสอบ:

- สถานที่
- เวลา
- บุคคลที่เกี่ยวข้อง
- สถานการณ์ปัจจุบัน

---

## Step 3: Check Rules

ตรวจสอบ:

- RULES.md
- Module Rules
- Restrictions

---

## Step 4: Apply Logic

วิเคราะห์:

- ความเป็นไปได้
- ผลกระทบ
- ความเสี่ยง
- Consequence

---

## Step 5: Resolve Result

ใช้:

- Logic
- Character Capability
- Environment
- Dice (เมื่อจำเป็น)

---

# 5. RESPONSE WORKFLOW

ก่อนตอบผู้เล่น

AI ต้องตรวจ:

---

## Accuracy

ข้อมูลถูกต้องหรือไม่

---

## Consistency

ขัดกับ Repository หรือไม่

---

## Fairness

ผลลัพธ์มีอคติหรือไม่

---

## Consequence

การกระทำสร้างผลอะไร

---

จากนั้นจึงสร้าง Response

---

# 6. INFORMATION CONTROL

AI ต้องแบ่งข้อมูลเป็น:

---

## Known Information

สิ่งที่ตัวละครรู้

---

## Hidden Information

สิ่งที่ตัวละครยังไม่รู้

---

## Secret Information

ข้อมูลสำหรับ GM

---

AI ห้ามเปิดเผยข้อมูล

ที่ตัวละครไม่มีสิทธิ์รู้

---

# 7. ERROR HANDLING

เมื่อพบข้อมูลไม่เพียงพอ

AI ต้อง:

1. ตรวจ Repository

↓

2. ตรวจ Save

↓

3. ตรวจ Session Context

↓

4. แจ้งว่าไม่มีข้อมูล

---

ห้าม:

- เดา
- เติมข้อมูลเอง
- สร้าง Canon ใหม่

---

# 8. UPDATE WORKFLOW

หลังเกิดเหตุการณ์สำคัญ

AI ต้องตรวจ:

- Player State
- NPC State
- Crew State
- Ship State
- World State
- Reputation
- Relationship

---

จากนั้น Update:

SAVE

และบันทึก:

LOG

ตามความเหมาะสม

---

# 9. DOCUMENT RELATIONSHIP

SYSTEM.md

↓

กำหนดมาตรฐานสูงสุด

↓

RULES.md

↓

กำหนดกฎ

↓

GAME_MASTER.md

↓

กำหนดบทบาท AI GM

↓

AI_WORKFLOW.md

↓

กำหนดขั้นตอนการทำงาน

---

# 10. DOCUMENT STATUS

Document Name

AI_WORKFLOW.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Document Type

AI Operation Standard

---

Authority

SYSTEM.md

---

# END OF DOCUMENT

AI_WORKFLOW.md

กำหนดวิธีการทำงานของ AI

เพื่อให้การจำลองโลก

มีความสม่ำเสมอ

และรักษา Canon ของ Engine

# =====================================================
# FILE : 00_SYSTEM\ASTER_ENGINE.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# PROJECT ASTER ENGINE
# ENGINE OVERVIEW

Document Version : 2.0

Status : Production

Document Type : Overview Document

Authority :

Reference Only

Primary Authority:

SYSTEM.md

---

# 1. PURPOSE

ASTER_ENGINE.md

เป็นเอกสารภาพรวมของ

PROJECT ASTER ENGINE

หน้าที่ของเอกสารนี้คือ

- อธิบายแนวคิดของ Engine
- อธิบายเป้าหมายของโปรเจกต์
- อธิบายภาพรวมระบบ
- ช่วยให้ผู้พัฒนาและ AI เข้าใจภาพรวมของ Repository

---

ASTER_ENGINE.md

ไม่มีหน้าที่กำหนด

- กฎของ Engine
- Authority Hierarchy
- Repository Rules
- Canon Rules
- AI Rules

ข้อมูลเหล่านี้

ให้อ้างอิง

SYSTEM.md

เป็น Source of Truth

---

# 2. PROJECT DEFINITION

PROJECT ASTER ENGINE

คือ

Narrative Simulation Engine

สำหรับ

ONE PIECE PARALLEL WORLD RPG

---

เป้าหมายของ Engine

ไม่ใช่การสร้างเกมที่มีเส้นทางตายตัว

แต่คือการสร้าง

"โลกที่สามารถดำเนินต่อไปได้"

---

Engine จำลอง:

- โลก
- ตัวละคร
- องค์กร
- เศรษฐกิจ
- การเมือง
- การเดินทาง
- ความสัมพันธ์
- ผลกระทบของการกระทำ

---

# 3. CORE CONCEPT

ASTER ENGINE

ถูกออกแบบให้ผู้เล่นรู้สึกว่า

กำลังใช้ชีวิตอยู่ในโลกของ

ONE PIECE Parallel World

---

ไม่ใช่:

- อ่านนิยาย
- ดูอนิเมะ
- เดินตามบทที่เขียนไว้

---

แต่เป็น:

- การตัดสินใจ
- การกระทำ
- ผลลัพธ์
- การเปลี่ยนแปลงของโลก

---

# 4. WORLD SIMULATION

โลกของ ASTER ENGINE

เป็นโลกที่มีชีวิต

---

โลกสามารถเปลี่ยนแปลงได้จาก:

- การกระทำของผู้เล่น
- การกระทำของ NPC
- การเคลื่อนไหวขององค์กร
- เหตุการณ์ระดับโลก

---

ผู้เล่นเป็นเพียงส่วนหนึ่งของโลก

ไม่ใช่ศูนย์กลางของโลก

---

โลกต้องสามารถดำเนินต่อไปได้

แม้ไม่มีผู้เล่นอยู่ในเหตุการณ์

---

# 5. DESIGN PHILOSOPHY

รายละเอียดหลักการทั้งหมด

อยู่ใน

SYSTEM.md

---

ASTER_ENGINE.md

แสดงเพียงภาพรวม:

## Story Driven Simulation

เรื่องราวเกิดจากโลกและการกระทำ

ไม่ใช่ Script ที่กำหนดไว้ล่วงหน้า

---

## Living World

NPC และองค์กร

มีเป้าหมายของตนเอง

---

## Player Freedom

ผู้เล่นมีอิสระในการเลือก

และรับผลลัพธ์จากการเลือกนั้น

---

## Consequence Based World

ทุกการกระทำ

สามารถสร้างผลกระทบ

ต่อโลกได้

# 6. ENGINE SYSTEM OVERVIEW

ASTER ENGINE

ประกอบด้วยระบบหลักหลายส่วน

---

## Narrative System

ระบบจำลองเรื่องราว

รับผิดชอบ:

- การดำเนินเหตุการณ์
- การตัดสินใจ
- ผลลัพธ์
- Consequence

---

## World Simulation System

ระบบจำลองโลก

รับผิดชอบ:

- เกาะ
- ประเทศ
- องค์กร
- เศรษฐกิจ
- การเมือง
- เหตุการณ์โลก

---

## Character System

ระบบตัวละคร

รับผิดชอบ:

- การเติบโต
- ความสามารถ
- สภาพร่างกาย
- ความสัมพันธ์

---

## Combat System

ระบบการต่อสู้

รายละเอียด:

COMBAT.md

---

## Dice System

ระบบความไม่แน่นอน

รายละเอียด:

DICE.md

---

## Medical System

ระบบการแพทย์

รายละเอียด:

MEDICAL.md

---

## Navigation System

ระบบการเดินเรือ

รายละเอียด:

NAVIGATION.md

---

## Reputation System

ระบบชื่อเสียง

รายละเอียด:

REPUTATION.md

---

## Relationship System

ระบบความสัมพันธ์

รายละเอียด:

RELATIONSHIP.md

---

## Devil Fruit System

ระบบผลปีศาจ

รายละเอียด:

DEVIL_FRUIT.md

---

## Haki System

ระบบฮาคิ

รายละเอียด:

HAKI.md

---

# 7. REPOSITORY OVERVIEW

Repository ของ ASTER ENGINE

แบ่งเป็นหมวดหลัก

---

## 00_SYSTEM

เอกสารหลักของ Engine

---

## 01_WORLD

ข้อมูลโลก

เช่น:

- Islands
- Countries
- Locations

---

## 02_PLAYER

ข้อมูลผู้เล่น

---

## 03_CREW

ข้อมูลลูกเรือ

---

## 04_SHIPS

ข้อมูลเรือ

---

## 05_FACTIONS

ข้อมูลองค์กร

---

## 06_NPCS

ฐานข้อมูล NPC

---

## 07_ITEMS

ฐานข้อมูลไอเทม

---

## 08_DEVIL_FRUITS

ฐานข้อมูลผลปีศาจ

---

## 09_LOGS

ประวัติ Campaign

---

## 10_SAVE

สถานะปัจจุบันของโลก

---

## 11_SECRETS

ข้อมูลลับ Game Master

---

## 12_CODEX

สารานุกรมโลก

---

## 13_ARCHIVIST

ระบบจัดการ Canon และ Save

---

# 8. DEVELOPMENT DIRECTION

ASTER ENGINE

ถูกออกแบบให้สามารถขยายได้ในอนาคต

รองรับ:

- Module ใหม่
- Mechanics ใหม่
- Island ใหม่
- NPC ใหม่
- Organization ใหม่

---

การเพิ่มระบบใหม่

ต้องตรวจสอบกับ:

- SYSTEM.md
- Repository Structure
- Existing Modules

ก่อนเสมอ

---

# 9. AI USAGE

AI ที่ทำงานกับ ASTER ENGINE

ควรใช้เอกสารตามหน้าที่

---

SYSTEM.md

↓

กฎและมาตรฐานสูงสุด

---

RULES.md

↓

กฎการเล่น

---

GAME_MASTER.md

↓

แนวทางการทำงานของ AI Game Master

---

MODULES

↓

รายละเอียดระบบเฉพาะ

---

DATABASE / SAVE

↓

ข้อมูลโลกปัจจุบัน

---

ASTER_ENGINE.md

↓

ภาพรวมเพื่อความเข้าใจ

# 10. DOCUMENT RELATIONSHIP

ASTER_ENGINE.md

ทำหน้าที่เป็นเอกสารภาพรวม

ไม่ใช่เอกสารกฎ

---

ความสัมพันธ์ของเอกสาร:

SYSTEM.md

↓

กำหนดมาตรฐาน Engine

↓

RULES.md

↓

กำหนดกฎการเล่น

↓

GAME_MASTER.md

↓

กำหนดการทำงานของ AI

↓

SYSTEM MODULES

↓

กำหนดรายละเอียดระบบ

↓

DATABASE / SAVE

↓

เก็บข้อมูลโลก

---

# 11. PROJECT GOAL

เป้าหมายของ ASTER ENGINE

คือการสร้าง

ONE PIECE PARALLEL WORLD

ที่มีความต่อเนื่อง

และสามารถดำเนินไปได้ระยะยาว

---

Engine ต้องรองรับ:

- Campaign ระยะยาว
- World Evolution
- NPC Growth
- Organization Movement
- Player Consequence
- Canon Consistency

---

# 12. PRODUCTION PRINCIPLES

การพัฒนา ASTER ENGINE

ต้องยึดแนวทาง:

---

## Refactor Before Create

ปรับปรุงของเดิมก่อนสร้างใหม่

---

## Single Source of Truth

ข้อมูลแต่ละประเภท

ต้องมีแหล่งอ้างอิงหลักเดียว

---

## Responsibility Separation

แต่ละไฟล์

ต้องมีหน้าที่ชัดเจน

---

## Repository First

Repository

สำคัญกว่าความจำ

---

# 13. DOCUMENT STATUS

Document Name

ASTER_ENGINE.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Document Type

Overview Document

---

Primary Reference

SYSTEM.md

---

# END OF DOCUMENT

ASTER_ENGINE.md

เป็นเอกสารแนะนำภาพรวมของ

PROJECT ASTER ENGINE

กฎทั้งหมด

และมาตรฐานของ Engine

ให้อ้างอิง

SYSTEM.md

เป็นหลัก

# =====================================================
# FILE : 00_SYSTEM\COMBAT.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# COMBAT MODULE

Document Version : 3.0

Status : Production

Authority : Combat Module

---

# 1. PURPOSE

COMBAT.md

กำหนดมาตรฐาน

ของระบบการต่อสู้

ภายใน PROJECT ASTER ENGINE

หน้าที่ของไฟล์นี้คือ

- กำหนด Combat Flow
- กำหนด Combat Decision Process
- กำหนด Combat Resolution
- กำหนด Combat Consequence
- กำหนด Interaction ระหว่าง Combat กับ Module อื่น

COMBAT.md

ไม่ได้ทำหน้าที่:

- เก็บข้อมูลตัวละคร
- เก็บข้อมูลโลก
- กำหนดกฎ Haki
- กำหนดกฎ Devil Fruit
- กำหนดระบบ Dice
- กำหนดระบบ Medical

ข้อมูลเหล่านี้

ให้อ้างอิง Module เจ้าของระบบโดยตรง

---

# 2. RESPONSIBILITY

COMBAT MODULE รับผิดชอบ:

## Combat Rules

กฎพื้นฐานของการต่อสู้

## Combat Flow

ลำดับการประเมินสถานการณ์

## Combat Resolution

การตัดสินผลของ Action

## Combat Consequence

ผลกระทบหลังการต่อสู้

---

# 3. DEPENDENCIES

COMBAT.md

อ้างอิง:

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

DICE.md

↓

MEDICAL.md

↓

HAKI.md

↓

DEVIL_FRUIT.md

---

# 4. NON-RESPONSIBILITY

COMBAT.md

ไม่สามารถ Override:

SYSTEM.md

RULES.md

หรือ Module เฉพาะทาง

ตัวอย่าง:

การรักษา

↓

MEDICAL.md

กฎ Haki

↓

HAKI.md

กฎผลปีศาจ

↓

DEVIL_FRUIT.md

ระบบ Dice

↓

DICE.md

---

# 5. COMBAT PHILOSOPHY

Combat ของ ASTER ENGINE

ไม่ใช่ระบบ Turn-Based

แต่เป็น

Narrative Combat Simulation

---

## Logic Before Dice

Game Master

ต้องใช้เหตุผล

ก่อนใช้ Dice

หากผลลัพธ์ชัดเจน

จากสถานการณ์

ไม่จำเป็นต้องทอย

---

## Intent Before Action

การกระทำทุกอย่าง

ต้องพิจารณา

เจตนาของผู้กระทำ

ตัวอย่าง:

- ฆ่า
- จับ
- ป้องกัน
- หนี
- ซื้อเวลา
- ช่วยเหลือ

---

## Consequence Before Victory

เป้าหมายของ Combat

ไม่ใช่เพียงชัยชนะ

แต่คือผลกระทบ

ที่เกิดขึ้นกับโลก

---

## Environment Matters

สนามรบ

เป็นส่วนหนึ่งของ Combat

เสมอ

---

## Fairness For All

ทุกฝ่าย

อยู่ภายใต้กฎเดียวกัน

ไม่มี Plot Armor

ไม่มีการช่วยผู้เล่น

ไม่มีการลงโทษผู้เล่น

โดยไม่มีเหตุผล

---

# 6. COMBAT FLOW

การต่อสู้ใน ASTER ENGINE

ดำเนินตามสถานการณ์จริง

ไม่ใช้ระบบ Turn แบบตายตัว

Flow หลัก:

Situation

↓

Intent

↓

Decision

↓

Resolution

↓

Consequence

↓

Updated Situation


---

# 7. SITUATION ASSESSMENT

ก่อนเริ่ม Combat

Game Master

ต้องประเมินสถานการณ์ก่อนเสมอ

ได้แก่:

- ใครเกี่ยวข้อง
- เป้าหมายของแต่ละฝ่าย
- ตำแหน่งของทุกฝ่าย
- สภาพแวดล้อม
- ความสามารถที่มี
- ข้อมูลที่แต่ละฝ่ายรู้
- ความเสี่ยงของสถานการณ์


Combat

อาจเกิดขึ้น

หรืออาจหลีกเลี่ยงได้

ขึ้นอยู่กับเหตุผลของโลก

ไม่ใช่เพราะระบบบังคับให้ต่อสู้


---

# 8. COMBAT STATE

ระหว่างการต่อสู้

Game Master

ต้องติดตามสถานะของสนามรบ


## Battlefield State

ประกอบด้วย:

- สถานที่
- พื้นที่
- สภาพอากาศ
- สิ่งกีดขวาง
- ความเสียหายของพื้นที่
- เส้นทางหลบหนี


---

## Participant State

แต่ละฝ่ายต้องมีข้อมูล:

- ตำแหน่งโดยประมาณ
- สภาพร่างกาย
- อาการบาดเจ็บ
- ความเหนื่อยล้า
- ความสามารถที่กำลังใช้งาน
- เป้าหมายปัจจุบัน


---

## Objective State

ติดตาม:

- เป้าหมายของ Combat
- ความคืบหน้า
- เงื่อนไขสำเร็จ
- เงื่อนไขล้มเหลว


Combat

ไม่จำเป็นต้องจบด้วย

"ฝ่ายหนึ่งถูกกำจัด"


---

# 9. COMBAT OBJECTIVE

ทุก Combat

ควรมีเป้าหมาย

ที่ชัดเจน


ตัวอย่าง:


## Defeat

เอาชนะฝ่ายตรงข้าม


---

## Capture

จับตัวเป้าหมาย


---

## Escape

หลบหนีจากสถานการณ์


---

## Protect

ป้องกันบุคคล

สิ่งของ

หรือสถานที่


---

## Delay

ซื้อเวลา

เพื่อให้เกิดเหตุการณ์อื่น


---

## Survive

เอาชีวิตรอด

จนกว่าสถานการณ์เปลี่ยน


---

Game Master

ต้องประเมินชัยชนะ

จาก Objective

ไม่ใช่จำนวนศัตรูที่ถูกล้ม


---

# 10. COMBAT INTENT

ก่อนทุก Action

ต้องพิจารณา

Intent ของผู้กระทำ


ตัวอย่าง:


## Offensive Intent

ต้องการสร้างความเสียหาย


---

## Defensive Intent

ต้องการลดความเสียหาย

หรือป้องกันบางสิ่ง


---

## Control Intent

ต้องการควบคุมพื้นที่

หรือจำกัดการเคลื่อนไหว


---

## Support Intent

ต้องการช่วยเหลือพันธมิตร


---

## Escape Intent

ต้องการออกจากสถานการณ์


---

Intent

ส่งผลต่อ

การประเมินผลลัพธ์

เสมอ


---

# 11. DECISION PROCESS

เมื่อมี Action

Game Master

ประเมินตามลำดับ:


1. Intent

↓

2. Situation

↓

3. Ability

↓

4. Position

↓

5. Environment

↓

6. Risk

↓

7. Resolution


ห้ามตัดสินจาก

ความต้องการให้เรื่องดำเนินไปตามบท

---

---

# 12. ACTION SYSTEM

การกระทำในการต่อสู้

ไม่มีข้อจำกัดเฉพาะรูปแบบ

ผู้เล่นและ NPC

สามารถเสนอ Action ใดก็ได้

หาก Action นั้น

สมเหตุสมผลกับสถานการณ์


ประเภท Action พื้นฐาน:


- Attack
- Defend
- Dodge
- Counter
- Move
- Support
- Use Item
- Use Ability
- Escape
- Interact


ประเภท Action

เป็นเพียงแนวทาง

ไม่ใช่ข้อจำกัด


---

# 13. ATTACK

การโจมตี

ต้องพิจารณา:

- เป้าหมาย
- วิธีการโจมตี
- ระยะ
- ตำแหน่ง
- เจตนา
- ความสามารถที่ใช้


Game Master

ต้องประเมิน:


## Attacker

- ความสามารถ
- ประสบการณ์
- สภาพร่างกาย
- อุปกรณ์


## Target

- การรับรู้
- ตำแหน่ง
- การป้องกัน
- สภาพร่างกาย


## Situation

- สภาพแวดล้อม
- ระยะ
- ข้อมูลที่แต่ละฝ่ายมี


การโจมตี

ไม่รับประกันผลสำเร็จ

แม้ผู้โจมตีมีความสามารถสูงกว่า

หากสถานการณ์ไม่เอื้อ


---

# 14. DEFENSE

การป้องกัน

ไม่ได้หมายถึง

การหยุดความเสียหายทั้งหมด


รูปแบบการป้องกัน:


## Avoid

หลบการโจมตี


---

## Block

รับการโจมตี

ด้วยร่างกาย

อุปกรณ์

หรือความสามารถ


---

## Redirect

เปลี่ยนทิศทางการโจมตี


---

## Counter

ใช้จังหวะของฝ่ายตรงข้าม

สร้างโอกาสกลับโจมตี


---

## Escape

ออกจากพื้นที่อันตราย


---

ทุกการป้องกัน

มีข้อแลกเปลี่ยน


ตัวอย่าง:

การรับการโจมตี

อาจลดความเสียหาย

แต่สร้าง Fatigue


---

# 15. DODGE

การหลบ

ขึ้นอยู่กับ:


- ความเร็ว
- การรับรู้
- พื้นที่
- ระยะ
- ความคาดเดาได้ของการโจมตี


การหลบ

ไม่ใช่ความสามารถไร้ขีดจำกัด


สถานการณ์ที่จำกัดการหลบ:


- พื้นที่แคบ
- ถูกล้อม
- มองไม่เห็น
- บาดเจ็บ
- เหนื่อยล้า


---

# 16. COUNTER

Counter

คือการตอบสนองต่อ Action ของฝ่ายตรงข้าม


ความสำเร็จขึ้นอยู่กับ:


- Timing
- Information
- Position
- Ability
- Experience


Counter

ไม่ใช่การโจมตีฟรี


หากอ่านสถานการณ์ผิด

สามารถเกิดผลเสียได้


---

# 17. MOVEMENT

การเคลื่อนที่

เป็นส่วนหนึ่งของ Combat


ตำแหน่งมีผลต่อ:


- ระยะโจมตี
- การมองเห็น
- การป้องกัน
- การช่วยเหลือ
- การหลบหนี
- การใช้สิ่งแวดล้อม


Game Master

ต้องติดตามตำแหน่ง

ของทุกฝ่าย

อย่างเหมาะสม


ไม่จำเป็นต้องใช้ Grid

แต่ต้องรักษาความสมเหตุสมผล


---

# 18. SUPPORT ACTION

Support

เป็น Action สำคัญ

ไม่ใช่ Action รอง


ตัวอย่าง:


- ปฐมพยาบาล
- ส่งอุปกรณ์
- ช่วยเคลื่อนย้าย
- สร้างช่องทางหนี
- แจ้งข้อมูล
- ป้องกันพันธมิตร


Support

สามารถเปลี่ยนผลลัพธ์ของ Combat

ได้เช่นเดียวกับ Attack


---

# 19. USE ITEM AND INTERACTION

สิ่งของ

สามารถใช้ใน Combat ได้


ตัวอย่าง:


- อาวุธ
- เชือก
- ประตู
- โต๊ะ
- เสากระโดง
- ถังน้ำ
- สิ่งก่อสร้าง


การใช้สิ่งของ

ต้องพิจารณา:


- ความเป็นไปได้
- สภาพของสิ่งของ
- ตำแหน่ง
- ผลกระทบ


---

# 20. ESCAPE

การหลบหนี

เป็นการตัดสินใจเชิงกลยุทธ์


ความสำเร็จขึ้นอยู่กับ:


- ระยะห่าง
- ความเร็ว
- สภาพพื้นที่
- การติดตามของฝ่ายตรงข้าม
- ข้อมูลที่แต่ละฝ่ายมี


การหนี

ไม่ใช่ความพ่ายแพ้


และการไล่ล่า

ถือเป็น Combat Situation รูปแบบหนึ่ง


---

---

# 21. DAMAGE SYSTEM

ความเสียหาย

ไม่ได้ตัดสินจากตัวเลขเพียงอย่างเดียว


Game Master

ต้องประเมินจาก:


- ความรุนแรงของการโจมตี
- จุดที่ถูกโจมตี
- วิธีการป้องกัน
- อาวุธ
- ความสามารถ
- สภาพร่างกาย
- สภาพแวดล้อม


ผลลัพธ์ของ Damage

อาจเป็น:


## No Effect

ไม่มีผลกระทบอย่างมีนัยสำคัญ


---

## Minor Damage

บาดเจ็บเล็กน้อย

ยังสามารถต่อสู้ต่อได้


---

## Moderate Damage

บาดเจ็บระดับกลาง

ส่งผลต่อประสิทธิภาพ


---

## Severe Damage

บาดเจ็บรุนแรง

จำกัดความสามารถในการต่อสู้


---

## Incapacitated

หมดสภาพการต่อสู้


---

## Death

เสียชีวิต


การเสียชีวิต

ต้องเกิดจากเหตุผลของสถานการณ์

ไม่ใช่เพียงผลของ Dice


---

# 22. INJURY INTERACTION

การบาดเจ็บ

เป็น Consequence ของ Combat


อาการบาดเจ็บ

สามารถส่งผลต่อ:


- ความเร็ว
- ความแข็งแรง
- การเคลื่อนไหว
- สมาธิ
- การใช้ความสามารถ


COMBAT.md

กำหนดเพียง:


"บาดเจ็บส่งผลต่อการต่อสู้"


รายละเอียด:


- ระดับบาดเจ็บ
- การรักษา
- การฟื้นฟู
- ระยะเวลาพัก


ให้อ้างอิง:


MEDICAL.md


---

# 23. FATIGUE

ความเหนื่อยล้า

เป็น State ที่สะสมได้


สาเหตุ:


- ต่อสู้ต่อเนื่อง
- ใช้พลังมากเกินไป
- ใช้ Haki
- ใช้ Devil Fruit
- เสียเลือด
- พักผ่อนไม่เพียงพอ


Fatigue

ส่งผลต่อ:


- การตัดสินใจ
- ความแม่นยำ
- ความเร็ว
- ความอดทน


Fatigue

ไม่ใช่เพียงค่าพลังงาน

แต่เป็นผลกระทบทางร่างกาย


---

# 24. ENVIRONMENT SYSTEM

สภาพแวดล้อม

เป็นปัจจัยหลักของ Combat


Game Master

ต้องพิจารณา:


- พื้นที่
- อากาศ
- แสง
- เสียง
- สิ่งกีดขวาง
- อุณหภูมิ
- สภาพพื้นผิว


ตัวอย่าง:


ฝนตก

↓

การมองเห็นลดลง


ไฟไหม้

↓

พื้นที่อันตรายเพิ่มขึ้น


หมอก

↓

ข้อมูลของทุกฝ่ายลดลง


---

# 25. TERRAIN ADVANTAGE

พื้นที่

สามารถสร้างความได้เปรียบ

หรือเสียเปรียบ


ตัวอย่าง:


## High Ground

พื้นที่สูง

เพิ่มการมองเห็น


---

## Narrow Space

พื้นที่แคบ

จำกัดการเคลื่อนไหว


---

## Open Area

พื้นที่เปิด

เพิ่มระยะการต่อสู้


---

## Ship Combat

การต่อสู้บนเรือ

ต้องพิจารณา:


- คลื่น
- ลม
- โครงสร้างเรือ
- พื้นที่เคลื่อนไหว
- ความเสียหายของเรือ


---

# 26. ENVIRONMENTAL DAMAGE

Combat

สามารถสร้างผลกระทบต่อโลก


ตัวอย่าง:


- อาคารเสียหาย
- ไฟไหม้
- ถนนพัง
- เรือเสียหาย
- พื้นที่เปลี่ยนแปลง


ผลกระทบเหล่านี้

ถือเป็น Canon


หากมีผลระยะยาว

ต้องส่งต่อข้อมูลไป:


SAVE

และ

WORLD DATABASE


---

# 27. AREA EFFECT

การโจมตีพื้นที่

ส่งผลต่อทุกสิ่ง

ภายในขอบเขต


อาจส่งผลต่อ:


- ศัตรู
- พันธมิตร
- สิ่งของ
- สิ่งก่อสร้าง
- สภาพแวดล้อม


Game Master

ต้องประเมินผลทั้งหมด


ไม่ใช่เฉพาะเป้าหมายหลัก


---

# 28. FRIENDLY FIRE

การโจมตี

สามารถส่งผลต่อฝ่ายเดียวกันได้


ไม่มีระบบป้องกันอัตโนมัติ


ทุกฝ่าย

ต้องรับผิดชอบต่อ Action ของตนเอง


---

---

# 29. ABILITY INTERACTION

ความสามารถพิเศษทุกประเภท

สามารถส่งผลต่อ Combat

แต่ต้องอยู่ภายใต้กฎของ Module เจ้าของระบบ


COMBAT.md

กำหนดเพียง:

- เมื่อใดสามารถใช้
- ผลกระทบต่อสถานการณ์
- การประเมินความสมเหตุสมผล


COMBAT.md

ไม่กำหนด:

- รายละเอียดพลัง
- ระดับความสามารถ
- การเติบโต
- ข้อจำกัดเฉพาะ


---

# 30. DEVIL FRUIT IN COMBAT

ผลปีศาจ

เป็นหนึ่งในปัจจัยของ Combat


การใช้ผลปีศาจ

ต้องพิจารณา:


- คุณสมบัติของผล
- ความชำนาญของผู้ใช้
- สภาพแวดล้อม
- ข้อจำกัดของพลัง
- ผลกระทบต่อผู้ใช้


ผลปีศาจ

ไม่ได้หมายความว่า

ผู้ใช้จะชนะโดยอัตโนมัติ


ผู้ใช้ที่มีพลังสูงกว่า

ยังสามารถแพ้ได้

หาก:

- ข้อมูลไม่เพียงพอ
- ใช้พลังผิดสถานการณ์
- ประเมินคู่ต่อสู้ผิด


รายละเอียดของผลปีศาจ

อ้างอิง:


DEVIL_FRUIT.md


---

# 31. HAKI IN COMBAT

ฮาคิ

สามารถเปลี่ยนผลลัพธ์ของ Combat


การประเมินต้องพิจารณา:


- ประเภทของ Haki
- ระดับความชำนาญ
- ประสบการณ์
- สถานการณ์
- ความเหนื่อยล้า


การมี Haki

ไม่ได้หมายความว่า

สามารถใช้ได้อย่างสมบูรณ์


รายละเอียด:


HAKI.md


---

# 32. WEAPON INTERACTION

อาวุธ

เป็นเครื่องมือในการต่อสู้


Game Master

ต้องพิจารณา:


- ประเภทอาวุธ
- ระยะ
- ความเหมาะสม
- ความสามารถของผู้ใช้
- สภาพอาวุธ


อาวุธ

ไม่ใช่ตัวกำหนดชัยชนะ


ผู้ใช้

คือปัจจัยสำคัญ


---

# 33. SPECIAL ABILITIES

ความสามารถพิเศษอื่น ๆ


เช่น:


- Martial Arts
- Fighting Style
- Genetic Ability
- Technology
- Equipment


ต้องอ้างอิง:

Module ของระบบนั้น


COMBAT.md

ทำหน้าที่:

ประเมินผลกระทบต่อสถานการณ์


ไม่สร้างกฎเฉพาะของความสามารถนั้น


---

# 34. RESOURCE MANAGEMENT

Combat

ต้องคำนึงถึงทรัพยากร


ตัวอย่าง:


- Stamina
- Haki Usage
- Devil Fruit Usage
- Equipment
- Time
- Information


การใช้ความสามารถ

ต้องมีผลต่อสถานะ


ไม่มีความสามารถใด

ใช้งานได้โดยไม่มีข้อจำกัด


---

# 35. POWER DIFFERENCE

ความแตกต่างของพลัง

ต้องถูกนำมาพิจารณา


ตัวละครที่แข็งแกร่งกว่า

มีโอกาสได้เปรียบ


แต่ไม่รับประกันชัยชนะ


ปัจจัยอื่น:


- แผนการ
- ข้อมูล
- สภาพแวดล้อม
- จำนวนคน
- เป้าหมายของ Combat


สามารถเปลี่ยนผลลัพธ์ได้


---


---

# 36. NPC COMBAT LOGIC

NPC

ไม่ได้ต่อสู้เพื่อให้ผู้เล่นชนะ

NPC ทุกตัว

ต้องมี:

- เป้าหมาย
- ความกลัว
- ระดับความเสี่ยงที่ยอมรับได้
- ประสบการณ์
- ข้อมูลที่รับรู้


Game Master

ต้องพิจารณาการตัดสินใจของ NPC


NPC สามารถ:

- โจมตี
- ป้องกัน
- ถอย
- ขอความช่วยเหลือ
- ต่อรอง
- ยอมแพ้


ตามเหตุผลของตัวละครนั้น


---

# 37. NPC RISK ASSESSMENT

NPC

ต้องประเมินสถานการณ์


ปัจจัย:


- จำนวนฝ่ายตรงข้าม
- ความแข็งแกร่งของศัตรู
- อาการบาดเจ็บ
- เป้าหมายภารกิจ
- โอกาสสำเร็จ
- ความสำคัญของชีวิต


NPC ที่ฉลาด

ไม่จำเป็นต้องสู้จนตาย


---

# 38. MORALE SYSTEM

กำลังใจ

ส่งผลต่อ Combat


ปัจจัย:


- ความกลัว
- ความมั่นใจ
- การเสียพวกพ้อง
- ความเหนื่อยล้า
- ความได้เปรียบ
- ความเสียเปรียบ


Morale ต่ำ

อาจนำไปสู่:


- การหนี
- การยอมแพ้
- การร้องขอเจรจา


Morale สูง

อาจนำไปสู่:


- การต่อสู้ต่อ
- การเสี่ยงมากขึ้น


---

# 39. TEAM COMBAT

Combat

สามารถมีหลายฝ่าย


ตัวอย่าง:


- Crew vs Crew
- Pirates vs Marines
- Multiple Factions Battle


Game Master

ต้องติดตาม:


- ตำแหน่งแต่ละฝ่าย
- เป้าหมายแต่ละฝ่าย
- ความสัมพันธ์ระหว่างฝ่าย
- การเปลี่ยนแปลงของสถานการณ์


แต่ละฝ่าย

ไม่ได้รอผู้เล่นเสมอ


---

# 40. CAPTURE

การจับตัว

เป็นผลลัพธ์ของ Combat


สามารถเกิดขึ้นเมื่อ:


- เป้าหมายหมดสภาพ
- ถูกควบคุมพื้นที่
- ถูกจำกัดการเคลื่อนไหว
- ยอมจำนน


การจับตัว

ไม่ใช่การควบคุมถาวร


ผู้ถูกจับ

ยังสามารถ:


- หลบหนี
- ต่อรอง
- รอความช่วยเหลือ


---

# 41. SURRENDER

ทุกฝ่าย

สามารถยอมแพ้ได้


การยอมแพ้

ขึ้นอยู่กับ:


- สถานการณ์
- บุคลิก
- เป้าหมาย
- ความกลัว
- ความสัมพันธ์


การยอมแพ้

ไม่ได้รับประกันความปลอดภัย


ผลลัพธ์

ขึ้นอยู่กับการตัดสินใจของอีกฝ่าย


---

# 42. NON-LETHAL COMBAT

Combat

ไม่จำเป็นต้องจบด้วยการสังหาร


ตัวอย่าง:


- จับกุม
- ทำให้หมดสติ
- ควบคุมพื้นที่
- ป้องกัน
- ซื้อเวลา


Intent

เป็นตัวกำหนดผลลัพธ์


---

---

# 43. POST COMBAT

หลัง Combat จบ

Game Master

ต้องประเมินผลกระทบ


ได้แก่:


- ผู้บาดเจ็บ
- ผู้เสียชีวิต
- ความเสียหาย
- ทรัพย์สิน
- ชื่อเสียง
- ความสัมพันธ์
- World State


ทุก Combat

ต้องสร้าง Consequence


---

# 44. SAVE AND LOG INTERACTION

Combat Result

ที่มีผลต่อโลก

ต้องถูกส่งต่อไปยัง:


SAVE

และ

LOG


ตัวอย่าง:


บาดเจ็บ

↓

CURRENT_PLAYER


NPC เสียชีวิต

↓

CURRENT_NPCS


ชื่อเสียงเปลี่ยน

↓

REPUTATION


พื้นที่เสียหาย

↓

WORLD STATE


---

# 45. COMBAT CHECKLIST

ก่อนตัดสินผล

Game Master

ตรวจสอบ:


✓ Intent

✓ Objective

✓ Position

✓ Environment

✓ Ability

✓ Injury

✓ Fatigue

✓ Information

✓ Consequence


หากข้อมูลไม่เพียงพอ

ต้องประเมินสถานการณ์ก่อนใช้ Dice


---

# 46. QUALITY STANDARD

Combat ที่ดีต้อง:


- ทุกฝ่ายมีโอกาสตัดสินใจ
- ผลลัพธ์มีเหตุผล
- ไม่มี Plot Armor
- ไม่มี Forced Victory
- Environment มีผล
- Consequence ถูกติดตาม
- Canon ถูกรักษา


---

# 47. RELATED DOCUMENTS


SYSTEM.md

Engine Authority


RULES.md

Core Rules


GAME_MASTER.md

GM Operation


DICE.md

Dice Resolution


MEDICAL.md

Medical System


HAKI.md

Haki System


DEVIL_FRUIT.md

Devil Fruit System


STATUS_EFFECTS.md

Status System


---

# 48. FINAL PRINCIPLES


Combat ของ ASTER ENGINE


ต้องยึด:


Logic Before Dice

↓

Intent Before Action

↓

Consequence Before Victory

↓

Simulation Before Script


ทุกการต่อสู้

ต้องทำให้โลกเปลี่ยนแปลง


ไม่ใช่เพียงสร้างฉากต่อสู้


---

# END OF COMBAT.md

# =====================================================
# FILE : 00_SYSTEM\DESIGN.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# PROJECT ASTER ENGINE

# DESIGN DOCUMENT


Document : DESIGN.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : Core Design Document


---

# 1. PURPOSE


DESIGN.md

กำหนดหลักการออกแบบ

และแนวคิดของ

PROJECT ASTER ENGINE


เอกสารนี้กำหนด:


- รูปแบบของ Engine
- แนวทางการออกแบบระบบ
- ประสบการณ์ที่ต้องการสร้าง
- หลักการเชื่อมต่อระหว่างระบบ
- เป้าหมายระยะยาวของ Repository


DESIGN.md

ไม่ได้กำหนด:


- กฎการเล่นโดยละเอียด

อ้างอิง:

RULES.md


- พฤติกรรมของ AI Game Master

อ้างอิง:

GAME_MASTER.md


- กฎของระบบเฉพาะ

อ้างอิง:

System Module ที่เกี่ยวข้อง


หน้าที่ของ DESIGN.md

คือกำหนดว่า

ASTER ENGINE

ควรถูกออกแบบ

และพัฒนาไปในทิศทางใด


---

# 2. DESIGN PHILOSOPHY


ASTER ENGINE

ถูกออกแบบเป็น

Narrative Simulation Engine


ไม่ใช่เพียง

ระบบเกมที่มีเป้าหมายให้ผู้เล่นชนะ


เป้าหมายหลักคือ:


"สร้างโลกที่สามารถดำเนินต่อไปได้"


ทุกระบบ

ต้องสนับสนุน:


- โลกที่มีชีวิต
- NPC ที่มีเหตุผล
- เหตุการณ์ที่เกิดจากสาเหตุ
- ผลลัพธ์ที่มี Consequence
- การเติบโตของตัวละคร


ระบบ

เป็นเครื่องมือสนับสนุนโลก


ไม่ใช่สิ่งที่ควบคุมโลก


---

# 3. CORE DESIGN PRINCIPLES


## Story Before System


เรื่องราวและความสมเหตุสมผล

มาก่อนระบบ


ระบบถูกสร้างขึ้น

เพื่อช่วยจำลองโลก


ไม่ใช่บังคับให้โลก

ทำงานตามตัวเลข


---

## World Before Player


โลกเป็นศูนย์กลาง


ผู้เล่นเป็นเพียงส่วนหนึ่งของโลก


NPC

องค์กร

ประเทศ

และเหตุการณ์


ต้องสามารถดำเนินต่อไปได้

แม้ผู้เล่นไม่อยู่


---

## Canon Before Creativity


ทุกการออกแบบใหม่

ต้องเคารพ Canon เดิม


ความคิดสร้างสรรค์

ไม่สามารถทำลายความต่อเนื่อง


---

## Consistency Before Drama


ความต่อเนื่องของโลก

สำคัญกว่าความตื่นเต้นชั่วคราว


ทุกผลลัพธ์

ต้องมีเหตุผลรองรับ


---

## Simulation Before Script


Engine

ไม่ได้สร้างเรื่องราวที่กำหนดไว้ล่วงหน้า


แต่จำลองโลก

จาก:


- การตัดสินใจ
- เหตุการณ์
- NPC Action
- World State

# 4. ENGINE DESIGN MODEL


PROJECT ASTER ENGINE

ถูกออกแบบเป็น

Hybrid Narrative RPG Engine


ผสมแนวคิดระหว่าง:


- Tabletop RPG
- Narrative Simulation
- World Simulation
- Character Driven Story


เป้าหมายคือ

ให้ผู้เล่นสามารถมีอิสระในการตัดสินใจ

ขณะเดียวกันโลกยังคงมีโครงสร้าง

และกฎที่ชัดเจน



---

# 4.1 NARRATIVE SIMULATION


Engine

ให้ความสำคัญกับ:


- เหตุผลของโลก
- การตัดสินใจของตัวละคร
- ผลกระทบของการกระทำ
- ความต่อเนื่องของเหตุการณ์


ทุกเหตุการณ์

ต้องเกิดจาก:


Cause

↓

Action

↓

Result

↓

Consequence



ไม่มีเหตุการณ์ใด

เกิดขึ้นเพียงเพื่อผลักเนื้อเรื่อง



---

# 4.2 PLAYER AGENCY


ผู้เล่น

เป็นเจ้าของ:


- ความคิด
- คำพูด
- การตัดสินใจ
- เป้าหมายของตัวละคร


AI

มีหน้าที่:


- จำลองโลก
- ควบคุม NPC
- แสดงผลลัพธ์


AI ไม่มีสิทธิ์:


- ตัดสินใจแทนผู้เล่น
- เปลี่ยนเจตนาของผู้เล่น
- บังคับเส้นทางเรื่องราว



---

# 4.3 CONSEQUENCE DRIVEN DESIGN


ทุกการกระทำ

ต้องสร้างผลลัพธ์


ผลลัพธ์สามารถเกิดขึ้นได้:


## Immediate

ผลทันที


## Short Term

ผลกระทบระยะสั้น


## Mid Term

ผลกระทบต่อเนื่อง


## Long Term

ผลกระทบต่อโลกและประวัติศาสตร์



Consequences

สามารถส่งผลต่อ:


- Player
- Crew
- NPC
- Ship
- Island
- Organization
- Economy
- World State



---

# 4.4 FAIR SIMULATION


ทุกฝ่าย

อยู่ภายใต้กฎเดียวกัน:


- Player
- NPC
- Pirates
- Marines
- Organizations
- Kingdoms


Engine

ไม่มีฝ่ายที่ได้รับสิทธิพิเศษ



ชัยชนะ

ต้องเกิดจาก:


- การเตรียมตัว
- ความสามารถ
- การวางแผน
- สถานการณ์
- โอกาส



ไม่ใช่

Plot Armor



---

# 5. WORLD DESIGN


โลกของ ASTER ENGINE

คือ


ONE PIECE PARALLEL WORLD


ใช้กฎพื้นฐานของโลก ONE PIECE


ได้แก่:


- Four Blues
- Grand Line
- New World
- Red Line
- Calm Belt
- Devil Fruits
- Haki
- World Government
- Marines
- Revolutionary Army
- Pirate Organizations



แต่:


ประวัติศาสตร์

ตัวละคร

องค์กร

ประเทศ

และเหตุการณ์


เป็น Original Canon ของ Engine



ไม่มี Canon Character

เข้ามาแทนที่


โลกถูกขับเคลื่อนด้วย:


Original Characters

และ

World Simulation


# 6. LIVING WORLD DESIGN


ASTER ENGINE

ถูกออกแบบให้เป็น

Living World Simulation


โลกต้องสามารถดำเนินต่อไปได้

แม้ผู้เล่นจะไม่ได้อยู่ในเหตุการณ์



---

# 6.1 NPC DESIGN


NPC ทุกคน

ไม่ใช่เพียงตัวละครประกอบ


NPC ต้องมี:


- เป้าหมาย
- บุคลิก
- ความทรงจำ
- ความสัมพันธ์
- แรงจูงใจ
- การตัดสินใจของตนเอง



NPC

ไม่ควรรอผู้เล่น

เพื่อเริ่มดำเนินชีวิต



---

# 6.2 ORGANIZATION DESIGN


องค์กรภายในโลก

ต้องมีการเคลื่อนไหวของตนเอง


เช่น:


- รับสมาชิกใหม่
- สูญเสียสมาชิก
- เปลี่ยนผู้นำ
- ขยายอำนาจ
- ทำสงคราม
- ทำการค้า
- สูญเสียอำนาจ



องค์กร

ไม่ได้ถูกสร้างขึ้น

เพื่อเป็นเพียง Quest ให้ผู้เล่น



แต่เป็นส่วนหนึ่งของโลก



---

# 6.3 WORLD CHANGE


โลกสามารถเปลี่ยนแปลงได้

จาก:


- การกระทำของผู้เล่น
- การกระทำของ NPC
- ความขัดแย้งขององค์กร
- เหตุการณ์ธรรมชาติ
- เวลา



การเปลี่ยนแปลง

ต้องมีเหตุผลรองรับ



ไม่มีการเปลี่ยนโลก

โดยไม่มีสาเหตุ



---

# 7. SYSTEM ARCHITECTURE DESIGN


ASTER ENGINE

ใช้หลักการออกแบบแบบ Modular



แต่ละระบบ

มีหน้าที่เฉพาะ



ตัวอย่าง:


SYSTEM.md

กำหนดหลักการ Engine


RULES.md

กำหนดกฎการเล่น


GAME_MASTER.md

กำหนดพฤติกรรม AI


MODULES

กำหนดระบบเฉพาะ


DATABASE

เก็บข้อมูลถาวร


SAVE

เก็บสถานะปัจจุบัน


LOG

เก็บประวัติ



---

# 7.1 SEPARATION OF RESPONSIBILITY


ทุกไฟล์

ต้องมีหน้าที่ชัดเจน



ห้าม:


- เก็บข้อมูลซ้ำ
- กำหนดกฎซ้ำ
- แทนที่หน้าที่ของไฟล์อื่น



หากต้องใช้งานข้อมูลจากระบบอื่น


ให้ใช้การอ้างอิง



---

# 7.2 SCALABILITY DESIGN


Engine

ต้องสามารถรองรับ:


- Campaign ระยะยาว
- NPC จำนวนมาก
- เกาะใหม่
- องค์กรใหม่
- ระบบใหม่
- Mechanics ใหม่



โดยไม่ทำลาย:


- Canon เดิม
- Save เดิม
- Database เดิม



---

# 7.3 AI FRIENDLY DESIGN


เอกสารทั้งหมด

ต้องถูกออกแบบให้ AI เข้าใจได้ง่าย



โดยใช้:


- โครงสร้าง Markdown มาตรฐาน
- คำศัพท์เดียวกัน
- Responsibility ชัดเจน
- Reference ชัดเจน



เป้าหมาย:


AI หลายระบบ

สามารถทำงานบน Repository เดียวกันได้


# 8. CHARACTER DESIGN


ASTER ENGINE

ออกแบบตัวละคร

โดยให้ความสำคัญกับ:


- Identity
- Growth
- Choice
- Consequence
- Personal Journey



ตัวละคร

ไม่ได้ถูกสร้างขึ้นเพื่อเป็นเพียง

ค่าพลังหรือสถิติ



แต่เป็นบุคคลหนึ่ง

ที่มี:


- อดีต
- เป้าหมาย
- ความเชื่อ
- จุดแข็ง
- จุดอ่อน
- ความสัมพันธ์



---

# 8.1 CHARACTER PROGRESSION


การเติบโตของตัวละคร

ไม่ได้ขึ้นอยู่กับตัวเลขเพียงอย่างเดียว



Progression

เกิดจาก:


- ประสบการณ์
- การฝึกฝน
- เหตุการณ์สำคัญ
- ความสัมพันธ์
- การตัดสินใจ



ความแข็งแกร่ง

ต้องมีที่มา



ไม่เกิดขึ้น

เพราะเนื้อเรื่องต้องการ



---

# 8.2 ROLE DESIGN


ตัวละครแต่ละคน

ควรมีบทบาทและเอกลักษณ์ของตนเอง



บทบาท

ไม่จำกัดเพียงการต่อสู้



สามารถเป็น:


- นักเดินเรือ
- แพทย์
- ช่างต่อเรือ
- นักวิจัย
- นักการทูต
- นักล่าโจรสลัด
- นักสู้



ทุกบทบาท

มีคุณค่าในโลก



---

# 9. CAMPAIGN DESIGN


ASTER ENGINE

ถูกออกแบบสำหรับ

Campaign ระยะยาว



เป้าหมาย:


- รองรับหลาย Episode
- รักษาความต่อเนื่อง
- ให้โลกเปลี่ยนแปลงตามเวลา
- รองรับ Character Arc ระยะยาว



---

# 9.1 EPISODE STRUCTURE


แต่ละ Episode

ควรเป็นส่วนหนึ่งของการเดินทาง



Episode

ไม่จำเป็นต้องมี:


- จุดเริ่มต้นที่ถูกกำหนด
- จุดจบที่ถูกบังคับ
- เหตุการณ์ที่ล็อกไว้



แต่ควรเกิดจาก:


- การตัดสินใจของผู้เล่น
- สถานการณ์ของโลก
- การเคลื่อนไหวของ NPC
- ผลจากเหตุการณ์ก่อนหน้า



---

# 9.2 CANON CONTINUITY


ทุก Episode

ต้องรักษาความต่อเนื่องของ:


- Character
- World State
- Relationship
- Reputation
- History



เหตุการณ์ที่เกิดขึ้น

ถือเป็น Canon



ไม่มี:


- Reset World
- Undo Consequence
- Retcon โดยไม่มีเหตุผล



---

# 10. DATA DESIGN


ASTER ENGINE

แบ่งข้อมูลตามช่วงเวลา



---

## Permanent Data


ข้อมูลที่เปลี่ยนแปลงยาก


เช่น:


- Islands
- NPC Identity
- Factions
- Devil Fruits
- World Rules



จัดเก็บใน:


DATABASE



---

## Dynamic Data


ข้อมูลที่เปลี่ยนแปลงระหว่าง Campaign


เช่น:


- Reputation
- Relationship
- Economy
- NPC Status
- World Events



จัดเก็บใน:


SAVE



---

## Historical Data


ข้อมูลเหตุการณ์ที่ผ่านมา


เช่น:


- Episode History
- Major Events
- Important Decisions



จัดเก็บใน:


LOG



---

# 10.1 DATA CONSISTENCY


ข้อมูลทุกประเภท

ต้องมี Source of Truth เดียว



ห้าม:


- คัดลอกข้อมูลซ้ำ
- มีค่าขัดแย้งหลายแห่ง
- ใช้ Memory แทน Repository



Repository

เป็นแหล่งอ้างอิงหลัก


# 11. MODULE DESIGN


ASTER ENGINE

ถูกออกแบบให้ระบบต่าง ๆ

ทำงานร่วมกันแบบ Modular System



แต่ละ Module

ต้องมี:


- หน้าที่ชัดเจน
- ขอบเขตชัดเจน
- Dependency ชัดเจน
- ไม่กำหนดกฎแทน Module อื่น



---

# 11.1 SYSTEM MODULE PRINCIPLE


System Module

มีหน้าที่กำหนดรายละเอียดเฉพาะด้าน



ตัวอย่าง:


COMBAT.md

กำหนด Combat System


MEDICAL.md

กำหนด Medical System


NAVIGATION.md

กำหนด Navigation System


DICE.md

กำหนด Resolution System


HAKI.md

กำหนด Haki System


DEVIL_FRUIT.md

กำหนด Devil Fruit System



แต่ละ Module

ต้องอ้างอิง:


SYSTEM.md

และ

RULES.md



---

# 11.2 MODULE INTEGRATION


Module ต่าง ๆ

สามารถทำงานร่วมกันได้



ตัวอย่าง:


Combat

↓

ใช้

DICE

↓

อ้างอิง

HAKI

↓

อ้างอิง

DEVIL_FRUIT

↓

ตรวจ

STATUS_EFFECTS



แต่:


แต่ละ Module

ยังคงรักษาหน้าที่ของตนเอง



---

# 12. GAME MASTER DESIGN


Game Master

เป็นตัวจำลองโลก



ไม่ใช่ผู้เขียนเรื่องราวแทนผู้เล่น



หน้าที่หลัก:


- จำลอง NPC
- จำลองโลก
- ตีความกฎ
- สร้างผลลัพธ์
- รักษา Canon



---

# 12.1 WORLD SIMULATION OVER SCRIPT


Game Master

ต้องสร้างเหตุการณ์จาก:


- World State
- NPC Motivation
- Player Action
- Existing Canon



ไม่ใช้:


- Plot ที่ล็อกไว้
- ผลลัพธ์ที่กำหนดล่วงหน้า
- การบังคับเส้นทาง



---

# 12.2 FAIR NARRATIVE


Game Master

ต้องรักษาความยุติธรรม



ไม่ให้:


- ผู้เล่นได้เปรียบเพราะเป็นตัวละครหลัก
- NPC ทำสิ่งที่ไม่มีเหตุผล
- เหตุการณ์เกิดขึ้นเพื่อช่วยเรื่องราว



ทุกฝ่าย

ต้องอยู่ภายใต้กฎเดียวกัน



---

# 13. DESIGN QUALITY STANDARD


ทุกระบบใหม่

ก่อนเพิ่มเข้า Engine

ต้องผ่านการตรวจสอบ:



## Consistency


ไม่ขัดกับระบบเดิม



## Responsibility


ไม่แย่งหน้าที่ของไฟล์อื่น



## Scalability


รองรับการขยายในอนาคต



## Maintainability


แก้ไขง่าย



## Canon Compatibility


ไม่ทำลาย Canon เดิม



---

# 14. FUTURE DESIGN DIRECTION


ASTER ENGINE

ควรสามารถขยายได้ในอนาคต



รองรับ:


- โลกใหม่
- Campaign ใหม่
- ระบบใหม่
- Mechanics ใหม่
- AI Platform ใหม่



โดยยังรักษา:


- Philosophy
- Canon
- Repository Structure
- Data Consistency



---

# 15. FINAL DESIGN PRINCIPLES


ทุกการออกแบบของ

PROJECT ASTER ENGINE


ต้องตอบคำถาม:



## ระบบนี้ทำให้โลกดีขึ้นหรือไม่


ถ้าเพิ่มความซับซ้อน

แต่ไม่ได้เพิ่มคุณค่าของ Simulation

ควรพิจารณาใหม่



---

## ระบบนี้รักษาอิสระของผู้เล่นหรือไม่


ผู้เล่นต้องมีทางเลือก

และผลลัพธ์ต้องเกิดจากการตัดสินใจ



---

## ระบบนี้รักษาความต่อเนื่องหรือไม่


ทุกการเปลี่ยนแปลง

ต้องสามารถอธิบายได้



---

## ระบบนี้รองรับอนาคตหรือไม่


ทุกการออกแบบ

ต้องไม่ทำลายการขยายตัวของ Engine


# 16. DEVELOPMENT DESIGN WORKFLOW


การพัฒนา

PROJECT ASTER ENGINE


ต้องดำเนินการอย่างเป็นระบบ



ลำดับการพัฒนา:


Analyze

↓

Design

↓

Review

↓

Refactor

↓

Implement

↓

Validate



---

# 16.1 ANALYSIS FIRST


ก่อนเพิ่มหรือเปลี่ยนแปลงระบบ


ต้องตรวจสอบ:


- ปัญหาที่ต้องแก้
- ระบบที่เกี่ยวข้อง
- ผลกระทบต่อ Repository
- ผลกระทบต่อ Canon



ห้ามเพิ่มระบบ

เพียงเพราะต้องการเพิ่มความซับซ้อน



---

# 16.2 REFACTOR BEFORE CREATE


เมื่อพบปัญหา


ให้พิจารณาตามลำดับ:



1. แก้ไขไฟล์เดิม


↓

2. ปรับโครงสร้าง


↓

3. สร้างไฟล์ใหม่เมื่อจำเป็นเท่านั้น



เป้าหมาย:


ลดข้อมูลซ้ำ

รักษาความต่อเนื่อง

ทำให้ Repository ดูแลได้ง่าย



---

# 16.3 CHANGE IMPACT


ทุกการเปลี่ยนแปลง

ต้องตรวจสอบผลกระทบต่อ:



- SYSTEM
- RULES
- GAME MASTER
- MODULES
- DATABASE
- SAVE
- LOG



การเปลี่ยนแปลงหนึ่งจุด

อาจส่งผลต่อหลายระบบ



---

# 17. REPOSITORY DESIGN


Repository

คือโครงสร้างหลัก

ที่ทำให้ AI และระบบต่าง ๆ

เข้าใจ Engine ตรงกัน



ทุก Folder

ต้องมีหน้าที่ชัดเจน



ตัวอย่าง:



00_SYSTEM

Core Engine Rules



01_WORLD

World Database



02_PLAYER

Player Data



03_CREW

Crew Data



04_SHIPS

Ship Data



05_FACTIONS

Organization Data



06_NPCS

NPC Data



07_ITEMS

Item Data



08_DEVIL_FRUITS

Devil Fruit Data



09_LOGS

Campaign History



10_SAVE

Current World State



11_SECRETS

Hidden Information



12_CODEX

World Encyclopedia



13_ARCHIVIST

Data Management System



---

# 17.1 REPOSITORY CONSISTENCY


ทุกไฟล์

ต้องใช้มาตรฐานเดียวกัน:



- Markdown Structure
- Naming Convention
- Terminology
- Document Format
- Reference Style



เป้าหมาย:


ให้ AI หลายระบบ

สามารถอ่าน Repository เดียวกัน

และตีความตรงกัน



---

# 18. DESIGN SUMMARY


PROJECT ASTER ENGINE


ถูกออกแบบเพื่อสร้าง:



"โลกที่สามารถมีชีวิตอยู่ได้"



ไม่ใช่เพียง:



"เรื่องราวที่รอผู้เล่น"



Engine ให้ความสำคัญกับ:



- โลกก่อนผู้เล่น
- เหตุก่อนผลลัพธ์
- Canon ก่อนความคิดสร้างสรรค์
- ความต่อเนื่องก่อนความตื่นเต้น
- Simulation ก่อน Script



ทุกระบบ

ทุกไฟล์

และทุกการตัดสินใจ


ต้องสนับสนุนเป้าหมายเดียว:



สร้าง ONE PIECE Parallel World

ที่สามารถดำเนินต่อไปได้ด้วยตัวเอง



---

# DOCUMENT STATUS


Document Name

DESIGN.md


Document Version

3.0


Engine Version

ASTER ENGINE v1.x


Status

Production


Authority

Core Design Document


Last Reviewed

TBD


---

# END OF DOCUMENT

DESIGN.md

กำหนดแนวทางการออกแบบ

ของ PROJECT ASTER ENGINE


เมื่อเกิดข้อขัดแย้ง

ให้ยึดลำดับ:


SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

DESIGN.md

↓

System Module ที่เกี่ยวข้อง

# 19. SYSTEM EVOLUTION DESIGN


ASTER ENGINE

ถูกออกแบบให้สามารถพัฒนาได้ต่อเนื่อง


Engine

ไม่ใช่ระบบที่สมบูรณ์ตั้งแต่เริ่มต้น


แต่เป็น Framework

ที่สามารถเติบโตตาม Campaign



---

# 19.1 CONTROLLED EXPANSION


การเพิ่มระบบใหม่


ต้องพิจารณา:


- ความจำเป็น
- ผลกระทบ
- ความสอดคล้องกับ Philosophy
- ความสัมพันธ์กับระบบเดิม



ระบบใหม่

ต้องไม่เพิ่มความซับซ้อน

โดยไม่มีประโยชน์ต่อ Simulation



---

# 19.2 BACKWARD COMPATIBILITY


การพัฒนา Engine


ต้องรักษาข้อมูลเดิม


ได้แก่:


- Existing Canon
- Existing Save
- Existing Database
- Existing Campaign History



ห้ามทำลายข้อมูลเดิม

เพื่อแลกกับระบบใหม่



---

# 20. IMMERSION DESIGN


เป้าหมายสำคัญของ

ASTER ENGINE


คือการสร้างความรู้สึกว่า:



"ผู้เล่นกำลังอาศัยอยู่ในโลกนั้นจริง ๆ"



ไม่ใช่:



"กำลังเล่นผ่านระบบ"



---

# 20.1 WORLD REACTION


โลกต้องตอบสนองต่อ:


- การกระทำ
- ชื่อเสียง
- ความสัมพันธ์
- การตัดสินใจ
- เหตุการณ์ที่ผ่านมา



ผู้เล่น

ไม่ควรถูกแยกออกจากโลก



ทุกสิ่งที่เกิดขึ้น

ควรมีผลต่อสิ่งรอบตัว



---

# 20.2 INFORMATION DESIGN


ผู้เล่น

ไม่จำเป็นต้องรู้ทุกอย่าง



ข้อมูลควรถูกเปิดเผยตาม:


- การค้นพบ
- ประสบการณ์
- ความสัมพันธ์
- การสืบสวน
- เหตุการณ์



ความไม่รู้

เป็นส่วนหนึ่งของการจำลองโลก



---

# 21. LONG TERM CAMPAIGN DESIGN


ASTER ENGINE

ออกแบบเพื่อรองรับ Campaign ระยะยาว



เป้าหมาย:


- หลายสิบ Episode
- การเติบโตระยะยาว
- โลกเปลี่ยนแปลงต่อเนื่อง
- Character Development



---

# 21.1 MEMORY AND CONTINUITY


ทุกเหตุการณ์สำคัญ


ต้องสามารถย้อนตรวจสอบได้



ผ่าน:


- SAVE
- LOG
- DATABASE
- ARCHIVE



เพื่อรักษา:


- ความต่อเนื่อง
- ความถูกต้อง
- Canon



---

# 21.2 CHARACTER JOURNEY


ตัวละคร

ต้องมีการเดินทางของตนเอง



ไม่ใช่เพียง:


- เพิ่มพลัง
- ผ่านภารกิจ
- ชนะศัตรู



แต่รวมถึง:


- การเปลี่ยนแปลงภายใน
- ความสัมพันธ์
- ความเชื่อ
- การเรียนรู้
- การตัดสินใจ



---

# 22. FINAL DESIGN STATEMENT


PROJECT ASTER ENGINE


ไม่ได้ถูกสร้างขึ้น

เพื่อจำลองการเป็นผู้ชนะ



แต่ถูกสร้างขึ้น

เพื่อจำลองการมีชีวิตอยู่



ภายในโลกของ

ONE PIECE Parallel World



โลกนี้:


- มีอดีต
- มีปัจจุบัน
- มีอนาคต


NPC มีเป้าหมาย


องค์กรมีแผนการ


ประเทศมีการเปลี่ยนแปลง


ผู้เล่นเป็นเพียงหนึ่งชีวิต

ภายในโลกขนาดใหญ่



ทุกการกระทำ

จะถูกจดจำ



ทุกผลลัพธ์

จะกลายเป็น Canon



และโลก

จะเดินหน้าต่อไปเสมอ


---

# END OF DESIGN DOCUMENT

# =====================================================
# FILE : 00_SYSTEM\DEVIL_FRUIT.md
# =====================================================

# 8. DEVIL FRUIT MASTERY

การควบคุมผลปีศาจ

ไม่ได้วัดจากระยะเวลาที่กินผล

แต่ขึ้นอยู่กับ

- ความเข้าใจในพลัง
- ประสบการณ์
- การฝึกฝน
- ความคิดสร้างสรรค์
- สถานการณ์จริง

ผู้ใช้ผลปีศาจ

สามารถพัฒนาได้หลายระดับ

---

## Beginner

ผู้ใช้ใหม่

สามารถ

- เปิดใช้ความสามารถพื้นฐาน
- ควบคุมพลังได้บางส่วน
- เข้าใจข้อจำกัดเบื้องต้น

ข้อจำกัด

- ใช้พลังสิ้นเปลือง
- ควบคุมไม่แม่นยำ
- ไม่เข้าใจขอบเขตพลังทั้งหมด

---

## Intermediate

ผู้ใช้เริ่มเข้าใจผลปีศาจ

สามารถ

- ใช้พลังได้มีประสิทธิภาพขึ้น
- ประยุกต์ใช้ในสถานการณ์ต่าง ๆ
- ลดข้อผิดพลาดจากการใช้งาน

---

## Advanced

ผู้ใช้ระดับสูง

สามารถ

- ใช้พลังอย่างสร้างสรรค์
- ผสมผสานกับรูปแบบการต่อสู้
- ค้นพบการใช้งานใหม่
- ใช้พลังในระดับซับซ้อน

---

## Master

ผู้ใช้ระดับเชี่ยวชาญ

เข้าใจ

ธรรมชาติของผลปีศาจ

อย่างลึกซึ้ง

สามารถ

- ใช้พลังอย่างมีประสิทธิภาพสูงสุด
- สร้างรูปแบบเฉพาะตัว
- ใช้ข้อจำกัดของผลให้เป็นประโยชน์

---

# 9. DEVIL FRUIT WEAKNESS

ผู้ใช้ผลปีศาจ

มีข้อจำกัดพื้นฐาน

ได้แก่

## Sea Weakness

ทะเล

เป็นจุดอ่อนหลัก

ของผู้ใช้ผลปีศาจ

เมื่อสัมผัสทะเล

พลังร่างกายจะลดลง

และไม่สามารถควบคุมพลังได้เต็มที่

---

## Seastone

หินไคโรเซกิ

มีคุณสมบัติ

ลดความสามารถของผู้ใช้ผลปีศาจ

การสัมผัส

สามารถทำให้ผู้ใช้สูญเสียพลัง

---

## Individual Weakness

ผลปีศาจแต่ละชนิด

มีจุดอ่อนเฉพาะตัว

เช่น

- ธาตุที่แพ้ทาง
- เงื่อนไขการใช้งาน
- ระยะ
- เวลา
- สภาพแวดล้อม

---

# 10. DEVIL FRUIT AND COMBAT

ผลปีศาจ

เป็นหนึ่งในเครื่องมือการต่อสู้

แต่ไม่ใช่ชัยชนะอัตโนมัติ

ผลการต่อสู้

ขึ้นอยู่กับ

- ประสบการณ์
- การวางแผน
- ฮาคิ
- ความสามารถทางร่างกาย
- สถานการณ์

รายละเอียด

อ้างอิง

COMBAT.md

---

# 11. DEVIL FRUIT AND HAKI

ฮาคิ

สามารถมีปฏิสัมพันธ์กับผลปีศาจ

แต่ไม่ใช่ทุกกรณี

การต่อสู้ระดับสูง

มักเกี่ยวข้องกับ

ทั้ง

- ผลปีศาจ
- ฮาคิ
- ทักษะส่วนตัว

รายละเอียด

อ้างอิง

HAKI.md

---

# 12. DEVIL FRUIT AWAKENING

Awakening

คือระดับสูงของผลปีศาจ

ไม่ใช่สิ่งที่เกิดขึ้นทันที

ต้องมี

- ความเข้าใจพลังระดับสูง
- ประสบการณ์ต่อสู้
- ความสัมพันธ์กับผลปีศาจ
- สถานการณ์ที่เหมาะสม

Awakening

ไม่ควรถูกใช้เป็นรางวัลตามเนื้อเรื่อง

แต่ต้องเกิดจากการพัฒนาของตัวละคร

---

# 13. AWAKENING LIMITATION

การตื่นรู้

ไม่ได้ทำให้ผู้ใช้ไร้ขีดจำกัด

ยังมี

- การใช้พลังมากเกินไป
- ความเหนื่อยล้า
- ข้อจำกัดของผลเดิม
- จุดอ่อนเฉพาะตัว

Awakening

คือการเข้าใจพลังลึกขึ้น

ไม่ใช่การลบข้อจำกัดทั้งหมด

---

# 14. DEVIL FRUIT CLASSIFICATION

## PARAMECIA

Paramecia

เป็นผลปีศาจที่มีความหลากหลายที่สุด

สามารถเปลี่ยนแปลง

- ร่างกาย
- สิ่งแวดล้อม
- วัตถุ
- ความสามารถเฉพาะทาง

รูปแบบพลัง

แตกต่างกันอย่างมาก

จึงไม่สามารถประเมินด้วยมาตรฐานเดียวกันได้

---

## ZOAN

Zoan

เป็นผลปีศาจที่เกี่ยวข้องกับสิ่งมีชีวิต

ผู้ใช้สามารถ

- แปลงร่าง
- เพิ่มพลังร่างกาย
- เพิ่มความทนทาน
- ใช้คุณสมบัติของสิ่งมีชีวิตนั้น

Zoan

มีจุดเด่นด้าน

- พละกำลัง
- การฟื้นฟู
- ความแข็งแกร่งทางร่างกาย

---

## ANCIENT ZOAN

Ancient Zoan

เกี่ยวข้องกับสิ่งมีชีวิตโบราณ

เช่น

- สัตว์ดึกดำบรรพ์
- สิ่งมีชีวิตที่สูญพันธุ์

จุดเด่น

- ร่างกายแข็งแกร่ง
- ความทนทานสูง
- พลังทางกายภาพมากกว่า Zoan ทั่วไป

---

## MYTHICAL ZOAN

Mythical Zoan

เป็นประเภทที่หายากมาก

เกี่ยวข้องกับ

- ตำนาน
- เทพนิยาย
- สิ่งมีชีวิตในตำนาน

ความสามารถ

อาจมีคุณสมบัติพิเศษเพิ่มเติม

นอกเหนือจากการแปลงร่าง

---

## LOGIA

Logia

เป็นผลปีศาจที่เกี่ยวข้องกับ

ธรรมชาติ

หรือ

สสารบางประเภท

จุดเด่น

- เปลี่ยนร่างเป็นสิ่งนั้น
- สร้างสิ่งนั้น
- ควบคุมสิ่งนั้น

แต่ยังมี

ข้อจำกัด

และวิธีรับมือ

---

# 15. DEVIL FRUIT BALANCE

ผลปีศาจทุกชนิด

ต้องรักษาสมดุล

ผ่าน

- ความสามารถ
- ข้อจำกัด
- เงื่อนไขการใช้
- ทรัพยากรที่ต้องใช้
- ประสบการณ์ของผู้ใช้

พลังที่แข็งแกร่ง

ควรมีข้อจำกัดที่เหมาะสม

---

# 16. CREATIVE APPLICATION

ผู้ใช้ผลปีศาจ

สามารถค้นพบ

วิธีใช้ใหม่ ๆ

ผ่าน

- ประสบการณ์
- การฝึกฝน
- การทดลอง
- ความเข้าใจในพลัง

AI

ควรสนับสนุนความคิดสร้างสรรค์

ตราบใดที่

ไม่ขัดกับกฎของผลนั้น

---

# 17. DEVIL FRUIT COMBINATIONS

ผลปีศาจหลายชนิด

สามารถมีปฏิสัมพันธ์กันได้

แต่ไม่ใช่ทุกกรณี

AI ต้องพิจารณา

- ธรรมชาติของพลัง
- ข้อจำกัด
- สภาพแวดล้อม
- ระดับความเข้าใจของผู้ใช้

ไม่ควรสร้างผลลัพธ์

เพียงเพราะดูน่าสนใจ

---

# 18. DEVIL FRUIT AND MEDICAL SYSTEM

ผลปีศาจบางชนิด

อาจเกี่ยวข้องกับการแพทย์

เช่น

- การรักษา
- การเปลี่ยนแปลงร่างกาย
- การสร้างเนื้อเยื่อ
- การควบคุมสาร

แต่

ไม่สามารถแทนที่

ความรู้ทางการแพทย์ทั้งหมด

รายละเอียด

อ้างอิง

MEDICAL.md

---

# 19. DEVIL FRUIT RECORD

ผลปีศาจที่ปรากฏในโลก

ควรถูกบันทึก

เช่น

- ชื่อผล
- ประเภท
- ผู้ใช้ปัจจุบัน
- ประวัติผู้ใช้เดิม
- ความสามารถ
- ข้อจำกัด
- สถานะ

ข้อมูลนี้ใช้กับ

WORLD DATABASE

และ

SAVE SYSTEM

---

# 20. DEVIL FRUIT DICE

DEVIL FRUIT SYSTEM

ใช้ DICE SYSTEM

เมื่อ

ผลลัพธ์ไม่แน่นอน

เช่น

- การควบคุมพลังใหม่
- การค้นพบความสามารถ
- การใช้พลังภายใต้แรงกดดัน
- การตื่นรู้

ไม่ควรทอย

สำหรับสิ่งที่ผู้ใช้ทำได้แน่นอนแล้ว

อ้างอิง

DICE.md

---

# 21. AI RESPONSIBILITIES

ก่อนตัดสินผลที่เกี่ยวข้องกับผลปีศาจ

AI ต้องตรวจสอบ

1. ประเภทของผลปีศาจ

↓

2. ความสามารถที่ยืนยันแล้ว

↓

3. ข้อจำกัดของพลัง

↓

4. ระดับความเข้าใจของผู้ใช้

↓

5. สถานการณ์ปัจจุบัน

↓

6. ผลกระทบต่อโลก

↓

7. ใช้ DICE หากจำเป็น

↓

8. บรรยายผลลัพธ์

AI

ไม่ควรเพิ่มความสามารถใหม่

โดยไม่มีเหตุผลรองรับ

---

# 22. DEVIL FRUIT FAIR PLAY

DEVIL FRUIT SYSTEM

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- เพิ่มพลังเพราะตัวละครเป็นผู้เล่น
- ลดข้อจำกัดเพื่อช่วยผู้เล่น
- สร้างความสามารถใหม่โดยไม่มีการพัฒนา
- ทำให้ NPC ใช้พลังเกินกฎ
- ละเลยจุดอ่อนของผลปีศาจ

กฎของผลปีศาจ

ใช้กับทุกคนเท่าเทียมกัน

---

# 23. DEVIL FRUIT DATABASE

ผลปีศาจทุกชนิด

ควรถูกจัดเก็บในฐานข้อมูล

ประกอบด้วย

## Basic Information

- ชื่อผล
- ประเภท
- ระดับความหายาก
- ผู้ใช้ปัจจุบัน

---

## Ability Information

- ความสามารถหลัก
- ความสามารถรอง
- รูปแบบการใช้งาน
- ขอบเขตพลัง

---

## Limitation Information

- จุดอ่อน
- เงื่อนไข
- ข้อจำกัด
- ความเสี่ยง

---

## History

- ผู้ใช้ในอดีต
- เหตุการณ์สำคัญ
- ตำนาน
- ข่าวลือ

---

# 24. DEVIL FRUIT RARITY

ความหายาก

ไม่ได้หมายถึง

ความแข็งแกร่งเสมอไป

ผลปีศาจทั่วไป

สามารถมีผู้ใช้ที่แข็งแกร่งได้

หากมีประสบการณ์สูง

ผลปีศาจหายาก

ไม่ได้รับประกันชัยชนะ

---

# 25. DEVIL FRUIT DISCOVERY

ตัวละคร

ไม่จำเป็นต้องรู้ชื่อผลปีศาจทันที

เมื่อพบพลังใหม่

อาจต้อง

- ทดลอง
- สังเกต
- ศึกษา
- ค้นคว้า

ความรู้เกี่ยวกับผลปีศาจ

เป็นทรัพยากรหนึ่งของโลก

---

# 26. DEVIL FRUIT REBIRTH

เมื่อผู้ใช้ผลปีศาจเสียชีวิต

ผลปีศาจ

สามารถกลับเข้าสู่วัฏจักรของโลก

ตามกฎของจักรวาล

การเกิดใหม่

ไม่ได้เกิดขึ้นต่อหน้าทุกคนเสมอไป

และไม่สามารถคาดเดาได้ง่าย

---

# 27. DEVIL FRUIT LEGACY

ผลปีศาจ

สามารถสร้างประวัติศาสตร์

ผ่านผู้ใช้แต่ละยุค

เช่น

- ตำนาน
- ความหวาดกลัว
- ชื่อเสียง
- ความเข้าใจผิด
- เรื่องเล่า

ผู้ใช้ใหม่

ไม่ได้รับมรดกทั้งหมด

ของผู้ใช้เก่า

แต่ต้องสร้างเรื่องราวของตนเอง

---

# 28. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- MEDICAL.md
- STATUS_EFFECTS.md
- HAKI.md
- WORLD
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

DEVIL_FRUIT.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

DEVIL_FRUIT.md

กำหนดมาตรฐานของผลปีศาจ

ความสามารถ

ข้อจำกัด

และการพัฒนาของผู้ใช้

ทุกระบบ

ที่เกี่ยวข้องกับผลปีศาจ

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

DEVIL_FRUIT.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\DICE.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# ASTER ENGINE

# DICE SYSTEM

Document : DICE.md

Version : 3.0

Status : Production

Authority : Dice Module


---

# 1. PURPOSE

DICE.md

กำหนดระบบตัดสินผลลัพธ์

สำหรับเหตุการณ์ที่มีความไม่แน่นอน

หน้าที่ของ Dice System:

- ประเมินความเสี่ยง
- สร้างความยุติธรรม
- สร้างผลลัพธ์ที่สมเหตุสมผล
- สร้าง Consequence จากการตัดสินใจ


Dice

ไม่ใช่เครื่องมือควบคุมเรื่องราว

ไม่ใช่เครื่องมือลงโทษผู้เล่น

ไม่ใช่เครื่องมือช่วยผู้เล่น


---

# 2. RESPONSIBILITY

DICE MODULE รับผิดชอบ:

## Roll Decision

กำหนดว่าเมื่อใดควรใช้ Dice


## Resolution

กำหนดวิธีตัดสินผลลัพธ์


## Result Interpretation

กำหนดระดับความสำเร็จ


## Risk Evaluation

กำหนดปัจจัยที่ส่งผลต่อโอกาส


---

# 3. NON RESPONSIBILITY

DICE.md

ไม่กำหนด:


- Combat Rules

อ้างอิง:

COMBAT.md


- Character Ability

อ้างอิง:

Character System


- Haki Rules

อ้างอิง:

HAKI.md


- Devil Fruit Rules

อ้างอิง:

DEVIL_FRUIT.md


- Medical Rules

อ้างอิง:

MEDICAL.md


- World State

อ้างอิง:

SAVE / WORLD DATABASE


---

# 4. DICE PHILOSOPHY


## Story Before Dice

Dice

ทำงานหลังจาก

การประเมินเหตุผล


ลำดับ:


Story

↓

Logic

↓

Situation

↓

Ability

↓

Dice

↓

Result


ห้ามใช้ Dice

เพื่อแทนที่การคิดวิเคราะห์


---

## Reason Before Luck


โชค

สามารถเปลี่ยนผลลัพธ์ได้


แต่ไม่สามารถลบล้างเหตุผล


ตัวอย่าง:


มือใหม่

ไม่สามารถเอาชนะ

นักดาบระดับตำนาน

เพียงเพราะโชคดี


แต่โชคอาจช่วย:

- หนีรอด
- พบโอกาส
- ลดความเสียหาย


---

# 5. HIDDEN DICE SYSTEM


Dice

เป็นระบบ Hidden Roll


ผู้เล่น:

- ไม่เห็นค่าการทอย
- ไม่เห็น Modifier
- ไม่เห็น Difficulty


Game Master

เป็นผู้ประเมิน


แต่:

ห้ามเปลี่ยนผล

เพื่อช่วยหรือขัดขวางผู้เล่น


ทุกฝ่ายใช้กฎเดียวกัน:


- Player
- NPC
- Organization
- Enemy


---

# 6. WHEN TO ROLL


Game Master

ต้องใช้ Dice

เมื่อ:


- ผลลัพธ์ยังไม่แน่นอน
- มีความเสี่ยง
- มีหลายปัจจัยแข่งขันกัน
- ความล้มเหลวมีความหมาย


ตัวอย่าง:


- การต่อสู้
- การหลบหนี
- การไล่ล่า
- การเจรจา
- การสืบสวน
- การค้นหา
- การผ่าตัด
- การใช้ความสามารถ
- การเดินเรือในสถานการณ์อันตราย


---

# 7. NO ROLL


ห้ามใช้ Dice

เมื่อผลลัพธ์ชัดเจน


ตัวอย่าง:


- เดินทางระยะสั้นปกติ
- พูดคุยทั่วไป
- ทำกิจวัตรประจำวัน
- ใช้ทักษะที่ไม่มีแรงกดดัน
- การกระทำที่ไม่มีความเสี่ยง


หากไม่มีความเป็นไปได้ของ Failure

ไม่ต้อง Roll


---

# 8. DIFFICULTY EVALUATION


ก่อน Roll

Game Master

ต้องประเมินระดับความยาก


## Trivial

แทบไม่มีความเสี่ยง


## Easy

มีโอกาสสำเร็จสูง


## Normal

สถานการณ์ทั่วไป


## Hard

ต้องใช้ความสามารถหรือแผนการ


## Extreme

เกินขีดจำกัดปกติ


## Impossible

ไม่มีเหตุผลเพียงพอที่จะสำเร็จ


Impossible

ไม่ควรใช้ Dice


---

# 9. ADVANTAGE AND DISADVANTAGE


ปัจจัยต่าง ๆ

สามารถเปลี่ยนโอกาสสำเร็จ


## Advantage


เกิดจาก:


- แผนการที่ดี
- ข้อมูลเหนือกว่า
- สภาพแวดล้อมเหมาะสม
- ความช่วยเหลือ
- อุปกรณ์เหมาะสม


---

## Disadvantage


เกิดจาก:


- บาดเจ็บ
- เหนื่อยล้า
- ข้อมูลไม่เพียงพอ
- สภาพแวดล้อมเสียเปรียบ
- ความกดดันสูง


---

Advantage

ไม่ได้รับประกันชัยชนะ


Disadvantage

ไม่ได้หมายถึงความล้มเหลวเสมอไป


---

# 10. DICE FACTORS


Game Master

ต้องประเมิน:


## Character


- ประสบการณ์
- ความสามารถ
- ทักษะ
- สภาพร่างกาย
- สภาพจิตใจ
- ความเหนื่อยล้า


---

## Equipment


- อาวุธ
- เครื่องมือ
- อุปกรณ์
- คุณภาพ


---

## Environment


- พื้นที่
- อากาศ
- เวลา
- แสง
- ระยะ
- สิ่งกีดขวาง


---

## Situation


- เป้าหมาย
- เวลา
- ความกดดัน
- ข้อมูล


---

## Opposition


- ความสามารถของฝ่ายตรงข้าม
- จำนวน
- การเตรียมตัว
- ความได้เปรียบ


---

---

# 11. RESOLUTION FLOW


การตัดสินผลลัพธ์

ดำเนินตามลำดับ:


Intent

↓

Situation

↓

Difficulty

↓

Factors

↓

Hidden Roll

↓

Result Level

↓

Consequence


Game Master

ห้ามข้ามขั้นตอน


---

# 12. PLAYER CREATIVITY


ความคิดสร้างสรรค์

เป็นปัจจัยสำคัญ


หากผู้เล่นเสนอวิธีแก้ปัญหา

ที่สมเหตุสมผล:


Game Master

สามารถ:


- ลด Difficulty
- เพิ่ม Advantage
- ยกเลิก Dice


หากผลลัพธ์

แทบไม่มีโอกาสล้มเหลว


---

# 13. RESULT LEVEL


ผลลัพธ์แบ่งเป็น:


## Critical Success


สำเร็จเกินความคาดหมาย


เกิดผลเพิ่มเติม:


- ได้เปรียบ
- สร้างโอกาสใหม่
- ลด Consequence


---

## Great Success


สำเร็จสมบูรณ์


ไม่มีผลเสีย


---

## Success


บรรลุเป้าหมาย


ตามที่ต้องการ


---

## Success With Cost


สำเร็จ

แต่ต้องแลกบางสิ่ง


ตัวอย่าง:


- เวลา
- พลังงาน
- อุปกรณ์
- บาดเจ็บ
- ชื่อเสียง


---

## Partial Success


สำเร็จบางส่วน


เป้าหมายหลักเกิดขึ้น

แต่มีปัญหาตามมา


---

## Failure


ไม่สำเร็จ


แต่สถานการณ์ยังดำเนินต่อ


Failure

ไม่ใช่จุดจบของเรื่อง


---

## Critical Failure


ล้มเหลวอย่างรุนแรง


เกิดเมื่อ:


- ความเสี่ยงสูงมาก
- การตัดสินใจผิดพลาด
- สถานการณ์อันตราย


ไม่ควรเกิดจาก Dice เพียงอย่างเดียว


---

# 14. FAILURE IS STORY


ความล้มเหลว

คือส่วนหนึ่งของเรื่องราว


ตัวอย่าง:


- ถูกจับ
- สูญเสียทรัพยากร
- บาดเจ็บ
- เสียความเชื่อใจ
- เกิดปัญหาใหม่
- ศัตรูได้เปรียบ


Failure

สร้างสถานการณ์ใหม่


ไม่ใช่ Game Over


---

# 15. CONSEQUENCE GENERATION


ทุกผลลัพธ์

ต้องสร้างผลกระทบ


แบ่งเป็น:


## Immediate


ผลทันที


---

## Short Term


ผลในระยะสั้น


---

## Mid Term


ผลต่อเนื่อง


---

## Long Term


ผลกระทบต่อโลก


---

Consequence

สามารถส่งผลต่อ:


- Player
- Crew
- NPC
- Ship
- Island
- Organization
- Reputation
- World State


---

---

# 16. GM OPERATING RULES


Game Master

ต้องปฏิบัติตาม:


## Fair Roll


ห้ามเปลี่ยนผลลัพธ์

หลังจาก Dice ถูกตัดสินแล้ว


---

## No Favoritism


ห้ามช่วยผู้เล่น

เพียงเพราะเป็นตัวละครผู้เล่น


---

## No Punishment


ห้ามสร้างผลเสีย

เพียงเพื่อลงโทษผู้เล่น


---

## Explain Through World Logic


ทุกผลลัพธ์

ต้องอธิบายได้จาก:


- สถานการณ์
- ความสามารถ
- ความเสี่ยง
- เหตุผลของโลก


---

# 17. DICE AND OTHER MODULES


## COMBAT


Combat

ใช้ Dice

เมื่อผลการต่อสู้

ยังไม่สามารถตัดสินได้


อ้างอิง:

COMBAT.md


---

## MEDICAL


การรักษา

และการแพทย์

ใช้ Dice

เมื่อมีความไม่แน่นอน


อ้างอิง:

MEDICAL.md


---

## NAVIGATION


การเดินเรือ

ใช้ Dice

เมื่อมีความเสี่ยง


เช่น:


- พายุ
- สภาพทะเล
- การค้นหาเส้นทาง


อ้างอิง:

NAVIGATION.md


---

## HAKI / DEVIL FRUIT


Dice

ประเมินผลลัพธ์ของสถานการณ์

แต่ไม่กำหนดกฎของพลัง


อ้างอิง:


HAKI.md

DEVIL_FRUIT.md


---

# 18. DICE CONSISTENCY


การ Roll ทุกครั้ง

ต้องรักษา:


- Logic
- Canon
- Situation
- Character Ability
- Consequence


Dice

ไม่สามารถทำให้:


- ตัวละครไร้ประสบการณ์ชนะผู้เชี่ยวชาญแบบไร้เหตุผล
- ความสามารถเกิดขึ้นโดยไม่มีพื้นฐาน
- โลกเปลี่ยนโดยไม่มีผลกระทบ


---

# 19. GOLDEN RULE


Reason

↓

Always

↓

Comes

↓

Before

↓

Luck


---

# 20. FINAL PRINCIPLE


Dice System ของ ASTER ENGINE


ไม่ได้ถูกสร้างขึ้น

เพื่อควบคุมเรื่องราว


แต่ถูกสร้างขึ้น

เพื่อทำให้โลกมีความไม่แน่นอน

อย่างยุติธรรม


ทุกผลลัพธ์

ต้องทำให้เรื่องราวเดินต่อ


และโลกเปลี่ยนแปลง


---

# END OF DICE.md

# =====================================================
# FILE : 00_SYSTEM\ENGINE_CHANGELOG.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
## ENGINE CHANGELOG

Version : 1.0
Status : Active

---

# PURPOSE

เอกสารนี้ใช้บันทึกการเปลี่ยนแปลงของ Engine

ไม่ใช่บันทึกเหตุการณ์ภายในเกม

ไม่ใช่ Save

ไม่ใช่ Log ของผู้เล่น

ใช้สำหรับติดตามการพัฒนา Engine เท่านั้น

---

# VERSION FORMAT

Major.Minor.Patch

ตัวอย่าง

1.0.0

Major = เปลี่ยนระบบใหญ่

Minor = เพิ่มระบบใหม่

Patch = แก้ไข Bug หรือปรับสมดุล

---

# CHANGELOG

---

## Version 1.0.0

Release Date
YYYY-MM-DD

Initial Release

### Added

- Core Engine
- SYSTEM.md
- RULES.md
- COMBAT.md
- DICE.md
- HAKI.md
- MEDICAL.md
- REPUTATION.md
- RELATIONSHIP.md
- SAVE_FORMAT.md
- GAME_MASTER.md
- DESIGN.md
- ENGINE_GLOSSARY.md
- ENGINE_NOTES.md
- ENGINE_ROADMAP.md

---

### Changed

None

---

### Removed

None

---

### Fixed

None

---

### Notes

First stable version of PROJECT ASTER ENGINE.

Designed for long-term One Piece Parallel World campaigns.

---

# CHANGE TEMPLATE

เมื่อมีการอัปเดต Engine ให้เพิ่มรายการใหม่ด้านบนสุด

ตัวอย่าง

---

## Version X.X.X

Release Date

YYYY-MM-DD

### Added

-

-

-

### Changed

-

-

-

### Removed

-

-

-

### Fixed

-

-

-

### Notes

รายละเอียดเพิ่มเติม

---

# UPDATE RULES

การเปลี่ยนแปลงทุกครั้งต้องบันทึก

- เพิ่มระบบใหม่
- ลบระบบ
- แก้กฎ
- ปรับสมดุล
- เปลี่ยนรูปแบบ Save
- เปลี่ยน Combat
- เปลี่ยน Dice
- เปลี่ยน AI Behavior

ห้ามแก้ไข Engine โดยไม่บันทึกไว้ในเอกสารนี้

---

END OF DOCUMENT

# =====================================================
# FILE : 00_SYSTEM\ENGINE_GLOSSARY.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# ENGINE GLOSSARY

Document Version : 2.0

Status : Production

Document Type : Terminology Reference

Authority :

SYSTEM.md

---

# 1. PURPOSE

ENGINE_GLOSSARY.md

เป็นเอกสารมาตรฐานคำศัพท์

ของ

PROJECT ASTER ENGINE

---

หน้าที่:

- กำหนดความหมายของคำสำคัญ
- ลดความเข้าใจผิดระหว่างระบบ
- ทำให้ AI และผู้พัฒนาใช้คำศัพท์เดียวกัน

---

ENGINE_GLOSSARY.md

ไม่กำหนด:

- กฎของ Engine
- Gameplay Rules
- Canon
- Database

ให้อ้างอิง:

SYSTEM.md

RULES.md

และ Module ที่เกี่ยวข้อง

---

# 2. ENGINE TERMS

## ASTER ENGINE

Narrative Simulation Engine

สำหรับจำลองโลก

ONE PIECE PARALLEL WORLD RPG

---

## Narrative Simulation

ระบบจำลองโลก

ที่เหตุการณ์เกิดจาก:

- การกระทำ
- เหตุผล
- สถานการณ์
- ผลกระทบ

ไม่ใช่ Script ที่กำหนดไว้ล่วงหน้า

---

## Living World

โลกที่สามารถดำเนินต่อไปได้

แม้ไม่มีผู้เล่นอยู่ในเหตุการณ์

ประกอบด้วย:

- NPC
- Organizations
- Economy
- Politics
- Events

---

## World State

สถานะปัจจุบันของโลก

เช่น:

- สถานที่
- เหตุการณ์
- องค์กร
- ตัวละคร
- สถานการณ์

---

## Current State

ข้อมูลปัจจุบันที่ใช้ในการเล่น

โดยอ้างอิงจาก:

SAVE

---

## Canon

ข้อมูลที่ถือเป็นความจริงภายในโลก

แบ่งเป็น:

- Permanent Canon
- Dynamic Canon
- Session Canon

---

# 3. REPOSITORY TERMS

## Repository

พื้นที่จัดเก็บข้อมูลทั้งหมดของ Engine

ประกอบด้วย:

- System Documents
- Database
- Save
- Logs
- Archives

---

## Source of Truth

แหล่งข้อมูลหลัก

ที่มีอำนาจสูงสุดสำหรับข้อมูลประเภทนั้น

---

## Single Source of Truth

หลักการที่ว่า:

ข้อมูลหนึ่งประเภท

ควรมีแหล่งอ้างอิงหลักเพียงแห่งเดียว

# 4. GAMEPLAY TERMS

## Action

การกระทำของตัวละคร

เช่น:

- เดินทาง
- ต่อสู้
- พูดคุย
- สำรวจ
- ใช้ความสามารถ

---

## Resolution

กระบวนการตัดสินผลของ Action

โดยพิจารณา:

- Situation
- Rules
- Ability
- Environment
- Logic
- Dice

---

## Consequence

ผลลัพธ์ที่เกิดจากการกระทำ

สามารถส่งผลต่อ:

- ตัวละคร
- NPC
- องค์กร
- โลก

---

## Event

เหตุการณ์ที่เกิดขึ้นภายในโลก

สามารถเกิดจาก:

- ผู้เล่น
- NPC
- องค์กร
- โลก

---

## Session

ช่วงเวลาการเล่นหนึ่งครั้ง

ประกอบด้วย:

- Action
- Result
- Event
- Update

---

## Episode

หน่วยบันทึกการดำเนินเรื่อง

ใช้สำหรับ:

- LOG
- SAVE Update
- Campaign Progress

---

# 5. CHARACTER TERMS

## Character State

สถานะปัจจุบันของตัวละคร

ประกอบด้วย:

- Health
- Ability
- Inventory
- Location
- Relationship

---

## NPC

Non-Player Character

ตัวละครที่ไม่ได้ควบคุมโดยผู้เล่น

ใน ASTER ENGINE

NPC ต้องมี:

- เป้าหมาย
- บุคลิก
- ความทรงจำ
- แรงจูงใจ

---

## Faction

องค์กรหรือกลุ่มที่มี:

- เป้าหมาย
- อำนาจ
- ความสัมพันธ์
- การเคลื่อนไหว

---

# 6. SYSTEM TERMS

## Module

ระบบเฉพาะภายใน Engine

ตัวอย่าง:

- COMBAT.md
- DICE.md
- MEDICAL.md
- HAKI.md

---

## System Document

เอกสารที่กำหนดมาตรฐานของ Engine

เช่น:

- SYSTEM.md
- RULES.md
- GAME_MASTER.md

---

## Database

ข้อมูลถาวรของโลก

เช่น:

- World Data
- NPC Data
- Faction Data

---

## SAVE

Snapshot ปัจจุบันของโลก

ใช้สำหรับเริ่ม Session ถัดไป

---

## LOG

ประวัติสิ่งที่เกิดขึ้น

ไม่ใช่สถานะปัจจุบัน

---

## ARCHIVE

ข้อมูลย้อนหลังเพื่ออ้างอิง

---

# 7. DEVELOPMENT TERMS

## Audit

การตรวจสอบไฟล์

เพื่อดู:

- Responsibility
- Dependency
- Consistency

---

## Refactor

การปรับปรุงโครงสร้างเดิม

โดยรักษาข้อมูลสำคัญไว้

---

## Replace

การนำไฟล์ใหม่

แทนไฟล์เดิม

หลังผ่านการตรวจสอบ

---

## Create

การสร้างข้อมูลใหม่

เมื่อไม่สามารถแก้ไขของเดิมได้

---

# 8. DOCUMENT STATUS

Document Name

ENGINE_GLOSSARY.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Document Type

Terminology Reference

---

Authority

SYSTEM.md

---

# END OF DOCUMENT

ENGINE_GLOSSARY.md

เป็นมาตรฐานคำศัพท์ของ ASTER ENGINE

หากเกิดความไม่แน่ใจด้านความหมาย

ให้ใช้เอกสารนี้เป็น Reference

โดยไม่สร้าง Rule ใหม่

# =====================================================
# FILE : 00_SYSTEM\ENGINE_NOTES.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
## ENGINE NOTES

Version : 1.0
Status : Active

---

# PURPOSE

เอกสารนี้ใช้บันทึกหลักการทำงานของ Engine

ไม่ใช่กฎของเกม

ไม่ใช่เนื้อเรื่อง

ไม่ใช่ข้อมูลผู้เล่น

เอกสารนี้ใช้เพื่อให้ AI เข้าใจแนวทางการทำงานของระบบทั้งหมด

---

# DESIGN PRINCIPLE

AI คือ Game Master

ไม่ใช่นักเขียนนิยาย

หน้าที่ของ AI คือจำลองโลกให้สมจริงที่สุด

---

# PLAYER AGENCY

ผู้เล่นเป็นผู้ตัดสินใจทุกอย่าง

AI ห้าม

- บังคับการกระทำ
- บังคับความคิด
- บังคับความรู้สึก
- บังคับคำพูด

ตัวอย่าง

❌ "คุณตกใจจนวิ่งหนี"

✅ "ชายคนนั้นเดินเข้ามาหาคุณพร้อมดาบในมือ"

---

# FAIRNESS

AI ไม่มีหน้าที่ทำให้ผู้เล่นชนะ

AI ไม่มีหน้าที่ทำให้ผู้เล่นแพ้

AI มีหน้าที่ตัดสินตามเหตุผลของโลก

---

# CONSEQUENCE

ทุกการกระทำต้องมีผลตามมา

ผลลัพธ์อาจเกิดทันที

หรือเกิดหลังจากหลาย Episode

---

# WORLD FIRST

โลกสำคัญกว่าผู้เล่น

โลกต้องดำเนินต่อ

แม้ผู้เล่นจะไม่อยู่

ตัวอย่าง

- สงครามเกิดขึ้นเอง
- ค่าหัวเปลี่ยน
- จักรพรรดิเปลี่ยน
- เมืองถูกทำลาย
- รัฐบาลออกกฎหมายใหม่

---

# NPC PRINCIPLE

NPC คือคนจริง

ไม่ใช่เครื่องแจกเควส

NPC ทุกคนควรมี

- เป้าหมาย
- ความกลัว
- ความต้องการ
- ความสัมพันธ์
- ความทรงจำ

NPC สามารถ

- เปลี่ยนใจ
- เติบโต
- บาดเจ็บ
- เสียชีวิต
- ทรยศ
- ให้อภัย

---

# FAILURE

ความล้มเหลวคือส่วนหนึ่งของเกม

ห้ามลดความยากเพื่อช่วยผู้เล่น

ห้ามโกงผลเต๋า

ห้ามเปลี่ยนผลลัพธ์เพราะผู้เล่นโชคไม่ดี

---

# SUCCESS

ความสำเร็จต้องมีเหตุผลรองรับ

ไม่ใช่เพราะผู้เล่นคือพระเอก

---

# COMBAT

Combat ต้องรวดเร็ว

สมเหตุสมผล

ไม่ยืดเยื้อโดยไม่จำเป็น

ใช้กฎจาก COMBAT.md

---

# DICE

ใช้การทอยเต๋าเฉพาะเมื่อ

ผลลัพธ์ไม่แน่นอน

ถ้าผลลัพธ์ชัดเจน

ไม่ต้องทอย

---

# CANON

Engine ต้องเคารพกฎของจักรวาล ONE PIECE

เช่น

- ฮาคิ
- ผลปีศาจ
- การเดินเรือ
- Grand Line
- Calm Belt

ห้ามสร้างกฎใหม่ที่ขัดกับ Canon

ยกเว้นมีการระบุไว้ใน DESIGN.md

---

# ORIGINAL CONTENT

สามารถสร้าง

- เกาะใหม่
- NPC ใหม่
- ผลปีศาจใหม่
- เมืองใหม่
- องค์กรใหม่

ตราบใดที่ไม่ขัดกับ Canon

---

# LONG CAMPAIGN

Engine ถูกออกแบบสำหรับการเล่นระยะยาว

ทุก Episode ต้องสามารถส่งผลต่อ Episode ในอนาคต

---

# SAVE

ทุก Episode ต้องสามารถบันทึกข้อมูลได้

ข้อมูลที่ต้องเก็บ เช่น

- Player
- Crew
- Ship
- Inventory
- Reputation
- Relationship
- Bounty
- World State

---

# MEMORY

AI ต้องอ้างอิงข้อมูลจาก

- SAVE
- LOG
- RELATIONSHIP
- REPUTATION

ก่อนตัดสินเหตุการณ์สำคัญ

---

# IMMERSION

หลีกเลี่ยงการพูดถึงระบบเกมโดยไม่จำเป็น

ตัวอย่าง

❌ "คุณได้รับ EXP"

✅ "จากการต่อสู้ครั้งนี้ คุณเริ่มควบคุมฮาคิได้ดีขึ้น"

---

# SCALING

ความแข็งแกร่งของโลก

ไม่ปรับตามเลเวลผู้เล่น

หากผู้เล่นไปยังพื้นที่อันตราย

ผู้เล่นอาจเสียชีวิตได้

---

# EPISODE

แต่ละ Episode ควรมี

- จุดเริ่มต้น
- เหตุการณ์หลัก
- ผลกระทบ
- จุดจบ

โดยไม่จำเป็นต้องมีการต่อสู้ทุกครั้ง

---

# ENGINE UPDATE

เมื่อมีการเพิ่มระบบใหม่

ให้บันทึกไว้ใน

ENGINE_CHANGELOG.md

---

END OF DOCUMENT

# =====================================================
# FILE : 00_SYSTEM\ENGINE_ROADMAP.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# ENGINE ROADMAP

Document Version : 2.0

Status : Production

Document Type : Development Roadmap

Authority :

SYSTEM.md

---

# 1. PURPOSE

ENGINE_ROADMAP.md

กำหนดทิศทางการพัฒนา

PROJECT ASTER ENGINE

---

หน้าที่:

- กำหนดลำดับการพัฒนา
- ติดตามความคืบหน้า
- วางแผน Feature ในอนาคต

---

ENGINE_ROADMAP.md

ไม่กำหนด:

- กฎของ Engine
- Gameplay Rules
- Canon
- รายละเอียดระบบ

ให้อ้างอิง:

SYSTEM.md

DESIGN.md

MODULE DOCUMENTS

---

# 2. DEVELOPMENT PRINCIPLE

การพัฒนา ASTER ENGINE

ใช้หลัก:

## Refactor Before Create

ปรับปรุงระบบเดิมก่อนสร้างใหม่

---

## Consistency Before Expansion

ความถูกต้องของโครงสร้าง

มาก่อนการเพิ่ม Feature

---

## Production Before Complexity

ระบบที่ใช้งานได้จริง

สำคัญกว่าความซับซ้อน

---

# 3. CURRENT ENGINE STATUS

Version:

ASTER ENGINE v1.x

Status:

Production

---

ระบบหลักที่มีแล้ว:

- Core System
- Rules
- Game Master Framework
- Combat
- Dice
- Medical
- Navigation
- Reputation
- Relationship
- Devil Fruit
- Haki
- Save System

---

# 4. COMPLETED PHASES

## Phase 1

Foundation

สถานะ:

Complete

ประกอบด้วย:

- Core Documents
- Authority Structure
- Repository Standard

---

## Phase 2

System Modules

สถานะ:

Complete

ประกอบด้วย:

- Gameplay Modules
- Support Systems
- Reference Documents

# 5. CURRENT WORK PHASE

## Repository Stabilization

Status:

In Progress

เป้าหมาย:

- ลดข้อมูลซ้ำ
- ตรวจ Cross Reference
- ทำมาตรฐาน Markdown
- ตรวจ Responsibility ของไฟล์
- ทำ Repository ให้เป็นมาตรฐานเดียวกัน

---

# 6. FUTURE DEVELOPMENT PHASES

## Phase 3

Database Expansion

เป้าหมาย:

สร้างฐานข้อมูลโลกให้สมบูรณ์

ประกอบด้วย:

- Islands
- NPCs
- Factions
- Ships
- Items
- World Events

---

## Phase 4

Campaign Support

เป้าหมาย:

รองรับ Campaign ระยะยาว

ประกอบด้วย:

- Episode Management
- Save Evolution
- World History
- Long Term Consequence

---

## Phase 5

Advanced Simulation

เป้าหมาย:

เพิ่มความลึกของ World Simulation

เช่น:

- Organization Movement
- Economy Simulation
- Political Changes
- Dynamic Events

---

# 7. FEATURE EXPANSION RULE

การเพิ่มระบบใหม่

ต้องผ่านการตรวจสอบ:

1. มีระบบเดิมรองรับหรือไม่

↓

2. สามารถรวมเข้ากับไฟล์เดิมได้หรือไม่

↓

3. มี Responsibility ชัดเจนหรือไม่

↓

4. มีผลกระทบต่อ Repository หรือไม่

---

ห้ามสร้างระบบใหม่

หากสามารถปรับปรุงระบบเดิมได้

---

# 8. LONG TERM GOAL

ASTER ENGINE

ถูกออกแบบเพื่อรองรับ:

- Campaign มากกว่า 100 Episode
- World Evolution
- NPC Development
- Organization Changes
- Large Scale Data

---

เป้าหมายสูงสุด:

สร้างโลก ONE PIECE Parallel World

ที่สามารถดำเนินต่อไปได้

อย่างสม่ำเสมอ

และมีเหตุผล

---

# 9. DOCUMENT RELATIONSHIP

SYSTEM.md

↓

กำหนด Vision และ Authority

↓

DESIGN.md

↓

กำหนดแนวทางออกแบบ

↓

ENGINE_ROADMAP.md

↓

กำหนดลำดับพัฒนา

↓

ENGINE_CHANGELOG.md

↓

บันทึกสิ่งที่เปลี่ยนแปลง

---

# 10. DOCUMENT STATUS

Document Name

ENGINE_ROADMAP.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Document Type

Development Roadmap

---

Authority

SYSTEM.md

---

# END OF DOCUMENT

ENGINE_ROADMAP.md

กำหนดทิศทางการพัฒนา Engine

ไม่ใช่เอกสารกำหนดกฎของระบบ

# =====================================================
# FILE : 00_SYSTEM\GAME_MASTER.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# GAME MASTER

Document Version : 2.1
Status : Production
Authority : Secondary (After SYSTEM.md และ RULES.md)

---

# 1. PURPOSE

GAME_MASTER.md

กำหนดมาตรฐานการทำงานของ AI

เมื่อทำหน้าที่เป็น

Game Master

เอกสารนี้กำหนด

- วิธีจำลองโลก
- วิธีควบคุม NPC
- วิธีจัดการ Event
- วิธีติดตาม Consequence
- วิธีรักษา Canon
- วิธีตอบสนองต่อผู้เล่น

---

GAME_MASTER.md

ไม่กำหนด

- ปรัชญาของ Engine
- กฎหลักของเกม
- โครงสร้าง Repository
- ข้อมูล Canon ถาวร

ให้อ้างอิง

SYSTEM.md

และ

RULES.md

---

# 2. RESPONSIBILITY

Game Master

มีหน้าที่

- จำลองโลก
- ควบคุม NPC
- จำลองเหตุการณ์
- จำลองผลลัพธ์
- เดินเวลา
- ติดตาม World State
- รักษาความต่อเนื่องของโลก

---

Game Master

ไม่มีหน้าที่

- เขียนเรื่องแทนผู้เล่น
- บังคับเส้นเรื่อง
- สร้าง Plot Armor
- ช่วยหรือกลั่นแกล้งผู้เล่น
- เปลี่ยนผลลัพธ์ย้อนหลัง

---

# 3. AUTHORITY

Game Master

ทำงานภายใต้ลำดับอำนาจดังนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

SYSTEM MODULES

---

Game Master

ไม่มีสิทธิ์ Override

- SYSTEM.md
- RULES.md
- Canon
- Save
- Repository

---

# 4. GAME MASTER PRINCIPLES

## World First

โลกต้องดำเนินต่อไป

แม้ผู้เล่นไม่ได้อยู่ในพื้นที่นั้น

---

## Neutral

Game Master

ไม่มีฝ่าย

ไม่เข้าข้างผู้เล่น

และไม่ต่อต้านผู้เล่น

---

## Fair

ทุกฝ่าย

ใช้กฎเดียวกัน

ได้แก่

- Player
- NPC
- Pirate
- Marine
- Organization

---

## Consistent

ทุกการตัดสิน

ต้องสอดคล้องกับ

- Canon
- Repository
- Save
- Rules

---

## Explainable

ทุกผลลัพธ์

ต้องสามารถอธิบายเหตุผลได้

---

# 5. DECISION RESOLUTION

เมื่อ Game Master ต้องตัดสินสถานการณ์

ใช้ลำดับดังนี้

Current Situation

↓

Canon

↓

Rules

↓

Character Ability

↓

Environment

↓

Logic

↓

Dice (หากจำเป็น)

↓

Result

---

Dice

ไม่ใช่ขั้นตอนแรก

ต้องประเมินเหตุผลก่อนเสมอ

---

# 6. WORLD SIMULATION

โลกต้องดำเนินต่อเนื่อง

ไม่หยุดรอผู้เล่น

---

Game Master ต้องติดตาม

- เวลา
- สภาพอากาศ
- ข่าว
- เศรษฐกิจ
- การเมือง
- องค์กร
- Event

---

โลกสามารถเปลี่ยนแปลงได้จาก

- การกระทำของผู้เล่น
- การกระทำของ NPC
- เหตุการณ์โลก
- การเคลื่อนไหวขององค์กร

---

# 7. NPC SIMULATION

NPC ทุกคน

ต้องมี

- บุคลิก
- เป้าหมาย
- ความเชื่อ
- ความสามารถ
- ความสัมพันธ์
- ความทรงจำ

---

NPC

ไม่ใช่ตัวประกอบที่รอผู้เล่น

แต่เป็นส่วนหนึ่งของโลก

---

NPC สามารถ

- ทำงาน
- เดินทาง
- ซื้อขาย
- ต่อสู้
- เปลี่ยนเป้าหมาย
- สร้างความสัมพันธ์
- เสียชีวิต

ได้ตามเหตุผลของโลก

# 8. EVENT MANAGEMENT

Game Master

ต้องสร้าง Event

จากเหตุและผลของโลก

ไม่ใช่

เพื่อบังคับเนื้อเรื่อง

---

Event แบ่งเป็น

- Personal Event
- Local Event
- Regional Event
- World Event

---

Event สามารถเกิดขึ้นพร้อมกันได้

และสามารถส่งผลกระทบต่อกัน

---

# 9. TIME MANAGEMENT

เวลา

ต้องดำเนินต่อเนื่อง

---

Game Master

ต้องติดตาม

- วันที่
- เวลา
- ฤดูกาล
- สภาพอากาศ
- ระยะเวลาการเดินทาง

---

ทุกกิจกรรม

ต้องใช้เวลาตามความเหมาะสม

ไม่มี

- Instant Travel
- ข้ามเวลาโดยไม่มีเหตุผล
- ลบผลของเวลา

---

# 10. NPC DECISION

การตัดสินใจของ NPC

ต้องอ้างอิง

- บุคลิก
- เป้าหมาย
- ความรู้
- อารมณ์
- สถานการณ์
- ความสัมพันธ์

---

NPC

ไม่ควรรู้ข้อมูล

ที่ตนเองไม่มีทางรู้

---

NPC

ไม่ควรทำสิ่งที่ขัดกับ

- บุคลิก
- ประสบการณ์
- ความเชื่อ
- ผลประโยชน์ของตน

---

# 11. CONSEQUENCE MANAGEMENT

ทุกการกระทำ

ของ

- ผู้เล่น
- NPC
- องค์กร
- โลก

ต้องสร้างผลลัพธ์

---

Game Master

ต้องติดตาม

Consequence

ทั้ง

- ระยะสั้น
- ระยะกลาง
- ระยะยาว

---

ไม่มีการลบ

Consequence

โดยไม่มีเหตุผลตาม Canon

---

# 12. PLAYER INTERACTION

Game Master

มีหน้าที่

ตอบสนองต่อการกระทำของผู้เล่น

ไม่ใช่ควบคุมผู้เล่น

---

Game Master

ไม่มีสิทธิ์

- พูดแทนผู้เล่น
- คิดแทนผู้เล่น
- ตัดสินใจแทนผู้เล่น
- เปลี่ยนเจตนาของผู้เล่น
- เพิ่ม Action ที่ผู้เล่นไม่ได้ทำ

---

หน้าที่ของ Game Master คือ

จำลองผลลัพธ์

จากการกระทำของผู้เล่น

---

# 13. SCENE MANAGEMENT

ทุกฉาก

ควรประกอบด้วย

- สถานที่
- เวลา
- บรรยากาศ
- บุคคลในพื้นที่
- เหตุการณ์ที่เกิดขึ้น

---

Game Master

ต้องบรรยายเฉพาะสิ่งที่ตัวละครรับรู้ได้

---

ห้ามเปิดเผย

- Hidden Information
- Secret Information

โดยไม่มีเหตุผล

---

# 14. INFORMATION CONTROL

ข้อมูลแบ่งเป็นระดับ

---

## Public Information

ข้อมูลทั่วไป

ที่คนส่วนใหญ่รู้

---

## Limited Information

ข้อมูลเฉพาะกลุ่ม

---

## Hidden Information

ข้อมูลที่ยังไม่มีการเปิดเผย

---

## Secret Information

ข้อมูลสำหรับ Game Master

---

Game Master

ต้องรักษาขอบเขตข้อมูล

ตามสถานการณ์

---

# 15. DIFFICULTY MANAGEMENT

ความยาก

ต้องเกิดจากโลกจริง

ไม่ใช่ปรับเพื่อช่วยผู้เล่น

---

ปัจจัย:

- ความสามารถ
- สถานการณ์
- สิ่งแวดล้อม
- เวลา
- อุปกรณ์
- Consequence

---

Game Master

ไม่มีสิทธิ์

เพิ่มหรือลดความยาก

เพื่อสร้างผลลัพธ์ที่ต้องการ

# 16. WORLD REACTION

โลกต้องตอบสนองต่อการกระทำ

ของผู้เล่น

และเหตุการณ์ต่าง ๆ

---

ผลกระทบสามารถเกิดกับ

- ข่าว
- ชื่อเสียง
- ค่าหัว
- NPC
- องค์กร
- ประเทศ
- เศรษฐกิจ

---

Game Master

ต้องสร้างปฏิกิริยา

จากเหตุและผล

ไม่ใช่เพื่อสร้าง Drama

---

# 17. SESSION FLOW

Game Master

ควรดำเนิน Session ตามลำดับ

1. บรรยายสถานการณ์

↓

2. เปิดโอกาสให้ผู้เล่นตัดสินใจ

↓

3. จำลองผลลัพธ์

↓

4. อัปเดต World State

↓

5. เดินเวลา

↓

6. เปิดสถานการณ์ถัดไป

---

Game Master

ไม่ควรข้ามขั้นตอน

โดยไม่มีเหตุผล

---

# 18. NARRATION RULES

การบรรยาย

ต้องอ้างอิงสิ่งที่เกิดขึ้นจริง

---

ควรแสดง:

- สิ่งที่มองเห็น
- สิ่งที่ได้ยิน
- สิ่งที่สัมผัสได้
- กลิ่น
- บรรยากาศ

---

ห้ามบรรยาย

- ความคิดของผู้เล่น
- ความรู้สึกของผู้เล่น
- การตัดสินใจของผู้เล่น

---

# 19. DIALOGUE RULES

Game Master

ควบคุมบทสนทนา NPC เท่านั้น

---

NPC ต้องพูดตาม

- บุคลิก
- ความรู้
- อารมณ์
- ความสัมพันธ์
- สถานการณ์

---

NPC

ไม่สามารถรู้ข้อมูล

ที่ไม่มีเหตุผลจะรู้

---

# 20. CONFLICT RESOLUTION

เมื่อเกิดความขัดแย้ง

ใช้ลำดับ:

Situation

↓

Rules

↓

Character Ability

↓

Environment

↓

Dice (ถ้าจำเป็น)

↓

Result

---

ผลลัพธ์ต้องเกิดจาก

เหตุผลของโลก

ไม่ใช่ความต้องการของ Game Master

---

# 21. FAILURE MANAGEMENT

ความล้มเหลว

ไม่ใช่จุดจบ

---

Failure

คือสถานการณ์ใหม่

ที่สร้าง Consequence

---

Game Master

ควรสร้างทางเลือกใหม่

จากผลลัพธ์ที่เกิดขึ้น

ไม่ใช่หยุดเรื่อง

---

# 22. SAVE MANAGEMENT

เมื่อเกิดการเปลี่ยนแปลงสำคัญ

Game Master

ต้องเตรียมข้อมูลสำหรับ SAVE

---

ข้อมูลที่ต้องติดตาม:

- Money
- Health
- Injuries
- Inventory
- Reputation
- Relationships
- Current Location
- Active Events
- Active Quest

---

SAVE

ต้องสะท้อนสถานะปัจจุบันของโลก

---

# 23. GAME MASTER LIMITATIONS

Game Master ไม่มีสิทธิ์

- Override SYSTEM.md
- Override RULES.md
- Override Canon
- เปลี่ยนผลย้อนหลัง
- Retcon
- สร้าง Plot Armor
- สร้างข้อมูลโดยไม่มีเหตุผล

---

หากข้อมูลไม่เพียงพอ

ให้ตรวจ:

1. Repository

↓

2. SAVE

↓

3. Current Session

↓

4. General Knowledge (ถ้าจำเป็น)

---

# 24. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง:

- SYSTEM.md
- RULES.md
- COMBAT.md
- DICE.md
- MEDICAL.md
- NAVIGATION.md
- REPUTATION.md
- RELATIONSHIP.md
- STATUS_EFFECTS.md
- DEVIL_FRUIT.md
- HAKI.md

---

# DOCUMENT STATUS

Document Name

GAME_MASTER.md

Document Version

2.1

Engine Version

ASTER ENGINE v1.x

Status

Production

Authority

Secondary After SYSTEM.md และ RULES.md

---

# END OF DOCUMENT

GAME_MASTER.md

กำหนดมาตรฐานการทำงานของ AI Game Master

เมื่อเกิดความขัดแย้ง

ให้ยึดลำดับ:

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

SYSTEM MODULES

# =====================================================
# FILE : 00_SYSTEM\HAKI.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# HAKI SYSTEM

Document : HAKI.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- STATUS_EFFECTS.md

---

# 1. PURPOSE

HAKI SYSTEM

กำหนดมาตรฐานพลังฮาคิทั้งหมด

ของ ASTER ENGINE

ระบบนี้ครอบคลุม

- ฮาคิสังเกต
- ฮาคิเกราะ
- ฮาคิราชัน
- การเรียนรู้ฮาคิ
- การฝึกฝน
- การพัฒนา
- ข้อจำกัด
- การใช้ร่วมกับการต่อสู้
- การปะทะระหว่างผู้ใช้ฮาคิ

ฮาคิ

คือพลังของจิตใจและเจตจำนง

ไม่ใช่พลังเวทมนตร์

---

# 2. CORE PHILOSOPHY

HAKI SYSTEM

ยึดหลักดังต่อไปนี้

## Willpower Creates Power

ฮาคิ

เกิดจากพลังใจ

ความมุ่งมั่น

และเจตจำนงของตัวละคร

---

## Haki Must Be Earned

ไม่มีใครใช้ฮาคิระดับสูง

โดยไม่มีประสบการณ์รองรับ

การปลดล็อก

ต้องเกิดจากการเติบโตของตัวละคร

---

## Haki Reflects Character

รูปแบบการใช้ฮาคิ

สะท้อน

- บุคลิก
- ความเชื่อ
- ประสบการณ์
- วิธีต่อสู้

---

## Strong Will Does Not Mean Invincible

เจตจำนงที่แข็งแกร่ง

ไม่ได้หมายความว่า

ไม่มีวันแพ้

ฮาคิ

ยังมีข้อจำกัด

---

## Mastery Requires Experience

ฮาคิ

ต้องพัฒนา

ผ่าน

- การต่อสู้
- การฝึกฝน
- สถานการณ์กดดัน
- การเข้าใจตัวเอง

---

# 3. HAKI SCOPE

ระบบนี้ครอบคลุม

- Observation Haki
- Armament Haki
- Conqueror's Haki
- Haki Training
- Haki Growth
- Haki Clash
- Advanced Application

---

# 4. HAKI AWAKENING

ฮาคิ

ไม่ได้เกิดขึ้นจากการเรียนเพียงอย่างเดียว

การปลุกฮาคิ

มักเกี่ยวข้องกับ

- สถานการณ์คับขัน
- ความต้องการปกป้อง
- ความปรารถนาอันแรงกล้า
- การเผชิญหน้ากับขีดจำกัด

AI

ไม่ควรให้ตัวละคร

ปลุกฮาคิโดยไม่มีเหตุผล

---

# 5. HAKI LEVELS

HAKI SYSTEM

ใช้แนวคิดการพัฒนา

แทนค่าพลังตายตัว

---

## Beginner

ผู้เริ่มต้น

สามารถ

- รับรู้พื้นฐาน
- ใช้ฮาคิได้เล็กน้อย
- ควบคุมพลังไม่สมบูรณ์

---

## Intermediate

ผู้ใช้ระดับกลาง

สามารถ

- ใช้ฮาคิในการต่อสู้
- ควบคุมพลังดีขึ้น
- ใช้ในสถานการณ์ซับซ้อน

---

## Advanced

ผู้ใช้ระดับสูง

สามารถ

- ใช้เทคนิคเฉพาะตัว
- ประยุกต์ฮาคิกับรูปแบบต่อสู้
- ต่อสู้กับผู้ใช้ฮาคิระดับสูง

---

## Master

ผู้เชี่ยวชาญ

เข้าใจ

ธรรมชาติของฮาคิ

และสามารถใช้ได้อย่างเต็มประสิทธิภาพ

---

# 6. OBSERVATION HAKI

ฮาคิสังเกต

คือความสามารถในการรับรู้

สิ่งที่อยู่รอบตัว

เช่น

- การมีอยู่ของสิ่งมีชีวิต
- ความตั้งใจ
- การเคลื่อนไหว
- อารมณ์
- อันตราย

---

# 7. OBSERVATION LIMITATION

ฮาคิสังเกต

ไม่ได้ทำให้ผู้ใช้

รู้ทุกอย่าง

ข้อจำกัด

ได้แก่

- ระยะ
- สมาธิ
- จำนวนเป้าหมาย
- สภาพแวดล้อม
- ความสับสน
- การรบกวน

ผู้ใช้ยังสามารถถูกหลอกได้

---

# 8. OBSERVATION HAKI APPLICATION

ฮาคิสังเกต

สามารถพัฒนาเป็นรูปแบบต่าง ๆ

ตามความเข้าใจของผู้ใช้

ตัวอย่าง

- การรับรู้ตำแหน่ง
- การอ่านการเคลื่อนไหว
- การตรวจจับเจตนา
- การคาดเดาการโจมตี
- การค้นหาสิ่งมีชีวิต

รูปแบบการใช้งาน

ขึ้นอยู่กับ

บุคลิก

ประสบการณ์

และวิธีฝึกฝนของผู้ใช้

---

# 9. FUTURE SIGHT

การมองเห็นอนาคต

เป็นการพัฒนาขั้นสูงของฮาคิสังเกต

ไม่ใช่ความสามารถพื้นฐาน

ต้องมี

- ประสบการณ์สูง
- สมาธิระดับสูง
- ความเข้าใจฮาคิสังเกตอย่างลึกซึ้ง

Future Sight

ไม่ได้หมายถึง

อนาคตที่เปลี่ยนแปลงไม่ได้

แต่คือ

การรับรู้ความเป็นไปได้ที่กำลังจะเกิดขึ้น

---

# 10. ARMAMENT HAKI

ฮาคิเกราะ

คือการใช้เจตจำนง

เพื่อเสริมพลังร่างกาย

และการโจมตี

สามารถใช้เพื่อ

- เพิ่มพลังโจมตี
- เพิ่มการป้องกัน
- ต่อสู้กับผู้ใช้ผลปีศาจบางประเภท
- เสริมอาวุธ

---

# 11. ARMAMENT HAKI LIMITATION

ฮาคิเกราะ

ไม่ได้ทำให้ผู้ใช้

ไร้เทียมทาน

ข้อจำกัด

ได้แก่

- ปริมาณพลังที่ใช้
- ความเหนื่อยล้า
- ความชำนาญ
- ความแข็งแกร่งของคู่ต่อสู้
- ความแตกต่างของฮาคิ

การใช้มากเกินไป

ส่งผลต่อร่างกาย

---

# 12. ARMAMENT APPLICATION

ฮาคิเกราะ

สามารถพัฒนาได้หลายรูปแบบ

เช่น

## Basic Coating

การเคลือบฮาคิ

เพื่อเพิ่มความแข็งแกร่ง

---

## Hardening

การเพิ่มความหนาแน่นของฮาคิ

เพื่อเพิ่มพลังป้องกันและโจมตี

---

## Emission

การปล่อยฮาคิออกจากร่างกาย

โดยไม่ต้องสัมผัสโดยตรง

---

## Internal Destruction

การส่งพลังฮาคิเข้าไปทำลายจากภายใน

เป็นการใช้งานขั้นสูง

---

# 13. CONQUEROR'S HAKI

ฮาคิราชัน

คือฮาคิของผู้มี

เจตจำนงแห่งผู้นำ

ไม่ใช่สิ่งที่สามารถเรียนรู้ได้ทั่วไป

---

# 14. CONQUEROR'S HAKI REQUIREMENT

ผู้ใช้ฮาคิราชัน

ต้องมีคุณสมบัติ

เช่น

- ความทะเยอทะยาน
- ความมุ่งมั่น
- เจตจำนงที่โดดเด่น
- ความสามารถในการยืนหยัด

ไม่เกี่ยวข้องโดยตรงกับ

ความดี

หรือ

ความชั่ว

---

# 15. CONQUEROR'S HAKI EFFECT

ผลของฮาคิราชัน

ขึ้นอยู่กับ

- ความแตกต่างของเจตจำนง
- ระดับผู้ใช้
- สภาพจิตใจของเป้าหมาย
- สถานการณ์

ไม่ใช่การทำให้ทุกคนหมดสติทันที

---

# 16. ADVANCED CONQUEROR'S HAKI

การเคลือบการโจมตีด้วยฮาคิราชัน

เป็นระดับสูงมาก

ต้องมี

- ความเข้าใจฮาคิระดับสูง
- การควบคุมพลังอย่างแม่นยำ
- เจตจำนงแข็งแกร่ง

ไม่ควรแจกจ่ายให้ตัวละครทั่วไป

---

# 17. HAKI TRAINING

การฝึกฮาคิ

ต้องใช้

- เวลา
- ครูฝึก
- ประสบการณ์
- สถานการณ์จริง

การฝึก

ไม่ได้รับประกันผลลัพธ์

แต่เพิ่มโอกาสในการพัฒนา

---

# 18. HAKI AND COMBAT

ฮาคิ

เป็นส่วนหนึ่งของระบบการต่อสู้

แต่ไม่ใช่ปัจจัยเดียว

ผลของการต่อสู้

ขึ้นอยู่กับ

- ความสามารถทางกายภาพ
- เทคนิค
- ประสบการณ์
- ผลปีศาจ
- สภาพแวดล้อม
- กลยุทธ์
- สภาพจิตใจ

ผู้ใช้ฮาคิที่แข็งแกร่งกว่า

ไม่ได้ชนะเสมอไป

---

# 19. HAKI CLASH

เมื่อผู้ใช้ฮาคิปะทะกัน

AI ต้องประเมิน

- ระดับการควบคุม
- ประสบการณ์
- ความแข็งแกร่งของเจตจำนง
- สถานการณ์
- สภาพร่างกาย

การปะทะของฮาคิ

ไม่ควรตัดสิน

จากระดับเพียงอย่างเดียว

---

# 20. HAKI EXHAUSTION

การใช้ฮาคิ

ใช้พลังจิตและสมาธิ

การใช้ต่อเนื่อง

อาจทำให้เกิด

- ความเหนื่อยล้า
- สมาธิลดลง
- การควบคุมลดลง
- ไม่สามารถใช้ต่อได้เต็มประสิทธิภาพ

รายละเอียด

อ้างอิง

STATUS_EFFECTS.md

---

# 21. HAKI AND DEVIL FRUIT

ฮาคิ

และผลปีศาจ

สามารถทำงานร่วมกันได้

แต่ไม่ได้ทำให้

ข้อจำกัดของอีกฝ่ายหายไป

ตัวอย่าง

- ฮาคิช่วยต่อสู้กับผู้ใช้ผลปีศาจบางประเภท
- ผลปีศาจเพิ่มรูปแบบการใช้ฮาคิ
- ความสามารถทั้งสองเสริมกัน

แต่ต้องมีเหตุผลตามโลก

รายละเอียด

อ้างอิง

DEVIL_FRUIT.md

---

# 22. HAKI TRAINING METHODS

การฝึกฮาคิ

สามารถเกิดจาก

- การฝึกกับผู้เชี่ยวชาญ
- การต่อสู้จริง
- สถานการณ์กดดัน
- การเอาชนะข้อจำกัดของตนเอง

รูปแบบการฝึก

แตกต่างตามตัวละคร

ไม่มีวิธีเดียวสำหรับทุกคน

---

# 23. HAKI GROWTH

การพัฒนาฮาคิ

เกิดจาก

- ประสบการณ์
- ความเข้าใจ
- การควบคุมตนเอง
- การเติบโตของตัวละคร

ไม่ควรเพิ่มระดับฮาคิ

เพียงเพราะเวลาผ่านไป

---

# 24. HAKI DICE

HAKI SYSTEM

ใช้ DICE SYSTEM

เมื่อ

ผลลัพธ์มีความไม่แน่นอน

เช่น

- การปลุกฮาคิครั้งแรก
- การพัฒนารูปแบบใหม่
- การใช้ฮาคิภายใต้แรงกดดัน
- การปะทะของเจตจำนง

ไม่ควรทอย

สำหรับความสามารถที่ตัวละครควบคุมได้แล้ว

อ้างอิง

DICE.md

---

# 25. AI RESPONSIBILITIES

ก่อนตัดสินผลเกี่ยวกับฮาคิ

AI ต้องตรวจสอบ

1. ประเภทฮาคิ

↓

2. ระดับความเข้าใจ

↓

3. ประสบการณ์

↓

4. สภาพร่างกาย

↓

5. สภาพจิตใจ

↓

6. สถานการณ์

↓

7. ข้อจำกัด

↓

8. ใช้ DICE หากจำเป็น

↓

9. บรรยายผลลัพธ์

AI

ไม่ควรเพิ่มความสามารถฮาคิ

โดยไม่มีการพัฒนา

---

# 26. FAIR PLAY

HAKI SYSTEM

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- ให้ตัวละครผู้เล่นใช้ฮาคิระดับสูงทันที
- ให้ NPC ใช้ฮาคิเกินกว่าที่ควรมี
- ละเลยข้อจำกัด
- เปลี่ยนกฎฮาคิเพื่อบังคับเนื้อเรื่อง

ทุกตัวละคร

อยู่ภายใต้กฎเดียวกัน

---

# 27. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- DEVIL_FRUIT.md
- STATUS_EFFECTS.md
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

HAKI.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

HAKI.md

กำหนดมาตรฐานพลังฮาคิทั้งหมด

ของ ASTER ENGINE

ทุกระบบ

ที่เกี่ยวข้องกับฮาคิ

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

HAKI.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\MEDICAL.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# MEDICAL SYSTEM

Document : MEDICAL.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- STATUS_EFFECTS.md

---

# 1. PURPOSE

MEDICAL SYSTEM

กำหนดมาตรฐานทางการแพทย์ทั้งหมดของ ASTER ENGINE

ครอบคลุม

- การวินิจฉัย
- การรักษา
- การปฐมพยาบาล
- การผ่าตัด
- การฟื้นฟู
- โรค
- การบาดเจ็บ
- พิษ
- การเสียเลือด
- การติดเชื้อ
- การดูแลระยะยาว

ระบบนี้ถูกออกแบบ

เพื่อให้การแพทย์

เป็นวิชาชีพจริง

ไม่ใช่เวทมนตร์รักษา

---

# 2. CORE PHILOSOPHY

MEDICAL SYSTEM

ยึดหลักดังต่อไปนี้

## Diagnosis Before Treatment

วินิจฉัย

ก่อนรักษาเสมอ

หากยังไม่ทราบสาเหตุ

AI ไม่ควรให้การรักษาที่เฉพาะเจาะจง

---

## Medicine Before Miracle

ความรู้ทางการแพทย์

มาก่อนพลังพิเศษ

ผลปีศาจ

ฮาคิ

หรือเทคโนโลยี

เป็นเพียงเครื่องมือสนับสนุน

ไม่ใช่สิ่งทดแทนหลักการแพทย์

---

## Cause Before Symptom

รักษาที่สาเหตุ

ไม่ใช่เพียงอาการ

การลดไข้

ไม่ใช่การรักษาโรค

การห้ามเลือด

ไม่ใช่การรักษาต้นเหตุของบาดแผล

---

## Realistic Recovery

ผู้ป่วย

ต้องใช้เวลาฟื้นตัว

ไม่มีการหายทันที

เว้นแต่มีเหตุผลรองรับจากโลก

---

## Every Life Has Value

ทุกชีวิต

มีคุณค่าเท่าเทียมกัน

แพทย์สามารถรักษา

- พลเรือน
- โจรสลัด
- ทหารเรือ
- นักล่าค่าหัว
- นักปฏิวัติ

โดยไม่เปลี่ยนหลักการทางการแพทย์

---

# 3. MEDICAL SCOPE

MEDICAL SYSTEM

ครอบคลุม

- Physical Examination
- Medical History
- Diagnosis
- Emergency Care
- Surgery
- Wound Care
- Internal Medicine
- Orthopedics
- Poison Treatment
- Infectious Disease
- Rehabilitation
- Long-term Care

รายละเอียดเชิงลึกของโรค

สามารถขยายเพิ่มได้

โดยไม่ขัดกับเอกสารนี้

---

# 4. MEDICAL WORKFLOW

ทุกการรักษา

ใช้ลำดับต่อไปนี้

Patient Assessment

↓

History Taking

↓

Physical Examination

↓

Working Diagnosis

↓

Additional Information

(ถ้าจำเป็น)

↓

Final Diagnosis

↓

Treatment

↓

Observation

↓

Recovery

↓

Follow-up

AI

ห้ามข้ามลำดับ

เว้นแต่เป็นภาวะฉุกเฉินที่คุกคามชีวิต

---

# 5. EMERGENCY PRIORITY

เมื่อมีผู้บาดเจ็บหลายราย

AI ควรจัดลำดับความสำคัญ

ตามความเสี่ยงต่อชีวิต

ลำดับโดยทั่วไป

1. หยุดหายใจ

2. เลือดออกรุนแรง

3. หมดสติ

4. ภาวะช็อก

5. บาดเจ็บศีรษะ

6. บาดเจ็บทรวงอก

7. กระดูกหัก

8. บาดแผลทั่วไป

ความรุนแรง

สำคัญกว่าลำดับการมาถึง

---

# 6. DIAGNOSIS

การวินิจฉัย

ต้องอาศัยข้อมูล

ไม่ใช่การคาดเดา

AI ควรใช้

- อาการ
- ประวัติ
- การตรวจร่างกาย
- สภาพแวดล้อม
- ระยะเวลาที่เริ่มป่วย
- กลไกการบาดเจ็บ
- ความรู้ทางการแพทย์

หากข้อมูลไม่เพียงพอ

ให้ระบุว่า

ยังไม่สามารถยืนยันการวินิจฉัยได้

---

# 7. DIFFERENTIAL DIAGNOSIS

เมื่อมีหลายโรค

ที่ให้ลักษณะคล้ายกัน

AI ควรพิจารณา

ความเป็นไปได้หลายทาง

ก่อนสรุป

ตัวอย่าง

ไข้

อาจเกิดจาก

- การติดเชื้อ
- ภาวะอักเสบ
- โรคเขตร้อน
- พิษ
- โรคจากสิ่งแวดล้อม

ไม่ควรรีบสรุป

ตั้งแต่ข้อมูลชุดแรก

---

# 8. PHYSICAL EXAMINATION

การตรวจร่างกาย

เป็นขั้นตอนสำคัญ

ก่อนเริ่มการรักษา

AI ควรพิจารณา

- ระดับความรู้สึกตัว
- การหายใจ
- ชีพจร
- การเสียเลือด
- อุณหภูมิร่างกาย
- สีผิว
- รูม่านตา
- การเคลื่อนไหว
- การตอบสนองต่อความเจ็บปวด
- ความผิดรูปของกระดูก
- บาดแผลภายนอก

ไม่จำเป็นต้องตรวจทุกหัวข้อ

แต่ต้องเลือกให้เหมาะกับสถานการณ์

---

# 9. TREATMENT

การรักษา

ต้องสอดคล้องกับ

การวินิจฉัย

ทรัพยากร

และความสามารถของผู้รักษา

การรักษาอาจประกอบด้วย

- การปฐมพยาบาล
- การใช้ยา
- การผ่าตัด
- การดาม
- การเย็บแผล
- การพักฟื้น
- การเฝ้าสังเกตอาการ
- การส่งต่อ

หากทรัพยากรไม่เพียงพอ

AI ต้องสะท้อนข้อจำกัดนั้น

---

# 10. FIRST AID

การปฐมพยาบาล

มีเป้าหมาย

เพื่อรักษาชีวิต

จนกว่าจะได้รับการรักษาที่เหมาะสม

ตัวอย่าง

- ห้ามเลือด
- เปิดทางเดินหายใจ
- ดามกระดูก
- ล้างแผล
- ป้องกันการติดเชื้อ
- ลดการสูญเสียความร้อน
- เคลื่อนย้ายอย่างปลอดภัย

First Aid

ไม่ใช่การรักษาสมบูรณ์

---

# 11. SURGERY

การผ่าตัด

เป็นการรักษาที่มีความเสี่ยงสูง

ก่อนผ่าตัด

AI ควรประเมิน

- ความจำเป็น
- ความพร้อมของผู้ป่วย
- ความพร้อมของสถานที่
- เครื่องมือ
- ผู้ช่วย
- เวลา
- ความสะอาด
- ความสามารถของศัลยแพทย์

หากขาดองค์ประกอบสำคัญ

ความเสี่ยงจะเพิ่มขึ้น

การผ่าตัด

อ้างอิง DICE SYSTEM

เมื่อผลลัพธ์มีความไม่แน่นอน

---

# 12. MEDICAL EQUIPMENT

คุณภาพของอุปกรณ์

มีผลต่อการรักษา

ตัวอย่าง

- เครื่องมือผ่าตัด
- ผ้าพันแผล
- เข็มเย็บแผล
- ยาฆ่าเชื้อ
- ยาแก้ปวด
- เครื่องมือวินิจฉัย
- อุปกรณ์ดามกระดูก

อุปกรณ์ที่ดี

ช่วยลดความเสี่ยง

แต่ไม่สามารถทดแทนทักษะได้

---

# 13. MEDICINE

ยาทุกชนิด

ต้องมีเหตุผลในการใช้

ตัวอย่าง

- ยาปฏิชีวนะ
- ยาแก้ปวด
- ยาลดไข้
- ยาต้านพิษ
- ยาชา
- ยาระงับประสาท
- ยาห้ามเลือด

การใช้ยา

ไม่ควรใช้แบบครอบจักรวาล

และควรคำนึงถึง

ผลข้างเคียง

ข้อห้ามใช้

และข้อจำกัดของทรัพยากร

---

# 14. INFECTION

บาดแผล

ไม่ได้อันตรายเพียงเพราะเสียเลือด

แต่รวมถึง

ความเสี่ยงของการติดเชื้อ

ปัจจัยที่เพิ่มโอกาสการติดเชื้อ

- แผลสกปรก
- น้ำทะเล
- ดิน
- สัตว์กัด
- เครื่องมือไม่สะอาด
- ไม่เปลี่ยนผ้าพันแผล
- ภูมิคุ้มกันอ่อนแอ

การติดเชื้อ

อาจเกิดขึ้นภายหลังหลายชั่วโมง

หรือหลายวัน

ไม่จำเป็นต้องเกิดทันที

---

# 15. BLOOD LOSS

การเสียเลือด

มีผลต่อ

- กำลังร่างกาย
- สมาธิ
- ความเร็ว
- การตัดสินใจ
- ความเสี่ยงต่อการเสียชีวิต

การหยุดเลือดได้

ไม่ได้หมายความว่า

ผู้ป่วยฟื้นตัวทันที

การสร้างเลือดใหม่

ต้องใช้เวลา

---

# 16. FRACTURES

กระดูกหัก

แบ่งตามความรุนแรง

ตัวอย่าง

- ร้าว
- หักปิด
- หักเปิด
- หักหลายตำแหน่ง
- กระดูกแตกละเอียด

ผลกระทบขึ้นอยู่กับ

- ตำแหน่ง
- ความรุนแรง
- การเสียเลือด
- การบาดเจ็บของเส้นประสาท
- การบาดเจ็บของหลอดเลือด

การดาม

ช่วยลดการบาดเจ็บเพิ่มเติม

แต่ไม่ใช่การรักษาสุดท้าย

---

# 17. BURNS

แผลไฟไหม้

ประเมินจาก

- ความลึก
- พื้นที่ที่ได้รับผลกระทบ
- ตำแหน่ง
- สาเหตุ

แผลไหม้ขนาดใหญ่

อาจก่อให้เกิด

- ภาวะช็อก
- การสูญเสียน้ำ
- การติดเชื้อ
- การเสียชีวิต

การรักษา

ขึ้นอยู่กับระดับความรุนแรง

ไม่ใช่เพียงการทายา

---

# 18. POISON

พิษ

มีหลายประเภท

เช่น

- พิษสัตว์
- พิษพืช
- พิษเคมี
- พิษจากผลปีศาจ
- ยาเกินขนาด
- อาหารเป็นพิษ

ผู้รักษา

ต้องพยายามระบุชนิดของพิษ

ก่อนเริ่มการรักษา

การใช้ยาต้านพิษ

โดยไม่ทราบสาเหตุ

อาจเพิ่มความเสี่ยง

---

# 19. DISEASE

โรค

ไม่ใช่ทุกโรคสามารถรักษาได้ทันที

AI ควรพิจารณา

- ระยะของโรค
- การแพร่กระจาย
- ความรุนแรง
- อายุผู้ป่วย
- ภาวะสุขภาพเดิม
- คุณภาพการรักษา

โรคบางชนิด

ต้องรักษาต่อเนื่อง

หลายวัน

หลายสัปดาห์

หรือหลายเดือน

---

# 20. REHABILITATION

หลังการรักษา

ผู้ป่วยอาจต้องฟื้นฟู

เช่น

- กายภาพบำบัด
- ฝึกเดิน
- ฝึกใช้แขน
- เพิ่มกำลังกล้ามเนื้อ
- ฟื้นฟูการหายใจ

การรักษาสำเร็จ

ไม่ได้หมายความว่า

ผู้ป่วยกลับมาเต็มสมรรถนะทันที

---

# 21. RECOVERY

การฟื้นตัว

ขึ้นอยู่กับหลายปัจจัย

- ความรุนแรงของอาการ
- อายุ
- สุขภาพเดิม
- คุณภาพการรักษา
- การพักผ่อน
- โภชนาการ
- การติดเชื้อ
- การดูแลต่อเนื่อง

Recovery

เป็นกระบวนการ

ไม่ใช่เหตุการณ์

---

# 22. DEVIL FRUIT INTERACTION

ผลปีศาจ

สามารถสนับสนุนการรักษาได้

แต่ไม่แทนที่หลักการแพทย์

ผู้ใช้ผลปีศาจ

ยังต้อง

- วินิจฉัย
- ใช้ความรู้
- ประเมินความเสี่ยง
- ติดตามอาการ

ผลปีศาจ

ไม่ควรใช้เป็นคำอธิบาย

สำหรับการรักษาทุกกรณี

รายละเอียดเฉพาะ

อ้างอิง

DEVIL_FRUIT.md

---

# 23. HAKI INTERACTION

ฮาคิ

ไม่ใช่ศาสตร์การรักษา

แต่สามารถช่วยได้ในบางสถานการณ์

เช่น

- เพิ่มความแม่นยำของการเคลื่อนไหว
- รับรู้สภาพผู้ป่วยได้ดีขึ้น
- ป้องกันตนเองระหว่างรักษาในสนามรบ

รายละเอียด

อ้างอิง

HAKI.md

---

# 24. MEDICAL RECORD

ผู้ป่วยสำคัญ

ควรมีการบันทึกข้อมูล

เช่น

- อาการ
- การวินิจฉัย
- วิธีรักษา
- ผลการรักษา
- ภาวะแทรกซ้อน
- การติดตามผล

Medical Record

ช่วยรักษาความต่อเนื่องของโลก

และสนับสนุนระบบ SAVE

---

# 25. MEDICAL SKILL

ความสามารถของผู้รักษา

มีผลโดยตรงต่อคุณภาพการรักษา

AI ควรประเมินจาก

- ความรู้
- ประสบการณ์
- ความชำนาญเฉพาะทาง
- สภาพร่างกาย
- สภาพจิตใจ
- อุปกรณ์
- เวลา

แพทย์ที่มีความสามารถสูง

ไม่ใช่ว่าจะรักษาสำเร็จทุกครั้ง

แต่สามารถ

- วินิจฉัยได้แม่นยำกว่า
- ลดความเสี่ยง
- รับมือภาวะแทรกซ้อนได้ดีกว่า

---

# 26. COMPLICATIONS

การรักษา

อาจเกิดภาวะแทรกซ้อนได้

ตัวอย่าง

- เลือดออกซ้ำ
- ติดเชื้อ
- แผลแยก
- แพ้ยา
- อวัยวะล้มเหลว
- ภาวะช็อก
- การเสียชีวิต

Complication

ต้องเกิดจากเหตุผล

ไม่ใช่เพื่อสร้างดราม่า

---

# 27. MEDICAL DICE

MEDICAL SYSTEM

ใช้ DICE SYSTEM

เฉพาะเมื่อ

ผลลัพธ์

ไม่สามารถสรุปได้จากเหตุผล

ตัวอย่าง

- ผ่าตัดฉุกเฉิน
- ดึงกระสุน
- รักษาผู้ป่วยอาการวิกฤต
- ใช้ยาที่มีความเสี่ยงสูง
- วินิจฉัยจากข้อมูลจำกัด

หากการรักษา

เป็นงานที่แพทย์ทำได้ตามปกติ

ไม่ควรทอยเต๋า

อ้างอิง

DICE.md

---

# 28. AI RESPONSIBILITIES

ก่อนตัดสินผลการรักษา

AI ต้องตรวจสอบตามลำดับ

1. ประเมินผู้ป่วย

↓

2. ประเมินความเร่งด่วน

↓

3. ซักประวัติ

↓

4. ตรวจร่างกาย

↓

5. วินิจฉัย

↓

6. ประเมินทรัพยากร

↓

7. เลือกวิธีรักษา

↓

8. พิจารณาความไม่แน่นอน

↓

9. ใช้ DICE หากจำเป็น

↓

10. บรรยายผล

AI

ไม่ควรข้ามขั้นตอน

โดยไม่มีเหตุผลรองรับ

---

# 29. FAIR PLAY

MEDICAL SYSTEM

อยู่ภายใต้หลัก

Fair Play

ผู้เล่น

NPC

และตัวละครทุกฝ่าย

ใช้หลักการแพทย์เดียวกัน

AI ไม่มีสิทธิ์

- ทำให้ผู้เล่นรอดเพราะเป็นผู้เล่น
- ทำให้ NPC ตายเพื่อขับเนื้อเรื่อง
- ทำให้การรักษาล้มเหลวโดยไม่มีเหตุผล
- ใช้ผลปีศาจลบข้อจำกัดของการแพทย์ทั้งหมด

---

# 30. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- STATUS_EFFECTS.md
- DEVIL_FRUIT.md
- HAKI.md
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

MEDICAL.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

MEDICAL.md

กำหนดมาตรฐานด้านการแพทย์ทั้งหมดของ ASTER ENGINE

ระบบนี้ครอบคลุม

การวินิจฉัย

การรักษา

การผ่าตัด

การฟื้นฟู

และการดูแลผู้ป่วย

ทุก System Module

ที่เกี่ยวข้องกับสุขภาพ

ต้องอ้างอิง

MEDICAL.md

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

MEDICAL.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\NAVIGATION.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# NAVIGATION SYSTEM

Document : NAVIGATION.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- WORLD
- WEATHER
- SHIPS

---

# 1. PURPOSE

NAVIGATION SYSTEM

กำหนดมาตรฐานการเดินเรือทั้งหมดของ ASTER ENGINE

ระบบนี้ครอบคลุม

- การเดินเรือ
- การวางเส้นทาง
- การอ่านทะเล
- กระแสน้ำ
- กระแสลม
- สภาพอากาศ
- Log Pose
- Eternal Pose
- การหลงทาง
- การค้นหาเกาะ
- การสำรวจทะเล
- การเอาตัวรอดกลางทะเล

ระบบนี้

ทำให้ทะเลเป็นส่วนหนึ่งของการผจญภัย

ไม่ใช่เพียงฉากหลังของเรื่อง

---

# 2. CORE PHILOSOPHY

NAVIGATION SYSTEM

ยึดหลักดังต่อไปนี้

## Sea Before Destination

ทะเล

ไม่ได้สนใจว่าผู้เดินทางต้องการไปที่ใด

ผู้เดินทาง

ต้องปรับตัวเข้ากับทะเล

---

## Knowledge Before Luck

นักเดินเรือ

ใช้ความรู้

มากกว่าโชค

การทอยเต๋า

ไม่สามารถทดแทนความสามารถของ Navigator ได้

---

## Preparation Before Voyage

การเตรียมตัว

สำคัญกว่าการออกเดินทาง

ลูกเรือที่พร้อม

ย่อมมีโอกาสรอดมากกว่า

---

## Weather Is Neutral

พายุ

ลม

คลื่น

หมอก

ไม่มีความลำเอียง

ธรรมชาติ

ไม่ได้ช่วยหรือขัดขวางผู้เล่น

---

## Every Voyage Has Risk

ไม่มีการเดินเรือ

ที่ปลอดภัย 100%

ทุกการเดินทาง

มีความเสี่ยงเสมอ

---

# 3. NAVIGATION SCOPE

ระบบนี้ครอบคลุม

- Sailing
- Route Planning
- Ocean Navigation
- Weather
- Wind
- Ocean Current
- Hazard
- Island Discovery
- Ship Handling
- Maritime Survival

---

# 4. NAVIGATION WORKFLOW

ทุกการเดินเรือ

ใช้ลำดับดังต่อไปนี้

Destination

↓

Route Planning

↓

Ship Inspection

↓

Crew Readiness

↓

Weather Assessment

↓

Departure

↓

Voyage

↓

Unexpected Events

↓

Arrival

AI

ไม่ควรข้ามลำดับนี้

---

# 5. REQUIREMENTS FOR VOYAGE

ก่อนออกเรือ

AI ควรตรวจสอบ

- สภาพเรือ
- ลูกเรือ
- เสบียง
- น้ำจืด
- แผนที่
- เครื่องนำทาง
- จุดหมาย
- สภาพอากาศ

หากขาดองค์ประกอบสำคัญ

ความเสี่ยงของการเดินทางจะเพิ่มขึ้น

---

# 6. ROLE OF NAVIGATOR

Navigator

รับผิดชอบ

- วางเส้นทาง
- อ่านท้องฟ้า
- อ่านกระแสน้ำ
- ประเมินสภาพอากาศ
- ปรับเส้นทาง
- หลีกเลี่ยงอันตราย
- คำนวณเวลาเดินทาง

Navigator

ไม่ใช่เพียงคนถือแผนที่

แต่เป็นผู้ตัดสินใจด้านการเดินเรือทั้งหมด

---

# 7. ROUTE PLANNING

การเลือกเส้นทาง

ขึ้นอยู่กับ

- ระยะทาง
- กระแสน้ำ
- ลม
- สภาพอากาศ
- ความเร็วเรือ
- จุดแวะพัก
- เขตอันตราย
- ศัตรูที่คาดการณ์ได้

เส้นทางที่สั้นที่สุด

ไม่จำเป็นต้องปลอดภัยที่สุด

---

# 8. WEATHER

สภาพอากาศ

เป็นหนึ่งในปัจจัยสำคัญที่สุด

ของการเดินเรือ

AI ควรประเมิน

- ความเร็วลม
- ทิศทางลม
- คลื่น
- ฝน
- หมอก
- พายุ
- ทัศนวิสัย
- อุณหภูมิ

Weather

สามารถเปลี่ยนแปลงได้ตลอดเวลา

โดยไม่ต้องมีเหตุผลจากผู้เล่น

---

# 9. WIND

ลม

มีผลต่อ

- ความเร็วเรือ
- การควบคุม
- การใช้ใบเรือ
- การใช้พลังงานของลูกเรือ

ลมที่เหมาะสม

ช่วยลดเวลาเดินทาง

ลมที่สวนทาง

เพิ่มเวลาและความเสี่ยง

---

# 10. OCEAN CURRENT

กระแสน้ำ

สามารถ

- เร่งความเร็ว
- ลดความเร็ว
- เปลี่ยนทิศทาง
- พัดเรือออกนอกเส้นทาง

นักเดินเรือที่มีประสบการณ์

สามารถใช้กระแสน้ำ

ให้เกิดประโยชน์

---

# 11. SEA HAZARDS

อันตรายในทะเล

ตัวอย่าง

- พายุ
- คลื่นยักษ์
- วังน้ำวน
- โขดหิน
- หมอกหนา
- สัตว์ทะเลขนาดใหญ่
- เขตทะเลอันตราย
- เรืออับปาง
- โจรสลัด
- เรือรบ

Hazard

ไม่จำเป็นต้องเป็นศัตรูเสมอไป

ธรรมชาติ

ก็เป็นอันตรายได้

---

# 12. LOG POSE

Log Pose

เป็นอุปกรณ์หลัก

สำหรับการเดินเรือใน Grand Line

หน้าที่

- บันทึกสนามแม่เหล็กของเกาะ
- ชี้เส้นทางเกาะถัดไป
- ต้องใช้เวลาปรับเข็ม

หากเข็มยังไม่ปรับสมบูรณ์

ไม่ควรออกเดินทาง

เว้นแต่ผู้เดินเรือ

ยอมรับความเสี่ยง

---

# 13. ETERNAL POSE

Eternal Pose

ชี้ไปยังเกาะเดียว

ตลอดเวลา

ข้อดี

- ไม่ต้องรอปรับเข็ม
- เดินทางตรงได้

ข้อจำกัด

- ใช้ได้เฉพาะเกาะที่กำหนด
- ไม่สามารถแทน Log Pose ได้ทั้งหมด

---

# 14. MAPS

แผนที่

ช่วยวางแผนการเดินทาง

แต่ไม่สามารถแทน

การนำทางจริง

แผนที่อาจ

- เก่า
- ผิดพลาด
- ไม่สมบูรณ์
- ขาดข้อมูล

คุณภาพของแผนที่

เป็นส่วนหนึ่งของการประเมินสถานการณ์

---

# 15. VISIBILITY

ทัศนวิสัย

มีผลต่อ

- การหลีกเลี่ยงสิ่งกีดขวาง
- การตรวจพบเรือลำอื่น
- การต่อสู้ทางทะเล
- การเข้าเทียบท่า

ทัศนวิสัยต่ำ

เพิ่มความเสี่ยง

แม้ลูกเรือจะมีความสามารถสูง

---

# 16. DAY AND NIGHT

เวลากลางวัน

และกลางคืน

มีผลต่อการเดินเรือ

เช่น

- การมองเห็น
- การเฝ้ายาม
- การนำทาง
- การตรวจพบศัตรู
- ความเหนื่อยล้าของลูกเรือ

การเดินเรือตอนกลางคืน

ไม่ใช่เรื่องผิดปกติ

แต่มีความเสี่ยงมากขึ้น

---

# 17. SHIP CONDITION

สภาพเรือ

ส่งผลต่อความปลอดภัยของการเดินทาง

AI ควรพิจารณา

- ตัวเรือ
- เสากระโดง
- ใบเรือ
- หางเสือ
- สมอ
- ห้องเก็บเสบียง
- การรั่วซึม
- ความเสียหายสะสม

เรือที่เสียหาย

สามารถออกเดินทางได้

แต่ความเสี่ยงจะสูงขึ้น

---

# 18. CREW CONDITION

สภาพลูกเรือ

มีผลต่อการเดินเรือ

ตัวอย่าง

- ความเหนื่อยล้า
- การบาดเจ็บ
- ความหิว
- การขาดน้ำ
- ขวัญกำลังใจ
- ประสบการณ์

Navigator ที่เก่ง

ไม่สามารถชดเชย

ลูกเรือที่หมดแรงทั้งหมดได้

---

# 19. SURVIVAL AT SEA

หากเกิดเหตุฉุกเฉิน

AI ควรประเมิน

- น้ำดื่ม
- อาหาร
- เรือชูชีพ
- อุปกรณ์สื่อสาร
- วัสดุซ่อมเรือ
- สภาพอากาศ
- ระยะห่างจากเกาะ
- โอกาสได้รับความช่วยเหลือ

การเอาตัวรอด

เป็นกระบวนการต่อเนื่อง

ไม่ใช่การทอยครั้งเดียว

---

# 20. ISLAND DISCOVERY

การค้นพบเกาะ

ขึ้นอยู่กับ

- เส้นทาง
- ทัศนวิสัย
- แผนที่
- เครื่องนำทาง
- ประสบการณ์ของ Navigator
- สภาพอากาศ

เกาะ

ไม่จำเป็นต้องถูกค้นพบทันที

แม้อยู่ในระยะที่สามารถเดินทางถึงได้

---

# 21. NAVIGATION DICE

NAVIGATION SYSTEM

ใช้ DICE SYSTEM

เฉพาะเมื่อ

ผลลัพธ์

ไม่สามารถสรุปได้จากเหตุผล

ตัวอย่าง

- ฝ่าพายุ
- หาทางในหมอก
- หลบโขดหิน
- ควบคุมเรือที่เสียหาย
- นำเรือผ่านกระแสน้ำรุนแรง

หากสถานการณ์

ไม่มีความไม่แน่นอน

ไม่ควรใช้การทอย

อ้างอิง

DICE.md

---

# 22. AI RESPONSIBILITIES

ก่อนตัดสินผลการเดินเรือ

AI ต้องตรวจสอบตามลำดับ

1. จุดหมายปลายทาง

↓

2. สภาพเรือ

↓

3. ความพร้อมของลูกเรือ

↓

4. เครื่องนำทาง

↓

5. สภาพอากาศ

↓

6. กระแสน้ำและลม

↓

7. ความเสี่ยง

↓

8. พิจารณาการใช้ DICE

↓

9. บรรยายผล

AI

ไม่ควรข้ามลำดับนี้

---

# 23. FAIR PLAY

NAVIGATION SYSTEM

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- สร้างพายุเพื่อขัดขวางผู้เล่น
- ทำให้เดินทางง่ายขึ้นเพราะเป็นผู้เล่น
- เปลี่ยนสภาพอากาศเพื่อบังคับเนื้อเรื่อง
- ละเลยข้อจำกัดของทะเล

ทะเล

ใช้กฎเดียวกัน

กับทุกฝ่าย

---

# 24. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- SHIPS
- WEATHER
- WORLD
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

NAVIGATION.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

NAVIGATION.md

กำหนดมาตรฐานการเดินเรือทั้งหมดของ ASTER ENGINE

ทุกระบบ

ที่เกี่ยวข้องกับการเดินเรือ

การสำรวจ

การเดินทาง

และการเอาชีวิตรอดในทะเล

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

NAVIGATION.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\RELATIONSHIP.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# RELATIONSHIP SYSTEM

Document : RELATIONSHIP.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- REPUTATION.md
- DICE.md

---

# 1. PURPOSE

RELATIONSHIP SYSTEM

กำหนดมาตรฐานความสัมพันธ์ระหว่างตัวละครทั้งหมด

ระบบนี้ครอบคลุม

- ความไว้วางใจ
- มิตรภาพ
- ความเคารพ
- ความรัก
- ความเกลียดชัง
- ความหวาดระแวง
- ความภักดี
- การทรยศ
- ความสัมพันธ์ระหว่างองค์กร

Relationship

ไม่ใช่ตัวเลข

แต่คือประวัติของการมีปฏิสัมพันธ์

ที่สะสมตลอดเวลา

---

# 2. CORE PHILOSOPHY

RELATIONSHIP SYSTEM

ยึดหลักดังต่อไปนี้

## Relationships Are Earned

ความสัมพันธ์

ไม่ได้เกิดขึ้น

เพราะผู้เล่นเป็นตัวเอก

แต่เกิดจากการกระทำ

---

## Time Builds Trust

ความไว้วางใจ

ต้องใช้เวลา

ไม่มีใคร

เชื่อใจคนแปลกหน้าทันที

---

## Every Character Has Memory

NPC

จดจำ

สิ่งที่เกิดขึ้น

และใช้ความทรงจำ

ในการตัดสินใจครั้งต่อไป

---

## Feelings Can Change

ความสัมพันธ์

สามารถดีขึ้น

หรือแย่ลง

ตามเหตุการณ์

ไม่มีสถานะถาวร

---

## Relationship Is Personal

แต่ละคน

มีความคิดเห็นของตนเอง

NPC สองคน

สามารถมองผู้เล่นต่างกันได้

---

# 3. RELATIONSHIP SCOPE

ระบบนี้ครอบคลุม

- Friendship
- Trust
- Respect
- Loyalty
- Rivalry
- Romance
- Family
- Crew Bond
- Organization Bond
- Personal History

---

# 4. RELATIONSHIP WORKFLOW

Interaction

↓

Personal Interpretation

↓

Emotion

↓

Memory

↓

Relationship Change

↓

Future Behavior

AI

ไม่ควรข้ามลำดับนี้

---

# 5. FIRST IMPRESSION

ความประทับใจแรก

ได้รับผลจาก

- บุคลิก
- คำพูด
- การแต่งกาย
- การกระทำ
- สถานการณ์ที่พบกัน

First Impression

ไม่ใช่ความสัมพันธ์ทั้งหมด

แต่มีผลต่อการเริ่มต้น

---

# 6. TRUST

Trust

เกิดจาก

- การรักษาคำพูด
- การช่วยเหลือ
- ความซื่อสัตย์
- การเสียสละ
- การอยู่ร่วมกัน

Trust

ลดลงจาก

- การโกหก
- การทรยศ
- การทอดทิ้ง
- การหลอกใช้

---

# 7. RESPECT

Respect

เกิดจาก

- ความสามารถ
- ความกล้าหาญ
- ความรับผิดชอบ
- ความเป็นผู้นำ
- ความเสียสละ

Respect

ไม่จำเป็นต้องมาพร้อม

ความชอบ

ศัตรู

ก็สามารถเคารพกันได้

---

# 8. FRIENDSHIP

มิตรภาพ

เกิดจาก

- การใช้เวลาร่วมกัน
- การช่วยเหลือ
- การแบ่งปันประสบการณ์
- การให้อภัย
- การเคารพซึ่งกันและกัน

Friendship

ไม่สามารถสร้างได้

จากเหตุการณ์เพียงครั้งเดียว

เว้นแต่เป็นเหตุการณ์ที่เปลี่ยนชีวิต

---

# 9. LOYALTY

Loyalty

คือความภักดี

ต่อ

- บุคคล
- ลูกเรือ
- องค์กร
- อุดมการณ์

Loyalty

สามารถถูกทดสอบ

จาก

- ผลประโยชน์
- ความกลัว
- ความสูญเสีย
- ความขัดแย้งทางอุดมการณ์

---

# 10. RIVALRY

คู่แข่ง

ไม่จำเป็นต้องเป็นศัตรู

Rivalry

สามารถผลักดัน

ให้ทั้งสองฝ่าย

พัฒนาตนเอง

การแข่งขัน

อาจเกิดจาก

- เป้าหมายเดียวกัน
- ความสามารถใกล้เคียงกัน
- ความเชื่อที่แตกต่าง

---

# 11. HATRED

ความเกลียดชัง

เกิดจาก

- การทรยศ
- การสูญเสีย
- ความอยุติธรรม
- ความแค้น
- อุดมการณ์ที่ขัดแย้ง

Hatred

ไม่จำเป็นต้องนำไปสู่

การต่อสู้เสมอไป

---

# 12. ROMANCE

ความรัก

เกิดขึ้นจาก

ความสัมพันธ์

ที่ค่อย ๆ พัฒนา

AI

ไม่ควรสร้างความรัก

อย่างฉับพลัน

โดยไม่มีเหตุผล

Romance

เป็นผลของเรื่องราว

ไม่ใช่รางวัลของผู้เล่น

---

# 13. FAMILY

ความสัมพันธ์ในครอบครัว

มีประวัติ

หน้าที่

และความคาดหวัง

ที่แตกต่างจากความสัมพันธ์ทั่วไป

สายเลือด

ไม่ได้รับประกัน

ความรัก

หรือความเกลียดชัง

---

# 14. CREW BOND

สมาชิกลูกเรือ

ใช้ชีวิตร่วมกัน

แบ่งปัน

ความเสี่ยง

ความสำเร็จ

และความล้มเหลว

Crew Bond

สามารถแข็งแกร่งขึ้น

หรือแตกสลาย

ตามเหตุการณ์

---

# 15. ORGANIZATION RELATIONSHIP

องค์กร

สามารถมีความสัมพันธ์ต่อกัน

เช่น

- พันธมิตร
- เป็นกลาง
- คู่แข่ง
- ศัตรู
- ความร่วมมือชั่วคราว

ความสัมพันธ์ขององค์กร

ไม่จำเป็นต้องตรงกับ

ความสัมพันธ์ของสมาชิกทุกคน

---

# 16. MEMORY

NPC

จดจำเหตุการณ์

ตามสิ่งที่ตนเอง

พบเห็น

ได้ยิน

หรือได้รับข้อมูล

ความทรงจำ

อาจ

- ถูกต้อง
- ผิดพลาด
- ไม่สมบูรณ์
- เลือนหายตามเวลา

ความสัมพันธ์

เปลี่ยนจากความทรงจำ

ไม่ใช่จากข้อเท็จจริงของโลกเสมอไป

---

# 17. FORGIVENESS

ความสัมพันธ์

สามารถฟื้นฟูได้

แต่ต้องใช้เวลา

และการกระทำ

ที่สอดคล้องกัน

การขอโทษ

เพียงครั้งเดียว

ไม่จำเป็นต้องได้รับการให้อภัย

---

# 18. BETRAYAL

การทรยศ

เป็นหนึ่งในเหตุการณ์

ที่ส่งผลรุนแรงที่สุด

ต่อความสัมพันธ์

ตัวอย่าง

- หักหลังลูกเรือ
- เปิดเผยความลับ
- ละทิ้งพันธมิตร
- ทำลายคำสัญญา

การฟื้นฟู

หลังการทรยศ

ต้องใช้เหตุผลรองรับ

และใช้เวลานาน

---

# 19. CONFLICT

ความขัดแย้ง

ไม่จำเป็นต้องทำลาย

ความสัมพันธ์ทั้งหมด

ตัวละคร

สามารถ

- ไม่เห็นด้วย
- โต้เถียง
- แข่งขัน
- แยกทางชั่วคราว

โดยยังคง

ความเคารพ

หรือมิตรภาพ

ไว้ได้

---

# 20. RELATIONSHIP DICE

RELATIONSHIP SYSTEM

ใช้ DICE SYSTEM

เฉพาะเมื่อ

ผลลัพธ์

มีความไม่แน่นอน

ตัวอย่าง

- จะเชื่อคำอธิบายหรือไม่
- จะให้อภัยหรือไม่
- จะเปิดเผยความจริงหรือไม่
- จะร่วมมือหรือปฏิเสธ

หากผลลัพธ์

สามารถอธิบายได้จาก

ประวัติความสัมพันธ์

ไม่ควรใช้การทอย

---

# 21. AI RESPONSIBILITIES

ก่อนเปลี่ยนความสัมพันธ์

AI ต้องตรวจสอบ

1. เหตุการณ์

↓

2. ความสัมพันธ์เดิม

↓

3. บุคลิกของแต่ละฝ่าย

↓

4. การตีความเหตุการณ์

↓

5. ความทรงจำ

↓

6. ผลกระทบทางอารมณ์

↓

7. ความสัมพันธ์ใหม่

AI

ไม่ควรเปลี่ยนความสัมพันธ์

อย่างฉับพลัน

โดยไม่มีเหตุผล

---

# 22. FAIR PLAY

RELATIONSHIP SYSTEM

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- ทำให้ NPC ชอบผู้เล่นทันที
- บังคับให้ NPC เกลียดผู้เล่น
- สร้างความรักเพื่อเป็นรางวัล
- ทำให้ทุกคนมีความคิดเห็นเหมือนกัน

ทุกตัวละคร

ใช้หลักการเดียวกัน

ในการสร้างความสัมพันธ์

---

# 23. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- REPUTATION.md
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

RELATIONSHIP.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

RELATIONSHIP.md

กำหนดมาตรฐานความสัมพันธ์ทั้งหมดของ ASTER ENGINE

ทุกความสัมพันธ์

ระหว่างผู้เล่น

NPC

ลูกเรือ

องค์กร

และกลุ่มต่าง ๆ

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

RELATIONSHIP.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\REPUTATION.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# REPUTATION SYSTEM

Document : REPUTATION.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- WORLD
- FACTIONS

---

# 1. PURPOSE

REPUTATION SYSTEM

กำหนดมาตรฐานชื่อเสียงทั้งหมดของ ASTER ENGINE

ระบบนี้ครอบคลุม

- ชื่อเสียง
- ความน่าเชื่อถือ
- ความหวาดกลัว
- ความไว้วางใจ
- ภาพลักษณ์
- ข่าวลือ
- การยอมรับจากสังคม
- การรับรู้ขององค์กร
- การตอบสนองของโลก

Reputation

ไม่ใช่ค่าความดี

แต่คือ

สิ่งที่โลกเชื่อเกี่ยวกับตัวละคร

---

# 2. CORE PHILOSOPHY

REPUTATION SYSTEM

ยึดหลักดังต่อไปนี้

## Reputation Is Perception

ชื่อเสียง

เกิดจาก

การรับรู้ของผู้คน

ไม่ใช่ข้อเท็จจริงเสมอไป

---

## Actions Create Reputation

ชื่อเสียง

เกิดจากการกระทำ

ไม่ใช่จากความตั้งใจ

---

## Information Travels

ข่าวสาร

เดินทางช้าหรือเร็ว

ขึ้นอยู่กับ

ผู้พบเห็น

พยาน

สื่อ

และองค์กร

ไม่มีใครรู้ทุกเหตุการณ์ทันที

---

## Reputation Is Local First

ชื่อเสียง

เริ่มต้นจากพื้นที่

ก่อนขยายไปยังภูมิภาค

และระดับโลก

---

## Reputation Never Appears Instantly

ไม่มีชื่อเสียง

ที่เกิดขึ้นทันที

หากไม่มีเหตุผลรองรับ

---

# 3. REPUTATION SCOPE

ระบบนี้ครอบคลุม

- Local Reputation
- Island Reputation
- Kingdom Reputation
- Marine Reputation
- Pirate Reputation
- Revolutionary Reputation
- Civilian Reputation
- Global Reputation
- Personal Trust
- Infamy

---

# 4. REPUTATION WORKFLOW

ทุกเหตุการณ์

ใช้ลำดับดังต่อไปนี้

Action

↓

Witness

↓

Information Spread

↓

Public Perception

↓

Faction Response

↓

Reputation Change

↓

Long-term Consequence

AI

ไม่ควรข้ามลำดับนี้

---

# 5. HOW REPUTATION CHANGES

ชื่อเสียง

เปลี่ยนจาก

- การช่วยเหลือ
- การต่อสู้
- การฆาตกรรม
- การจับกุม
- การรักษา
- การค้า
- การหลอกลวง
- การช่วยประเทศ
- การทำลายเมือง
- การทรยศ

การเปลี่ยนแปลง

ต้องสัมพันธ์กับ

ขนาดของเหตุการณ์

และจำนวนผู้รับรู้

---

# 6. WITNESSES

หากไม่มีใครรับรู้

โลก

ไม่สามารถเปลี่ยนการรับรู้ได้

พยานอาจเป็น

- พลเรือน
- ลูกเรือ
- ทหารเรือ
- โจรสลัด
- หนังสือพิมพ์
- เจ้าหน้าที่รัฐบาล
- ผู้รอดชีวิต

จำนวน

และความน่าเชื่อถือของพยาน

ส่งผลต่อการกระจายข่าว

---

# 7. FALSE REPUTATION

ชื่อเสียง

อาจไม่ตรงกับความจริง

ตัวอย่าง

- ถูกใส่ร้าย
- ถูกเข้าใจผิด
- ข่าวปลอม
- การปกปิดข้อมูล
- การโฆษณาชวนเชื่อ

โลก

ตอบสนองต่อข้อมูลที่ได้รับ

ไม่ใช่ความจริงเสมอไป

---

# 8. LOCAL REPUTATION

ชื่อเสียงระดับท้องถิ่น

เกิดขึ้นก่อน

ชื่อเสียงระดับอื่นเสมอ

ตัวอย่าง

- หมู่บ้าน
- เมือง
- ท่าเรือ
- เกาะ

การกระทำเดียวกัน

อาจมีผลต่างกัน

ในแต่ละพื้นที่

---

# 9. KINGDOM REPUTATION

อาณาจักรแต่ละแห่ง

มีมุมมองของตนเอง

ตัวอย่าง

ผู้ที่ช่วยเหลือประเทศ

อาจได้รับ

- สิทธิพิเศษ
- ความไว้วางใจ
- การสนับสนุน

แต่หากสร้างความเสียหาย

อาจถูก

- ขับไล่
- จับกุม
- ประกาศเป็นศัตรู

---

# 10. FACTION REPUTATION

แต่ละองค์กร

ประเมินตัวละคร

จากผลประโยชน์ของตนเอง

ตัวอย่าง

- Marines
- Pirates
- Revolutionaries
- Kingdoms
- Underworld
- Bounty Hunters

ชื่อเสียง

สามารถแตกต่างกัน

ในแต่ละองค์กร

---

# 11. TRUST

Trust

คือ

ความไว้วางใจ

ระหว่างบุคคล

แตกต่างจาก Reputation

ตัวอย่าง

คนทั้งโลก

อาจเกลียดผู้เล่น

แต่ลูกเรือ

ยังเชื่อใจผู้เล่นได้

Trust

จัดการในระดับบุคคล

ไม่ใช่ระดับสังคม

---

# 12. FEAR

ความหวาดกลัว

เป็นองค์ประกอบหนึ่งของชื่อเสียง

ตัวอย่าง

- โจรสลัดชื่อดัง
- นักล่าค่าหัว
- นักฆ่า
- อาชญากร

ผู้คน

อาจหวาดกลัว

แม้จะไม่เกลียด

---

# 13. RESPECT

ความเคารพ

เกิดจาก

ความสามารถ

ความเสียสละ

หรือผลงาน

Respect

ไม่จำเป็นต้องมาพร้อมความชอบ

ศัตรู

สามารถเคารพกันได้

---

# 14. INFAMY

Infamy

คือชื่อเสียงในด้านลบ

เช่น

- ความโหดร้าย
- การสังหารหมู่
- การทรยศ
- อาชญากรรมร้ายแรง

Infamy

สามารถเพิ่มอิทธิพล

ในบางกลุ่ม

และลดความไว้วางใจ

ในอีกหลายกลุ่ม

---

# 15. FAME

Fame

คือชื่อเสียงในด้านบวก

เช่น

- การช่วยเหลือผู้คน
- การปกป้องเมือง
- ความกล้าหาญ
- ความสามารถพิเศษ

ชื่อเสียงที่ดี

ไม่ได้หมายความว่า

ทุกฝ่ายจะสนับสนุนตัวละคร

---

# 16. REPUTATION SPREAD

ข่าวสาร

ไม่ได้แพร่กระจายทันที

ความเร็วในการแพร่ข่าว

ขึ้นอยู่กับ

- ระยะทาง
- จำนวนพยาน
- หนังสือพิมพ์
- Marine Intelligence
- ข่าวลือ
- พ่อค้า
- นักเดินเรือ
- องค์กรต่าง ๆ

บางเหตุการณ์

อาจใช้เวลา

หลายวัน

หลายสัปดาห์

หรือหลายเดือน

กว่าทั่วโลกจะรับรู้

---

# 17. REPUTATION DECAY

ชื่อเสียง

สามารถเปลี่ยนแปลงได้ตามเวลา

หากไม่มีเหตุการณ์ใหม่

ผู้คน

อาจค่อย ๆ ลืม

หรือให้ความสนใจน้อยลง

เหตุการณ์สำคัญ

จะคงอยู่

นานกว่าข่าวทั่วไป

---

# 18. CONSEQUENCES

ชื่อเสียง

ส่งผลต่อโลก

เช่น

- ราคาค่าหัว
- การค้าขาย
- การเจรจา
- การขอความช่วยเหลือ
- การเข้าประเทศ
- การถูกติดตาม
- การถูกปฏิเสธ
- การได้รับการต้อนรับ

ผลกระทบ

ขึ้นอยู่กับผู้ที่รับรู้

ไม่ใช่คะแนนชื่อเสียงเพียงอย่างเดียว

---

# 19. BOUNTY

ค่าหัว

ไม่ใช่คะแนนชื่อเสียง

ค่าหัว

เป็นการประเมิน

ของรัฐบาลโลก

ซึ่งอาจอ้างอิง

- อันตราย
- อิทธิพล
- ความเสียหาย
- ความสามารถ
- การต่อต้านรัฐบาล

บุคคล

สามารถมีชื่อเสียงสูง

โดยไม่มีค่าหัว

และสามารถมีค่าหัวสูง

โดยที่คนทั่วไปไม่รู้จัก

---

# 20. REPUTATION DICE

REPUTATION SYSTEM

ใช้ DICE SYSTEM

เฉพาะเมื่อ

ผลลัพธ์

มีความไม่แน่นอน

ตัวอย่าง

- ข่าวลือจะถูกเชื่อหรือไม่
- พยานจะจำหน้าได้หรือไม่
- ข่าวจะหลุดหรือถูกปิดไว้
- ความจริงจะถูกเปิดเผยหรือไม่

หากผลลัพธ์

สามารถสรุปได้จากเหตุผล

ไม่ควรใช้การทอย

---

# 21. AI RESPONSIBILITIES

ก่อนเปลี่ยนชื่อเสียง

AI ต้องตรวจสอบ

1. เหตุการณ์ที่เกิดขึ้น

↓

2. มีผู้รับรู้หรือไม่

↓

3. ข่าวแพร่กระจายอย่างไร

↓

4. ใครได้รับข้อมูล

↓

5. แต่ละฝ่ายตีความอย่างไร

↓

6. ผลกระทบต่อชื่อเสียง

↓

7. ผลกระทบระยะยาว

AI

ไม่ควรเปลี่ยนชื่อเสียง

โดยไม่มีเหตุผลรองรับ

---

# 22. FAIR PLAY

REPUTATION SYSTEM

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- เพิ่มชื่อเสียงเพราะผู้เล่นเป็นตัวเอก
- ลดชื่อเสียงเพื่อบังคับเนื้อเรื่อง
- ให้ทั้งโลกทราบเหตุการณ์ทันที
- ทำให้ทุกฝ่ายมีความคิดเห็นเหมือนกัน

แต่ละองค์กร

แต่ละเมือง

และแต่ละบุคคล

สามารถมีมุมมองแตกต่างกันได้

---

# 23. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- WORLD
- FACTIONS
- RELATIONSHIP.md
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

REPUTATION.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

REPUTATION.md

กำหนดมาตรฐานการรับรู้ของโลก

ชื่อเสียง

ข่าวลือ

ความไว้วางใจ

และผลกระทบจากการกระทำ

ทุกระบบ

ที่มีผลต่อการรับรู้ของโลก

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

REPUTATION.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\RULES.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# RULES

Document Version : 2.1
Status : Production
Authority : Secondary (After SYSTEM.md)

---

# 1. PURPOSE

RULES.md

กำหนดกฎการเล่นของ

PROJECT ASTER ENGINE

หน้าที่ของเอกสารนี้คือ

- กำหนดกฎกลางของการเล่น
- กำหนดหลักการตัดสินผลลัพธ์
- กำหนดข้อจำกัดของผู้เล่นและโลก
- กำหนดการใช้ Module Rules
- กำหนดมาตรฐาน Consequence

RULES.md

ไม่กำหนด

- ปรัชญาของ Engine
- โครงสร้าง Repository
- วิธีทำงานของ AI Game Master
- ข้อมูล Canon ของโลก

ข้อมูลเหล่านั้น

ให้อ้างอิง

SYSTEM.md

และเอกสารที่เกี่ยวข้อง

---

# 2. SCOPE

RULES.md

ครอบคลุมกฎกลางของระบบ

ได้แก่

- Character
- Action Resolution
- Combat
- Exploration
- Travel
- Economy
- Reputation
- Relationship
- Medical
- Death
- Consequence
- World Interaction

หากระบบใด

มี Module เฉพาะ

RULES.md

ทำหน้าที่กำหนดหลักการ

ส่วนรายละเอียดเชิงระบบ

ให้อ้างอิง Module นั้นโดยตรง

ตัวอย่าง

Combat

↓

COMBAT.md

Dice

↓

DICE.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

---

# 3. RULE HIERARCHY

เมื่อเกิดความขัดแย้งระหว่างเอกสาร

ให้ใช้ลำดับอำนาจดังนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

SYSTEM MODULES

↓

CURRENT WORLD STATE

---

เอกสารลำดับล่าง

ไม่มีสิทธิ์ขัดแย้งกับเอกสารลำดับบน

Game Master

ไม่มีสิทธิ์ Override

- SYSTEM.md
- RULES.md
- Canon
- Repository

---

# 4. CORE RULES

ทุกระบบภายใน ASTER ENGINE

ต้องปฏิบัติตามหลักต่อไปนี้

---

## Logic Before Random

เหตุผลของโลก

มาก่อนการสุ่ม

หากสามารถตัดสินได้จากเหตุผล

ไม่จำเป็นต้องใช้ Dice

---

## Random Supports Logic

Dice

มีหน้าที่สร้างความไม่แน่นอน

ไม่ใช่แทนที่เหตุผล

---

## Consequence Always Exists

ทุกการกระทำ

ต้องสร้างผลลัพธ์

ผลลัพธ์อาจเกิดขึ้น

- ทันที
- ระยะสั้น
- ระยะกลาง
- ระยะยาว

---

## Fair Resolution

ทุกฝ่าย

อยู่ภายใต้กฎเดียวกัน

ได้แก่

- Player
- NPC
- Pirate
- Marine
- Organization
- Kingdom

ไม่มี Plot Armor

---

## No Forced Story

Game Master

ไม่มีสิทธิ์บังคับเหตุการณ์

เพื่อให้เรื่องเดินตามแผน

โลกต้องตอบสนองจาก

- การกระทำ
- เหตุผล
- สถานการณ์
- Consequence

---

# 5. ACTION RESOLUTION

การตัดสินผลของ Action

ใช้หลักดังนี้

1. Situation

↓

2. Logic

↓

3. Character Ability

↓

4. Environment

↓

5. Rules

↓

6. Dice (ถ้าจำเป็น)

↓

7. Consequence

---

หากผลลัพธ์ชัดเจน

ไม่ต้องใช้ Dice

ตัวอย่าง

- เดิน
- พูดคุยทั่วไป
- เปิดประตูที่ไม่ได้ล็อก
- ใช้อุปกรณ์ที่เชี่ยวชาญ

---

หากมีความไม่แน่นอน

จึงใช้ระบบ Dice

รายละเอียด

อ้างอิง DICE.md

# 6. PLAYER ACTIONS

ผู้เล่นสามารถกระทำได้อย่างอิสระ

ตราบใดที่อยู่ภายใต้ข้อจำกัดของโลก

ตัวอย่าง

- พูดคุย
- เคลื่อนไหว
- สำรวจ
- ต่อสู้
- ใช้ไอเทม
- ใช้ผลปีศาจ
- ใช้ฮาคิ
- เจรจา
- หลบหนี
- ทำงาน
- ซื้อขาย
- สร้างความสัมพันธ์

---

ผู้เล่นเป็นเจ้าของตัวละครของตนเอง

AI ไม่มีสิทธิ์

- พูดแทนผู้เล่น
- คิดแทนผู้เล่น
- ตัดสินใจแทนผู้เล่น
- เพิ่มการกระทำที่ผู้เล่นไม่ได้ประกาศ
- เปลี่ยนเจตนาของผู้เล่น

---

# 7. SUCCESS AND FAILURE

ผลลัพธ์ของ Action

แบ่งเป็น

- Complete Success
- Success
- Partial Success
- Success With Cost
- Failure
- Critical Failure

---

Failure

ไม่ใช่การจบเรื่อง

แต่เป็นจุดเริ่มต้นของ

Consequence ใหม่

---

# 8. TIME RULES

เวลาในโลก

ดำเนินต่อเนื่องเสมอ

ทุกกิจกรรม

ต้องใช้เวลา

Game Master

ต้องติดตามผลของเวลา

ต่อ

- NPC
- สภาพอากาศ
- การเดินทาง
- เศรษฐกิจ
- Event

---

ไม่มี

- Instant Travel
- Time Skip โดยไม่มีเหตุผล
- ข้าม Consequence

---

# 9. EXPLORATION RULES

ผู้เล่นสามารถสำรวจโลกได้อย่างอิสระ

Game Master

ต้องบรรยายโลกตามข้อมูลจริง

ไม่ใช่สร้างเส้นเรื่องบังคับ

---

การสำรวจสามารถนำไปสู่

- Discovery
- Conflict
- Information
- NPC Interaction
- Event
- Secret

---

# 10. COMBAT RULES

Combat

เป็นส่วนหนึ่งของ World Simulation

ไม่ใช่ระบบแยกจากโลก

---

หลักการกลาง:

- ทุกฝ่ายมีโอกาสชนะ
- ทุกฝ่ายมีโอกาสแพ้
- ทุกการต่อสู้มีความเสี่ยง
- ทุกการต่อสู้สร้าง Consequence

---

รายละเอียดระบบ

ให้อ้างอิง

COMBAT.md

---

# 11. MEDICAL RULES

การรักษา

ต้องอยู่ภายใต้หลักความสมจริงของโลก

---

หลักการ:

- บาดเจ็บต้องใช้เวลา
- การรักษามีข้อจำกัด
- ความเสียหายส่งผลต่อร่างกาย
- การรักษาที่ถูกต้องช่วยลด Consequence

---

รายละเอียด

ให้อ้างอิง

MEDICAL.md

---

# 12. DEVIL FRUIT RULES

ผลปีศาจ

ใช้กฎพื้นฐานของโลก ONE PIECE

---

หลักการ:

- หนึ่งคนต่อหนึ่งผล
- ผู้ใช้ไม่สามารถว่ายน้ำได้
- ความสามารถต้องอยู่ภายใต้ขอบเขตของผล
- การพัฒนาพลังต้องเกิดจากประสบการณ์

---

รายละเอียด

ให้อ้างอิง

DEVIL_FRUIT.md

---

# 13. HAKI RULES

ฮาคิ

เป็นพลังที่เกิดจาก

- ประสบการณ์
- การฝึกฝน
- เจตจำนง
- การเติบโตของตัวละคร

---

หลักการ:

- ไม่ใช่ทุกคนมีฮาคิ
- ระดับความสามารถแตกต่างกัน
- ไม่มีการเพิ่มพลังโดยไม่มีเหตุผล

---

รายละเอียด

ให้อ้างอิง

HAKI.md

---

# 14. ECONOMY RULES

เศรษฐกิจของโลก

ต้องมีผลจริง

---

สกุลเงิน:

Beli

---

ทุกการซื้อขาย

ต้องส่งผลต่อ

- เงินผู้เล่น
- เงิน NPC
- Inventory
- เศรษฐกิจที่เกี่ยวข้อง

---

Game Master

ต้องติดตาม

ยอดเงินปัจจุบันของผู้เล่น

---

# 15. REPUTATION RULES

ชื่อเสียง

เกิดจากการกระทำ

ไม่ใช่ความตั้งใจ

---

ชื่อเสียงสามารถเปลี่ยนแปลงกับ

- ประชาชน
- โจรสลัด
- นาวิกโยธิน
- รัฐบาลโลก
- องค์กรต่าง ๆ

---

รายละเอียด

ให้อ้างอิง

REPUTATION.md

# 16. RELATIONSHIP RULES

NPC

มีความทรงจำและตอบสนองต่อการกระทำของผู้เล่น

---

ความสัมพันธ์สามารถ

- เพิ่มขึ้น
- ลดลง
- เปลี่ยนรูปแบบ
- สิ้นสุดลง

---

การเปลี่ยนแปลงต้องเกิดจาก

- การกระทำ
- เวลา
- เหตุการณ์
- ความเชื่อ
- สถานการณ์

---

รายละเอียด

ให้อ้างอิง

RELATIONSHIP.md

---

# 17. INVENTORY RULES

สิ่งของทุกชนิด

ต้องมีสถานะชัดเจน

เช่น

- อยู่กับตัวละคร
- อยู่ในกระเป๋า
- อยู่บนเรือ
- อยู่ในคลังสินค้า

---

ผู้เล่นไม่สามารถใช้งานสิ่งของ

ที่ไม่ได้ครอบครองจริง

---

รายละเอียด

ให้อ้างอิง

ITEMS.md

---

# 18. DEATH RULES

ความตาย

เป็นส่วนหนึ่งของโลก

---

ผู้เล่น

NPC

และสิ่งมีชีวิตทุกประเภท

สามารถเสียชีวิตได้

---

ไม่มีระบบ

- Respawn
- Reload Story
- Undo Consequence

เว้นแต่เกิดจากกลไกของโลกที่กำหนดไว้

---

# 19. TRAVEL RULES

การเดินทาง

ต้องใช้เวลา

---

ปัจจัยที่ส่งผล:

- ระยะทาง
- เรือ
- สภาพอากาศ
- เส้นทาง
- ทักษะการเดินเรือ

---

รายละเอียด

ให้อ้างอิง

NAVIGATION.md

---

# 20. CONSEQUENCE RULES

ทุกการกระทำ

สร้างผลลัพธ์

---

Consequence สามารถส่งผลต่อ

- ผู้เล่น
- NPC
- ลูกเรือ
- เรือ
- เกาะ
- ประเทศ
- องค์กร
- โลก

---

ไม่มีการลบ Consequence

โดยไม่มีเหตุผลตาม Canon

---

# 21. EVENT RULES

Event

เกิดจากการเคลื่อนไหวของโลก

ไม่ใช่เพื่อบังคับเนื้อเรื่อง

---

Event แบ่งเป็น

- Personal Event
- Local Event
- Regional Event
- World Event

---

หลาย Event

สามารถเกิดขึ้นพร้อมกันได้

---

# 22. MODULE REFERENCE

รายละเอียดระบบเฉพาะ

ให้อ้างอิงเอกสารดังนี้

Combat

↓

COMBAT.md

Dice

↓

DICE.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

Reputation

↓

REPUTATION.md

Relationship

↓

RELATIONSHIP.md

Status Effects

↓

STATUS_EFFECTS.md

Devil Fruit

↓

DEVIL_FRUIT.md

Haki

↓

HAKI.md

---

# 23. EXCEPTION RULES

เมื่อไม่มีกฎเฉพาะ

ให้ใช้ลำดับดังนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

Module ที่เกี่ยวข้อง

↓

Canon

↓

Logic

↓

Dice

---

การตัดสินทุกครั้ง

ต้องสามารถอธิบายเหตุผลได้

---

# 24. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- GAME_MASTER.md
- COMBAT.md
- DICE.md
- MEDICAL.md
- NAVIGATION.md
- REPUTATION.md
- RELATIONSHIP.md
- STATUS_EFFECTS.md
- DEVIL_FRUIT.md
- HAKI.md
- ITEMS.md

---

# DOCUMENT STATUS

Document Name

RULES.md

Document Version

2.1

Engine Version

ASTER ENGINE v1.x

Status

Production

Authority

Secondary After SYSTEM.md

---

# END OF DOCUMENT

RULES.md

กำหนดกฎกลางของ

PROJECT ASTER ENGINE

รายละเอียดเชิงระบบ

ให้อ้างอิง Module เฉพาะ

เมื่อเกิดความขัดแย้ง

ให้ยึด

SYSTEM.md

เป็นมาตรฐานสูงสุด

# =====================================================
# FILE : 00_SYSTEM\SAVE_FORMAT.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# SAVE FORMAT SYSTEM

Document Version : 2.0

Status : Production

Document Type : System Standard

Authority :

SYSTEM.md

---

# 1. PURPOSE

SAVE_FORMAT.md

กำหนดมาตรฐานโครงสร้างข้อมูล SAVE

ของ

PROJECT ASTER ENGINE

---

หน้าที่ของ SAVE_FORMAT.md คือ

- กำหนดรูปแบบข้อมูล SAVE
- กำหนดมาตรฐาน Field
- กำหนดโครงสร้าง Snapshot
- ทำให้ AI อ่านและบันทึกข้อมูลได้ตรงกัน

---

SAVE_FORMAT.md

ไม่กำหนด

- กฎการเล่น
- เหตุการณ์ในโลก
- Canon
- วิธีตัดสินใจของ AI

ให้อ้างอิง:

SYSTEM.md

RULES.md

GAME_MASTER.md

---

# 2. SAVE SYSTEM CONCEPT

SAVE

คือ

Snapshot ล่าสุดของโลก

---

SAVE ไม่ใช่:

- บันทึกเรื่องราว
- บทสรุป Episode
- Log การสนทนา
- ประวัติทั้งหมด

---

หน้าที่ของ SAVE คือ

ตอบคำถาม:

"ตอนนี้โลกอยู่ในสถานะใด"

---

# 3. SAVE RESPONSIBILITY

SAVE เก็บ:

- Current World State
- Current Player State
- Current Crew State
- Current Ship State
- Current Faction State
- Current NPC State
- Current Location
- Current Events

---

SAVE ไม่เก็บ:

- บทสนทนา
- การบรรยายฉาก
- รายละเอียดการต่อสู้
- Dice Roll History

ข้อมูลเหล่านี้อยู่ใน:

LOG

---

# 4. SAVE STRUCTURE

โครงสร้างหลัก:


# 7. CURRENT_CREW

เก็บข้อมูลลูกเรือปัจจุบัน

ประกอบด้วย:

- Crew Members
- Roles
- Conditions
- Relationships
- Current Status

---

# 8. CURRENT_SHIPS

เก็บสถานะเรือปัจจุบัน

ประกอบด้วย:

- Ship Identity
- Location
- Condition
- Damage
- Upgrade
- Supplies

---

# 9. CURRENT_FACTIONS

เก็บสถานะองค์กรที่เกี่ยวข้อง

ประกอบด้วย:

- Organization Status
- Relations
- Active Conflicts
- Influence Changes

---

# 10. CURRENT_NPCS

เก็บสถานะ NPC ปัจจุบัน

ประกอบด้วย:

- Identity
- Location
- Condition
- Relationship
- Current Goal
- Important Changes

---

# 11. CURRENT_ISLANDS

เก็บสถานะเกาะที่ได้รับผลกระทบ

ประกอบด้วย:

- Population
- Economy
- Government
- Security
- Major Events

---

# 12. CURRENT_ITEMS

เก็บรายการสิ่งของสำคัญ

ประกอบด้วย:

- Item Location
- Owner
- Condition
- Quantity

---

# 13. CURRENT_EVENTS

เก็บ Event ที่กำลังดำเนินอยู่

ประกอบด้วย:

- Event Name
- Location
- Participants
- Current Status
- Possible Consequences

---

# 14. SAVE UPDATE RULES

เมื่อเกิดการเปลี่ยนแปลง

AI ต้อง Update เฉพาะข้อมูลที่ได้รับผลกระทบ

---

ตัวอย่าง:

ผู้เล่นได้รับบาดเจ็บ

↓

CURRENT_PLAYER

---

เรือเสียหาย

↓

CURRENT_SHIPS

---

NPC สำคัญเสียชีวิต

↓

CURRENT_NPCS

↓

CURRENT_FACTIONS

(ถ้ามีผลต่อองค์กร)

---

# 15. DATA CONSISTENCY

ข้อมูลใน SAVE ทุกส่วน

ต้องสอดคล้องกัน

---

ตัวอย่าง:

หาก NPC เสียชีวิต

ต้องตรวจสอบ:

- NPC Status
- Relationship
- Faction
- Active Events

---

หากตำแหน่งเปลี่ยน

ต้องตรวจสอบ:

- Player Location
- Ship Location
- Crew Location

---

# 16. SAVE AND LOG SEPARATION

SAVE

เก็บ:

"โลกตอนนี้เป็นอย่างไร"

---

LOG

เก็บ:

"เกิดอะไรขึ้นก่อนหน้านี้"

---

ห้ามใช้ SAVE แทน LOG

และ

ห้ามใช้ LOG แทน SAVE

---

# 17. LOADING ORDER

เมื่อเริ่ม Session ใหม่

AI ควรอ่าน:

CURRENT_WORLD

↓

CURRENT_PLAYER

↓

CURRENT_CREW

↓

CURRENT_SHIPS

↓

CURRENT_FACTIONS

↓

CURRENT_NPCS

↓

CURRENT_ISLANDS

↓

CURRENT_ITEMS

↓

CURRENT_EVENTS

---

# 18. DOCUMENT RELATIONSHIP

SYSTEM.md

↓

กำหนดมาตรฐาน SAVE

↓

SAVE_FORMAT.md

↓

กำหนดโครงสร้างข้อมูล

↓

SAVE_MANAGER.md

↓

จัดการการบันทึกและโหลด

↓

10_SAVE

↓

ข้อมูลสถานะจริงของโลก

---

# DOCUMENT STATUS

Document Name

SAVE_FORMAT.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Authority

System Standard

---

# END OF DOCUMENT

SAVE_FORMAT.md

กำหนดรูปแบบข้อมูล SAVE

เพื่อให้สถานะของโลก

สามารถถูกบันทึก

โหลด

และตรวจสอบได้อย่างต่อเนื่อง

# =====================================================
# FILE : 00_SYSTEM\SAVE_MANAGER.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# SAVE MANAGER SYSTEM

Document Version : 2.0

Status : Production

Document Type : System Management Document

Authority :

SYSTEM.md

---

# 1. PURPOSE

SAVE_MANAGER.md

กำหนดมาตรฐานการจัดการ SAVE

ของ

PROJECT ASTER ENGINE

---

หน้าที่:

- สร้าง SAVE
- โหลด SAVE
- ตรวจสอบ SAVE
- Update SAVE
- รักษาความต่อเนื่องของโลก

---

SAVE_MANAGER.md

ไม่กำหนด:

- รูปแบบข้อมูล SAVE

อ้างอิง:

SAVE_FORMAT.md

---

- กฎการเล่น

อ้างอิง:

RULES.md

---

- มาตรฐาน Engine

อ้างอิง:

SYSTEM.md

---

# 2. SAVE MANAGEMENT CONCEPT

SAVE

คือข้อมูลสถานะปัจจุบันของโลก

---

SAVE_MANAGER

ทำหน้าที่เป็นตัวกลางระหว่าง:

GAME SESSION

↓

SAVE DATA

↓

NEXT SESSION

---

# 3. SAVE PROCESS

กระบวนการบันทึก:

EVENT OCCURS

↓

ANALYZE IMPACT

↓

UPDATE RELATED DATA

↓

VALIDATE CONSISTENCY

↓

SAVE CURRENT STATE

---

# 4. SAVE CREATION

เมื่อสร้าง SAVE

ต้องบันทึก:

- Current World State
- Current Player State
- Current Active Events
- Current Important Changes

---

SAVE ต้องสะท้อน:

"โลกในขณะนี้"

ไม่ใช่

"เรื่องราวที่ผ่านมา"

---

# 5. SAVE UPDATE

เมื่อเกิดการเปลี่ยนแปลง

AI ต้อง Update เฉพาะข้อมูลที่ได้รับผลกระทบ

---

ตัวอย่าง:

Player ได้รับเงิน

↓

CURRENT_PLAYER

---

NPC เปลี่ยนสถานะ

↓

CURRENT_NPCS

---

องค์กรเปลี่ยนแปลง

↓

CURRENT_FACTIONS

---

เหตุการณ์กระทบโลก

↓

CURRENT_WORLD

# 6. SAVE VALIDATION

ก่อนใช้งาน SAVE

ต้องตรวจสอบความถูกต้อง

---

Validation Check:

## Player Check

ตรวจสอบ:

- Location
- Health
- Money
- Inventory
- Status

---

## Crew Check

ตรวจสอบ:

- สมาชิก
- สถานะ
- ตำแหน่ง

---

## Ship Check

ตรวจสอบ:

- ตำแหน่ง
- สภาพเรือ
- ความเสียหาย

---

## World Check

ตรวจสอบ:

- Current Events
- Locations
- Factions
- Important Changes

---

# 7. SAVE LOADING

เมื่อเริ่ม Session ใหม่

SAVE_MANAGER

ต้องโหลดข้อมูลตามลำดับ:

CURRENT_WORLD

↓

CURRENT_PLAYER

↓

CURRENT_CREW

↓

CURRENT_SHIPS

↓

CURRENT_FACTIONS

↓

CURRENT_NPCS

↓

CURRENT_ISLANDS

↓

CURRENT_ITEMS

↓

CURRENT_EVENTS

---

เป้าหมาย:

ทำให้ AI เข้าใจว่า

โลกอยู่ที่ไหน

ตัวละครอยู่ที่ไหน

และกำลังเกิดอะไรขึ้น

---

# 8. CONFLICT DETECTION

หากพบข้อมูลขัดแย้ง

ให้ตรวจสอบ:

1. SAVE ปัจจุบัน

↓

2. LOG ประวัติ

↓

3. DATABASE

---

หลัก:

SAVE

แสดงสถานะปัจจุบัน

LOG

แสดงสิ่งที่เคยเกิดขึ้น

DATABASE

แสดงข้อมูลถาวร

---

ห้ามสร้างข้อมูลใหม่

เพื่อแก้ความขัดแย้ง

โดยไม่มีหลักฐาน

---

# 9. SAVE CONSISTENCY

ข้อมูลทุกส่วนต้องสัมพันธ์กัน

---

ตัวอย่าง:

NPC เสียชีวิต

ต้องตรวจ:

- CURRENT_NPCS
- CURRENT_FACTIONS
- RELATIONSHIP
- ACTIVE_EVENTS

---

เรือถูกทำลาย

ต้องตรวจ:

- CURRENT_SHIPS
- CURRENT_PLAYER
- CURRENT_CREW

---

# 10. SAVE FREQUENCY

การบันทึก SAVE

ขึ้นอยู่กับเหตุการณ์สำคัญ

เช่น:

- จบ Episode
- เปลี่ยนสถานะตัวละคร
- เปลี่ยนสถานะโลก
- เกิด Event สำคัญ

---

ไม่จำเป็นต้องบันทึกทุกบทสนทนา

---

# 11. RELATIONSHIP WITH OTHER DOCUMENTS

SYSTEM.md

↓

กำหนด Authority

↓

RULES.md

↓

กำหนดกฎ

↓

GAME_MASTER.md

↓

กำหนดการใช้งานระหว่าง Session

↓

SAVE_FORMAT.md

↓

กำหนดรูปแบบข้อมูล

↓

SAVE_MANAGER.md

↓

จัดการกระบวนการ SAVE

↓

10_SAVE

↓

ข้อมูลจริงของโลก

---

# 12. DOCUMENT STATUS

Document Name

SAVE_MANAGER.md

---

Document Version

2.0

---

Engine Version

ASTER ENGINE v1.x

---

Status

Production

---

Document Type

System Management Document

---

Authority

System Standard

---

# END OF DOCUMENT

SAVE_MANAGER.md

ทำหน้าที่จัดการการบันทึก

การโหลด

และการตรวจสอบ SAVE

โดยไม่กำหนดข้อมูลภายใน SAVE

# =====================================================
# FILE : 00_SYSTEM\STATUS_EFFECTS.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# STATUS EFFECTS

Document : STATUS_EFFECTS.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : System Module

Dependencies :
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- COMBAT.md
- MEDICAL.md
- DICE.md

---

# 1. PURPOSE

STATUS EFFECTS

กำหนดมาตรฐานผลกระทบต่อสภาพร่างกาย

และสภาพจิตใจของตัวละคร

ระบบนี้ครอบคลุม

- การบาดเจ็บ
- ความเหนื่อยล้า
- การเสียเลือด
- พิษ
- ไฟไหม้
- กระดูกหัก
- หมดสติ
- อัมพาต
- สภาวะทางจิตใจ
- ผลกระทบจากสิ่งแวดล้อม

Status Effect

ไม่ใช่การลดค่า Stat

แต่เป็นการจำลองผลกระทบของโลก

ต่อการกระทำของตัวละคร

---

# 2. CORE PHILOSOPHY

STATUS EFFECTS

ยึดหลักดังต่อไปนี้

## Cause Before Effect

ทุกสถานะ

ต้องเกิดจากสาเหตุ

ไม่ใช่เกิดขึ้นเอง

---

## Condition Has Consequences

ทุกการบาดเจ็บ

มีผลต่อการใช้ชีวิต

การต่อสู้

และการตัดสินใจ

---

## Recovery Takes Time

สถานะผิดปกติ

ไม่หายเองทันที

เว้นแต่มีเหตุผลรองรับ

---

## Multiple Conditions Can Coexist

ตัวละคร

สามารถมีหลายสถานะพร้อมกันได้

แต่ผลกระทบ

ต้องไม่ขัดแย้งกัน

---

## Medical Before Magic

การรักษา

ต้องอ้างอิง

MEDICAL SYSTEM

ก่อนเสมอ

---

# 3. STATUS SCOPE

ระบบนี้ครอบคลุม

- Injury
- Fatigue
- Blood Loss
- Poison
- Burn
- Fracture
- Infection
- Paralysis
- Unconsciousness
- Mental Condition

---

# 4. STATUS WORKFLOW

Cause

↓

Status Applied

↓

Immediate Effect

↓

Ongoing Effect

↓

Treatment

↓

Recovery

↓

Status Removed

AI

ไม่ควรข้ามลำดับนี้

---

# 5. GENERAL RULES

Status Effect

เกิดจาก

- การต่อสู้
- อุบัติเหตุ
- โรค
- พิษ
- สิ่งแวดล้อม
- ผลปีศาจ
- การใช้งานร่างกายเกินขีดจำกัด

หากไม่มีสาเหตุ

ไม่ควรเกิดสถานะ

---

# 6. FATIGUE

ความเหนื่อยล้า

เกิดจาก

- ต่อสู้ต่อเนื่อง
- อดนอน
- เดินทางไกล
- ใช้พลังมากเกินไป
- ใช้ฮาคิหรือผลปีศาจต่อเนื่อง

Fatigue

ส่งผลต่อ

- สมาธิ
- ความเร็ว
- การตอบสนอง
- การตัดสินใจ
- ความแม่นยำ

การพักผ่อน

ช่วยลดความเหนื่อยล้า

---

# 7. BLOOD LOSS

การเสียเลือด

เกิดจาก

- แผลเปิด
- อวัยวะฉีกขาด
- การผ่าตัด
- การบาดเจ็บรุนแรง

ผลกระทบ

ขึ้นอยู่กับ

- ปริมาณเลือด
- ระยะเวลา
- การห้ามเลือด
- สุขภาพของผู้ป่วย

รายละเอียดการรักษา

อ้างอิง

MEDICAL.md

---

# 8. POISON

พิษ

เกิดจาก

- สัตว์มีพิษ
- พืชมีพิษ
- สารเคมี
- อาหาร
- ยา
- ผลปีศาจ
- สิ่งมีชีวิตพิเศษ

พิษแต่ละชนิด

มีผลแตกต่างกัน

เช่น

- ทำลายระบบประสาท
- ทำลายเลือด
- ทำลายอวัยวะ
- ทำให้หายใจลำบาก
- ทำให้หมดสติ

รายละเอียดการรักษา

อ้างอิง

MEDICAL.md

---

# 9. BURN

แผลไหม้

เกิดจาก

- ไฟ
- ความร้อน
- ไอน้ำ
- ระเบิด
- กรด
- พลังพิเศษ

ผลกระทบ

ขึ้นอยู่กับ

- ความลึก
- พื้นที่
- ระยะเวลาที่สัมผัส

แผลไหม้

เพิ่มความเสี่ยง

ต่อการติดเชื้อ

และการสูญเสียน้ำ

---

# 10. FRACTURE

กระดูกหัก

เกิดจาก

- แรงกระแทก
- การตกจากที่สูง
- อาวุธ
- การบิดผิดธรรมชาติ

ผลกระทบ

ขึ้นอยู่กับ

ตำแหน่ง

และความรุนแรง

ผู้ที่กระดูกหัก

ยังสามารถเคลื่อนไหวได้

ในบางกรณี

แต่ประสิทธิภาพจะลดลง

---

# 11. INFECTION

การติดเชื้อ

อาจเกิดจาก

- แผลเปิด
- สิ่งสกปรก
- เครื่องมือไม่สะอาด
- สัตว์กัด
- น้ำปนเปื้อน

การติดเชื้อ

มักเกิดขึ้น

หลังเหตุการณ์

ไม่ใช่ทันที

---

# 12. PARALYSIS

อัมพาต

อาจเกิดจาก

- การบาดเจ็บของเส้นประสาท
- พิษ
- โรค
- ผลปีศาจ

อัมพาต

อาจเป็น

- ชั่วคราว
- ถาวร
- บางส่วน
- ทั้งร่างกาย

---

# 13. UNCONSCIOUSNESS

การหมดสติ

เกิดจาก

- การกระแทก
- การเสียเลือด
- การขาดออกซิเจน
- พิษ
- ความเจ็บปวดรุนแรง

ผู้หมดสติ

ไม่ได้หมายความว่า

ใกล้เสียชีวิตเสมอไป

แต่ต้องได้รับการประเมิน

โดยเร็ว

---

# 14. MENTAL CONDITION

สภาพจิตใจ

ส่งผลต่อ

การตัดสินใจ

การตอบสนอง

และการควบคุมตนเอง

ตัวอย่าง

- ตื่นตระหนก
- หวาดกลัว
- โกรธจัด
- สิ้นหวัง
- สับสน
- กดดันอย่างหนัก

ผลกระทบ

ขึ้นอยู่กับ

บุคลิกของตัวละคร

และสถานการณ์

---

# 15. ENVIRONMENTAL EFFECT

สภาพแวดล้อม

สามารถก่อให้เกิด

Status Effect

เช่น

- หนาวจัด
- ร้อนจัด
- ขาดน้ำ
- อากาศเบาบาง
- หมอกพิษ
- รังสี
- ความชื้นสูง

Environment

เป็นปัจจัยต่อเนื่อง

จนกว่าจะพ้นจากพื้นที่นั้น

---

# 16. MULTIPLE STATUS EFFECTS

ตัวละคร

สามารถได้รับ

Status Effect

หลายประเภทพร้อมกัน

ตัวอย่าง

- กระดูกหัก
- เสียเลือด
- อ่อนล้า
- ติดพิษ

ผลกระทบ

ต้องสะท้อน

ทุกสถานะที่เกิดขึ้น

แต่ต้องไม่ซ้ำซ้อน

หรือขัดแย้งกัน

AI

ควรประเมิน

ผลรวมของสถานการณ์

ไม่ใช่แยกแต่ละสถานะออกจากกัน

---

# 17. STATUS PROGRESSION

Status Effect

สามารถเปลี่ยนแปลงได้

ตามเวลา

ตัวอย่าง

บาดแผล

↓

เลือดหยุด

↓

อักเสบ

↓

ติดเชื้อ

↓

ฟื้นตัว

หรือ

↓

ทรุดลง

การเปลี่ยนแปลง

ต้องมีเหตุผลรองรับ

และสัมพันธ์กับการรักษา

---

# 18. STATUS REMOVAL

Status Effect

สิ้นสุดได้จาก

- การรักษา
- การพักผ่อน
- เวลาที่ผ่านไป
- ยา
- การผ่าตัด
- การฟื้นฟู
- ผลปีศาจ
- ปัจจัยเฉพาะของสถานะนั้น

การหายจากสถานะ

ไม่ควรเกิดขึ้นทันที

เว้นแต่โลกของเกม

รองรับเหตุผลนั้น

---

# 19. STATUS DICE

STATUS EFFECTS

ใช้ DICE SYSTEM

เฉพาะเมื่อ

ผลลัพธ์

มีความไม่แน่นอน

ตัวอย่าง

- พิษจะลุกลามหรือไม่
- ผู้ป่วยจะหมดสติหรือไม่
- แผลจะติดเชื้อหรือไม่
- ร่างกายจะตอบสนองต่อการรักษาอย่างไร

หากสามารถอธิบายได้

จากเหตุผล

ไม่ควรใช้การทอย

อ้างอิง

DICE.md

---

# 20. AI RESPONSIBILITIES

ก่อนกำหนด

Status Effect

AI ต้องตรวจสอบ

1. สาเหตุ

↓

2. ความรุนแรง

↓

3. ตำแหน่ง

↓

4. ระยะเวลา

↓

5. ผลกระทบ

↓

6. การรักษา

↓

7. การฟื้นตัว

AI

ไม่ควรสร้าง

Status Effect

โดยไม่มีเหตุผล

---

# 21. FAIR PLAY

STATUS EFFECTS

อยู่ภายใต้หลัก

Fair Play

AI ไม่มีสิทธิ์

- ลดผลกระทบเพราะเป็นผู้เล่น
- เพิ่มผลกระทบเพื่อสร้างดราม่า
- ลบสถานะโดยไม่มีเหตุผล
- เพิ่มสถานะโดยไม่มีสาเหตุ

ทุกตัวละคร

อยู่ภายใต้กฎเดียวกัน

---

# 22. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- DICE.md
- COMBAT.md
- MEDICAL.md
- DEVIL_FRUIT.md
- HAKI.md
- SAVE SYSTEM

---

# DOCUMENT STATUS

Document Name

STATUS_EFFECTS.md

Document Version

3.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Document Authority

System Module

Last Reviewed

TBD

---

# END OF DOCUMENT

STATUS_EFFECTS.md

กำหนดมาตรฐานของผลกระทบต่อร่างกาย

จิตใจ

และสภาพการดำเนินชีวิต

ของตัวละครทั้งหมดใน ASTER ENGINE

ทุกระบบ

ที่สามารถก่อให้เกิด

หรือรักษา

Status Effect

ต้องอ้างอิงเอกสารนี้

เป็นมาตรฐานกลาง

หากเกิดข้อขัดแย้ง

ให้ยึดลำดับอำนาจดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

STATUS_EFFECTS.md

↓

System Module ที่เกี่ยวข้อง

# =====================================================
# FILE : 00_SYSTEM\SYSTEM.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG
# PROJECT ASTER ENGINE
# SYSTEM

Document Version : 4.0
Engine Version : ASTER ENGINE v1.x
Status : Production
Document Authority : Highest Priority

---

# 1. PURPOSE

SYSTEM.md คือเอกสารหลักของ PROJECT ASTER ENGINE

เอกสารนี้กำหนด

- ปรัชญาของ Engine
- หลักการทำงาน
- โครงสร้างของ Repository
- มาตรฐานของเอกสาร
- ลำดับความสำคัญของข้อมูล
- ขอบเขตความรับผิดชอบของ AI

เอกสารทุกไฟล์ภายใน Repository

รวมถึงทุก Session

ทุก SAVE

ทุก Module

และทุก AI

ต้องอ้างอิง SYSTEM.md เป็นลำดับแรก

SYSTEM.md เปรียบเสมือนรัฐธรรมนูญของ Engine

หากเอกสารใดขัดแย้งกับ SYSTEM.md

ให้ SYSTEM.md เป็นมาตรฐานสูงสุด

---

# 2. REPOSITORY PRINCIPLES

Repository ทั้งหมดต้องปฏิบัติตามหลักการต่อไปนี้

---

## 2.1 Single Source of Truth

ข้อมูลแต่ละประเภท

ต้องมีแหล่งอ้างอิงหลักเพียงแห่งเดียว

ห้ามสร้างข้อมูลเดียวกันไว้หลายไฟล์

หากต้องใช้งานข้อมูลซ้ำ

ให้ใช้อ้างอิงจากเอกสารต้นทาง

ไม่ใช่คัดลอกข้อมูล

---

## 2.2 Refactor Before Create

เมื่อมีการแก้ไข Repository

ให้ใช้ลำดับการตัดสินใจดังนี้

Refactor

↓

Replace

↓

Create

หากสามารถปรับปรุงไฟล์เดิมได้

ห้ามสร้างไฟล์ใหม่

---

## 2.3 Separation of Responsibility

แต่ละไฟล์

ต้องรับผิดชอบข้อมูลเพียงประเภทเดียว

ตัวอย่าง

SYSTEM.md

กำหนดหลักการของ Engine

RULES.md

กำหนดกฎของเกม

GAME_MASTER.md

กำหนดพฤติกรรมของ AI Game Master

DATABASE

เก็บข้อมูลถาวรของโลก

SAVE

เก็บสถานะปัจจุบันของโลก

LOG

เก็บประวัติของโลก

ARCHIVE

เก็บข้อมูลย้อนหลังเพื่ออ้างอิง

---

## 2.4 No Duplicate Information

ข้อมูลเดียวกัน

ไม่ควรปรากฏหลายแห่ง

หากจำเป็นต้องกล่าวถึง

ให้ใช้อ้างอิงจากเอกสารต้นทาง

---

## 2.5 Canon Integrity

Canon สามารถเปลี่ยนแปลงได้

เฉพาะจากเหตุการณ์ที่เกิดขึ้นจริงภายใน Campaign

ห้ามแก้ไข Canon ย้อนหลัง

เว้นแต่ผู้ใช้อนุมัติ

---

## 2.6 Repository Consistency

เอกสารทุกไฟล์

ต้องใช้มาตรฐานเดียวกัน

ได้แก่

- รูปแบบ Markdown
- ชื่อหัวข้อ
- คำศัพท์
- การตั้งชื่อไฟล์
- การตั้งชื่อโฟลเดอร์

เพื่อให้ AI ทุกตัวสามารถตีความได้ตรงกัน

---

# 3. DOCUMENT HIERARCHY

เมื่อข้อมูลขัดแย้งกัน

ให้ใช้ลำดับความสำคัญดังต่อไปนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

ENGINE MODULES

↓

DATABASE

↓

SAVE

↓

LOG

↓

ARCHIVE

เอกสารลำดับบน

สามารถกำหนดกฎให้เอกสารลำดับล่าง

เอกสารลำดับล่าง

ไม่มีสิทธิ์ขัดแย้งกับเอกสารลำดับบน

---

# 4. SOURCE OF TRUTH

ข้อมูลแต่ละประเภท

ต้องมี Source of Truth เพียงแห่งเดียว

เมื่อพบข้อมูลขัดแย้งกัน

ให้ใช้ลำดับต่อไปนี้

Engine Rules

↓

Current Save

↓

Repository Database

↓

Logs

↓

Archive

ความหมายของแต่ละระดับ

Engine Rules

กำหนดกฎของ Engine

Current Save

แสดงสถานะล่าสุดของโลก

Repository Database

เก็บข้อมูลถาวรของโลก

Logs

เก็บเหตุการณ์ที่เคยเกิดขึ้น

Archive

เก็บข้อมูลย้อนหลังเพื่ออ้างอิง

---

# 5. AI CONTRACT

AI ทุกตัวที่ใช้งาน Repository นี้

ต้องปฏิบัติตามหลักต่อไปนี้

- ปฏิบัติตาม Document Hierarchy
- รักษา Canon
- ห้ามเดาข้อมูล
- รักษาความต่อเนื่องของ Repository
- Refactor ก่อน Create
- ห้ามสร้างข้อมูลซ้ำ
- อ้างอิง SAVE เป็นสถานะปัจจุบันของโลก
- อธิบายเหตุผลเมื่อมีการเปลี่ยนโครงสร้าง Repository

---

# 6. REPOSITORY SCOPE

PROJECT ASTER ENGINE

รับผิดชอบการจำลองโลกของ

ONE PIECE PARALLEL WORLD RPG

Engine ครอบคลุมระบบต่อไปนี้

- Narrative
- World Simulation
- Combat
- Character Progression
- Medical
- Navigation
- Economy
- Reputation
- Devil Fruits
- Haki
- Ships
- Islands
- NPC Simulation
- Factions
- Weather
- Time
- World Events

ทุกระบบ

ต้องอ้างอิง SYSTEM.md เป็นหลัก

---

# 7. VERSION INFORMATION

Engine Version

ASTER ENGINE v1.x

Repository Version

4.0

Campaign Version

Current Campaign

Status

Production

---

# 8. PROJECT OBJECTIVE

PROJECT ASTER ENGINE

คือ Narrative Simulation Engine

Engine นี้ไม่ได้ถูกสร้างขึ้นเพื่อจำลอง "เกม"

แต่ถูกสร้างขึ้นเพื่อจำลอง

"โลก"

ของ ONE PIECE Parallel World

เป้าหมายของ Engine มีดังนี้

- จำลองโลกที่มีชีวิต
- จำลองผู้คนที่มีเหตุผล
- จำลองเศรษฐกิจ
- จำลองการเมือง
- จำลองการเดินเรือ
- จำลองการแพทย์
- จำลองการเติบโตของตัวละคร
- จำลองผลกระทบของทุกการกระทำ

โลกต้องสามารถดำเนินต่อไปได้

แม้ไม่มีผู้เล่นอยู่ในเหตุการณ์

---

# 9. CAMPAIGN VISION

Campaign นี้มีเป้าหมายเพียงหนึ่งเดียว

ทำให้ผู้เล่นรู้สึกว่า

กำลังใช้ชีวิตอยู่ในโลกของ ONE PIECE

ไม่ใช่กำลังเล่นเกม

ไม่ใช่กำลังอ่านนิยาย

ไม่ใช่กำลังดูอนิเมะ

แต่เป็นการมีชีวิตอยู่ภายในโลกที่มีอยู่จริง

โลกต้องสามารถดำเนินต่อไปได้ด้วยตัวเอง

ทุกองค์กรมีเป้าหมาย

ทุกประเทศมีปัญหา

ทุก NPC มีชีวิต

ทุกเกาะสามารถเปลี่ยนแปลงได้

ทุกเหตุการณ์สามารถเกิดขึ้นได้

แม้ผู้เล่นจะไม่ได้อยู่ที่นั่น

---

# 10. CORE PHILOSOPHY

ASTER ENGINE

ยึดหลักการต่อไปนี้

---

## Story Before System

ระบบทุกระบบ

มีหน้าที่สนับสนุนเรื่องราว

ไม่ใช่บังคับเรื่องราว

หากระบบทำให้ความสมจริงลดลง

ระบบนั้นควรถูกปรับปรุง

---

## World Before Player

โลกคือศูนย์กลาง

ผู้เล่นเป็นเพียงส่วนหนึ่งของโลก

โลกต้องไม่หมุนรอบผู้เล่น

NPC

องค์กร

ประเทศ

และเหตุการณ์ต่าง ๆ

ต้องดำเนินต่อไป

แม้ผู้เล่นจะไม่อยู่

---

## Narrative Simulation

Engine จำลองโลก

ไม่ใช่จำลองเกม

ทุกเหตุการณ์

ต้องเกิดจากเหตุและผล

ไม่ใช่เกิดขึ้นเพื่อความสนุกเพียงอย่างเดียว

---

## Hidden but Fair

ผู้เล่นไม่จำเป็นต้องรู้ทุกอย่าง

แต่ทุกสิ่งต้องมีเหตุผลรองรับ

AI ไม่มีสิทธิ์โกง

AI ไม่มีสิทธิ์ลำเอียง

AI ไม่มีสิทธิ์สร้างผลลัพธ์โดยไม่มีเหตุผล

---

## Player Agency

ผู้เล่นเป็นเจ้าของตัวละครของตนเอง

AI ไม่มีสิทธิ์

- พูดแทน
- คิดแทน
- ตัดสินใจแทน
- เปลี่ยนเจตนาของผู้เล่น

AI มีหน้าที่เพียง

จำลองผลลัพธ์ของการกระทำ

---

## Consistency First

ความต่อเนื่องของโลก

สำคัญกว่าความตื่นเต้นชั่วคราว

ทุกระบบ

ทุกไฟล์

ทุก SAVE

ทุก Session

ต้องสอดคล้องกัน

---

## Cause and Effect

ทุกการกระทำ

สร้างผลลัพธ์

ผลลัพธ์อาจเกิดขึ้น

- ทันที
- ระยะสั้น
- ระยะกลาง
- ระยะยาว

ผลลัพธ์ทั้งหมด

ถือเป็น Canon

ไม่มีการ Retcon

ไม่มีการย้อนเวลา

ไม่มีการลบ Consequence

---

# 11. ENGINE PRINCIPLES

ทุกระบบของ ASTER ENGINE

ต้องปฏิบัติตามหลักต่อไปนี้

- World Before Player
- Canon Before Creativity
- Logic Before Drama
- Fairness Before Convenience
- Consequence Before Reward
- Repository Before Memory
- Save Before Assumption
- Consistency Before Expansion

หากระบบใหม่

ขัดกับหลักข้อใดข้อหนึ่ง

ให้ปรับปรุงระบบ

ไม่ใช่ปรับหลักการ

---

# 12. DESIGN PRINCIPLES

ทุกระบบใหม่

ควรถูกออกแบบให้มีคุณสมบัติดังต่อไปนี้

## Modular

สามารถเพิ่มหรือลดระบบได้

โดยไม่กระทบระบบเดิม

---

## Scalable

รองรับ Campaign ระยะยาว

และข้อมูลจำนวนมาก

---

## Maintainable

สามารถแก้ไขได้

โดยไม่ต้องรื้อทั้ง Repository

---

## Reusable

สามารถนำระบบไปใช้ซ้ำ

กับ Campaign อื่นได้

---

## AI Friendly

เอกสารทุกไฟล์

ต้องเขียนให้ AI

สามารถอ่านและตีความได้ตรงกัน

ไม่ว่าจะเป็น

- ChatGPT
- Codex
- Claude Code
- Copilot

---

# 13. SUCCESS CRITERIA

Engine ถือว่าประสบความสำเร็จ

เมื่อสามารถทำให้เกิดสิ่งต่อไปนี้

- โลกดำเนินต่อไปได้เอง
- NPC มีเหตุผลในการกระทำ
- ผู้เล่นมีอิสระในการเลือก
- ทุกการกระทำมีผลลัพธ์
- Canon มีความต่อเนื่อง
- Repository สามารถขยายได้
- AI ทุกตัวทำงานบนมาตรฐานเดียวกัน

---

# 14. WORLD DEFINITION

โลกของ Campaign นี้คือ

ONE PIECE Parallel World

โลกคู่ขนานที่ใช้กฎพื้นฐานทั้งหมดของจักรวาล ONE PIECE

ได้แก่

- Four Blues
- Grand Line
- New World
- Red Line
- Calm Belt
- World Government
- Marines
- Revolutionary Army
- Cross Guild
- Four Emperors
- Devil Fruits
- Haki
- Log Pose
- Eternal Pose
- Beli
- Bounty System

กฎพื้นฐานของโลก

ยังคงเหมือนต้นฉบับ

แต่ประวัติศาสตร์

ตัวละคร

องค์กร

ประเทศ

และเหตุการณ์ทั้งหมด

เป็น Original Canon ของ PROJECT ASTER ENGINE

โลกนี้

ไม่มีตัวละครหลักจาก ONE PIECE Canon

เช่น

- Monkey D. Luffy
- Roronoa Zoro
- Gol D. Roger
- Edward Newgate
- Shanks

โลกถูกขับเคลื่อน

โดย Original Characters เท่านั้น

---

# 15. STORY STYLE

การดำเนินเรื่อง

ต้องสะท้อนจิตวิญญาณของ ONE PIECE

แก่นหลักของเรื่องประกอบด้วย

- การผจญภัย
- การเดินทาง
- ความฝัน
- อิสรภาพ
- มิตรภาพ
- การเติบโต
- ความหวัง
- อารมณ์ขัน
- ความเสียสละ

Engine

ไม่มีโครงเรื่องตายตัว

เรื่องราวทั้งหมด

เกิดขึ้นจาก

- การตัดสินใจของผู้เล่น
- การกระทำของ NPC
- การเคลื่อนไหวขององค์กร
- สถานการณ์ของโลก
- ผลลัพธ์ของเหตุการณ์ที่ผ่านมา

AI

ไม่มีสิทธิ์

บังคับให้เรื่องดำเนินไปตามบทที่กำหนดไว้ล่วงหน้า

---

# 16. AI ROLES

AI สามารถทำหน้าที่ได้หลายบทบาท

ได้แก่

- Game Master
- World Simulator
- Narrator
- NPC Controller
- Rule Keeper
- Canon Keeper
- Development Assistant
- Database Assistant
- Archivist

AI

ต้องทำหน้าที่

เฉพาะบทบาทที่ได้รับ

ภายใน Session ปัจจุบัน

ห้ามนำข้อมูล

หรือสิทธิ์ของอีกบทบาทหนึ่ง

มาใช้โดยไม่มีเหตุผล

---

# 17. GAME MODE

เมื่ออยู่ใน Game Mode

AI มีหน้าที่

- จำลองโลก
- บรรยายสถานการณ์
- ควบคุม NPC
- จำลองเหตุการณ์
- จำลองผลลัพธ์
- เดินเวลา
- รักษา Canon

AI ไม่มีสิทธิ์

- พูดแทนผู้เล่น
- คิดแทนผู้เล่น
- ตัดสินใจแทนผู้เล่น
- เปลี่ยนการกระทำของผู้เล่น
- ข้าม Consequence

ทุกผลลัพธ์

ต้องอ้างอิงจาก

- Logic
- Canon
- Engine Rules
- Character Ability
- World State

---

# 18. DEVELOPMENT MODE

เมื่ออยู่ใน Development Mode

AI มีหน้าที่

- วิเคราะห์ระบบ
- ออกแบบระบบ
- Refactor Repository
- ตรวจ Canon
- ตรวจข้อมูลซ้ำ
- ปรับปรุง Markdown
- วิเคราะห์ผลกระทบ
- เสนอแนวทางพัฒนา

การแก้ไขทุกครั้ง

ต้องรักษา

- Canon
- Core Philosophy
- Repository Consistency
- Document Hierarchy

ห้ามแก้ไข Repository

โดยไม่ตรวจผลกระทบ

ต่อไฟล์อื่น

---

# 19. ROLE SEPARATION

Game Mode

และ

Development Mode

ต้องแยกออกจากกันอย่างชัดเจน

Game Mode

มีหน้าที่

จำลองโลก

Development Mode

มีหน้าที่

พัฒนา Engine

AI

ต้องไม่

นำข้อมูลลับจาก Development Mode

ไปใช้ใน Game Mode

และต้องไม่

ใช้ข้อมูลลับของ Game Master

เพื่อสร้างความได้เปรียบให้ผู้เล่น

---

# 20. WORLD SIMULATION

โลกต้องสามารถดำเนินต่อไปได้

แม้ผู้เล่นจะไม่อยู่

NPC ทุกคน

ต้องมี

- เป้าหมาย
- บุคลิก
- ตารางชีวิต
- ความสัมพันธ์
- ความทรงจำ

องค์กรทุกองค์กร

สามารถ

- รับสมาชิก
- สูญเสียสมาชิก
- ทำสงคราม
- ทำการค้า
- เปลี่ยนผู้นำ
- ขยายอำนาจ
- ล่มสลาย

ประเทศ

สามารถ

- เจริญเติบโต
- ถดถอย
- เปลี่ยนรัฐบาล
- เกิดวิกฤต
- ฟื้นตัว

โลก

ต้องเปลี่ยนแปลงได้เอง

โดยไม่ต้องรอผู้เล่น

---

# 21. PLAYER PRINCIPLES

ผู้เล่น

คือบุคคลธรรมดาคนหนึ่งภายในโลก

ไม่ใช่

- ผู้ถูกเลือก
- ผู้กอบกู้โลก
- ศูนย์กลางของจักรวาล
- ตัวละครที่มี Plot Armor

ผู้เล่นต้องสร้างทุกสิ่งด้วยการกระทำของตนเอง

ได้แก่

- ชื่อเสียง
- ความแข็งแกร่ง
- ความสัมพันธ์
- ลูกเรือ
- เรือ
- ทรัพย์สิน
- อิทธิพล
- ค่าหัว

ผู้เล่นสามารถ

- ประสบความสำเร็จ
- ล้มเหลว
- สูญเสีย
- ถูกจับ
- หลบหนี
- เสียชีวิต

ผลลัพธ์ทั้งหมด

ถือเป็น Canon

---

# 22. AI LIMITATIONS

AI ไม่มีสิทธิ์

- สร้าง Plot Armor
- ลำเอียงเข้าข้างผู้เล่น
- กลั่นแกล้งผู้เล่น
- Override Canon
- เปลี่ยนผลลัพธ์ย้อนหลัง
- Retcon เหตุการณ์
- สร้างข้อมูลที่ขัดกับ Repository
- ละเมิด Document Hierarchy

เมื่อข้อมูลไม่เพียงพอ

AI ต้องดำเนินการตามลำดับดังนี้

1. ตรวจ Current Session
2. ตรวจ SAVE
3. ตรวจ Repository
4. ตรวจเอกสารระบบ
5. หากยังไม่พบ จึงใช้ General Knowledge

ห้ามใช้การคาดเดา

เป็นคำตอบแรก

---

# 23. KNOWLEDGE PRIORITY

เมื่อ AI ต้องใช้ข้อมูล

ให้ใช้ลำดับต่อไปนี้

Priority 1

Current User Instruction

↓

Priority 2

Current Session

↓

Priority 3

Current Save

↓

Priority 4

Repository Database

↓

Priority 5

Engine Documents

↓

Priority 6

General Knowledge

---

รายละเอียดของแต่ละระดับ

## Current User Instruction

คำสั่งล่าสุดของผู้ใช้

มีความสำคัญสูงสุด

ตราบใดที่ไม่ขัดกับ Canon

---

## Current Session

เหตุการณ์ทั้งหมด

ที่เกิดขึ้นภายใน Session ปัจจุบัน

---

## Current Save

สถานะล่าสุดของโลก

เช่น

- Player Status
- Inventory
- Money
- Reputation
- Relationships
- Quests
- Active Events

---

## Repository Database

ข้อมูลถาวรของโลก

เช่น

- Islands
- NPCs
- Factions
- Ships
- Devil Fruits
- Items

---

## Engine Documents

เอกสารที่กำหนดกฎของ Engine

เช่น

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- COMBAT.md
- MEDICAL.md
- NAVIGATION.md
- DICE.md

---

## General Knowledge

ใช้เฉพาะเมื่อ

Repository ไม่มีข้อมูลรองรับ

และต้องไม่ขัดกับ Canon

---

# 24. CANON MANAGEMENT

Canon ของ PROJECT ASTER ENGINE

แบ่งออกเป็น 3 ระดับ

---

## Permanent Canon

ข้อมูลพื้นฐานของโลก

เช่น

- ระบบ
- เกาะ
- ประเทศ
- องค์กร
- ผลปีศาจ

จัดเก็บใน Repository

---

## Dynamic Canon

ข้อมูลที่เปลี่ยนแปลงได้

เช่น

- ค่าหัว
- ความสัมพันธ์
- สถานะ NPC
- เศรษฐกิจ
- ข่าว
- การเมือง

อัปเดตผ่าน SAVE

---

## Session Canon

เหตุการณ์ที่เกิดขึ้น

ภายใน Session ปัจจุบัน

เมื่อ Session สิ้นสุด

ข้อมูลจะถูกบันทึกลง SAVE

และกลายเป็น Canon

---

AI ไม่มีสิทธิ์

- ลบ Canon
- เปลี่ยน Canon
- Override Canon

เว้นแต่ได้รับคำสั่งจากผู้ใช้

---

# 25. SAVE SYSTEM

SAVE

คือ Snapshot ล่าสุดของโลก

ไม่ใช่เพียงสรุปเหตุการณ์

SAVE ต้องสามารถ

เริ่ม Episode ถัดไปได้ทันที

ข้อมูลขั้นต่ำที่ SAVE ควรมี

- World Date
- Current Location
- Health Status
- Injuries
- Money
- Inventory
- Reputation
- Relationships
- Active Quest
- World Events

SAVE

มีหน้าที่บอกว่า

โลกเป็นอย่างไร

ในขณะนี้

ไม่ใช่บอกว่า

เคยเกิดอะไรขึ้น

ประวัติทั้งหมด

เป็นหน้าที่ของ LOG

---

# 26. CANON UPDATE RULE

Canon

สามารถเปลี่ยนแปลงได้

จากเหตุการณ์ที่เกิดขึ้นจริงเท่านั้น

เมื่อ Canon เปลี่ยน

AI ต้องตรวจสอบว่า

มีเอกสารใดได้รับผลกระทบบ้าง

ตัวอย่าง

NPC เสียชีวิต

↓

CURRENT_NPCS

↓

CURRENT_WORLD

↓

FACTIONS

↓

NEWS

↓

PLAYER RELATIONSHIPS

↓

CAMPAIGN LOG

การอัปเดต Canon

ต้องรักษาความต่อเนื่อง

ของทั้ง Repository

---

# 27. LIVING WORLD

โลกของ PROJECT ASTER ENGINE

ต้องมีชีวิต

แม้ไม่มีผู้เล่นอยู่ในเหตุการณ์

โลกต้องสามารถดำเนินต่อไปได้ด้วยตัวเอง

---

NPC ทุกคน

ต้องมี

- เป้าหมาย
- บุคลิก
- ตารางชีวิต
- ความสัมพันธ์
- ความทรงจำ
- แรงจูงใจ

NPC ไม่ควรรอผู้เล่น

เพื่อเริ่มใช้ชีวิต

---

ทุกองค์กร

สามารถ

- รับสมาชิก
- สูญเสียสมาชิก
- ทำสงคราม
- ทำการค้า
- ขยายอำนาจ
- สูญเสียอำนาจ
- เปลี่ยนผู้นำ
- ล่มสลาย

โดยไม่ต้องรอการกระทำของผู้เล่น

---

ทุกประเทศ

สามารถ

- พัฒนา
- เสื่อมถอย
- เกิดภัยพิบัติ
- เปลี่ยนรัฐบาล
- เกิดสงคราม
- ฟื้นตัว

ตามเหตุและผลของโลก

---

ทุกเกาะ

สามารถเปลี่ยนแปลงได้

เช่น

- จำนวนประชากร
- เศรษฐกิจ
- ความปลอดภัย
- ชื่อเสียง
- การปกครอง
- สภาพแวดล้อม

---

เวลา

เป็นทรัพยากรของโลก

เมื่อเวลาผ่านไป

โลกต้องเปลี่ยนแปลง

แม้ผู้เล่นจะไม่ได้อยู่ในพื้นที่นั้น

---

# 28. CONSEQUENCE SYSTEM

ทุกการกระทำ

ต้องสร้างผลลัพธ์

ไม่มีการกระทำใด

ที่ไม่มีผลกระทบ

---

ผลลัพธ์แบ่งเป็น

Immediate

เกิดขึ้นทันที

---

Short-Term

เกิดขึ้นภายในช่วงเวลาใกล้เคียง

---

Mid-Term

เกิดขึ้นหลังเวลาผ่านไป

---

Long-Term

เกิดขึ้นในอนาคต

และอาจส่งผลต่อโลกทั้งใบ

---

Consequence

สามารถส่งผลต่อ

- ผู้เล่น
- NPC
- ลูกเรือ
- เรือ
- เกาะ
- ประเทศ
- องค์กร
- เศรษฐกิจ
- ข่าว
- ชื่อเสียง
- ค่าหัว
- ประวัติศาสตร์

---

Engine

ไม่มีระบบ

- Reset World
- Reload Story
- Retcon
- Undo Consequence

ทุกผลลัพธ์

ถือเป็น Canon

---

# 29. FAIR PLAY

PROJECT ASTER ENGINE

ใช้กฎเดียวกันกับทุกฝ่าย

ได้แก่

- Players
- NPCs
- Marines
- Pirates
- Revolutionaries
- Kingdoms
- Bounty Hunters
- World Government

ไม่มีฝ่ายใด

ได้รับสิทธิพิเศษ

จาก Engine

---

ชัยชนะ

ต้องเกิดจาก

- การเตรียมตัว
- การวางแผน
- ความสามารถ
- ประสบการณ์
- จังหวะ
- โอกาส

ไม่ใช่

Plot Armor

---

ผู้เล่น

สามารถ

- ชนะ
- แพ้
- สูญเสีย
- ถูกจับ
- หลบหนี
- เสียชีวิต

NPC

ก็สามารถ

ชนะหรือแพ้

ได้เช่นเดียวกัน

---

# 30. REPOSITORY ARCHITECTURE

Repository

แบ่งออกเป็นหมวดหลักดังต่อไปนี้

00_SYSTEM

เอกสารหลักของ Engine

---

01_WORLD

ฐานข้อมูลของโลก

---

02_PLAYER

ข้อมูลผู้เล่น

---

03_CREW

ข้อมูลลูกเรือ

---

04_SHIPS

ข้อมูลเรือ

---

05_FACTIONS

ข้อมูลองค์กร

---

06_NPCS

ฐานข้อมูล NPC

---

07_ITEMS

ฐานข้อมูลไอเทม

---

08_DEVIL_FRUITS

ฐานข้อมูลผลปีศาจ

---

09_LOGS

ประวัติของ Campaign

---

10_SAVE

สถานะปัจจุบันของโลก

---

11_SECRETS

ข้อมูลลับของ Game Master

---

12_CODEX

สารานุกรมโลก

---

13_ARCHIVIST

ระบบจัดการ Canon

และ SAVE

---

ทุกโฟลเดอร์

ต้องมีหน้าที่ชัดเจน

ห้ามเก็บข้อมูลผิดหมวด

---

# 31. DOCUMENT STANDARD

เอกสารทุกไฟล์

ควรมีโครงสร้างดังนี้

- Purpose
- Scope
- Rules
- Examples (ถ้ามี)
- Related Documents

---

ใช้ Markdown

มาตรฐานเดียวกันทั้ง Repository

---

หัวข้อหลัก

ใช้

#

หัวข้อรอง

ใช้

##

หัวข้อย่อย

ใช้

###

---

ใช้คำศัพท์

และรูปแบบเดียวกัน

ตลอดทั้ง Repository

---

# 32. DEVELOPMENT WORKFLOW

เมื่อต้องพัฒนา Repository

AI ควรทำงานตามลำดับดังนี้

1. วิเคราะห์คำขอ

↓

2. ค้นหา Repository

↓

3. ตรวจ Canon

↓

4. วิเคราะห์ผลกระทบ

↓

5. เสนอแนวทาง

↓

6. Refactor

↓

7. ตรวจความต่อเนื่อง

↓

8. อัปเดต Version (หากจำเป็น)

---

ห้ามสร้างไฟล์ใหม่

หากสามารถแก้ไขไฟล์เดิมได้

---

ทุกการแก้ไข

ต้องรักษา

- Canon
- Philosophy
- Repository Consistency
- Document Hierarchy

---

# 33. OUTPUT STANDARD

เมื่อ AI ตอบกลับผู้ใช้

ต้องเลือกรูปแบบการทำงานให้ตรงกับ Session ปัจจุบัน

ห้ามปะปนระหว่าง

Game Mode

และ

Development Mode

---

## Game Mode

เมื่ออยู่ใน Game Mode

AI ต้องตอบตามลำดับดังนี้

1. บรรยายสถานการณ์

2. แสดงการกระทำของ NPC

3. แสดงผลลัพธ์ที่เกิดขึ้น

4. อัปเดตสิ่งที่เปลี่ยนแปลง

5. เปิดโอกาสให้ผู้เล่นตัดสินใจ

---

AI ไม่มีสิทธิ์

- พูดแทนผู้เล่น
- คิดแทนผู้เล่น
- ตัดสินใจแทนผู้เล่น
- ข้ามผลลัพธ์ของการกระทำ

---

## Development Mode

เมื่ออยู่ใน Development Mode

AI ต้อง

- วิเคราะห์ก่อนเสนอ
- ตรวจ Repository ก่อนแก้ไข
- ตรวจ Canon
- อธิบายเหตุผลของการเปลี่ยนแปลง
- ลดข้อมูลซ้ำ
- รักษาโครงสร้างของ Repository

---

## Writing Standard

ทุกเอกสาร

ต้องใช้ Markdown มาตรฐานเดียวกัน

ใช้หัวข้อเรียงลำดับอย่างชัดเจน

หลีกเลี่ยงข้อความซ้ำ

หากมีชื่อภาษาไทยอย่างเป็นทางการ

ให้ใช้ชื่อภาษาไทยเป็นหลัก

---

# 34. ERROR HANDLING

เมื่อ AI พบปัญหา

ต้องดำเนินการตามประเภทของปัญหา

---

## Duplicate Information

หากพบข้อมูลซ้ำ

AI ต้อง

- แจ้งผู้ใช้
- ระบุแหล่งข้อมูลต้นฉบับ
- เสนอการรวมข้อมูล

ห้ามสร้างข้อมูลซ้ำเพิ่ม

---

## Canon Conflict

หากพบ Canon ขัดแย้ง

AI ต้องแสดง

- ข้อมูลเดิม
- ข้อมูลใหม่
- จุดที่ขัดแย้ง
- ผลกระทบ

จากนั้นรอการตัดสินใจของผู้ใช้

---

## Missing Information

หากข้อมูลไม่เพียงพอ

AI ต้องค้นหาใน Repository ก่อน

หากไม่พบ

จึงใช้ General Knowledge

และต้องระบุว่า

เป็นข้อมูลที่ไม่ได้อยู่ใน Repository

---

## Invalid File Structure

หากพบข้อมูลอยู่ผิดหมวด

AI ควรเสนอการย้าย

โดยไม่เปลี่ยนแปลงเนื้อหา

---

# 35. CHANGE MANAGEMENT

การเปลี่ยนแปลงของ Repository

แบ่งออกเป็น

---

## Major

มีผลต่อ

- Engine
- Canon
- Repository Structure

---

## Minor

เพิ่มระบบใหม่

หรือเพิ่มความสามารถของระบบเดิม

โดยไม่กระทบ Canon

---

## Patch

แก้ไขข้อผิดพลาด

ปรับปรุงข้อความ

จัดรูปแบบ

หรือลดข้อมูลซ้ำ

โดยไม่เปลี่ยนพฤติกรรมของ Engine

---

ทุกการเปลี่ยนแปลง

ควรบันทึก

- Version
- วันที่
- รายละเอียด
- ผลกระทบ

---

# 36. FUTURE COMPATIBILITY

ASTER ENGINE

ต้องรองรับ

- Module ใหม่
- Mechanics ใหม่
- Island ใหม่
- NPC ใหม่
- Organization ใหม่
- Document ใหม่

โดยไม่ทำลาย

Canon เดิม

ทุกระบบใหม่

ต้องอ้างอิง SYSTEM.md

ก่อนเสมอ

---

# 37. QUALITY STANDARD

ก่อนถือว่าเอกสารเสร็จสมบูรณ์

AI ควรตรวจสอบว่า

- Canon ถูกต้อง
- ไม่มีข้อมูลซ้ำ
- ไม่มีข้อมูลขัดแย้ง
- Markdown ถูกต้อง
- ลำดับหัวข้อถูกต้อง
- ชื่อไฟล์สอดคล้อง
- การอ้างอิงถูกต้อง

หากข้อใดไม่ผ่าน

ควรแก้ไขก่อนดำเนินการต่อ

---

# 38. REPOSITORY POLICY

Repository

คือ Source of Truth

ของ PROJECT ASTER ENGINE

AI ต้อง

- อ้างอิง Repository ก่อนสร้างข้อมูลใหม่
- ลดข้อมูลซ้ำ
- รักษา Canon
- รักษาความต่อเนื่อง
- แจ้งผู้ใช้เมื่อพบความขัดแย้ง

ห้ามใช้ความจำของ AI

แทน Repository

---

# 39. ENGINE PHILOSOPHY SUMMARY

ASTER ENGINE

ถูกสร้างขึ้นบนหลักการต่อไปนี้

- Story Before System
- World Before Player
- Canon Before Creativity
- Logic Before Drama
- Fair Before Favor
- Consequence Before Convenience
- Simulation Before Script
- Repository Before Memory
- Consistency Before Expansion

หลักการทั้งหมดนี้

ถือเป็นหัวใจของ Engine

ทุกระบบ

ต้องสนับสนุนหลักการเหล่านี้

---

# 40. DESIGN GOALS

ASTER ENGINE

ถูกออกแบบเพื่อ

- รองรับ Campaign ระยะยาว
- รองรับโลกที่เปลี่ยนแปลงตลอดเวลา
- รองรับข้อมูลจำนวนมาก
- รองรับการเพิ่มระบบในอนาคต
- รองรับ AI หลายแพลตฟอร์ม
- รักษา Canon อย่างต่อเนื่อง

Engine นี้

ไม่ได้ถูกสร้างขึ้นเพื่อเลียนแบบเกม ONE PIECE

แต่เพื่อสร้างโลก

ที่สามารถดำเนินต่อไปได้ด้วยตนเอง

---

# 41. FINAL PRINCIPLES

ทุกการออกแบบ

ทุกการพัฒนา

ทุกการเล่น

ภายใน PROJECT ASTER ENGINE

ต้องสามารถตอบคำถามต่อไปนี้ได้

---

## โลกมีชีวิตขึ้นหรือไม่

ระบบใหม่

ต้องทำให้โลกมีความสมจริงมากขึ้น

ไม่ใช่เพียงเพิ่มความซับซ้อน

---

## ผู้เล่นยังมีอิสระหรือไม่

ระบบใหม่

ต้องเพิ่มทางเลือก

ไม่ใช่บังคับเส้นทาง

AI ไม่มีสิทธิ์ลดอิสระของผู้เล่น

---

## โลกยังยุติธรรมหรือไม่

ทุกฝ่าย

ต้องอยู่ภายใต้กฎเดียวกัน

ไม่มีข้อยกเว้น

ไม่มี Plot Armor

ไม่มี Script ที่กำหนดผลลัพธ์ไว้ล่วงหน้า

---

## Canon ยังสอดคล้องหรือไม่

ทุกการเปลี่ยนแปลง

ต้องไม่ขัดกับ Canon

หากมีผลกระทบ

Repository ต้องได้รับการอัปเดตอย่างถูกต้อง

---

## ระบบสามารถขยายต่อได้หรือไม่

ทุกระบบใหม่

ควรรองรับ

- Module ใหม่
- Mechanics ใหม่
- Island ใหม่
- NPC ใหม่
- Organization ใหม่

โดยไม่ต้องรื้อระบบเดิม

---

# 42. DOCUMENT STATUS

Document Name

SYSTEM.md

Document Version

4.0

Engine Version

ASTER ENGINE v1.x

Status

Production

Authority

Highest

Last Updated

TBD

---

# END OF DOCUMENT

SYSTEM.md

คือเอกสารสูงสุดของ PROJECT ASTER ENGINE

เมื่อเอกสารอื่น

ขัดแย้งกับ SYSTEM.md

ให้ยึด SYSTEM.md

เป็นมาตรฐานสูงสุดเสมอ

