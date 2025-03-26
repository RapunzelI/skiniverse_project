import Image from "next/image";

export default function WatermelonPage() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* ส่วนบน: ภาพและหัวข้อ */}
      <div className="w-2/3 flex items-start gap-6">
        <Image
          src="/banner_1.jpg" // ตรวจสอบให้แน่ใจว่า path ถูกต้อง
          alt="Watermelon"
          width={500}
          height={500}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold">หัวข้อเรื่อง</h2>
          <p className="text-gray-600">รายละเอียด</p>
        </div>
      </div>

      {/* ส่วนล่าง: รายละเอียด ขยายให้ใหญ่ขึ้น */}
      <div className="w-2/3 h-[70vh] bg-white flex flex-col p-6 mt-6 rounded-lg shadow-lg overflow-auto">
        <h3 className="text-2xl font-semibold mb-4">รายละเอียด</h3>
        <p className="text-gray-700">
          ข้อมูลจากฐานข้อมูลสามารถแสดงในกล่องนี้ โดยสามารถเพิ่มเนื้อหาที่ดึงมาจาก API หรือ Database ได้  
          หากข้อมูลยาวเกินไป กล่องนี้รองรับการเลื่อน (`overflow-auto`) เพื่อให้ใช้งานได้สะดวกขึ้น 
        </p>
        <p className="mt-4 text-gray-700">
          คุณสามารถเพิ่มตาราง, รายการ, หรือองค์ประกอบ UI อื่นๆ ได้ที่นี่
        </p>
      </div>
    </div>
  );
}
