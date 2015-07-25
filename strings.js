//parsing strings//
var data = 'Berlin;Amsterdam;London;Jakarta';
var strs = data.split(';');
for(var index in strs) {
  console.log(strs[index]);
}

//checking length of string data//
var str1 = 'hello world, testing testing';
console.log(str1);
console.log('Total String:' + str1.length);

/* copying Data: use
substring(first_index, last_index); --> first_index is where the extraction starts
1st character is index[0]
substr(first_index, length);
length is the number of characters to extract. */

var str1 = 'hello world, nodejs';
console.log(str1.substring(2,8)); //returns llo wo
