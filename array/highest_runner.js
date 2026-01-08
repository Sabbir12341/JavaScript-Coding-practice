function highestRunScorer(scores){
    let max=scores[0][1],k;
      for(let i=0;i<scores.length;i++){
       if(scores[i][1]>max){
          max=scores[i][1];
          k=scores[i][0];
       }
      }
      return k;
}
let scores=[
    ["Shakib",19],
    ["Tamim",0],
    ["Mahmudullah",51],
    ["Mushfiq",49],
    ["Masrafee",30]
];
let Name=highestRunScorer(scores);
document.write(`<h1>Highest run Scorer = ${Name}</h1>`);