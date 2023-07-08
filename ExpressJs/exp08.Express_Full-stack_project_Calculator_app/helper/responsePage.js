/**
 *
 * 🫒 Title : responsePage
 * 🫒 Description : responsePage for sending r3sult
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 08 July 2023
 *
 **/

// Dependency
const chalk = require("chalk");

const responsePage = (result) => {
  console.log(chalk.bgGreen.black("ResponsePage has been sended"));

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Result</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css" media="all">
  * {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, Avenir,Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-decoration: none;
  }
  body {
  width: 100%;
  min-height: 100vh;
  background-color: #FDE689;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  }
  .container {
  width: 90%;
  position: relative;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  background-color: white;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  }
  .container > h1 ,
  .container > h1 > strong {
  text-decoration: underline;
  text-align: center;
  margin: 30px 0px 30px 0px;
  }

  nav {
  width: 90%;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  margin: 10px 0px 10px 0px;
  }
  nav > div,
  nav > div > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  }

  nav > div > ul > li {
  padding: 4px 10px 4px 10px;
  font-weight: 700;
  }
  nav,ul,li {
  list-style: none;
  }
  form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
  form > div {
  width: 98%;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  </style>
  </head>
  <body>
  <nav>
  <div>
  <ul>
  <li>
  <a class="Area" href="/">Home</a>
  </li>

  <li>
  <a class="Area" href="/calculator/area">Area</a>
  </li>
  <li>
  <a class="Triangle" href="/calculator/triangle">Triangle</a>
  </li>
  </ul>
  </div>
  </nav>
  <div class="container">
  <h1><strong>Result :</strong>${result}</h1>
  </div>
  </body>
  </html>`;
};

module.exports = responsePage;
