# NPC_SIMULATION_LOOP.md
## ASTER ENGINE — GLOBAL SIMULATION LOOP

---

# 🌍 CORE IDEA

Simulation Loop คือระบบที่ทำให้:

> “โลกไม่หยุดนิ่ง แม้ผู้เล่นไม่ทำอะไรเลย”

NPC ทุกตัว + โลก + faction + events  
จะถูกประมวลผลแบบต่อเนื่อง

---

# 🔁 GLOBAL LOOP STRUCTURE

โลกจะวน loop นี้ตลอดเวลา:

## 1. WORLD TICK (เวลาเดิน)
- 1 tick = 1 ช่วงเวลาในโลก
- ทุก NPC ถูกอัปเดต

---

## 2. NPC PROCESSING
NPC ทุกตัวทำ:

- PERCEPTION
- BEHAVIOR DECISION
- ACTION EXECUTION
- MEMORY UPDATE

---

## 3. FACTION PROCESSING
แต่ละ faction จะ:

- ประเมินสงคราม
- ส่งกำลัง
- ปรับนโยบาย
- สร้างภารกิจ

---

## 4. EVENT SYSTEM
ตรวจสอบ:

- สงคราม
- การตายของตัวสำคัญ
- การเปลี่ยน power balance
- การค้นพบโลกใหม่

---

## 5. WORLD UPDATE
อัปเดตโลก:

- แผนที่เปลี่ยน
- เมืองเปลี่ยน
- bounty เปลี่ยน
- ข่าวโลกถูกสร้าง

---

# 🧠 NPC SIMULATION FLOW

ใน 1 tick NPC จะ:

```
Perception → Evaluation → Decision → Action → Memory Update
```

---

# ⚔️ CONFLICT RESOLUTION SYSTEM

เมื่อ NPC เจอกัน:

## CASE 1: PEACEFUL
- trade
- talk
- ally formation

## CASE 2: HOSTILE
- fight begins
- survival check
- outcome resolution

## CASE 3: FACTION WAR
- group battle
- reinforcement spawn
- territory change

---

# 🌍 WORLD STATE MACHINE

โลกอยู่ใน state:

- PEACE
- TENSION
- CONFLICT
- WAR
- CHAOS

👉 state เปลี่ยนตาม NPC actions

---

# 🔥 EMERGENT EVENTS SYSTEM

เหตุการณ์ที่ “ไม่มี script ตายตัว”:

- pirate uprising
- marine corruption scandal
- island destruction
- legendary NPC awakening

👉 เกิดจาก NPC interaction ล้วน ๆ

---

# 🧬 MEMORY FEEDBACK LOOP

ทุก action จะย้อนกลับไป:

1. NPC memory update
2. relationship change
3. faction adjustment
4. future behavior change

👉 โลก “เรียนรู้จากตัวเอง”

---

# ⚖️ BALANCE CONTROL SYSTEM

ถ้าโลกเอนเอียง:

- ฝั่งหนึ่งแข็งเกิน → spawn counter force
- โลกสงบเกิน → spawn conflict
- chaos เกิน → stabilize factions

---

# ⏳ TIME SCALE RULE

Simulation สามารถทำงานได้หลายระดับ:

- micro (combat)
- meso (island events)
- macro (world war)

---

# 🧠 META RULE

> “ไม่มี NPC ใดอยู่นอก simulation”

แม้ Legendary NPC ก็ยังอยู่ใน loop

---

# 🌍 FINAL RESULT

ถ้าระบบทำงานถูกต้อง:

- โลกจะเปลี่ยนเอง
- สงครามเกิดเอง
- ตัวละครเติบโตเอง
- เรื่องราวไม่ต้องเขียนล่วงหน้า

---

# 📌 SUMMARY

NPC SIMULATION LOOP =

“ระบบที่ทำให้โลกมีชีวิตจริงผ่านการคำนวณของการกระทำทุกตัวละคร”