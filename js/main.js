// http://codifyacademy.com/wk8/

$(document).ready(function (){
	// Print out to console 0-100 in increments of 5
	// for (var i = 0; i < 100; i+= 5){
	// 	console.log(i);
	// }

	// Putting some text into an element
	document.getElementById("text").textContent = "hello world";

	// Putting text on screen using a variable
	var str = "hello again";
	document.getElementById("string").textContent = str;

	// Make a function that takes a user's input (value) and then console.logs the value. Initialize the function (make it start) when you click a button.
	function print_input () {
		var userinput = document.getElementById('input').value;
		console.log(userinput);
	};

	$('#print-button').click(function(){
		print_input();
	});

	// Make an array with five entries. Using a loop, console.log each entry.
	var array = [1, 2, 3, 4, 5];
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
	}

	// Create an object with at least three properties. Console.log each property.
	var person = {
		age: 26,
		firstname: "Danube",
		lastname: "Phan"
	}

	console.log(person.age);
	console.log(person.firstname);
	console.log(person.lastname);

	// Create an array with multiple objects, each with multiple properties. Use a for loop to console.log the various properties.
});