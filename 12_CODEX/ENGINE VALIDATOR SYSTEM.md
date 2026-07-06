# 🧠 ENGINE_VALIDATOR_SYSTEM.md
## ONE PIECE RPG ENGINE — SYSTEM INTEGRITY CHECKER

---

# 🎯 PURPOSE

ระบบนี้ใช้ตรวจสอบว่า:
- ข้อมูลในไฟล์ทั้งหมด “ยังสอดคล้องกันหรือไม่”
- ไม่มี logic ขัดแย้งระหว่างระบบ
- โลกยัง “สมจริงตาม Codex”

---

# ⚙️ VALIDATION RULES

## 1. WORLD CONSISTENCY CHECK
ตรวจว่า:
- เกาะมีเหตุผลในการดำรงอยู่
- สังคม / เศรษฐกิจ / อำนาจ มี logic
- ไม่มีเกาะที่ “ไร้บทบาทในโลก”

---

## 2. FACTION CHECK
- ทุก faction ต้องมีผลกระทบต่อโลก
- ต้องมีศัตรู / เป้าหมาย / การกระทำจริง
- ห้าม faction เป็นเพียงชื่อ

---

## 3. NPC VALIDATION
- NPC ต้องมี:
  - เป้าหมาย
  - บทบาท
  - ความสัมพันธ์กับโลก
- NPC ห้าม “ลอยอยู่โดยไม่มีเหตุผล”

---

## 4. DEVIL FRUIT CHECK
- 1 ผล = 1 ผู้ใช้ (ต้องไม่ซ้ำ)
- ผลต้องมี logic การใช้งานจริง
- ห้ามมีพลังที่ override Codex

---

## 5. ECONOMY CHECK (ถ้ามีระบบเศรษฐกิจ)
- เงิน / bounty ต้องสัมพันธ์กับโลก
- รายได้ / ทรัพยากร ต้องมีแหล่งที่มา

---

# 🚨 ERROR TYPES

- LORE_BREAK → โลกขัด logic ตัวเอง
- POWER_IMBALANCE → ตัวละครโกงเกินระบบ
- FACTION_VOID → faction ไม่มีผลต่อโลก
- NPC_NULL → NPC ไม่มีเหตุผลในการมีอยู่

---

# 🧠 RESULT

- PASS = โลกสอดคล้อง
- WARN = มีความเสี่ยง
- FAIL = ต้องแก้ก่อนเล่นต่อ