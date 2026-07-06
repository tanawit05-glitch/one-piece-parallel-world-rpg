# NPC_BEHAVIOR_ENGINE.md
## ASTER ENGINE — NPC BEHAVIOR SYSTEM

---

# 🧠 CORE IDEA

NPC Behavior Engine คือระบบที่ทำให้ NPC:

> “คิด → ตัดสินใจ → ลงมือทำ → เปลี่ยนโลก”

ไม่ใช่ script  
ไม่ใช่ random action  
แต่เป็น “logic-based life simulation”

---

# 🔁 BEHAVIOR LOOP (CORE CYCLE)

NPC ทุกตัววน loop นี้ตลอดเวลา:

## 1. PERCEPTION (รับรู้โลก)
NPC รับข้อมูลจากรอบตัว:

- ศัตรู
- เพื่อน
- ความขัดแย้ง
- ข่าว
- สภาพแวดล้อม

---

## 2. EVALUATION (ประเมินสถานการณ์)

NPC จะถามตัวเอง:

- อันตรายไหม?
- ได้ประโยชน์ไหม?
- เกี่ยวกับเป้าหมายไหม?
- เกี่ยวกับความสัมพันธ์ไหม?

---

## 3. DECISION (ตัดสินใจ)

NPC เลือก 1 จาก:

- Fight (สู้)
- Flee (หนี)
- Negotiate (เจรจา)
- Observe (เฝ้าดู)
- Execute Goal (ทำเป้าหมาย)

---

## 4. ACTION (ลงมือทำ)

NPC ทำสิ่งที่เลือกทันที

- ต่อสู้
- เดินทาง
- ช่วยเหลือ
- ทรยศ
- หลบหนี

---

## 5. MEMORY UPDATE (อัปเดตความจำ)

ผลลัพธ์จะถูกส่งไป NPC_MEMORY_SYSTEM:

- เพิ่ม memory
- เปลี่ยน bias
- เปลี่ยน relationship

---

# ⚖️ PRIORITY SYSTEM

NPC ไม่ตัดสินใจมั่ว แต่ใช้ priority:

## 🔴 Priority 1 — Survival
- หนีภัยทันทีถ้าจะตาย

## 🟠 Priority 2 — Core Goal
- เป้าหมายชีวิตหลัก

## 🟡 Priority 3 — Emotion
- ความโกรธ / กลัว / รัก / แค้น

## 🟢 Priority 4 — Relationship
- เพื่อน / ศัตรู / faction

## 🔵 Priority 5 — Opportunity
- เงิน / ของ / โอกาส

---

# 🧬 PERSONALITY MODIFIER

NPC จะไม่ตัดสินใจเหมือนกันทุกตัว

## Fear
- สูง → หนีง่าย
- ต่ำ → กล้าบ้าบิ่น

## Pride
- สูง → ไม่ยอมถอย
- ต่ำ → ยอมแพ้เร็ว

## Loyalty
- สูง → ปกป้องพวกพ้อง
- ต่ำ → หักหลังง่าย

## Greed
- สูง → ไล่ทรัพยากร
- ต่ำ → เน้นอุดมการณ์

---

# ⚔️ COMBAT BEHAVIOR RULE

เมื่อเกิดการต่อสู้:

## NPC จะเลือก:

### 1. Advantage Check
- เราชนะไหม?
- ศัตรูแข็งกว่าไหม?

### 2. Risk Check
- โอกาสตายสูงไหม?

### 3. Emotion Override
- แค้น / กลัว / ปกป้อง

---

## RESULT OPTIONS:

- ATTACK
- DEFEND
- RETREAT
- CALL BACKUP
- SACRIFICE

---

# 🌍 WORLD IMPACT RULE

ทุก action ต้องส่งผลต่อโลก:

- สร้างข่าว
- เปลี่ยน faction relations
- เพิ่ม bounty
- เปลี่ยน NPC memory

---

# 🧠 LEARNING SYSTEM

NPC เรียนรู้จาก:

- แพ้ → ปรับกลยุทธ์
- ชนะ → เพิ่ม confidence
- betrayal → เปลี่ยน loyalty
- trauma → เปลี่ยน personality

---

# 🔥 SPECIAL RULE: EMERGENT BEHAVIOR

NPC สามารถ:

- ทำสิ่งที่ไม่เคย script ไว้
- เปลี่ยนฝ่ายเอง
- สร้าง alliance ใหม่
- กลายเป็นภัยระดับโลก

---

# ⚖️ BALANCE RULE

NPC ต้องไม่:

- แข็งเกินเหตุ
- โง่เกินเหตุ
- หรือไม่มีเหตุผล

ทุกการกระทำต้องมี “reason chain”

---

# 📌 SUMMARY

NPC BEHAVIOR ENGINE =

“ระบบคิดของสิ่งมีชีวิตจำลองที่สร้างโลกผ่านการตัดสินใจของมันเอง”