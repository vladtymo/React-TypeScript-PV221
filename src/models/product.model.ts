export interface ProductModel {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    discount: number;
    categoryName: string;
}

export interface CreateProductModel {
    name: string;
    image: File;
    price: number;
    discount: number;
    categoryId: number;
}