# ONE PIECE PARALLEL WORLD RPG

# PROJECT ASTER ENGINE

# DESIGN DOCUMENT


Document : DESIGN.md

Version : 3.0

Engine : ASTER ENGINE

Status : Production

Authority : Core Design Document


---

# 1. PURPOSE


DESIGN.md

กำหนดหลักการออกแบบ

และแนวคิดของ

PROJECT ASTER ENGINE


เอกสารนี้กำหนด:


- รูปแบบของ Engine
- แนวทางการออกแบบระบบ
- ประสบการณ์ที่ต้องการสร้าง
- หลักการเชื่อมต่อระหว่างระบบ
- เป้าหมายระยะยาวของ Repository


DESIGN.md

ไม่ได้กำหนด:


- กฎการเล่นโดยละเอียด

อ้างอิง:

RULES.md


- พฤติกรรมของ AI Game Master

อ้างอิง:

GAME_MASTER.md


- กฎของระบบเฉพาะ

อ้างอิง:

System Module ที่เกี่ยวข้อง


หน้าที่ของ DESIGN.md

คือกำหนดว่า

ASTER ENGINE

ควรถูกออกแบบ

และพัฒนาไปในทิศทางใด


---

# 2. DESIGN PHILOSOPHY


ASTER ENGINE

ถูกออกแบบเป็น

Narrative Simulation Engine


ไม่ใช่เพียง

ระบบเกมที่มีเป้าหมายให้ผู้เล่นชนะ


เป้าหมายหลักคือ:


"สร้างโลกที่สามารถดำเนินต่อไปได้"


ทุกระบบ

ต้องสนับสนุน:


- โลกที่มีชีวิต
- NPC ที่มีเหตุผล
- เหตุการณ์ที่เกิดจากสาเหตุ
- ผลลัพธ์ที่มี Consequence
- การเติบโตของตัวละคร


ระบบ

เป็นเครื่องมือสนับสนุนโลก


ไม่ใช่สิ่งที่ควบคุมโลก


---

# 3. CORE DESIGN PRINCIPLES


## Story Before System


เรื่องราวและความสมเหตุสมผล

มาก่อนระบบ


ระบบถูกสร้างขึ้น

เพื่อช่วยจำลองโลก


ไม่ใช่บังคับให้โลก

ทำงานตามตัวเลข


---

## World Before Player


โลกเป็นศูนย์กลาง


ผู้เล่นเป็นเพียงส่วนหนึ่งของโลก


NPC

องค์กร

ประเทศ

และเหตุการณ์


ต้องสามารถดำเนินต่อไปได้

แม้ผู้เล่นไม่อยู่


---

## Canon Before Creativity


ทุกการออกแบบใหม่

ต้องเคารพ Canon เดิม


ความคิดสร้างสรรค์

ไม่สามารถทำลายความต่อเนื่อง


---

## Consistency Before Drama


ความต่อเนื่องของโลก

สำคัญกว่าความตื่นเต้นชั่วคราว


ทุกผลลัพธ์

ต้องมีเหตุผลรองรับ


---

## Simulation Before Script


Engine

ไม่ได้สร้างเรื่องราวที่กำหนดไว้ล่วงหน้า


แต่จำลองโลก

จาก:


- การตัดสินใจ
- เหตุการณ์
- NPC Action
- World State

# 4. ENGINE DESIGN MODEL


PROJECT ASTER ENGINE

ถูกออกแบบเป็น

Hybrid Narrative RPG Engine


ผสมแนวคิดระหว่าง:


- Tabletop RPG
- Narrative Simulation
- World Simulation
- Character Driven Story


เป้าหมายคือ

ให้ผู้เล่นสามารถมีอิสระในการตัดสินใจ

ขณะเดียวกันโลกยังคงมีโครงสร้าง

และกฎที่ชัดเจน



---

# 4.1 NARRATIVE SIMULATION


