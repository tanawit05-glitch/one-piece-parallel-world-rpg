# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# RULES

Document Version : 2.1
Status : Production
Authority : Secondary (After SYSTEM.md)

---

# 1. PURPOSE

RULES.md

กำหนดกฎการเล่นของ

PROJECT ASTER ENGINE

หน้าที่ของเอกสารนี้คือ

- กำหนดกฎกลางของการเล่น
- กำหนดหลักการตัดสินผลลัพธ์
- กำหนดข้อจำกัดของผู้เล่นและโลก
- กำหนดการใช้ Module Rules
- กำหนดมาตรฐาน Consequence

RULES.md

ไม่กำหนด

- ปรัชญาของ Engine
- โครงสร้าง Repository
- วิธีทำงานของ AI Game Master
- ข้อมูล Canon ของโลก

ข้อมูลเหล่านั้น

ให้อ้างอิง

SYSTEM.md

และเอกสารที่เกี่ยวข้อง

---

# 2. SCOPE

RULES.md

ครอบคลุมกฎกลางของระบบ

ได้แก่

- Character
- Action Resolution
- Combat
- Exploration
- Travel
- Economy
- Reputation
- Relationship
- Medical
- Death
- Consequence
- World Interaction

หากระบบใด

มี Module เฉพาะ

RULES.md

ทำหน้าที่กำหนดหลักการ

ส่วนรายละเอียดเชิงระบบ

ให้อ้างอิง Module นั้นโดยตรง

ตัวอย่าง

Combat

↓

COMBAT.md

Dice

↓

DICE.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

---

# 3. RULE HIERARCHY

เมื่อเกิดความขัดแย้งระหว่างเอกสาร

ให้ใช้ลำดับอำนาจดังนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

SYSTEM MODULES

↓

CURRENT WORLD STATE

---

เอกสารลำดับล่าง

ไม่มีสิทธิ์ขัดแย้งกับเอกสารลำดับบน

Game Master

ไม่มีสิทธิ์ Override

- SYSTEM.md
- RULES.md
- Canon
- Repository

---

# 4. CORE RULES

ทุกระบบภายใน ASTER ENGINE

ต้องปฏิบัติตามหลักต่อไปนี้

---

## Logic Before Random

เหตุผลของโลก

มาก่อนการสุ่ม

หากสามารถตัดสินได้จากเหตุผล

ไม่จำเป็นต้องใช้ Dice

---

## Random Supports Logic

Dice

มีหน้าที่สร้างความไม่แน่นอน

ไม่ใช่แทนที่เหตุผล

---

## Consequence Always Exists

ทุกการกระทำ

ต้องสร้างผลลัพธ์

ผลลัพธ์อาจเกิดขึ้น

- ทันที
- ระยะสั้น
- ระยะกลาง
- ระยะยาว

---

## Fair Resolution

ทุกฝ่าย

อยู่ภายใต้กฎเดียวกัน

ได้แก่

- Player
- NPC
- Pirate
- Marine
- Organization
- Kingdom

ไม่มี Plot Armor

---

## No Forced Story

Game Master

ไม่มีสิทธิ์บังคับเหตุการณ์

เพื่อให้เรื่องเดินตามแผน

โลกต้องตอบสนองจาก

- การกระทำ
- เหตุผล
- สถานการณ์
- Consequence

---

# 5. ACTION RESOLUTION

การตัดสินผลของ Action

ใช้หลักดังนี้

1. Situation

↓

2. Logic

↓

3. Character Ability

↓

4. Environment

↓

5. Rules

↓

6. Dice (ถ้าจำเป็น)

↓

7. Consequence

---

หากผลลัพธ์ชัดเจน

ไม่ต้องใช้ Dice

ตัวอย่าง

- เดิน
- พูดคุยทั่วไป
- เปิดประตูที่ไม่ได้ล็อก
- ใช้อุปกรณ์ที่เชี่ยวชาญ

---

หากมีความไม่แน่นอน

จึงใช้ระบบ Dice

รายละเอียด

อ้างอิง DICE.md

# 6. PLAYER ACTIONS

ผู้เล่นสามารถกระทำได้อย่างอิสระ

ตราบใดที่อยู่ภายใต้ข้อจำกัดของโลก

ตัวอย่าง

- พูดคุย
- เคลื่อนไหว
- สำรวจ
- ต่อสู้
- ใช้ไอเทม
- ใช้ผลปีศาจ
- ใช้ฮาคิ
- เจรจา
- หลบหนี
- ทำงาน
- ซื้อขาย
- สร้างความสัมพันธ์

