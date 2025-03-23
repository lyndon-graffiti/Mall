import { productisAction } from "@/actions/products";
import Products from "@/components/products";
import Sort from "@/components/sort";

export default async function Home() {
  const { data: products } = await productisAction()
  return (
    <div className="container flex py-6">
      <Sort />
      <Products products={products} />
    </div>
  )
}
