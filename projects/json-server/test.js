const data = {
  name: "jaber",
  likes: ["cricket", "football"],
  todo: [
    {
      time: "day",
      job: "study",
    },
    {
      time: "night",
      job: "dinner",
      more: [
        {
          time: "day",
          job: "study",
        },
        {
          time: "night",
          job: "dinner",
        },
      ],
    },
  ],
};

// const generate_routes = (parsed_data) => {
//   let routes = [];
//   //   console.log(typeof parsed_data);
// };

// generate_routes(data);
function generateRoutes(data, prefix = "") {
  let routes = { "/routes": [] };

  function recurse(current, path) {
    // Base case: primitive values (string, number, boolean, null, undefined)
    if (typeof current !== "object" || current === null) {
      routes[path] = current;
      routes["/routes"].push(path);
      return;
    }

    // Handle arrays
    if (Array.isArray(current)) {
      routes[path] = current;
      routes["/routes"].push(path);

      for (let i = 0; i < current.length; i++) {
        recurse(current[i], `${path}/${i}`);
      }
    }
    // Handle objects
    else {
      routes[path] = current;
      routes["/routes"].push(path);

      for (let key in current) {
        if (current.hasOwnProperty(key)) {
          recurse(current[key], `${path}/${key}`);
        }
      }
    }
  }

  recurse(data, prefix || "");

  console.log(routes);
  return routes;
}
generateRoutes(data);
