function History(){
	var that = this;

	this.idioma = new IdiomaDataTables();
	this.respuesta;

	this.loadHistory = function(){
		$("#divContent").empty();
		$("#divContent").css("display","inline");
		$("#divContent").load("views/client/clientHistory.html", function(){

		});
	};

	this.ClickHistory = function(){
		$("#uHistory").click(function(){
			that.loadHistory();
		});
	};

}