'use client'

import { Product } from "@/types/products"
import Image from "next/image"
import { useSortStore } from "@/store/sort"
import { Sort } from "@/constants/sort"
import { ALL_PRODUCTS_TITLE } from "@/constants"

interface Props {
    products: Product[]
}

const Products = (props: Props) => {
    const { products } = props
    const { sort } = useSortStore()

    let displayProducts: Product[]

    if (sort === Sort.LATEST) {
        displayProducts = products
    } else {
        displayProducts = [...products].sort((a, b) => {
            return sort === Sort.PRICE_LOW_HIGH ? a.price - b.price : b.price - a.price
        })
    }

    return (
        <div className="flex-1">
            <h2 className="text-4xl mb-8">{ALL_PRODUCTS_TITLE}</h2>
            <div className="grid grid-cols-3 gap-4">
                {displayProducts.map((product) => (
                    <div key={product.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer">
                        <Image src={product.image} alt={product.name} width={300} height={300} priority />
                        <div className="flex items-center justify-between mt-4">
                            <h3 className="flex-2xl text-slate-700">{product.name}</h3>
                            <p className="text-lg font-bold text-red-400">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
