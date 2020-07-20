// Quesition No#1
// var a=prompt("Enter a value of power a" , a);
// var b=prompt("Enter a value of base b" , b);
//  document.write("<h1> a is =" ,a,"<br>");
// document.write("b is =" ,b,"<br>");
// var cl=0;

// function power(a,b)
// {
//   for(var i=1 ; i<=b ;i++)
//   {
//       i *= a;

//   }
//   cl=cl+i;

//   return i;
// }
  
//Quesition #2

// var ye=prompt("Enter a year ", ye);
// function yearr(ye)
// {
//   if(ye % 4 ==0)
//   {
//       document.write("<H1>leep year is ",ye);
//   }
//   else
//   {
//       document.write("This is not leep year",ye);
//   }

// }

// var y=yearr(ye);


// Quesition #3

// var a=+prompt("Enter a value of a" , a);
// var b=+prompt("Enter a value of b" , b);
// var c=+prompt("Enter a value of c" , c);
// document.write("<h1> a is =" ,a,"<br>");
// document.write("b is =" ,b,"<br>");
// document.write("c is =",c,"<br>");
// function surface(a,b,c)
// {
//     var S=(a+b+c)/2;
//     return S;
// }

// function Area(a,b,c,S)
// {
//     var A= S * (S-a) * (S-b) * (S-c);
//     return A;
// }


// var S=surface(a,b,c)
// var A=Area(a,b,c,S);
// document.write("S value is =" ,S ,"<BR>");
// document.write("Area value is =" ,A ,"</h1>");

// Quesition#4

// var E= +prompt("Enter a subject English marks",E);
// var u=+prompt("Enter a subject urdu marks",u);
// var m=+prompt("Enter a subject math marks",m);
// document.write("<h1>urdu marks  is =" , u , "<BR>");
// document.write("math marks is =" ,  m ,  "<BR>");
// document.write("English  marks is =",E,"<BR>");

// function  avarage(E,u,m)
// {
//     var A= (E+u+m )/ 3;
//     return A;
// }

//  function  percentage(E,u,m)
// {
//     var per= (E+u+m)/300 * 100;
//     return per;
// }

//  function mainFun(A,per)
// {
//     document.write("<h1>Avarge marks is =" ,A,"<BR>");
//     document.write("percentage   marks is =" ,per," %<BR><h1>");

// }

// var A=avarage(E,u,m)
// var per=percentage(E,u,m);
// mainFun(A,per);

// // Quesition#5

// var string = "Pakistani";
// var index_num = string.indexOf('n');
// document.write("String : "+string+"<br>");
// document.write("Index of 'n' : "+index_num);

// Quesition #6
// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// document.write(string);

// Quesition #7

// var string = "Pleases read this application and give me gratuity";
// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// document.write(vowel_count(string));

// Quesition # 8

// var distance = prompt("Enter Distances in Km ");
// var b
// var c
// var d 
// var f 
// function meter(){
//     b = distance * 1000;
//     feet();
// }
// function feet(){
//     c = b * 3.28;
//     inches();
// }
// function inches(){
//     d = c * 12;
//     centimeter();
// }
// function centimeter(){
//     f = d * 30;
// }
// meter();
// document.write("Distance in meter: "+ b +"<br>");
// document.write("Distance in feet: "+ c +"<br>");
// document.write("Distance in inches: "+ d +"<br>");
// document.write("Distance in centimeters: "+ f +"<br>");

// Quesition # 9

// var hour = prompt("Enter over time in hours");

// function overtime(){
//     var time = hour*12;
//     document.write("Employee over time rate is :"+ time+" Rs/-  per hour")
// }
// overtime();


// Quesition # 10

// var notes = prompt("Enter Amount you withdraw less than 1000");
// var b
// var c
// var d 
// var f 
// var g 
// var h
// function withdraw() {
//     b = Math.floor(notes/100);
//     c = Math.floor(notes/50);
//     d = Math.floor(notes/10);

//     f = c-b*2;
//     g = d-b*10;
//     h = notes % 100 % 50 / 10;

//     document.write("100 rupee note are :"+ b +"<br>");
//     document.write("50 rupee note are :"+ f +"<br>");
//     document.write("10 rupee note are :"+ h +"<br>");
// }
// withdraw();


