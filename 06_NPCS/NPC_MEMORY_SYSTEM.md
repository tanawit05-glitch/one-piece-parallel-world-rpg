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