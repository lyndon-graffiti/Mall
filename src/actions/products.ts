import { db } from "@/lib/db";
import { Product, ProductsActionResponse } from "@/types/products";

export const productisAction = async (): Promise<ProductsActionResponse> => {
    const products = await db('SELECT * FROM products') as Product[]
    return {
        code: 200,
        body: 'success',
        data: products
    }
}

export const getProductByIdAction = async (id: string): Promise<Product> => {
    const product = await db(`SELECT * FROM products WHERE id = ${id}`) as unknown as Product
    return product
}