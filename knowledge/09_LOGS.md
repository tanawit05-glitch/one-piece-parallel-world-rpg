# =====================================================
# FILE : 09_LOGS\CAMPAIGN_LOG.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# CAMPAIGN_LOG

Document: CAMPAIGN_LOG.md

Version: 2.0

Status: Canon

Priority: Critical

Owner: Archivist

---

# PURPOSE

CAMPAIGN_LOG คือบันทึกประวัติศาสตร์หลักของแคมเปญ

ทำหน้าที่เป็น Timeline อย่างเป็นทางการของโลก

บันทึกเฉพาะเหตุการณ์ที่เกิดขึ้นจริง

ไม่ใช่เนื้อเรื่อง

ไม่ใช่บทสรุปการเล่น

ไม่ใช่ฐานข้อมูล

---

# RESPONSIBILITY

Archivist เป็นผู้ดูแลเอกสารนี้เพียงผู้เดียว

Game Master ไม่มีสิทธิ์แก้ไข

Player ไม่มีสิทธิ์แก้ไข

---

# DEPENDENCIES

- CURRENT_STATE.md
- WORLD_STATE.md
- SESSION_SUMMARY.md
- NPC Database
- World Database
- Crew Database
- Save Files

---

# UPDATE RULE

อัปเดตเมื่อจบ Episode เท่านั้น

ห้ามอัปเดตระหว่างเล่น

ทุก Episode ต้องมีเพียง 1 Entry

ห้ามลบ Episode เก่า

ห้ามแก้ไขประวัติย้อนหลัง

หากข้อมูลผิด ให้เพิ่มหมายเหตุ (Revision)

---

# WRITING STYLE

เขียนแบบรายงาน

ใช้ภาษากลาง

ไม่ใส่อารมณ์

ไม่ใส่ความคิดเห็น

ไม่ตีความเหตุการณ์

บันทึกเฉพาะข้อเท็จจริง

---

# RECORD FORMAT

## Episode

Episode:

Title:

World Day:

Arc:

---

### Location

-

---

### Objective

-

---

### Summary

-

---

### Major Events

-

-

-

---

### Important NPCs

-

---

### Factions Involved

-

---

### Battles

-

---

### Rewards

-

---

### Devil Fruits

-

---

### Ships

-

---

### Bounty Changes

-

---

### Crew Changes

-

---

### Player Progress

-

---

### World Changes

-

---

### Notes

-

---

# RECORDING RULES

บันทึกเฉพาะสิ่งที่เกิดขึ้นจริง

ไม่บันทึกสิ่งที่ "เกือบเกิด"

ไม่บันทึกการคาดเดา

ไม่บันทึกข้อมูลที่ถูกยกเลิก

---

# CONTINUITY

ข้อมูลทุก Episode ต้องต่อเนื่องกัน

หากเหตุการณ์ส่งผลต่อโลก

ต้องอัปเดต WORLD_STATE.md

หาก NPC เปลี่ยนแปลง

ต้องอัปเดต NPC Database

หากลูกเรือเปลี่ยนแปลง

ต้องอัปเดต Crew Database

หากผู้เล่นเปลี่ยนแปลง

ต้องอัปเดต CURRENT_STATE.md

---

# UPDATE ORDER

1. CURRENT_STATE.md

2. WORLD_STATE.md (ถ้ามี)

3. NPC Database

4. World Database

5. Crew Database

6. CAMPAIGN_LOG.md

7. EPISODE_LOG.md

8. PLAYER_HISTORY.md

9. CREW_HISTORY.md

10. NEWS_ARCHIVE.md

11. SESSION_SUMMARY.md

---

# GOLDEN RULE

CAMPAIGN_LOG คือประวัติศาสตร์อย่างเป็นทางการของ Campaign

หากข้อมูลขัดแย้งกับเอกสารอื่น

ให้ตรวจสอบตามลำดับ

1. CURRENT_STATE.md

