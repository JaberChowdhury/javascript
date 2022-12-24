  let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  let populate = (a) => {
    for ( let i = 0; i < 6; i++ ) {
      let x = Math.round( Math.random() * 14 );
      let y = hexValues[x];
      a += y;
    }
   console.log(a);
    return a;
  };
populate(" ");
