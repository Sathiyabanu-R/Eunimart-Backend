import express from "express";
import mongoose from "mongoose";
import { PORT, mongoUrl } from "./Const.js";
import routes from "./Routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://sathiyabanur2020cse:Banu123@cluster0.czbu5h1.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});