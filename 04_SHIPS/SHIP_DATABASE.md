# SHIP DATABASE

PROJECT ASTER ENGINE

Module:
04_SHIPS

Version:
2.0

Status:
Production

Authority:
Ship Database

Dependencies:

- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- SAVE_FORMAT.md
- NAVIGATION.md
- COMBAT.md


---

# 1. PURPOSE


SHIP DATABASE

เป็นฐานข้อมูลเรือทั้งหมดในโลก

ASTER ENGINE

เรือไม่ใช่เพียง Object

แต่เป็น Entity ที่มี:

- ประวัติ
- สภาพ
- ความสัมพันธ์
- ความทรงจำ
- ผลกระทบจากเหตุการณ์


หน้าที่ของไฟล์นี้:

- เก็บข้อมูลเรือ
- ติดตามสถานะเรือ
- บันทึกประวัติ
- เชื่อมโยงกับ Crew และ World


ไม่ทำหน้าที่:

- กำหนด Combat Rules
- กำหนด Navigation Rules
- กำหนด Ship Evolution System


---

# 2. SHIP RECORD STANDARD


## Ship ID

รหัสเฉพาะของเรือ


ตัวอย่าง:

SHIP-0001


---

## Basic Information


Ship Name:

-


Ship Type:

-


Ship Class:

-


Origin:

-


Builder:

-


Creation Date:

-


First Appearance:

Episode:


Current Status:

- Active
- Damaged
- Destroyed
- Lost
- Captured
- Retired


Current Location:

-

# 3. SHIP CONDITION


ข้อมูลสภาพปัจจุบันของเรือ


## Hull Integrity

สภาพโครงสร้างเรือ

-


## Mobility Condition

สภาพความสามารถในการเดินทาง

-


## Equipment Condition

สภาพอุปกรณ์สำคัญ

-


## Damage Status

ความเสียหายปัจจุบัน

-


## Repair Status

สถานะการซ่อมแซม

-


---

# 4. SHIP STRUCTURE


ข้อมูลพื้นที่ภายในเรือ


## Main Areas


Captain Room:

-


Crew Quarters:

-


Medical Bay:

-


Kitchen:

-


Storage:

-


Workshop:

-


Control Area:

-


Observation Deck:

-


---

## Special Areas


พื้นที่พิเศษ:

-


---

# 5. SHIP EQUIPMENT


ข้อมูลอุปกรณ์ประจำเรือ


## Main Equipment

-


## Weapons

-


## Defensive Equipment

-


## Special Equipment

-


หมายเหตุ:

รายละเอียดการใช้งานระบบต่อสู้

ให้อ้างอิง COMBAT.md


---

# 6. SHIP CREW CONNECTION


ความสัมพันธ์ระหว่างเรือและผู้ใช้งาน


## Current Captain

-


## Current Crew

-


## Crew History

-


---

## Important Bonds


สมาชิกที่มีความสัมพันธ์พิเศษกับเรือ


-


---

# 7. SHIP MEMORY


เรือสามารถมีประวัติจากเหตุการณ์ที่ผ่านมา


## Journey Memory


สถานที่สำคัญที่เคยเดินทางผ่าน


-


---

## Battle Memory


เหตุการณ์การต่อสู้สำคัญ


-


---

## Crew Memory


เหตุการณ์สำคัญของลูกเรือ


-


---

# 8. DAMAGE RECORD


บันทึกความเสียหาย


## Major Damage


-


---

## Repairs


-


---

## Permanent Changes


การเปลี่ยนแปลงถาวรของเรือ


-

# 9. SHIP HISTORY


ประวัติของเรือ


## Origin Story


เหตุผลที่เรือถูกสร้างขึ้น


-


---

## Previous Owners


เจ้าของเดิม


-


---

## Major Events


เหตุการณ์สำคัญที่เกี่ยวข้องกับเรือ


-


---

## Famous Moments


เหตุการณ์ที่ทำให้เรือเป็นที่จดจำ


-


---

# 10. OWNERSHIP HISTORY


ลำดับผู้ครอบครองเรือ


## Current Owner

-


## Previous Owners

-


## Ownership Changes


เหตุผลที่เปลี่ยนเจ้าของ


-


---

# 11. CURRENT WORLD STATE


สถานะปัจจุบันของเรือ


## Current Location

-


## Current Destination

-


## Cargo

-


## Supplies

-


## Passengers

-


## Prisoners

-


## Current Damage

-


## Repair Required

-


---

# 12. NARRATIVE IMPORTANCE


ความสำคัญต่อโลกและเรื่องราว


## Importance Level


- Minor
- Major
- Legendary


---

## Role In World


บทบาทของเรือในโลก


-


---

## Can Be Destroyed


Yes / No


---

## Condition For Destruction


เงื่อนไขที่ทำให้เรือถูกทำลาย


-


---

## Impact If Lost


ผลกระทบเมื่อเรือสูญหาย


-


---

# 13. TAGS


- Ship
- Vessel
- Crew Related
- Historical


---

# 14. GM DATABASE RULES


## Update Rules


ข้อมูลเรือต้องเปลี่ยนแปลงเมื่อ:


- เกิดเหตุการณ์ในโลก
- เกิดความเสียหาย
- เปลี่ยนเจ้าของ
- มีการซ่อมแซม
- มีการดัดแปลง


---

## Restrictions


ห้าม:


- เปลี่ยนสถานะเรือเพื่อช่วยผู้เล่น
- ทำลายเรือเพื่อสร้างดราม่าโดยไม่มีเหตุผล
- เพิ่มความสามารถใหม่โดยไม่มีเหตุการณ์รองรับ


---

# 15. RELATED DOCUMENTS


- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- NAVIGATION.md
- COMBAT.md
- SAVE_FORMAT.md


---

# DOCUMENT STATUS


Document Name:

SHIP_DATABASE.md


Version:

2.0


Engine:

ASTER ENGINE v1.x


Status:

Production


Authority:

Ship Database


Last Reviewed:

TBD


---

# END OF DOCUMENT