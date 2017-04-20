function CreateTicket(){
	var that = this;

	this.idioma = new IdiomaDataTables();
	this.respuesta;

	this.loadTicketUI = function(){
		$("#gTicket").click(function(){
			$("#divContent").empty();
			$("#divContent").css("display","inline");
			$("#divContent").load("views/client/createTicket.html", function(){

			});
		});
	};

}