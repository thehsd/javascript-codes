// // var numbers = [11, 8, 9, 33, 231231, 1, 2, 3, -43, 15, 46, 7, 8, 1, 9, 0];

// // var small = null;
// // function findSmall(arr) {
// //   small = arr[0];
// //   arr.forEach((item) => {
// //     if (item < small) {
// //       small = item;
// //     }
// //   });
// //   return small;
// // }
// // function findBig(arr) {
// //   big = arr[0];
// //   arr.forEach((item) => {
// //     if (item > big) {
// //       big = item;
// //     }
// //   });
// //   return big;
// // }

// // var small = findSmall(numbers);
// // var big = findBig(numbers);

// // console.log("small: ", small);
// // console.log("big: ", big);

// // var numbers = [11, 8, 9, 33, 231231, 1, 2, 3, -43, 15, 46, 7, 8, 1, 9, 0];
// // numbersWithTwo = [];
// // numbers.forEach((element) => {
// //   numbersWithTwo.push(element + 2);
// // });

// // var numbersWithTwo = numbers.map(function (element) {
// //   return element + 2;
// // });

// // function filterProducts() {
// //   var filteredProducts = products.filter(function (product) {
// //     return product.price < 10;
// //   });

// //   console.log(filteredProducts);
// // }

// // function calcBasket() {
// //   var total = 0;
// //   products.forEach(function (item) {
// //     total += item.price;
// //   });
// //   console.log(total);
// // }

// // function calcBasket() {
// //   var sumPrice = products.reduce(function (acc, current) {
// //     return acc + current.price;
// //   }, 0);
// //   console.log(" sumPrice : ", sumPrice);
// // }

// // var unsortedList = [1, 234, 547, 7, 89, 0];
// // var products = [
// //   { name: "product 1", price: 10 },
// //   { name: "product 2", price: 7 },
// //   { name: "product 3", price: 15 },
// //   { name: "product 4", price: 5 },
// //   { name: "product 9", price: 88 },
// // ];

// // console.log(
// //   products.sort(function (a, b) {
// //     return b.price - a.price;
// //   })
// // );

// var letters = ["a", "b", "c", "d", "e", "f"];

// // var copyArray = numbers.slice(0, 3);
// // console.log(" numbers : ", numbers);
// // console.log(" copyArray : ", copyArray);

// // letters.splice(0, 2, "10", "20");
// // console.log(" letters : ", letters);

// // console.log(letters.toString());

// var product = {
//   name: "x-box",
//   price: 2000,
//   batteryCapacity: 1800,
//   hasCamera: false,
//   imgSrc:
//     "https://dkstatics-public.digikala.com/digikala-products/5189592.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
//   isUsed: false,
// };

// function createPTag() {
//   var pTag = document.createElement("p");
//   return pTag;
// }

// function showProduct() {
//   var listOfKeysObject = Object.keys(product);
//   listOfKeysObject.forEach(function (element) {
//     var tag = createPTag();

//     tag.innerText = element + ": " + product[element];
//     document.getElementById("product").appendChild(tag);
//   });
// }

// // function showProduct() {
// //   // For name
// //   var tagForName = createPTag();
// //   tagForName.innerText = `name: ${product.name}`;

// //   //   For price
// //   var tagForPrice = createPTag();
// //   tagForPrice.innerText = `price: ${product["price"]}`;

// //   document.getElementById("product").appendChild(tagForName);
// //   document.getElementById("product").appendChild(tagForPrice);
// // }

var products = [
  {
    name: "product 1",
    price: 10,
    id: 133,
    hasDiscount: false,
    imageSrc:
      "https://dkstatics-public.digikala.com/digikala-products/c6691393f9fdaa6f782f6b3b1a2f73116d06afa2_1713612612.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
  },
  {
    name: "product 2",
    price: 17,
    id: 234,
    hasDiscount: true,
    imageSrc:
      "https://dkstatics-public.digikala.com/digikala-products/e304670318e5c446e4a0a661dadd2e33adebd31f_1620216702.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
  },
  {
    name: "product 3",
    price: 31,
    id: 534,
    hasDiscount: false,
    imageSrc:
      "https://dkstatics-public.digikala.com/digikala-products/02f0e34a248303807e175d1cd7e61dc7d50782c5_1708417372.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
  },
  {
    name: "product 4",
    price: 43,
    id: 131,
    hasDiscount: false,
    imageSrc:
      "https://dkstatics-public.digikala.com/digikala-products/b7502b55d6b4a22495d10e6901526c2b9e4d01e9_1691071853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
  },
  {
    name: "product 5",
    price: 13,
    id: 34,
    hasDiscount: true,
    imageSrc:
      "https://dkstatics-public.digikala.com/digikala-products/8590fddfbec8d88efc47aa73b9ac7f348d651463_1714194467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
  },
];
