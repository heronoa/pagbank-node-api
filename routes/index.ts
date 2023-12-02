import express, { Response } from "express";

const router = express.Router();

router.get("/ping", (res: Response) => {
  return res.status(200).json({ response: "pong" });
});

export default router;
