"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
let b = null;
let c = 5; //type inference - typescript inferece that c is  of type number
let money; // it inferce the type as any
money = 20;
// money="ayush";
money.toUpperCase(); //here in variable of type any toUpperCase will not give any error , any tells TypeScript:“Do not check anything for this variable.”
let rupee;
rupee = 20;
//rupee.toUpperCase(); //This will error , hence in variable of type unknown toUpperCase Give erro 
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5];
arr2.push("ayush");
console.log(arr);
console.log(arr2);
console.log(rupee);
//# sourceMappingURL=first.js.map