var myApp = new Framework7({
                           animateNavBackIcon: true,
                           precompileTemplates: true,
                           swipeBackPage: false,
                           swipeBackPageThreshold: 1,
                           swipePanel: "left",
                           swipePanelCloseOpposite: true,
                           pushState: true,
                           pushStateRoot: undefined,
                           pushStateNoAnimation: false,
                           pushStateSeparator: '#!/',
                           template7Pages: true
                           
                           });

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
                             dynamicNavbar: true
                             });


$$(document).on('pageInit', function (e) {
                
     /*desabilita teclado input date
    $('input[type=date]').focus(function() {
      this.blur();
    });
    $('input[type=time]').focus(function() {
      this.blur();
    });*/
    
   
    /* CALENDÁRIO JQUERY UI

    $(function() {
        
        $( ".calendario" ).datepicker({
        minDate: 0
        });
        
        
    });
    
    $(document).ready(function(){
        $('.timepicker').timepicker({});
    });*/
                var nome= localStorage.getItem('nome');
                var nomecond= localStorage.getItem('nomecond');
                var senha= localStorage.getItem('senha');
                var email= localStorage.getItem('email');
                var senha_adm= localStorage.getItem('senha_adm');
                
                $('#email_adm').val(email);
                $('#senha_adm').val(senha_adm);
                
                
               
                //$('#iframe_adm').html('<iframe class="external" src="https://servcon.superlogica.net/clients/areadocondomino?email='+email+'" height="800" width="100%" frameborder="0" ></iframe>');
                
                
                var logocond = localStorage.getItem('logocond');
    
                $('#imgcond').html('<img src="https://condosocio.com.br/acond/downloads/logocondo/'+logocond+'" class="img1"/>');
                
                
                setTimeout(function(){
                           $("#dedo").html('');
                           }, 18000);
                
                
                
               /* setInterval(function () {
                            
                            var s=navigator.onLine;
                            
                            if(s==false){
                                
                            myApp.alert('Sem conexão com a internet!','<div style="color:red">ALERTA!</div>', function () {
                                        window.location.href = "index.html";
                                        });
                            }
                            
                            Verificar_Session();
                            
                            AtualizarBadges();
                            
                            
                            },10000); */
                
                Verificar_Celular_Usuario();
                
                
                // FUNCOES PARA INSERIR DATA E HORA LOCAL
                
                function formatDate(date) {
                var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
                hora = d.getTime();
                
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                
                return [day,month,year].join('-');
                
                }
                
                function novaHora() {
                function pad(s) {
                return (s < 10) ? '0' + s : s;
                }
                var date = new Date();
                return [date.getHours(), date.getMinutes()].map(pad).join(':');
                }
                
                function formatDate_hoje(date) {
                var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
                hora = d.getTime();
                
                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;
                
                return [day, month, year].join('/');
                
                }
                
                $('#dataoco').val(formatDate(new Date()));
                $('#horaoco').val(novaHora());
                
                var dt_hoje = (moment(formatDate( new Date() ) ) ).format('lll');
                
                $(document).ready(function(){
                                  function onAddTag(tag) {
                                  alert("Add Convidado: " + tag);
                                  }
                                  function onRemoveTag(tag) {
                                  alert("Remova Convidado a tag: " + tag);
                                  }
                                  
                                  function onChangeTag(input,tag) {
                                  alert("Altere Convidado: " + tag);
                                  }
                                  
                                  $(function() {
                                    
                                    $('#tags_1').tagsInput({width:'auto'});
                                    
                                    
                                    })
                                  $('#preload').removeClass("preload").hide;
                                  });
                
                
    

                
                $(document).ready(function(){
                                  
                                  $('a.list_ache').on('click',function(){
                                                      
                                                      
                                                      var tema = $(this).data('tema');
                                                      
                                                      myApp.showIndicator();
                                                      
                                                      $.ajax({      //Função AJAX
                                                             url:"https://www.condosocio.com.br/xdk/Pesq_Ativ_Ache.php?tema="+tema,
                                                             type:'get',
                                                             success: function(data) {
                                                             
                                                             myApp.hideIndicator();
                                                             
                                                             var myList = myApp.virtualList('.ativ_lista', {
                                                                                            items: data,
                                                                                            // Template 7 template to render each item
                                                                                            template: '<li class="item-content" style="margin-bottom:10px;margin-top:10px" >' +
                                                                                            '<a href="acheaqui.html" data-idativ="{{id}}" class="filtro_forn list_ativ item-link item-content">'+
                                                                                            
                                                                                            '<div class="item-inner" style="padding-bottom:5px">'+
                                                                                            '<div class="item-title-row">'+
                                                                                            '<div class="item-title buscar" style="margin-left:10px"><h1>{{atividade}}<h1></div>'+
                                                                                            '</div>'+
                                                                                            '</div >'+
                                                                                            '</a>'+
                                                                                            '</li>',
                                                                                            })
                                                             
                                                             
                                                             }
                                                             })
                                                      
                                                      })
                                  
                                  });
                
                
                
                
                $(document).ready(function(){
                                  
                                  $('.vote label i.fa').on('click mouseover',function(){
                                                           
                                                           var submit = document.getElementById('submit');
                                                           submit.disabled = false;
                                                           // remove classe ativa de todas as estrelas
                                                           $('.vote label i.fa').removeClass('active');
                                                           // pegar o valor do input da estrela clicada
                                                           var val = $(this).prev('input[type=radio]').val();
                                                           //percorrer todas as estrelas
                                                           $('.vote label i.fa').each(function(){
                                                                                      /* checar de o valor clicado é menor ou igual do input atual
                                                                                       *  se sim, adicionar classe active
                                                                                       */
                                                                                      var $input = $(this).prev('input[type=radio]');
                                                                                      if($input.val() <= val){
                                                                                      $(this).addClass('active');
                                                                                      }
                                                                                      });
                                                           
                                                           });
                                  //Ao sair da div vote
                                  $('.vote').mouseleave(function(){
                                                        //pegar o valor clicado
                                                        var val = $(this).find('input:checked').val();
                                                        //se nenhum foi clicado remover classe de todos
                                                        
                                                        if(val == undefined || val==0 ){
                                                        submit.disabled = true;
                                                        $('.vote label i.fa').removeClass('active');
                                                        } else {
                                                        //percorrer todas as estrelas
                                                        $('.vote label i.fa').each(function(){
                                                                                   /* Testar o input atual do laço com o valor clicado
                                                                                    *  se maior, remover classe, senão adicionar classe
                                                                                    */
                                                                                   var $input = $(this).prev('input[type=radio]');
                                                                                   if($input.val() > val){
                                                                                   $(this).removeClass('active');
                                                                                   } else {
                                                                                   $(this).addClass('active');
                                                                                   }
                                                                                   });
                                                        }
                                                        
                                                        });
                                  });
                
                $(document).ready(function(){
                                  $('#AcheAqui').submit(function(){
                                                        $('#campovazio_comente').html('');
                                                        
                                                        var fb = $(this).find('input:checked').val();
                                                        var comente = $('#comente').val();
                                                        if (comente==""){
                                                        $('#campovazio_comente').html('<label style="color:red">Faça um comentário!</label>');
                                                        return false;
                                                        }
                                                        var idforn = $('#idforn').val();
                                                        
                                                        myApp.showIndicator();
                                                        
                                                        $.ajax({
                                                               url:"https://www.condosocio.com.br/xdk/avalie.php",
                                                               type:"post",
                                                               data: "comente="+comente+"&fb="+fb+"&idforn="+idforn,
                                                               
                                                               success: function (result){
                                                               myApp.hideIndicator();
                                                               if (result==1){
                                                               
                                                               myApp.alert('Obrigado pelo feedback!',nome+',', function () {
                                                                           return false;
                                                                           });
                                                               } else if (result==2){
                                                               myApp.alert('Você atualizou sua avaliação. Grato!',nome+',', function () {
                                                                           window.history.go(-1);
                                                                           
                                                                           });
                                                               
                                                               } else {
                                                               myApp.alert('Erro! Tente novamente.',nome+',', function () {
                                                                           return false;
                                                                           
                                                                           });
                                                               
                                                               }
                                                               }
                                                               })
                                                        return false;
                                                        })
                                  });
                
                
                
                $('#arquivo').change(function(e){
                                     
                                     var filename = $(this).val();
                                     var ext = filename.split('.').pop().toLowerCase();
                                     if( $.inArray( ext, ['jpg','png','jpeg'] ) == -1 ){
                                     $('#nomedocument').html('<label style="color:red"> Arquivo '+ext+' não é permitido!</label>');
                                     return false;
                                     }
                                     else{
                                     $('#nomedocument').html('<label style="color:green"> Imagem adicionada</label>');
                                     $('input[name="arquivo"]').val(filename);
                                     }
                                     });
                
                
                
                $(document).ready(function(){
                                  
                                  $(".foto_perfil").on("click",function(){
                                                       
                                                       Foto.opcaoCamera(50,90,90);
                                                       
                                                       });
                                  
                                  $(".perfil_visual").on("click",function(){
                                                         
                                                         myApp.showIndicator();
                                                         
                                                         $.ajax({      //Função AJAX
                                                                url:"https://www.condosocio.com.br/xdk/perfil.php",
                                                                
                                                                success: function(data) {
                                                                myApp.hideIndicator();
                                                                
                                                                if(data[0].img != '' && data[0].img != null){
                                                                
                                                                $(".foto_perfil").html('<img src="https://www.condosocio.com.br/acond/downloads/fotosperfil/'+data[0].img+'" class="imgperfil" width="90" height="90"><div style="color:#1a35d8;font-size:15px">Alterar foto do perfil</div>');
                                                                
                                                                } else {
                                                                
                                                                $(".foto_perfil").html('<img src="images/semavatar.png" class="imgperfil" width="90" height="90"><div style="color:#1a35d8;font-size:15px">Insira foto do perfil</div>');
                                                                }
                                                                
                                                                $('#perfilnome').html('<input type="text" name="nome" id="nome" placeholder="Entre com nome..." value="'+data[0].nome+'" class="form_input "/>');
                                                                
                                                                $('#perfilsobre').html('<input type="text" name="sobrenome" id="sobrenome" placeholder="Entre com sobrenome..." value="'+data[0].sobrenome+'" class="form_input "/>');
                                                                
                                                                if(data[0].genero!=""){
                                                                
                                                                $('#genero_opt').html('<option  id="genero_opt" value="'+data[0].genero+'">'+data[0].genero+'</option>');
                                                                $('#genero_opt').val(data[0].genero);
                                                                }
                                                                
                                                                $('#perfilcel').html('<input type="tel" name="cel" id="cel" placeholder="Entre com celular..." onkeyup="mascara( this, mtel );" maxlength="15" value="'+data[0].celular+'" class="form_input "/>');
                                                                
                                                                $('#perfilniver').html('<input type="tel" name="niver" id="niver" maxlength="10" onkeypress="mascaraData( this, event )" value="'+data[0].niver+'" class="form_input"/>'+
                                                                                       
                                                                                       '<input class="" type="hidden" name="id"  id="id" value="'+data[0].id+'" />');
                                                                
                                                                }
                                                                });
                                                         })
                                  
                                  //Perfil();
                                  
                                  });
                
                
                $(document).ready(function(){
                                  
                                  
                                  $('#PerfilForm').submit(function(e){
                                                          e.preventDefault();
                                                          
                                                          $('#pnome').html('');
                                                          $('#psobrenome').html('');
                                                          $('#pgenero').html('');
                                                          $('#pcel').html('');
                                                          $('#pniver').html('');
                                                          
                                                          var nome=$('#nome').val();
                                                          if (nome==''){
                                                          $('#pnome').html('Campo obrigatório!');
                                                          return false;
                                                          }
                                                          var sobrenome=$('#sobrenome').val();
                                                          if (sobrenome==''){
                                                          $('#psobrenome').html('Campo obrigatório!');
                                                          return false;
                                                          }
                                                          var genero=$('#genero').val();
                                                          if (genero==0){
                                                          $('#pgenero').html('Escolha uma opção!');
                                                          return false;
                                                          }
                                                          var celular=$('#cel').val();
                                                          if (celular.length<15){
                                                          $('#pcel').html('Celular incorreto!');
                                                          return false;
                                                          }
                                                          var niver=$('#niver').val();
                                                          if (niver.length<10){
                                                          $('#pniver').html('Data incorreta!');
                                                          return false;
                                                          }
                                                          
                                                          var hoje = moment();
                                                          var maior_idade= moment().add('year', -18);
                                                          var niver_digitado =moment(niver);
                                                          
                                                          if (niver_digitado > hoje){
                                                          $('#pniver').html('Data informada maior que hoje! Digite novamente.');
                                                          return false;
                                                          }
                                                          if (niver_digitado > maior_idade){
                                                          $('#pniver').html('Você precisa ter 18 anos!');
                                                          return false;
                                                          
                                                          }
                                                          myApp.confirm('Confirma atualização do perfil?',nome, function () {
                                                                        
                                                                        Foto.uploadPhotoPerfil('UploadImagem.php?nome='+nome+'&sobrenome='+sobrenome+'&genero='+genero+'&celular='+celular+'&niver='+niver,nome);
                                                                        
                                                                        return true;
                                                                        
                                                                        })
                                                          });
                                  });
                
                
                $(document).ready(function(){
                                  
                                  $('#dependente_editar').submit(function(e){
                                                                 e.preventDefault();
                                                                 
                                                                 
                                                                 var idep=$('#id_hidden').val();
                                                                 
                                                                 var nomedep=$('#nome').val();
                                                                 
                                                                 if (nomedep==''){
                                                                 $('#depnome').html('Campo obrigatório!');
                                                                 return false;
                                                                 }
                                                                 var sobrenome=$('#sobrenome').val();
                                                                 if (sobrenome==''){
                                                                 $('#depsobrenome').html('Campo obrigatório!');
                                                                 return false;
                                                                 }
                                                                 var genero=$('#genero_dep').val();
                                                                 if (genero==0){
                                                                 $('#depgenero').html('Escolha uma opção!');
                                                                 return false;
                                                                 }
                                                                 var email=$('#email').val();
                                                                 if (email==''){
                                                                 $('#depemail').html('Escolha uma opção!');
                                                                 return false;
                                                                 }
                                                                 
                                                                 myApp.confirm('Confirma atualização do dependente?',nome, function () {
                                                                               myApp.showIndicator();
                                                                               
                                                                               $.ajax({
                                                                                      url:"https://www.condosocio.com.br/xdk/dep_mudar_perfil.php",
                                                                                      type:"post",
                                                                                      data: "nome="+nomedep+"&sobrenome="+sobrenome+"&genero="+genero+"&email="+email+'&idep='+idep, //Dados
                                                                                      
                                                                                      success: function (result){
                                                                                      
                                                                                      myApp.hideIndicator();
                                                                                      if (result==1){
                                                                                      myApp.alert('Seu dependente foi editado com sucesso!',nome+',', function () {
                                                                                                  return false;
                                                                                                  
                                                                                                  })
                                                                                      
                                                                                      } else {
                                                                                      myApp.alert('Erro. Houve algum problema!',nome+',', function () {
                                                                                                  return false;
                                                                                                  
                                                                                                  })
                                                                                      
                                                                                      
                                                                                      }
                                                                                      
                                                                                      }
                                                                                      })
                                                                               })
                                                                 });
                                  });
                
                $(document).ready(function(){
                                  
                                  $('#dep_incluir').submit(function(e){
                                                           e.preventDefault();
                                                           
                                                           $('#nomedep').html('');
                                                           $('#sobredep').html('');
                                                           $('#emaildep').html('');
                                                           $('#generodep').html('');
                                                           
                                                           var nomedep=$('#depnome').val();
                                                           if (nomedep=="" || nomedep==" "){
                                                           $('#nomedep').html('Campo nome vazio!');
                                                           return false;
                                                           }
                                                           var sobrenome=$('#depsobre').val();
                                                           if (sobrenome=="" || sobrenome==" "){
                                                           $('#sobredep').html('Campo sobrenome vazio!');
                                                           return false;
                                                           }
                                                           
                                                           var email=$('#depmail').val();
                                                           if (email=="" || email==" "){
                                                           $('#emaildep').html('Campo e-mail vazio!');
                                                           return false;
                                                           }
                                                           var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                                                           if (testEmail.test(email));
                                                           else $('#emaildep').html('E-mail incorreto!');;
                                                           
                                                           var genero=$('#depgenero').val();
                                                           
                                                           if (genero==0){
                                                           $('#generodep').html('Escolha uma opção!');
                                                           return false;
                                                           }
                                                           
                                                           myApp.confirm('Confirma a inclusão de dependente?',nome, function () {
                                                                         myApp.showPreloader('Enviando...');
                                                                         
                                                                         $.ajax({
                                                                                url:"https://www.condosocio.com.br/xdk/incluirdep.php",
                                                                                type:"post",
                                                                                data: "nome="+nomedep+"&sobrenome="+sobrenome+"&genero="+genero+"&email="+email, //Dados
                                                                                
                                                                                success: function (result){
                                                                                
                                                                                myApp.hidePreloader();
                                                                                
                                                                                if (result==1){
                                                                                
                                                                                myApp.alert('Seu dependente foi incluido com sucesso!\n Mandamos um e-mail para a definição de senha',nome, function () {
                                                                                            
                                                                                            $('#depnome').val('');
                                                                                            $('#depsobre').val('');
                                                                                            $('#depmail').val('');
                                                                                            $('#depgenero').val(0);
                                                                                            
                                                                                            
                                                                                            return false;
                                                                                            
                                                                                            
                                                                                            })
                                                                                
                                                                                } else if (result==0){
                                                                                myApp.alert('Erro. Houve algum problema!',nome, function () {
                                                                                            return false;
                                                                                            
                                                                                            })
                                                                                
                                                                                } else if (result==4){
                                                                                myApp.alert('Máximo de dependentes excedido.\nPor gentileza procure a administração do condomínio.!','<div style="color:red">Alerta!</div>', function () {
                                                                                            return false;
                                                                                            
                                                                                            })
                                                                                } else{
                                                                                myApp.alert('Este E-mail já foi cadastrado em sua Unidade','<div style="color:red">Alerta!</div>', function () {
                                                                                            return false;
                                                                                            
                                                                                            })
                                                                                
                                                                                }
                                                                                
                                                                                
                                                                                }
                                                                                })
                                                                         })
                                                           })
                                  });
                
                
                $(document).ready(function(){
                                  
                                  $('.reservas_visual').on('click',function(){
                                                           
                                                           mainView.router.loadPage('reservisual.html');
                                                           
                                                           var date = new Date();
                                                           var d = date.getDate();
                                                           var m = date.getMonth();
                                                           var y = date.getFullYear();
                                                           
                                                           myApp.showIndicator();
                                                           
                                                           //$('#calendar').addClass("preload_white").show;
                                                           
                                                           $.ajax({      //Função AJAX
                                                                  url:"https://www.condosocio.com.br/xdk/eventos.php",
                                                                  dataType: "json",
                                                                  success: function(json) {
                                                                  
                                                                  myApp.hideIndicator();
                                                                  //$('#calendar').removeClass("preload_white").hide;
                                                                  
                                                                  var eventos = new Array();
                                                                  
                                                                  if(parseInt(json.total) > 0){
                                                                  
                                                                  $.each(json.dados, function(i, obj){
                                                                         
                                                                         if(obj.ctl!=0){
                                                                         
                                                                         eventos.push({
                                                                                      validausu: obj.validausu,
                                                                                      ideve: obj.id,
                                                                                      logradouro: obj.logradouro,
                                                                                      tipoun: obj.tipoun,
                                                                                      title: obj.titulo,
                                                                                      description: obj.descricao,
                                                                                      listaconv: obj.lista,
                                                                                      respevent: obj.respevent,
                                                                                      nome: obj.nome,
                                                                                      sobrenome: obj.sobrenome,
                                                                                      img: obj.img,
                                                                                      color: obj.color,
                                                                                      status:obj.status,
                                                                                      areacom:obj.areacom,
                                                                                      textColor: 'black',
                                                                                      
                                                                                      start: new Date(parseInt(obj.ano), parseInt(obj.mes) -1, parseInt(obj.dia),parseInt(obj.hora), parseInt(obj.min)),
                                                                                     
                                                                                      
                                                                                      });
                                                                         }
                                                                         });
                                                                  
                                                                  }
                                                                  
                                                                  
                                                                  
                                                                  $('#calendar').fullCalendar({
                                                                                              
                                                                                              
                                                                                              header: {
                                                                                              right: 'today myCustomButton prev,next ',
                                                                                              center: 'title',
                                                                                              left: 'month,agendaWeek,agendaDay'
                                                                                              },
                                                                                              
                                                                                              height:"auto",
                                                                                              editable: false,
                                                                                              events: (eventos),
                                                                                              
                                                                                              
                                                                                              eventRender: function (event, element) {
                                                                                              element.attr('href', 'javascript:void(0);');
                                                                                              
                                                                                              element.click(function() {
                                                                                                            
                                                                                                            moment.locale('pt-br');
                                                                                                            
                                                                                        if (event.listaconv=="undefined" || event.listaconv==""){
                                                                                                            event.listaconv="Nenhum";
                                                                                                            }
                                                                                                            
                                                                                                            if (event.img!=""){
                                                                                                            img_perfil = '<img src="https://condosocio.com.br/acond/downloads/fotosperfil/'+event.img+'" style="padding-bottom:10px" class="imgperfil" width="80" height="80"/>';
                                                                                                            } else {
                                                                                                            img_perfil = '<img src="https://condosocio.com.br/acond/img/usuario.png" style="padding-bottom:10px" class="imgperfil" width="80" height="80"/>';
                                                                                                            
                                                                                                            }
                                                                                                            
                                                                                                            if (event.validausu==1){
                                                                                                            
                                                                                                            var ListaAprovado ="";
                                                                                                            var img_perfil = "";
                                                                                                            
                                                                                                            var dt_evento = (moment(event.start).format('lll'));
                                                                                                            
                                                                                                            
                                                                                                            if (event.status=="Aprovado" && dt_evento>=dt_hoje){
                                                                                                            
                                                                                                            ListaAprovado+='<a href="editarconv.html"  data-ideve='+event.ideve+' data-status='+event.status+' class="close-popup button button-big button-fill color-green editarlista"><img src="images/icons/white/group_add.png" alt="" title="" style="vertical-align:middle"/><span style="font-size:18px;font-weight:300"> Adicione Convidados</span></a>';
                                                                                                            
                                                                                                            }
                                                                                                            
                                                                                                            
                                                                                                            var popupHTML = '<div class="popup">'+
                                                                                                            '<div class="content-block-login">'+
                                                                                                            '<div style="margin-top: 100px; border-radius: 10px; background-color: '+event.color+';padding-top:20px; ">'+img_perfil+
                                                                                                            
                                                                                                            '<p style="color: #000;"><b>'+event.nome+' '+event.sobrenome+'<br>'+event.logradouro+' | '+event.tipoun+'</b></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Evento: </strong><span>'+( event.title )+'<span></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Data: </strong><span>'+( moment(event.start).format('lll'))+'</p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Área Comum: </strong><span>'+( event.areacom )+'<span></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Status: </strong><span>'+( event.status )+'<span></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px">'+event.respevent+'</p>'+
                                                                                                            
                                                                                                            ListaAprovado+'</div>'+
                                                                                                            '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" title="" /></a></div>'+
                                                                                                            '</div>'+
                                                                                                            '</div>';
                                                                                                            
                                                                                                            
                                                                                                            myApp.popup(popupHTML);
                                                                                                            
                                                                                                            return false;
                                                                                                            } else {
                                                                                                            
                                                                                                            var popupHTML = '<div class="popup">'+
                                                                                                            '<div class="content-block-login">'+
                                                                                                            '<div style="margin-top: 100px; border-radius: 10px; background-color: '+event.color+';padding-top:20px; ">'+img_perfil+
                                                                                                            
                                                                                                            '<p style="color: #000;"><b>'+event.nome+' '+event.sobrenome+'</b><br>'+event.logradouro+' | '+event.tipoun+'</p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Evento: </strong><span>'+( event.title )+'<span></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Data: </strong><span>'+( moment(event.start).format('LLL'))+'</p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Área Comum: </strong><span>'+( event.areacom )+'<span></p>'+
                                                                                                            '<p style="color: #000;font-size:16px;text-align:left;margin-left:10px"><strong>Status: </strong><span>'+( event.status )+'<span></p>'+
                                                                                                            
                                                                                                            
                                                                                                            '</div>'+
                                                                                                            '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" title="" /></a></div>'+
                                                                                                            '</div>'+
                                                                                                            '</div>'
                                                                                                            
                                                                                                            myApp.popup(popupHTML);
                                                                                                            
                                                                                                            return false;
                                                                                                            
                                                                                                            
                                                                                                            }
                                                                                                            })
                                                                                              
                                                                                              }
                                                                                              
                                                                                              })
                                                                  }
                                                                  
                                                                  })
                                                           })
                                  
                                  });
                // Calendario
                
                $(document).ready(function(){
                                  
                                  $('#editarconv').submit(function(e){
                                                          e.preventDefault();
                                                          
                                                          
                                                          var ideve = $('#ideventos').val();
                                                          var lista = $('#tags_1').val();
                                                          if (lista=="undefined" || lista==" " || lista==""){
                                                          
                                                          myApp.addNotification({
                                                                                title: 'Erro!',
                                                                                message: 'Campo vazio. Insira Convidado(s)!',
                                                                                })
                                                          return false;
                                                          } else {
                                                          
                                                          myApp.confirm('Você confirma a inclusão dos Convidados?',nome+',', function () {
                                                                        
                                                                        myApp.showIndicator();
                                                                        
                                                                        $.ajax({      //Função AJAX
                                                                               
                                                                               url:"https://www.condosocio.com.br/xdk/editconv.php",
                                                                               type:"post",
                                                                               data: "lista="+lista+"&ideve="+ideve, //Dados
                                                                               
                                                                               success: function(data) {
                                                                               
                                                                               myApp.hideIndicator();
                                                                               
                                                                               if (data==1){
                                                                               
                                                                               myApp.alert('Seu(s) Convidado(s) incluído(s) com sucesso!',nome, function () {
                                                                                           window.location.href = "menu2.html";
                                                                                           
                                                                                           });
                                                                               
                                                                               } else if (data==3){
                                                                               
                                                                               myApp.addNotification({
                                                                                                     title: 'Erro!',
                                                                                                     message: 'Acrescente convidado(s). Tente novamente',
                                                                                                     onClose: function () {
                                                                                                     window.location.href = "menu2.html";
                                                                                                     }
                                                                                                     
                                                                                                     })
                                                                               return false;
                                                                               
                                                                               
                                                                               } else{
                                                                               
                                                                               myApp.alert('Erro! Tente novamente!','Reservas', function () {
                                                                                           window.location.href = "menu2.html";
                                                                                           
                                                                                           });
                                                                               }
                                                                               
                                                                               }
                                                                               })
                                                                        
                                                                        })
                                                          }
                                                          })
                                  
                                  });
                
                // fim calendario
                $(document).ready(function(){
                                  
                                  $('.acessos_visual').on('click',function (){
                                                          
                                                          myApp.showIndicator();
                                                          
                                                          $.ajax({            //Função AJAX3
                                                                 url:"https://www.condosocio.com.br/xdk/acessovis.php",
                                                                 
                                                                 success: function(data) {
                                                                 myApp.hideIndicator();
                                                                 
                                                                 if (data==""){
                                                                 $('.acessos').html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                                    '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você não possui registros de acesso.</h2></div>');
                                                                 
                                                                 } else {
                                                                 
                                                                 
                                                                 var myList = myApp.virtualList('.acessos', {
                                                                                                items: data,
                                                                                                // Template 7 template to render each item
                                                                                                template: '<li class="item-content swipeout">'+
                                                                                                '<a href=""><div class="swipeout-content">'+
                                                                                                '<div class="item-inner">'+
                                                                                                '<div class="item-title-row">'+
                                                                                                
                                                                                                '<div class="table_section_14 buscar_vis">{{data}}</div>'+
                                                                                                
                                                                                                '<div class="table_section_14   buscar_vis"><b>{{pessoa}}</b></div>'+
                                                                                                
                                                                                                '<div class="table_section_14 buscar_vis" style="color:green">{{dataent}}</div>'+
                                                                                                
                                                                                                '<div class="table_section_14 buscar_vis"style="color:green">{{datasai}}</div>'+
                                                                                                
                                                                                                '<div class="swipe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div>'+
                                                                                                
                                                                                                '</div>'+
                                                                                                '</div>'+
                                                                                                '</div></a>'+
                                                                                                
                                                                                                '<div class="swipeout-actions-right">'+
                                                                                                '<a href=""  id="heart{{idace}}" class="favorito"  data-idfav={{idfav}} data-fav={{fav}} data-idace ={{idace}} ><img src="images/icons/white/{{heart}}" id="img_heart{{idace}}" width="32px" style="padding:5px"></a>{{deletar}}'+
                                                                                                
                                                                                                '</div>'+
                                                                                                
                                                                                                '</li>',
                                                                                                });
                                                                 }
                                                                 }
                                                                 });
                                                          })
                                  });              /*$('#acessos').html(acess);
                                                    
                                                    
                                                    $(".loadace").hide();
                                                    
                                                    size_ace = $(".loadace").size();
                                                    if (size_ace==0){
                                                    $('#loadMoreAce').hide();
                                                    $('#showLessAce').hide();
                                                    }
                                                    x = 4;
                                                    
                                                    $('.loadace:lt('+x+')').show();
                                                    
                                                    
                                                    $('#loadMoreAce').click(function () {
                                                    x = (x+1 <= size_ace) ? x+4: size_ace;
                                                    
                                                    
                                                    $('.loadace:lt('+x+')').show();
                                                    
                                                    if(x == size_ace){
                                                    $('#loadMoreAce').hide();
                                                    $('#showLessAce').show();
                                                    }
                                                    })
                                                    */
                
                
                
                
                
                // fim calendario
                $(document).ready(function(){
                                  
                                  $('#dependentes_vis').on('click',function (){
                                                           
                                                           myApp.showIndicator();
                                                           
                                                           $.ajax({      //Função AJAX
                                                                  url:"https://www.condosocio.com.br/xdk/depvis.php",
                                                                  
                                                                  success: function(data) {
                                                                  
                                                                  myApp.hideIndicator();
                                                                  
                                                                  
                                                                  
                                                                  if (data==""){
                                                                  
                                                                  $('.depen_visual'). html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                                           '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você não possui dependentes.</h2></div>');
                                                                  
                                                                  
                                                                  } else {
                                                                  
                                                                  var myList = myApp.virtualList('.depen_visual', {
                                                                                                 items: data,
                                                                                                 // Template 7 template to render each item
                                                                                                 template: '<li class="item-content swipeout" >'+
                                                                                                 '<div class="swipeout-content">'+
                                                                                                 '<a href="dep_perfil.html" data-idep={{idep}}  class="dep_editar">'+
                                                                                                 '<div class="item-inner">'+
                                                                                                 '<div class="item-title-row">'+
                                                                                                 '<div class="table_section_14 buscar_dep"><h1>{{nome}} {{sobrenome}}</h1></div>'+
                                                                                                 '<div class="table_section_14 buscar_dep" >{{desde}}</div>'+
                                                                                                 '<div class="table_section_14  buscar_dep"><h1>{{ultacesso}}</h1></div>'+
                                                                                                 '<div class="table_section_14 buscar_dep" ><h1>{{status}}</h1></div>'+
                                                                                                 '<div class="swipe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div></div>'+
                                                                                                 
                                                                                                 '</div>'+
                                                                                                 
                                                                                                 '</div >'+
                                                                                                 '</div>'+
                                                                                                 
                                                                                                 
                                                                                                 '<div class="swipeout-actions-right">'+
                                                                                                 '<a href="#" class="swipeout-delete apagar_dep" data-idep={{idep}} data-confirm="Deseja apagar essa mensagem?" data-confirm-title="Apagar?" data-close-on-cancel="true"><img src="images/icons/white/apagar.png" width="36px"></img></a>'+
                                                                                                 '</div>'+
                                                                                                 
                                                                                                 '</li></a>',
                                                                                                 
                                                                                                 });
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  }// else
                                                                  }  //success
                                                                  }) //Ajax
                                                           })
                                  });
                
                
                
                // fim calendario
                $(document).ready(function(){
                                  
                                  $('#acessos_aut').on('click',function (){
                                                       
                                                       myApp.showIndicator();
                                                       $.ajax({      //Função AJAX
                                                              url:"https://www.condosocio.com.br/xdk/autsaidavis.php",
                                                              
                                                              success: function(data) {
                                                              
                                                              myApp.hideIndicator();
                                                              
                                                              if (data==""){
                                                              
                                                              $('.aut_sai'). html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                                  '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você não possui registros de acesso.</h2></div>');
                                                              
                                                              
                                                              } else if (data==2){
                                                              myApp.alert('Sua sessão expirou!',nome, function () {
                                                                          window.location.href = "index.html";
                                                                          });
                                                              
                                                              } else{
                                                              
                                                              var myList = myApp.virtualList('.aut_sai', {
                                                                                             items: data,
                                                                                             // Template 7 template to render each item
                                                                                             template: '<li class="item-content swipeout" >'+
                                                                                             '<a href=""><div class="swipeout-content">'+
                                                                                             
                                                                                             '<div class="item-inner">'+
                                                                                             '<div class="item-title-row">'+
                                                                                             '<div class="table_section_14 buscar_aut">{{datacreate}}</div>'+
                                                                                             '<div class="table_section_14   buscar_aut"><h1>{{nome}}</h1></div>'+
                                                                                             
                                                                                             '<div class="table_section_14 buscar_vis"style="color:green">{{datasaida}}</div>'+
                                                                                             '<div class="table_section_14">'+
                                                                                             '<div class="swipe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div></div>'+
                                                                                             
                                                                                             '</div>'+
                                                                                             
                                                                                             '</div >'+
                                                                                             '</div ></a>'+
                                                                                             
                                                                                             '<div class="swipeout-actions-right">'+
                                                                                             '<a href=""  class="imagemaut" data-imgaut={{imgaut}}><img src="images/icons/white/images.png" width="32px" style="padding:5px"></a>'+
                                                                                             '<a href="#" class="swipeout-delete apagaraut" data-idaut ={{idaut}} data-confirm="Deseja apagar a autorização?" data-confirm-title="Apagar?" data-close-on-cancel="true"><img src="images/icons/white/apagar.png" width="36px" ></img></a>'+
                                                                                             '</div>'+
                                                                                             
                                                                                             '</li>',
                                                                                             });
                                                              
                                                              }
                                                              
                                                              
                                                              }
                                                              })
                                                       
                                                       
                                                       })
                                  });
                
                // videos add
                $(document).ready(function(){
                                  
                                  $('#videos_vis').on('click',function (){
                                                      
                                                      myApp.showIndicator()  ;
                                                      
                                                      $.ajax({      //Função AJAX
                                                             url:"https://www.condosocio.com.br/xdk/videosvisual.php",
                                                             
                                                             success: function(data) {
                                                             myApp.hideIndicator();
                                                             var i;
                                                             var videos="";
                                                             for (i = 0; i < data.length; i++){
                                                             
                                                             videos+= data[i].publi+'<h3 style="margin-bottom:5px;margin-left:5px">'+data[i].titulo+'</h3>'+
                                                             '<h1 style="margin-bottom:5px;margin-left:5px">'+data[i].descricao+'</h1>'+
                                                             '<div class="videocontainer">'+
                                                             '<iframe  width="100%" height="180" src="'+data[i].html+'" frameborder="0"></iframe></div><br>';
                                                             
                                                             }
                                                             
                                                             $('#videosapp').html(videos);
                                                             
                                                             
                                                             }
                                                             
                                                             });
                                                      })
                                  
                                  //VideosApp();
                                  
                                  });
                // fim videos
                
                
                // ENQUETES VISUAL
                
                $(document).ready(function(){
                                  
                                  function Enquetefunc(){
                                  
                                  $('#titulo').addClass("preload_white").show;
                                  
                                  $.ajax({      //Função AJAX
                                         
                                         url:"https://www.condosocio.com.br/xdk/enquetesvis.php",
                                         
                                         success: function (result){
                                         
                                         $('#titulo').removeClass("preload_white").hide;
                                         
                                         $('#cabeca').html("");
                                         $('#titulo').html("");
                                         $('#votacao').html("");
                                         $('#somavotos').html("");
                                         $('#expira').html("");
                                         $('#perguntas').html("");
                                         $('#enviar').html("");
                                         
                                         if(result.valida==1 || result.timeatual>result.timeexpira){
                                         
                                         $('#cabeca').html('<h3 style="text-align:center;padding-top:10px;padding-bottom:10px">'+nome+'<br> obrigado pela sua participação!</h3>');
                                         
                                         $('#titulo').html('<h2>'+result.titulo+'</h2>');
                                         var op =result.opcoes;
                                         var vt=result.votacao;
                                         
                                         for (x = 0; x < op[0].length; x++){
                                         if (result.SOMA==0){
                                         
                                         var vtperc=parseInt(((vt[x])/1) * 100);
                                         } else {
                                         
                                         var vtperc=parseInt(((vt[x])/result.SOMA) * 100);
                                         }
                                         
                                         $('#votacao').append('<label>'+op[0][x]+' ('+vt[x]+')</label><div class="myProgress"><div class="myBar responsive_table" style="width:'+vtperc+'%;color:#fff">'+vtperc+'%</div></div><br>');
                                         
                                         
                                         }
                                         if (result.valida==0){
                                         $('#somavotos').html('<p>Total de votos: ('+result.SOMA+')</p><p style="color:red">Você não votou.</p>');
                                         
                                         } else {
                                         
                                         $('#somavotos').html('<p>Total de votos: ('+result.SOMA+')</p><p>Você votou dia: '+result.datavoto+'</p>');
                                         }
                                         
                                         
                                         
                                         if (result.timeatual>result.timeexpira){
                                         
                                         $('#expira').html('<p style="color:red">Votações encerradas</p>');
                                         
                                         }
                                         
                                         } else {
                                         var op =result.opcoes;
                                         var titulo=result.titulo;
                                         
                                         $('#cabeca').html('<h3 style="text-align:center;">'+nome+'<br> participe e colabore com seu condomínio!</h3>');
                                         if (titulo==null){
                                         $('#titulo').html('<h3 style="text-align:center;font-size:20px;color:#ff2d55;padding-top:100px">'+nome+' ainda não formulamos uma enquete. Aguarde em breve!</h3>');
                                         
                                         
                                         } else{
                                         $('#titulo').html('<h3>'+titulo+'</h3>');
                                         
                                         for (x in op[0]) {
                                         $('#perguntas').append('<div class="radio" style="line-height:14px"  > <label><br><input type="radio" name="resposta" id="resposta" value="'+x+'"><span>  ' +op[0][x]+'</span></label></div>');
                                         }
                                         $('#enviar').html('<br> <input type="submit" name="submit" class="form_submit" id="submit" value="Votar" /><br>');
                                         }
                                         }
                                         }
                                         })
                                  return false;
                                  }
                                  Enquetefunc();
                                  });
                
                
                $('#votar').submit(function(){  //Ao submeter formulário
                                   
                                   
                                   myApp.showIndicator();
                                   var resposta=$('input[name=resposta]:checked', '#votar').val();
                                   
                                   $.ajax({      //Função AJAX
                                          url:"https://www.condosocio.com.br/xdk/votarenq.php",     //Arquivo php
                                          type:"post",  //Método de envio
                                          data: "resposta="+resposta,
                                          success: function (result){
                                          myApp.hideIndicator();
                                          if (result==1){
                                          
                                          myApp.alert('Seu voto foi computado com sucesso.\nMuito obrigado pela sua participação!',nome+',', function () {
                                                      window.history.go(0);
                                                      
                                                      });
                                          
                                          } else {
                                          
                                          
                                          myApp.alert('Erro! Voto não computado!',nome+',', function () {
                                                      return false;
                                                      
                                                      });
                                          }
                                          }
                                          })
                                   return false;
                                   });
                
                // FIM ENQUETES
                
                $(document).ready(function(){
                                  
                                  $('.tudo').on('submit', function(e) {
                                                e.preventDefault();
                                                
                                                
                                                myApp.showIndicator();
                                                var texto = $('#texto').val();
                                                var idoco = $('#idoco').val();
                                                
                                                $.ajax({      //Função AJAX
                                                       type:"post",        //Método de envio
                                                       data: "texto="+texto+"&idoco="+idoco, //Dados
                                                       url:"https://www.condosocio.com.br/xdk/responda.php",
                                                       
                                                       success: function (dataoco) {
                                                       
                                                       myApp.hideIndicator();
                                                       if (dataoco==1){
                                                       
                                                       myApp.alert('Sua resposta foi enviada com sucesso',nome+',', function () {
                                                                   window.history.go(-1);
                                                                   })
                                                       
                                                       
                                                       } else {
                                                       
                                                       myApp.alert('Erro! Sua resposta não foi enviada!',nome+',', function () {
                                                                   window.location.href = "menu2.html";
                                                                   
                                                                   })
                                                       
                                                       }
                                                       
                                                       } //sucess
                                                       
                                                       }) //ajax
                                                
                                                })//submit
                                  });
                
                
                
                $(document).ready(function(){
                                  
                                  $('.msgincluir').on('submit', function(e) {
                                                      e.preventDefault();
                                                      
                                                      var texto = $('#texto').val();
                                                      var idmsg = $('#idmsg').val();
                                                      
                                                      myApp.showIndicator();
                                                      $.ajax({      //Função AJAX
                                                             type:"post",        //Método de envio
                                                             data: "texto="+texto+"&idmsg="+idmsg, //Dados
                                                             url:"https://www.condosocio.com.br/xdk/respondamsg.php",
                                                             
                                                             success: function (data) {
                                                             
                                                             myApp.hideIndicator();
                                                             if (data==1){
                                                             
                                                             myApp.alert('Sua mensagem foi enviada com sucesso',nome+',', function () {
                                                                         window.history.go(-1);
                                                                         })
                                                             
                                                             
                                                             } else {
                                                             
                                                             myApp.alert('Erro! Sua mensagem não foi enviada!',nome+',', function () {
                                                                         window.location.href = "menu2.html";
                                                                         
                                                                         })
                                                             
                                                             }
                                                             
                                                             } //sucess
                                                             
                                                             }) //ajax
                                                      
                                                      })//submit
                                  });
                
                // ocorrencias visual
                $(document).ready(function(){
                                  
                                  $('#ocorre_visual').on('click',function (){
                                                         myApp.showIndicator();
                                                         
                                                         
                                                         $.ajax({      //Função AJAX
                                                                url:"https://www.condosocio.com.br/xdk/ocovis.php",
                                                                
                                                                success: function(data) {
                                                                
                                                                myApp.hideIndicator();
                                                                
                                                                if (data==""){
                                                                
                                                                $('.ocorrencias_vis').html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                                           '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você não possui registros de ocorrência.</h2></div>');
                                                                
                                                                }else {
                                                                
                                                                
                                                                var myList = myApp.virtualList('.ocorrencias_vis', {
                                                                                               items: data,
                                                                                               // Template 7 template to render each item
                                                                                               
                                                                                               template: '<li class="item-content swipeout" >'+
                                                                                               '<a href="respostoco.html" data-id={{id}}  class="respostas"><div class="swipeout-content">'+
                                                                                               
                                                                                               '<div class="item-inner">'+
                                                                                               '<div class="item-title-row">'+
                                                                                               '<div class="table_section_14 buscar_oco">{{data}}<br> {{hora}}</div>'+
                                                                                               '<div class="table_section_14   buscar_oco"><h1>{{titulo}}</h1></div>'+
                                                                                               '<div class="table_section_14 buscar_oco" >{{dataoco}}<br>{{horaoco}}</div>'+
                                                                                               '<div class="table_section_14 buscar_oco" >{{status}}<div class="swipe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div></div>'+
                                                                                               
                                                                                               '</div>'+
                                                                                               '</div>'+
                                                                                               '</div></a>'+
                                                                                               
                                                                                               '<div class="swipeout-actions-right">'+
                                                                                               '<a href="" class="imagemoco" data-imgoco={{imgoco}} ><img src="images/icons/white/images.png" width="32px" style="padding:5px"></a>'+
                                                                                               '<a href="#" class="swipeout-delete apagaroco" data-id={{id}} data-confirm="Deseja apagar registro de ocorrência?" data-confirm-title="Apagar?" data-close-on-cancel="true"><img src="images/icons/white/apagar.png" width="36px" ></img></a>'+
                                                                                               '</div>'+
                                                                                               
                                                                                               '</li>',
                                                                                               });
                                                                }
                                                                }
                                                                });
                                                         })
                                  });
                
                $(document).ready(function(){
                                  
                                  $('#msg_vis').on('click',function (){
                                                   
                                                   myApp.showIndicator();
                                                   
                                                   $.ajax({      //Função AJAX
                                                          url:"https://www.condosocio.com.br/xdk/vermsg.php",     //Arquivo php
                                                          success: function (data){
                                                          
                                                          myApp.hideIndicator() ;
                                                          
                                                          if (data==0){
                                                          $('.ouvi_vis').html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                              '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você ainda não possui manifestações.</h2></div>');
                                                          
                                                          }else{
                                                          
                                                          
                                                          var myList = myApp.virtualList('.ouvi_vis', {
                                                                                         items: data,
                                                                                         // Template 7 template to render each item
                                                                                         template: '<li class="item-content swipeout" >'+
                                                                                         '<div class="swipeout-content">'+
                                                                                         
                                                                                         '<a href="respostmsg.html" data-id={{id}}  class="respostasmsg"><div class="item-inner">'+
                                                                                         '<div class="item-title-row">'+
                                                                                         '<div class="table_section_14 buscar_ouvi">{{data}}</div>'+
                                                                                         '<div class="table_section_14   buscar_ouvi">{{hora}}</div>'+
                                                                                         '<div class="table_section_14 buscar_ouvi">{{assunto}}</div>'+
                                                                                         '<div class="table_section_14   buscar_ouvi">{{status}}<div class="swipe2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div></div>'+
                                                                                         
                                                                                         
                                                                                         '</div>'+
                                                                                         
                                                                                         '</div >'+
                                                                                         '</div >'+
                                                                                         
                                                                                         '<div class="swipeout-actions-right">'+
                                                                                         '<a href="#" class="swipeout-delete apagarmsg" data-id={{id}} data-confirm="Deseja apagar essa mensagem?" data-confirm-title="Apagar?" data-close-on-cancel="true"><img src="images/icons/white/apagar.png" width="36px"></img></a>'+
                                                                                         '</div>'+
                                                                                         
                                                                                         '</li></a>',
                                                                                         });
                                                          
                                                          
                                                          }
                                                          
                                                          /*       $('#msgvisual').html(msgvis);
                                                           
                                                           
                                                           
                                                           
                                                           $(".loadomsg").hide();
                                                           
                                                           size_oco =$(".loadmsg").size();
                                                           if (size_oco==0){
                                                           $('#loadMoreMsg').hide();
                                                           $('#showLessMsg').hide();
                                                           }
                                                           
                                                           x = 4;
                                                           
                                                           $('.loadmsg:lt('+x+')').show();
                                                           
                                                           
                                                           
                                                           $('#loadMoreMsg').click(function () {
                                                           x = (x+1 <= size_oco) ? x+4: size_oco;
                                                           
                                                           
                                                           $('.loadmsg:lt('+x+')').show();
                                                           
                                                           
                                                           if(x == size_oco){
                                                           $('#loadMoreMsg').hide();
                                                           $('#showLessMsg').show();
                                                           }
                                                           }) */
                                                          
                                                          }
                                                          });
                                                   })
                                  
                                  // MsgVisual();
                                  
                                  
                                  });
                
                // fim oco visual
                
                $(document).ready(function(){
                                  
                                  $('#formace').submit(function(){
                                                       
                                                       var tipopessoa=$('#tipopessoa').val();
                                                       if (tipopessoa=="Selecione"){
                                                       $('#tipopessoavazia').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       var pessoa=$('#pessoa').val().toUpperCase();
                                                       if (pessoa==""){
                                                       $('#pessoavazia').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       var cel=$('#cel').val();
                                                       var placa=$('#placa').val();
                                                       var marca=$('#marca').val();
                                                       var tipodoc=$('#tipodoc').val();
                                                       var documento=$('#documento').val();
                                                       var idfav = $('#idfav').val();
                                                       var idvis = $('#idvis').val();
                                                     
                                                      
                                            
                                                       myApp.showPreloader("Enviando...");
                                                       
                                                       $.ajax({      //Função AJAX
                                                              url:"https://www.condosocio.com.br/xdk/acesso2.php",     //Arquivo php
                                                              type:"post",        //Método de envio
                                                              data: "tipopessoa="+tipopessoa+"&pessoa="+pessoa+"&cel="+cel+"&placa="+placa+"&marca="+marca+"&tipodoc="+tipodoc+"&documento="+documento+'&idfav='+idfav+'&idvis='+idvis,
                                                              
                                                              success: function (result){
                                                              
                                                              myApp.hidePreloader();
                                                            
                                                              if (result!=0){
                                                              
                                                              $('#tipopessoa').val('Selecione');
                                                              $('#pessoa').val('');
                                                              $('#cel').val('');
                                                              $('#placa').val('');
                                                              $('#marca').val('');
                                                              $('#tipodoc').val('');
                                                              $('#documento').val('');
                                                              $('#idfav').val('');
                                                              $('#idvis').val('');
                                                              $('#tipopessoavazia').html('');
                                                              
                                                             
                                                              
                                                              if (cel==""){
                                                              
                                                              myApp.alert('Acesso enviado à portaria com sucesso!',nome, function () {
                                                                            return false;
                                                                            })
                                                              } else {
                                                              
                                                             
                                                               myApp.confirm('Sua autorização foi enviada à portaria. Para agilizar o acesso, deseja enviar convite ao seu visitante?','<img src="images/checked.png" />', function () {
   
                                                       

                                                                        
                                                        var cel_val = cel.replace('-','');
                                                        var cel_val= cel_val.replace('(','');
                                                        var cel_val = cel_val.replace(')','');
                                                        var cel_val = cel_val.replace(' ','');
                                                        //var celu = celular.substr(-11,11);
                                                    
                                                         var celular = '55'+cel_val;
                                                                
                                                                   alert(celular)

                                                                   if (celular.length!=13){
                                                                       
                                                                       myApp.prompt('Contato sem o DDD. Favor inserir para podermos enviar o convite','<img src="images/warning.png" />',cel_val ,function (ddd) {
                                                                           
                                                                           if (ddd ==""){
                                                                               alert('Campo Vazio!');
                                                                               return false;
                                                                           } else {

                                                                                   var celular = '55'+ddd+celular;
                                                                                   Enviar_Convite(celular);

                                                                                }
                                                                           
                                                                       });
                                                                     
                                                                   } else {
                                                                       Enviar_Convite(celular);
                                                                     
                                                                   }
                                                                   
                                                                   
                                                                   function Enviar_Convite(celular){
                                                                   
                                                                   var buttons = [
                                                                      {
                                                                              text: 'ENVIE O CONVITE POR:',
                                                                              label: true
                                                                          },
                                                                           {
                                                                              text: "<span class='center'>SMS</span>",
                                                                              onClick: function () {
                                                                                 
                                                                                  window.plugins.socialsharing.shareViaSMS('Olá! você foi convidado pelo '+nome+' morador do condomínio '+nomecond+'. Agilize seu acesso clicando no link e preencha os campos em abertos. Grato! https://condosocio.com.br/paginas/acesso_visitante?chave='+result.idace,celular);
                                                                                  
                                                                                  
                                                                              }
                                                                          },

                                                                          {
                                                                              text: "<span class='center'>WhatsApp</span>",
                                                                              onClick: function () {
                                                                                  
                                                                                  window.plugins.socialsharing.shareViaWhatsAppToPhone(celular, 'Olá! você foi convidado pelo *'+nome+'* morador do condomínio *'+nomecond+'*. Agilize seu acesso clicando no link e preencha os campos em abertos. Grato!', null /* img */, 'https://condosocio.com.br/paginas/acesso_visitante?chave='+result.idace);
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

                                                                   }
                                                                    })
                                                              
                                                                    return false;
                                                              
                                                              }
                                                              } else{
                                                              
                                                              myApp.alert('Erro! Acesso não foi enviado!',nome+',', function () {
                                                                          return false;
                                                                          
                                                              });
                                                              
                                                              }
                                                                
                                                                           
                                                              }
                                                              })//ajax
                                                       return false;
                                                       })//submit
                                  
                                  }); //end
                
                
                $(document).ready(function(){
                                  
                                  function Favoritos(){
                                  
                                  $(".loader").html('<option >Carregando...</option>');
                                  
                                  $.ajax({      //Função AJAX
                                         
                                         url:"https://www.condosocio.com.br/xdk/buscafavapp.php",
                                         
                                         success: function(data) {
                                         
                                         var i;
                                         var buscafav="";
                                         
                                         for (i = 0; i < data.length; i++){
                                         
                                         
                                         buscafav+='<option value="'+data[i].id+'">'+data[i].pessoa+'</option>';
                                         
                                         }
                                         
                                         $('#favoritos').html('<option value="0" >Selecione um Favorito</option>'+buscafav);
                                         
                                         }
                                         
                                         });
                                  }
                                  
                                  Favoritos();
                                  
                                  });
                
                // FAVORITOS //
                $(document).ready(function(){
                                  
                                  $('#favoritos').on('change', function() {
                                                     
                                                     var idfav = this.value;
                                                     
                                                     $('#pessoa').val('Aguarde...');
                                                     //$('#tipopessoa').html('<option >Aguarde...</option>');
                                                     $('#cel').val('Aguarde...');
                                                     
                                                     $.ajax({      //Função AJAX
                                                            url:'https://www.condosocio.com.br/xdk/favapp2.php?idfav='+idfav,
                                                            type:'get',
                                                            
                                                            success: function(data) {
                                                            
                                                            if (data!=""){
                                                            
                                                            $('#pessoa').val(data[0].pessoa);
                                                            $('#tipopessoa').val(data[0].tipopessoa);
                                                            $('#cel').val(data[0].cel);
                                                            $('#placa').val(data[0].placa);
                                                            $('#marca').val(data[0].marca);
                                                            $('#tipodoc').val(data[0].tipodoc);
                                                            $('#documento').val(data[0].documento);
                                                            $('#idfav').val(idfav);
                                                            
                                                            $('#excluirfav').html('<a href="#" style="color:red;margin-left:70%;" class="apagarfav"  data-idfav ='+data[0].idfav+' data-confirm="Deseja apagar favorito?" data-confirm-title="Apagar?" data-close-on-cancel="true">Excluir Favorito</a>');
                                                            
                                                            } else {
                                                            
                                                            
                                                            $('#pessoa').val('');
                                                            $('#tipopessoa').val('Selecione');
                                                            $('#cel').val('');
                                                            $('#excluirfav').html("");
                                                            
                                                            }
                                                            
                                                            }
                                                            });
                                                     })
                                  });
                
                // ALTERAR SENHA //
                $(document).ready(function(){
                                  $('#alterarsenha').submit(function(){
                                                            var contsenhanova = $('#senhanova').val().length;
                                                            var contsenhanova = $('#senhaconfirma').val().length;
                                                            var senhaatual=$('#senhaatual').val();
                                                            var senhanova=$('#senhanova').val();
                                                            var senhaconfirma=$('#senhaconfirma').val();
                                                            
                                                            if(senhanova!=senhaconfirma){
                                                            $('#senhaconfirmavazia').html("<strong>Senhas não conferem!</strong>");
                                                            return false;
                                                            } else if (senhanova==""){
                                                            $('#senhanovavazia').html("<strong>Entre com a nova senha!</strong>");
                                                            return false;
                                                            
                                                            }  else if (contsenhanova<6){
                                                            $('#senhanovavazia').html("<strong>Senha menor que 6 dígitos</strong>");
                                                            return false;
                                                            }
                                                            myApp.showIndicator();
                                                            
                                                            $.ajax({      //Função AJAX
                                                                   url:"https://www.condosocio.com.br/xdk/alterarsenha.php",     //Arquivo php
                                                                   type:"post",        //Método de envio
                                                                   data: "senhanova="+senhanova+"&senhaatual="+senhaatual, //Dados
                                                                   
                                                                   success: function (result){
                                                                   myApp.hideIndicator();
                                                                   
                                                                   if (result==0){
                                                                   $('#senhaatualvazia').html("<strong>Senha atual não confere!</strong>");
                                                                   return false;
                                                                   
                                                                   } else if (result==1){
                                                                   
                                                                   
                                                                   
                                                                   myApp.alert('Sua senha foi alterada com sucesso!',nome+',', function () {
                                                                               window.location.href = "menu2.html";
                                                                               
                                                                               });
                                                                   
                                                                   
                                                                   } else if (result==2){
                                                                   
                                                                   myApp.alert('Erro! Sua senha não foi alterada!',nome+',', function () {
                                                                               return false;
                                                                               
                                                                               });
                                                                   
                                                                   }
                                                                   }
                                                                   
                                                                   })//ajax
                                                            return false;
                                                            })//submit
                                  
                                  }); //end
                
                // INFOS //
                $(document).ready(function(){
                                  // OUVIDORIA//
                                  $('.info_ouvidoria').on("click",function(){
                                                          
                                                          var popupHTML_msg = '<div class="popup">'+
                                                          '<div class="content-block-login">'+
                                                          '<div style="margin-top: 100px; border-radius: 10px;padding-top:20px; ">'+
                                                          '<p class="info_popup">Crie uma manifestação para registrar uma sugestão, elogio, solicitação ou reclamação relativa ao condomínio. Você também pode criar uma denúncia usando seu perfil de maneira anônima. Depois de criar sua manifestação, você poderá acompanhar o atendimento pelo CondoSócio.</p>'+
                                                          '</div>'+
                                                          
                                                          '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                          '</div>'+
                                                          '</div>';
                                                          
                                                          
                                                          myApp.popup(popupHTML_msg);
                                                          })
                                  
                                  // ACESSOS//
                                  $('.info_acessos').on("click",function(){
                                                        
                                                        var popupHTML_msg = '<div class="popup">'+
                                                        '<div class="content-block-login">'+
                                                        '<div style="margin-top: 50px; border-radius: 10px;padding-top:20px; ">'+
                                                        '<h2>ENTRADA:</h2>'+
                                                        '<p class="info_popup">Autorize à Portaria o acesso de visitantes como: <b>Convidados e/ou Prestadores de serviços eventuais.</b> Informe o nome e sobrenome do visitante ou a sua empresa. Exemplos: "Dedetizadora Emops" - "Pizza Hut" - Maria José Brito. Sempre que possível informe o celular</p>'+
                                                        
                                                        '<h1>SAÍDA:</h1>'+
                                                        '<p class="info_popup">Você também pode autorizar a saída de funcionários ou prestadores de serviços à Portaria, que transportem objetos, bastando para isso capturar imagem e informar as caracteristicas deste.</p>'+
                                                        '</div>'+
                                                        
                                                        '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                        '</div>'+
                                                        '</div>';
                                                        
                                                        
                                                        myApp.popup(popupHTML_msg);
                                                        })
                                  
                                  // OCORRENCIAS//
                                  $('.info_ocorre').on("click",function(){
                                                       
                                                       var popupHTML_msg = '<div class="popup">'+
                                                       '<div class="content-block-login">'+
                                                       '<div style="margin-top: 100px; border-radius: 10px;padding-top:20px; ">'+
                                                       
                                                       '<p class="info_popup">Faça ocorrências à administração do seu condomínio. Você pode inclusive incluir uma imagem e fazer uma breve relato sobre o ocorrido. Lembramos que isto será <b>privado</b>, apenas a administração (síndico e administradores) terão acesso as informações prestadas. Acompanhe o andamento das suas ocorrências pelo app. </p>'+
                                                       
                                                       
                                                       '</div>'+
                                                       
                                                       '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                       '</div>'+
                                                       '</div>';
                                                       
                                                       
                                                       myApp.popup(popupHTML_msg);
                                                       })
                                  // OCORRENCIAS//
                                  $('.info_reserva').on("click",function(){
                                                        
                                                        var popupHTML_msg = '<div class="popup">'+
                                                        '<div class="content-block-login">'+
                                                        '<div style="margin-top: 100px; border-radius: 10px;padding-top:20px; ">'+
                                                        
                                                        '<p class="info_popup">Faça sua(s) pré-reserva(s) e aguarde a aprovação da administração. Você receberá um alerta quando isso ocorrer. </p>'+
                                                        
                                                        
                                                        
                                                        '</div>'+
                                                        
                                                        '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                        '</div>'+
                                                        '</div>';
                                                        
                                                        
                                                        myApp.popup(popupHTML_msg);
                                                        })
                                  
                                  // FOTOS//
                                  $('.info_fotos').on("click",function(){
                                                      
                                                      var popupHTML_msg = '<div class="popup">'+
                                                      '<div class="content-block-login">'+
                                                      '<div style="margin-top: 50%; border-radius: 10px;padding-top:20px; ">'+
                                                      '<p class="info_popup">Acompanhe os eventos, por meio de imagens, que acontecem em seu condomínio.</p>'+
                                                      '</div>'+
                                                      
                                                      '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                      '</div>'+
                                                      '</div>';
                                                      
                                                      
                                                      myApp.popup(popupHTML_msg);
                                                      })
                                  
                                  // VIDEOS//
                                  $('.info_videos').on("click",function(){
                                                       
                                                       var popupHTML_msg = '<div class="popup">'+
                                                       '<div class="content-block-login">'+
                                                       '<div style="margin-top: 50%; border-radius: 10px;padding-top:20px; ">'+
                                                       '<p class="info_popup">Assista os vídeos dos eventos e festas que rolam nos condomínios. Além de dicas e palestras sobre diversos assuntos, direcionados aos moradores, administradores e  síndicos.</p>'+
                                                       '<p><a href="https://www.youtube.com/channel/UCLPOsAW7jbawmz7nB3UeDvg?sub_confirmation=1" id="msg_vis" class=" form_submit button button-outline external color-white">INSCREVA-SE NO CANAL</a></p>' +
                                                       '</div>'+
                                                       
                                                       '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                       '</div>'+
                                                       '</div>';
                                                       
                                                       
                                                       myApp.popup(popupHTML_msg);
                                                       })
                                  
                                  // DEPENDENTES//
                                  $('.info_dep').on("click",function(){
                                                    
                                                    var popupHTML_msg = '<div class="popup">'+
                                                    '<div class="content-block-login">'+
                                                    '<div style="margin-top: 50%; border-radius: 10px;padding-top:20px; ">'+
                                                    '<p class="info_popup">Você poderá adicionar até 06 (seis) dependentes. Lembramos que os dependentes são <b>necessariamente moradores</b> . Se você descumprir esta norma, estará sujeito às penalidades dispostas no Regulamento Interno e ou Convenção do condomínio. Para adicionar dependentes além do permitido, você deverá solicitar à administração condominial.</p>'+
                                                    
                                                    '</div>'+
                                                    
                                                    '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                    '</div>'+
                                                    '</div>';
                                                    
                                                    
                                                    myApp.popup(popupHTML_msg);
                                                    })
                                  
                                  // RESERVAS//
                                  $('.info_reservas').on("click",function(){
                                                         
                                                         var popupHTML_msg = '<div class="popup">'+
                                                         '<div class="content-block-login">'+
                                                         '<div style="margin-top: 20%; border-radius: 10px;padding-top:20px; ">'+
                                                         '<p class="info_popup"><i class="material-icons white">check</i> Cadastre seus convidados separando-os com vírgula;<br><i class="material-icons white">check</i>Procure informar <b>nome e sobrenome</b> do convidado;<br> <i class="material-icons white">check</i> Para ver os convidados já adicionados, click na caixa e logo em seguida na tecla <i style="vertical-align: middle;" class="material-icons">backspace</i>;<br><i class="material-icons white">check</i>Após adicioná-los, os acessos serão automaticamente enviados à Portaria;<br><i class="material-icons white">check</i>Você pode visualizar, deletar e acompanhar a chegada dos seus convidados em <b>acessos</b></p>'+
                                                         
                                                         '</div>'+
                                                         
                                                         '<div class="close_popup_button"><a href="#" class="close-popup"><img src="images/icons/white/menu_close.png" alt="" class="icon_menu texto_menu" title="" /></a></div>'+
                                                         '</div>'+
                                                         '</div>';
                                                         
                                                         
                                                         myApp.popup(popupHTML_msg);
                                                         })
                                  
                                  
                                  });
                
                
                $(document).ready(function(){
                                  $('#faleadm').submit(function(){
                                                       var assunto=$('#assunto').val();
                                                       if (assunto=="Selecione"){
                                                       $('#assuntovazio').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       
                                                       var mensagem=$('#mensagem').val();
                                                       if (mensagem==""){
                                                       $('#msgvazia').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       
                                                       myApp.showPreloader("Enviando...");
                                                       
                                                       $.ajax({      //Função AJAX
                                                              url:"https://www.condosocio.com.br/xdk/faleadm.php",     //Arquivo php
                                                              type:"post",        //Método de envio
                                                              data: "assunto="+assunto+"&mensagem="+mensagem, //Dados
                                                              
                                                              success: function (result){
                                                              
                                                              myApp.hidePreloader();
                                                              if (result==1){
                                                              
                                                              myApp.alert('Sua manifestação foi enviada com sucesso à Administração.',nome+',', function () {
                                                                          
                                                                          
                                                                          $('#assunto').val('Selecione');
                                                                          $('#mensagem').val('');
                                                                          
                                                                          
                                                                          return false;
                                                                          
                                                                          });
                                                              
                                                              } else{
                                                              
                                                              myApp.alert('Erro! Mensagem não enviada.',nome+',', function () {
                                                                          return false;
                                                                          });
                                                              
                                                              }
                                                              }
                                                              })//ajax
                                                       return false;
                                                       })//submit
                                  
                                  }); //end
                

                
                $(document).ready(function(){
                                  
                                  $('#boletoenviar').submit(function(){
                                                            
                                                            $('#emailvazio').html('');
                                                            $('#senhavazia').html('');
                                                            
                                                            var email=$('#email_adm').val();
                                                            if (email==''){
                                                            $('#emailvazio').html('Campo obrigatório!');
                                                            return false;
                                                            }
                                                            
                                                            var senha=$('#senha_adm').val();
                                                            if (senha==''){
                                                            $('#senhavazia').html('Campo obrigatório!');
                                                            return false;
                                                            }
                                                            
                                                            var licenca = $('input#licenca').val();
                                                            // tira ps espacos em branco
                                                            var email = email.trim();
                                                            
                                                            
                                                            myApp.showIndicator();
                                                            
                                                            $.ajax({      //Função AJAX
                                                                   url:"https://www.condosocio.com.br/xdk/auth_super.php",     //Arquivo php
                                                                   type:"post",        //Método de envio
                                                                   data: "email="+email+"&senha="+senha+"&licenca="+licenca, //Dados
                                                                   
                                                                   success: function (result){
                                                                   
                                                                   
                                                                   var retorno = JSON.parse(result);
                                                                   
                                                                   if(retorno.status==202){
                                                                   
                                                                   
                                                                   localStorage.setItem('senha_adm',senha)
                                                                   
                                                                   mainView.router.loadPage('admvis.html');
                                                                   
                                                                   $.ajax({      //Função AJAX
                                                                          
                                                                          url:"https://www.condosocio.com.br/xdk/request_adm.php",
                                                                          type:"post",        //Método de envio
                                                                          data: "session="+retorno.session,
                                                                          
                                                                          success: function (result){
                                                                          
                                                                          myApp.hideIndicator();
                                                                          var res = JSON.parse(result);
                                                                          var list="";
                                                                          
                                                                          if ( res.data.length!=0 ){
                                                                          
                                                                          
                                                                          
                                                                          for (var i=0 ; i < res.data.length; i++){
                                                                          
                                                                          var data_venc = moment(res.data[i].dt_vencimento_recb).format("DD/MM/YYYY");
                                                                          
                                                                          
                                                                          list+='<li class="table_row" >'+
                                                                          '<div class="swipeout-content">'+
                                                                          
                                                                          '<div class="table_section_14" >'+data_venc+'</div>'+
                                                                          
                                                                          '<div class="table_section_14">'+res.data[i].encargos.valorcorrigido+'</div>'+
                                                                          
                                                                          '<div class="table_section_14" style="color:green">'+res.data[i].encargos.diasatraso+' dias</div>'+
                                                                          
                                                                          '<div class="table_section_14 buscar_vis"style="color:green"><a href="'+res.data[i].link2viaboleto+'.pdf" class="external"><svg aria-hidden="true" focusable="false" data-prefix="fas" class="post-date" data-icon="download" style="width:24" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg></a></div>'+
                                                                          
                                                                          '</div>'+
                                                                          '</li>';
                                                                          
                                                                          }
                                                                          
                                                                          
                                                                          
                                                                          $('.lista_boletos').html(list);
                                                                          
                                                                          } else {
                                                                          
                                                                          $('.lista_boletos').html('<h2 class="page_title" style="margin-top: 20%;font-size:22;font-weight:bold;;background-color:yellow">'+nome+' você não possui boletos vencidos ou à vencer.</h2></div>');
                                                                          
                                                                          }
                                                                          
                                                                          
                                                                          }
                                                                          })
                                                                   
                                                                   } else {
                                                                   myApp.hideIndicator();
                                                                   myApp.alert('E-mail e/ou senha incorreta! Qualquer dúvida, procure a administração.',nome,function(){
                                                                               
                                                                               return false;
                                                                               })
                                                                   
                                                                   }
                                                                   
                                                                   
                                                                   }
                                                                   })//ajax
                                                            return false;
                                                            })//submit
                                  
                                  }); //end
                
                
                
                // add ocorrencias
                $(document).ready(function(){
                                  
                                  $('#img_oco').on("click",function(){
                                                   
                                                   Foto.opcaoCamera(50,500,500);
                                                   
                                  });
                                  
                                  $('#ocorre_enviar').submit(function(a){
                                                          a.preventDefault();
                                                           
                                                         var registro_oco = $('#registro_oco').val();
                                                           if (registro_oco == ""){
                                                           $('#registrovazia').html("campo obrigatório!");
                                                           return false;
                                                           }
                                                           
                                                           var tituloco = $('#tituloco').val();
                                                           if (tituloco == ""){
                                                           $('#titulocovazia').html("campo obrigatório!");
                                                           return false;
                                                           }
                                                            
                                                           var dataoco = $('#dataoco').val();
                                                           if (dataoco==""){
                                                           $('#dataocovazia').html("campo obrigatório!");
                                                           return false;
                                                           }
                                                              
                                                           var horaoco = $('#horaoco').val();
                                                           if (horaoco == ""){
                                                           $('#horaocovazia').html("campo obrigatório!");
                                                           return false;
                                                           }
                                                           
                                                           
                                                           var descricaoco = $('#descricaoco').val();
                                      
                                                           if (descricaoco == ""){
                                                           $('#descricaocovazia').html("campo obrigatório!");
                                                           return false;
                                                           }
                                                           
                                                           myApp.confirm('Confirma o envio da ocorrência?',nome, function () {
                                                                         
                                                                         Foto.uploadPhotoOco("UploadImagemOco.php?registro="+registro_oco+"&tituloco="+tituloco+"&dataoco="+dataoco+"&horaoco="+horaoco+"&descricaoco="+descricaoco,nome);
                                                                         
                                                                         
                                                                         });
                                                           
                                                           return false;
                                                           })//submit
                                  
                                  }); //end
               
               
                $(document).ready(function(){
                                  
                                  $('#img_autsai').on("click",function(){
                                                      
                                                      Foto.opcaoCamera(50,500,500);
                                                      
                                                      });
                                  
                                  $('#saiaut').submit(function(e){
                                                      e.preventDefault();
                                                      
                                                      var tiposai=$('#tiposai').val();
                                                      if (tiposai=="0"){
                                                      $('#tipovazia').html("Selecione uma opção!");
                                                      return false;
                                                      }
                                                      var nome_aut=$('#nome').val();
                                                      if (nome_aut==""){
                                                      $('#nomevazia').html("campo obrigatório!");
                                                      return false;
                                                      }
                                                      
                                                      var obs=$('#obs').val();
                                                      
                                                      
                                                     myApp.confirm('Confirma o envio da autorização?',nome, function () { Foto.uploadPhoto("UploadImagemAut.php?tiposai="+tiposai+"&nome="+nome_aut+"&obs="+obs);
                                                      
                                                    })
                                                      
                                                })//submit
                                  
                                  }); //end
                // buscar area
                
                
                
                $(document).ready(function(){
                                  
                                  $('#areabusca').on('change', function() {
                                                     
                                                     var nome = this.value;
                                                     
                                                     $.ajax({      //Função AJAX
                                                            url:"https://www.condosocio.com.br/xdk/areacontrato.php?nome="+nome,
                                                            
                                                            success: function(data) {
                                                            if (data[0].contrato!=""){
                                                            var popupHTML =  '<div class="popup">'+
                                                            '<div class="content-block-link" style="background-color:#ffffff;padding: 5px 5px 5px 5px">'+
                                                            '<div style="margin-top: 100px; border-radius: 10px;padding:20px; ">'+
                                                            '<h1 style="color: #000;font-size:22px;font-weight:300px;text-align:center">TERMO DE USO ÁREA COMUM</h1>'+
                                                            '<p style="color:#fff;font-size:16px;text-align:left;margin-left:10px;">'+data[0].contrato+'</p>'+
                                                            '<div style="text-align:center;padding-bottom:20px">'+
                                                            '<input type="checkbox" style="font-size:30px" class="close-popup" style="color:blue" name="termo" id="termo" value=""/>'+
                                                            '<span style="color:blue;text-shadow: 4px;line-height: 1.8;opacity: 1;font-weight: 400;font-size:20px;text-align:right" >  Li e concordo com o TERMO DE USO DA ÁREA COMUM</span>'+
                                                            '</div>'+
                                                            '</div>'+
                                                            '</div>'+
                                                            '</div>'
                                                            myApp.popup(popupHTML);
                                                            return false;
                                                            } else{
                                                            
                                                            return false;
                                                            }
                                                            }
                                                            })
                                                     })
                                  });
                
                $(document).ready(function(){
                                  
                                  function AreaComum(){
                                  $("#areabusca").html('<option>Carregando...</option>');
                                  $.ajax({      //Função AJAX
                                         url:"https://www.condosocio.com.br/xdk/areabusca.php",
                                         
                                         success: function(data) {
                                         
                                         var i;
                                         var buscarea="";
                                         for (i = 0; i < data.length; i++){
                                         buscarea+='<option value="'+data[i].nome+'">'+data[i].nome+'</option>';
                                         }
                                         
                                         $('#areabusca').html('<option selected disabled>Selecione </option>'+buscarea);
                                         }
                                         });
                                  }
                                  
                                  AreaComum();
                                  
                                  });
                
                
                // INCLUIR RESERVA //
                $(document).ready(function(){
                                  $('#eventos').submit(function(){
                                                       
                                                       
                                                       $('#titulovazio').html("");
                                                       $('#datavazio').html("");
                                                       $('#hivazio').html("");
                                                      
                                                       var area=$('#areabusca').val();
                                      if (area=="" || area ==null){
                                      $('#areavazio').html("campo obrigatório!");
                                      return false;
                                      }
                                                       var titulo=$('#titulo').val();
                                      
                                                       if (titulo=="" || titulo ==null){
                                                       $('#titulovazio').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       
                                                       var dtinic = $('#dtinic').val();
                                                       if (dtinic==""){
                                                       $('#datavazio').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                       
                                                       var d = new Date(dtinic);
                                                       d.setDate(d.getDate() + 2);
                                                       
                                                       
                                                       if (new Date() > d){
                                                       $('#datavazio').html("Data não permitida!");
                                                       return false;
                                                       }
                                                       var horainic=$('#horainic').val();
                                                       if (horainic==""){
                                                       $('#hivazio').html("campo obrigatório!");
                                                       return false;
                                                       }
                                                      
                                                       
                                                       myApp.confirm('Confirma o envio do evento?',nome, function () {
                                                                     
                                                                     myApp.showIndicator();
                                                                     
                                                                     $.ajax({      //Função AJAX
                                                                            url:"https://www.condosocio.com.br/xdk/eventoadd2.php",     //Arquivo php
                                                                            type:"post",        //Método de envio
                                                                            data: "titulo="+titulo+"&area="+area+"&dtinic="+dtinic+"&horainic="+horainic, //Dados
                                                                            
                                                                            success: function (result){
                                                                              
                                                                                
                                                                                myApp.hideIndicator();
                                                                                
                                                                                
                                                                            if (result==1){
                                                                            myApp.alert('Sua pré-reserva foi adicionada com sucesso!\nAguarde aprovação da Administração',nome, function () {
                                                                                GoMenu();
                                                                                        
                                                                                        });
                                                                            
                                                                            } else {
                                                                            myApp.alert('Erro! Reserva não adicionada. Tente novamente',nome+',', function () {
                                                                                        return false;
                                                                                        
                                                                                        });
                                                                            }
                                                                            }
                                                                            })//ajax
                                                                     })
                                                       return false;
                                                       })//submit
                                  
                                  }); //end
                //FIM RESERVA
                
                
                
                
                
                $(document).ready(function(){
                                  
                                  $('#comunica_visual').on("click",function(){
                                                           
                                                           myApp.showIndicator();
                                                           
                                                           $.ajax({            //Função AJAX
                                                                  url:'https://www.condosocio.com.br/xdk/comunicados.php',
                                                                  
                                                                  success: function(data) {
                                                                  
                                                                  myApp.hideIndicator();
                                                                  
                                                                  if (data==0 || data==""){
                                                                  
                                                                  $('#titulocom').html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                                       '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' seu condomínio ainda não postou comunicados.</h2></div>');
                                                                  
                                                                  } else{
                                                                  var i;
                                                                  var comunica="";
                                                                  for (i = 0; i < data.length; i++){
                                                                  
                                                                  comunica+='<li class="table_row loadcom">'+
                                                                  
                                                                  '<div class="post_entry">'+
                                                                  
                                                                  '<div class="post_date">'+
                                                                  '<span class="day">'+data[i].dia+'</span>'+
                                                                  '<span class="month">'+data[i].mes+'  | </span>'+
                                                                  '<span class="post_title">'+data[i].titulo+'</span>'+
                                                                  
                                                                  '</div>'+
                                                                  
                                                                  
                                                                  '<div class="custom-accordion accordion-list"  >'+
                                                                  
                                                                  '<div class="accordion-item" style="margin-right:10px">'+
                                                                  '<div class="accordion-item-toggle" >'+
                                                                  '<i class="icon icon-plus" style="float: right">+</i>'+
                                                                  '<i class="icon icon-minus" style="float: right">-</i>'+
                                                                  '</div>'+
                                                                  
                                                                  '<div class="accordion-item-content text-center" ><p>'+data[i].texto+'</p></div>'+
                                                                  
                                                                  '</div></div>'+
                                                                  '</li>';
                                                                  
                                                                  }
                                                                  
                                                                  }
                                                                  
                                                                  $('#titulocom').html(comunica);
                                                                  
                                                                  
                                                                  $(".loadcom").hide();
                                                                  
                                                                  size_com = $(".loadcom").size();
                                                                  if (size_com==0){
                                                                  $('#loadMoreCom').hide();
                                                                  $('#showLessCom').hide();
                                                                  }
                                                                  
                                                                  x=5;
                                                                  
                                                                  $('.loadcom:lt('+x+')').show();
                                                                  
                                                                  
                                                                  $('#loadMoreCom').click(function () {
                                                                                          
                                                                                          x= (x+1 <= size_com) ? x+4: size_com;
                                                                                          
                                                                                          $('.loadcom:lt('+x+')').show();
                                                                                          
                                                                                          if(x == size_com){
                                                                                          $('#loadMoreCom').hide();
                                                                                          $('#showLessCom').show();
                                                                                          }
                                                                                          })
                                                                  
                                                                  
                                                                  }
                                                                  })
                                                           })
                                  });
                
/*################ SELECT DE VISITANTES ################*/
                $(document).ready(function(){
                                  
                                  $( "#busca_empresa" ).autocomplete({
                                                                     
                                                                     autoFocus: true,
                                                                     minLength: 2,
                                                                     source: function( request, response ) {
                                                                     
                                                                     // Fetch data
                                                                     $.ajax({
                                                                            url: "https://condosocio.com.br/xdk/get_busca_empresas.php",
                                                                            type: 'post',
                                                                            dataType: "json",
                                                                            data: {
                                                                            search: request.term
                                                                            },
                                                                            success: function( data ) {
                                                                            response( data );
                                                                            }
                                                                            });
                                                                     },
                                                                     select: function (event, ui) {
                                                                     
                                                                     submit.disabled = false;
                                                                     $('#busca_empresa').val(ui.item.label); // display the selected text
                                                                     $('#empresa_id').val(ui.item.value); // save selected id to input
                                                                     return false;
                                                                     },
                                                                     
                                                                     })
                                  });
                
                
                $(document).ready(function(){
                                  
                                  $( "#busca_atividade" ).autocomplete({
                                                                       autoFocus: true,
                                                                       minLength: 2,
                                                                       source: function( request, response ) {
                                                                       
                                                                       // Fetch data
                                                                       $.ajax({
                                                                              url: "https://condosocio.com.br/xdk/get_busca_atividades.php",
                                                                              type: 'post',
                                                                              dataType: "json",
                                                                              data: {
                                                                              search: request.term
                                                                              },
                                                                              success: function( json ) {
                                                                              
                                                                              response( json );
                                                                              }
                                                                              });
                                                                       },
                                                                       select: function (event, ui) {
                                                                       submit2.disabled = false;
                                                                       $('#busca_atividade').val(ui.item.label); // display the selected text
                                                                       $('#atividade_id').val(ui.item.value); // save selected id to input
                                                                       return false;
                                                                       }
                                                                       });
                                  
                                  });
                
                
/*################ SELECT DE VISITANTES ################*/
                
                $('#pesquisa_empresa').submit(function(e){
                                              e.preventDefault();
                                              
                                              myApp.showIndicator();
                                              
                                              var idforn = $('#empresa_id').val();
                                              
                                              mainView.router.loadPage('inforn.html');
                                              
                                              $.ajax({
                                                     
                                                     url:"https://www.condosocio.com.br/xdk/inforn.php?idforn="+idforn,
                                                     type:"get",
                                                     contentType: 'application/json',
                                                     dataType: 'json',
                                                     
                                                     success: function(data) {
                                                     
                                                     myApp.hideIndicator();
                                                     
                                                     $('#info').html('<div class="card">'+
                                                                     '<div class="card-content">'+
                                                                     '<div class="card-content-inner">'+
                                                                     '<div align="center">'+
                                                                     '<img  style="border-radius:10px" width="100px" src="'+data[0].imgforn+'">'+
                                                                     '<h1 style="font-size:16px">'+data[0].fantasia+'</h1>'+
                                                                     '<label>'+data[0].atividades+'</label>'+
                                                                     '<label class="post_date" style="margin-left:20px;text-align:center"><a class="external" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=pt&amp;geocode=&amp;q='+data[0].end+'-'+data[0].bairro+'-'+data[0].cidade+'-'+data[0].uf+'&amp;aq=0&amp;ie=UTF8&amp;hq=&amp;hnear='+data[0].end+'-'+data[0].bairro+'-'+data[0].cidade+'-'+data[0].uf+'&amp;t=m&amp;ll='+data[0].lat+','+data[0].lng+'&amp;z=15&amp;iwloc=&amp;output=embed"><i class="material-icons">place</i>'+data[0].end+'-'+data[0].bairro+'<br>'+data[0].cidade+'-'+data[0].uf+'</a></label>'+
                                                                     '<div align="center"><h1 class="post_date avalie">'+data[0].media+' ★ | '+data[0].qtd+' avaliações</h1></div>'+
                                                                     '<p class="buttons-row">'+data[0].tel+'</p><p class="buttons-row ">'+data[0].cel+'</p><p class="buttons-row ">'+data[0].whatsapp+'</p><p class="buttons-row ">'+data[0].email+'</p><p class="buttons-row ">'+data[0].site+'</p>'+
                                                                     '</div></div></div></div>');
                                                     
                                                     
                                                     $('#avalia').html('<input type="hidden" name="idforn" id="idforn" value=" '+idforn+' " />');
                                                     }
                                                     })
                                              myApp.showIndicator();
                                              $.ajax({      //Função AJAX
                                                     url:"https://www.condosocio.com.br/xdk/avaliacao.php?idforn="+idforn,
                                                     type:"get",
                                                     contentType: 'application/json',
                                                     dataType: 'json',
                                                     
                                                     success: function(resultado) {
                                                     myApp.hideIndicator();
                                                     
                                                     var sliderav="";
                                                     
                                                     for (i = 0; i < resultado.length; i++){
                                                     
                                                     sliderav+='<div class="box_fornecedor"><label class="pull_left">'+resultado[i].estrelas+'★</label><label class="pull_right"><b>'+resultado[i].usuario+'</b></label><p class="pull_right">'+resultado[i].data+'</p><p class="pull_right">'+resultado[i].cond+'</p><p style="text-align:justify;"><i>"'+resultado[i].comentario+'"</i></p></div>';
                                                     }
                                                     
                                                     
                                                     $('#sliderav').html(sliderav);
                                                     
                                                     }
                                                     
                                                     })
                                              
                                              
                                              })
                
/*################ SELECT DE VISITANTES ################*/
                
                $('#pesquisa_atividade').submit(function(e){
                                                e.preventDefault();
                                                
                                                myApp.showIndicator();
                                                
                                                var idativ = $('#atividade_id').val();
                                                
                                                mainView.router.loadPage('acheaqui.html');
                                                
                                                $.ajax({      //Função AJAX
                                                       
                                                       url:"https://www.condosocio.com.br/xdk/acheaqui.php?idativ="+idativ,
                                                       type: 'get',
                                                       contentType: 'application/json',
                                                       dataType: 'json',
                                                       success: function(data) {
                                                       
                                                       myApp.hideIndicator();
                                                       
                                                       
                                                       if (data==""){
                                                       
                                                       
                                                       $('.acheaqui').html('<div style="padding-top:100px" class="logo">'+
                                                                           '<img  src="images/empty.png"/></div>');
                                                       
                                                       } else {
                                                       
                                                       var myList = myApp.virtualList('.acheaqui', {
                                                                                      items: data,
                                                                                      // Template 7 template to render each item
                                                                                      template: '<li class="item-content" style="margin-bottom:10px;margin-top:10px" >' +
                                                                                      '<a href="inforn.html"  data-idforn="{{id}}" class="ache item-link item-content">'+
                                                                                      '<div class="item-media" style="float: left;padding:0px 10px 0px 10px"><img width="60px" src="{{imgforn}}"></div>'+
                                                                                      '<div class="item-inner" style="padding-bottom:5px">'+
                                                                                      '<div class="item-title-row">'+
                                                                                      '<div class="item-title buscar"><h1>{{fantasia}}<h1></div>'+
                                                                                      '</div>'+
                                                                                      '<div class="item-subtitle buscar">{{end}}</div>'+
                                                                                      '<div class="item-subtitle buscar">{{bairro}} - {{cidade}} - {{uf}}</div>'+
                                                                                      
                                                                                      '</div>'+
                                                                                      '</a>'+
                                                                                      '</li>',
                                                                                      });
                                                       }
                                                       }
                                                       })
                                                
                                                });
                
                
                
                // adnistradoras logomarca
                
                $(document).ready(function(){
                                  
                                  function Adm(){
                                  
                                  var idadm= localStorage.getItem('idadm');
                                  
                                  
                                  $.get('https:condosocio.com.br/xdk/adm_vis.php?idadm='+idadm,function(data){
                                        
                                        //var cel = data[0].cel.replace(/[\-\(\)]/g," ");
                                        //var cel = cel.replace(/ /g,"");
                                        //alert(cel)
                                        
                                        $('#img-adm').html('<img src="https://www.condosocio.com.br/acond/img/logo_adm/'+data[0].imglogo+'" width="200" align="center"/>');
                                        $('#dados').html('<p class="color-black">Entre com e-mail e senha do sistema de cobrança da administradora <b>'+data[0].nome+'</b> para ter acesso aos seus  boletos</p><p><a href="'+data[0].website+'" class="col button button-outline external">Primeiro Acesso</a></p>');
                                        
                                        $('#licenca').html('<input type="hidden" name="licenca" id="licenca" value="'+data[0].licenca+'" class="form_input" />')
                                        
                                        
                                        })
                                  
                                  }
                                  
                                  Adm();
                                  
                                  });
                
                $(document).ready(function(){
                                  
                                  function Doc_Contagem(){
                                  
                                  
                                  $('#banner_doc').html('<img src="images/loading.gif" style="padding-top:80px;margin-left: 42%;margin-bottom: 80px;" width="12%">');
                                  
                                  $.get('https:condosocio.com.br/xdk/banners_publi.php?espaco=Documentos',function(data){
                                        
                                            if  (data.tipo_link=="URL EXTERNA"){
                                              
                                              $('#banner_doc').html('<a href="javascript:void(0)" onclick = "Click_Externa(\'' + data.url+ '\',\'' + data.anunciante+ '\',\'' + data.espaco+ '\',\'' + data.campanha+ '\')" )" class="external"><img src="https://condosocio.com.br/images/bannereventos/'+data.img+'" /></a>');
                                             
                                            } else if (data.tipo_link=="API WHATSAPP"){
                                               
                                                                var celular = data.cel.replace('-','');
                                                                var celular = celular.replace('(','');
                                                                var celular = celular.replace(')','');
                                                                var celular = celular.replace(' ','');
                                                                var celu = celular.substr(-11,11);
                                                                var celular = '55'+celu;
                                                
                                                $('#banner_doc').html('<a href="javascript:void(0)"  onclick="Click_Banner_What('+celular+',\'' + data.anunciante+ '\',\'' + data.espaco+ '\',\'' + data.campanha+ '\')"><img src="https://condosocio.com.br/images/bannereventos/'+data.img+'" /></a>');
                                                
                                              } else {
                                                  $('#banner_doc').html('');
                                              }
                                      
                                      
                                      
                                        })
                                  }
                                  Doc_Contagem();
                                  });
                
                
                jQuery(document).ready(function(){
                                       jQuery("#hide").click(function(){
                                                             jQuery("p").hide();
                                                             });
                                       jQuery("#show").click(function(){
                                                             jQuery("p").show();
                                                             });
                                       });
                
                
                $("#RegisterForm").validate();
                $("#LoginForm").validate();
                $("#ForgotForm").validate();
                
                $('a.backbutton').click(function(){
                                        parent.history.back();
                                        return false;
                                        });
                
                
                $(".posts li").hide();
                size_li = $(".posts li").size();
                x=4;
                $('.posts li:lt('+x+')').show();
                $('#loadMore').click(function () {
                                     x= (x+1 <= size_li) ? x+1 : size_li;
                                     $('.posts li:lt('+x+')').show();
                                     if(x == size_li){
                                     $('#loadMore').hide();
                                     $('#showLess').show();
                                     }
                                     });
                
                
                
                
                // -- FOTOS APP --
                $(document).ready(function(){
                                  $('#fotos_app').on('click',function(){
                                                     
                                                     
                                                     myApp.showIndicator();
                                                     
                                                     $.ajax({      //Função AJAX
                                                            url:"https://www.condosocio.com.br/xdk/fotosapp.php",
                                                            success: function(data) {
                                                            
                                                            myApp.hideIndicator();
                                                            
                                                            if (data==0){
                                                            
                                                            $('#imgapp'). html('<div style="padding-top:100px;max-width:100%" class="logo">'+
                                                                               '<h2 class="page_title" style="font-size:22;font-weight:bold;;background-color:yellow">'+nome+' seu condomínio ainda não postou eventos.</h2></div>');
                                                            
                                                            
                                                            } else {
                                                            var ulimg="";
                                                            var fim="";
                                                            var cabeca="";
                                                            var i;
                                                            var s;
                                                            
                                                            for (i = 0; i < data.length; i++){
                                                            
                                                            cabeca+='<a href="#'+i+'" class="tab-link category-link">'+data[i].titulo+'</a>';
                                                            
                                                            if (i!=0){
                                                            var classe="tab";
                                                            } else {
                                                            var classe="tab active";
                                                            }
                                                            
                                                            ulimg="";
                                                            
                                                            for (s = 0; s < data[i].numfotos; s++){
                                                            
                                                            
                                                            ulimg+='<li><a rel="gallery-3"  class="swipebox" href="https://www.condosocio.com.br/acond/downloads/fotosapp/'+data[i].idcond+'.'+data[i].tit+'.'+s+'.jpg" title="'+data[i].titulo+'"  ><img src="https://www.condosocio.com.br/acond/downloads/fotosapp/'+data[i].idcond+'.'+data[i].tit+'.'+s+'.jpg"/></a></li>';
                                                            
                                                            }
                                                            
                                                            fim+='<div id="'+i+'" class="'+classe+'"><ul id="photoslist" class="photo_gallery_13">'+ulimg+'<a href="'+data[i].url+'" title="Publicidade" class="external"><img src="https://condosocio.com.br/images/bannereventos/'+data[i].img+'" style="width:100%;max-height:550px;" alt="image"/></a>'+
                                                            '<div class="clearleft"></div>'+
                                                            '</ul></div>';
                                                            
                                                            }
                                                            
                                                            $('#imgapp').html('<div class="photo-categories">'+cabeca+'</div><div class="tabs-animated-wrap photos_tabs"><div class="tabs">'+fim+'</div></div>');
                                                            $(".swipebox").swipebox();
                                                            
                                                            }
                                                            
                                                            }
                                                            })
                                                     })
                                  });
                
                
                $("a.switcher").bind("click", function(e){
                                     e.preventDefault();
                                     
                                     var theid = $(this).attr("id");
                                     var theproducts = $("ul#photoslist");
                                     var classNames = $(this).attr('class').split(' ');
                                     
                                     
                                     if($(this).hasClass("active")) {
                                     // if currently clicked button has the active class
                                     // then we do nothing!
                                     return false;
                                     } else {
                                     // otherwise we are clicking on the inactive button
                                     // and in the process of switching views!
                                     
                                     if(theid == "view13") {
                                     $(this).addClass("active");
                                     $("#view11").removeClass("active");
                                     $("#view11").children("img").attr("src","images/switch_11.png");
                                     
                                     $("#view12").removeClass("active");
                                     $("#view12").children("img").attr("src","images/switch_12.png");
                                     
                                     var theimg = $(this).children("img");
                                     theimg.attr("src","images/switch_13_active.png");
                                     
                                     // remove the list class and change to grid
                                     theproducts.removeClass("photo_gallery_11");
                                     theproducts.removeClass("photo_gallery_12");
                                     theproducts.addClass("photo_gallery_13");
                                     
                                     }
                                     
                                     else if(theid == "view12") {
                                     $(this).addClass("active");
                                     $("#view11").removeClass("active");
                                     $("#view11").children("img").attr("src","images/switch_11.png");
                                     
                                     $("#view13").removeClass("active");
                                     $("#view13").children("img").attr("src","images/switch_13.png");
                                     
                                     var theimg = $(this).children("img");
                                     theimg.attr("src","images/switch_12_active.png");
                                     
                                     // remove the list class and change to grid
                                     theproducts.removeClass("photo_gallery_11");
                                     theproducts.removeClass("photo_gallery_13");
                                     theproducts.addClass("photo_gallery_12");
                                     
                                     }
                                     else if(theid == "view11") {
                                     $("#view12").removeClass("active");
                                     $("#view12").children("img").attr("src","images/switch_12.png");
                                     
                                     $("#view13").removeClass("active");
                                     $("#view13").children("img").attr("src","images/switch_13.png");
                                     
                                     var theimg = $(this).children("img");
                                     theimg.attr("src","images/switch_11_active.png");
                                     
                                     // remove the list class and change to grid
                                     theproducts.removeClass("photo_gallery_12");
                                     theproducts.removeClass("photo_gallery_13");
                                     theproducts.addClass("photo_gallery_11");
                                     
                                     }
                                     
                                     }
                                     
                                     });
                /*$('.autoriza').on('click', function () {
                 var buttons = [
                 {
                 text: 'Entrada de Visitante',
                 bold: true,
                 onClick: function () {
                 mainView.router.loadPage('acesso.html');
                 }
                 },
                 
                 {
                 text: 'Autorização de Saída',
                 onClick: function () {
                 mainView.router.loadPage('autsaida.html');
                 }
                 },
                 {
                 text: 'Cancelar',
                 color: 'red'
                 },
                 ];
                 myApp.actions(buttons);
                 });*/
                
                document.addEventListener('touchmove', function(event) {
                                          if(event.target.parentNode.className.indexOf('navbarpages') != -1 || event.target.className.indexOf('navbarpages') != -1 ) {
                                          event.preventDefault(); }
                                          }, false);
                
                // Add ScrollFix
                var scrollingContent = document.getElementById("pages_maincontent");
                new ScrollFix(scrollingContent);
                
                
                var ScrollFix = function(elem) {
                // Variables to track inputs
                var startY = startTopScroll = deltaY = undefined,
                
                elem = elem || elem.querySelector(elem);
                
                // If there is no element, then do nothing
                if(!elem)
                return;
                
                // Handle the start of interactions
                elem.addEventListener('touchstart', function(event){
                                      startY = event.touches[0].pageY;
                                      startTopScroll = elem.scrollTop;
                                      
                                      if(startTopScroll <= 0)
                                      elem.scrollTop = 1;
                                      
                                      if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
                                      elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
                                      }, false);
                };
                
                
                })



$(document).ready(function(){
                  
                  $('#formlogin').submit(function(){     //Ao submeter formulário
                                         
                                         var login=$('#login').val();  //Pega valor do campo email
                                         var senha=$('#senha').val();  //Pega valor do campo senha
                                         var termo = this.termo.checked;
                                         
                                         if (termo ==false){
                                         
                                         myApp.alert('Você deve clicar na caixa e aceitar o Termo de Uso e a Política de Privacidade','<div style="color:red">Alerta!</div>', function () {
                                                     return false;
                                                     
                                                     });
                                         } else {
                                         
                                         myApp.showPreloader('Iniciando conexão segura...');
                                         
                                         
                                         
                                         
                                         
                                         $.ajax({            //Função AJAX
                                                url:"https://www.condosocio.com.br/xdk/login_2.php",            //Arquivo php
                                                type:"post",                //Método de envio
                                                data: "login="+login+"&senha="+senha,    //Dados
                                                success: function (result){            //Sucesso no AJAX
                                                
                                                myApp.hidePreloader();
                                                
                                                if(result.valida==1){
                                                
                                                localStorage.setItem('login', login);
                                                localStorage.setItem('senha', senha);
                                                localStorage.setItem('email',result.email);
                                                
                                                window.location.href = "menu2.html";
                                                
                                                Unidades();
                                                
                                                /*document.addEventListener('deviceready', function () {
                                                 
                                                 window.plugins.OneSignal.sendTags({idcond: result.idcond, idusu: result.idusu,nome:result.nome,tipousuario:result.tipousuario,genero:result.genero,logradouro:result.logradouro});
                                                 
                                                 
                                                 }, false);*/
                                                
                                                }  else {
                                                
                                                myApp.alert('Login ou e-mail digitados não correspondem.Tente novamente','<div style="color:red">Alerta!</div>', function () {
                                                            return false;
                                                            
                                                            });
                                                }
                                                }
                                                })
                                         }
                                         return false;    //Evita que a página seja atualizada
                                         
                                         
                                         })
                  
                  });


    

$(document).ready(function(){
                  
                  $('#senhared').submit(function(){  //Ao submeter formulário
                                        
                                        myApp.showPreloader("Aguarde...");
                                        
                                        var email=$('#email').val();  //Pega valor do campo email
                                        
                                        $.ajax({      //Função AJAX
                                               url:"https://www.condosocio.com.br/xdk/senharedefinir.php",     //Arquivo php
                                               type:"post",        //Método de envio
                                               data: "email="+email, //Dados
                                               success: function (result){     //Sucesso no AJAX
                                               myApp.hidePreloader();
                                               
                                               if(result==1){
                                               myApp.alert('Solicitação enviada para o e-mail. Siga as instrucões para redefinir sua senha.','CondoSócio!', function () {
                                                           return false;
                                                           });
                                               } else{
                                               
                                               myApp.alert('E-mail inexistente no sistema. Procure a Administração do seu Condomínio','<div style="color:red">ERRO!</div>', function () {
                                                           return false;
                                                           
                                                           });
                                               }
                                               }
                                               })
                                        return false; //Evita que a página seja atualizada
                                        })
                  });



function Sair(){
    localStorage.clear();
    window.location.href = "index.html";
}

function SairMenu(){
    window.location.href = "menu2.html";
}


function ImgPerfil(idusu,a){
                                             
                  
    myApp.showIndicator();
    
    $.ajax({            //Funçã o AJAX
           url:"https://www.condosocio.com.br/xdk/idimagem2.php?idusu="+idusu,            //Arquivo php
           success: function(data) {
           
           //$('#imgcond').removeClass("preload").hide;
           
           if (data.cor=="" || data.cor==" " || data.cor=="undefined"){
           window.location.href = "index.html";
           }
           
              
               
                                                                var celular = data.cel_what.replace('-','');
                                                                var celular = celular.replace('(','');
                                                                var celular = celular.replace(')','');
                                                                var celular = celular.replace(' ','');
                                                                var celu = celular.substr(-11,11);
                                                                var celular = '55'+celu;
              
             
               
               if (data.tipo_link=="URL LOCAL"){
                   var button_what =  '<button onclick="Click_Local(\'' + data.url_local+ '\')" style="font-size:16px;margin-top:8px;" class="col-100 close-popup button button-fill">'+data.botao+' </button>';
               
               } else if  (data.tipo_link=="URL EXTERNA"){
                  
                   var button_what = '<button onclick="Click_Externa(\'' + data.url+ '\',\'' + data.anunciante+ '\',\'' + data.espaco+ '\',\'' + data.campanha+ '\')" )"  style="font-size:16px;margin-top:8px;" class="col-100  close-popup button button-fill">'+data.botao+' </button>';
                   
               } else  if (data.tipo_link=="API WHATSAPP"){
                   
                    var button_what = '<button onclick="Click_Banner_What('+celular+',\'' + data.anunciante+ '\',\'' + data.espaco+ '\',\'' + data.campanha+ '\')" style="font-size:16px;margin-top:8px;" class="col-100  close-popup button button-fill">'+data.botao+' </button>';
                   
               } else {
                   var button_what = "";
               }
    
                  var popupHTML_msg = '<div class="popup">'+
                                                          '<div class="content-block-login">'+
                                                          '<div style="padding-top: 70px;">'+
                                                          '<img src="https://condosocio.com.br/images/bannereventos/banner_tela_inicial.jpg" width="100%" class="external" />'+
               
                                                            '<div class="block">'+
                                                              '<div class="row">'+
                                                                button_what+
                                                                '<button  style="font-size:16px; color:#fff;margin-top:8px;" onclick="GoMenu()" class="col-100 close-popup button button-outline">PROSSIGA COM O CONDOSÓCIO</button>'+
                                                              '</div>'+
                                                            '</div>'+
               
                                                          '</div>'+
                                                          '</div>';
                                                          
                                                          
                                                        
                  myApp.popup(popupHTML_msg);
               
           localStorage.setItem('nome', data.nome);
           localStorage.setItem('cor',data.cor);
           localStorage.setItem('logocond',data.logocond);
           localStorage.setItem('imgp',data.imgp);
           localStorage.setItem('nomecond', data.nomecond);
           
           var cor = localStorage.getItem('cor');
           $('#cor').html('<link rel="stylesheet" id="cor" href="css/colors/'+cor+'.css">');
           
           //$('#preload').removeClass("preload").hide;
           if (data.logocond==""){
           $('#imgcond').html('<h1 style="color:#fff;padding-top:60%;font-size:35px;font-weight:600">CONDOMÍNIO<br>'+data.nomecond+'</H1>');
           } else {
           
           $('#imgcond').html('<img src="https://condosocio.com.br/acond/downloads/logocondo/'+data.logocond+'" class="img1"/>');
           
           }
           
           if (data.imgp==""){
           
           $('#imgperfil').html('<img src="https://condosocio.com.br/acond/img/usuariobranca.png" class="imgperfil" width="60" height="60"/> </div> ');
           
           } else {
           var imgp = localStorage.getItem('imgp');
           $('#imgperfil').html('<img src="https://condosocio.com.br/acond/downloads/fotosperfil/'+imgp+'" class="imgperfil" width="80" height="80"/> </div> ');
           }
           
           
           $('#perfil').html('<br><h1 class="centrotexto">'+data.nome+' '+data.sobrenome+'</h1><p class="centrotexto">'+data.email+'</p><p class="centrotexto">'+data.tipousuario+'<br><p class="centrotexto">'+data.logradourocond+' '+data.logradouro+' | '+data.tipouncond+' '+data.tipoun+'</p>');
           
           
           $('#contace').html(data.contace);
           
           $('#contcom').html(data.contcom);
           
           if (data.dep==0){
           $('#dependentes').html('<li><a href="dependentes.html" class="close-panel"><img  src="images/icons/white/dependentes.png" alt="" title="" /><span>Dependentes</span></a></li>');
           
           } else {
           $('#dependentes').html('');
           }
           
           if (a == 1){
           $('#unidades').html(' <li><a href="menu2.html" onclick = "Unidades()" class="close-panel back link"><img src="images/icons/white/home.png" alt="" title=""/><span>Unidades</span></a></li>');
           } else {
           $('#unidades').html('');
           }
           
           if (data.admin== 1 || data.admin == 2){
           
           localStorage.setItem('idadm', data.admin);
           
           $('#boleto').html('<li><a href="adm.html" class="close-panel"><img src="images/icons/white/boleto.png" alt="" title="" /><span>Boleto 2ª Via</span></a></li>');
           } else {
           
           $('#boleto').html('');
           
           }
           
            
               
               setTimeout(function(){
                 myApp.hideIndicator();
               }, 1500);
               
          
           
           
           document.addEventListener('deviceready', function () {
                                     
                                     window.plugins.OneSignal.sendTags({
                                                                       
                                                                       idusu: idusu,
                                                                       nome:data.nome,
                                                                       sobrenome:data.sobrenome,
                                                                       idcond: data.idcond,
                                                                       tipousuario:data.tipousuario,
                                                                       genero:data.genero,
                                                                       tipoun:data.tipoun,
                                                                       logradouro:data.logradouro
                                                                       });
                                     
                                     }, false);
           
           
           }
           
           });
    
    
}
                                                            
      function Selecionar_Visitante(){
                
               
            document.addEventListener('deviceready', function () {
                   navigator.contacts.pickContact(function(contact){
                     //alert('Nome: '+ JSON.stringify(contact.name));
                    var nome_vis =JSON.parse(JSON.stringify(contact.name.formatted ));
                    var celular  = JSON.parse(JSON.stringify(contact.phoneNumbers[0].value ));
                    var nome_contatos = localStorage.getItem('nome');
                      
                       /*var patt = /(\d{4,5}\-\d{4})/g;
                       var patt2 = /(\(?\d{2}\)?\s)/g;
                      
                       var celular = cel_contatos.match(patt);
                       var ddd = cel_contatos.match(patt2);
                      
                      if (ddd==null){
                          var ddd = "(91)";
                      
                      } else {
                          var ddd = ddd[1].replace(' ','');
                          var count_ddd = ddd.length;
                          
                          
                                 
                          if (count_ddd < 4){
                               var ddd = "("+ddd;
                                      
                           }
                      }
                       
                   
                        var celular = ddd+' '+celular;*/
                         
                       
                           myApp.showIndicator();
                                                                                                            
                       $.ajax({      //Função AJAX
                            url:'https://www.condosocio.com.br/xdk/buscar_vis.php?cel='+celular,
                            dataType: "json",
                            type:'get',
                            success: function(result) {
                             
                                      myApp.hideIndicator();
                                      
                                      $('#tipopessoa').val('Selecione');
                                      $('#pessoa').val('');
                                      $('#cel').val('');
                                      $('#placa').val('');
                                      $('#marca').val('');
                                      $('#tipodoc').val('');
                                      $('#documento').val('');
                                      $('#idfav').val('');
                                      $('#idvis').val('');
                              
                                      if (result[0].pessoa!=1){
                                          
                                        $('#pessoa').val(result[0].pessoa);
                                        $('#cel').val(result[0].cel);
                                        $('#tipodoc').val(result[0].tipodoc);
                                        $('#documento').val(result[0].documento);
                                        $('#placa').val(result[0].placa);
                                        $('#marca').val(result[0].marca);
                                        $('#idvis').val(result[0].idvis);
                              
                                      } else {
                                         $('#pessoa').val(nome_vis);
                                         $('#cel').val(celular);
                                      }
                            }
                       })
                   },function(err){
                       console.log('Error: ' + err);
                   });
                })
          }
                                                                           

function mascaraData( campo, e )
{
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;
    
    if( kC!=8 && kC!=46 )
    {
        if( data.length==2 )
        {
            campo.value = data += '/';
        }
        else if( data.length==5 )
        {
            campo.value = data += '/';
        }
        else
            campo.value = data;
    }
}
function mudar(obj,idep){
    
    var selecionado = obj.checked;
    if (selecionado) {
        
        //alert('Tem certeza que deseja bloquear?');
        $.get('https://www.condosocio.com.br/xdk/status_mudar.php?idep='+idep+'&status=2');
        $('#text_bloqueio').html('<label style="color:red">Suspenso:</label>');
        
    } else {
        $.get('https://www.condosocio.com.br/xdk/status_mudar.php?idep='+idep+'&status=1');
        $('#text_bloqueio').html('<label>Ativo:</label>');
    }
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}


function Clicks(tabela) {
                                             
   
    $.ajax({
           type:"get",
           url:"https://www.condosocio.com.br/xdk/badge.php?tabela="+tabela,
           })
            
};

// Pull to refresh content
var ptrContent = $('.pull-to-refresh-content');

// Add 'refresh' listener on it
ptrContent.on('ptr:refresh', function (e) {
              // Emulate 2s loading
              setTimeout(function () {
                         // Prepend new list element
                         ptrContent.find('ul').prepend('<H2><OLA/H2>');
                         // When loading done, we need to reset it
                         myApp.pullToRefreshDone();
                         }, 2000);
              });

/*setTimeout(function(){
 $("#dedo").html('');
 }, 12000);
 */

function AtualizarBadges() {
    
    var i;
    
    $.ajax({
           url:"https://www.condosocio.com.br/xdk/contbadges2.php",
           
           success: function(data){
           
           for (i = 0; i < data.length; i++){
           
           
           $('#'+data[i].tabela).html('<div class="badgemenu">'+data[i].count+'</div>');
           
           
           }
           }
           })
};

function Verificar_Session(){
    
    $.ajax({      //Função AJAX
           url:"https://www.condosocio.com.br/xdk/ctl_session.php",
          
    success: function(data) {
           
                   if(data.validade == 0) {
                   
                   myApp.alert('Sua sessão expirou!.','<div style="color:red">ALERTA!</div>', function () {
                               window.location.href = "index.html";
                               });
                   } else {
                       
                       
                            return false;
                     }
    }
   });
}

function Verificar_Celular_Usuario(){
    
    $.post( "https://www.condosocio.com.br/xdk/verifica_cel.php", function( data ) {
           
           
           if (data == 1){
           
           myApp.modalPassword('Para continuar é necessário atualizar seu celular.','CondoSócio' ,function (celular) {
                               
                               
                               if (celular==""){
                               
                               myApp.alert('Campo vazio!','<div style="color:red">ALERTA!</div>')
                               return false;
                               
                               } else {
                               
                               myApp.showIndicator();
                               
                               $.ajax({      //Função AJAX
                                      url:'https://www.condosocio.com.br/xdk/edita_celular.php',
                                      type:"post",
                                      data: "&celular="+celular, //Dados
                                      dataType: "json",
                                      success: function(data) {
                                      
                                      myApp.hideIndicator();
                                      
                                      if(data==1){
                                      myApp.alert('Seu celular foi atualizado com com sucesso!','CondoSócio', function () {
                                                  
                                                  return false;
                                                  
                                                  });
                                      
                                      
                                      } else {
                                      
                                      myApp.alert('Erro! Celular não foi atualizado!','CondoSócio', function () {
                                                  return false;
                                                  
                                                  });
                                      
                                      }
                                      }
                                      
                                      })
                               }
                               
                               
                               })
           
           }
           
           })
}

                           
function Click_Banner_What(cel, anunciante, espaco, campanha){
          
    $.ajax({      //Função AJAX
      url:"https://www.condosocio.com.br/xdk/controle_clicks.php?anunciante="+anunciante+"&espaco="+espaco+"&campanha="+campanha,
        success: function(data) {
            
              window.plugins.socialsharing.shareViaWhatsAppToPhone(cel, 'Vi o anúncio no aplicativo CondoSócio. Quero maiores informações.', null /* img */, null);
            
        }
    })
            
}
                                                             
function Click_Local(url_local,anunciante, espaco, campanha){
    
    mainView.router.loadPage(url_local);
                                                        
   
}

function Click_Externa(url,anunciante, espaco, campanha){
                                             
        
                                             
                                       $.ajax({      //Função AJAX
                                           url:"https://www.condosocio.com.br/xdk/controle_clicks.php?anunciante="+anunciante+"&espaco="+espaco+"&campanha="+campanha,
                                             success: function(data) {
                                                 
                                                   window.location.href = url;
                                                 
                                             }
                                         })
    
}

   
function GoMenu(){
mainView.router.loadPage('menu.html')
                                    
}
                                                             
                                                             
                                                    


                                       function date_Cordova(mode,bool,tabela){
                                             
                                           
                                             var options = {
                                                 date: new Date(),
                                                 mode: mode,
                                                 titleText: 'Escolha Uma Data',
                                                 allowOldDates: bool,
                                                 okText:'Ok',
                                                 cancelText:'Cancelar',
                                                 doneButtonLabel:'Ok',
                                                 cancelButtonLabel:'Cancelar',
                                                 
                                                 
                                            
                                             };
                                             
                                             datePicker.show(options,function(date){
                                                 if (mode=='date'){
                                                     
                                                     var date_format = moment(date).format('DD-MM-YYYY');
                                                     
                                                     if (tabela=='reservas'){
                                                        $('#dtinic').val(date_format);
                                                     } else {
                                                        $('#dataoco').val(date_format);
                                                       }
                                                  
                                                 } else if (mode=='time'){
                                                    
                                                     var time_format = moment(date).format('LT');
                                                     
                                                     if (tabela=='reservas'){
                                                         $('#horainic').val(time_format);
                                                     } else {
                                                        $('#horaoco').val(time_format);
                                                       }
                                                     
                                                 } else {
                                                     alert('Error: ' + error);
                                                 }
                                             });
                                     }
                                
                                                             
