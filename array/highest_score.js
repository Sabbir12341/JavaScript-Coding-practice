let scores=[];
let x=Number(prompt("How much number do you want?"));
for(let i=0;i<x;i++){
    let y=Number(prompt(`Enter the ${i+1}th score: `));
    scores.push(y);
}
scores.sort(function sort(a,b){
    return a-b;
});
document.write(`<h1>The highest number is= ${scores[scores.length-1]}</h1>`);