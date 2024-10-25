const add = (numAsString) => {
  const arr = numAsString.split(/[\n,]/);
  console.log(arr);
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }
  return sum;
};
console.log(add("1,2\n3"));
