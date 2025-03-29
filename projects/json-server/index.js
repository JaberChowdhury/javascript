import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { utils } from "./utils/filesystem_utility.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data.json");

const data = await utils.readFile(dataPath);

// send response
const sendJsonResponse = async (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(data ? JSON.stringify(data) : "");
};

/*









*/

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

  // console.log(routes);
  return routes;
}
/*













*/

// request handler
const handleRequest = async (req, res) => {
  const route = req.url;
  const method = req.method;

  if (route == "/" && method == "GET") {
    // sendJsonResponse(res, 200, data);
    sendJsonResponse(res, 200, generateRoutes(data));
  }

  console.log({ route, method });
};

// create a server
const server = http.createServer(handleRequest);
server.listen(1227, () => {
  console.log("server is running on port http://localhost:1227");
});
