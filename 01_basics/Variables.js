//https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/


// https://chatgpt.com/share/683d6a86-6a40-800c-a484-c263dfe9f461

const accountId= 14453
let accountEmail="solapurevandana02@gmail.com";
var accountPassword="12345";
accountCity="Pune";  // in this way also u can declare but is not a good practice
let accountState;  // this is not defined below it is just declared so beacuse of this whenever u will input it will give value as undefined


// accountId=123 --- cannot be changed as it is const 



accountEmail="vs@gmai.com"
accountPassword="11"
accountCity="Solapur"

console.log(accountId);

console.table({accountId,accountEmail,accountPassword,accountCity})



/*
var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment.

*/
