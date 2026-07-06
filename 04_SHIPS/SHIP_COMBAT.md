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