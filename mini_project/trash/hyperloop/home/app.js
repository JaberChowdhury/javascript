var head = document.querySelectorAll(".head")[0];
var blocks = document.querySelectorAll(".block")[0];
let word = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let hexcolor = (y) => {
  for (let x = 0; x < word.length / 2 - 2; x++) {
    let n = Math.floor(Math.random() * word.length);
    let hexcode = word[n];
    y = y + hexcode;
  }
  return y;
};
setInterval(hexcolor, 2000);
let color = "#" + hexcolor("");

for (let x = 0; x < 150; x++) {
  var block = document.createElement("div");
  head.appendChild(block);
  block.classList.add("block");
  block.style.backgroundColor = color;
}

const animationBlocks = () => {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-600, 600);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(0.2, 1.3);
    },
    easing: "easeInOutBack",
    duration: 2000,
    opacity: 0.5,
    delay: anime.stagger(10),
    complete: animationBlocks,
  });
};
//animationBlocks();

const animation1 = document.querySelectorAll(".animation1")[0];
function animation1f() {
  for (x = 0; x < 416; x++) {
    const box = document.createElement("div");
    box.classList.add("box");
    animation1.appendChild(box);
  }
}
function animation() {
  anime({
    targets: ".box",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [16, 26], from: "center" }),
    easing: "easeInOutQuad",
    duration: 1000,
    //backgroundColor: ["#c2c2c2","#00ff49","#00f1ff","#ff00c3","#00ffae"],
    loop: true,
    rotate: anime.stagger("5turn"),
    direction: "alternate",
    complete: animation,
  });
}

setTimeout(function () {
  //animationBlocks();
  // animation1f();
  // animation();
}, 4500);

const temp = document.querySelectorAll(".temp")[0];
for (x = 0; x < 720; x++) {
  const box = document.createElement("div");
  box.classList.add("tempbox");
  temp.appendChild(box);
  box.style.backgroundColor = color;
}

const loader = document.querySelectorAll("#preloader")[0];
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.top = "-100vh";
  }, 4000);
});
