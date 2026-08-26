// Nested Routing -> /products/keyboard (/ มากกว่า 1 ชั้น)

// import  Footer from "./../../../components/Footer";
import  Footer from "@/components/Footer";
import OpenSanook from "@/components/OpenSanook";

export default function Page() {
  return (
    <div>
      <h1>Keyboard Page</h1>
      <OpenSanook />
      <Footer />
    </div>
  );
}
