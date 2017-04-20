function TicketCategories() {
	var that =  this;

	this.idioma = new IdiomaDataTables();

	this.loadTicketCategories = function(){
		$("#tCategories").click(function(){
			$("#divContent").css("display","inline");
			$("#divContent").empty();
			$("#divContent").load("views/support/createUser.html", function(){

			});
		});
	};
}