function getData() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Server down");
    }, 1000);
  });
}
async function serverdown() {
  try {
    const shutdown = await getData();
    console.log(shutdown);
  } catch (error) {
    console.log("Error:",error);
  }
}
serverdown();
function readData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("server on");
    }, 3000);
  });
}
async function serveron() {
  try {
    const shuton = await readData();
    console.log(shuton);
  } catch(error) {
    console.log("Error:", error);
  }
}
serveron();
// A try…catch block is used to handle errors in JavaScript so that the program doesn’t crash when something goes wrong.
// try–catch block ka use error handle karne ke liye hota hai.

// async + await + promice + try + catch + finally
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Server down");
//     }, 1000);
//   });
// }

// async function main() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   } finally {
//     console.log("Done");
//   }
// }

// main();


// Done ✅ aaj async/await + promises + try/catch.

// 1) Concept (simple)
// Promise = future me value aayegi (success ya fail)
// async function hamesha Promise return karta hai
// await = promise ka result aane tak wait
// try/catch = error handle