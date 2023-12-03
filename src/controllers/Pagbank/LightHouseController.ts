import { Request, Response } from "express";

import PagbankService from "../../services/payments";

export class LightHouseController {
  constructor(readonly pagbankService: PagbankService = new PagbankService()) {}

  getCode = async (_req: Request, res: Response) => {
    const response = await this.pagbankService.codeRequest();
    return res.status(200).json(response || {});
  };
}
