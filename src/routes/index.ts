import express, { Response } from "express";

import { LightHouseController } from "../controllers/Pagbank/LightHouseController";
import { PaymentController } from "../controllers/Pagbank/PaymentController";

const router = express.Router();

router.get("/ping", (_req, res: Response) => {
  return res.status(200).json({ response: "pong" });
});

const paymentController = new PaymentController();
const lightHouseController = new LightHouseController();

router.get("/pagseguro/payment", paymentController.pay);
router.get("/pagseguro/lighthousecode", lightHouseController.getCode);

export default router;
