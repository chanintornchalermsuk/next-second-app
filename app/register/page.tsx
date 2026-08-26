// Basic Routing -> /register (/ ชั้นเดียว)
import Image from "next/image";
import coffee1 from "./../../assets/images/coffee1.png";
import coffee2 from "./../../assets/images/coffee2.png";

export default function Page() {
  return (
    <div>
      <h1 className="text-center mt-3 font-bold text-green-700">
        Register Page
      </h1>    
      {/* อ้างอิงรูปจากโฟล์เดอร์ public */}
      <Image
        src="/coffee.png"        alt="รูปกาแฟ"
        width={100}               height={100}
        className="border-2 border-red-500 rounded-2xl p-2 mx-auto mt-5"
      />
      {/* อ้างอิงรูปจากโฟล์เดอร์ assets/images */}
      <Image
        src={coffee1}        alt="รูปกาแฟ"
        width={100}           height={100}
        className="border-2 border-blue-500 rounded-2xl p-2 mt-2 ml-auto"
      />
      <Image
        src={coffee2}        alt="รูปกาแฟ"
        width={100}        height={100}
        className="border-2 border-green-500 rounded-2xl p-2 mt-2"
      />
      {/* อ้างอิงรูปจาก internet หรือจาก Network */}
      <Image
        src="https://images.pexels.com/photos/38213174/pexels-photo-38213174.png"        
        alt="รูปกาแฟ"
        width={100}        height={100}
        className="border-2 border-green-500 rounded-2xl p-2 mt-2"
      />
       <Image
        src="https://www.sau.ac.th/th/PIC_S/444.png"        
        alt="รูปกาแฟ"
        width={100}        height={100}
        className="border-2 border-green-500 rounded-2xl p-2 mt-2"
      />

    </div>
  );
}
