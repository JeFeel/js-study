var user = {};
user.name = 'John';
user.surname = 'Smith'; //{ name: 'John', surname: 'Smith' }
user.name = 'Pete';   //{ name: 'Pete', surname: 'Smith' }
delete user.name;  //{ surname: 'Smith' }
console.log(user);