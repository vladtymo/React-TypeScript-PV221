import axios from "axios";
import { CreateProductModel, EditProductModel, ProductModel } from "../models/product.model";
import { CategoryModel } from "../models/category.model";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "products"
});

// ----- create service object
export const productsService = {
    get: function () {
        return api.get<ProductModel[]>('all');
    },
    getById: function (id: number) {
        return api.get<ProductModel>(`${id}`);
    },
    getCategories: function () {
        return api.get<CategoryModel[]>('categories');
    },
    create: function (model: CreateProductModel) {

        const formData = new FormData();

        for (const key in model) {
            if (model[key as keyof CreateProductModel] == null) continue;

            const value = model[key as keyof CreateProductModel] as string | Blob;
            formData.append(key, value);
        }

        return api.post("", formData);
    },
    edit: function (model: EditProductModel) {
        const formData = new FormData();

        for (const key in model) {
            if (model[key as keyof EditProductModel] == null) continue;

            const value = model[key as keyof EditProductModel] as string | Blob;
            formData.append(key, value);
        }

        return api.put("", formData);
    },
    delete: function (id: number) {
        return api.delete(`${id}`);
    }
}
