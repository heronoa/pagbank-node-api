import { Request, Response } from "express";

import PagbankService from "../../services/payments";

export class PaymentController {
  constructor(readonly pagbankService: PagbankService = new PagbankService()) {}

  pay = async (req: Request, res: Response) => {
    const response = await this.pagbankService.pay("hello world");
    return res.status(200).json(response || {});
  };
}
