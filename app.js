const seatlist=document.querySelectorAll(".vertical-center img");
var count1=0;
var count2=0;
var array1 = [];
// //original
// for(seat of seatlist)
// {
//     seat.addEventListener ("click",function ()
//     {
//       if(this.style.backgroundColor === "yellow"){
//         this.style.backgroundColor="green";
//         count1--;
//     //count2=20-count1;
//     count2--;
//     calculate1();
//       }
//       else{
//         this.style.backgroundColor="yellow";
//         count1++
//     //count2=20-count1;
//     count2++
//     calculate1();
//       }
//     });
// }
// function color(){
//   for(seat of seatlist){
//     if (seat.src.match("2.png")) {
//       seat.src = "3.png";
//   }
//   else {
//       seat.src = "2.png";
//   }
//   }
//}
for(seat of seatlist)
{
    seat.addEventListener ("click",function ()
    {
      if (this.src.match("2.png")) {
        this.src = "1.png";
              count1--;
    //count2=20-count1;
    count2--;
    calculate1();
          }
          else {
            this.src = "2.png";
              count1++
    //count2=20-count1;
    count2++
    calculate1();
          }
        });
}
/*for(seat of seatlist)
{
seat.onclick = event => {
    if (event.detail === 1) {
      // it was a single click
  this.style.backgroundColor="yellow";//click on seat it will turn red//
  count1++;
  calculate1();
    } else if (event.detail === 2) {
      // it was a double click
        this.style.backgroundColor="red";//click on seat it will turn red//
    }
 };
}*/
/*for(seat of seatlist)
{
    seat.addEventListener ("click",function ()
    {
  this.style.backgroundColor="yellow";//click on seat it will turn red//
  count1++;
  calculate1();
  seat.addEventListener ("click",function (){
    this.style.backgroundColor="green";//click on seat it will turn red//
    count1--;
    calculate1();
  });
    });
}*/
/*for(seat of seatlist)
{
    seat.addEventListener ("click",function ()
    {
      this.classList.toggle("mystyle");
      count1++;
      calculate1();
    });
}*/
//clear screen//
function clearScreen() {
   document.getElementById("pre").value = "";
    document.getElementById("result1").value = "";
}
function disableButton(myBtn) {
    document.getElementById(myBtn.id).disabled = true;
}
function calculate1(){
    var totalbutton1=20;
    var minus1= totalbutton1-count1;
    document.getElementById("result1").value=String(minus1);//availabeseats//
    //document.getElementById("pre").value=String(count2);
}
 function calculate() {
    var totalbutton=20,button=count2;
    var sum=button;
    var minus= totalbutton-sum;
    document.getElementById("result").value=String(sum);//confirmedseats//
    document.getElementById("result1").value=String(minus);//availabeseats//
    //confirm ky badd slect nai hogaa//
    document.getElementById("myBtn0").disabled = true;myBtn0.style.src="3.png";
    document.getElementById("myBtn1").disabled = true;
    document.getElementById("myBtn2").disabled = true;
    document.getElementById("myBtn3").disabled = true;
    document.getElementById("myBtn4").disabled = true;
    document.getElementById("myBtn5").disabled = true;
    document.getElementById("myBtn6").disabled = true;
    document.getElementById("myBtn7").disabled = true;
    document.getElementById("myBtn8").disabled = true;
    document.getElementById("myBtn9").disabled = true;
    document.getElementById("myBtn10").disabled = true;
    document.getElementById("myBtn11").disabled = true;
    document.getElementById("myBtn12").disabled = true;
    document.getElementById("myBtn13").disabled = true;
    document.getElementById("myBtn14").disabled = true;
    document.getElementById("myBtn15").disabled = true;
    document.getElementById("myBtn16").disabled = true;
    document.getElementById("myBtn17").disabled = true;
    document.getElementById("myBtn18").disabled = true;
    document.getElementById("myBtn19").disabled = true;
for(seat of seatlist)
{
      if(this.src.match("2.png")){
        this.src ="1.png";
      }
      //this.disabled=true;
}
 }
 //predefine seats ky liyh//
    //var count = 0;
    var btn = document.getElementById("btn");
    var disp = document.getElementById("display");
    btn.onclick = function ()
        {
      //count++;
      disp.innerHTML = count2;
      // var minus= totalbutton-count;
      // document.getElementById("result1").value=String(minus);//availabeseats//
    }
    function disableButton(myBtn) {
      document.getElementById(myBtn.id).disabled = true;
      //alert("Button has been disabled.");
  }