---

ผู้เล่นเป็นเจ้าของตัวละครของตนเอง

AI ไม่มีสิทธิ์

- พูดแทนผู้เล่น
- คิดแทนผู้เล่น
- ตัดสินใจแทนผู้เล่น
- เพิ่มการกระทำที่ผู้เล่นไม่ได้ประกาศ
- เปลี่ยนเจตนาของผู้เล่น

---

# 7. SUCCESS AND FAILURE

ผลลัพธ์ของ Action

แบ่งเป็น

- Complete Success
- Success
- Partial Success
- Success With Cost
- Failure
- Critical Failure

---

Failure

ไม่ใช่การจบเรื่อง

แต่เป็นจุดเริ่มต้นของ

Consequence ใหม่

---

# 8. TIME RULES

เวลาในโลก

ดำเนินต่อเนื่องเสมอ

ทุกกิจกรรม

ต้องใช้เวลา

Game Master

ต้องติดตามผลของเวลา

ต่อ

- NPC
- สภาพอากาศ
- การเดินทาง
- เศรษฐกิจ
- Event

---

ไม่มี

- Instant Travel
- Time Skip โดยไม่มีเหตุผล
- ข้าม Consequence

---

# 9. EXPLORATION RULES

ผู้เล่นสามารถสำรวจโลกได้อย่างอิสระ

Game Master

ต้องบรรยายโลกตามข้อมูลจริง

ไม่ใช่สร้างเส้นเรื่องบังคับ

---

การสำรวจสามารถนำไปสู่

- Discovery
- Conflict
- Information
- NPC Interaction
- Event
- Secret

---

# 10. COMBAT RULES

Combat

เป็นส่วนหนึ่งของ World Simulation

ไม่ใช่ระบบแยกจากโลก

---

หลักการกลาง:

- ทุกฝ่ายมีโอกาสชนะ
- ทุกฝ่ายมีโอกาสแพ้
- ทุกการต่อสู้มีความเสี่ยง
- ทุกการต่อสู้สร้าง Consequence

---

รายละเอียดระบบ

ให้อ้างอิง

COMBAT.md

---

# 11. MEDICAL RULES

การรักษา

ต้องอยู่ภายใต้หลักความสมจริงของโลก

---

หลักการ:

- บาดเจ็บต้องใช้เวลา
- การรักษามีข้อจำกัด
- ความเสียหายส่งผลต่อร่างกาย
- การรักษาที่ถูกต้องช่วยลด Consequence

---

รายละเอียด

ให้อ้างอิง

MEDICAL.md

---

# 12. DEVIL FRUIT RULES

ผลปีศาจ

ใช้กฎพื้นฐานของโลก ONE PIECE

---

หลักการ:

- หนึ่งคนต่อหนึ่งผล
- ผู้ใช้ไม่สามารถว่ายน้ำได้
- ความสามารถต้องอยู่ภายใต้ขอบเขตของผล
- การพัฒนาพลังต้องเกิดจากประสบการณ์

---

รายละเอียด

ให้อ้างอิง

DEVIL_FRUIT.md

---

# 13. HAKI RULES

ฮาคิ

เป็นพลังที่เกิดจาก

- ประสบการณ์
- การฝึกฝน
- เจตจำนง
- การเติบโตของตัวละคร

---

หลักการ:

- ไม่ใช่ทุกคนมีฮาคิ
- ระดับความสามารถแตกต่างกัน
- ไม่มีการเพิ่มพลังโดยไม่มีเหตุผล

---

รายละเอียด

ให้อ้างอิง

HAKI.md

---

# 14. ECONOMY RULES

เศรษฐกิจของโลก

ต้องมีผลจริง

---

สกุลเงิน:

Beli

---

ทุกการซื้อขาย

ต้องส่งผลต่อ

- เงินผู้เล่น
- เงิน NPC
- Inventory
- เศรษฐกิจที่เกี่ยวข้อง

---

Game Master

ต้องติดตาม

ยอดเงินปัจจุบันของผู้เล่น

---

# 15. REPUTATION RULES

ชื่อเสียง

เกิดจากการกระทำ

ไม่ใช่ความตั้งใจ

---

ชื่อเสียงสามารถเปลี่ยนแปลงกับ

- ประชาชน
- โจรสลัด
- นาวิกโยธิน
- รัฐบาลโลก
- องค์กรต่าง ๆ

---

รายละเอียด

ให้อ้างอิง

