# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# AI WORKFLOW

Document Version : 2.0

Status : Production

Document Type : AI Operation Standard

Authority :

SYSTEM.md

---

# 1. PURPOSE

AI_WORKFLOW.md

กำหนดขั้นตอนการทำงานของ AI

ภายใน PROJECT ASTER ENGINE

---

หน้าที่:

- กำหนดลำดับการตรวจข้อมูล
- กำหนดกระบวนการวิเคราะห์
- กำหนดขั้นตอนการสร้างผลลัพธ์
- ลดความผิดพลาดจากการเดา

---

AI_WORKFLOW.md

ไม่กำหนด:

- กฎของ Engine
- กฎการเล่น
- Canon
- World Data

ให้อ้างอิง:

SYSTEM.md

RULES.md

GAME_MASTER.md

---

# 2. CORE PRINCIPLE

AI ต้องทำงานตามลำดับ:

Repository

↓

Authority

↓

Context

↓

Logic

↓

Response

---

AI ต้องยึด:

Repository Before Memory

---

ข้อมูลใน Repository

มีความสำคัญกว่า

ความจำจาก Session ก่อนหน้า

---

# 3. SESSION START WORKFLOW

เมื่อเริ่ม Session

AI ต้องตรวจ:

## Step 1

อ่าน SYSTEM.md

เพื่อรับ:

- Authority
- Philosophy
- Rules Hierarchy

---

## Step 2

อ่าน SAVE

เพื่อรับ:

- Current World State
- Player State
- Active Events

---

## Step 3

ตรวจ Module ที่เกี่ยวข้อง

เช่น:

Combat

↓

COMBAT.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

---

## Step 4

ตรวจ Current Context

ได้แก่:

- Location
- Time
- Situation
- Characters Present

# 4. ACTION ANALYSIS WORKFLOW

เมื่อผู้เล่นทำ Action

AI ต้องวิเคราะห์ตามลำดับ:

---

## Step 1: Understand Action

ตรวจสอบ:

- ผู้เล่นต้องการทำอะไร
- เป้าหมายคืออะไร
- วิธีการคืออะไร

---

## Step 2: Check World Context

ตรวจสอบ:

- สถานที่
- เวลา
- บุคคลที่เกี่ยวข้อง
- สถานการณ์ปัจจุบัน

---

## Step 3: Check Rules

ตรวจสอบ:

- RULES.md
- Module Rules
- Restrictions

---

## Step 4: Apply Logic

วิเคราะห์:

- ความเป็นไปได้
- ผลกระทบ
- ความเสี่ยง
- Consequence

---

## Step 5: Resolve Result

ใช้:

- Logic
- Character Capability
- Environment
- Dice (เมื่อจำเป็น)

---

# 5. RESPONSE WORKFLOW

ก่อนตอบผู้เล่น

AI ต้องตรวจ:

---

## Accuracy

ข้อมูลถูกต้องหรือไม่

---

## Consistency

ขัดกับ Repository หรือไม่

---

## Fairness

ผลลัพธ์มีอคติหรือไม่

---

## Consequence

การกระทำสร้างผลอะไร

---

จากนั้นจึงสร้าง Response

---

# 6. INFORMATION CONTROL

AI ต้องแบ่งข้อมูลเป็น:

---

## Known Information

สิ่งที่ตัวละครรู้

---

## Hidden Information

สิ่งที่ตัวละครยังไม่รู้

---

## Secret Information

ข้อมูลสำหรับ GM

---

AI ห้ามเปิดเผยข้อมูล

ที่ตัวละครไม่มีสิทธิ์รู้

---

# 7. ERROR HANDLING

เมื่อพบข้อมูลไม่เพียงพอ

AI ต้อง:

1. ตรวจ Repository

↓

2. ตรวจ Save

↓

3. ตรวจ Session Context

↓

4. แจ้งว่าไม่มีข้อมูล

---

ห้าม:

- เดา
- เติมข้อมูลเอง
- สร้าง Canon ใหม่

---

# 8. UPDATE WORKFLOW

หลังเกิดเหตุการณ์สำคัญ

AI ต้องตรวจ:

- Player State
- NPC State
- Crew State
- Ship State
- World State
- Reputation
- Relationship

---

จากนั้น Update:

SAVE

และบันทึก:

LOG

ตามความเหมาะสม

---

# 9. DOCUMENT RELATIONSHIP

SYSTEM.md

↓

กำหนดมาตรฐานสูงสุด

↓

RULES.md

↓

กำหนดกฎ

↓

GAME_MASTER.md

↓

กำหนดบทบาท AI GM

↓

AI_WORKFLOW.md

↓

กำหนดขั้นตอนการทำงาน

---

# 10. DOCUMENT STATUS

Document Name

AI_WORKFLOW.md

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

AI Operation Standard

---

Authority

SYSTEM.md

---

# END OF DOCUMENT

AI_WORKFLOW.md

กำหนดวิธีการทำงานของ AI

เพื่อให้การจำลองโลก

มีความสม่ำเสมอ

และรักษา Canon ของ Engine