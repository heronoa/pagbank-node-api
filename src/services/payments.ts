import { XMLParser } from "fast-xml-parser";
import rp from "request-promise";

import AxiosAdapter from "../utils/AxiosAdpter";
import C from "../utils/configs";

export default class PagbankService {
  codeRequest = async () => {
    const axios = new AxiosAdapter();
    const data = {
      email: C.sellerEmail,
      token: C.pagSeguroToken,
      currency: "BRL",
      itemId1: "001",
      itemDescription1: "Item 201",
      itemAmount1: "169.90",
      itemQuantity1: "1",
      reference: "124665c23f7896adff508377925",
      senderName: "Natalie Green",
      senderAreaCode: "51",
      senderPhone: "988888888",
      senderEmail: "emaildocomprador@pagseguro.com.br",
      extraAmount: "0.00",
    };

    console.log({ data });

    const response = axios.post(
      `https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=${C.sellerEmail}&token=${C.pagSeguroToken}`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const parser = new XMLParser();
    const responseObj = parser.parse(await response);

    return responseObj;
  };
}
