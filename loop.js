let i=1,sum=0;
while(i<=100){
    if(i%3==0 && i%5==0)sum+=i;
    i=i+1;
}

document.write(`<h1>Sum of all numbers that are divisible by 3 and 5 = ${sum}</h1>`);