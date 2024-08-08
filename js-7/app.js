// operator ...
// copy =>deepCopy

// let a = 10;
// let b = a;
// b = 1212;
// a = 1222;
// console.log(a);
// console.log("b:", b); //primitive data type number string

// let str = "string";
// str[0] = "b";
// console.log(" str : ", str);

// non-primitive => call by reference

// const arr = [1, 2, 4, 5];
// arr[3] = "abs";
// console.log(" arr : ", arr);

//  shallow copy => deep copy
// const user2 = user;

// user.age = 31;

// console.log(" user2 : ", user2);
// const user = {
//   username: "hsddev",
//   age: 22,
// };
// const user2 = { ...user };
// user.age = 31;
// console.log(" user2 : ", user2);

// const arr = [1, 2, 4, 5];

// const copyArr = [...arr];
// arr[0] = "str";
// console.log(" arr : ", arr);
// console.log(" copyArr : ", copyArr);

// const user = {
//   username: "hsddev",
//   age: 31,
//   addresses: {
//     city: "isfahan",
//   },
// };

// const copyUser = { ...user };
// user.age = 90;
// user.addresses.city = "tehran";
// console.log(" user : ", user);
// console.log(" copyUser : ", copyUser);

// const arr = [1, 2, 3];
// [1,2,3,4,5,6]
// const arr2 = [4, 5, 6];
// const arr3 = [...arr, ...arr2];
// const arr3 = arr.concat(arr2);
// console.log(" arr3 : ", arr3);

// function test(p1, p2) {
//   console.log(p1);
//   console.log(p2);
// }

// test(...[1, 2]);
// function test(...params) {//spread
//   console.log(" params : ", params);
// }
// test(1, 2, 3, 5, 6);

// function checkStr(params) {
//   console.log(" params : ", [...params]);
// }

// checkStr("hello");

// const user = {
//   username: "hsddev",
//   age: 31,
// };
// const entr = Object.entries(user);
// console.log(" entr : ", entr);

// const arr = [
//   ["username", "hsddev"],
//   ["age", 31],
// ];

// Object.freeze(user);

// user.wallet = 122;
// console.log(user);

// const copyUser = Object.assign(user, {});
// user.age = 33;
// console.log(" copyUser : ", copyUser);
// const hasAge = Boolean(user.wallet);
// console.log(" hasAge : ", hasAge);

// console.log(Object.hasOwn(user, "wallet"));

// const handleForm = (e) => {
//   e.preventDefault();
//   const form = document.getElementById("form-login");
//   const formData = new FormData(form);

//   for (const element of formData.entries() ) {
//     console.log(element);
//   }

//   formData.entries().forEach((element) => {
//     console.log(" index : ", index);
//     console.log(" element : ", element);
//   });
// };

// const showLog = () => {
//   setTimeout(() => {
//     console.log("hi with delay");
//   }, 3000);
// };
// let number = 10;
// const startInterVal = () => {
//   setInterval(() => {
//     document.getElementById("paragraph").innerText = `<span>${number}</span>`;
//     number -= 1;
//   }, 1000);
//   console.log("start");
// };

// sync = همزمان synchronous
// fetchData
// 1000

// async = غیر همزمان asynchronous
// function fetchData(callBack) {
//   let data = [];
//   setTimeout(() => {
//     data = [{ username: "as" }];

//     callBack(data);
//   }, 1000);
// }
// let response = null;

// function handleData(params) {
//   response = params;
//   console.log(" response : ", response);
// }

// fetchData(handleData);

// 3 handle async

// callBack function

// function getUserId(cb) {
//   setTimeout(() => {
//     let id = 5;
//     cb(id, checkAdmin);
//   }, 1000);
// }

// function handleCallBack(id, cb) {
//   setTimeout(() => {
//     isAdmin = false;
//     if (id > 1000) {
//       isAdmin = true;
//     } else {
//       isAdmin = false;
//     }
//     cb(isAdmin, checkPermission);
//   }, 2000);
// }

// function checkAdmin(param, cb) {
//   console.log(param ? "is admin" : "is not admin");
//   cb();
// }

// function checkPermission() {
//   console.log("has a permission");
// }
// getUserId(handleCallBack);

// promise

function getUserId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = 133;
      resolve(id);
    }, 1000);
  });
}

function checkAdmin(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 1000) resolve({ isAdmin: true });
      else reject("is not admin");
    }, 2000);
  });
}

async function start() {
  try {
    const userId = getUserId();
    const response = await checkAdmin(userId);
    console.log(" response : ", response);
  } catch (err) {
    console.log(err);
  }
}
// getUserId().then((result) => {
//   checkAdmin(result)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
