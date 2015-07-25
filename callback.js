// function perform(a,b, callback) {
//   var c = a*b + a;
//   callback(c);
// }

// perform(10,5, function(result) {
//   console.log(result);
// })

function perform(a,b,callback) {
  var errorCode = 102;
  callback(errorCode, 'Internal Server Error');
}

  perform(10,5, function(errCode, msg) {
    if(errCode) {
      console.log(msg);
    }
  })
