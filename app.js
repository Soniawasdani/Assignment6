// //class21-25
// //TASK1
document.write("<br><br><h2>TASK1</h2><br><br>");
var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
var fullName = firstName+lasttName;

document.write("Hello"+" "+fullName);


// //TASK2
document.write("<br><br><h2>TASK2</h2><br><br>");
var favMobile = prompt("your fav mobile");

document.write("My favourite phone is"+" "+favMobile);
document.write("<br><br>Lenght of string"+" "+favMobile.length);

//TASK3

document.write("<br><br><h2>TASK3</h2><br><br>");
var nation  = "pakistani";


document.write("<br><br>String"+" "+nation);
document.write("<br><br>Index of 'n':"+" "+nation.indexOf("n"));


// //TASK4
document.write("<br><br><h2>TASK4</h2><br><br>");
var word = "Hello world";
document.write("<br><br>String"+" "+word);
document.write("<br><br>Index of 'l':"+" "+word.lastIndexOf("l"));

// //TASK5

document.write("<br><br><h2>TASK5</h2><br><br>");
var nation  = "pakistani";


document.write("<br><br>String"+" "+nation);
document.write("<br><br>Index of 'i':"+" "+nation.charAt(3));


// TASK6
document.write("<br><br><h2>TASK6</h2><br><br>");

var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
var fullName = firstName+lasttName;

document.write("Hello"+" "+fullName);


// // TASK7
document.write("<br><br><h2>TASK7</h2><br><br>");


var city = "Hyderabad";
var n = city.replace("Hyder","Islam");

document.write("<br>"+n);

// TASK8
document.write("<br><br><h2>TASK8</h2><br><br>");

var message = "Ali and Sami are best friends. They play cricket and football together."; 
var change = message.replace("and","&");

document.write("<br>"+change);


// // TASK9
document.write("<br><br><h2>TASK9</h2><br><br>");

var string = "472";
var stringToNum = parseInt("472");
console.log(stringToNum)
document.write("<br>Value"+string+"<br>"+"Type : String");
document.write("<br>Value"+stringToNum+"<br>"+"Type : number");


// // TASK10
document.write("<br><br><h2>TASK10</h2><br><br>");


var userInput = prompt("your fav dryfruit");
document.write(userInput.toUpperCase());


// TASK11
document.write("<br><br><h2>TASK11</h2><br><br>");

var favSubject = prompt("your fav subject");

var firstWord = favSubject[0].toUpperCase();
var lastText =  favSubject.substring(1);

document.write(firstWord+lastText)


// // TASK12
document.write("<br><br><h2>TASK12</h2><br><br>");
var num = 35.36 ;
var string = num.toString();

document.write("Number"+" "+num+"<br>");

document.write("Result"+" "+string);


// TASK13
document.write("<br><br><h2>TASK13</h2><br><br>");

var match = false;


var yourName = prompt("Enter your name");

for(i=0; i<yourName.length; i++) {
    var n = yourName.charCodeAt(i);

if(n >= 33 && n<= 64 ){

    match = true;
alert("please enter valid username")

}

}



if (match=false){

    alert("saved")
}



// TASK14
document.write("<br><br><h2>TASK14</h2><br><br>");

var user = prompt("welcome to ABC Bakery.What do you want to order sir/mam?");
user = user.toLowerCase();


var A = ["cake", "apple" ,"pie", "cookie", "chips", "patties"] 
if(A.indexOf(user) !== -1){

    document.write(user +" "+"is available at index"+" "+A.indexOf(user))
    
       }
       else{
    
        document.write("We are sorry"+" " +user+" "+ "is not available in our bakery")
       }
    

// TASK15
document.write("<br><br><h2>TASK15</h2><br><br>");

var paswd = prompt("Enter your password");
if(paswd.charCodeAt() >=65 && paswd.charCodeAt() <=122 )
{
    
if(paswd.charCodeAt(0) !=0 || paswd.charCodeAt(0) !=1 | paswd.charCodeAt(0) !=2 | paswd.charCodeAt(0) !=3| paswd.charCodeAt(0) !=4 | paswd.charCodeAt(0) !=5 | paswd.charCodeAt(0) !=6 | paswd.charCodeAt(0) !=7 | paswd.charCodeAt(0) !=8 | paswd.charCodeAt(0) !=9){

if(paswd.length === 6){


    alert("ok")

}
   
else{

    alert("atleast 6 characters")
}

}

}

