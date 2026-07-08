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