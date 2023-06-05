/**
 *
 * 🫒 Title : Generate html
 * 🫒 Description : Generate html with color in server (SSR)
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 5 June 2023
 *
 **/

// Dependency

// Module scaffolding
const app = {};

// generate Color
app.generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const or = 255 - r;
  const g = Math.floor(Math.random() * 255);
  const og = 255 - g;
  const b = Math.floor(Math.random() * 255);
  const ob = 255 - b;
  return {
    c1: `rgb(${r},${g},${b})`,
    c2: `rgb(${or},${og},${ob})`,
  };
};

// generate Tamplate
app.template = (content = "dataLength = 10") => {
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>This file was generated from server</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
          ${content}
          </body>
        </html>
        `;
};

// generate Data (ssr)
app.data = (dataLength = 10) => {
  let content = "";
  for (let i = 0; i < dataLength; i++) {
    let code = app.generateColor();
    let color = code.c1;
    let bgColor = code.c2;
    content += `
    <div
    style="color:${color}; background-color:${bgColor}"
    >${color}</div>
    `;
  }
  const final = app.template(content);
  return final;
};

// count time

// export this module
module.exports = app.data;
