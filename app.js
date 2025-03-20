const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));

const PORT = 8000;

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバー起動した"));
  } catch (err) {
    console.log(err);
  }
};

start();
