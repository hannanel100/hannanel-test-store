import { getAllProducts } from "@/lib/products";
import Image from "next/image";

const ProductsPage = async () => {
  const products = await getAllProducts();
  console.log(
    "🚀 ~ file: page.tsx:6 ~ ProductsPage ~ products:",
    products[0].images
  );
  return (
    <section>
      <div className="container mx-auto">
        <h1>Products Page</h1>
        {products.map((product: any) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Image
              src={product.images[0].file.url}
              alt="product"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductsPage;
