// const array = [{ name: "iPhone", price: 80000 }];

// const out = array.map((item) => item);
// console.log(out);

const array2 = [{ name: "bag", price: 1200 }, { name: "brandedbag", price: 1000}];

const filterd = array2.filter((item) => item.price === 5000);
console.log(filterd);

if (!filterd) {
    console.log("item not found");
}
// const output = filterd.map((item) => item);
// console.log(output);






// map() array ke har element ko transform karke same length ka ek naya array return karta hai
// (original array change nahi hota).

// const n = 10;
// const s = n.toString(); // "10"


//  map method
// const nums = [5, 5, 5];

// const out = nums.map((item, index) => {
//   return `${index}:${item}`;
// });

// console.log(out); 
