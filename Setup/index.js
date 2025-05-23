// import React from "react";
// import ReactDOM from "react-dom";
/*

Render (from React DOM) method converts React Element to HTML, which browser understands

npm init

Bundle app for production readiness

*/
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
// const heading = React.createElement(
//   "h1",
//   { id: "afbejhf" },
//   "Hello world from React!"
// );
// const heading1 = <h1 id="afbejhf">Hello world from React from heading 1</h1>;

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// let a = 10;

// var b = 20;

// var a = 10;

// fxn1();

// function fxn1() {
//   console.log(b);
//   var b = 10;
//   console.log(a);
//   function fxn2() {
//     var c = 20;
//     console.log("Executed 2");
//     console.log(a);
//     console.log(b);
//     console.log(x);
//   }
//   fxn2();

//   console.log("Executed");
// }

// const arrFxn = () => {};

// const obj1 = {
//   a: 10,
//   b: 20,
// }; // 2002

// const obj2 = obj1;

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// var a = 10;

// console.log(a);

// console.log(window.a);

// console.log(this.a);

// console.log(this === window);

// function abc() {
//   function xyz() {
//     console.log(this);
//   }
//   xyz();
// }

// abc();
// window.abc();
// this.abc();

// const obj = {
//   x: 20,
//   getX() {
//     console.log(this);
//   },

//   getArrX: () => {
//     console.log(this);
//   },
// };

// obj.getX();
// obj.getArrX();

// const obj1 = {
//   age: 10,
//   greet() {
//     console.log("this: ", this);
//     console.log("this.age: ", this.age);

//     // function greet2() {
//     //   console.log("this: ", this);
//     //   console.log("this.age: ", this.age);
//     // }

//     const greet3 = () => {
//       console.log("this: ", this);
//       console.log("this.age: ", this.age);
//     };
//     // greet2();
//     greet3();
//   },
// };

// obj1.greet();

// var a = "himanshu";
// console.log(x);

// console.log(b);
// console.log(c);

// a = 1;

// var a = 10;
// let b = 5;
// const c = 8;

// console.log(this);

// const obj = {
//   a: 10,
//   normalFunc() {
//     console.log(this);
//   },
//   arrowFunc: () => {
//     console.log(this);
//   },
// };

// obj.normalFunc();
// obj.arrowFunc();

// const obj1 = {
//   age: 10,
//   greet() {
//     console.log("this: ", this);
//     console.log("this.age: ", this.age);

//     function greet2() {
//       console.log("this: ", this);
//       console.log("this.age: ", this.age);
//     }

//     const greet3 = () => {
//       console.log("this: ", this);
//       console.log("this.age: ", this.age);
//     };
//     greet2();
//     greet3();
//   },
// };

// obj1.greet();

// Fxn Statement OR Fxn Declaration

/**
 func a() {
 console.log("a called")
 }
 */

// Fxn Expression
/*
var b = function() {
 console.log("b called")
}
*/
// Diff bw above 2 is hositing

//Anonymous fxn
/*
function() {
}

Doesnt have own identity
Need to have name if declared individually
used in a place where fxns are used as values like in fxn statement
*/
// Params vs Args

//

//No arguments object in arrow functions
//Arrow functions do not create their own this binding
// Hoisting
//Can't be used as constructor
// normalFxn("1", 2, false);

// function normalFxn() {
//   console.log("normalFxn");
//   console.log(arguments);
// }

// const arrFxn = () => {
//   console.log("arrFxn");
//   console.log(arguments);
// };

// arrFxn();

// Fxn statement or Function Declaration

// {
//   var by = 10;
// }
// console.log(by);

// abc();

// function abc() {
//   console.log("abc: ");
// }

// // Fxn Expression

// var fxnExp = function () {
//   console.log("fxnExp");
// };
// fxnExp();

// // Anonymous
// function xyz() {
//   console.log("fxnExp");
// }

// const arr = [1, 2, 3, 4, 5];

// const arrFxn = (item) => {};

// const newArr = arr.map(arrFxn);

// //

// const myFxn = (a, b) => {
//   // Paramters
//   return arrFxn;
// };

// myFxn("1", 2); // Arguments

