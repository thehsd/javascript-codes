// define function

// 3 type
// functionName();

// 1 = > declaration
function functionName() {
  console.log("declaration function");
}

// 2 = > expression

var expFunction = function () {
  console.log("expression function");
};
// expFunction();

// 3 = > arrow function

var arrowFn = (params) => params + 2;

// console.log(arrowFn(8));

// define Variable

//  var
// console.log(username);

// var username = 'x'

// if(true){
//     console.log(username);
//    var username = 'hsddev'
// console.log('in if', username);

// }

// console.log(username);

// let

// console.log(fName);

// if(true){
//     let fName = 'alireza'
//     fName = 'mamad'
//     console.log(fName);

// }
//     console.log(fName);

//  const

// if (true) {
//   const p = 3.14;

//   console.log(p);
//   if (true) {
//     p = 3.15;
//     console.log(p);
//   }
// }

// const users = [
//   { username: "x", wallet: 30 },
//   { username: "d", wallet: 45 },
//   { username: "dd", wallet: 2 },
//   { username: "cc", wallet: 23 },
// ];
// users.push({ username: "asdasdcc", wallet: 253 });
// console.log(" users : ", users);
// const totalWallet = 0;
// users.forEach((user) => (totalWallet += user.wallet));
// console.log(totalWallet);

// destructuring rename
// const firstName = "hahahaha";
// const user = {
//   firstName: "alireza",
//   lastName: "hosseini",
//   id: 12,
//   age: 31,
//   address: {
//     city: "isfahan",
//   },
// };
// const { firstName: fName, lastName } = user;
// console.log(" fName : ", fName);
// console.log(" lastName : ", lastName);
// console.log(" firstName : ", firstName);

// const printUserId = ({ id }) => console.log(id);
// printUserId(user);

const hasMoney = true;
const username = "hsddev";
// if (hasMoney ===true) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ternary if

// hasMoney === true ? console.log("yes") : console.log("no");

// if (username === "hsddev") {
//   console.log("salam");
// } else {
//   console.log("ish");
// }

username === "hsddev"
  ? console.log("yes")
  : username === "mrz"
  ? console.log("maybe")
  : console.log("never");
