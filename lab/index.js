const box = document.querySelectorAll(".box");


box.forEach((items,index)=>{
  items.style.animationDelay = `${1/10 * index}s`;
});