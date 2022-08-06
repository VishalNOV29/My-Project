// let display = document.getElementById("display");
// let seven_val = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let divide = document.getElementById("divide");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let multiply = document.getElementById("multiply");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let subtract = document.getElementById("subtract");
// let zero = document.getElementById("zero");
// let decimal = document.getElementById("decimal");
// let plus = document.getElementById("plus");
// let equal = document.getElementById("equal");
function smallbracket1Fun() {
  display.innerHTML += document.getElementById("smallbracket1").innerHTML;
}
function smallbracket2Fun() {
  display.innerHTML += document.getElementById("smallbracket2").innerHTML;
}
function delFun() {
  // let list1 = display.innerHTML;
  // if (list1 == eval(list1)) {
  //   display.innerHTML = "";
  // } else {
  //   // let list1 = display.innerHTML;
  //   let a = list1.length;
  //   list1 = list1.substr(0, a - 1);
  //   display.innerHTML = list1;
  // }
  let list1 = display.innerHTML;
  let a = list1.length;
  list1 = list1.substr(0, a - 1);
  display.innerHTML = list1;
}
function clearFun() {
  display.innerHTML = "";
}
function sevenFun() {
  display.innerHTML += document.getElementById("seven").innerHTML;
}
function eightFun() {
  display.innerHTML += document.getElementById("eight").innerHTML;
}
function nineFun() {
  display.innerHTML += document.getElementById("nine").innerHTML;
}
function divideFun() {
  display.innerHTML += document.getElementById("divide").innerHTML;
}
function fourFun() {
  display.innerHTML += document.getElementById("four").innerHTML;
}
function fiveFun() {
  display.innerHTML += document.getElementById("five").innerHTML;
}
function sixFun() {
  display.innerHTML += document.getElementById("six").innerHTML;
}
function multiplyFun() {
  display.innerHTML += document.getElementById("multiply").innerHTML;
}
function oneFun() {
  display.innerHTML += document.getElementById("one").innerHTML;
}
function twoFun() {
  display.innerHTML += document.getElementById("two").innerHTML;
}
function threeFun() {
  display.innerHTML += document.getElementById("three").innerHTML;
}
function subtractFun() {
  display.innerHTML += document.getElementById("subtract").innerHTML;
}
function zeroFun() {
  display.innerHTML += document.getElementById("zero").innerHTML;
}
function decimalFun() {
  display.innerHTML += document.getElementById("decimal").innerHTML;
}
function plusFun() {
  display.innerHTML += document.getElementById("plus").innerHTML;
}
function equalFun() {
  let expression = document.getElementById("display").innerHTML;
  expression = expression.replace("÷", "/");
  expression = expression.replace("x", "*");
  display.innerHTML = eval(expression);
}

// // // TESTING PURPUSE.

// let list1 = "Vishal Kumar SIngh";
// console.log("Old string :",list1)
// console.log(list1.length)

// list1=list1.substr(0,17)
// console.log('new string :',list1)

// let list2="Hello JavaScript"
// let a=list2.length
// list2=list2.substr(0,a-1)
// console.log(list2)

// let exp='452'
// if (eval(exp)==exp){
//   console.log("Both are equal.")
// }else{
//   console.log("Both are different.")
// }
