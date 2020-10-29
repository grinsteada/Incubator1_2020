  //creates array named a
  var a = []
  //creates array named b
  var b = []
  //using for loop run the code 10 times
  for (i = 0; i <= 10; i++) {
  //assigns a random number of values between 0 and 1 
  a[i] = Math.random();
  b[i] = Math.random();
  }
  //displays the values for a and b
  console.table(a);
  console.table(b);
