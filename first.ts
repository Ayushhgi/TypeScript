let a:number=5;
let b:null=null;

let c=5; //type inference - typescript inferece that c is  of type number

let money:any; // it inferce the type as any
money=20;
// money="ayush";

money.toUpperCase() //here in variable of type any toUpperCase will not give any error , any tells TypeScript:“Do not check anything for this variable.”

let rupee:unknown;
rupee=20;
 
//rupee.toUpperCase(); //This will error , hence in variable of type unknown toUpperCase Give erro 

let arr:number[]=[1,2,3,4,5,6];
let arr2:(string | number)[]=[1,2,3,4,5]
arr2.push("ayush")

console.log(arr)
console.log(arr2)

console.log(rupee)


// Two kind of languages
// Compilation language - Whole file is converted into machine code first then run threw CPU.
//Interpretated language - Code executed line by line threw CPU.
//In 2008 after V8 engine javaScript become Just in time language it is the combination of compile time and interpreted language - function which runs miltiple time it convert it into machine code.
//TypeScript ka koi compiler nahi hota transpiler hota he.