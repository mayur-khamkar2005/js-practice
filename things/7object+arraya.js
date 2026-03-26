const user = {
  id: 1,
  name: "Mayur",
  orders: [
    { orderId: 101, price: 200 },
    { orderId: 102, price: 500 }
  ]
};

const updateorderprice = user.orders.map((price) => {
  if (user.orderId === 102) {
    return {...orders, price: 700}
  }
  return orders;
})
console.log(updateorderprice);

// Immutability ka simple matlab: original array/object ko change (mutate) nahi karna, balki copy banake update karna.












// update without mutation 

// const user = {
//   id: 1,
//   name: "Mayur",
//   address: {
//     city: "Mumbai",
//     pincode: 400001
//   }
// };
// // new object (copy)
// const newUser = {
//   ...user,
//   address: {
//     ...user.address,
//     city: "Pune"
//   }
// };
// console.log(newUser.address.city); // Pune
// console.log(user.address.city);    // Mumbai
