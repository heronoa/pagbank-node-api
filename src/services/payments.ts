import rp from "request-promise";
import { parseString } from "xml2js";
import api from "api";
import C from "../utils/configs";
import AxiosAdapter from "../utils/AxiosAdpter";

export default class PagbankService {
  pay = function* (userForm: any) {
    console.log({ userForm });

    try {
      // Recupere os dados do seu usuário, recomendo o squel para as           consultas sql
      const options = {
        method: "POST",
        uri: "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/",
        form: {
          email: "heron.amaral@gmail.com",
          token:
            "87032131-a257-4e9e-8a21-af45032ab427cb0a349d48f3bac15f50b82950f9ac913b4c-9f1b-47ea-8aa3-5257e39f0eb9",
          currency: "BRL",
          itemId1: "0001",
          itemDescription1: "PRODUTO 1",
          itemAmount1: "10.00", // Sempre com decimais
          itemQuantity1: "1",
          itemWeight1: "100",
          itemId2: "0002",
          itemDescription2: "PRODUTO 2",
          itemAmount2: "20.00", // Sempre com decimais
          itemQuantity2: "1",
          itemWeight2: "750",
          reference: "REF1234",
          senderName: userForm.name,
          senderAreaCode: userForm.areaCode,
          senderPhone: userForm.phone,
          senderEmail: userForm.phone.email,
          shippingType: "FREE", // Formas de envio, consulte a documentacao
          shippingAddressStreet: userForm.adress,
          shippingAddressNumber: userForm.adressNumber,
          shippingAddressComplement: userForm.addressComplement,
          shippingAddressDistrict: userForm.addressDistrict,
          shippingAddressPostalCode: userForm.postalCode,
          shippingAddressCity: userForm.city,
          shippingAddressState: userForm.state,
          shippingAddressCountry: "BRA",
        },
      };
      let response = {};
      yield rp(options)
        .then(function (xml) {
          parseString(xml, (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            response = result;
          });
        })
        .catch(function (err) {
          response = err;
          throw new Error("Erro no pagamento!");
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  codeRequest = () => {
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

    return response;
  };
}
