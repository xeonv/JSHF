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


// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8


//-------------------------------------------------------------------------------------------


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша


//-------------------------------------------------------------------------------------------


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(function(item)  {
// 	                                 let result = {fullName: `${item.name} ${item.surname}`, id: item.id};
// 	                                 return result;
// 	                                 }
// 	                                 );

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

//-------------------------------------------------------------------------------------------


// function sortByAge (users) {
// 	users.sort((a, b) => a.age > b.age ? 1 : -1);
// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//-------------------------------------------------------------------------------------------

// function shuffle(arr) {
// 	arr.sort((a,b) => (Math.random() - 0.5));
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]
// alert(arr);

// shuffle(arr);
// // arr = [2, 1, 3]
// alert(arr);

// shuffle(arr);
// // arr = [3, 1, 2]
// alert(arr);
// // ...


//-------------------------------------------------------------------------------------------


// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

//-------------------------------------------------------------------------------------------

// function getAverageAge(array) {
// 	return array.reduce( (sum, current) => sum + current.age, 0 ) / array.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//-------------------------------------------------------------------------------------------


// function unique(arr) {
  
//   let result = [];

//   for (let item of arr) {
//   	if (!result.includes(item)) {
//   		result.push(item);
//   	}
//   }
  
//   return result;
  
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O


//-------------------------------------------------------------------------------------------


// let messages = [
// {text: "Hello", from: "John"},
// {text: "How goes?", from: "John"},
// {text: "See you soon", from: "Alice"}
// ];
// let object1 = messages[0];
// let x = new WeakMap();
// x.set(object1, messages[0]);
// alert("Чтение первого сообщения: " + x.has(object1));
// message.shift();
// alert("Чтение первого сообщения: " + x.has(object1));


//-------------------------------------------------------------------------------------------

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );


