2. Save ล่าสุด

3. CAMPAIGN_LOG.md

4. Database ที่เกี่ยวข้อง

GitHub คือ Source of Truth สูงสุด

# =====================================================
# FILE : 09_LOGS\CREW_HISTORY.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# CREW HISTORY

Document : CREW_HISTORY

Version : 1.0

Status : Active

Priority : High

Dependencies :
- CREW/
- PLAYER/
- CAMPAIGN_LOG.md
- EPISODE_LOG.md
- CURRENT_CREW.md

---

# PURPOSE

CREW HISTORY

คือบันทึกประวัติทั้งหมดของลูกเรือ

ตั้งแต่การก่อตั้ง

จนถึงปัจจุบัน

เอกสารนี้

เก็บเรื่องราว

การเติบโต

ความสัมพันธ์

และเหตุการณ์สำคัญ

ของลูกเรือทั้งหมด

---

# DESIGN PRINCIPLE

CREW HISTORY

ไม่ใช่รายชื่อสมาชิก

แต่คือ

ประวัติศาสตร์ของลูกเรือ

ทุกเหตุการณ์

ควรสะท้อน

การเปลี่ยนแปลงของกลุ่ม

---

# WHEN TO UPDATE

อัปเดต

เมื่อเกิด

เหตุการณ์สำคัญ

เช่น

- สมาชิกใหม่

- สมาชิกลาออก

- สมาชิกเสียชีวิต

- เปลี่ยนตำแหน่ง

- เรือใหม่

- เปลี่ยนธง

- เปลี่ยนชื่อกลุ่ม

- ค่าหัวกลุ่มเพิ่ม

---

# WHAT TO RECORD

บันทึก

- การก่อตั้ง

- สมาชิกทั้งหมด

- การเปลี่ยนตำแหน่ง

- ความสัมพันธ์ภายใน

- ชัยชนะ

- ความพ่ายแพ้

- การสูญเสีย

- การเติบโตของกลุ่ม

---

# CREW PROFILE

บันทึก

- ชื่อลูกเรือ

- ธง

- เรือ

- กัปตัน

- จำนวนสมาชิก

- จุดเริ่มต้น

---

# MEMBER HISTORY

สมาชิกแต่ละคน

ให้บันทึก

- วันที่เข้าร่วม

- เหตุผลที่เข้าร่วม

- ตำแหน่ง

- การเลื่อนตำแหน่ง

- เหตุการณ์สำคัญ

- สถานะปัจจุบัน

---

# POSITION HISTORY

หากตำแหน่งเปลี่ยน

ให้บันทึก

ตัวอย่าง

Navigator

↓

First Mate

↓

Captain

---

# SHIP HISTORY

บันทึก

ประวัติของเรือ

- ได้เรือ

- เปลี่ยนเรือ

- ซ่อมใหญ่

- อัปเกรด

- จม

- เปลี่ยนชื่อ

---

# CREW ACHIEVEMENTS

บันทึก

ความสำเร็จของลูกเรือ

เช่น

- ชนะสงคราม

- ช่วยประเทศ

- เดินทางเข้าสู่ Grand Line

- โค่นฐาน Marine

- เอาชนะโจรสลัดชื่อดัง

---

# MAJOR FAILURES

บันทึก

ความล้มเหลว

เช่น

- เรือถูกทำลาย

- สมาชิกเสียชีวิต

- ภารกิจล้มเหลว

- สูญเสียสมบัติ

- ถูกไล่ล่า

---

# INTERNAL RELATIONSHIPS

บันทึก

ความสัมพันธ์ภายใน

เช่น

- ความไว้ใจ

- ความขัดแย้ง

- มิตรภาพ

- ความเป็นผู้นำ

- การเสียสละ

---

# EXTERNAL RELATIONSHIPS

บันทึก

ความสัมพันธ์

กับ

- Marines

- World Government

- Revolutionary Army

