"use strict";

// setTimeout(message,1000);
// function message() {
// 	alert("ПРИВЕТ")
// };


// let scoops = 5;
// while (scoops > 0) {
// 	document.write('Another scoop! <br>');
// 	scoops -=1;
// }

// let elemKey = [];
// let element = document.getElementById('test');
// for (key in element) {
// 	elemKey.push(key);
// }

// document.write(elemKey);

// alert(elemKey.innerText);

//-------------------------------------------------------------------------------------------

// let name = "Joe";
// let i = 0;
// while (i < 2) {
// 	document.write("Happy Birthday to you. <br>");
// 	i += 1;
// }

// document.write("Happy Birthday dear " + name + ",<br>");
// console.log("Happy Birthday to you. <br>");

//-------------------------------------------------------------------------------------------

// let arr =[2,3,6,7];
// for (let index = 0; arr.length - 1; index++ ) {
// 	alert( arr[index]);
// } 

// let arr = [1,2,3,4,5,];
// alert(arr.reduce((sum,current) => sum + current, 0));

// for (let index in arr) {
// 	alert (index);
// }

//-------------------------------------------------------------------------------------------

// function camelize(string) {
// 	let arr = string.split('');
// 	arr.forEach(function (item, index) {
// 			if (item == '-') {
// 				arr.splice(index,1)
// 				arr[index] = arr[index].toUpperCase();
// 			}
// 	}
// 	)
// 	return arr.join('');

// }


// alert(camelize("background-color") == 'backgroundColor');
// alert(camelize("list-style-image") == 'listStyleImage');
// alert(camelize("-webkit-transition") == 'WebkitTransition');

//-------------------------------------------------------------------------------------------

// function  filterRange(arr, a, b) {
// 	return arr.filter(item => item >= a && item <= b)
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

//-------------------------------------------------------------------------------------------

// function  filterRange(arr, a, b) {
// 	arr.forEach( function (item,index) {
// 		if (item < a || item > b) arr.splice(index,1);
// 	} );
	
// }

// let arr = [5, 3, 8, 1];

//  filterRange(arr, 1, 4);


// alert( arr ); // [3, 1]

//-------------------------------------------------------------------------------------------

// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки в обратном порядке

// arr.sort((a, b) => a - b).reverse();

// alert( arr ); // 8, 5, 2, 1, -10

//-------------------------------------------------------------------------------------------

// function copySorted(arr) {

// 	//return arr.filter(()=>true).sort();
// 	return Object.assign([],arr).sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



//-------------------------------------------------------------------------------------------
// function Calculator() {
// 	this.calculate = function(string) {
// 		 if (string.indexOf('+') + 1) {
// 		 	return string.split(' + ').reduce((sum, current) => sum + Number(current), 0);
// 		 } else if  (string.indexOf('-') + 1) {
// 		 	return string.split(' - ').reduce((res, current) => res - Number(current));
// 		 } else { 
// 		 	return 'Проверьте ввод!';
// 		 }
// 	},

// 	this.addMethod(name, func) {

// 	}
// }

//-------------------------------------------------------------------------------------------


function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8