Engine

ให้ความสำคัญกับ:


- เหตุผลของโลก
- การตัดสินใจของตัวละคร
- ผลกระทบของการกระทำ
- ความต่อเนื่องของเหตุการณ์


ทุกเหตุการณ์

ต้องเกิดจาก:


Cause

↓

Action

↓

Result

↓

Consequence



ไม่มีเหตุการณ์ใด

เกิดขึ้นเพียงเพื่อผลักเนื้อเรื่อง



---

# 4.2 PLAYER AGENCY


ผู้เล่น

เป็นเจ้าของ:


- ความคิด
- คำพูด
- การตัดสินใจ
- เป้าหมายของตัวละคร


AI

มีหน้าที่:


- จำลองโลก
- ควบคุม NPC
- แสดงผลลัพธ์


AI ไม่มีสิทธิ์:


- ตัดสินใจแทนผู้เล่น
- เปลี่ยนเจตนาของผู้เล่น
- บังคับเส้นทางเรื่องราว



---

# 4.3 CONSEQUENCE DRIVEN DESIGN


ทุกการกระทำ

ต้องสร้างผลลัพธ์


ผลลัพธ์สามารถเกิดขึ้นได้:


## Immediate

ผลทันที


## Short Term

ผลกระทบระยะสั้น


## Mid Term

ผลกระทบต่อเนื่อง


## Long Term

ผลกระทบต่อโลกและประวัติศาสตร์



Consequences

สามารถส่งผลต่อ:


- Player
- Crew
- NPC
- Ship
- Island
- Organization
- Economy
- World State



---

# 4.4 FAIR SIMULATION


ทุกฝ่าย

อยู่ภายใต้กฎเดียวกัน:


- Player
- NPC
- Pirates
- Marines
- Organizations
- Kingdoms


Engine

ไม่มีฝ่ายที่ได้รับสิทธิพิเศษ



ชัยชนะ

ต้องเกิดจาก:


- การเตรียมตัว
- ความสามารถ
- การวางแผน
- สถานการณ์
- โอกาส



ไม่ใช่

Plot Armor



---

# 5. WORLD DESIGN


โลกของ ASTER ENGINE

คือ


ONE PIECE PARALLEL WORLD


ใช้กฎพื้นฐานของโลก ONE PIECE


ได้แก่:


- Four Blues
- Grand Line
- New World
- Red Line
- Calm Belt
- Devil Fruits
- Haki
- World Government
- Marines
- Revolutionary Army
- Pirate Organizations



แต่:


ประวัติศาสตร์

ตัวละคร

องค์กร

ประเทศ

และเหตุการณ์


เป็น Original Canon ของ Engine



ไม่มี Canon Character

เข้ามาแทนที่


โลกถูกขับเคลื่อนด้วย:


Original Characters

และ

World Simulation


# 6. LIVING WORLD DESIGN


ASTER ENGINE

ถูกออกแบบให้เป็น

Living World Simulation


โลกต้องสามารถดำเนินต่อไปได้

แม้ผู้เล่นจะไม่ได้อยู่ในเหตุการณ์



---

# 6.1 NPC DESIGN


NPC ทุกคน

ไม่ใช่เพียงตัวละครประกอบ


NPC ต้องมี:


- เป้าหมาย
- บุคลิก
- ความทรงจำ
- ความสัมพันธ์
- แรงจูงใจ
- การตัดสินใจของตนเอง



NPC

ไม่ควรรอผู้เล่น

เพื่อเริ่มดำเนินชีวิต



---

# 6.2 ORGANIZATION DESIGN


องค์กรภายในโลก

ต้องมีการเคลื่อนไหวของตนเอง


เช่น:


- รับสมาชิกใหม่
- สูญเสียสมาชิก
- เปลี่ยนผู้นำ
- ขยายอำนาจ
- ทำสงคราม
- ทำการค้า
- สูญเสียอำนาจ



