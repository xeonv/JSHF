//"use strict";

setTimeout(message,1000);
function message() {
	alert("ПРИВЕТ")
};

let element = document.getElementById('test');
let scoops = 5;
while (scoops > 0) {
	element = 'Another scoop! <br>';
	scoops +=1;
}