import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

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

app.use(express.static(path.join(__dirname, "./public")));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT}. Access it at http://localhost:${PORT}`,
  );
});
