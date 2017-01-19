function flat(arr){
  var ar = [];
  (function f(arr){
    arr.forEach(a => {
      if (typeof(a) === "object") {
        f(a);
      } else {
        ar.push(a);
      }
    });
  })(arr)
  return ar;
}



console.log(flat([1,2,[3,[4,5,[6]],7],8,[9,[10],11,[[[12],13,14],15,16],17],18]));
