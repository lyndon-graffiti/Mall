export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    variant: string[];
}

export interface ProductsActionResponse {
    code: number;
    body: string;
    data: Product[];
}