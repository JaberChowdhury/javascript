/**
 *
 * 🫒 Title : fetch request to test my apis
 * 🫒 Description : fetching data and sending post requests
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 2 June 2023
 *
 **/

const getData = async () => {
  const req = await fetch("http://localhost:5173/color?length=80");
  const data = await JSON.stringify(req.json());
  console.log(data);
};

getData();
