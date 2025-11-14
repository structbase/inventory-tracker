import { Product } from "../models/Product.js";
/**
 * 
 * @param {Product} product 
 * @returns {number} 
 */
export function calculateTax(product: Product): number {

    return product.getPriceWithTax();
}
