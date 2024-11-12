const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors(
  (
    origin: ["https://"],
    methods: ["POST, "GET"],
    credentials: true
  )
));

mongoose.connect('mongodb+srv://saikollur18:saikollur<18@cluster0.7bins.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0', {
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
