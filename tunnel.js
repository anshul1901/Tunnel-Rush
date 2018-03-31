function tunnelConstructor(n) {
  obj = {};
  obj.num = n;
  obj.positions = [];
  for (var i = 0; i < obj.num; i++) {
    obj.positions.push(
      // Top face1
       -1.0,  1.0, -1.0- 2*i,
        0.0,  1.4, -1.0- 2*i,
        0.0,  1.4,  1.0- 2*i,
       -1.0,  1.0,  1.0- 2*i,

       // Top face2
        0.0,  1.4, -1.0-2*i,
        1.0,  1.0, -1.0-2*i,
        1.0,  1.0,  1.0-2*i,
        0.0,  1.4,  1.0-2*i,

       // Bottom face1
       -1.0, -1.0, -1.0-2*i,
        0.0, -1.4, -1.0-2*i,
        0.0, -1.4,  1.0-2*i,
       -1.0, -1.0,  1.0-2*i,

       // Bottom face2
        0.0, -1.4, -1.0-2*i,
        1.0, -1.0, -1.0-2*i,
        1.0, -1.0,  1.0-2*i,
        0.0, -1.4,  1.0-2*i,

       // R2*ight face1
        1.4,  0.0, -1.0-2*i,
        1.0,  1.0, -1.0-2*i,
        1.0,  1.0,  1.0-2*i,
        1.4,  0.0,  1.0-2*i,

       // R2*ight face2
        1.0, -1.0, -1.0-2*i,
        1.4,  0.0, -1.0-2*i,
        1.4,  0.0,  1.0-2*i,
        1.0, -1.0,  1.0-2*i,

       // Left face1
       -1.4,  0.0, -1.0-2*i,
       -1.4,  0.0,  1.0-2*i,
       -1.0,  1.0,  1.0-2*i,
       -1.0,  1.0, -1.0-2*i,

       // Left face2
       -1.0, -1.0, -1.0-2*i,
       -1.0, -1.0,  1.0-2*i,
       -1.4,  0.0,  1.0-2*i,
       -1.4,  0.0, -1.0-2*i,
    )
  }

  obj.indices = [];
  for (var i = 0; i < obj.num; i++) {
    for(var j = 0; j < 8; j++ )
    {
      obj.indices.push(32*i + 4*j, 32*i + 4*j + 1, 32*i + 4*j + 2, 32*i + 4*j, 32*i + 4*j + 2, 32*i + 4*j + 3);
    }
  }

  obj.faceColors = [
    [1.0,  1.0,  1.0,  0.7],    // Front face: white
    [1.0,  0.0,  0.0,  0.7],    // Back face: red
    [0.0,  1.0,  0.0,  0.7],    // Top face: green
    [0.0,  0.0,  1.0,  0.7],    // Bottom face: blue
    [1.0,  1.0,  0.0,  0.7],    // Right face: yellow
    [1.0,  0.0,  1.0,  0.7],    // Left face: purple
    [1.0,  0.2,  1.0,  0.7],    // Left face: purple
    [0.3,  0.8,  1.0,  0.7],    // Left face: purple
  ];

  obj.colors = [];
  for (var i = 0; i < obj.num; i++) {
    for (var j = 0; j < obj.faceColors.length; ++j) {
      const c = obj.faceColors[(j + Math.floor(Math.random() * 8)) % 8];
      obj.colors = obj.colors.concat(c, c, c, c);
    }
  }
  return obj;
}
