# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# SAVE FORMAT SYSTEM

Document Version : 2.0

Status : Production

Document Type : System Standard

Authority :

SYSTEM.md

---

# 1. PURPOSE

SAVE_FORMAT.md

กำหนดมาตรฐานโครงสร้างข้อมูล SAVE

ของ

PROJECT ASTER ENGINE

---

หน้าที่ของ SAVE_FORMAT.md คือ

- กำหนดรูปแบบข้อมูล SAVE
- กำหนดมาตรฐาน Field
- กำหนดโครงสร้าง Snapshot
- ทำให้ AI อ่านและบันทึกข้อมูลได้ตรงกัน

---

SAVE_FORMAT.md

ไม่กำหนด

- กฎการเล่น
- เหตุการณ์ในโลก
- Canon
- วิธีตัดสินใจของ AI

ให้อ้างอิง:

SYSTEM.md

RULES.md

GAME_MASTER.md

---

# 2. SAVE SYSTEM CONCEPT

SAVE

คือ

Snapshot ล่าสุดของโลก

---

SAVE ไม่ใช่:

- บันทึกเรื่องราว
- บทสรุป Episode
- Log การสนทนา
- ประวัติทั้งหมด

---

หน้าที่ของ SAVE คือ

ตอบคำถาม:

"ตอนนี้โลกอยู่ในสถานะใด"

---

# 3. SAVE RESPONSIBILITY

SAVE เก็บ:

- Current World State
- Current Player State
- Current Crew State
- Current Ship State
- Current Faction State
- Current NPC State
- Current Location
- Current Events

---

SAVE ไม่เก็บ:

- บทสนทนา
- การบรรยายฉาก
- รายละเอียดการต่อสู้
- Dice Roll History

ข้อมูลเหล่านี้อยู่ใน:

LOG

---

# 4. SAVE STRUCTURE

โครงสร้างหลัก:


# 7. CURRENT_CREW

เก็บข้อมูลลูกเรือปัจจุบัน

ประกอบด้วย:

- Crew Members
- Roles
- Conditions
- Relationships
- Current Status

---

# 8. CURRENT_SHIPS

เก็บสถานะเรือปัจจุบัน

ประกอบด้วย:

- Ship Identity
- Location
- Condition
- Damage
- Upgrade
- Supplies

---

# 9. CURRENT_FACTIONS

เก็บสถานะองค์กรที่เกี่ยวข้อง

ประกอบด้วย:

- Organization Status
- Relations
- Active Conflicts
- Influence Changes

---

# 10. CURRENT_NPCS

เก็บสถานะ NPC ปัจจุบัน

ประกอบด้วย:

- Identity
- Location
- Condition
- Relationship
- Current Goal
- Important Changes

---

# 11. CURRENT_ISLANDS

เก็บสถานะเกาะที่ได้รับผลกระทบ

ประกอบด้วย:

- Population
- Economy
- Government
- Security
- Major Events

---

# 12. CURRENT_ITEMS

เก็บรายการสิ่งของสำคัญ

ประกอบด้วย:

- Item Location
- Owner
- Condition
- Quantity

---

# 13. CURRENT_EVENTS

เก็บ Event ที่กำลังดำเนินอยู่

ประกอบด้วย:

- Event Name
- Location
- Participants
- Current Status
- Possible Consequences

---

# 14. SAVE UPDATE RULES

เมื่อเกิดการเปลี่ยนแปลง

AI ต้อง Update เฉพาะข้อมูลที่ได้รับผลกระทบ

---

ตัวอย่าง:

ผู้เล่นได้รับบาดเจ็บ

↓

CURRENT_PLAYER

---

เรือเสียหาย

↓

CURRENT_SHIPS

---

NPC สำคัญเสียชีวิต

↓

CURRENT_NPCS

↓

CURRENT_FACTIONS

(ถ้ามีผลต่อองค์กร)

---

# 15. DATA CONSISTENCY

ข้อมูลใน SAVE ทุกส่วน

ต้องสอดคล้องกัน

---

ตัวอย่าง:

หาก NPC เสียชีวิต

ต้องตรวจสอบ:

- NPC Status
- Relationship
- Faction
- Active Events

---

หากตำแหน่งเปลี่ยน

ต้องตรวจสอบ:

- Player Location
- Ship Location
- Crew Location

---

# 16. SAVE AND LOG SEPARATION

SAVE

เก็บ:

"โลกตอนนี้เป็นอย่างไร"

---

LOG

เก็บ:

"เกิดอะไรขึ้นก่อนหน้านี้"

---

ห้ามใช้ SAVE แทน LOG

และ

ห้ามใช้ LOG แทน SAVE

---

# 17. LOADING ORDER

เมื่อเริ่ม Session ใหม่

AI ควรอ่าน:

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

# 18. DOCUMENT RELATIONSHIP

SYSTEM.md

↓

กำหนดมาตรฐาน SAVE

↓

SAVE_FORMAT.md

↓

กำหนดโครงสร้างข้อมูล

↓

SAVE_MANAGER.md

↓

จัดการการบันทึกและโหลด

↓

10_SAVE

↓

ข้อมูลสถานะจริงของโลก

---

# DOCUMENT STATUS

Document Name

SAVE_FORMAT.md

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

Authority

System Standard

---

# END OF DOCUMENT

SAVE_FORMAT.md

กำหนดรูปแบบข้อมูล SAVE

เพื่อให้สถานะของโลก

สามารถถูกบันทึก

โหลด

และตรวจสอบได้อย่างต่อเนื่อง