// Quesition #1

// var date=new Date();
// document.write("<h1>",date);

// Quesition #2

// var date=new Date();
// var s=date.getMonth();
// if(s=="0")
// {
// document.write("<h1> current month  january");
// }
// else if(s=="1")
// {
// document.write("<h1> current month  febuary");
// }
// else if(s=="2")
// {
// document.write("<h1> current month  march");
// }
// else if(s=="3")
// {
// document.write("<h1> current month  April");
// }
// else if(s=="4")
// {
// document.write("<h1> current month  may");
// }
// else if(s=="5")
// {
// document.write("<h1> current month  june");
// }
// else if(s=="6")
// {
// document.write("<h1> current month  july");
// }
// else if(s=="7")
// {
// document.write("<h1> current month  Augest");
// }
// else if(s=="8")
// {
// document.write("<h1> current month  september");
// }
// else if(s=="9")
// {
// document.write("<h1> current month  octobar");
// }

// else if(s=="10")
// {
// document.write("<h1> current month  November");
// }
// else
// {
// document.write("<h1> current month  December");
// }

//"OR"

// var date=new Date();
// var n=date.toString();
// var s=n.slice(4,7);
// document.write("<h1>current month is :",s);

// Quesition#3

// var date=new Date();
// var n=date.toString();
// var s=n.slice(0,3);
// document.write("<>Today is :",s);


// Quesition # 4

// var date=new Date();
// var n=date.getDay();
// if(n=='0' || n=='6')
// {
//     document.write("<h1>it is Fun day");
// }
//     else if(n=='1')
//     {
//         document.write("<h1>Monday");
//     }
//     else if(n=='2')
//     {
//         document.write("<h1>Tuesday");
//     }

//     else if(n=='3')
//     {
//         document.write("<h1>wednesday");
//     }

//     else if(n=='4')
//     {
//         document.write("<h1>thursday");
//     }
//     else
//     {
//         document.write("<h1>friday");
//     }


// Quesition # 5

// var date=new Date();
// var n=date.getDate();
// if(n <= 15)
// {
//     document.write("<h1>First fifteen days of the month");
// }
// else 
// {
//     document.write("<h1>Last days of the month");
// }

// Quesition # 6

// var date=new Date();
// var datee=new Date("January 1, 1970");
// var datemili=datee.getTime();

// var m=datemili/(60*1000);

// document.write("<h1>",date);
// document.write("<h1>Elapested milisecond is january 1, 1970 :", datemili);
// document.write("<h1>Elapested minutes since is january 1, 1970 :",m);

// Quesition #7

// var t=new Date()
// var h=t.getHours()
// if(h<=11)
// {
//   alert("its is Am")
// }
// else
// {
//     alert("it is PM")
// 
// Quesition # 8

//  var m=new Date();
//  var day= "31";
//  var mon= "11";
//  var year= "2020";
//  var latdate=new Date(year,mon,day);
//  document.write("<h1>later date is :" ,latdate );

// Quesition#9

// var smili=new Date('25 Apr,2020');
// var damili=new Date();
// var diff=damili-smili;
// var s=diff/(60*60*12*1000);
// var m=Math.floor(s);
// document.write('<h1>',m,"Days have passed since ist Ramdan ,2020");


// Quesition#10

// var tmili=new Date();
// var Dmili=new Date("Dec 05,2015");
// var diff=tmili-Dmili;
// var sec=diff/(1000*60);
// var k=Math.floor(sec);
// document.write("<h1>On Reference Date is",tmili,'</h1>');
// document.write('<h1>',k,"seconds has Passed since beginning of 2015 ");



// Quesition #11

// var da=new Date()
// var s=da.toString();
// document.write("<h1>Current  date  is: ", da ,"<br></h1>");
// var hour=da.getHours();

// var m= hour- 1;


// var k=s.slice(0,17);
// var n=s.slice(18,60);
// document.write("<h1>1 hour ago , it was  " ,  k ,"", m ," ", n);

// Quesition #12

// var date=new Date();
// document.write("<h1>Current  date  is: ", date,"<br>");
// var ss=date.toString();
// var convert=ss.slice(15,60);
//  var n=date.getFullYear();
//  var s =n-100;
//  var days=date.getDate();
//  var mm=(100-days)/30;
//  var d=Math.ceil(mm);
//  var ye=date.getMonth();
//  var sf=(100-ye)/12;
//  var dd=Math.floor(sf);
 
//  var ygg=date.getDay();
//  var sg  = (100-ygg)/ 7;
//  var ky=Math.floor(sg);
 
//  if(ky =='1')
//  {
//      var g='sunday';
//  }
//      else if(ky=='2')
//      {
//          var g='Monday';
//      }
//      else if(ky=='3')
//      {
//          var g='Tuesday';
//      }
 
//      else if(ky=='4')
//      {
//          var g='wednesday';
//      }
 
//      else if(ky=='5')
//      {
//          var g='thursday';
//      }
//      else if(ky =='6') 
//      {
//          var G='friday';
//      }
//     else
//     {
//         var G='saturday';
//     }

 
//  if(dd=="1")
// {
// var aa= 'jan';
// }
// else if(dd=="2")
// {
//     var aa='feb';
// }
// else if(dd=="3")
// {
//     var aa='mar';
// }
// else if(dd=="4")
// {
//     var aa='April';
// }
// else if(dd=="5")
// {
//     var aa= 'may';
// }
// else if(dd=="6")
// {
// var aa='jun';
// }
// else if(dd=="7")
// {
//     var aa= 'july';
// }
// else if(dd=="8")
// {
//     var aa='Aug';
// }
// else if(dd=="9")
// {
//     var aa='sept';
// }
// else if(dd=="10")
// {
//     var aa= 'oct';
// }

// else if(dd=="11")
// {
//     var aa="Nov";
// }
// else
// {
// var aa="Dec";
// }
// document.write("<h1>100 year back is : ", G ," ",aa," ",d,"  ",s,"  ",convert);




// Quesition #13

// var age=prompt("Enter your age",age);

// var date=new Date();
// var s=date.getFullYear();

// var m=s-age;
// document.write("<h1>Age is: ", age);
// document.write("<h1>your birthday year is : ",m);



// Quesition #14

// var name=prompt("Enter  a name :    ",name);
// var Month=prompt("Enter a month :   ",Month);
// var unit=prompt("Enter a number of unit:     " ,unit);
// var cunit=prompt("Enter a charge per  unit:       " ,cunit);

// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("<h3>Customer Name :      ",name);
// document.write("<h3>Month:      ",Month);
// document.write("<h3>Number of unit:     ",unit);
// document.write("<h3>charge per unit:      ",cunit ,"<br><br>");
// var lateps=350;
// var Netamo=unit*cunit;
// var Grossamoun= Netamo + lateps;

// document.write("<h3>Net amount payable(within Due Date) :      ",Netamo);
// document.write("<h3>Late Payment Surcharge :       ",lateps);
// document.write("<h3>Gross amount payable(after Due Date) :    ",Grossamoun);