องค์กร

ไม่ได้ถูกสร้างขึ้น

เพื่อเป็นเพียง Quest ให้ผู้เล่น



แต่เป็นส่วนหนึ่งของโลก



---

# 6.3 WORLD CHANGE


โลกสามารถเปลี่ยนแปลงได้

จาก:


- การกระทำของผู้เล่น
- การกระทำของ NPC
- ความขัดแย้งขององค์กร
- เหตุการณ์ธรรมชาติ
- เวลา



การเปลี่ยนแปลง

ต้องมีเหตุผลรองรับ



ไม่มีการเปลี่ยนโลก

โดยไม่มีสาเหตุ



---

# 7. SYSTEM ARCHITECTURE DESIGN


ASTER ENGINE

ใช้หลักการออกแบบแบบ Modular



แต่ละระบบ

มีหน้าที่เฉพาะ



ตัวอย่าง:


SYSTEM.md

กำหนดหลักการ Engine


RULES.md

กำหนดกฎการเล่น


GAME_MASTER.md

กำหนดพฤติกรรม AI


MODULES

กำหนดระบบเฉพาะ


DATABASE

เก็บข้อมูลถาวร


SAVE

เก็บสถานะปัจจุบัน


LOG

เก็บประวัติ



---

# 7.1 SEPARATION OF RESPONSIBILITY


ทุกไฟล์

ต้องมีหน้าที่ชัดเจน



ห้าม:


- เก็บข้อมูลซ้ำ
- กำหนดกฎซ้ำ
- แทนที่หน้าที่ของไฟล์อื่น



หากต้องใช้งานข้อมูลจากระบบอื่น


ให้ใช้การอ้างอิง



---

# 7.2 SCALABILITY DESIGN


Engine

ต้องสามารถรองรับ:


- Campaign ระยะยาว
- NPC จำนวนมาก
- เกาะใหม่
- องค์กรใหม่
- ระบบใหม่
- Mechanics ใหม่



โดยไม่ทำลาย:


- Canon เดิม
- Save เดิม
- Database เดิม



---

# 7.3 AI FRIENDLY DESIGN


เอกสารทั้งหมด

ต้องถูกออกแบบให้ AI เข้าใจได้ง่าย



โดยใช้:


- โครงสร้าง Markdown มาตรฐาน
- คำศัพท์เดียวกัน
- Responsibility ชัดเจน
- Reference ชัดเจน



เป้าหมาย:


AI หลายระบบ

สามารถทำงานบน Repository เดียวกันได้


# 8. CHARACTER DESIGN


ASTER ENGINE

ออกแบบตัวละคร

โดยให้ความสำคัญกับ:


- Identity
- Growth
- Choice
- Consequence
- Personal Journey



ตัวละคร

ไม่ได้ถูกสร้างขึ้นเพื่อเป็นเพียง

ค่าพลังหรือสถิติ



แต่เป็นบุคคลหนึ่ง

ที่มี:


- อดีต
- เป้าหมาย
- ความเชื่อ
- จุดแข็ง
- จุดอ่อน
- ความสัมพันธ์



---

# 8.1 CHARACTER PROGRESSION


การเติบโตของตัวละคร

ไม่ได้ขึ้นอยู่กับตัวเลขเพียงอย่างเดียว



Progression

เกิดจาก:


- ประสบการณ์
- การฝึกฝน
- เหตุการณ์สำคัญ
- ความสัมพันธ์
- การตัดสินใจ



ความแข็งแกร่ง

ต้องมีที่มา



ไม่เกิดขึ้น

เพราะเนื้อเรื่องต้องการ



---

# 8.2 ROLE DESIGN


ตัวละครแต่ละคน

ควรมีบทบาทและเอกลักษณ์ของตนเอง



บทบาท

ไม่จำกัดเพียงการต่อสู้



สามารถเป็น:


