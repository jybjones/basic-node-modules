var array = [3,5,12,8,7];
// You can also use the push() function to insert data.
array.push(10);
array.push(18);

//show data: SHOULD get the numbers above, WITH 10 and 18 last//
console.log(array);
for(var i=0; i<array.length; i++) {
  console.log(array[i]);
}
