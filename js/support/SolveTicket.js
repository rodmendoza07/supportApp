function SolveTicket(){
	var that = this;

	this.idioma = new IdiomaDataTables();

	this.loadSolveTicket = function(){
		$("#sTicket").click(function(){
			$("#divContent").css("display","inline");
			$("#divContent").empty();
			$("#divContent").load("views/support/solveTicket.html", function(){

			});
		});
	};
}