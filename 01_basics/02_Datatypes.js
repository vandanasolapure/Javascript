// 📦 Primitive Data Types
let name = "Vandana";           // String
let age = 22;                   // Number
let isStudent = true;          // Boolean
let salary = undefined;        // Undefined
let emptyValue = null;         // Null (typeof returns 'object' - known bug)
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
let uniqueId = Symbol('id');   // Symbol

// 📦 Reference (Non-Primitive) Data Types
let person = { name: "Vandana", age: 22 }; // Object
let hobbies = ["coding", "music", "travel"]; // Array
let greet = function() { return "Hello"; };  // Function

// 🔍 Checking Types
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof salary);     // undefined
console.log(typeof emptyValue); // object ❗️
console.log(typeof bigNumber);  // bigint
console.log(typeof uniqueId);   // symbol

console.log(typeof person);     // object
console.log(typeof hobbies);    // object (arrays are objects)
console.log(typeof greet);      // function



//------------------ object (arrays are objects)---------------------

/*
Q: What is the output of:


console.log(typeof null);    op-> object
console.log(typeof undefined);   op->undefined
✅ Output:

object
undefined
🔍 Explanation:
1. typeof undefined → "undefined"
✅ This is expected.

undefined means: a variable is declared but not assigned.

js
Copy
Edit
let x;
console.log(typeof x); // "undefined"
2. typeof null → "object" ❗️(This is a bug)
null is a primitive value that means: "no value", "empty", or "intentional absence".

But typeof null incorrectly returns "object" due to a bug in the original JS implementation (in 1995).

It’s kept that way for backward compatibility.

📌 Bonus Tip for Interviews:
Q: How can you accurately check for null?

js
Copy
Edit
value === null        // ✅ best way
value == null         // true for both null and undefined (loose check)





*/





















/*
📘 JavaScript Data Types — Summary Notes
JavaScript has 8 main data types, divided into:

🔹 1. Primitive Types (Immutable, stored by value)
Type	Example	Description
String	"hello", 'JS'	Text data
Number	42, 3.14, -7	Integers & floats (no int/float types)
BigInt	1234567890123456789n	Large integers beyond Number limit
Boolean	true, false	Logical value
Undefined	let x; (no value)	Declared but not assigned
Null	let y = null	Empty or intentional "nothing"
Symbol	Symbol('id')	Unique identifier (used in objects)

🔹 2. Non-Primitive (Reference) Types (Mutable, stored by reference)
Type	Example	Description
Object	{ name: "Vandana", age: 22 }	Key-value pairs, can hold mixed types
Array	[1, 2, 3]	Special type of object (list)
Function	function() {}	Also an object in JS

📌 Note: Arrays and functions are technically objects.

🔍 typeof Operator
Use typeof to check type:

js
Copy
Edit
typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof null         // "object" ❗️(a known JS bug)
typeof undefined    // "undefined"
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
🧠 Notes
null is intentionally set to mean "nothing"

undefined means "not assigned yet"

BigInt and Symbol are newer (ES6+)

JS is dynamically typed: types are assigned at runtime




---------null-------------



Real-Time Example: User Profile Picture
Imagine you're building a website where users can upload a profile picture. But when a new user signs up, they haven’t uploaded one yet.

You can set the profilePicture property to null to indicate “no image yet” — this is intentional and expected.

js
Copy
Edit
let user = {
  name: "Vandana",
  profilePicture: null  // user hasn't uploaded a picture yet
};

// Later, if user uploads one:
user.profilePicture = "https://example.com/vandana.jpg";
✅ Why null and not undefined?
null means: “I intentionally left this empty”

undefined means: “This was never assigned”

Using null makes your code clearer — you're saying “this value is empty on purpose, and will be filled later.”










*/