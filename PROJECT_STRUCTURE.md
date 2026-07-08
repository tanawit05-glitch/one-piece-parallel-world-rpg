# ONE PIECE PARALLEL WORLD RPG
# ASTER ENGINE
# PROJECT STRUCTURE

Document Version : 2.1

Status : Production

Authority : Repository Architecture

---

# 1. PURPOSE

PROJECT_STRUCTURE.md

กำหนดโครงสร้าง Repository

ของ

PROJECT ASTER ENGINE

หน้าที่คือ

- กำหนดตำแหน่งจัดเก็บข้อมูล
- กำหนด Responsibility ของแต่ละ Folder
- ป้องกันข้อมูลซ้ำ
- ป้องกันข้อมูลผิดหมวด
- ทำให้ AI เข้าใจโครงสร้าง Repository ตรงกัน

---

# 2. REPOSITORY PRINCIPLE

Repository ใช้หลัก

Single Source of Truth

---

ข้อมูลแต่ละประเภท

ต้องมีแหล่งข้อมูลหลักเพียงแห่งเดียว

---

ห้าม:

- เก็บข้อมูลเดียวกันหลายที่
- สร้าง Database ซ้ำ
- เก็บข้อมูลผิดหมวด

---

หากต้องอ้างอิงข้อมูล

ให้ใช้ Reference

ไม่ใช่ Copy ข้อมูล

---

# 3. ROOT STRUCTURE

โครงสร้างหลัก:
