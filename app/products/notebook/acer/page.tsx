// Nested Routing -> /products/notebook/acer (/ มากกว่า 1 ชั้น)
import  Footer from "@/components/Footer";
import OpenSanook from "@/components/OpenSanook";

export default function Page() {
  return (
    <div>
      <h1>Notebook Acer Page</h1>
      <OpenSanook />
      <Footer />
    </div>
  );
}
