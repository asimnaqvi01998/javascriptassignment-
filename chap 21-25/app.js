// QUESITION # "1"
// var fname=prompt("Enter your first name",fname);
// var secname=prompt("enter your end name",secname);
// var titlename= fname + secname;
// document.write("<h1>The title name is :</h>", titlename);

// QUESITION # "2"

// var favmobile =prompt("ENTER  A FAVOUTITE MOBILE NAME" , favmobile);
// document.write("<h1>MY favourite mobile is :</h1>", favmobile);
// var store=-1;
// for (var index = 0; index <= favmobile.length; index++) {
    
//     store++;
    
// }

// document.write("<h1>length of string is :</h1>", store);

// Quesition# '3'


// var pak= "pakistani" ;
// document.write("<b> String  :" ,pak ,"</b><br>");

// for(var i=0; i<=pak.length; i++)
// {
//     if(pak[i]==='n')
//     {
//         document.write("<b>index number is 'n' :" , i);
//     }
// }


// Quesition # '4'


// var word= "Hello world" ;
// document.write("<b> String  :" ,word ,"</b><br>");

// var mathch = word.lastIndexOf('l');

//  document.write("<b>last index  of 'l' :" , mathch);

// Quesition # '5'

// var pak= "pakistani" ;
// document.write("<b> String  :" ,pak ,"</b><br>");

// for(var i=0; i<=pak.length; i++)
// {
//     if(pak[i]===pak[3])
//     {
//         document.write("<b>CHARACTER IS INDEX 3 : " , pak[i] ,"</b><br>");
//         break;
//     }
// }

// Quesition # '6'

//  var fname=prompt("Enter your first name",fname);
//  var secname=prompt("enter your end name",secname);
 
//  document.write("<h1>The title name is :</h>", fname  +  secname);



// Quesition # '7'

// var str=prompt("Enter a input Hyder or Islam",str);
// if(str=='Islamabad')
// {
//    var s= str.replace('Islamabad',' Hyderabad');
//    document.write("<b>city name is " ,s,);
// }
// else if(str=='Hyderabad')
// {
//    var s= str.replace('Hyderabad','Islamabad');
//    document.write("<b>city name is :" ,s);
// }
// else
// {
//     document.write("<b>city name is " ,str);
// }

// Quesition # '8'
//  var  text=" Ali and Sami are best friends. They play cricket and football together.";
//  document.write("<h1>input is  :</h>", text ,'<br>');

// var num=text.replace(/and/g ,'&');

//  document.write('output is :' ,num);
 
// Quesition # '9'
 
// var num=prompt("Enter a number" ,num);
// document.write('Value :' , num ,'<br>');
// var SRT=num.toString();
// document.write("type : ", 'string <br><br>' );

// document.write('Value :' , num ,'<br>');
// var NYMBER=parseInt(num);
// document.write("type : ", 'number');




// Quesition #'10'

// var  inp=prompt("Enter a input alphbets",inp);
// document.write("<b>user input is :" ,inp, "<b><br>");
// var nsm=inp.toUpperCase();
// document.write("<b>output is: " , nsm, "<b> " )

// Quesition # '11'

// var str=prompt("Enter a user input" , str);
// document.write("<h1>user Input is   :", str ,'<br>');

// for(var i=0;i<=str.length;i++)
// {
// var s =str.slice(0,1);
// var m=s.toUpperCase();
// var p=str.slice(1,10);
// var k=p.toLowerCase();
// var sum=m+k;

// }
// document.write("title  name is   :" , sum);

// Quesition # '12'

// var num=32.56;
// var string=num.toString();
// var re=string.slice(0,2)+string.slice(3);
// document.write("<h1> Number is :",num );

// document.write("<h1> Result  is :",re );

// Quesition#13

// var Uname;
// Uname=prompt("Enter a user name",Uname);
// for(var i=0;i<Uname.length;i++)
// {
//     if(Uname.charCodeAt(i)=='33' || Uname.charCodeAt(i)=='44' ||Uname.charCodeAt(i)=='46' ||Uname.charCodeAt(i)=='64')

//     {
//         document.write("<h1>invalid passward");
//         break;
//     }
//     else
//     { 
//         document.write("<h1>valid passward");
//         break;

//     }


// }



// Quesition  # '14'

// var A= ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var s=prompt("welcome to Abc bakery. what you want to order sir/mam? " , s);
// var mathch=s.toLowerCase();
// for( var i=0; i<=A.length;i++)
// {
//     if(A[i] === mathch)
//     {
//         document.write('<h1>', mathch ," are Availiable in index " ,i ," in our bakery");
//         break;
//     }
//     else 
//     {
//         document.write(" <h1>we are sorry.",mathch," Not availiable in our bakery ");

//     }
   
// }


// Quesition No#15


//  var LowerCaseletter= /[a-z]/g;
//  var uppercase=/[A-z]/g;
//  var number=/[0-9]/g;
//  var psw=prompt("Enter a passward",psw);
 
//  if(psw.length<=6)
//  {
//   document.write("<h1>The passward length is atleast 6 character");
     

//  }
//  else if(psw.charCodeAt(0)<48 || psw.charCodeAt(0)>57)
// {
//     document.write("<h1>Passward must be start alaphbets");
    

// }

//  for(var i=0;i<psw.length;i++)
//  {
//     if(psw.charCodeAt(i)>=48 || psw.charCodeAt(i)<=57 ||psw.charCodeAt(i)>=65 || psw.charCodeAt(i)<=90||psw.charCodeAt(i)>=97 || psw.charCodeAt(i)<=122)
//     {
//         document.write("<h1>correct passward");
    
//     }
//     else
//     {
//         document.write("<h1>incorrect passward");
//     }
//  }
// Quesition # 16


// var uni=prompt("Enter  a input ",uni);
// document.write("<b> input is  :" ,uni ,"<br>")
// for(var i=0;i<uni.length;i++)
// {
//     document.write("<b>",uni[i] ,"<br>");
// }

// Quesition #17

// var s=prompt("Enter a input" ,s);
//  document.write("<h1>User  input is  :", s ,"<br>");
//  for(var i=s.length-1;i>=0;i--)
//  {
//      document.write(" <h1>last charater of string : " ,s[i]);
//      break;
//  }

// Quesition #18

// var str= "The quick brown fox jumps over the lazy dog";
// var c=count("The quick brown fox jumps over the lazy dog" , "the");
// document.write("<h1> ther are " , c, "occurance of the word 'the' " );
