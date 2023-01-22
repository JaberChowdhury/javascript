var startpoint = 0;
var endpoint = 2000;
var array = [];
for (startpoint; startpoint <= endpoint; startpoint++) {
  array.push("image" + startpoint++ + ".jpg");
}
console.log(array);
