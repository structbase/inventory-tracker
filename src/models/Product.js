// Default basic product template class 
export class Product {
    sku;
    name;
    price;
    /**
     * @constructor
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     */
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    /**
     * @method displayDetails
     * @returns {string} -  formatted return string with product details
     */
    displayDetails() {
        return `Product Name: ${this.name} (Product SKU: ${this.sku}) - Product Price: $${this.price}`;
    }
    /**
     * @method getPriceWithTax
     * @returns {number} -  default tax rate of 6 percent
     */
    getPriceWithTax() {
        return this.price * 0.6 + this.price;
    }
}
//# sourceMappingURL=Product.js.map