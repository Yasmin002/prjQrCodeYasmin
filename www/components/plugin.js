$(document).on ("click","#codigo", function(){
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("Leitura efetuada com sucesso/n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Ocorreu um erro:" + error);
      },
      {
          preferFrontCamera : false, 
          showFlipCameraButton : true,
          showTorchButton : true, 
          torchOn: true, 
          saveHistory: true, 
          prompt : "Place a barcode inside the scan area", 
          resultDisplayDuration: 500,
          formats : "QR_CODE,PDF_417, CODE_39", 
          orientation : "landscape", 
          disableAnimations : true, 
          disableSuccessBeep: false 
      }
  );
});
