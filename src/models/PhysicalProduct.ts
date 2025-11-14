import { Product } from "./Product.js"; 

/**
 * @class
 * @description
 * @augments Product
 */

export class PhysicalProduct extends Product {
    weight: number;

    /**
     * @constructor
     * @param {string} sku 
     * @param {string} name
     * @param {number} price
     * @param {number} weight
     */
    constructor(sku: string, name: string, price: number, weight: number) {
        // Calls the constructor of the base class (Product)
        super(sku, name, price);
        this.weight = weight;
    }

    /**
     *
     * @method getPriceWithTax Override default getPriceWithTax
     * @returns  {number} 10% tax on only PhysicalProduct
     */
    override getPriceWithTax(): number {
        return this.price * 0.1 + this.price;
    }

    /**
     * @method formattedWeight
     * @returns {string} weight formatted with the "kg" unit
     */
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }
}
