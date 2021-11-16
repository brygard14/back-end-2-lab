const express = require("express");
const cors = require("cors");

// const controller = require("./controller/controller");

const {
  getHouses,
  createHouse,
  deleteHouse,
  updateHouse,
} = require("./controller/controller.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.delete("/api/houses/:id", deleteHouse);
app.put("/api/houses/:id", updateHouse);

app.listen(5555, () => console.log("Server running on port 5555!"));
