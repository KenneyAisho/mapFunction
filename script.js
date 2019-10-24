function subtractTwo (num) {
    num = num - 2
    return num;
  }
  
  function map (arrayOfNum, callback) {
    const newNum = [];
    for (let i = 0; i < arrayOfNum.length; i++) {
      let element = arrayOfNum[i];
      newNum.push(callback(element));
    }
    return newNum;
  }
  
//   Uncomment these to check your work!
  console.log(typeof subtractTwo); // should log: 'function'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]