let i=1,sum=0;
while(i<=100){
    if(i%3==0 && i%5==0){
        document.write(`<h4>${i} FizzBuzz</h4>`);
    }
    else if(i%3==0 ){
        document.write(`<h4>${i} Fizz</h4>`);
    }
    else if( i%5==0){
        document.write(`<h4>${i} Buzz</h4>`);
    }
    else {
        document.write(`<h4>${i}</h4>`);
    }
    i=i+1;
}
