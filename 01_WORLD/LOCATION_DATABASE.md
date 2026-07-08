# LOCATION DATABASE

Database : LOCATION_DATABASE.md

Version : 1.0

Engine : ASTER ENGINE

Status : Production

Authority : World Database

Database Type :

Persistent World Data

Dependencies :

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- WORLD_RULES.md
- SAVE_FORMAT.md

---

# 1. PURPOSE

LOCATION DATABASE

เป็นฐานข้อมูลสถานที่ทั้งหมดในโลกของ ASTER ENGINE

หน้าที่:

- เก็บข้อมูลสถานที่
- ติดตามสถานะปัจจุบันของสถานที่
- บันทึกการเปลี่ยนแปลงจากเหตุการณ์
- เชื่อมโยงบุคคล กลุ่ม และเหตุการณ์ที่เกี่ยวข้อง

LOCATION DATABASE

ไม่กำหนดกฎของโลก

ไม่กำหนดผลลัพธ์ของเหตุการณ์

หน้าที่ของมันคือ

"เก็บความจริงของโลกที่เกิดขึ้น"

---

# 2. LOCATION RECORD STANDARD

ทุกสถานที่ต้องใช้รูปแบบข้อมูลเดียวกัน


## LOCATION ID

รหัสเฉพาะของสถานที่

ตัวอย่าง:

LOC-0001


---

## ชื่อสถานที่

ชื่อปัจจุบันของสถานที่


---

## ประเภท

- เกาะ
- เมือง
- หมู่บ้าน
- ฐานทัพ
- ร้านค้า
- ท่าเรือ
- ซากโบราณสถาน
- อื่น ๆ


---

## ตำแหน่ง

ทะเล:

- East Blue
- West Blue
- North Blue
- South Blue
- Paradise
- New World


ตำแหน่งเพิ่มเติม:

- เขต
- เส้นทาง
- พิกัด (ถ้ามี)


---

## STATUS

สถานะปัจจุบัน:

ตัวอย่าง:

- ปกติ
- ถูกทำลาย
- ถูกยึดครอง
- ถูกทิ้งร้าง
- อยู่ระหว่างฟื้นฟู


---

## DISCOVERY DATA

พบครั้งแรก:

- Episode

พบล่าสุด:

- Episode


---

## IMPORTANT CHARACTERS

บุคคลสำคัญ:

- ชื่อ
- บทบาท
- ความเกี่ยวข้อง


---

## RELATED FACTIONS

กลุ่มที่เกี่ยวข้อง:

- Pirates
- Marines
- Kingdoms
- Organizations


---

## SUB LOCATIONS

สถานที่ย่อย:

- อาคาร
- เขตพื้นที่
- จุดสำคัญ


---

## HISTORY

ประวัติสำคัญ:

บันทึกเหตุการณ์ที่เปลี่ยนแปลงสถานที่


---

## CURRENT EVENTS

เหตุการณ์ปัจจุบัน:

สิ่งที่กำลังเกิดขึ้น


---

## NOTES

ข้อมูลเพิ่มเติม


---

# 3. WORLD STATE TRACKING

สถานที่สามารถเปลี่ยนแปลงตามเวลา

ตัวอย่าง:

- เมืองถูกโจมตี
- รัฐบาลเปลี่ยน
- ประชากรลดลง
- เศรษฐกิจเปลี่ยน
- กลุ่มใหม่เข้าควบคุม


ทุกการเปลี่ยนแปลงต้องมีเหตุผลจากเหตุการณ์ในโลก


---

# 4. UPDATE RULES

การแก้ไขข้อมูลสถานที่ต้องเกิดจาก:

- เหตุการณ์ใน Episode
- การกระทำของผู้เล่น
- การกระทำของ NPC
- เหตุการณ์โลก


ห้าม:

- เปลี่ยนข้อมูลเพื่อช่วยผู้เล่น
- เปลี่ยนข้อมูลเพื่อบังคับเนื้อเรื่อง
- เพิ่มข้อมูลโดยไม่มีเหตุผล


---

# 5. RELATED DOCUMENTS

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- WORLD_DATABASE.md
- SAVE_FORMAT.md


---

# DOCUMENT STATUS

Document Name

LOCATION_DATABASE.md


Version

1.0


Engine Version

ASTER ENGINE v1.x


Status

Production


Authority

World Database


Last Updated

TBD


---

# END OF DOCUMENT