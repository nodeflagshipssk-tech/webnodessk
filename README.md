# Nodeflagship ศรีสะเกษ — Portal Website

เว็บไซต์ศูนย์กลางข้อมูลและการบริหารจัดการโครงการ **หน่วยจัดการขับเคลื่อนประเด็นยุทธศาสตร์ (Node Flagship)** จังหวัดศรีสะเกษ
สนับสนุนโดย **สสส.** ปี 2568–2569

---

## โครงสร้างโปรเจค

```
/
├── index.html                    # หน้าแรกของ Portal
├── assets/
│   ├── css/
│   │   └── portal.css            # CSS ร่วมสำหรับทุกหน้า
│   └── logos/                    # ไฟล์โลโก้ต่างๆ
│       ├── logo-ddpm.png
│       ├── logo-sskru.png
│       ├── logo-thaihealth.png
│       ├── logo-policy-center.png
│       └── logo-section6.png     # (เพิ่มเมื่อมีไฟล์)
└── pages/
    ├── road-blackspot.html       # จุดเสี่ยงอุบัติเหตุ
    ├── road-accident.html        # สถิติอุบัติเหตุ
    ├── road-helmet.html          # สวมหมวกนิรภัย
    ├── road-capacity.html        # ศักยภาพ ศปถ.
    ├── road-dashboard.html       # Dashboard ถนน
    ├── alc-tambon.html           # ศักยภาพตำบล
    ├── alc-drinker.html          # ผู้ดื่มแอลกอฮอล์
    ├── alc-merit.html            # งานบุญปลอดเหล้า
    ├── alc-model.html            # บุคคลต้นแบบ
    ├── alc-dashboard.html        # Dashboard แอลกอฮอล์
    ├── project-main.html         # โครงการหน่วยจัดการ
    ├── project-sub.html          # โครงการย่อย 27 โครงการ
    ├── project-team.html         # คณะทำงาน
    ├── project-docs.html         # คู่มือและเอกสาร
    ├── project-dashboard.html    # Dashboard ภาพรวม
    ├── guide.html                # คู่มือการดำเนินโครงการ
    ├── report.html               # Status Report
    └── contact.html              # ติดต่อทีมงาน
```

## เทคโนโลยี

| ส่วน | เทคโนโลยี |
|------|-----------|
| HTML/CSS | Bootstrap 5.3 + Kanit font |
| ไอคอน | Bootstrap Icons 1.11 |
| กราฟ | Chart.js 4.4 |
| ข้อมูล | Google Apps Script (GAS) |
| Hosting | GitHub Pages (ฟรี) |

## วิธี Deploy บน GitHub Pages

### ขั้นตอนที่ 1 — สร้าง Repository บน GitHub

1. ไปที่ [github.com](https://github.com) และ Sign in
2. คลิก **New repository**
3. ตั้งชื่อ repo เช่น `nodeflagship-ssk` (หรือตามต้องการ)
4. เลือก **Public** (ต้องเป็น Public เพื่อใช้ GitHub Pages ฟรี)
5. คลิก **Create repository**

### ขั้นตอนที่ 2 — Upload ไฟล์ขึ้น GitHub

**วิธีที่ 1: ผ่านเว็บ GitHub (ง่ายที่สุด)**
1. เข้า repo ที่สร้าง
2. คลิก **uploading an existing file**
3. ลากทั้งโฟลเดอร์โปรเจคขึ้นไป
4. เขียน commit message แล้วคลิก **Commit changes**

**วิธีที่ 2: ผ่าน Git command line**
```bash
git init
git add .
git commit -m "Initial commit: Nodeflagship portal"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### ขั้นตอนที่ 3 — เปิดใช้งาน GitHub Pages

1. ใน repo ไปที่ **Settings** → **Pages**
2. ส่วน **Source** เลือก **Deploy from a branch**
3. เลือก branch **main** และ folder **/ (root)**
4. คลิก **Save**
5. รอประมาณ 1–3 นาที จะได้ URL รูปแบบ:
   `https://USERNAME.github.io/REPO-NAME/`

## การตั้งค่า GAS URL

หลังจาก Deploy GAS App แต่ละระบบแล้ว ให้ใส่ URL ในแต่ละหน้า:

| หน้า | ที่แก้ไข |
|------|---------|
| `road-blackspot.html` | แก้ `onclick="alert('กรุณาระบุ URL...')"` เป็น `href="GAS_URL"` |
| `road-accident.html` | เช่นเดียวกัน |
| `road-helmet.html` | เช่นเดียวกัน |
| `road-capacity.html` | เช่นเดียวกัน |
| `alc-tambon.html` | เช่นเดียวกัน |
| `alc-drinker.html` | เช่นเดียวกัน |
| `alc-merit.html` | เช่นเดียวกัน |
| `alc-model.html` | เช่นเดียวกัน |
| `road-dashboard.html` | วาง URL ในช่อง input แล้วกด บันทึก |
| `alc-dashboard.html` | วาง URL ในช่อง input แล้วกด บันทึก |

## Color Scheme

```css
--primary:  #154C6A  /* สีน้ำเงิน – การบริหารจัดการ */
--road:     #D4600A  /* สีส้ม – ความปลอดภัยทางถนน */
--alcohol:  #2E7D5E  /* สีเขียว – ลดการบริโภคแอลกอฮอล์ */
```

---

© 2568–2569 หน่วยจัดการขับเคลื่อนประเด็นยุทธศาสตร์ Node Flagship จ.ศรีสะเกษ
