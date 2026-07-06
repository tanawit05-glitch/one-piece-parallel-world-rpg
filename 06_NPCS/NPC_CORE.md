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