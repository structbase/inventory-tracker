export declare class Product {
    sku: string;
    name: string;
    price: number;
    /**
     * @constructor
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     */
    constructor(sku: string, name: string, price: number);
    /**
     * @method displayDetails
     * @returns {string} -  formatted return string with product details
     */
    displayDetails(): string;
    /**
     * @method getPriceWithTax
     * @returns {number} -  default tax rate of 6 percent
     */
    getPriceWithTax(): number;
}
//# sourceMappingURL=Product.d.ts.map