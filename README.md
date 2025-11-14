# 📦 Inventory Tracker — TypeScript & OOP

**Lab 1: TypeScript and Object-Oriented Programming**

This project is a prototype **inventory tracking system** built with **TypeScript**. It demonstrates core object-oriented programming concepts—**classes, inheritance, abstraction, encapsulation, and polymorphism**—in the context of managing different product types.

The system supports **Physical Products** and **Digital Products**, each with their own tax rules and properties. The project uses a **modular structure**, keeping models and utilities organized for scalability and maintainability.

---

## 📁 Project Structure

```
.
├── package-lock.json
├── package.json
├── src
│   ├── main.d.ts
│   ├── main.d.ts.map
│   ├── main.js
│   ├── main.js.map
│   ├── main.ts
│   ├── models
│   │   ├── DigitalProduct.d.ts
│   │   ├── DigitalProduct.d.ts.map
│   │   ├── DigitalProduct.js
│   │   ├── DigitalProduct.js.map
│   │   ├── DigitalProduct.ts
│   │   ├── PhysicalProduct.d.ts
│   │   ├── PhysicalProduct.d.ts.map
│   │   ├── PhysicalProduct.js
│   │   ├── PhysicalProduct.js.map
│   │   ├── PhysicalProduct.ts
│   │   ├── Product.d.ts
│   │   ├── Product.d.ts.map
│   │   ├── Product.js
│   │   ├── Product.js.map
│   │   └── Product.ts
│   └── utils
│       ├── taxCalcualtor.d.ts
│       ├── taxCalcualtor.d.ts.map
│       ├── taxCalcualtor.js
│       ├── taxCalcualtor.js.map
│       └── taxCalcualtor.ts
└── tsconfig.json
```

---

# 📖 Overview

Modern inventory systems need to handle multiple product types with different rules.
This lab introduces a basic **object-oriented inventory tracker** using **TypeScript**, where:

* **Physical products** include weight and a **10% tax**
* **Digital products** include file size and **0% tax**
* A shared base class handles common properties
* A utility module calculates tax using **polymorphism**
* Output is generated through a loop that displays details for each product

This prototype mimics how large inventory systems scale using clean OOP design.

---

# 🎯 Objectives

By the end of this lab, you will be able to:

* Use **TypeScript** with types, interfaces, and classes
* Implement **inheritance** and **method overriding**
* Apply **encapsulation** and use getter methods
* Use **modules** to organize a codebase
* Understand **polymorphism** via shared method signatures

---

# 🛠️ Features

### 🔹 **Product Base Class**

* SKU
* Name
* Price
* Methods:

  * `displayDetails()`
  * `getPriceWithTax()`

---

### 🔹 **PhysicalProduct (extends Product)**

* Adds:

  * `weight`
  * `formattedWeight` getter
* Overrides tax to **10%**

---

### 🔹 **DigitalProduct (extends Product)**

* Adds:

  * `fileSize`
  * `formattedFileSize` getter
* Overrides tax to **0%**

---

### 🔹 **Tax Calculator Utility**

* `calculateTax(product)`
* Accepts any class extending Product
* Uses polymorphism to get correct tax rule

---

# ▶️ Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Compile TypeScript

```bash
npx tsc
```

### 3. Run the compiled program

```bash
node dist/main.js
```

---

# 📌 Code Summary

### `main.ts`

* Creates inventory items
* Uses a loop to display:

  * product details
  * formatted file size or weight
  * final price with tax

### `Product.ts`

* Base class containing shared properties and default tax logic (6% placeholder in this version)

### `PhysicalProduct.ts`

* Overrides `getPriceWithTax()` with a 10% rate
* Provides formatted weight

### `DigitalProduct.ts`

* Overrides tax to **0%**
* Provides formatted file size

### `taxCalculator.ts`

* Exports `calculateTax()`
* Returns final price via the product’s overridden method

---

# 💡 Optional Enhancements (Challenge Tasks)

* Add a `DiscountableProduct` interface with `applyDiscount()`
* Implement product sorting (by name or price)
* Add bulk discounts for large physical orders
* Add a new product type (e.g., SubscriptionProduct)

---

# 🧠 Critical Thinking

Consider the following:

1. **How does TypeScript improve safety here?**

   * Enforces correct types, reduces bugs, ensures the right properties/methods exist.

2. **How does inheritance help?**

   * Physical and digital products share logic without duplicating code.

3. **Why use encapsulation?**

   * Protects internal values, makes maintenance easier, allows secure getter methods.

4. **How would you add a new product type?**

   * Extend the base Product class and override only the parts that change, thanks to polymorphism.

---
