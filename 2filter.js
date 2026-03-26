const products = [
  { name: "iPhone", price: 80000, inStock: true },
  { name: "Laptop", price: 60000, inStock: false },
  { name: "Headphones", price: 2000, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true },
];

const out = products.filter((inStockCheak) => inStockCheak.inStock);
console.log(out);

// ✅ 2) filter() (select)

// Kaam: Condition true wale elements ko new array me rakhta hai.

// const arr = [10, 15, 20, 25];

// const out = arr.filter((item) => {
//   return item > 18;
// });

// // out = [20, 25]