	var db=openDatabase("DB",1.0,"Meu banco",2*1024*1024);


	db.transaction(function(tx){

	tx.executeSql("create table if not exists tb_cardapio(codigo unique,nome, ingrediente, preco)");
    tx.executeSql("insert into tb_cardapio(codigo, nome,ingrediente, preco) values(1,'escarola','cebola, manjericao','30.50')");


});





