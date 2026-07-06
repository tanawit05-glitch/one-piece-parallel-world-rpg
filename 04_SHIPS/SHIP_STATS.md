# SHIP_STATS.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Operational Ship Metrics)

---

# 📊 SHIP STAT SYSTEM

ระบบนี้ใช้กำหนด “ความสามารถเชิงปฏิบัติการ” ของเรือ  
ไม่ใช่ตัวเลขแข็ง แต่เป็น “ความสามารถเชิง narrative ที่วัดผลได้”

---

# ⚓ CORE STATS

## 1. Hull Integrity
ความแข็งแรงของโครงเรือ
- ส่งผลต่อการรับ damage
- ถ้าต่ำ → แตก / รั่ว / ใช้งานไม่ได้บางส่วน

---

## 2. Sail / Engine Efficiency
ความเร็วและพลังขับเคลื่อน
- ใช้ในการหนี / ไล่ล่า / เดินทาง

---

## 3. Maneuverability
ความคล่องตัวในการหลบการโจมตี
- เรือใหญ่ = ต่ำ
- เรือเล็ก = สูง

---

## 4. Cargo Capacity
ความสามารถในการบรรทุก
- คน / อาวุธ / ของ / ทรัพยากร

---

## 5. Combat Readiness
ความพร้อมในการรบ
- ไม่ใช่พลังยิง
- แต่คือ “ความพร้อมทั้งระบบ”

---

## 6. Crew Harmony Link
ความเชื่อมโยงกับ Crew
- สูง = เรือทำงานดีขึ้น
- ต่ำ = ระบบผิดพลาด / ช้า / ไม่เสถียร

---

## 7. Narrative Presence
“ชื่อเสียงของเรือในโลก”
- เรือที่ถูกเล่าขาน = มี Presence สูง
- ส่งผลต่อ NPC reaction

---

# 🔄 STAT DYNAMICS RULE

Stats ไม่คงที่

สามารถเปลี่ยนจาก:
- การเดินทาง
- การสู้รบ
- เหตุการณ์สำคัญ
- ความสัมพันธ์ Crew

---

# ⚠️ DAMAGE INTERPRETATION

การลด stat = ไม่ใช่ -1 แบบเกมทั่วไป

แต่คือ:
- ระบบเสีย
- ห้องพัง
- ความเชื่อมโยงลดลง
- story consequence

---

# END OF FILE