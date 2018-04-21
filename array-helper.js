/*=====================
ES6 - forEach
fungsi forEach lebih mudah penggunaannya dibandingkan for loop biasa
======================*/

/* == DASAR ==*/
var colors = ['red', 'green', 'blue'];

for (var i = 0; i < colors.length; i++ ) {
  console.log(colors[i]);
}
// ES6 Feature
colors.forEach(function(color) {
  console.log(color);
});

/* == FITUR LANJUTAN ==*/
// Create an array of numbers
var numbers = [1 , 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// // Loop over the array, incrementing the sum variable
// numbers.forEach(function(number) {
//   sum += number;
// });

// OR
numbers.forEach(adder);

// // Print the sum variable
console.log(sum);