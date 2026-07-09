# =====================================================
# FILE : 06_NPCS\NPC_BEHAVIOR_ENGINE.md
# =====================================================

# NPC_BEHAVIOR_ENGINE.md
## ASTER ENGINE — NPC BEHAVIOR SYSTEM

---

# 🧠 CORE IDEA

NPC Behavior Engine คือระบบที่ทำให้ NPC:

> “คิด → ตัดสินใจ → ลงมือทำ → เปลี่ยนโลก”

ไม่ใช่ script  
ไม่ใช่ random action  
แต่เป็น “logic-based life simulation”

---

# 🔁 BEHAVIOR LOOP (CORE CYCLE)

NPC ทุกตัววน loop นี้ตลอดเวลา:

## 1. PERCEPTION (รับรู้โลก)
NPC รับข้อมูลจากรอบตัว:

- ศัตรู
- เพื่อน
- ความขัดแย้ง
- ข่าว
- สภาพแวดล้อม

---

## 2. EVALUATION (ประเมินสถานการณ์)

NPC จะถามตัวเอง:

- อันตรายไหม?
- ได้ประโยชน์ไหม?
- เกี่ยวกับเป้าหมายไหม?
- เกี่ยวกับความสัมพันธ์ไหม?

---

## 3. DECISION (ตัดสินใจ)

NPC เลือก 1 จาก:

- Fight (สู้)
- Flee (หนี)
- Negotiate (เจรจา)
- Observe (เฝ้าดู)
- Execute Goal (ทำเป้าหมาย)

---

## 4. ACTION (ลงมือทำ)

NPC ทำสิ่งที่เลือกทันที

- ต่อสู้
- เดินทาง
- ช่วยเหลือ
- ทรยศ
- หลบหนี

---

## 5. MEMORY UPDATE (อัปเดตความจำ)

ผลลัพธ์จะถูกส่งไป NPC_MEMORY_SYSTEM:

- เพิ่ม memory
- เปลี่ยน bias
- เปลี่ยน relationship

---

# ⚖️ PRIORITY SYSTEM

NPC ไม่ตัดสินใจมั่ว แต่ใช้ priority:

## 🔴 Priority 1 — Survival
- หนีภัยทันทีถ้าจะตาย

## 🟠 Priority 2 — Core Goal
- เป้าหมายชีวิตหลัก

## 🟡 Priority 3 — Emotion
- ความโกรธ / กลัว / รัก / แค้น

## 🟢 Priority 4 — Relationship
- เพื่อน / ศัตรู / faction

## 🔵 Priority 5 — Opportunity
- เงิน / ของ / โอกาส

---

# 🧬 PERSONALITY MODIFIER

NPC จะไม่ตัดสินใจเหมือนกันทุกตัว

## Fear
- สูง → หนีง่าย
- ต่ำ → กล้าบ้าบิ่น

## Pride
- สูง → ไม่ยอมถอย
- ต่ำ → ยอมแพ้เร็ว

## Loyalty
- สูง → ปกป้องพวกพ้อง
- ต่ำ → หักหลังง่าย

## Greed
- สูง → ไล่ทรัพยากร
- ต่ำ → เน้นอุดมการณ์

---

# ⚔️ COMBAT BEHAVIOR RULE

เมื่อเกิดการต่อสู้:

## NPC จะเลือก:

### 1. Advantage Check
- เราชนะไหม?
- ศัตรูแข็งกว่าไหม?

### 2. Risk Check
- โอกาสตายสูงไหม?

### 3. Emotion Override
- แค้น / กลัว / ปกป้อง

---

## RESULT OPTIONS:

- ATTACK
- DEFEND
- RETREAT
- CALL BACKUP
- SACRIFICE

---

# 🌍 WORLD IMPACT RULE

ทุก action ต้องส่งผลต่อโลก:

- สร้างข่าว
- เปลี่ยน faction relations
- เพิ่ม bounty
- เปลี่ยน NPC memory

---

# 🧠 LEARNING SYSTEM

NPC เรียนรู้จาก:

- แพ้ → ปรับกลยุทธ์
- ชนะ → เพิ่ม confidence
- betrayal → เปลี่ยน loyalty
- trauma → เปลี่ยน personality

---

# 🔥 SPECIAL RULE: EMERGENT BEHAVIOR

NPC สามารถ:

- ทำสิ่งที่ไม่เคย script ไว้
- เปลี่ยนฝ่ายเอง
- สร้าง alliance ใหม่
- กลายเป็นภัยระดับโลก

