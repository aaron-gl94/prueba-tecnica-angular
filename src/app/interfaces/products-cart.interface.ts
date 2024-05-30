import { ProductInterface } from "./product.interface";

export interface ProductsCartInterface {
    uuid: string,
    products: ProductInterface,
    quantity: number
}
