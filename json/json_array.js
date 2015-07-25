/* creating a collection of JSON objects To illustrate the JSON array, we create a productTransaction object.
It consists of transaction information and a list of purchased products. */

var now = new Date();
var productTransaction = {
  id : 2,
  user: 'august',
  transactionDate: now,
  details:[
    {
      code: 'p01',
      name: 'ipad 3',
      price: 600
    },
    {
      code: 'p02',
      name: 'galaxy tab',
      price: 500
    },
    {
      code: 'p03',
      name: 'kindle',
      price: 120
    }
  ]
}
//You can see that the details attribute consists of an array object.
console.log(productTransaction);
/*If you want to access a JSON array, for instance, using the details attribute, y
ou can pass the index parameter to get a single JSON object. */
for(var i =0; i<productTransaction.details.length; i++) {
  console.log('Code:' + productTransaction.details[i].code);
  console.log('Name:' + productTransaction.details[i].name)
}
