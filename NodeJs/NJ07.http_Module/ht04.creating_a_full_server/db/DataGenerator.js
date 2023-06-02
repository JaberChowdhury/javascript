/**
 *
 * 🫒 Title : dummy data
 * 🫒 Description : This dummy data is generated for response
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 2 June 2023
 *
 **/
const generateColor = () => {
  const code = [..."0123456789abcdef"];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * code.length);
    color += code[number];
  }
  return color;
};

const data = (totalLength = 1) => {
  let dataArray = [];
  for (let i = 0; i < totalLength; i++) {
    dataArray.push({
      uuid: crypto.randomUUID(),
      color: generateColor(),
    });
  }
  return JSON.stringify({
    head: {
      title: "This demo data is generated from ./db",
      description: "Nothing interesting here",
      "content-type": "application/json",
      totalLength,
    },
    body: {
      data: dataArray,
    },
  });
};

module.exports = data;
