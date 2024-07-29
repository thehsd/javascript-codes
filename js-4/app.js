var users = [
  { username: "sahar", age: 21, gender: "female" },
  { username: "ali", age: 23, gender: "male" },
  { username: "noshin", age: 27, gender: "female" },
  { username: "leila", age: 45, gender: "female" },
  { username: "saeed", age: 32, gender: "male" },
  { username: "elmira", age: 27, gender: "female" },
  { username: "hosein", age: 16, gender: "male" },
  { username: "homa", age: 37, gender: "female" },
  { username: "naghi", age: 31, gender: "male" },
  { username: "mina", age: 30, gender: "female" },
  { username: "minoo", age: 24, gender: "female" },
  { username: "emad", age: 28, gender: "male" },
  { username: "mamad", age: 29, gender: "male" },
  { username: "shoko", age: 38, gender: "female" },
  { username: "manii", age: 33, gender: "male" },
  { username: "elena", age: 43, gender: "female" },
  { username: "elisa", age: 44, gender: "female" },
  { username: "shirin", age: 46, gender: "female" },
];

// var maleList = document.getElementById("male-list");
// var femaleList = document.getElementById("female-list");

// function showUserList() {
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].gender === "male") {
//       createMale(users[i]);
//     } else if (users[i].gender === "female") {
//       createFemale(users[i]);
//     }
//   }
// }

// function createMale(data) {
//   var male = document.createElement("li");
//   male.textContent = data.username;
//   maleList.appendChild(male);
// }
// function createFemale(data) {
//   var female = document.createElement("li");
//   female.textContent = data.username;
//   femaleList.appendChild(female);
// }

var list = ["a", "b", "c", "d", "e"];
// list[length] = 44;
// console.log(list);
// function addItem() {
//   var length = list.length;
//   list.push(length); => add item to end of list
//   list.unshift(0); => add item to first of list
//   list.pop(); => remove last item of list
//  list.shift(); => remove first item of list
//   console.log(list);
// }

// function printList() {
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }

//   list.forEach(function (item) {
//     console.log(item);
//   });
// callback function

// }
// printList();

// users.forEach(function (user, j) {
//   console.log(j);
//   console.log(user.username);
// });

// var numbers = [1, 2, 3, 4, 5, 6];
// var numbersWithTwo = [];

// numbers.forEach(function (number) {
//   var x = number * 2;
//   numbersWithTwo.push(x);
// });

// numbersWithTwo = numbers.map(function (number) {
//   return number * 2;
// });

// console.log("numbers : ", numbers);
// console.log("numbersWithTwo : ", numbersWithTwo);

// var numbers = [3, 1, 2, 3, 4, 5, 6, 3, 5, 67, 8, 89, 9, 0, 0];
// var findFive = null;
// findFive = numbers.find(function (number) {
//   console.log(number);
//   return number === 5;
// });
// console.log(findFive);

// var numbers = [3, 1, 2, 3, 4, 6, 77, 5, 6, 3, 5, 67, 8, 89, 9, 0, 0];
// var findFiveIndex = null;
// findFiveIndex = numbers.findIndex(function (number) {
//   return number === 5;
// });

// console.log("findFiveIndex", findFiveIndex);

var oneArr = [1, 2, 3, 4];
var towArr = [5, 6, 7, 8];

// [1,2,3,4,5,6,7,8]

// var ThreeArr = oneArr.concat(towArr);
// var ThreeArr = towArr.concat(oneArr);
// console.log(oneArr);
// console.log(towArr);
// console.log(ThreeArr);

var unSortArray = [0, 234, 888, 7, 88, 9];
