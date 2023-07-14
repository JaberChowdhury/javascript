const error = (message) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
  <title>${message}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="http://localhost:4000/api/v4/css" type="text/css" media="all" />
  </head>
  <body>
  <div
  class="bg-orange-200 w-full min-h-screen flex justify-center items-center flex-col relative"
  >
  <div class="bg-red-400 shadow-md text-center w-4/5 p-2 rounded flex justify-center items-center relative">
  <strong>${message}</strong>
  </div>
  </div>
  </body>
  </html>
  `;
};

module.exports = error;
