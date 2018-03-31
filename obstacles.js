function obsConstructor(n) {
  obj = {};
  obj.num = n;
  var positions = [];
  for (var i = 0; i < obj.num; i++) {
    if (i % 4 == 0) {
      positions.push (
          1.4,  0.0,  0.5-20*i,
          1.0,  1.0,  0.5-20*i,
         -1.4,  0.0,  0.5-20*i,
         -1.0, -1.0,  0.5-20*i,
      )
    } else if (i % 4 == 1) {
      positions.push (
        -1.4,  0.0,  0.5-20*i,
        -1.0, -1.0,  0.5-20*i,
         1.0, -1.0,  0.5-20*i,
         1.4,  0.0,  0.5-20*i,
      )
    } else if (i % 4 == 2) {
      positions.push (
        1.4,  0.0,  0.5-20*i,
        1.0,  -1.0,  0.5-20*i,
       -1.4,  0.0,  0.5-20*i,
       -1.0,  1.0,  0.5-20*i,
      )
    } else {
      positions.push (
        -1.4,  0.0,  0.5-20*i,
        -1.0,  1.0,  0.5-20*i,
         1.0,  1.0,  0.5-20*i,
         1.4,  0.0,  0.5-20*i,
      )
    }
  }
  var c = [0.2, 0.2, 0.2, 1.0];
  var colors = [];
  for (var i = 0; i < obj.num; i++) {
    colors = colors.concat(c, c, c, c);
  }
  var indices = [];
  for (var i = 0; i < obj.num; i++) {
    indices.push(4*i, 4*i + 1, 4*i + 2, 4*i, 4*i + 2, 4*i + 3);
  }
  obj.positions = positions;
  obj.colors = colors;
  obj.indices = indices;
  return obj;
}