- Cross Guild

- Yonko

- Kingdoms

- Merchant Guild

- Pirate Crews

---

# BOUNTY HISTORY

บันทึก

ค่าหัวของลูกเรือ

ทุกครั้งที่เปลี่ยน

Old

↓

New

พร้อมเหตุผล

---

# CREW REPUTATION

บันทึก

ชื่อเสียงของลูกเรือ

ในแต่ละทะเล

ตัวอย่าง

East Blue

Paradise

New World

---

# IMPORTANT ITEMS

บันทึก

ของสำคัญ

ของลูกเรือ

เช่น

- เรือ

- สมบัติ

- แผนที่

- Eternal Pose

- Log Pose

- Vivre Card

- อาวุธในตำนาน

---

# IMPORTANT EVENTS

บันทึก

เหตุการณ์

ที่เปลี่ยนแปลง

ตัวตนของลูกเรือ

เช่น

- ตั้งธงครั้งแรก

- สมาชิกคนแรก

- คำสาบานร่วมกัน

- งานเลี้ยงฉลอง

- การสูญเสียครั้งใหญ่

---

# TEMPLATE

==================================================

# CREW HISTORY

## Crew Information

Crew Name :

Captain :

Flag :

Ship :

Current Members :

---

## Crew Formation

-

---

## Member History

-

---

## Position Changes

-

---

## Ship History

-

---

## Major Victories

-

---

## Major Defeats

-

---

## Internal Relationships

-

---

## External Relationships

-

---

## Crew Reputation

-

---

## Crew Bounty History

-

---

## Important Items

-

---

## Major Events

-

---

## Notes

-

==================================================

---

# GOLDEN RULE

ลูกเรือ

ไม่ใช่

กลุ่มของตัวละคร

แต่คือ

ครอบครัว

ที่เติบโต

ผ่านการเดินทางร่วมกัน

# =====================================================
# FILE : 09_LOGS\EPISODE_LOG.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# EPISODE LOG

Document : EPISODE_LOG

Version : 1.0

Status : Active

Priority : High

Dependencies :
- CAMPAIGN_LOG.md
- CURRENT_WORLD.md
- CURRENT_PLAYER.md
- CURRENT_CREW.md

---

# PURPOSE

EPISODE LOG

คือบันทึกเหตุการณ์ของ Episode แบบละเอียด

เอกสารนี้ใช้บันทึก

- สิ่งที่ผู้เล่นทำ
- สิ่งที่ NPC ทำ
- เหตุการณ์ที่เกิดขึ้น
- การต่อสู้
- การค้นพบ
- ผลลัพธ์ของการตัดสินใจ

โดยละเอียด

---

# DESIGN PRINCIPLE

EPISODE LOG

ไม่ใช่นิยาย

ไม่ใช่บทสรุป

แต่คือ

Session Report

ที่สามารถย้อนกลับมาอ่านได้

ทุก Episode

ต้องมีข้อมูลเพียงพอ

ให้ AI เข้าใจ

ว่าเกิดอะไรขึ้น

โดยไม่ต้องอ่าน Episode ก่อนหน้า

---

# WHEN TO UPDATE

อัปเดต

หลังจบทุก Episode

เพียงครั้งเดียว

---

# INFORMATION

ทุก Episode

ควรมี

Episode Number

World Date

Session Length

Location

Weather

Current Arc

Objective

Result

---

# PLAYER

บันทึก

ผู้เล่นทำอะไรบ้าง

เช่น

- ตัดสินใจ

- ต่อรอง

- ต่อสู้

- ใช้ฮาคิ

- ใช้ผลปีศาจ

- ฝึกฝน

- ใช้ยา

- หลบหนี

---

# CREW

ลูกเรือแต่ละคน

ทำอะไร

มีบทบาทอย่างไร

ได้รับผลกระทบอะไร

---

# NPC

NPC สำคัญ

มีปฏิกิริยาอย่างไร

