import { Product } from "./Product.js";

export class DigitalProduct extends Product {
    fileSize: number;

    /**
     *
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} fileSize
     */
    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    /**
     * @method formattedFileSize
     * @returns {string} - formats the fileSize in string with size(MB)
     */
    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }

    /**
     * @method getPriceWithTax
     * @overload
     * @returns {number} - returns the overriden tax 
     */
    override getPriceWithTax(): number {
        return this.price;
    }
}
