## ⚠️ ก่อนส่งฝึกงาน — สิ่งที่ต้องแก้ให้ครบ

เปิด `app.js` แล้วหา comment ที่ขึ้นต้นด้วย `// TODO` ทั้งหมด (ใช้ Ctrl+F หา "TODO") แล้วแก้ทีละจุด:

- [ ] `profile.title`, `profile.bio`, `profile.experience`, `profile.location`, `profile.about` — แก้เป็นข้อมูลจริงของคุณ
- [ ] `profile.linkedin` — ตรวจสอบว่าเป็นลิงก์ LinkedIn จริง (ถ้าไม่มี ลบส่วน LinkedIn ใน `index.html` ออก)
- [ ] `profile.resumeUrl` — ใส่ลิงก์ไฟล์ Resume/CV จริง
- [ ] `projects` array — ตอนนี้มีแค่โครงตัวอย่าง 1 อัน ให้เพิ่มโปรเจกต์ที่ deploy แล้วจริงของคุณ ใส่ทั้ง `demo` (ลิงก์เว็บที่ deploy) และ `github` (ลิงก์ repo)
- [ ] `socials` — ตรวจสอบ url ของ GitHub/LinkedIn/Twitter ให้ถูกต้อง หรือลบ social ที่ไม่มี
- [ ] `FORMSPREE_ENDPOINT` — สมัคร [formspree.io](https://formspree.io) ฟรี สร้างฟอร์มใหม่ แล้วเอา endpoint (เช่น `https://formspree.io/f/xabcdwxyz`) มาแทน `YOUR_FORM_ID`
- [ ] `stats`, `skills` — ปรับตัวเลข/ทักษะให้ตรงกับความสามารถจริงของคุณ

---

# Modern Responsive Portfolio Website

เว็บไซต์ Portfolio สมัยใหม่ สร้างด้วย **HTML, CSS, JavaScript และ Vue.js 3**

## Features

- Responsive Design — รองรับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- Dark / Light Mode — สลับธีมได้ พร้อมจำค่าใน localStorage
- Smooth Scroll Navigation — เมนูติดด้านบน พร้อม scroll progress bar
- Typing Animation — เอฟเฟกต์พิมพ์ข้อความในหน้า Hero
- Project Filter — กรองผลงานตามหมวดหมู่ด้วย Vue.js
- Contact Form — ฟอร์มติดต่อพร้อม validation
- Scroll Animations — แอนิเมชัน fade-in เมื่อ scroll ถึง section
- Modern UI — Gradient, Glass effect, Card design

## โครงสร้างไฟล์

```
├── index.html    # หน้าเว็บหลัก (Vue template)
├── styles.css    # CSS ทั้งหมด (Responsive + Dark/Light theme)
├── app.js        # Vue.js 3 Composition API
└── README.md
```

## วิธีใช้งาน

### วิธีที่ 1: เปิดไฟล์โดยตรง
ดับเบิลคลิก `index.html` ในเบราว์เซอร์

### วิธีที่ 2: ใช้ Live Server (แนะนำ)
```bash
# ติดตั้ง live-server (ถ้ายังไม่มี)
npm install -g live-server

# รัน
live-server
```

### วิธีที่ 3: ใช้ Python
```bash
python -m http.server 8000
# เปิด http://localhost:8000
```

## ปรับแต่งข้อมูลส่วนตัว

แก้ไขข้อมูลในไฟล์ `app.js`:

| ตัวแปร | รายละเอียด |
|--------|-----------|
| `profile` | ชื่อ, อีเมล, ที่อยู่, bio |
| `skills` | ทักษะและระดับความชำนาญ |
| `projects` | ผลงาน, ลิงก์ demo/github |
| `socials` | ลิงก์ Social Media |
| `stats` | ตัวเลขสถิติในหน้า Hero |

## เทคโนโลยี

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Vue.js 3 (CDN — Composition API)
- Google Fonts (Inter, JetBrains Mono)