- นักเดินเรือ
- แพทย์
- ช่างต่อเรือ
- นักวิจัย
- นักการทูต
- นักล่าโจรสลัด
- นักสู้



ทุกบทบาท

มีคุณค่าในโลก



---

# 9. CAMPAIGN DESIGN


ASTER ENGINE

ถูกออกแบบสำหรับ

Campaign ระยะยาว



เป้าหมาย:


- รองรับหลาย Episode
- รักษาความต่อเนื่อง
- ให้โลกเปลี่ยนแปลงตามเวลา
- รองรับ Character Arc ระยะยาว



---

# 9.1 EPISODE STRUCTURE


แต่ละ Episode

ควรเป็นส่วนหนึ่งของการเดินทาง



Episode

ไม่จำเป็นต้องมี:


- จุดเริ่มต้นที่ถูกกำหนด
- จุดจบที่ถูกบังคับ
- เหตุการณ์ที่ล็อกไว้



แต่ควรเกิดจาก:


- การตัดสินใจของผู้เล่น
- สถานการณ์ของโลก
- การเคลื่อนไหวของ NPC
- ผลจากเหตุการณ์ก่อนหน้า



---

# 9.2 CANON CONTINUITY


ทุก Episode

ต้องรักษาความต่อเนื่องของ:


- Character
- World State
- Relationship
- Reputation
- History



เหตุการณ์ที่เกิดขึ้น

ถือเป็น Canon



ไม่มี:


- Reset World
- Undo Consequence
- Retcon โดยไม่มีเหตุผล



---

# 10. DATA DESIGN


ASTER ENGINE

แบ่งข้อมูลตามช่วงเวลา



---

## Permanent Data


ข้อมูลที่เปลี่ยนแปลงยาก


เช่น:


- Islands
- NPC Identity
- Factions
- Devil Fruits
- World Rules



จัดเก็บใน:


DATABASE



---

## Dynamic Data


ข้อมูลที่เปลี่ยนแปลงระหว่าง Campaign


เช่น:


- Reputation
- Relationship
- Economy
- NPC Status
- World Events



จัดเก็บใน:


SAVE



---

## Historical Data


ข้อมูลเหตุการณ์ที่ผ่านมา


เช่น:


- Episode History
- Major Events
- Important Decisions



จัดเก็บใน:


LOG



---

# 10.1 DATA CONSISTENCY


ข้อมูลทุกประเภท

ต้องมี Source of Truth เดียว



ห้าม:


- คัดลอกข้อมูลซ้ำ
- มีค่าขัดแย้งหลายแห่ง
- ใช้ Memory แทน Repository



Repository

เป็นแหล่งอ้างอิงหลัก


# 11. MODULE DESIGN


ASTER ENGINE

ถูกออกแบบให้ระบบต่าง ๆ

ทำงานร่วมกันแบบ Modular System



แต่ละ Module

ต้องมี:


- หน้าที่ชัดเจน
- ขอบเขตชัดเจน
- Dependency ชัดเจน
- ไม่กำหนดกฎแทน Module อื่น



---

# 11.1 SYSTEM MODULE PRINCIPLE


System Module

มีหน้าที่กำหนดรายละเอียดเฉพาะด้าน



ตัวอย่าง:


COMBAT.md

กำหนด Combat System


MEDICAL.md

กำหนด Medical System


NAVIGATION.md

กำหนด Navigation System


DICE.md

กำหนด Resolution System


HAKI.md

กำหนด Haki System


DEVIL_FRUIT.md

กำหนด Devil Fruit System



แต่ละ Module

ต้องอ้างอิง:


SYSTEM.md

และ

RULES.md



---

# 11.2 MODULE INTEGRATION


Module ต่าง ๆ

สามารถทำงานร่วมกันได้



ตัวอย่าง:


Combat

↓

ใช้

DICE

↓

อ้างอิง

HAKI

↓

อ้างอิง

