async function getData() {
  //let req = await fetch("https://jsonplaceholder.typicode.com/posts");
  let req = await fetch(
    "https://mocki.io/v1/ea4dd910-ad95-4558-be79-d00be239230a"
  );
  let data = await req.json();
  let da = data.messages;
  console.log(da[0]);
}
getData();