// const obj = { a: 1, b: { c: 3, d: { e: 5, f: 6 } } };
// // {a: 1, b.c: 3, b.d.e: 5, b.d.f: 6}

// const flattenObj = (obj, dotKey) => {
//   let currObj = {};
//   for (let key in obj) {
//     const currKey = dotKey ? `${dotKey}.${key}` : key;
//     if (typeof obj[key] === "object") {
//       currObj = Object.assign(currObj, flattenObj(obj[key], currKey)); //{ ...currObj, ...flattenObj(obj[key], currKey) };
//     } else {
//       currObj[currKey] = obj[key];
//     }
//   }
//   return currObj;
// };

// const objFlattened = flattenObj(obj);

// console.log(objFlattened);

// const obj = {
//   a: 1,
//   printA() {
//     console.log(this);
//   },
// };
// let callA = obj.printA.bind(this);

// callA();

// obj.printA.bind(this)();

// const obj = {
//   name: "Himanshu",
//   printThis() {
//     console.log("this: ", this);
//   },
//   // arrFxn: () => {
//   //   console.log(this);
// //   // },
// // };

// const obj1 = {
//   name: "Jashwanth",
//   pName() {
//     console.log(this.name);
//   },
// };

// obj1.pName();

// const refOfPname = obj1.pName;

// refOfPname();

// function printThis() {
//   console.log("this: ", this);
// }

// printThis();
// const newPrintThis = printThis.bind(obj);
// newPrintThis();

// function printFullName(hometown, hometown2) {
//   console.log(`${this.name} lives in ${hometown} and ${hometown2}`);
// }

// Call
// printFullName.call(obj, "Punjab", "Bathinda");

// printFullName.call(obj1, "Banglore", "fjewhfewkj");

// // Apply
// printFullName.apply(obj, ["Punjab", "Bathinda"]);
// printFullName.apply(obj1, ["Banglore", "fjewhfewkj"]);

// printFullName();

// obj.printFullName.call(obj1);

// Apply

// 1
// obj.printThis(); // object

// const myNameFxn = printThis.bind(obj);

// 2
// myNameFxn(); // object

// let myObj = {
//   a: 1,
//   b: 2,
// };

// myObj = { a: 1 };

// let abc = 1;
// let efg = 2;

// const objjj = { abc, efg }; // {abc: 1, efg: 2}

// Falsey Values -> 0, "", null, undefined

// !!("") -> boolen

// Truthy Values - {}, [],

const cart = ["book", "jeans", "TV"];

// createOrder(cart, () => {
//   goingForPayment(() => {
//     updateWallet();
//   });
// });

// Risky Syntax

// PROMISE
// const myFunc = () => {};

// const promise = fetch("https://jsonplaceholder.typicode.com/posts");

// console.log("1");

// promise.then((result) => {
//   console.log("3");
//   console.log("result: ", result);
// });

// console.log("2");

// const myFxn = () => {
//   return {
//     a: 1,
//     b: 2,
//     fxn: () => {},
//   };
// };

// myFxn().fxn();

// createOrder(cart)
//   .then((res) => {
//     return goingForPayment();
//   })
//   .then((res) => {
//     updateWallet();
//   });

const myTimeoutFxn = () => {
  const callbackOfPromiseConstructor = (resolve, reject) => {
    console.log("3");
    const timeOutTimer = 2000;
    setTimeout(() => {
      console.log("4");
      if (timeOutTimer % 2 === 0) {
        resolve("10");
      } else {
        reject(10);
      }
    }, timeOutTimer);
  };

  console.log("1");
  const promise = new Promise(callbackOfPromiseConstructor);
  console.log("2");
  return promise;
};

myTimeoutFxn()
  .then((val) => {
    console.log("5");
    console.log("Value from promise: ", val);
  })
  .catch((val) => {
    console.log("catch from promise: ", val);
  });

fetch("https://jsonplaceholder.typicode.com/pos")
  .then((val) => {
    console.log("val: ", val);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
// {state: pending, result: undefined}
// {state: fulfilled, result: {body: "", headers: "", url: ""}}

// class MyClass {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// const myClassObj = new MyClass(1, 2);
