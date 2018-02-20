var db=openDatabase("DB",1.0,"Meu banco",2*1024*1024);

db.transaction(function(tx){
 mostrar();
});


function mostrar(){
    db.transaction(function(tx){
        tx.executeSql("select * from tb_cardapio",[],function(tx,results){
            var tamanho=results.rows.length;
            var i;
            $("#listapizzaoffline").html(
                "<table id='dados'><tr>"+
                "<th>codigo</th>"+
                "<th>nome</th>"+
                "<th>ingrediente</th>"+
                "<th>preco</th>"+
                "</tr>");
            for(i=0;i<tamanho;i++){
                $("#dados").append("<tr>"+
        "<td>"+results.rows.item(i).codigo+"</td>"+
        "<td>"+results.rows.item(i).nome+"</td>"+
        "<td>"+results.rows.item(i).ingrediente+"</td>"+
        "<td>"+results.rows.item(i).preco+"</td>"+
        
        "</tr></table>");    
            }
        });
    });  
};