REPUTATION.md

# 16. RELATIONSHIP RULES

NPC

มีความทรงจำและตอบสนองต่อการกระทำของผู้เล่น

---

ความสัมพันธ์สามารถ

- เพิ่มขึ้น
- ลดลง
- เปลี่ยนรูปแบบ
- สิ้นสุดลง

---

การเปลี่ยนแปลงต้องเกิดจาก

- การกระทำ
- เวลา
- เหตุการณ์
- ความเชื่อ
- สถานการณ์

---

รายละเอียด

ให้อ้างอิง

RELATIONSHIP.md

---

# 17. INVENTORY RULES

สิ่งของทุกชนิด

ต้องมีสถานะชัดเจน

เช่น

- อยู่กับตัวละคร
- อยู่ในกระเป๋า
- อยู่บนเรือ
- อยู่ในคลังสินค้า

---

ผู้เล่นไม่สามารถใช้งานสิ่งของ

ที่ไม่ได้ครอบครองจริง

---

รายละเอียด

ให้อ้างอิง

ITEMS.md

---

# 18. DEATH RULES

ความตาย

เป็นส่วนหนึ่งของโลก

---

ผู้เล่น

NPC

และสิ่งมีชีวิตทุกประเภท

สามารถเสียชีวิตได้

---

ไม่มีระบบ

- Respawn
- Reload Story
- Undo Consequence

เว้นแต่เกิดจากกลไกของโลกที่กำหนดไว้

---

# 19. TRAVEL RULES

การเดินทาง

ต้องใช้เวลา

---

ปัจจัยที่ส่งผล:

- ระยะทาง
- เรือ
- สภาพอากาศ
- เส้นทาง
- ทักษะการเดินเรือ

---

รายละเอียด

ให้อ้างอิง

NAVIGATION.md

---

# 20. CONSEQUENCE RULES

ทุกการกระทำ

สร้างผลลัพธ์

---

Consequence สามารถส่งผลต่อ

- ผู้เล่น
- NPC
- ลูกเรือ
- เรือ
- เกาะ
- ประเทศ
- องค์กร
- โลก

---

ไม่มีการลบ Consequence

โดยไม่มีเหตุผลตาม Canon

---

# 21. EVENT RULES

Event

เกิดจากการเคลื่อนไหวของโลก

ไม่ใช่เพื่อบังคับเนื้อเรื่อง

---

Event แบ่งเป็น

- Personal Event
- Local Event
- Regional Event
- World Event

---

หลาย Event

สามารถเกิดขึ้นพร้อมกันได้

---

# 22. MODULE REFERENCE

รายละเอียดระบบเฉพาะ

ให้อ้างอิงเอกสารดังนี้

Combat

↓

COMBAT.md

Dice

↓

DICE.md

Medical

↓

MEDICAL.md

Navigation

↓

NAVIGATION.md

Reputation

↓

REPUTATION.md

Relationship

↓

RELATIONSHIP.md

Status Effects

↓

STATUS_EFFECTS.md

Devil Fruit

↓

DEVIL_FRUIT.md

Haki

↓

HAKI.md

---

# 23. EXCEPTION RULES

เมื่อไม่มีกฎเฉพาะ

ให้ใช้ลำดับดังนี้

SYSTEM.md

↓

RULES.md

↓

GAME_MASTER.md

↓

Module ที่เกี่ยวข้อง

↓

Canon

↓

Logic

↓

Dice

---

การตัดสินทุกครั้ง

ต้องสามารถอธิบายเหตุผลได้

---

# 24. RELATED DOCUMENTS

เอกสารที่เกี่ยวข้อง

- SYSTEM.md
- GAME_MASTER.md
- COMBAT.md
- DICE.md
- MEDICAL.md
- NAVIGATION.md
- REPUTATION.md
- RELATIONSHIP.md
- STATUS_EFFECTS.md
- DEVIL_FRUIT.md
- HAKI.md
- ITEMS.md

---

# DOCUMENT STATUS

Document Name

RULES.md

Document Version

2.1

Engine Version

ASTER ENGINE v1.x

Status

Production

Authority

Secondary After SYSTEM.md

---

# END OF DOCUMENT

RULES.md

กำหนดกฎกลางของ

PROJECT ASTER ENGINE

รายละเอียดเชิงระบบ

ให้อ้างอิง Module เฉพาะ

เมื่อเกิดความขัดแย้ง

ให้ยึด

SYSTEM.md

เป็นมาตรฐานสูงสุด