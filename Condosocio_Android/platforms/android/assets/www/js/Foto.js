/**
* @author Roni
* @email roni@bananadev.com.br
*/

"use strict";

var Foto = {
  pictureSource : null,
  destinationType: null,
  imageData: null,
  tipoImagem: '',

  capturePhoto: function(quality,targetWidth,targetHeight){
  
    var cam = myApp.device.os === 'android' ? navigator.camera.DestinationType.FILE_URI :
        navigator.camera.DestinationType.NATIVE_URI;
        
    navigator.camera.getPicture(Foto.onSuccess, Foto.onFail, 
        { 
          quality: quality,
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          allowEdit: true,
          destinationType: cam,
          correctOrientation: true,
          sourceType: navigator.camera.PictureSourceType.CAMERA  
        });
  },

  captureGaleria: function(quality,targetWidth,targetHeight){
  
    var cam = myApp.device.os === 'android' ? navigator.camera.DestinationType.FILE_URI :
        navigator.camera.DestinationType.NATIVE_URI;

        navigator.camera.getPicture(Foto.onSuccess, Foto.onFail,{
                quality: quality,
                targetWidth: targetWidth,
                targetHeight: targetHeight,
                allowEdit: true,
                destinationType: cam,
                correctOrientation: true,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY              
              });

  },

  uploadPhoto: function(UploadImagem){

    myApp.showPreloader('Carregando...'); 

    var fileURI = Foto.imageData;

    if (fileURI!=null){
   
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    var params = new Object();    
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();

    ft.upload(fileURI, encodeURI("https://www.condosocio.com.br/xdk/"+UploadImagem), 

     
      function (r){

        if(myApp.device.os != 'android'){
          var smallImage = Foto.imageData.replace("assets-library://", "cdvfile://localhost/assets-library/");
        }else{
          var smallImage = Foto.imageData;
        }
        //$('#imgperfil').html('<img src="'+smallImage+'" class="imgperfil" width="60" height="60"/> </div> '); 
        myApp.hidePreloader();
        myApp.alert('Sua autorização de saida foi enviada com sucessso à portaria!','CondoSócio');
        
         mainView.router.loadPage('acesso.html');

    $('#tiposai').val(0);
    $('#nome').val('');
    $('#obs').val('');

        Foto.imageData=null;
       
        Foto.clearCamera(); 

    

      }, function (error){
       myApp.hidePreloader();
        console.log(error);
         
         myApp.alert('Ops, ocorreu algum erro para salvar a sua imagem','Alerta');
      }, options);

  } else {
    myApp.hidePreloader();

    $.get('https://www.condosocio.com.br/xdk/'+UploadImagem);

    myApp.alert('Sua autorização de saida foi enviada com sucessso à portaria!','CondoSócio');

    mainView.router.loadPage('acesso.html');

    $('#tiposai').val(0);
    $('#nome').val('');
    $('#obs').val('');
    
           Foto.clearCamera(); 

          
    } 
  },


    uploadPhotoOco: function( UploadImagem , nome ){

    myApp.showPreloader('Carregando...');
      
    var fileURI = Foto.imageData;

if (fileURI!=null){

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    var params = new Object();    
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();

    ft.upload(fileURI, encodeURI("https://www.condosocio.com.br/xdk/"+UploadImagem), 

     
      function (r){

        if(myApp.device.os != 'android'){
          var smallImage = Foto.imageData.replace("assets-library://", "cdvfile://localhost/assets-library/");
        }else{
          var smallImage = Foto.imageData;
        }
        //$('#imgperfil').html('<img src="'+smallImage+'" class="imgperfil" width="60" height="60"/> </div> '); 
        myApp.hidePreloader();
        myApp.alert('Sua ocorrência foi enviada com sucessso à administração!',nome);
         
          mainView.router.loadPage('ocorrencias.html');

    $('#registro_oco').val('');
    $('#tituloco').val('');
    $('#dataoco').val('');
    $('#horaoco').val('');
    $('#descricaoco').val('');
   

       Foto.imageData=null;
       
        Foto.clearCamera(); 

      


      }, function (error){
       myApp.hidePreloader();
        console.log(error);
         
        myApp.alert('Ops, ocorreu algum erro para salvar a sua imagem','Alerta');
      }, options);

  } else {
   myApp.hidePreloader();

    $.get('https://www.condosocio.com.br/xdk/'+UploadImagem);
  myApp.alert('Sua ocorrência foi enviada com sucessso à administração!',nome, function () {
                      
          mainView.router.loadPage('ocorrencias.html');

    $('#registro').val('');
    $('#tituloco').val('');
    $('#dataoco').val('');
    $('#descricaoco').val('');
    $('#imagem_oco').html('<a href="" class="button-outline button form_submit" id="img_oco">ANEXAR IMAGEM</a>');
  
    
                      
                                  });
    } 
  },

  uploadPhotoPerfil: function(UploadImagem,nome){
  myApp.showPreloader('Aguarde...');
    var fileURI = Foto.imageData;

if (fileURI!=null){
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    var params = new Object();    
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();

    ft.upload(fileURI, encodeURI("https://www.condosocio.com.br/xdk/"+UploadImagem), 

     
      function (r){

        if(myApp.device.os != 'android'){
          var smallImage = Foto.imageData.replace("assets-library://", "cdvfile://localhost/assets-library/");
        } else {
          var smallImage = Foto.imageData;
        }
        myApp.hidePreloader();
        $('#imgperfil').html('<img src="'+smallImage+'" class="imgperfil" width="80" height="80"/> </div> '); 
        $(".foto_perfil").html('<img src="'+smallImage+'" alt="" height="90" width="90" class="imgperfil">');
        
        Foto.clearCamera(); 

        Foto.imageData=null;
       
        myApp.alert('Seu perfil foi atualizado com sucesso!',nome);

           mainView.router.loadPage('menu2.html');

      
      }, function (error){

        myApp.hidePreloader();

        console.log(error);

        myApp.alert('Ops, ocorreu algum erro para salvar a sua imagem',nome);
      }, options);
   } else {
     myApp.hidePreloader();

      $.get('https://www.condosocio.com.br/xdk/'+UploadImagem);
     myApp.alert('Seu perfil foi atualizado com sucesso!',nome, function () {
                      
          
          mainView.router.loadPage('menu2.html');

      
      
                      
      });
    } 
},


  opcaoCamera: function(quality,targetWidth,targetHeight){
    
    var buttons = [
    {
            text: 'Adicione Imagem',
            label: true
        },
         {
            text: "<span class='textcam'>Câmera </span><img src='images/icons/black/camera.png' class='opcamera'>",
            onClick: function () {
                Foto.capturePhoto(quality,targetWidth,targetHeight);
            }
        },

        {
            text: "<img src='images/icons/black/galeria.png' class='opcamera'><span class='textcam'>  Galeria</span>",
            onClick: function () {
                Foto.captureGaleria(quality,targetWidth,targetHeight);
            }
        },
        ];
        var buttons2 = [
        {
            text: 'Cancelar',
            color: 'red'
        }
    ];
    var groups = [buttons, buttons2];
    myApp.actions(groups);
  },
 
 
  onSuccess: function (imageData){

    Foto.imageData = imageData;
    var smallImage = imageData; 

    if(myApp.device.os != 'android'){
      smallImage = smallImage.replace("assets-library://", "cdvfile://localhost/assets-library/");      
    }  

  //$$('#imgperfil').html('<img src="'+smallImage+'" class="imgperfil" width="60" height="60"/> </div> '); 

  $$(".foto_perfil").html('<img src="'+smallImage+'" alt="" class="imgperfil" align="center" width="90" height="90">');
  $$("#img_small_aut").html('<div class="form_input"><img src="'+smallImage+'" alt="" height="60" width="60"/><span> Imagem Selecionada</span></div>');
  $$("#imagem_oco").html('<div class="form_input"> <a href="" onclick="Foto.opcaoCamera(50,500,500)"><img src="'+smallImage+'" alt=""  height="60" width="60"/></a><span> Imagem Selecionada</span></div>');
  },

  onFail: function(message){
    myApp.alert('Imagem não selecionada!','Alerta!');
  },

  clearCamera: function(){
    navigator.camera.cleanup();
  }

}
