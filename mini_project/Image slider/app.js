// image slider project
let image = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.png"];
let count = 0 ;
let images = document.querySelector ("img");
//setInterval (next,3000);
function next() {
  count ++;
  if (count>=image.length) {
     count = 0;
     images.src = image[count];
  }
  else {
     images.src = image[count];
     /*
     count>=image.length এর আগে পর্যন্ত  else statement
     কাজ করবে। 
     */
  }
  console.log ("count++☃️");
}
function prev() {
  count --;
  if (count<0) {
     count = image.length -1;
     images.src = image[count];
  }
  else {
     images.src = image[count];
  }
  console.log ("count--🔥");
}
setInterval(()=>{
  prev();
},100)