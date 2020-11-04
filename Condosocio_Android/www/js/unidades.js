
function Unidades(){

     var email = localStorage.getItem('email');
      
      localStorage.removeItem('senha_adm');
      
     myApp.showIndicator();

      $.ajax({
      url:"https://www.condosocio.com.br/xdk/list_unid.php?email="+email,
      type:'get',
      success: function (result){  
      
       myApp.hideIndicator();


        if (result.cont>1){

           var lista="";
           var i;
                         
                for (i = 0; i < result.cont; i++){    
      
                      lista+='<a href="" onclick="ImgPerfil('+result[i].idusu+',1)" class="close-popup"><p class="row">'+
                      '<button class="col button button-large button-raised button-fill" style="width:100%;background-color:#394A59">'+result[i].nome_cond+' | '+result[i].tipoun+' - '+result[i].logradouro+'</button>'+ 
                      '</p></a>';
                }
                        var popupHTML_msg = '<div class="popup" style="background-color:#0C9484">'+
                              '<div class="content-block-login">'+
                                '<div class="choose_menu" style="margin-top: 50px; border-radius: 10px;padding-top:30px;"><div class="navbarpages" style="background-color:#394A59;"><div class="navbar_page_center" style="margin-right:0px">ESCOLHA A UNIDADE</div></div>'+
                                     lista+                                                 
                                '</div>';

                              
                         

                  myApp.popup(popupHTML_msg);
    } else {

      ImgPerfil(result[0].idusu,0);
    }
    
  }

})

}

Unidades();
