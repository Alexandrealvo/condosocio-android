document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("d2a1bd8c-4a9a-4355-ac9b-e52691e7de23")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

 


}, false);

// sample index.js
var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('resume', this.onDeviceResume, false);
  },
  onDeviceReady: function() {
    app.handleBranch();
  },
  onDeviceResume: function() {
    app.handleBranch();
  },
  handleBranch: function() {
    // Branch initialization
    Branch.initSession(function(data) {
      if (data['+clicked_branch_link']) {
        // read deep link data on click
        alert('Deep Link Data: ' + JSON.stringify(data));
      }
    });
  }
};

app.initialize();


$(document).ready(function(){

 var s=navigator.onLine;
 if(s==false){
   myApp.alert('Sem conexão com a internet.','<div style="color:red">ALERTA!</div>', function () {
   },false);

  } else {

      	var login = localStorage.getItem('login');
      	var senha = localStorage.getItem('senha');
             
         myApp.showIndicator();

      	if ((login!=null && senha!=null) ||  (login!="" && senha!="")){

      		$.ajax({
      			url:"https://www.condosocio.com.br/xdk/login_2.php",
      			type:"post",			
      			data: "login="+login+"&senha="+senha,	

         	success: function (result){
         
         myApp.hideIndicator();
                    
                   if(result.valida==1){	
 
                          localStorage.setItem('email',result.email);
                          
                          window.location.href = "menu2.html";
                           
                          Unidades();

                          //
                          //window.location.href = "menu2.html";


                          /*document.addEventListener('deviceready', function () {
          
                          window.plugins.OneSignal.sendTags({idcond: result.idcond, idusu: result.idusu,nome:result.nome,tipousuario:result.tipousuario,genero:result.genero,logradouro:result.logradouro});


                          }, false);*/
                          //return false;

                   }            
            
            } 
		     })
		  } //if login
    }  // Else 
});




