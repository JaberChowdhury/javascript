const rgb = () => {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var o = Math.random() * 1;
  var rgb = `rgba(${r},${g},${b},${o})`;
  console.log(rgb);
};
setInterval(rgb, 500);
