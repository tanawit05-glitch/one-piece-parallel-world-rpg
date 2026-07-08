# PROJECT ASTER ENGINE

## Project Structure

โครงสร้างนี้กำหนดหน้าที่ของแต่ละโฟลเดอร์ภายในโปรเจกต์ เพื่อให้ข้อมูลเป็นระเบียบ ค้นหาได้ง่าย และรักษา Canon ของโลกให้มีความต่อเนื่อง

---

## 00_SYSTEM
**Engine Rules & Core Systems**

เอกสารหลักของระบบเกม

ตัวอย่าง
- ASTER_ENGINE.md
- SYSTEM.md
- RULES.md
- GAME_MASTER.md
- COMBAT.md
- MEDICAL.md
- NAVIGATION.md
- DICE.md

---

## 01_WORLD
**World Database**

ข้อมูลโลกทั้งหมด

- ทะเล
- เกาะ
- เมือง
- อาณาจักร
- ภูมิประเทศ
- ประวัติศาสตร์
- ภูมิอากาศ

---

## 02_PLAYER
**Player Systems**

ข้อมูลตัวละครผู้เล่น

- Character Profile
- Skills
- Haki
- Devil Fruit
- Inventory
- Reputation
- Progression

---

## 03_CREW
**Crew Systems**

ข้อมูลลูกเรือทั้งหมด

- Crew Members
- Crew Roles
- Crew Relationships
- Crew Progression

---

## 04_SHIPS
**Ship Systems**

ข้อมูลเรือทุกประเภท

- Pirate Ships
- Marine Ships
- Merchant Ships
- Ship Upgrades
- Ship Equipment

---

## 05_FACTIONS
**Organizations**

องค์กรทั้งหมดในโลก

- Marines
- Pirate Crews
- Revolutionary Groups
- Kingdoms
- Companies
- Guilds
- Criminal Organizations

---

## 06_NPCS
**NPC Systems**

ฐานข้อมูล NPC

- Named NPC
- Minor NPC
- Background
- Relationships
- Current Status

---

## 07_ITEMS
**Items Database**

ฐานข้อมูลไอเทม

- Weapons
- Medical Supplies
- Tools
- Food
- Treasure
- Equipment

---

## 08_DEVIL_FRUITS
**Devil Fruit Database**

ฐานข้อมูลผลปีศาจทั้งหมด

- Paramecia
- Zoan
- Ancient Zoan
- Mythical Zoan
- Logia

---

## 09_LOGS
**Campaign Logs**

บันทึกเหตุการณ์

- Session Logs
- Episode Logs
- World Events
- Battle Records

---

## 10_SAVE
**Save Files**

สถานะล่าสุดของโลก

ประกอบด้วย

- Player Status
- World Status
- Money
- Reputation
- Inventory
- Quests
- Relationships
- Active Events

---

## 11_SECRETS
**GM Hidden Information**

ข้อมูลลับของ Game Master

เช่น

- แผนขององค์กร
- เนื้อเรื่องในอนาคต
- NPC Secrets
- Hidden Locations
- Plot Hooks

ห้ามเปิดเผยแก่ผู้เล่นจนกว่าจะถึงเวลาที่เหมาะสม

---

## 12_CODEX
**World Encyclopedia**

สารานุกรมของโลก

ใช้เก็บข้อมูลอ้างอิงที่ไม่เปลี่ยนแปลงบ่อย เช่น

- Lore
- Culture
- Technology
- Timeline
- Terminology
- Historical Records

---

## Design Principles

- ทุกข้อมูลต้องมีที่อยู่ที่ชัดเจน
- ข้อมูลหนึ่งชุดควรมีเจ้าของเพียงโฟลเดอร์เดียว
- หลีกเลี่ยงข้อมูลซ้ำ
- Canon อยู่ใน Repository เป็นหลัก
- Save ใช้เก็บ "สถานะปัจจุบัน" ไม่ใช่ Canon
- Logs ใช้เก็บ "ประวัติ" ไม่ใช่สถานะปัจจุบัน
- Secrets แยกจากข้อมูลทั่วไปเสมอ