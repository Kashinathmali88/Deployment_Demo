import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./db.js";
import { add, get } from "./controller.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.ORIGIN],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/me", get);
app.post("/add", add);

app.get("/", (req, res) => {
  res.send("Api working");
});

dbConnect();
app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