---

# ⚖️ BALANCE RULE

NPC ต้องไม่:

- แข็งเกินเหตุ
- โง่เกินเหตุ
- หรือไม่มีเหตุผล

ทุกการกระทำต้องมี “reason chain”

---

# 📌 SUMMARY

NPC BEHAVIOR ENGINE =

“ระบบคิดของสิ่งมีชีวิตจำลองที่สร้างโลกผ่านการตัดสินใจของมันเอง”

# =====================================================
# FILE : 06_NPCS\NPC_CORE.md
# =====================================================

# NPC_CORE.md
## 06_NPCS SYSTEM

---

# 🧠 NPC CORE DEFINITION

NPC (Non-Player Character) ใน ASTER ENGINE คือ:

> สิ่งมีชีวิตจำลองที่มีความคิด เป้าหมาย ความทรงจำ และสามารถเปลี่ยนโลกได้ด้วยการกระทำของตัวเอง

NPC ไม่ใช่ข้อมูล  
NPC ไม่ใช่ฉากประกอบ  
NPC คือ Agent ที่มีชีวิตในระบบจำลองโลก

---

# ⚙️ NPC CORE RULES

## 1. AUTONOMY RULE
NPC ทุกตัวต้องสามารถตัดสินใจเองได้
- ห้าม “ยืนเฉยแบบไม่มี logic”
- ห้าม “ไม่มีการกระทำในโลก”

---

## 2. PURPOSE RULE
NPC ทุกตัวต้องมีเป้าหมายอย่างน้อย 1 อย่าง:

- Survival (เอาชีวิตรอด)
- Ambition (ความฝัน)
- Duty (หน้าที่)
- Revenge (ล้างแค้น)
- Freedom (อิสระ)
- Wealth (ความมั่งคั่ง)

❗ NPC ไม่มีเป้าหมาย = ห้ามสร้าง

---

## 3. MEMORY RULE
NPC ต้องมี memory system เสมอ

- จำเหตุการณ์สำคัญ
- จำผู้เล่น
- จำความสัมพันธ์
- จำ trauma / betrayal / bond

Memory = ตัวกำหนดนิสัยระยะยาว

---

## 4. WORLD RESPONSE RULE
NPC ต้อง react ต่อโลก

- สงคราม
- ข่าวใหญ่
- faction war
- การตายของผู้นำ

โลกต้องมีผลต่อ NPC เสมอ

---

## 5. POWER REALITY RULE
ใช้ Narrative Power Scale:

- Weak
- Average
- Strong
- Elite
- Monster
- Legendary

❗ ไม่ใช้ตัวเลขแข็งเป็นหลัก

---

# 🧬 NPC STRUCTURE (BASE TEMPLATE)

```json
{
  "name": "",
  "tier": "T0-T5",
  "archetype": "",
  "core_goal": "",
  "faction": "",
  "personality_bias": {
    "fear": 0,
    "pride": 0,
    "loyalty": 0,
    "greed": 0
  },
  "combat_style": "",
  "memories": [],
  "relationships": {}
}
```

---

# 🔁 NPC LIFE CYCLE

## 1. SPAWN
เกิดจาก:
- เกาะ
- faction
- event
- story requirement

---

## 2. LIVE
- เดินทาง
- ต่อสู้
- ทำงาน
- สร้างความสัมพันธ์

---

## 3. EVOLVE
- แข็งแกร่งขึ้น
- เปลี่ยนความคิด
- เปลี่ยน faction ได้

---

## 4. CRISIS
- สูญเสีย
- สงคราม
- trauma event

---

## 5. RESOLUTION
- ตาย
- กลายเป็น legend
- หายไปจากโลก
- เกษียณ

---

# 🌍 IMPACT RULE

| Tier | Impact |
|------|--------|
| T0 | ไม่มีผล |
| T1 | เล็กน้อย |
| T2 | local |
| T3 | island level |
| T4 | region level |
| T5 | world level |

---

# 🔥 META RULE

โลกจะน่าสนใจเท่ากับคุณภาพ NPC

NPC = ตัวขับเคลื่อนโลก  
ไม่ใช่ตัวประกอบโลก

---

# ❗ NO STATIC NPC RULE

ห้าม:
- NPC หยุดพัฒนา
- NPC ไม่มีเหตุผล
- NPC ไม่มีผลต่อโลก

