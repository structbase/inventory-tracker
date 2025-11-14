import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

const product1 = new PhysicalProduct("P123", "Smartphone", 699, 0.5);
const product2 = new DigitalProduct("P123", "main.js", 699, 2);
console.log(product1);
console.log(product1.displayDetails());
console.log(product2);
console.log(product2.displayDetails());

