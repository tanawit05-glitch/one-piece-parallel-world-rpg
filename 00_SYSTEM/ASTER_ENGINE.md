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