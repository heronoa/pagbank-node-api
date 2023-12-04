import express, { Response } from "express";

import { LightboxController } from "../controllers/Pagbank/LightboxController";

const router = express.Router();

router.get("/ping", (_req, res: Response) => {
  return res.status(200).json({ response: "pong" });
});

const lightboxController = new LightboxController();

router.post("/pagseguro/lightboxcode", lightboxController.getCode);

export default router;
