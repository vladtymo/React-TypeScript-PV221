export interface ProductModel {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    discount: number;
    categoryName: string;
    inStock: boolean;
    description?: string;
}

export interface CreateProductModel {
    name: string;
    image: File;
    price: number;
    discount: number;
    categoryId: number;
    inStock: boolean;
    description?: string;
}

export interface EditProductModel {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    discount: number;
    categoryId: number;
    inStock: boolean;
    description?: string;
}