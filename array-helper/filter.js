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



/*==============
CONTOH STUDI KASUS
==============*/
var post = {id: 4, title: 'Postingan baru'};
var comments = [
  { postId: 4, content: 'keren artikelnya' },
  { postId: 3, content: 'mantap' },
  { postId: 4, content: 'sangat bermanfaat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));