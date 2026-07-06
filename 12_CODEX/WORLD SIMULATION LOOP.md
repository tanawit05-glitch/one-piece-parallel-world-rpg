# 🌍 WORLD_SIMULATION_LOOP.md
## ONE PIECE RPG ENGINE — AUTONOMOUS WORLD SYSTEM

---

# 🎯 PURPOSE
ทำให้โลก:
- เดินต่อเอง
- สร้างเหตุการณ์เอง
- เปลี่ยนแปลงเอง

---

# 🔁 SIMULATION CYCLE

โลกจะอัปเดตเป็นรอบ (Loop):

## 1. POLITICAL PHASE
- Faction เคลื่อนไหว
- รัฐบาลโลกออกคำสั่ง
- กองกำลังเปลี่ยนตำแหน่ง

---

## 2. PIRATE PHASE
- กลุ่มโจรสลัดเคลื่อนที่
- ล่า / หนี / ตั้งฐาน
- เพิ่ม bounty / ชื่อเสียง

---

## 3. ISLAND PHASE
- เกาะเปลี่ยนสถานะ:
  - สงบ
  - สงคราม
  - ควบคุมโดย faction

---

## 4. NPC PHASE
- NPC เปลี่ยนเป้าหมาย
- เกิดความขัดแย้ง / ความสัมพันธ์ใหม่

---

## 5. EVENT GENERATION
- เกิดเหตุการณ์ใหม่:
  - สงคราม
  - การลอบสังหาร
  - การค้นพบ Devil Fruit
  - การล่มสลายของเกาะ

---

# 🧠 RULE OF CHANGE

- ทุกการเปลี่ยนแปลงต้องมี “เหตุผล”
- ไม่มี event เกิดแบบไร้ที่มา
- โลกต้อง “จำอดีตของตัวเองได้”

---

# ⚙️ OUTPUT

ทุก loop จะสร้าง:
- World Update Log
- Faction Movement
- NPC Activity
- Island Status Change