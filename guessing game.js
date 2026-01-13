let j=0;
let a=Number(prompt("How many times you wanna play?"));
for(let i=0;i<a;i++){
    let x=parseInt(prompt("Enter a number between 1 and 5"));
    let y=Math.floor((Math.random()*5)+1);
    if(y==x){
        alert(`You have guess the right number ${x}`);
        j++;
    }
}
document.write(`You have  won : ${j} times'<br>'`);
document.write(`You have Lost : ${a-j} times`);