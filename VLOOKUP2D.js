function transposeArray(field) {
  return (field[0].map((_, colIndex) => field.map(row => row[colIndex]))[0])
}

function LOOKUP2D(vkeys, vfields, vkeys2, range) {
  /*
  usage
  
  Compute range:
  vkeys: search key column
  vfields: header row
  
  Data range:
  vkeys2: key column at the data range
  range: data range. first row is the lookup header row
  */

  vkeys.shift();
  keys = trimList(transposeArray(vkeys));
  fields = trimList(vfields[0]);
  fields.shift();
  
  keys2 = trimList(transposeArray(vkeys2));
  headers = trimList(range[0]);
  indexes = [];
  results = [];

  for (var i = 0; i < fields.length; i++) {
    indexes[i] = headers.indexOf(fields[i]);
  }

  jxx = [];
  for (var j = 0; j < keys.length; j++) {
    row = [];
    if (keys[j] == '') { jx = -1 } else {
      jx = keys2.indexOf(keys[j]);
    }
    jxx.push(jx);
  }
  for (var j = 0; j < keys.length; j++) {
    row = [];
    for (var i = 0; i < indexes.length; i++) {
      if (jxx[j] == -1) {
        value = null;
      }
      else {
        value = range[jxx[j]][indexes[i]];
      }
      row.push(value);
    }
    results.push(row);
  }

  return (results);
}
