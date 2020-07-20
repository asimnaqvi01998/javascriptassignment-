
// Quesition #1

// function time()
// {
//     var t=new Date();
//     return t;
// }
// document.write('<h1>',time());

// Quesition # 2

// var fname=prompt("Enter a First name",fname);
// var Sname=prompt("Enter a seconds name",Sname);

// function greet(fname,Sname)
// {
//     var s=fname+Sname;
//     document.write("<h1>Full name is :" , s)
// }


// greet(fname,Sname);

// Quesition # 3

// var num1=+prompt("Enter a First number :" , num1);
// var num2=+prompt("Enter a seconds number: ", num2);

// function Sum(num1,num2)
// {
//     return d= num1 + num2;
// }
 
// document.write("<h1> Sum is : ",Sum(num1,num2));

// Quesition #4

// var num1=+prompt("Enter a ist number",num1 );
// var num2=+prompt("Enter a second number",num2);
// var op=prompt("Enter a operator :" ,op);

// function calculator(num1,op,num2)
// {
//     if(op == '+')
//         {
//             op=num1+num2;
//             document.write("<h1>sum is :", op ,'</h1>');
//         }
//         else if(op=='-')
//         {
//             op=num1-num2;
//             document.write("<h1>subtraction  is :",op,'</h1>');
//         }
//         else if(op =='*')
//         {
//             op=num1*num2;
//             document.write("<h1>mutiplication  is  :",op,'</h1>');
//         }
//        else if(op =='/')
//         {
//             op=num1/num2;
//             document.write("<h1>Division is :",op,'</h1>');
//         }
//         else 
//         {
//             op= num1 & num2;
//             document.write("<h1>& is :",op,'</h1>');
//         }


// }

// calculator(num1,op,num2);

// Quesition # 5

// var num1=prompt("Enter a  number",num1 );
//  function square()
//  {
//      var s=num1 * num1;
//      document.write("<h1> Square is ", num1 ," :",s);
//  }

// square(num1);

// Quesition #6

// var num=prompt("Enter a  number",num );
// function Fact(num)
// {
//    if(num>1)
//    {
    
//       return num * Fact(num - 1);
//    }
//    else
//    {
//        return 1;
//    }

// }


// document.write("<h1>factorial is ",num," :", Fact(num));



// Quesition #7

// var num1=prompt("Enter a start number ",num1);
// var num2=prompt("Enter a end number " ,num2);
  
//  function counting(num1,num2)
//   {
//       for(var i=num1 ; i<=num2 ;i++)
//       {
//           document.write("<h1> ",i,"<br>");
//       }
//   }

//   counting(num1,num2);
//   document.write("<h1>counting  is ",num1," to",num2," ");

// Quesition #8

// var Base=+prompt("Enter a Base :",Base);
// var prpen=+prompt("Enter a prpendicular :" ,prpen);

// function hypo(Base,prpen)

// {
//     var hyp;
//     hyp=(Base*Base)+(prpen*prpen)
//     var s= hyp ** 0.5;
//     document.write("<h1> Hypotenuse is :",hyp,"<br>");
//     document.write("<h1>square is : ",s,"<br>");
// }

// hypo(Base,prpen);


// Quesition #9

// var width=prompt("Enter a width :",width);
// var height=prompt("Enter a height :" ,height);

// function Area(width,height)
// {
//     var A=width*height;
//     document.write("<h1>Area is  :" ,A);
// }
// Area(width,height);

// OR BY VAlue pass

// var width;
// var height;

// function Area(width,height)
// {
//     var A=width*height;
//     document.write("<h1>Area is  :" ,A);
// }
// Area(5,4);


// Quesition #10

// var S=prompt("Enter a string" ,S);
// var cmp = " ";

// function PALIDROM(S)
// {
//    for(var i=S.length-1; i >= 0 ; i-- )
//    {
//       cmp += S[i];

//    }

//    if(cmp === S)
//    { 
//       document.write("<h1>This string is not Palidrom :" ,S );
//       // console.log("<h1>This word is Palidrom :" , S);
//    }

//    else
//    {
   
//       document.write("<h1>This word is Palidrom :" , S);
//    }

// }

// PALIDROM(S)

// Quesition #11

// var string = prompt("Enter String palindrome or not");
//   function upper(str) {
//     return str.replace(/(^| )./g, x => x.toUpperCase())
//   }
//   var g = upper(string);
//   document.write(g);
// Quesition#12
// var string = prompt("Enter String ");
// function longestword(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var g = longestword(string);
// document.write("<h1>The Longest Word is  :" +g);

// Quesition #13

// var s="JSResourceS.com";
// var count=0;
// function occurance(s)
// {
//    for( i=0;i<s.length;i++)
//    if(s[i]=='o')
//    {
//       count++;
//    }
//    else
//    {

//    }
//    document.write("<h1>'o' is occrance is : ",count);

// }

// occurance(s);

         //   "OR"
// var s=prompt("Enter a string to find a occurance");
// var f=prompt("word to find a occrance" ,f);

// var count=0;
// function occurance(s,f)
// {
//    for(var i=0;i<s.length;i++)
//    if(s[i]==f)
//    {
//       count++;
//    }
//    else
//    {
         
//    }
//    document.write("<h1>'o' is occrance is : ",count);

// }

// occurance(s,f);


// Quesition #14

// var r=prompt("Enter a Radius" ,r);

// function circumference(r)
// {
//    var A=2*3.14*r;
//    document.write("<h1>Circumference of circle is :" ,A);
// }

// function area(r)
// {
//    var A=3.14*(r*r);
//    document.write("<h1>Area of  circle is : " ,A);
// }

// circumference(r);
// area(r);