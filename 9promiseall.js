function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User"), 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts"), 2000);
  });
}

async function main() {
  try {
    const result = await Promise.all([getUser(), getPosts()]);
    console.log(result); // ["User", "Posts"]
  } catch (err) {
    console.log("Error:", err);
  }
}

main();

// ✅ English Definition

// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// Simple words me:
// It is a placeholder for a value that will be available in the future.

// ✅ Hinglish Definition

// Promise JavaScript ka ek object hota hai jo future me milne wale result ko represent karta hai — ya to result milega (resolve) ya error milega (reject).

// Matlab:
// Abhi value ready nahi hai, lekin future me aa jayegi.
