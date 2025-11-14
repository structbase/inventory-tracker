import { Product } from "../models/Product.js";
/**
 *
 * @param {Product} product
 * @returns {number}
 */
export function calculateTax(product) {
    return product.getPriceWithTax();
}
//# sourceMappingURL=taxCalcualtor.js.map