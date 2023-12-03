import dotenv from "dotenv";

dotenv.config();

const C = {
  pagSeguroToken: process.env.PAGSEGURO_SANDBOX_TOKEN,
  sellerEmail: process.env.PAGSEGURO_SELLER_EMAIL,
};

export default C;
