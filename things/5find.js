const products = [
  { name: "iPhone", price: 80000, inStock: false },
  { name: "Laptop", price: 60000, inStock: false },
  { name: "Headphones", price: 2000, inStock: false },
  { name: "Keyboard", price: 1500, inStock: false },
];

const productpricefind = products.find((product) => product.inStock === true);
console.log(productpricefind);

if (!productpricefind) {
  console.log("Nothing Elese");
}









// ✅ find() kya karta hai?
// find() array me se pehla element return karta hai jo condition satisfy kare.

// mil gaya → element return
// nahi mila → undefined

// ✅ Syntax
// const ans = arr.find((item) => {
//   return condition;
// });