เปลี่ยนความสัมพันธ์หรือไม่

เสียชีวิตหรือไม่

ได้รับตำแหน่งใหม่หรือไม่

---

# FACTIONS

องค์กรใด

เข้ามาเกี่ยวข้อง

เช่น

Marines

World Government

Cross Guild

Revolutionary Army

Yonko

Kingdom

Merchant Guild

---

# EXPLORATION

ผู้เล่นค้นพบอะไร

เช่น

เกาะใหม่

ถ้ำ

แผนที่

สมบัติ

ซากเรือ

Poneglyph

ผลปีศาจ

---

# COMBAT

หากมีการต่อสู้

ให้บันทึก

ผู้เข้าร่วม

สาเหตุ

จุดเปลี่ยน

ผลลัพธ์

ความเสียหาย

---

# ITEMS

ได้รับอะไร

สูญเสียอะไร

ใช้ของอะไร

---

# DEVIL FRUITS

หากเกี่ยวข้อง

ระบุ

ชื่อผล

ผู้ใช้

ผลกระทบ

สถานะ

---

# HAKI

หากมีการใช้

ให้ระบุ

Observation

Armament

Conqueror

รวมถึง

ความก้าวหน้า

หากเกิดขึ้น

---

# SHIP

บันทึก

การเดินเรือ

การซ่อม

การอัปเกรด

การเสียหาย

---

# RELATIONSHIP

ความสัมพันธ์

ที่เปลี่ยนไป

ระหว่าง

ผู้เล่น

ลูกเรือ

NPC

Faction

---

# CONSEQUENCES

ผลกระทบที่เกิดขึ้น

ทันที

และ

ผลกระทบที่อาจเกิดขึ้น

ในอนาคต

---

# WORLD CHANGES

สิ่งที่โลกเปลี่ยน

เพราะ Episode นี้

เช่น

- ค่าหัวเพิ่ม

- ข่าวแพร่กระจาย

- เมืองเสียหาย

- กษัตริย์เปลี่ยน

- มารีนส่งกำลังเพิ่ม

---

# FUTURE HOOKS

เหตุการณ์

ที่ยังไม่จบ

เช่น

- ศัตรูหลบหนี

- NPC นัดพบ

- ข่าวลือ

- ปริศนา

- ภารกิจใหม่

---

# TEMPLATE

==================================================

# Episode :

## World Date

-

## Session

-

## Current Arc

-

## Location

-

## Weather

-

## Objective

-

---

# STORY FLOW

-

---

# PLAYER ACTIONS

-

---

# CREW ACTIONS

-

---

# NPC ACTIONS

-

---

# FACTIONS

-

---

# EXPLORATION

-

---

# COMBAT

-

---

# IMPORTANT ITEMS

-

---

# DEVIL FRUITS

-

---

# HAKI

-

---

# SHIP STATUS

-

---

# RELATIONSHIP CHANGES

-

---

# WORLD CHANGES

-

---

# FUTURE EVENTS

-

---

# GM NOTES

-

==================================================

---

# GOLDEN RULE

EPISODE LOG

ต้องตอบคำถามได้เสมอ

"Episode นี้เกิดอะไรขึ้น"

โดยไม่ต้องกลับไปอ่านบทสนทนา

# =====================================================
# FILE : 09_LOGS\NEWS_ARCHIVE.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# NEWS ARCHIVE

Document : NEWS_ARCHIVE

Version : 1.0

Status : Active

Priority : High

Dependencies :
- WORLD_EVENTS.md
- CAMPAIGN_LOG.md
- CURRENT_WORLD.md

---

# PURPOSE

NEWS ARCHIVE

คือคลังข่าวทั้งหมด

ที่ได้รับการเผยแพร่สู่สาธารณะ

ภายในโลก

ข่าวทุกข่าว

ถือเป็นข้อมูล

ที่ประชาชนทั่วไป

