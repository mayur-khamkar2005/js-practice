const Register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ sucsses: true });
    }, 1000)
  })
}
const Login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ sucsses: true });
    }, 1000)
  })
}
const Products = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({succses: true}, ["shose","ropes", "underware"]);
    }, 1000)
  })
}

const RegisterCheck = async () => {
  try {
    const CheckRegister = await Register();

    if (!CheckRegister.succses) {
      return new Error("First need to Register");
      return;
    }
    if (CheckRegister.succses) {
      console.log("Register Succsesfully");
      return true;
    }

  } catch (error) {
    return new Error(404, "Something went wrong");
  }
}
RegisterCheck();
const LoginCheck = async () => {
  try {
    const CheckLogin = await Login();

    if(!RegisterCheck) {
      return new Error( 404,"Need to register first and then you have to login hear");
      return;
    }
    if(!CheckLogin.succses) {
      return new Error(404, "you dont have the inuff credentials");
    }
    if (CheckLogin.succses) {
      console.log("login successfully");
      return true;
    }
  } catch (error) {
    return new Error(400, "something went wrong");
  }
}
LoginCheck();

const ProductFech = async () => {
  try {
    const Fechproducts = await Products();

    if (!LoginCheck) {
      return new Error(500, "need to login first");
      return;
    }
    if (!Fechproducts || Fechproducts.length() === 0) {
      return new Error(404, "something want wrong");
      return;
    }
    if(Fechproducts) {
      console.log("hear is your products");
      return true;
    }
  } catch (error) {
     return new Error(404, "hear is the some things to be a good")
     return;
  }
}
ProductFech();

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