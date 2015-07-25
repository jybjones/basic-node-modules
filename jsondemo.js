/*You can see that the JSON object consists of a list of the key-value pairs.
You will probably define a nested JSON object.
The following is a sample script: */

var customer = {
  name: 'Bubbly Bip',
  email: 'bubblyBip@gmail.com',
  age: 44,
  registeredDate: new Date(),
  address: {
    city: 'Miami',
    country: 'U.S.A'
    }
}
console.log(customer);
console.log('Name:' + customer.name);
console.log('Email:' + customer.email);
console.log('Age:' + customer.age);
console.log('RegisteredDate:' + customer.registeredDate);
