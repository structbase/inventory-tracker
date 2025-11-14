import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    /**
     *
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} fileSize
     */
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    /**
     * @method formattedFileSize
     * @returns {string} - formats the fileSize in string with size(MB)
     */
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    /**
     * @method getPriceWithTax
     * @overload
     * @returns {number} - returns the overriden tax
     */
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=DigitalProduct.js.map