const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


app.use(express.json());

const router = require("router")


app.use("/api/v1/todos", router);
const db = () => {
    mongoose.connect(process.env.DB_URL);
 };
 db()
 mongoose.connection.once("open", () => {
   console.log("Connected To Database!");
 });

app.listen(process.env.DB_PORT, () => {
  console.log("APP IS LISTENING ON PORT " + process.env.DB_PORT);
});