DEVIL_FRUIT

↓

ตรวจ

STATUS_EFFECTS



แต่:


แต่ละ Module

ยังคงรักษาหน้าที่ของตนเอง



---

# 12. GAME MASTER DESIGN


Game Master

เป็นตัวจำลองโลก



ไม่ใช่ผู้เขียนเรื่องราวแทนผู้เล่น



หน้าที่หลัก:


- จำลอง NPC
- จำลองโลก
- ตีความกฎ
- สร้างผลลัพธ์
- รักษา Canon



---

# 12.1 WORLD SIMULATION OVER SCRIPT


Game Master

ต้องสร้างเหตุการณ์จาก:


- World State
- NPC Motivation
- Player Action
- Existing Canon



ไม่ใช้:


- Plot ที่ล็อกไว้
- ผลลัพธ์ที่กำหนดล่วงหน้า
- การบังคับเส้นทาง



---

# 12.2 FAIR NARRATIVE


Game Master

ต้องรักษาความยุติธรรม



ไม่ให้:


- ผู้เล่นได้เปรียบเพราะเป็นตัวละครหลัก
- NPC ทำสิ่งที่ไม่มีเหตุผล
- เหตุการณ์เกิดขึ้นเพื่อช่วยเรื่องราว



ทุกฝ่าย

ต้องอยู่ภายใต้กฎเดียวกัน



---

# 13. DESIGN QUALITY STANDARD


ทุกระบบใหม่

ก่อนเพิ่มเข้า Engine

ต้องผ่านการตรวจสอบ:



## Consistency


ไม่ขัดกับระบบเดิม



## Responsibility


ไม่แย่งหน้าที่ของไฟล์อื่น



## Scalability


รองรับการขยายในอนาคต



## Maintainability


แก้ไขง่าย



## Canon Compatibility


ไม่ทำลาย Canon เดิม



---

# 14. FUTURE DESIGN DIRECTION


ASTER ENGINE

ควรสามารถขยายได้ในอนาคต



รองรับ:


- โลกใหม่
- Campaign ใหม่
- ระบบใหม่
- Mechanics ใหม่
- AI Platform ใหม่



โดยยังรักษา:


- Philosophy
- Canon
- Repository Structure
- Data Consistency



---

# 15. FINAL DESIGN PRINCIPLES


ทุกการออกแบบของ

PROJECT ASTER ENGINE


ต้องตอบคำถาม:



## ระบบนี้ทำให้โลกดีขึ้นหรือไม่


ถ้าเพิ่มความซับซ้อน

แต่ไม่ได้เพิ่มคุณค่าของ Simulation

ควรพิจารณาใหม่



---

## ระบบนี้รักษาอิสระของผู้เล่นหรือไม่


ผู้เล่นต้องมีทางเลือก

และผลลัพธ์ต้องเกิดจากการตัดสินใจ



---

## ระบบนี้รักษาความต่อเนื่องหรือไม่


ทุกการเปลี่ยนแปลง

ต้องสามารถอธิบายได้



---

## ระบบนี้รองรับอนาคตหรือไม่


ทุกการออกแบบ

ต้องไม่ทำลายการขยายตัวของ Engine


# 16. DEVELOPMENT DESIGN WORKFLOW


การพัฒนา

PROJECT ASTER ENGINE


ต้องดำเนินการอย่างเป็นระบบ



ลำดับการพัฒนา:


Analyze

↓

Design

↓

Review

↓

Refactor

↓

Implement

↓

Validate



---

# 16.1 ANALYSIS FIRST


ก่อนเพิ่มหรือเปลี่ยนแปลงระบบ


ต้องตรวจสอบ:


- ปัญหาที่ต้องแก้
- ระบบที่เกี่ยวข้อง
- ผลกระทบต่อ Repository
- ผลกระทบต่อ Canon



ห้ามเพิ่มระบบ

