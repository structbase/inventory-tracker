import { Product } from "./models/Product.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { calculateTax } from "./utils/taxCalcualtor.js";

const product1 = new PhysicalProduct("P123", "Smartphone", 699, 0.5);
console.log(product1);
