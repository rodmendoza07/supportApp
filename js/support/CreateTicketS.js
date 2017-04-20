function CreateTicketS(){
	var that =  this;

	this.idioma = new IdiomaDataTables();

	this.loadTicketUI = function(){
		$("#gTicket").click(function(){
			$("#divContent").css("display","inline");
			$("#divContent").empty();
			$("#divContent").load("views/support/createTicketS.html", function(){

			});
		});
	};
}