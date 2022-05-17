// function add() {
//     let a = 3;
//     let b = 2;
//     let x = a+b; 
//     console.log(x)
// }
// function mul(){
//     let a = 3;
//     let b = 2;
//     let x = a*b;
//     console.log(x)
// }

// function check(){
//     let a = 19;
//     if(a<18){
//         console.log("you are not eligible");
//     }
//     else{
//         console.log("you are eligible");
//     }
// }
// let x = prompt("Enter your Table Number");
// document.write("Table of " + x + " is given"+"<br>");
// for(let a=1; 11>a; a++){
//     // console.log(a*x);
//     document.write(x + "*" + a + "=" + a*x + "<br>");
// }
// for(let a=1; 11>a; a++){
//     var tr = document.createElement('tr');
//     var td1 = tr.appendChild(document.createElement('td'));
//     var td2 = tr.appendChild(document.createElement('td'));
//     var td3 = tr.appendChild(document.createElement('td'));
//     td1.innerHTML = x;
//     td2.innerHTML = a;
//     td3.innerHTML = a*x;
//     document.getElementById("tb").appendChild(tr);
// }

// for(let i = 1; i<=x; i++){
//     for(let j = 1; j<=i; j++){
//         document.write(j);
//     }
//     document.write("<br>")
// }

var fruits = ["apple","mango","banana"];
fruits.forEach(function(value){
    document.write(value + "<br>")
});
// document.write(fruits[1]);