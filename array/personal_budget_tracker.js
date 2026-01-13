let name=prompt("Enter your name: ");
let income=parseFloat(prompt("Enter your Income: ")),sum=0;
let Number_Of_Expenses=parseFloat(prompt("How many expenses: "));
if(isNaN(income) || isNaN(Number_Of_Expenses)){
    document.write("Enter a valid number");
}
else{
    let expenses=[];
    for(let i=0;i<Number_Of_Expenses;i++){
        let x=parseFloat(prompt(`Enter the ${i+1}th expenses`));
        if(isNaN(x)){
            alert("Given number is invalid");
            x=0;
            expenses.push(x);
        }
        else{
            expenses.push(x);
           
        }
    }
    for(let i=0;i<Number_Of_Expenses;i++){
        sum+=expenses[i];
    }
    document.write(`User: ${name}<br>`);
    document.write(`Total Income: ${income}<br>`);
    document.write(`Total Expenses: ${sum}<br>`);
    document.write(`Tax Deducted(10%): ${income*.1}<br>`);
    document.write(`Net Income After Tax: ${income-income*.1}<br>`);
    document.write(`Remaining Balance: ${(income-(income*.1))-sum}<br>`);
    document.write(`Savings(20% of balance): ${((income-(income*.1)-sum))*.2}<br>`);

}  