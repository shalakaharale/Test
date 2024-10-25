const reverseString = (str) => {
  const strArray = str.split(" ");
  console.log("strArray", strArray);
  const reversedArray = strArray.reverse();
  let finalReverseString = "";
  for (let i = 0; i < reversedArray.length; i++) {
    let reverseString = "";
    for (let j = reversedArray[i].length - 1; j >= 0; j--) {
      reverseString += reversedArray[i][j];
    }
    finalReverseString += reverseString + " ";
  }
  console.log("final", finalReverseString);
};

reverseString("My name is Shalaka");