สามารถรับรู้ได้

ผ่าน

หนังสือพิมพ์

ข่าวลือ

Den Den Mushi

หรือช่องทางอื่น

---

# DESIGN PRINCIPLE

NEWS ARCHIVE

ไม่ใช่

ประวัติศาสตร์ทั้งหมดของโลก

แต่เป็น

ประวัติของ "ข่าว"

ดังนั้น

เหตุการณ์หนึ่ง

อาจเกิดขึ้น

แต่ไม่มีข่าว

หากไม่มีใครรับรู้

---

# WHEN TO UPDATE

อัปเดต

เมื่อมีข่าวใหม่

เท่านั้น

---

# WHAT TO RECORD

ข่าวแต่ละข่าว

ควรประกอบด้วย

- วันที่

- Episode

- พาดหัวข่าว

- เนื้อหาย่อ

- พื้นที่

- ผู้เกี่ยวข้อง

- ระดับข่าว

- ความถูกต้อง

---

# NEWS LEVEL

ข่าวแบ่งออกเป็น

## Local

ข่าวภายในเกาะ

---

## Regional

ข่าวระดับทะเล

---

## Global

ข่าวทั้งโลก

---

# NEWS STATUS

ข่าวแต่ละข่าว

อาจเป็น

Confirmed

Verified

Rumor

Fake News

Unknown

---

# VISIBILITY

ไม่ใช่ทุกข่าว

ที่ทุกคนรู้

ให้ระบุ

- Local

- Sea

- Global

---

# TEMPLATE

==================================================

## News ID

-

### World Date

-

### Episode

-

### Headline

-

### Summary

-

### Location

-

### Related Factions

-

### Related NPCs

-

### News Level

-

### Visibility

-

### Accuracy

-

### Consequences

-

==================================================

---

# IMPORTANT RULES

ข่าว

ไม่จำเป็นต้องบอกความจริงทั้งหมด

ข่าวอาจผิดพลาดได้

ข่าวอาจถูกบิดเบือน

ข่าวอาจถูกปกปิด

แต่ต้องมีเหตุผล

---

# GOLDEN RULE

History

records

what

happened

News

records

what

people

believed

happened.

# =====================================================
# FILE : 09_LOGS\PLAYER_HISTORY.md
# =====================================================

# ONE PIECE PARALLEL WORLD RPG

# PLAYER HISTORY

Document : PLAYER_HISTORY

Version : 1.0

Status : Active

Priority : High

Dependencies :
- PLAYER/
- CAMPAIGN_LOG.md
- EPISODE_LOG.md
- CURRENT_PLAYER.md

---

# PURPOSE

PLAYER HISTORY

คือบันทึกประวัติชีวิตของตัวละครผู้เล่น

ตั้งแต่เริ่มต้นการผจญภัย

จนถึงปัจจุบัน

เอกสารนี้

ไม่ใช่ Character Sheet

แต่เป็น

Life Record

ของผู้เล่น

---

# DESIGN PRINCIPLE

PLAYER HISTORY

เก็บเฉพาะ

เหตุการณ์สำคัญ

ที่ส่งผลต่อชีวิตของตัวละคร

ไม่จำเป็นต้องบันทึก

เหตุการณ์เล็กน้อย

ทุกอย่าง

---

# WHEN TO UPDATE

อัปเดต

เมื่อเกิด

การเปลี่ยนแปลงสำคัญ

เท่านั้น

---

# WHAT TO RECORD

บันทึก

- จุดเริ่มต้น

- ความฝัน

- เป้าหมาย

- การเติบโต

- การเปลี่ยนแปลง

- ความสัมพันธ์

- ชัยชนะ

- ความล้มเหลว

- เหตุการณ์สำคัญ

---

# PERSONAL INFORMATION

บันทึก

- ชื่อ

- ฉายา

- อายุ

- บ้านเกิด

- ตำแหน่ง

- อาชีพ

