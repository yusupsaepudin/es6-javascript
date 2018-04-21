var products = [
  { name: 'jeruk', type: 'buah-buahan'},
  { name: 'kangkung', type: 'sayuran'},
  { name: 'mangga', type: 'buah-buahan'},
  { name: 'buncis', type: 'sayuran'}
];
var filteredProducts = [];

// Cara lama
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'buah-buahan') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts); //hasilnya kangkung & buncis

// Cara ES6
products.filter(function(product) {
  // bisa juga menggunakan comparison operator jika diperlukan
  return product.type === 'buah-buahan';
});

// bisa disimpan di dalam variable
var newProducts = products.filter(function(product) {
  return product.type === 'buah-buahan';
});

console.log(newProducts); //hasilnya jeruk & mangga