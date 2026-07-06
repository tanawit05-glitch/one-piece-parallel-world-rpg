# ONE PIECE PARALLEL WORLD RPG

# CURRENT NPCS

Document : CURRENT_NPCS

Version : 1.0

Status : Active

Priority : High

Dependencies :
- SAVE_RULES.md
- NPCS/
- FACTIONS/

---

# PURPOSE

CURRENT NPCS

คือสถานะล่าสุดของ NPC สำคัญ

AI ใช้เอกสารนี้

เพื่อตรวจสอบ

ตำแหน่ง

สถานะ

ความสัมพันธ์

และการเคลื่อนไหว

ของ NPC ก่อนเริ่ม Episode

---

# DESIGN PRINCIPLE

บันทึก

เฉพาะ NPC

ที่ยังมีผลต่อโลก

หรือ

เกี่ยวข้องกับผู้เล่น

NPC ทั่วไป

ไม่จำเป็นต้องบันทึก

---

# WHEN TO UPDATE

อัปเดต

หลังจบทุก Episode

หรือ

เมื่อ NPC

มีการเปลี่ยนแปลง

---

# NPC STATUS

ใช้สถานะ

Alive

Missing

Captured

Retired

Traveling

Recovering

On Mission

Hidden

Unknown

Dead

---

# WHAT TO TRACK

ทุก NPC

ควรมี

Name

Alias

Occupation

Faction

Current Location

Current Status

Current Objective

Relationship with Player

Relationship with Crew

Current Health

Current Influence

Current Notes

---

# RELATIONSHIP

Friendly

Neutral

Unknown

Respect

Distrust

Hostile

Enemy

Ally

Family

---

# HEALTH STATUS

Healthy

Light Injury

Moderate Injury

Critical

Recovering

Disabled

Dead

---

# IMPORTANCE

Minor

Supporting

Major

Key Character

World Figure

---

# TEMPLATE

==================================================

# NPC

## Basic Information

Name :

Alias :

Occupation :

Faction :

Importance :

---

## Current Location

-

---

## Current Status

-

---

## Current Objective

-

---

## Health

-

---

## Relationship with Player

-

---

## Relationship with Crew

-

---

## Influence

-

---

## Current Activity

-

---

## Notes

-

==================================================

---

# IMPORTANT RULES

NPC

สามารถ

เปลี่ยนเป้าหมาย

เปลี่ยนองค์กร

เปลี่ยนความสัมพันธ์

เลื่อนตำแหน่ง

ได้รับผลปีศาจ

เรียนรู้ฮาคิ

หรือเสียชีวิต

ได้ตลอดเวลา

---

# AI RESPONSIBILITIES

AI ต้อง

ตรวจสอบ

สถานะล่าสุด

ของ NPC

ก่อนเริ่ม Episode

หาก NPC

เสียชีวิต

หรือหายตัว

ต้องอัปเดต

CURRENT_WORLD

และ

CURRENT_FACTIONS

หากเกี่ยวข้อง

---

# GOLDEN RULE

NPC

คือบุคคล

ที่มีชีวิตของตนเอง

ไม่ใช่

เครื่องมือ

ของผู้เล่น