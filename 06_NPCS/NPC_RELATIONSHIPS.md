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