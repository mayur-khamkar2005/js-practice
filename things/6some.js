const users = [
  { name: "A", role: "user" },
  { name: "B", role: "admin" },
  { name: "C", role: "user" },
];
const out = users.some((cheak) => {
  return cheak.role === "admin";
})
console.log(out);




// some() ka matlab: kya koi ek bhi element condition satisfy karta hai?