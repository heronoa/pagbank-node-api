import express, { Response } from "express";

import { LightHouseController } from "../controllers/Pagbank/LightHouseController";

const router = express.Router();

router.get("/ping", (_req, res: Response) => {
  return res.status(200).json({ response: "pong" });
});

const lightHouseController = new LightHouseController();

router.get("/pagseguro/lighthousecode", lightHouseController.getCode);
router.post("/pagseguro/lighthousecode", lightHouseController.getCode);

export default router;
