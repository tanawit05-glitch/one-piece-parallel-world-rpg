# SHIP_BLUEPRINT.md
PROJECT ASTER ENGINE  
Module: 04_SHIPS  
Version: 0.1 (Ship Generation System)

---

# ⚓ SHIP BLUEPRINT SYSTEM

ระบบนี้คือ “โรงงานสร้างเรือ” ของโลกทั้งใบ

แทนที่จะออกแบบเรือทีละลำ  
ระบบนี้จะสร้างเรือจาก “โครงสร้างแม่แบบ (Blueprint)”

---

# 🧭 CORE PRINCIPLE

- One system generates infinite ships
- Every ship must have narrative logic
- No random ship without cause
- Blueprint defines identity, not stats only

---

# 🧬 SHIP BLUEPRINT STRUCTURE

ทุกเรือในโลกจะถูกสร้างจาก Blueprint ดังนี้:

## Required Components:

- Ship Class
- Purpose
- Origin Type
- Builder Archetype
- Crew Compatibility Profile

---

# 🚢 SHIP CLASS TYPES

## 1. Small Vessel
- เรือขนาดเล็ก
- เร็ว / คล่องตัวสูง
- Crew ต่ำ

## 2. Standard Ship
- สมดุลทุกด้าน
- ใช้โดย Pirate Crew ส่วนใหญ่

## 3. Warship Class
- เรือรบขนาดใหญ่
- ใช้โดย Marine / Faction

## 4. Capital Ship
- เรือธง / เรือแม่ทัพ
- มีระบบหลาย Deck

## 5. Mythic Vessel
- เรือระดับตำนาน
- มี “Will” และ Memory สูงผิดปกติ

---

# 🎯 SHIP PURPOSE TYPES

- Exploration (สำรวจ)
- Combat (รบ)
- Transport (ขนส่ง)
- Raid (ปล้น / บุก)
- Command (เรือบัญชาการ)
- Mystery (ไม่ทราบจุดประสงค์)

---

# 🏗️ BUILDER ARCHETYPE

เรือถูกสร้างโดย “ตัวตนของคนสร้าง”

## Types:

- Master Shipwright (ช่างระดับตำนาน)
- Naval Engineer (ระบบทหาร)
- Pirate Improviser (สร้างแบบดิบ)
- Ancient Civilization (โบราณ)
- Unknown Origin (ไม่มีผู้สร้างชัดเจน)

---

# 🧠 CREW COMPATIBILITY PROFILE

เรือแต่ละลำ “เหมาะกับ Crew แบบไหน”

## Profiles:

- Aggressive Crew Fit
- Disciplined Crew Fit
- Chaotic Crew Fit
- Explorer Crew Fit
- Mixed Harmony Fit

👉 ถ้า mismatch → เกิด Conflict บนเรือ

---

# 📊 BLUEPRINT CORE OUTPUT

เมื่อสร้างเรือ ระบบจะ output:

## SHIP INSTANCE

- Name (generated or assigned)
- Class
- Core Stats
- Personality Seed
- Starting Memory Fragment

---

# 🌊 SHIP GENERATION RULE

ทุกการสร้างเรือต้องมี:

## 1. Narrative Reason
- ทำไมเรือลำนี้ถึงเกิดขึ้น

## 2. World Context
- อยู่ faction ไหน / ยุคไหน

## 3. Purpose Anchor
- ใช้ทำอะไรในโลกนี้

---

# ⚠️ RANDOMIZATION RULE

ห้าม random แบบไม่มีเหตุผล

ต้องใช้:

- World state
- Faction needs
- Story necessity
- Crew compatibility

---

# 🔥 SPECIAL BLUEPRINT MODIFIERS

## 1. Battle-Hardened Modifier
- ผ่านสงครามมาแล้ว
- มี Damage Memory

## 2. Experimental Modifier
- เทคโนโลยีแปลก
- พฤติกรรมไม่คงที่

## 3. Cursed Vessel Modifier
- มี Trauma Memory
- ส่งผลต่อ Crew Morale

## 4. Legendary Blueprint
- เชื่อมกับเหตุการณ์ในอดีตของโลก

---

# 🧩 LINK TO OTHER SYSTEMS

- SHIP_CORE → defines life rules
- SHIP_MEMORY → stores experience
- SHIP_EVOLUTION → growth system
- WORLD → decides ship spawn logic

---

# 🧠 SIMULATION RULE

Game Master must:

- Never create ship without blueprint logic
- Always tie ship to world narrative
- Ensure ship affects story, not just travel

---

# END OF FILE