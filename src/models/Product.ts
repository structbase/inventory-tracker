export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `Product Name: ${this.name} (Product SKU: ${this.sku}) - Product Price: $${this.price}`;
    }

    getPriceWithTax(): number {
        return this.price;
    }
}
