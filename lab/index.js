const container = document.querySelectorAll(".container")[0];

const rgb = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

let arr = "";
for (let i = 0; i < 360; i++) {
  let x = Math.tan(i);
  arr += `<div class="w-[${x}px] h-[${x}px] p-2 rounded-full bg-[${rgb()}] bg-rose-500"></div> `;
}

container.innerHTML = arr;
