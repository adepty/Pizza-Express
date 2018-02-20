$( document ).ready(function() {
                    var $server;
                    $server = 'http://localhost/XDK/';
              
				  
				  $('#inclusao').on('click', function(){

					  $nome = $('#nome').val();
					  $telefone = $('#telefone').val();
					  $endereco = $('#endereco').val();
					  $datanascimento = $('#datanascimento').val();
					  $password = $('#password').val();
					  $.ajax({
						  type: "get",
						  url: $server+"/conecta.php",
						  data: "nome="+$nome+"&telefone="+$telefone+"&endereco="+$endereco+"&datanascimento="+$datanascimento+"&password="+$password+"&acao=inclusao",
							    		  
						  success: function(data) {
							   "<h1> Você foi cadastrado com sucesso</h1>"
							  intel.xdk.notification.alert('Usuario cadastrado"','Inclusao','ok');
						  }
					  });
				  });

				 $('#pedido').on('click', function(){
					  $nome = $('#nome').val();
					  $telefone = $('#telefone').val();
					  $endereco = $('#endereco').val();
					  $cardapio = $('#cardapio').val();
					 
					  $.ajax({
						  type: "get",
						  url: $server+"/conecta.php",
						  data: "nome="+$nome+"&telefone="+$telefone+"&endereco="+$endereco+"&carpadio="+$cardapio+"&acao=pedido",
						  success: function(data) {
							  intel.xdk.notification.alert('pedido cadastrada"','Inclusao','ok');
						  }
					  });
				  });
			
				  
				  $('#dropcardapio').on('click', function(){
					 var db=openDatabase("DB",1.0,"Meu banco",2*1024*1024);
					 db.transaction(function(tx){
					 tx.executeSql("DROP TABLE tb_cardapio");
					  });
					//location.reload();
					Lista();
					});
				  

				 
				  
				  $('#login').on('click', function(){
						

					  $telefone = $('#telefone').val();
					  $password = $('#password').val();
                     
					  $.ajax({
						  type: "post",
						  url: $server+"/conecta.php",
						  data: "telefone="+$telefone+"&password="+$password+"&acao=logar", //Dados
                    success: function (result){ //Sucesso no AJAX
                if(result!=0){

                    console.log( 'foi para conecta.php' );     
                    window.location.href = 'pedido.html';
					

                }else{
					$('#errolog').show(); //Informa o erro
                }
            }
});
return false; //Evita que a página seja atualizada
});



				
				  
				  
				  
				  
				  
				  
                   function Lista(){
                           $.ajax({

                               type: "get",
                               dataType  : 'html',
                               url: $server+"/conecta.php",
                               data: "acao=listapizzas",
                               success: function(data) {
                                    $('#listapizzas').html(data);
                                }
                           });
                    }

                

            });

				 
				  
			
					
					  