import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { renderFile } from "ejs";
import express from "express";

import { errorMiddleware } from "./middlewares/errorMiddleware";
import router from "./routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3333;

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());

app.use("/api/v1", router);

app.get("/status", (req, res) => {
  const nodeVersion = process.version;

  const tempObj = {
    message: "Server is running",
    data: {
      status: "OK",
      node: nodeVersion,
    },
  };

  res.status(200).send(tempObj);
});

app.set("view engine", "html");
app.engine("html", renderFile);
app.set("views", "./views");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  return res.render("index");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT}. Access it at http://localhost:${PORT}`,
  );
});
