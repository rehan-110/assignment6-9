

//chapter 06 start--------------------------------------------------------------------




//  1. Write a program to take a number in a variable, do the
//  required arithmetic to display the following result in your
//         browser:
//--------------------------------------POINT 1 START-----------------------------------

document.write("<h4>Result:</h4>");




var a = 10;
document.write("the value of a is: " , a , "<br><br>");
var b = ++a;
document.write("<br>"+"the value of ++a is: " , a);
document.write("<br>"+"now the value of a is: " , a);


var c = b++ ;

document.write("<br><br><br>"+"the value of a++ is: " , c);
document.write("<br>"+"now the value of a is: " , b);

var b = --b;
document.write("<br><br><br>" + "the value of --a is: " + b);
document.write("<br>" + "now the value of a is: " + b);

var d = b--;
document.write("<br><br><br>" + "the value of a-- is: " + d);
document.write("<br>" + "now the value of a is: " + b);

//--------------------------------------POINT 1 END-----------------------------------



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

//------------------------------POINT 2 START-----------------------------------------
var a = 2;
var b = 1;


document.write("<br><br><br>"+"<b>Initial values: a = ", a, " b = ", b +"</b>");


 --a;
 document.write("<br>" + "after --a: the result is: ");
 document.write("<br>" + "a is: " + a);
 document.write("<br>" +"b is: " + b);

 //--a - --b;
 --b;
document.write("<br><br><br>"+"<b>Initial values: a = ", a, " b = ", b +"</b>");

document.write("<br>"+"after --a - --b"+"<br>" +"a =", a, " b = ", b);
var res = a - b ;
document.write("<br>"+"the result is: ", res);

//--a - --b + ++b;
++b;
document.write("<br><br><br>"+"<b>Initial values: a = ", a, " b = ", b +"</b>");

document.write("<br>"+"after --a - --b + ++b"+"<br>" +"a =", a, " b = ", b);
var $res = res + b;
document.write("<br>"+"the result is: ", $res);
//--a - --b + ++b + b--;
b--;
document.write("<br><br><br>"+"<b>Initial values: a = ", a, " b = ", b +"</b>");

var $_res =$res + b;
document.write("<br>"+"after --a - --b + ++b +b--"+"<br>" +"a =", a, " b = ", b);
document.write("<br>"+"the result is: ", $_res);

//-------------------------POINT 2 END----------------------------------------









// 3. Write a program that takes input a name from user & 
// greet the user.

//-------------------------POINT 3 START-------------------------------------


var userName = prompt("Enter your name");
console.log("User name: "+ userName);

//-------------------------POINT 3 END-------------------------------------



// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


//-------------------------POINT 5  START-------------------------------------

alert("Welcome To Multiplication Topic");
var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var resOfTab = num1 * num2;
alert("your answer is "+ resOfTab);


//-------------------------POINT 5 END-------------------------------------






// 6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)


//-------------------------POINT 5 START-------------------------------------


alert("Now Your are ON Subject Marks Table Topic");

var firstSub = prompt("Enter First Subject Name: ");
var sub1_obt = +prompt("Enter Your First Subject Marks Here");
var secondSub = prompt("Enter Second Subject Name: ");
var sub2_obt = +prompt("Enter Your Second Subject Marks Here");
var thirdSub = prompt("Enter Third Subject Name: ");
var sub3_obt = +prompt("Enter Your Third Subject Marks Here");





alert(" Good Job____!" +"Scroll Down To See This Marks Table");
var totalMarks = "              100"
var percentage1 = 100/totalMarks*sub1_obt; 
var percentage2 = 100/totalMarks*sub2_obt; 
var percentage3 = 100/totalMarks*sub3_obt; 
document.write("<br><br><br>" + "Subject Name" + "total Marks" + "Obtained Marks" + "Percentage");
var $firstSub = document.write("<br>" + firstSub + totalMarks +" ___________" +sub1_obt + "__________"+percentage1+"%" );
var $secondSub = document.write("<br>" + secondSub + totalMarks       +" ___________ " + sub2_obt + "__________"+percentage2+"%");
var $thirdSub = document.write("<br>" + thirdSub + totalMarks         +"  ____________" + sub3_obt + "__________"+percentage3+"%");
var $totalMarks = 300 
var $total_ObtMarks = sub1_obt+sub2_obt+sub3_obt;
var $total_percentage = 100/$totalMarks*$total_ObtMarks 
document.write("<br>" +"Total Marks:"+$totalMarks+ "____________Total OBT Marks" + $total_ObtMarks + "_____________Total Percentage: " +$total_percentage+"%"  );




//------------------------------------------POINT 6 END--------------------------------------------------------


//chapter 06 end--------------------------------------------



//___________________kuch subject mein kuch aise bhi functions thy jo humne nhi seekhy
///-------------------jitna seekha hai uss hissaab se banaya hai ----------------------------------








 