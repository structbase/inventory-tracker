import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalcualtor.js";
const product1 = new PhysicalProduct("P123", "Smartphone", 699, 0.5);
const product2 = new DigitalProduct("D456", "main.js", 29.99, 2);
let currentInventory = [product1, product2];
// Loop to display current inventory
for (const [index, product] of currentInventory.entries()) {
    const finalPrice = calculateTax(product);
    console.log(`\nProduct #${index + 1} `);
    console.log(product.displayDetails());
    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
        console.log(`Final Price (10% Tax): $${finalPrice.toFixed(2)}`);
    }
    else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
        console.log(`Final Price (0% Tax): $${finalPrice.toFixed(2)}`);
    }
}
//# sourceMappingURL=main.js.map