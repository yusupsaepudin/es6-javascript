var numbers = [1,2,3];
var doubledNumbers = [];

// Cara Lama
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push([numbers[i]] * 2);
}

// Cara ES6
var doubled = numbers.map(function(number) {
  return number * 2;
});

// hasilnya sama, [2, 4, 6]
console.log(doubledNumbers);
console.log(doubled);

// untuk looping object juga sama aja tinggal dipanggil objeknya
var cars = [
  { model: 'Avanza', price: 'CHEAP' },
  { model: 'Lamborgini', price: 'Expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices); //hasilnya ["CHEAP", "Expensive"]
