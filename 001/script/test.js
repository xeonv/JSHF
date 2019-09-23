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

// let name = "Joe";
// let i = 0;
// while (i < 2) {
// 	document.write("Happy Birthday to you. <br>");
// 	i += 1;
// }

// document.write("Happy Birthday dear " + name + ",<br>");
// console.log("Happy Birthday to you. <br>");

// let arr =[2,3,6,7];
// for (let index = 0; arr.length - 1; index++ ) {
// 	alert( arr[index]);
// } 

// let arr = [1,2,3,4,5,];
// alert(arr.reduce((sum,current) => sum + current, 0));

// for (let index in arr) {
// 	alert (index);
// }


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



// function  filterRange(arr, a, b) {
// 	return arr.filter(item => item >= a && item <= b)
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

function  filterRange(arr, a, b) {
	arr.forEach( function (item,index) {
		if (item < a || item > b) arr.splice(index,1);
	} );
	
}

let arr = [5, 3, 8, 1];

 filterRange(arr, 1, 4);


alert( arr ); // 5,3,8,1 (без изменений)