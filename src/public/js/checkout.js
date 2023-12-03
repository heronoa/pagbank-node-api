async function pagar(e) {
  //solicitando o codigo da transação ao backend
  await $.post(`/getcode`, "", function (code) {
    console.log("[POST START]")
    let callback = {
      success: function (transactionCode) {
        console.log("sucesso:", transactionCode);
      },
      abort: function () {
        console.log("abortado");
      }
    };
    let isOpenLightbox = PagSeguroLightbox(code, callback);
    // Redireciona o comprador, caso o navegador não tenha suporte ao Lightbox
    if (!isOpenLightbox) {
      location.href = "https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=" + code;
      console.log("Redirecionamento")
    }
    console.log("[POST END]")

  })
  e.submit();
}