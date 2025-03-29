const http = require("http");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "data.json");

// Helper functions
function readJsonFile() {
  try {
    const data = fs.readFileSync(dataPath, "utf8");
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("[ERROR]", error.message);
    return {};
  }
}

function writeJsonFile(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
}

// Main request handler
function handleRequest(req, res) {
  const method = req.method;
  const url = req.url;

  // Special endpoint to list all routes
  if (url === "/routes" && method === "GET") {
    const allRoutes = findAllRoutes(jsonData);
    return sendJsonResponse(res, 200, allRoutes);
  }

  // Handle different methods
  switch (method) {
    case "GET":
      handleGetRequest(url, res);
      break;
    case "POST":
      handlePostRequest(url, req, res);
      break;
    case "PUT":
      handlePutRequest(url, req, res);
      break;
    case "PATCH":
      handlePatchRequest(url, req, res);
      break;
    case "DELETE":
      handleDeleteRequest(url, res);
      break;
    default:
      sendJsonResponse(res, 405, { error: "Method Not Allowed" });
  }
}

// GET - Retrieve data at path
function handleGetRequest(url, res) {
  try {
    const result = getDataAtPath(jsonData, url);
    if (result !== undefined) {
      sendJsonResponse(res, 200, result);
    } else {
      sendJsonResponse(res, 404, { error: "Not Found" });
    }
  } catch (err) {
    sendJsonResponse(res, 400, { error: err.message });
  }
}

// POST - Create new item (works for arrays and objects)
function handlePostRequest(url, req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const newItem = JSON.parse(body);
      const { parent, key } = getParent(jsonData, url);

      if (parent === undefined) {
        return sendJsonResponse(res, 404, { error: "Parent not found" });
      }

      if (Array.isArray(parent)) {
        parent.push(newItem);
      } else if (typeof parent === "object" && parent !== null) {
        if (!key) {
          return sendJsonResponse(res, 400, {
            error: "Missing key for object",
          });
        }
        parent[key] = newItem;
      } else {
        return sendJsonResponse(res, 400, {
          error: "Can only add to arrays or objects",
        });
      }

      writeJsonFile(jsonData);
      sendJsonResponse(res, 201, newItem);
    } catch (err) {
      sendJsonResponse(res, 400, { error: "Invalid JSON" });
    }
  });
}

// PUT - Replace entire value at path
function handlePutRequest(url, req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const newValue = JSON.parse(body);
      const { parent, key } = getParent(jsonData, url);

      if (parent === undefined) {
        return sendJsonResponse(res, 404, { error: "Parent not found" });
      }

      if (key) {
        parent[key] = newValue;
      } else {
        // Handle root replacement
        if (url === "/") {
          Object.keys(jsonData).forEach((k) => delete jsonData[k]);
          Object.assign(jsonData, newValue);
        } else {
          return sendJsonResponse(res, 400, { error: "Invalid path" });
        }
      }

      writeJsonFile(jsonData);
      sendJsonResponse(res, 200, newValue);
    } catch (err) {
      sendJsonResponse(res, 400, { error: "Invalid JSON" });
    }
  });
}

// PATCH - Update partial value (only for objects)
function handlePatchRequest(url, req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const updates = JSON.parse(body);
      const target = getDataAtPath(jsonData, url);

      if (target === undefined) {
        return sendJsonResponse(res, 404, { error: "Not Found" });
      }

      if (
        typeof target !== "object" ||
        target === null ||
        Array.isArray(target)
      ) {
        return sendJsonResponse(res, 400, {
          error: "Can only patch objects",
        });
      }

      Object.assign(target, updates);
      writeJsonFile(jsonData);
      sendJsonResponse(res, 200, target);
    } catch (err) {
      sendJsonResponse(res, 400, { error: "Invalid JSON" });
    }
  });
}

// DELETE - Remove value at path
function handleDeleteRequest(url, res) {
  try {
    const { parent, key } = getParent(jsonData, url);

    if (parent === undefined) {
      return sendJsonResponse(res, 404, { error: "Parent not found" });
    }

    if (key) {
      if (parent[key] === undefined) {
        return sendJsonResponse(res, 404, { error: "Not Found" });
      }

      const deleted = parent[key];
      if (Array.isArray(parent)) {
        parent.splice(key, 1);
      } else {
        delete parent[key];
      }

      writeJsonFile(jsonData);
      sendJsonResponse(res, 200, deleted);
    } else {
      // Handle root deletion
      if (url === "/") {
        const deleted = { ...jsonData };
        Object.keys(jsonData).forEach((k) => delete jsonData[k]);
        writeJsonFile(jsonData);
        sendJsonResponse(res, 200, deleted);
      } else {
        sendJsonResponse(res, 400, { error: "Invalid path" });
      }
    }
  } catch (err) {
    sendJsonResponse(res, 400, { error: err.message });
  }
}

// Helper: Get data at specific path
function getDataAtPath(data, path) {
  const parts = path.split("/").filter((p) => p !== "");
  let current = data;

  for (const part of parts) {
    if (current[part] === undefined) {
      return undefined;
    }
    current = current[part];
  }
  return current;
}

// Helper: Get parent object and property key
function getParent(data, path) {
  const parts = path.split("/").filter((p) => p !== "");
  if (parts.length === 0) return { parent: data };

  let current = data;
  for (let i = 0; i < parts.length - 1; i++) {
    if (current[parts[i]] === undefined) {
      return { parent: undefined };
    }
    current = current[parts[i]];
  }

  return {
    parent: current,
    key: parts[parts.length - 1],
  };
}

// Helper: Find all available routes
function findAllRoutes(data, prefix = "") {
  let routes = [];

  if (typeof data !== "object" || data === null) {
    return routes;
  }

  for (const key in data) {
    const path = prefix + "/" + key;
    routes.push(path);

    if (typeof data[key] === "object" && data[key] !== null) {
      routes = routes.concat(findAllRoutes(data[key], path));
    }
  }

  return routes;
}

// Helper: Send JSON response
function sendJsonResponse(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data, null, 2));
}

// Initialize
let jsonData = readJsonFile();
const server = http.createServer(handleRequest);
server.listen(1227, () => {
  console.log("[INFO] Server running on http://localhost:1227");
});
