let x=Number(prompt("Enter first number: "));
let y=Number(prompt("Enter second number: "));
let z=Number(prompt("Enter third number: "));

let mx=x>y && x>z ? x : y>x && y>z ? y:z;

document.write(mx);