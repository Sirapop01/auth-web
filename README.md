# Auth Web

โปรเจกต์นี้เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย [Next.js](https://nextjs.org/) และใช้ [Tailwind CSS](https://tailwindcss.com/) สำหรับการจัดการสไตล์

## คุณสมบัติ

- **การยืนยันตัวตน**: รองรับการลงทะเบียนและเข้าสู่ระบบของผู้ใช้
- **การจัดการผู้ใช้**: ฟีเจอร์สำหรับดูและแก้ไขข้อมูลผู้ใช้
- **การออกแบบที่ตอบสนอง**: ใช้ Tailwind CSS เพื่อให้แน่ใจว่าเว็บแอปพลิเคชันทำงานได้ดีบนทุกอุปกรณ์

## การติดตั้ง

1. **โคลนโปรเจกต์นี้**:

    ```bash
    git clone https://github.com/Sirapop01/auth-web.git
    ```

2. **ไปที่ไดเรกทอรีของโปรเจกต์**:

    ```bash
    cd auth-web
    ```

3. **ติดตั้งแพ็กเกจที่จำเป็น**:

    ```bash
    npm install
    ```

4. **สร้างไฟล์ `.env`** โดยคัดลอกจาก `.env.example` และกำหนดค่าตามความต้องการของคุณ

5. **เริ่มเซิร์ฟเวอร์พัฒนา**:

    ```bash
    npm run dev
    ```

    เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์เพื่อดูผลลัพธ์

## การใช้งาน

- **การลงทะเบียนผู้ใช้**: ไปที่หน้า `/register` เพื่อสร้างบัญชีใหม่
- **การเข้าสู่ระบบ**: ไปที่หน้า `/login` และป้อนข้อมูลรับรองเพื่อเข้าสู่ระบบ
- **การดูและแก้ไขโปรไฟล์**: หลังจากเข้าสู่ระบบแล้ว ไปที่หน้า `/profile` เพื่อดูและแก้ไขข้อมูลส่วนตัว

## โครงสร้างไดเรกทอรี

- `lib/`: โค้ดที่ใช้ร่วมกันและฟังก์ชันช่วยเหลือ
- `models/`: โมเดลข้อมูลและฟังก์ชันที่เกี่ยวข้อง
- `public/`: ไฟล์สาธารณะ เช่น รูปภาพและไอคอน
- `src/app/`: คอมโพเนนต์และเพจหลักของแอปพลิเคชัน

## ข้อมูลเพิ่มเติม

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับ Next.js และการใช้งาน สามารถดูได้ที่ [Next.js Documentation](https://nextjs.org/docs)

