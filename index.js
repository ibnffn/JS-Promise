// Callbackhell
// var floppy = require("floppy");

// floppy.load("disk1", function () {
//   floppy.prompt("Please insert disk 2", function () {
//     floppy.load("disk2", function () {
//       floppy.prompt("please insert disk 3", function () {
//         floppy.load("disk3", function (data3) {
//           floppy.prompt("please insert disk 4", function () {
//             floppy.load("disk4", function () {
//               floppy.prompt("please insert disk 5", function () {});
//             });
//           });
//         });
//       });
//     });
//   });
// });

// function downloadImage(URL) {
//   return new Promise(function (resolve, reject) {
//     //download sebagai contoh fungsi pengunduh yang bersifat synchhronous
//     const image = download(url);
//     if (image) resolve(image);
//     else reject(`gagal mengunduh gambar : url salah`);
//   });
// }
// downloadImage("https://situsku.com/gambarku.jpg").then(function (image) {
//   //do something with image
// });

// // selain method .then, Promise jua memiliki .catch  untuk menangkap error.
// // ".catch"
// downloadImage("https://situsku.com/gambarku.jpg")
//   .then(function (image) {
//     //do something with image
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// by w3schools =
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output:
// // Array[(3, 42, foo)];

// const promise4 = Promise.any(promises).then((value) => {
//   console.log(value);
// });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  //Both resolve,but promise2 is faster
});
//expected output : "two"
