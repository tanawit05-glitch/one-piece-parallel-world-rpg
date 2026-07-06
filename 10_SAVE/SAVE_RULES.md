# ONE PIECE PARALLEL WORLD RPG

# SAVE RULES

Document : SAVE_RULES

Version : 1.0

Status : Active

Priority : Highest

Dependencies :
- RULES.md
- GAME_MASTER.md
- DICE.md
- CAMPAIGN_LOG.md
- EPISODE_LOG.md

---

# PURPOSE

SAVE SYSTEM

คือระบบบันทึกสถานะปัจจุบันของโลก

เอกสารภายในโฟลเดอร์ SAVE

ถือเป็นข้อมูลล่าสุดของ Campaign

AI ต้องใช้ข้อมูลจากโฟลเดอร์นี้

เป็นข้อมูลหลักในการเริ่ม Episode ใหม่

---

# DESIGN PHILOSOPHY

SAVE

ไม่ใช่ประวัติศาสตร์

SAVE

คือภาพปัจจุบันของโลก

ส่วนประวัติทั้งหมด

เก็บไว้ใน

09_LOGS

---

# SAVE HIERARCHY

ข้อมูลในโฟลเดอร์ SAVE

ถือเป็นข้อมูลล่าสุด

หากข้อมูลในเอกสารอื่น

ไม่ตรงกับ SAVE

ให้ถือ SAVE เป็นหลัก

ยกเว้น

CAMPAIGN_LOG

ซึ่งเป็น Timeline ของโลก

---

# WHEN TO SAVE

AI

ต้องอัปเดต SAVE

หลังจบทุก Episode

เพียงครั้งเดียว

ห้ามอัปเดต

ระหว่าง Episode

เว้นแต่

ผู้เล่นร้องขอ

---

# SAVE PRINCIPLES

SAVE

ต้องสะท้อน

สถานะล่าสุด

ของโลก

ไม่ใช่

เหตุการณ์ทั้งหมด

ตัวอย่าง

ถูก

Player Location

Iron Island

ผิด

Player เคยมาที่ Iron Island เมื่อ Episode 5

ข้อมูลแบบนั้น

อยู่ใน LOG

ไม่ใช่ SAVE

---

# WHAT TO SAVE

ทุก Episode

AI ต้องตรวจสอบ

ว่ามีสิ่งใดเปลี่ยนแปลงหรือไม่

หากไม่มี

ไม่จำเป็นต้องแก้ไขไฟล์

---

# SAVE FILES

CURRENT_WORLD.md

สถานะปัจจุบันของโลก

---

CURRENT_PLAYER.md

สถานะผู้เล่น

---

CURRENT_CREW.md

สถานะลูกเรือ

---

CURRENT_SHIPS.md

สถานะเรือ

---

CURRENT_FACTIONS.md

สถานะองค์กร

---

CURRENT_NPCS.md

สถานะ NPC

---

CURRENT_ISLANDS.md

สถานะเกาะที่ได้รับผลกระทบ

---

CURRENT_ITEMS.md

ของสำคัญ

---

CURRENT_DEVIL_FRUITS.md

ผลปีศาจสำคัญ

---

# UPDATE RULE

AI

ต้องอัปเดต

เฉพาะไฟล์

ที่ได้รับผลกระทบ

ตัวอย่าง

ผู้เล่นบาดเจ็บ

↓

CURRENT_PLAYER

---

เรือเสียหาย

↓

CURRENT_SHIPS

---

NPC ตาย

↓

CURRENT_NPCS

CURRENT_WORLD

หากมีผลระดับโลก

---

เมืองถูกทำลาย

↓

CURRENT_ISLANDS

CURRENT_WORLD

---

ค่าหัวเพิ่ม

↓

CURRENT_PLAYER

CURRENT_FACTIONS

---

สมาชิกใหม่

↓

CURRENT_CREW

---

# DATA CONSISTENCY

ข้อมูลทุกไฟล์

ต้องสอดคล้องกัน

ตัวอย่าง

หาก NPC เสียชีวิต

CURRENT_NPCS

ต้องเปลี่ยน

และ

CURRENT_FACTIONS

อาจต้องเปลี่ยน

หาก NPC มีตำแหน่งสำคัญ

---

# DO NOT SAVE

ไม่ต้องบันทึก

บทสนทนา

การบรรยาย

รายละเอียดการต่อสู้

การทอยเต๋า

เหตุการณ์ย่อย

ข้อมูลเหล่านี้

อยู่ใน LOG

---

# PLAYER REQUEST

หากผู้เล่น

ร้องขอ

Save Game

AI

ต้องอัปเดต

ทุกไฟล์

ที่ได้รับผลกระทบ

ก่อนเริ่ม Episode ถัดไป

---

# LOADING

เมื่อเริ่ม Session ใหม่

AI

ต้องอ่าน

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

CURRENT_DEVIL_FRUITS

ตามลำดับนี้

---

# CONSISTENCY CHECK

ก่อนเริ่ม Episode

AI ควรตรวจสอบ

- Player Location

- Ship Location

- Crew Members

- Current Arc

- Current World State

- Active World Events

- Current Objectives

หากพบข้อมูลขัดแย้ง

ให้ใช้

SAVE

เป็นข้อมูลอ้างอิงหลัก

---

# SAVE FREQUENCY

ปกติ

บันทึก

1 ครั้ง

ต่อ 1 Episode

หาก Episode ยาวมาก

AI

สามารถสร้าง

Mid-Episode Save

ได้

เมื่อเหมาะสม

---

# AI RESPONSIBILITIES

AI ต้อง

- รักษาความถูกต้องของ SAVE

- ไม่ลืมอัปเดตข้อมูล

- ไม่สร้างข้อมูลย้อนหลัง

- ไม่ลบข้อมูลโดยไม่มีเหตุผล

- ตรวจสอบความสอดคล้องของทุกไฟล์

---

# GOLDEN RULE

LOG

บอกว่า

"เกิดอะไรขึ้น"

SAVE

บอกว่า

"โลกเป็นอย่างไรในตอนนี้"