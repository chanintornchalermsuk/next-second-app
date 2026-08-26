// Basic Routing -> /products (/ ชั้นเดียว)
import { Itim, Srisakdi } from "next/font/google";
import localFont from "next/font/local";

const itim = Itim({    
  subsets: ["thai", "latin"],
  weight: ["400"],
});

const srisakdi = Srisakdi({    
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
});

const royyim = localFont({
  src: "./../fonts/RoyYim.ttf",
  weight: "400",
})

export default function Page() {
  return (
    <div>
      <h1>Products Page</h1>
      <hr />
      <h1>สวัสดี</h1>
      <h1 className={`${itim.className}`}>ลาก่อน ใช้ font Itim</h1>
      <h1 className={`${srisakdi.className}`}>บายบาย ใช้ font Srisakdi</h1>
      <hr />
      <h1 className={`${royyim.className}`}>มหาวิทยาลัยเอเชียอาคเนย์</h1>
    </div>
  );
}
