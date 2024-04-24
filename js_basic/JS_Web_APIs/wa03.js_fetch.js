// basic structure
/*

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}

*/

async function getinfo() {
  let data = await fetch(
    "https://mocki.io/v1/1af210dc-c1ba-46fb-b74f-ede5695156f0",
  );
  let json = await data.json();
  console.log([...json].length);
}
getinfo();
