const nums = [5, 12, 3, 20, 9];

const out = nums.reduce((mx , cur) => {
    if (cur > mx) mx = cur;
    return mx;
});
console.log(out);

const array = [2,3,4,5,5,54,3,23];

const out2 = array.reduce((mx, cur) => {
    if (cur > mx) mx = cur;
    return mx;
})
console.log(out2);




// reduce = array ke saare elements ko combine karke 1 final value banana.
// Final value kuch bhi ho sakta hai:

// number (sum)
// string
// object (frequency)
// array (grouping)
// ✅ reduce() ka syntax
// const result = arr.reduce((acc, item) => {
//   return acc + item;
// }, initialValue);
