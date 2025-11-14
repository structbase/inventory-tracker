import { Product } from "./Product.js";
/**
 * @class
 * @description
 * @augments Product
 */
export declare class PhysicalProduct extends Product {
    weight: number;
    /**
     * @constructor
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} weight
     */
    constructor(sku: string, name: string, price: number, weight: number);
    /**
     *
     * @method getPriceWithTax Override default getPriceWithTax
     * @returns  {number} 10% tax on only PhysicalProduct
     */
    getPriceWithTax(): number;
    /**
     * @method formattedWeight
     * @returns {string} weight formatted with the "kg" unit
     */
    get formattedWeight(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map