เพียงเพราะต้องการเพิ่มความซับซ้อน



---

# 16.2 REFACTOR BEFORE CREATE


เมื่อพบปัญหา


ให้พิจารณาตามลำดับ:



1. แก้ไขไฟล์เดิม


↓

2. ปรับโครงสร้าง


↓

3. สร้างไฟล์ใหม่เมื่อจำเป็นเท่านั้น



เป้าหมาย:


ลดข้อมูลซ้ำ

รักษาความต่อเนื่อง

ทำให้ Repository ดูแลได้ง่าย



---

# 16.3 CHANGE IMPACT


ทุกการเปลี่ยนแปลง

ต้องตรวจสอบผลกระทบต่อ:



- SYSTEM
- RULES
- GAME MASTER
- MODULES
- DATABASE
- SAVE
- LOG



การเปลี่ยนแปลงหนึ่งจุด

อาจส่งผลต่อหลายระบบ



---

# 17. REPOSITORY DESIGN


Repository

คือโครงสร้างหลัก

ที่ทำให้ AI และระบบต่าง ๆ

เข้าใจ Engine ตรงกัน



ทุก Folder

ต้องมีหน้าที่ชัดเจน



ตัวอย่าง:



00_SYSTEM

Core Engine Rules



01_WORLD

World Database



02_PLAYER

Player Data



03_CREW

Crew Data



04_SHIPS

Ship Data



05_FACTIONS

Organization Data



06_NPCS

NPC Data



07_ITEMS

Item Data



08_DEVIL_FRUITS

Devil Fruit Data



09_LOGS

Campaign History



10_SAVE

Current World State



11_SECRETS

Hidden Information



12_CODEX

World Encyclopedia



13_ARCHIVIST

Data Management System



---

# 17.1 REPOSITORY CONSISTENCY


ทุกไฟล์

ต้องใช้มาตรฐานเดียวกัน:



- Markdown Structure
- Naming Convention
- Terminology
- Document Format
- Reference Style



เป้าหมาย:


ให้ AI หลายระบบ

สามารถอ่าน Repository เดียวกัน

และตีความตรงกัน



---

# 18. DESIGN SUMMARY


PROJECT ASTER ENGINE


ถูกออกแบบเพื่อสร้าง:



"โลกที่สามารถมีชีวิตอยู่ได้"



ไม่ใช่เพียง:



"เรื่องราวที่รอผู้เล่น"



Engine ให้ความสำคัญกับ:



- โลกก่อนผู้เล่น
- เหตุก่อนผลลัพธ์
- Canon ก่อนความคิดสร้างสรรค์
- ความต่อเนื่องก่อนความตื่นเต้น
- Simulation ก่อน Script



ทุกระบบ

ทุกไฟล์

และทุกการตัดสินใจ


ต้องสนับสนุนเป้าหมายเดียว:



สร้าง ONE PIECE Parallel World

ที่สามารถดำเนินต่อไปได้ด้วยตัวเอง



---

# DOCUMENT STATUS


Document Name

DESIGN.md


Document Version

3.0


Engine Version

ASTER ENGINE v1.x


Status

Production


Authority

Core Design Document


Last Reviewed

TBD


---

# END OF DOCUMENT

DESIGN.md

กำหนดแนวทางการออกแบบ

ของ PROJECT ASTER ENGINE


เมื่อเกิดข้อขัดแย้ง

ให้ยึดลำดับ:


SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

DESIGN.md

↓

System Module ที่เกี่ยวข้อง

# 19. SYSTEM EVOLUTION DESIGN


ASTER ENGINE

ถูกออกแบบให้สามารถพัฒนาได้ต่อเนื่อง


Engine

ไม่ใช่ระบบที่สมบูรณ์ตั้งแต่เริ่มต้น


แต่เป็น Framework

ที่สามารถเติบโตตาม Campaign



---

# 19.1 CONTROLLED EXPANSION


