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