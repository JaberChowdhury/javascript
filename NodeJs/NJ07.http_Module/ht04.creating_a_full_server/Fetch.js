/**
 *
 * 🫒 Title : fetch request to test my apis
 * 🫒 Description : fetching data and sending post requests
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 2 June 2023
 *
 **/

const getData = async () => {
  const req = await fetch("http://localhost:5173/color?length=79");
  const info = await req.json();

  JSON.parse(info).body.data.map((value) => {
    console.log(value);
    console.log(value.color);
  });
};

getData();

/*

const myObject = {
  uuid: crypto.randomUUID(),
  name: "Menma",
  age: 12,
  gender: "girl",
};
const postData = async () => {
  const req = await fetch("http://localhost:5173/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "title": "this is a simple post request",
      "arektaData": "Onek data",
    },
    body: JSON.stringify(myObject),
  });
  const response = await req.json();
  console.log(response);
};

*/
