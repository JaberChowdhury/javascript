/**
 *
 * 🫒 Title : fetching data
 * 🫒 Description : fetching data from api that I created
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

const getData = async () => {
  const req = await fetch("http://localhost:5173/color?w=100");
  const data = await req.json();
  console.log(data);
};

getData();
