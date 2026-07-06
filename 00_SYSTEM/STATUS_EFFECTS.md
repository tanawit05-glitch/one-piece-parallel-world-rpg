# ONE PIECE PARALLEL WORLD RPG

# STATUS EFFECTS

Document : STATUS_EFFECTS

Version : 1.0

Status : Active

Priority : High

Dependencies :
- COMBAT.md
- DICE.md
- MEDICAL.md

---

# PURPOSE

STATUS EFFECTS คือระบบผลกระทบที่เกิดขึ้นกับตัวละคร

ผลกระทบอาจเกิดจาก

- Combat
- Devil Fruit
- Haki
- Environment
- Disease
- Poison
- Exhaustion

Status ทุกชนิดส่งผลต่อการเล่าเรื่อง

ไม่ใช่เพียงค่าตัวเลข

---

# DESIGN PHILOSOPHY

Status

ไม่ใช่ Debuff

แต่คือ

"สภาพของร่างกายและจิตใจ"

ทุกสถานะ

ต้องมีสาเหตุ

มีผล

และมีวิธีหาย

---

# STATUS RULES

Status สามารถ

- เกิดพร้อมกันหลายชนิด

- หายเองเมื่อเวลาผ่านไป

- ถูกลบด้วยการรักษา

- รุนแรงขึ้นหากไม่ได้รับการดูแล

---

# BLEEDING

Cause

แผลเปิด

อาวุธมีคม

กระสุน

สัตว์กัด

Effect

เสียเลือดต่อเนื่อง

ร่างกายอ่อนแรง

หากปล่อยไว้

อาจหมดสติ

Treatment

- กดแผล
- พันแผล
- เย็บแผล

---

# BURN

Cause

ไฟ

แมกม่า

ระเบิด

น้ำมัน

Effect

ปวดรุนแรง

แผลไหม้

เสี่ยงติดเชื้อ

Treatment

- ลดอุณหภูมิ
- ทำแผล
- ยา

---

# FROZEN

Cause

น้ำแข็ง

อากาศหนาวจัด

Effect

เคลื่อนไหวช้า

กล้ามเนื้อแข็ง

หากรุนแรง

อาจหมดสติ

Treatment

ให้ความอบอุ่น

---

# POISON

Cause

พิษ

สัตว์มีพิษ

ผลปีศาจ

Effect

แตกต่างกันตามชนิดพิษ

Treatment

Antidote

หรือการรักษาเฉพาะทาง

---

# SHOCK

Cause

เสียเลือด

บาดเจ็บหนัก

ตกใจรุนแรง

Effect

เวียนหัว

สับสน

หมดสติ

Treatment

รักษาต้นเหตุ

พักผ่อน

---

# FRACTURE

Cause

แรงกระแทก

ตกจากที่สูง

อาวุธหนัก

Effect

ใช้อวัยวะส่วนนั้นได้ยาก

Treatment

ดาม

เข้าเฝือก

พักฟื้น

---

# DISLOCATION

Cause

ข้อต่อหลุด

Effect

เจ็บ

เคลื่อนไหวลำบาก

Treatment

จัดข้อ

พักฟื้น

---

# CONCUSSION

Cause

กระแทกศีรษะ

Effect

มึนงง

ความจำสั้น

เสียการทรงตัว

Treatment

พัก

สังเกตอาการ

---

# INTERNAL BLEEDING

Cause

กระแทกรุนแรง

ถูกแทง

Effect

อันตรายมาก

อาจไม่แสดงอาการทันที

Treatment

ผ่าตัด

---

# EXHAUSTION

Cause

ต่อสู้นาน

อดนอน

ใช้ฮาคิมากเกินไป

Effect

ช้าลง

สมาธิลดลง

Treatment

พัก

อาหาร

น้ำ

---

# FEAR

Cause

แรงกดดัน

ฮาคิราชันย์

สัตว์ประหลาด

Effect

ลังเล

เสียสมาธิ

อาจหนี

Treatment

กำลังใจ

สภาพจิตใจ

---

# STUN

Cause

ถูกโจมตีรุนแรง

ไฟฟ้า

แรงกระแทก

Effect

เสียจังหวะ

ไม่สามารถตอบสนองได้ชั่วคราว

Treatment

รอให้ฟื้น

---

# BLIND

Cause

ฝุ่น

เลือด

แสง

บาดเจ็บดวงตา

Effect

การมองเห็นลดลง

Treatment

ขึ้นกับสาเหตุ

---

# DEAF

Cause

ระเบิด

แรงสั่นสะเทือน

Effect

การได้ยินลดลง

Treatment

ขึ้นกับสาเหตุ

---

# DROWING

Cause

จมน้ำ

โดยเฉพาะผู้ใช้ผลปีศาจ

Effect

หมดแรง

ขาดอากาศ

เสียชีวิตได้

Treatment

ช่วยขึ้นจากน้ำ

CPR

---

# INFECTION

Cause

แผลสกปรก

Effect

ไข้

หนอง

อาการแย่ลงเรื่อย ๆ

Treatment

Antibiotic

ทำแผล

---

# TRAUMA

Cause

เหตุการณ์สะเทือนใจ

Effect

ฝันร้าย

หวาดกลัว

สูญเสียความมั่นใจ

Treatment

เวลา

ความสัมพันธ์

การสนับสนุนจากผู้อื่น

---

# STATUS INTERACTION

Status หลายชนิดสามารถส่งผลต่อกัน

ตัวอย่าง

Bleeding

+

Exhaustion

=

หมดสติเร็วขึ้น

---

Burn

+

Infection

=

รักษายากขึ้น

---

Fracture

+

Bleeding

=

เคลื่อนไหวแทบไม่ได้

---

Fear

+

Concussion

=

ตัดสินใจผิดพลาดง่ายขึ้น

---

# REMOVING STATUS

Status จะหายได้จาก

- เวลา
- การรักษา
- ยา
- การพักผ่อน
- ความสามารถพิเศษ
- ผลปีศาจบางชนิด

---

# GOLDEN RULE

Status

Exists

To

Tell

Stories

ไม่ใช่เพื่อเพิ่มความยาก

แต่เพื่อทำให้ทุกการต่อสู้มีผลตามมา

---

END OF STATUS EFFECTS