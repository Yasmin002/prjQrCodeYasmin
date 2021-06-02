// This is a JavaScript file
$(document).on ("click","#camera", function(){
    navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
});

 function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
  }
  function onFail(message) {
    alert('Erro: ' + message);
  }
});

$(document).on ("click","#codigo", function(){
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
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