else{

    alert("enter a valid password")
}





// TASK16
document.write("<br><br><h2>TASK16</h2><br><br>");


var university = "University of Karachi"; 
var arr = university.split("");

for(i=0; i<arr.length; i++){

document.write(arr[i]+"<br>")

}

// TASK17
document.write("<br><br><h2>TASK17</h2><br><br>");

var userinput = prompt("Enter your word");

var indexnum = userinput.charAt(userinput.length-1)

document.write("Userinput:"+" "+userinput+"<br>");
document.write("Last character of input:"+" "+indexnum);

// TASK18
document.write("<br><br><h2>TASK18</h2><br><br>");

var text = "The quick brown fox the jumps over the lazy dog";
text = text.toUpperCase
var count = (text.match(/The/g) || []).length;
console.log(count);

var temp = "This is a string.";
var count = (temp.match(/is/g) || []).length;
console.log(count);



var temp = "The quick brown fox  jumps over the lazy dog";
temp = temp.toLowerCase()
var count = (temp.match(/the/g)  || []).length;
alert(count);




// Chapter26-30

// TASK1
document.write("<br><br><h2> Chapter26-30 TASK1</h2><br><br>");

var userNumber = prompt("Enter positive number");
document.write(userNumber+"<br>");
document.write(Math.round(userNumber)+"<br>");
document.write(Math.floor(userNumber)+"<br>");
document.write(Math.ceil(userNumber)+"<br>");


// TASK2
// document.write("<br><br><h2> Chapter26-30 TASK2</h2><br><br>");

var userNumber = prompt("Enter negative number");
document.write(userNumber+"<br>");
document.write(Math.round(userNumber)+"<br>");
document.write(Math.floor(userNumber)+"<br>");
document.write(Math.ceil(userNumber)+"<br>");


// TASK3
document.write("<br><br><h2> Chapter26-30 TASK3</h2><br><br>");

var userNumber = prompt("Enter your number it will convert into absolute number");
var abs = Math.abs(userNumber);


document.write("The absolute value of"+" "+userNumber+ " "+ "is"+abs );



// TASK4
document.write("<br><br><h2> Chapter26-30 TASK4</h2><br><br>");


var dice = Math.random()*7
var diceFloor = Math.floor(dice)
var dice2 = Math.random()*7
var diceFloor2 = Math.floor(dice2)

document.write("Random device value "+diceFloor2+"<br>");

document.write("Random device value "+diceFloor);




// // TASK5
document.write("<br><br><h2> Chapter26-30 TASK5</h2><br><br>");


var headUser = "heads";
var tailUser = "tails";


var random = Math.random()*3;
var floor = Math.floor(random);


if(floor === 2){

document.write(floor+" <br>"+"Random coin value heads")



}

else if (floor === 1){

    document.write(floor+" <br>"+"Random coin value tails")

}
else{
    document.write(floor+" <br>"+"Tie")

}

// // TASK6
document.write("<br><br><h2> Chapter26-30 TASK6</h2><br><br>");


var rand  = Math.random()*101
var randFloor = Math.floor(rand);

document.write("Random number between 1 and 100:"+" "+randFloor)




// // TASK7
document.write("<br><br><h2> Chapter26-30 TASK7</h2><br><br>");

var weight = prompt("Enter your weight in Kg");
var Result = parseFloat(weight);

document.write(Result)


// // TASK8
document.write("<br><br><h2> Chapter26-30 TASK8</h2><br><br>");

var yourGuess = prompt("Enter your number");
var secretNo = Math.random()*10;
var secFlor = Math.floor(secretNo)


if (yourGuess == secFlor)
{

    alert("Bingo! Congratulations")


}
 

 else {

    alert("Try again")
 }


 document.write("<br>"+secFlor)


 //Chapter31-34

 
