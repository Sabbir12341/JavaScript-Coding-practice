let x=parseInt(prompt("Give the number: "));

if(x>= 80 && x<=100)document.write('A+');
else if(x>=70 && x<80)document.write('A');
else if(x>=65 && x<70)document.write('A-');
else if(x>=60 && x<65)document.write('B');
else if(x>=55 && x<60)document.write('B-');
else if(x>=50 && x<55)document.write('C');
else if(x>=45 && x<50)document.write('C-');
else if(x>=40 && x<45)document.write('D');
else document.write("F");