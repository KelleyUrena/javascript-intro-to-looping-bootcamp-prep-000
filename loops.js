function forLoop(array) {
   
  for(var i=0; i<25; i++) {
    if(i===1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while(n>0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop();
  }  while(array.length || incrementVariable());
  return array;
}

/**
 *       const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })
    **/

var i = 0;

function incrementVariable() {
  i = i + 1;
  return false;
}