// TASK1
document.write("<br><br><h2> Chapter31-34 TASK1</h2><br><br>");


var currentDate = new Date();
document.write(currentDate);

// // TASK2
document.write("<br><br><h2> Chapter31-34 TASK2</h2><br><br>");

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();

document.write("Current month :" + monthNames[d.getMonth()]);

// TASK3
document.write("<br><br><h2> Chapter31-34 TASK3</h2><br><br>");

var a = new Date();
var b  = a.toString();
var c = b.slice(0,3);

document.write("Today is "+" "+c);


// // TASK4
document.write("<br><br><h2> Chapter31-34 TASK4</h2><br><br>");


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var d = new Date();



if(dayNames[d.getDay()] === "Sat"||dayNames[d.getDay()] === "Sun"){

alert("It’s Fun day")

}
else{
    alert("It’s boring day")



}


// // TASK5
document.write("<br><br><h2> Chapter31-34 TASK5</h2><br><br>");

var dates = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var d = new Date();
document.write(dates[d.getDate()])
if(dates[d.getDate()] <=15 && dates[d.getDate()] >=0){

    alert("First fifteen days of the month")
    
    }
    else if(dates[d.getDate()] <=30 && dates[d.getDate()] >=16){
        alert("Last days of the month")
    
    
    
//     }


//     // TASK6
document.write("<br><br><h2> Chapter31-34 TASK6</h2><br><br>");

var minutes = new Date();
var minMili = minutes.getTime();

var minutesconvert = minMili/(1000*60*60)

document.write("Current Date:"+minutes+"<br>");
document.write("Elapsed milisecondsince january 1 ,1970:"+minMili+"<br>");
document.write("Elapsed minutes since january 1 ,1970:"+minutesconvert+"<br>");


//     // TASK7
    document.write("<br><br><h2> Chapter31-34 TASK7</h2><br><br>");
    var hours=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
       var d =  new Date();
       
       if(hours[d.getHours()] >=0 && hours[d.getHours()] <=12){

        alert("am")
        
        }
        else if(hours[d.getHours()] <=13 && hours[d.getHours()] > 24){
            alert("pm")
        
        
        
        }

//          // TASK8
    document.write("<br><br><h2> Chapter31-34 TASK8</h2><br><br>");
    var laterDate = new Date("December 31,2020");
    document.write("LaterDate:"+laterDate);


//     // TASK9
    document.write("<br><br><h2> Chapter31-34 TASK9</h2><br><br>");
    var date1 = new Date("05/18/2020"); 
    var date2 = new Date("05/18/2015"); 
    var Difference_In_Time =  date1.getTime()-date2.getTime() ; 
    var Difference_In_Days = Difference_In_Time / (1000 * 360 * 24); 
    document.write(Difference_In_Days+"days have passed <br>" ); 

// // TASK10

document.write("<br><br><h2> Chapter31-34 TASK10</h2><br><br>");
var date1 = new Date("January 1,2015"); 
var datmili = date1.getTime();
var date2 = new Date("Decenber 5,2015");
var datmili2 = date2.getTime();
var Difference_In_Time =  datmili2-datmili; 
var Difference_In_Days = Difference_In_Time / (1000*60);

document.write(Difference_In_Days+ "<br>" ); 






  
//  // TASK11
 document.write("<br><br><h2> Chapter31-34 TASK11</h2><br><br>");


 var d = new Date();
 var e  = new Date();
 d.setHours(4);
 document.write("1 hour ago,it was:"+e+"<br>")
document.write("Current date:"+d+"<br>")



// //Task12
document.write("<br><br><h2> Chapter31-34 TASK12</h2><br><br>");

var d = new Date();
 var e  = new Date();
 d.setFullYear(1915);
 document.write("1 hour ago,it was:"+e+"<br>")
document.write("Current date:"+d+"<br>")







// //Task13
document.write("<br><br><h2> Chapter31-34 TASK13</h2><br><br>");
var age= prompt ("Enter your age");
var currentYear = new Date();
var conv = currentYear.getFullYear();
var diff = conv-age;


document.write("<br> Your birthYear is"+diff);





// //Task14
document.write("<br><br><h2> Chapter31-34 TASK14</h2><br><br>");


var name ="Sonia;"

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();

document.write("Current month :" + monthNames[d.getMonth()]);

var units = 410;
var charges = 16;
var  neAmount = units*charges;
var latePaymnet = 350;
var grossAmount = neAmount+latePaymnet;

document.write("Customer Name:"+" "+name+"<br>");
document.write("Moth :" + monthNames[d.getMonth()]);
document.write("Number of Units:"+" "+units+"<br>");
document.write("Charges per Units:"+" "+charges+"<br>");
document.write("Net Amount Payable (within Due Date) :"+" "+neAmount+"<br>");
document.write("Latepaymnet Surchrge:"+" "+latePaymnet+"<br>");
document.write("Gross Amount Payable (after Due Date) :"+" "+grossAmount+"<br>");



//  //Chapter35-38

 
// // TASK1
document.write("<br><br><h2> Chapter31-34 TASK1</h2><br><br>");


function currentTime (){

    var now = new Date(); 
document.write(now);

}
currentTime();


//TASK2
document.write("<br><br><h2>TASK2</h2><br><br>");


function greeting(fullName){
var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
firstName+lasttName;

document.write("Hello"+" "+fullName);

}
greeting();



//TASK3
document.write("<br><br><h2>TASK3</h2><br><br>");


function userCalc(){

var num1 = +prompt("Enter your number1")

var num2 = +prompt("Enter your 2nd number");

var result = num1+num2;

document.write(result);


}

userCalc();






//TASK4
document.write("<br><br><h2>TASK4</h2><br><br>");



function smartcalc(dig1,sign,dig2){

    if(sign === "+"){
    
        return dig1 + dig2
    }
    
    else if (sign === "-"){
    
        return dig1 - dig2
    }
    
    else if (sign === "*"){
    
        return dig1 * dig2
    }
    else if (sign === "/"){
    
        return dig1 / dig2
    }
    else{
        return "incorrect"
    }
    }
    var result4 = smartcalc(4,"+",6);
    
    var result = smartcalc(5,"-",5);
    var result1 = smartcalc(4,"*",6);
    var result2 = smartcalc(6,"/",3);
    var result3 = smartcalc(4,"$",6);
   document.write(result+"<br>");
   document.write(result1+"<br>");

   document.write(result2+"<br>");
   document.write(result3+"<br>");
   document.write(result4+"<br>");




//TASK5
document.write("<br><br><h2>TASK5</h2><br><br>");

function sqrt(a){


    var b = Math.sqrt(a)
    document.write(b);

}
sqrt(9);





//TASK6
document.write("<br><br><h2>TASK6</h2><br><br>");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(6) );


  //TASK7
