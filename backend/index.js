import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.ORIGIN],
  })
);

app.get("/me", (req, res) => {
  res.json({ success: true, message: "Kashinath" });
});

app.get("/", (req, res) => {
  res.send("Api working");
});

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Connected");
//   })
//   .catch((err) => {
//     console.log("faild");
//     console.error(err);
//   });

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
