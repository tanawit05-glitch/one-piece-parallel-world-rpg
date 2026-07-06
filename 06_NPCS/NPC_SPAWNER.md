# NPC_SPAWNER.md
## ASTER ENGINE — NPC SPAWN SYSTEM

---

# 🌍 CORE IDEA

NPC Spawner คือระบบที่ทำให้:

> “โลกสร้างสิ่งมีชีวิตของตัวเองขึ้นมาโดยอัตโนมัติ”

NPC ไม่ได้ถูกเขียนทีละตัว  
แต่ “เกิดจาก logic ของโลก”

---

# ⚙️ SPAWN PRINCIPLES

## 1. WORLD-FIRST SPAWN
NPC ต้องเกิดจากโลกก่อนเสมอ:

- เกาะ
- faction
- สงคราม
- เศรษฐกิจ
- เหตุการณ์

---

## 2. PURPOSE-DRIVEN SPAWN
NPC ต้องเกิดมาพร้อม “เหตุผล”

ตัวอย่าง:
- เกาะโจรสลัด → spawn Pirate
- เมืองรัฐบาล → spawn Marine
- เขตสงคราม → spawn Fighter

---

## 3. DENSITY CONTROL
โลกควบคุมจำนวน NPC:

- safe zone → NPC น้อย
- conflict zone → NPC เยอะ
- war zone → NPC เกิด/ตายเร็ว

---

# 🧬 SPAWN CATEGORIES

## 🟢 1. STATIC SPAWN
NPC ประจำพื้นที่

- ชาวเมือง
- พ่อค้า
- ทหารประจำฐาน

👉 stable population

---

## 🟡 2. EVENT SPAWN
NPC เกิดจากเหตุการณ์

- สงคราม
- ภัยพิบัติ
- การล่า bounty

👉 temporary spike

---

## 🔴 3. FACTION SPAWN
NPC ตามองค์กร

- Marines recruit
- Pirate crew member
- Revolutionary agents

👉 structured hierarchy

---

## ⚫ 4. LEGENDARY SPAWN
NPC หายากมาก

- world events
- hidden island
- secret faction

👉 world-changing entities

---

# 🔁 SPAWN LOGIC FLOW

## STEP 1: CONTEXT CHECK
โลกตรวจสอบ:

- พื้นที่คืออะไร
- faction ครอบครองไหม
- กำลังเกิด event ไหม

---

## STEP 2: ARCHETYPE SELECT
เลือก NPC archetype:

- T0–T5
- Fighter / Civilian / Leader

---

## STEP 3: MEMORY SEED
NPC เกิดมาพร้อม:

- background
- faction bias
- personality seed

---

## STEP 4: INSERT INTO WORLD
NPC ถูกใส่ลง simulation:

- location
- social graph
- faction system

---

# 🧠 SPAWN INTELLIGENCE RULE

NPC ต้องมี:

- past (ประวัติ)
- goal (เป้าหมาย)
- bias (อคติ)
- fear level

❗ ห้าม spawn NPC ว่างเปล่า

---

# ⚔️ SPAWN & DEATH LOOP

โลกจะวน loop:

1. NPC spawn
2. NPC live
3. NPC conflict
4. NPC die / evolve
5. world replaces population

👉 โลก “ไม่เคยว่าง”

---

# 🌍 WORLD BALANCE SYSTEM

ระบบจะควบคุม:

- population stability
- faction balance
- war pressure

ถ้า imbalance:
- spawn adjust
- faction reinforcement
- event trigger

---

# 🔥 SPECIAL RULE: EMERGENT NPC

บาง NPC จะ:

- เกิดจากเศษเหตุการณ์
- ไม่มี faction ชัดเจน
- พัฒนาเองทั้งหมด

👉 “unknown origin NPC”

---

# 📌 SUMMARY

NPC SPAWNER =

“ระบบที่ทำให้โลกสร้างชีวิตของตัวเองผ่าน logic ไม่ใช่ผู้เขียน”