document.write("<br><br><h2>TASK7</h2><br><br>");

function counting(){
 

for(var i = 1; i<=10; i++){

    
    document.write(i+"<br>")
}


}

counting();



//TASK8
document.write("<br><br><h2>TASK8</h2><br><br>");
document.write("<br><br><h2>TASK8</h2><br><br>");

function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
  document.write(pythagorean(4, 3));





//TASK9
document.write("<br><br><h2>TASK9</h2><br><br>");

function rectangel(width ,height){


var area = width*height
document.write(area);

}
rectangel(200,100)



//TASK10
document.write("<br><br><h2>TASK10</h2><br><br>");

function palindrome(){

    var word = prompt("enter your word");
    var check = "";
    
    for(i = word.length-1; i>=0; i--){
    
      check += word[i]
    document.write(word[i]+"<br>")
    
    
    }
    
    if(word === check){
    
      alert("its palindrome word");
    }
    
    else{
      alert("its not palindrome word");
    
    }



}
palindrome();








//TASK11
document.write("<br><br><h2>TASK11</h2><br><br>");

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));;





//TASK12
document.write("<br><br><h2>TASK12</h2><br><br>");




function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length > shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
}
  document.write(findShortestWord("Web Development Tutorial" ));



//   //TASK13
document.write("<br><br><h2>TASK13</h2><br><br>");


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'  ));
//   //TASK14
document.write("<br><br><h2>TASK14</h2><br><br>");