- ลูกเรือ

---

# MAJOR EVENTS

บันทึก

เฉพาะ

เหตุการณ์สำคัญ

ตัวอย่าง

- ออกเรือครั้งแรก

- ได้รับค่าหัว

- กินผลปีศาจ

- เรียนรู้ฮาคิ

- ช่วยประเทศ

- ถูกจับ

- หนีจาก Impel Down

- ได้รับเรือลำใหม่

---

# CHARACTER GROWTH

บันทึก

การเติบโต

เช่น

- เปลี่ยนมุมมอง

- เอาชนะความกลัว

- ได้รับแรงบันดาลใจ

- สูญเสียความมั่นใจ

- เปลี่ยนความฝัน

---

# RELATIONSHIPS

บันทึก

ความสัมพันธ์สำคัญ

กับ

- ลูกเรือ

- NPC

- Faction

- ประเทศ

---

# ENEMIES

บันทึก

ศัตรูสำคัญ

เหตุผล

และ

สถานะปัจจุบัน

---

# ALLIES

บันทึก

พันธมิตรสำคัญ

และ

ความสัมพันธ์

---

# REPUTATION

บันทึก

ชื่อเสียง

ที่ได้รับ

ในแต่ละพื้นที่

เช่น

- ฮีโร่

- อาชญากร

- หมอ

- นักสำรวจ

- ผู้ก่อการปฏิวัติ

---

# BOUNTY HISTORY

บันทึก

การเปลี่ยนแปลงค่าหัวทั้งหมด

Old

↓

New

พร้อมเหตุผล

---

# DEVIL FRUIT

หากผู้เล่น

ได้รับผลปีศาจ

ให้บันทึก

- ชื่อผล

- วันที่ได้รับ

- วิธีได้รับ

- ความก้าวหน้า

---

# HAKI HISTORY

บันทึก

การเรียนรู้ฮาคิ

ทุกประเภท

พร้อมเหตุการณ์

ที่ทำให้เกิดการพัฒนา

---

# IMPORTANT ITEMS

บันทึก

ของสำคัญ

ที่ผู้เล่นเคยได้รับ

หรือสูญเสีย

---

# ACHIEVEMENTS

บันทึก

ความสำเร็จสำคัญ

เช่น

- ชนะศัตรูระดับสูง

- ช่วยประเทศ

- เดินทางถึงทะเลใหม่

- ค้นพบเกาะใหม่

- รักษาโรคระบาด

---

# FAILURES

บันทึก

ความล้มเหลว

ที่มีผลต่อชีวิต

เช่น

- สูญเสียลูกเรือ

- พ่ายแพ้

- ถูกจับ

- สูญเสียเรือ

---

# TEMPLATE

==================================================

# PLAYER HISTORY

## Basic Information

Name :

Alias :

Occupation :

Crew :

Current Bounty :

---

## Dream

-

---

## Major Life Events

-

---

## Character Growth

-

---

## Important Relationships

-

---

## Allies

-

---

## Enemies

-

---

## Reputation

-

---

## Bounty History

-

---

## Devil Fruit

-

---

## Haki

-

---

## Important Items

-

---

## Achievements

-

---

## Major Failures

-

---

## Notes

-

==================================================

---

# GOLDEN RULE

PLAYER HISTORY

ไม่ใช่

บันทึกว่า

ผู้เล่นทำอะไร

แต่เป็น

บันทึกว่า

ผู้เล่น

กลายเป็น

ใคร

# =====================================================
# FILE : 09_LOGS\WORLD_TIMELINE.md
# =====================================================

# WORLD TIMELINE

ประวัติศาสตร์ของโลก เรียงตามลำดับเวลา

บันทึกเฉพาะเหตุการณ์ระดับโลก
ไม่ใช่เหตุการณ์ของลูกเรือโดยตรง

---

## TEMPLATE

### Day X

- 
- 
- 

---

# TIMELINE

