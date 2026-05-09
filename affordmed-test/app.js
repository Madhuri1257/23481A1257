const express = require("express");

const Log = require("./middleware/logger");

const app = express();

app.use(express.json());

/* Home Route */
app.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "handler",
    "Home route accessed"
  );

  res.send("Home Route");
});

/* Users Route */
app.get("/users", async (req, res) => {

  await Log(
    "backend",
    "info",
    "controller",
    "Fetched users successfully"
  );

  res.json([
    {
      id: 1,
      name: "Madhuri"
    }
  ]);
});

/* Error Route */
app.get("/error", async (req, res) => {

  await Log(
    "backend",
    "error",
    "db",
    "Database connection failed"
  );

  res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
  console.log("Server Started");
});