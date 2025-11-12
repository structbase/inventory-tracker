import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * 0.1 + this.price;
    }
}
