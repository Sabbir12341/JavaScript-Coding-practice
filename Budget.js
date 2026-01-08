let name=prompt("Enter your name: "),sum=0;
let income=prompt("Enter you income: ");
let Number_Of_Expenses=Number(prompt("How many expenses do you have?"));
let i=0;
while(i<Number_Of_Expenses){
    let expense=Number(prompt("Enter the amount: "));
    sum=sum+expense;
    if(sum>income){
        sum=sum-expense;
        console.log("Given amount is invalid");
    }
    else{
        // sum=sum+expense;
        i++;
    }
}
let tax=income*.10;
let net_income=income-tax;
let remaining_balance=net_income-sum;
let savings=remaining_balance*.2;

document.write("Tax: "+tax+"<br/>");
document.write("Net income: "+net_income+"<br/>");
document.write("Remaining balance: "+remaining_balance+"<br/>");
document.write("Savings: "+savings);

