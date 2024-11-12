const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/registers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
