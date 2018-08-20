function forLoop(array) {
  array.push("I am 1 strange loop."); 
  for(var i=1; i<25; i++) {
   array.push(`I am ${i} strange loops.`);
  }
  return array;
}