การเพิ่มระบบใหม่


ต้องพิจารณา:


- ความจำเป็น
- ผลกระทบ
- ความสอดคล้องกับ Philosophy
- ความสัมพันธ์กับระบบเดิม



ระบบใหม่

ต้องไม่เพิ่มความซับซ้อน

โดยไม่มีประโยชน์ต่อ Simulation



---

# 19.2 BACKWARD COMPATIBILITY


การพัฒนา Engine


ต้องรักษาข้อมูลเดิม


ได้แก่:


- Existing Canon
- Existing Save
- Existing Database
- Existing Campaign History



ห้ามทำลายข้อมูลเดิม

เพื่อแลกกับระบบใหม่



---

# 20. IMMERSION DESIGN


เป้าหมายสำคัญของ

ASTER ENGINE


คือการสร้างความรู้สึกว่า:



"ผู้เล่นกำลังอาศัยอยู่ในโลกนั้นจริง ๆ"



ไม่ใช่:



"กำลังเล่นผ่านระบบ"



---

# 20.1 WORLD REACTION


โลกต้องตอบสนองต่อ:


- การกระทำ
- ชื่อเสียง
- ความสัมพันธ์
- การตัดสินใจ
- เหตุการณ์ที่ผ่านมา



ผู้เล่น

ไม่ควรถูกแยกออกจากโลก



ทุกสิ่งที่เกิดขึ้น

ควรมีผลต่อสิ่งรอบตัว



---

# 20.2 INFORMATION DESIGN


ผู้เล่น

ไม่จำเป็นต้องรู้ทุกอย่าง



ข้อมูลควรถูกเปิดเผยตาม:


- การค้นพบ
- ประสบการณ์
- ความสัมพันธ์
- การสืบสวน
- เหตุการณ์



ความไม่รู้

เป็นส่วนหนึ่งของการจำลองโลก



---

# 21. LONG TERM CAMPAIGN DESIGN


ASTER ENGINE

ออกแบบเพื่อรองรับ Campaign ระยะยาว



เป้าหมาย:


- หลายสิบ Episode
- การเติบโตระยะยาว
- โลกเปลี่ยนแปลงต่อเนื่อง
- Character Development



---

# 21.1 MEMORY AND CONTINUITY


ทุกเหตุการณ์สำคัญ


ต้องสามารถย้อนตรวจสอบได้



ผ่าน:


- SAVE
- LOG
- DATABASE
- ARCHIVE



เพื่อรักษา:


- ความต่อเนื่อง
- ความถูกต้อง
- Canon



---

# 21.2 CHARACTER JOURNEY


ตัวละคร

ต้องมีการเดินทางของตนเอง



ไม่ใช่เพียง:


- เพิ่มพลัง
- ผ่านภารกิจ
- ชนะศัตรู



แต่รวมถึง:


- การเปลี่ยนแปลงภายใน
- ความสัมพันธ์
- ความเชื่อ
- การเรียนรู้
- การตัดสินใจ



---

# 22. FINAL DESIGN STATEMENT


PROJECT ASTER ENGINE


ไม่ได้ถูกสร้างขึ้น

เพื่อจำลองการเป็นผู้ชนะ



แต่ถูกสร้างขึ้น

เพื่อจำลองการมีชีวิตอยู่



ภายในโลกของ

ONE PIECE Parallel World



โลกนี้:


- มีอดีต
- มีปัจจุบัน
- มีอนาคต


NPC มีเป้าหมาย


องค์กรมีแผนการ


ประเทศมีการเปลี่ยนแปลง


ผู้เล่นเป็นเพียงหนึ่งชีวิต

ภายในโลกขนาดใหญ่



ทุกการกระทำ

จะถูกจดจำ



ทุกผลลัพธ์

จะกลายเป็น Canon



และโลก

จะเดินหน้าต่อไปเสมอ


---

# END OF DESIGN DOCUMENT