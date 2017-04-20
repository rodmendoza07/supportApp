function CreateCompany() {
	var that =  this;

	this.idioma = new IdiomaDataTables();

	this.loadCreateCompany = function(){
		$("#cCreate").click(function(){
			$("#divContent").css("display","inline");
			$("#divContent").empty();
			$("#divContent").load("views/support/createCompany.html", function(){

			});
		});
	};
}