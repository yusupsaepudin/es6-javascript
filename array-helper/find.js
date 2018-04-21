var users = [
  { name: 'Dadan' },
  { name: 'Andri' },
  { name: 'Iqbal' }
];
var user;

/*==============
CARA LAMA
==============*/
for (var i = 0; i < users.length; i++) {
  if (users[i].name == 'Andri') {
    user = users[i];
  }
}

console.log(user); // hasilnya Andri

/*==============
CARA ES6
==============*/
users.find(function(user) {
  return user.name === 'Andri';
});