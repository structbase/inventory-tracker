import { Product } from "./Product.js";
export declare class DigitalProduct extends Product {
    fileSize: number;
    /**
     *
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} fileSize
     */
    constructor(sku: string, name: string, price: number, fileSize: number);
    /**
     * @method formattedFileSize
     * @returns {string} - formats the fileSize in string with size(MB)
     */
    get formattedFileSize(): string;
    /**
     * @method getPriceWithTax
     * @overload
     * @returns {number} - returns the overriden tax
     */
    getPriceWithTax(): number;
}
//# sourceMappingURL=DigitalProduct.d.ts.map