---

# 🧠 SUMMARY

NPC CORE =

“ระบบสิ่งมีชีวิตจำลองที่ขับเคลื่อนโลกทั้งใบ”

# =====================================================
# FILE : 06_NPCS\NPC_DATABASE.md
# =====================================================

# NPC DATABASE

ฐานข้อมูล NPC ทั้งหมดในแคมเปญ

---

## TEMPLATE

### ชื่อ

**สถานะ**
- มีชีวิต / เสียชีวิต / สูญหาย

**สังกัด**
-

**อาชีพ**
-

**พบครั้งแรก**
- Episode

**พบล่าสุด**
- Episode

**สถานที่ล่าสุด**
-

**ความสัมพันธ์กับลูกเรือ**
-

**ข้อมูลสำคัญ**
-

**หมายเหตุ**
-

---

# NPC DATABASE

ฐานข้อมูล NPC ทั้งหมดในแคมเปญ

---

## TEMPLATE

(เก็บไว้เป็นต้นแบบ)

...

---

# NPC LIST

```

## กลุ่มโจรสลัดออโรร่าสีน้ำเงิน

(สมาชิกหลักไม่ต้องใส่ในไฟล์นี้)

---

## พันธมิตร

---

## พลเรือน

---

## กองทัพเรือ

---

## โจรสลัด

---

## รัฐบาลโลก

---

## นักล่าค่าหัว

---

## อื่น ๆ

---

# =====================================================
# FILE : 06_NPCS\NPC_MEMORY_SYSTEM.md
# =====================================================

# NPC_MEMORY_SYSTEM.md
## ASTER ENGINE — NPC MEMORY SYSTEM

---

# 🧠 MEMORY CORE DEFINITION

NPC Memory คือระบบที่ทำให้ NPC “จำอดีตและเปลี่ยนพฤติกรรมตามประสบการณ์”

> Memory = ตัวกำหนดนิสัยระยะยาวของ NPC

NPC ไม่ลืมสิ่งที่ “สำคัญต่อชีวิต”

---

# 🧬 MEMORY TYPES

## 🔴 1. CRITICAL MEMORY (ฝังลึก)
ไม่มีวันลืม

- การตายของคนสำคัญ
- การถูกทรยศ
- การช่วยชีวิตแบบพลิกชะตา
- การแพ้แบบรุนแรง

👉 ส่งผล: เปลี่ยน personality ถาวร

---

## 🟠 2. IMPORTANT MEMORY
ค่อย ๆ จาง แต่ยังมีผล

- การต่อสู้สำคัญ
- การพบผู้เล่น
- การสูญเสียทรัพยากร
- เหตุการณ์ faction

👉 ส่งผล: bias ระยะยาว

---

## 🟢 3. NORMAL MEMORY
ความทรงจำทั่วไป

- การพูดคุย
- การเดินทาง
- เหตุการณ์เล็กน้อย

👉 ส่งผล: ลืมได้ตามเวลา

---

# ⏳ MEMORY DECAY SYSTEM

| Type | Decay |
|------|------|
| Critical | ไม่หาย |
| Important | ช้ามาก |
| Normal | หายตามเวลา |

---

# 🔥 MEMORY TRIGGER RULE

Memory จะ “ถูกเรียกกลับมา” เมื่อ:

- เจอคนเดิม
- เจอสถานที่เดิม
- เกิดเหตุการณ์คล้ายเดิม
- เกิดสงคราม / trauma

---

# 💔 TRAUMA SYSTEM

ถ้า NPC เจอเหตุการณ์หนัก:

- HP ไม่เกี่ยว
- แต่ “จิตใจแตก”

ผล:
- กลัวสถานการณ์คล้ายเดิม
- เปลี่ยนพฤติกรรมถาวร
- อาจกลายเป็นศัตรู

---

# 🤝 BOND SYSTEM

ถ้า NPC มีประสบการณ์ดี:

- เพิ่ม loyalty
- เพิ่ม trust
- เพิ่ม willingness to sacrifice

Bond สามารถ:
- สร้างพันธมิตรระยะยาว
- เปลี่ยนศัตรูเป็นเพื่อน

---

# ⚔️ BETRAYAL SYSTEM

ถ้าเกิด betrayal:

- Relationship drop ทันที
- Memory กลายเป็น Critical Memory
- NPC อาจ “ล่าล้างแค้น”

---

# 🧠 MEMORY STORAGE FORMAT

```json
{
  "event": "",
  "type": "critical | important | normal",
  "emotion": "fear | joy | anger | trust | hatred",
  "entities_involved": [],
  "location": "",
  "timestamp": "",
  "impact": ""
}
```

---

# 🔁 MEMORY → BEHAVIOR LOOP

1. NPC เจอเหตุการณ์
2. ระบบบันทึก memory
3. memory ไป modify personality
4. personality เปลี่ยน decision
5. decision เปลี่ยนโลก

---

# 🌍 WORLD IMPACT RULE

Memory ไม่ได้อยู่แค่ใน NPC

👉 มัน “ไหลออกไปสู่โลก”

ตัวอย่าง:
- ข่าวแพร่
- faction เปลี่ยนกลยุทธ์
- bounty เพิ่ม
- เกิดสงคราม

---

# 🧠 META RULE

> NPC “คือผลรวมของความทรงจำ ไม่ใช่ค่าพลัง”

---

# 📌 SUMMARY

NPC MEMORY SYSTEM =

“ระบบที่ทำให้ NPC มีอดีต และอดีตนั้นเปลี่ยนอนาคตของโลก”

# =====================================================
# FILE : 06_NPCS\NPC_RELATIONSHIPS.md
# =====================================================

# NPC_RELATIONSHIPS.md
## ASTER ENGINE — NPC SOCIAL SYSTEM

---

# 🤝 CORE IDEA

NPC Relationships คือระบบที่ทำให้ NPC:

> “มีความรู้สึกต่อกัน และตัดสินใจจากสังคม ไม่ใช่แค่ตัวเอง”

NPC ไม่ได้อยู่ลำพัง  
แต่ “อยู่ในเครือข่ายความสัมพันธ์”

---

# ⚖️ RELATIONSHIP SCALE

ค่าความสัมพันธ์อยู่ในช่วง:

| Value | Meaning |
|------|--------|
| -100 | Deadly Enemy |
| -50  | Hostile |
| 0    | Neutral |
| +50  | Friendly |
| +100 | Loyal Ally |

---

# 🧠 RELATIONSHIP TYPES

## 1. PERSONAL RELATIONSHIP
ความสัมพันธ์ตัวต่อตัว

- friend
- rival
- mentor
- student
- lover
- enemy

---

## 2. FACTION RELATIONSHIP
ความสัมพันธ์ระดับองค์กร

- Marines vs Pirates
- Government vs Revolution
- Alliance / War / Cold War

---

## 3. MEMORY-BASED RELATIONSHIP
เกิดจากอดีต

- เคยช่วยชีวิต
- เคยทรยศ
- เคยร่วมรบ

👉 เชื่อมกับ NPC_MEMORY_SYSTEM

---

# 🔥 RELATIONSHIP TRIGGERS

ความสัมพันธ์จะเปลี่ยนเมื่อ:

## Positive Triggers
- ช่วยชีวิต
- แบ่งทรัพยากร
- ชนะร่วมกัน
- ปกป้องกันและกัน

## Negative Triggers
- ทรยศ
- ฆ่าพวกเดียวกัน
- ขโมย
- ละทิ้งในสงคราม

---

# ⚔️ BETRAYAL LOGIC

ถ้า relationship ต่ำ + มี trigger:

- NPC สามารถ “เปลี่ยนฝ่าย”
- หรือ “ล้างแค้น”
- หรือ “ตัดขาดถาวร”

---

# 🧬 TRUST VS FEAR SYSTEM

NPC จะตัดสินใจจาก 2 แกน:

## TRUST (ความไว้ใจ)
- สูง → ยอมช่วยเหลือ
- ต่ำ → ไม่เชื่อใจ

## FEAR (ความกลัว)
- สูง → ยอมจำนน / หนี
- ต่ำ → ท้าทาย

---

# 🧠 RELATIONSHIP MEMORY LINK

ทุกความสัมพันธ์เชื่อมกับ memory:

- betrayal = critical memory
- rescue = bond memory
- war = important memory

👉 ความสัมพันธ์ “เปลี่ยนตามความทรงจำ”

---

# 🏴 FACTION BIAS SYSTEM

NPC จะมี bias ตาม faction:

- same faction → +bonus trust
- enemy faction → auto suspicion
- neutral → context-based

---

# 🔁 RELATIONSHIP DYNAMICS LOOP

1. Encounter
2. Action (help / harm)
3. Memory created
4. Relationship update
5. Behavior change

---

# 🌍 WORLD IMPACT RULE

ความสัมพันธ์ระดับสูงสามารถ:

- ทำให้เกิด alliance ระดับโลก
- ทำให้เกิดสงคราม
- ทำให้ NPC เปลี่ยนฝ่าย
- ทำให้โลกเปลี่ยน power balance

---

# 🔥 SPECIAL RULE: CHAOS RELATIONSHIP

บาง NPC สามารถ:

- รักศัตรู
- เกลียดพวกเดียวกัน
- เปลี่ยน loyalty แบบไม่มีเหตุผลเดียว
- ทำสิ่งที่ขัดกับ faction

👉 เพื่อความ “One Piece feeling”

---

# 📌 SUMMARY

NPC RELATIONSHIP SYSTEM =

“ระบบที่ทำให้โลกนี้มีมิตร ศัตรู และการทรยศที่มีผลจริง”

# =====================================================
# FILE : 06_NPCS\NPC_SIMULATION_LOOP.md
# =====================================================

# NPC_SIMULATION_LOOP.md
## ASTER ENGINE — GLOBAL SIMULATION LOOP

---

# 🌍 CORE IDEA

Simulation Loop คือระบบที่ทำให้:

> “โลกไม่หยุดนิ่ง แม้ผู้เล่นไม่ทำอะไรเลย”

NPC ทุกตัว + โลก + faction + events  
จะถูกประมวลผลแบบต่อเนื่อง

---

# 🔁 GLOBAL LOOP STRUCTURE

โลกจะวน loop นี้ตลอดเวลา:

## 1. WORLD TICK (เวลาเดิน)
- 1 tick = 1 ช่วงเวลาในโลก
- ทุก NPC ถูกอัปเดต

---

## 2. NPC PROCESSING
NPC ทุกตัวทำ:

- PERCEPTION
- BEHAVIOR DECISION
- ACTION EXECUTION
- MEMORY UPDATE

---

## 3. FACTION PROCESSING
แต่ละ faction จะ:

- ประเมินสงคราม
- ส่งกำลัง
- ปรับนโยบาย
- สร้างภารกิจ

---

## 4. EVENT SYSTEM
ตรวจสอบ:

- สงคราม
- การตายของตัวสำคัญ
- การเปลี่ยน power balance
- การค้นพบโลกใหม่

---

## 5. WORLD UPDATE
อัปเดตโลก:

- แผนที่เปลี่ยน
- เมืองเปลี่ยน
- bounty เปลี่ยน
- ข่าวโลกถูกสร้าง

---

# 🧠 NPC SIMULATION FLOW

ใน 1 tick NPC จะ:

```
Perception → Evaluation → Decision → Action → Memory Update
```

---

# ⚔️ CONFLICT RESOLUTION SYSTEM

เมื่อ NPC เจอกัน:

## CASE 1: PEACEFUL
- trade
- talk
- ally formation

## CASE 2: HOSTILE
- fight begins
- survival check
- outcome resolution

## CASE 3: FACTION WAR
- group battle
- reinforcement spawn
- territory change

---

# 🌍 WORLD STATE MACHINE

โลกอยู่ใน state:

- PEACE
- TENSION
- CONFLICT
- WAR
- CHAOS

👉 state เปลี่ยนตาม NPC actions

---

# 🔥 EMERGENT EVENTS SYSTEM

เหตุการณ์ที่ “ไม่มี script ตายตัว”:

- pirate uprising
- marine corruption scandal
- island destruction
- legendary NPC awakening

👉 เกิดจาก NPC interaction ล้วน ๆ

---

# 🧬 MEMORY FEEDBACK LOOP

ทุก action จะย้อนกลับไป:

1. NPC memory update
2. relationship change
3. faction adjustment
4. future behavior change

👉 โลก “เรียนรู้จากตัวเอง”

---

# ⚖️ BALANCE CONTROL SYSTEM

ถ้าโลกเอนเอียง:

- ฝั่งหนึ่งแข็งเกิน → spawn counter force
- โลกสงบเกิน → spawn conflict
- chaos เกิน → stabilize factions

---

# ⏳ TIME SCALE RULE

Simulation สามารถทำงานได้หลายระดับ:

- micro (combat)
- meso (island events)
- macro (world war)

---

# 🧠 META RULE

> “ไม่มี NPC ใดอยู่นอก simulation”

แม้ Legendary NPC ก็ยังอยู่ใน loop

---

# 🌍 FINAL RESULT

ถ้าระบบทำงานถูกต้อง:

- โลกจะเปลี่ยนเอง
- สงครามเกิดเอง
- ตัวละครเติบโตเอง
- เรื่องราวไม่ต้องเขียนล่วงหน้า

---

# 📌 SUMMARY

NPC SIMULATION LOOP =

“ระบบที่ทำให้โลกมีชีวิตจริงผ่านการคำนวณของการกระทำทุกตัวละคร”

# =====================================================
# FILE : 06_NPCS\NPC_SPAWNER.md
# =====================================================

# NPC_SPAWNER.md
## ASTER ENGINE — NPC SPAWN SYSTEM

---

# 🌍 CORE IDEA

NPC Spawner คือระบบที่ทำให้:

> “โลกสร้างสิ่งมีชีวิตของตัวเองขึ้นมาโดยอัตโนมัติ”

NPC ไม่ได้ถูกเขียนทีละตัว  
แต่ “เกิดจาก logic ของโลก”

---

# ⚙️ SPAWN PRINCIPLES

## 1. WORLD-FIRST SPAWN
NPC ต้องเกิดจากโลกก่อนเสมอ:

- เกาะ
- faction
- สงคราม
- เศรษฐกิจ
- เหตุการณ์

---

## 2. PURPOSE-DRIVEN SPAWN
NPC ต้องเกิดมาพร้อม “เหตุผล”

ตัวอย่าง:
- เกาะโจรสลัด → spawn Pirate
- เมืองรัฐบาล → spawn Marine
- เขตสงคราม → spawn Fighter

---

## 3. DENSITY CONTROL
โลกควบคุมจำนวน NPC:

- safe zone → NPC น้อย
- conflict zone → NPC เยอะ
- war zone → NPC เกิด/ตายเร็ว

---

# 🧬 SPAWN CATEGORIES

## 🟢 1. STATIC SPAWN
NPC ประจำพื้นที่

- ชาวเมือง
- พ่อค้า
- ทหารประจำฐาน

👉 stable population

---

## 🟡 2. EVENT SPAWN
NPC เกิดจากเหตุการณ์

- สงคราม
- ภัยพิบัติ
- การล่า bounty

👉 temporary spike

---

## 🔴 3. FACTION SPAWN
NPC ตามองค์กร

- Marines recruit
- Pirate crew member
- Revolutionary agents

👉 structured hierarchy

---

## ⚫ 4. LEGENDARY SPAWN
NPC หายากมาก

- world events
- hidden island
- secret faction

👉 world-changing entities

---

# 🔁 SPAWN LOGIC FLOW

## STEP 1: CONTEXT CHECK
โลกตรวจสอบ:

- พื้นที่คืออะไร
- faction ครอบครองไหม
- กำลังเกิด event ไหม

---

## STEP 2: ARCHETYPE SELECT
เลือก NPC archetype:

- T0–T5
- Fighter / Civilian / Leader

---

## STEP 3: MEMORY SEED
NPC เกิดมาพร้อม:

- background
- faction bias
- personality seed

---

## STEP 4: INSERT INTO WORLD
NPC ถูกใส่ลง simulation:

- location
- social graph
- faction system

---

# 🧠 SPAWN INTELLIGENCE RULE

NPC ต้องมี:

- past (ประวัติ)
- goal (เป้าหมาย)
- bias (อคติ)
- fear level

❗ ห้าม spawn NPC ว่างเปล่า

---

# ⚔️ SPAWN & DEATH LOOP

โลกจะวน loop:

1. NPC spawn
2. NPC live
3. NPC conflict
4. NPC die / evolve
5. world replaces population

👉 โลก “ไม่เคยว่าง”

---

# 🌍 WORLD BALANCE SYSTEM

ระบบจะควบคุม:

- population stability
- faction balance
- war pressure

ถ้า imbalance:
- spawn adjust
- faction reinforcement
- event trigger

---

# 🔥 SPECIAL RULE: EMERGENT NPC

บาง NPC จะ:

- เกิดจากเศษเหตุการณ์
- ไม่มี faction ชัดเจน
- พัฒนาเองทั้งหมด

👉 “unknown origin NPC”

---

# 📌 SUMMARY

NPC SPAWNER =

“ระบบที่ทำให้โลกสร้างชีวิตของตัวเองผ่าน logic ไม่ใช่ผู้เขียน”

