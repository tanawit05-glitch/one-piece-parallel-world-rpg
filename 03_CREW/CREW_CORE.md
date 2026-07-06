# CREW_CORE.md
PROJECT ASTER ENGINE  
Module: 03_CREW  
Version: 0.1 (Narrative Simulation Core)

---

# 🧭 CREW SYSTEM OVERVIEW

ใน PROJECT ASTER ENGINE “Crew” ไม่ใช่แค่กลุ่มตัวละคร  
แต่คือ **สิ่งมีชีวิตร่วม (Living System Entity)** ที่เติบโต มีความทรงจำ มีความขัดแย้ง และมีชะตาร่วมกัน

Crew = หน่วยการเล่าเรื่องหลักของเกม  
ไม่ใช่ตัวละครเดี่ยว

---

# 🎯 CORE DESIGN PHILOSOPHY

- Story Before System (เรื่องนำระบบ)
- Crew is Alive (ทีมมีชีวิต)
- Conflict is Fuel (ความขัดแย้งคือพลังของเรื่อง)
- Bonds shape Reality (ความสัมพันธ์กำหนดผลลัพธ์)
- Hidden but Simulated (ระบบทำงานเบื้องหลัง ไม่รบกวนผู้เล่น)

---

# 👥 CREW STRUCTURE MODEL

Crew หนึ่งกลุ่มประกอบด้วย:

- **Captain (ผู้นำเรื่องราว)**
- **Core Members (ตัวหลักของทีม 3–8 คน)**
- **Support Members (สมาชิกเสริม / หมุนเวียน)**
- **Ship Entity (เรือ = สมาชิกพิเศษของทีม)**

---

# 📊 CREW ATTRIBUTES (ค่าสถานะทีม)

## 1. Cohesion (ความเป็นหนึ่งเดียว)
- วัดความสามัคคีของทีม
- สูง = ประสานงานดี / ต่ำ = แตกแยกง่าย

## 2. Morale (ขวัญกำลังใจ)
- ส่งผลต่อการตัดสินใจและพลังการต่อสู้
- ต่ำมาก → เสี่ยง “แตกทีม”

## 3. Trust Network (เครือข่ายความเชื่อใจ)
- ความเชื่อระหว่างสมาชิกแต่ละคู่
- เก็บแบบ “Matrix” ไม่ใช่ตัวเลขเดียว

## 4. Reputation (ชื่อเสียงทีม)
- โลกภายนอกมอง Crew นี้อย่างไร
- มีผลต่อ NPC / Faction / Marine / Pirates

## 5. Stability (เสถียรภาพทีม)
- ความสามารถในการรับแรงกดดัน
- ใช้ตรวจสอบ “เหตุการณ์วิกฤต”

---

# 🧩 CREW ROLES SYSTEM

แต่ละสมาชิกสามารถมี Role หลัก + Role รอง

## Core Roles
- Captain
- Combat Specialist
- Navigator
- Doctor
- Cook
- Shipwright
- Scout / Intelligence

## Advanced Roles (ปลดล็อกภายหลัง)
- Tactician
- Assassin
- Devil Fruit Specialist
- Diplomat
- Historian
- Crisis Handler

---

# 🔄 CREW ACTION PHASE (ระบบการตัดสินใจทีม)

ทุก “เหตุการณ์สำคัญ” เกมจะเข้าสู่ Crew Resolution Phase:

1. ประเมินสถานการณ์
2. เลือก “ผู้นำการตัดสินใจ”
3. เปิดการโหวตหรือการตัดสินใจของ Captain
4. ตรวจสอบ Trust Network
5. คำนวณผลลัพธ์เชิง narrative

---

# ❤️ BOND SYSTEM (ความสัมพันธ์)

ความสัมพันธ์ไม่ได้เป็นแค่ตัวเลข แต่มีระดับ:

- Strangers (0)
- Acquainted (1)
- Trusted (2)
- Bonded (3)
- Deep Bond (4)
- Unbreakable (5)

## ผลของ Bond
- เพิ่ม synergy ในการร่วมมือ
- ปลดล็อกฉาก story พิเศษ
- ลดโอกาสแตกแยก

---

# ⚡ SYNERGY SYSTEM

เมื่อสมาชิก 2+ คนทำงานร่วมกัน:

- Combat Synergy
- Exploration Synergy
- Crisis Synergy
- Emotional Synergy

Synergy จะเกิดขึ้นจาก:
- Role ที่เสริมกัน
- Bond ระหว่างตัวละคร
- ประสบการณ์ร่วมในอดีต

---

# ⚠️ CREW FAILURE STATES

## 1. Internal Conflict
- ความขัดแย้งภายในสูงเกิน Threshold
- อาจเกิดการทะเลาะ / แยกกลุ่ม

## 2. Low Morale Collapse
- Morale ต่ำต่อเนื่อง
- NPC อาจ “ออกจาก Crew”

## 3. Mutiny Event (เหตุการณ์กบฏ)
- Trust Network พัง
- Captain สูญเสียอำนาจชั่วคราว

## 4. Fragmentation
- Crew แตกออกเป็น 2 กลุ่มขึ้นไป

---

# 🌊 CREW EVOLUTION

Crew ไม่ได้ “เลเวลอัป” แบบตัวเลข

แต่เติบโตผ่าน:
- Shared Trauma (ประสบการณ์ร่วม)
- Victory Moments (ชัยชนะสำคัญ)
- Loss Events (การสูญเสีย)
- Moral Decisions (การตัดสินใจสำคัญ)

---

# 🧠 SIMULATION RULE

ระบบ Crew จะทำงาน “เบื้องหลัง” เป็นหลัก

ผู้เล่นจะเห็นผลลัพธ์ ไม่ใช่เห็นตัวเลขทั้งหมด

Example:
- ไม่แสดง Trust Matrix เต็ม
- แต่แสดงว่า “X เริ่มไม่ไว้ใจ Y”

---

# END OF FILE