/* The for statement provides this mechanism, letting you
specify the initializer, condition, and increment/decrement in one compact line.
The following is node.js syntax of the iteration for.
for (initialize; condition; increment / decrement) { // do something
} */

for (var counter = 0; counter < 10; counter++) {
  console.log(counter);
}

/* while evaluates the condition and executes the statement if that condition is true.
Then it repeats that operation until the condition evaluates as false. */

var num = 0;
while (num < 10)
 {
  console.log(num);
  num++;
 }
