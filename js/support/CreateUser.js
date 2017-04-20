function CreateUser() {
	var that =  this;

	this.idioma = new IdiomaDataTables();

	this.loadCreateUser = function(){
		$("#uCreate").click(function(){
			$("#divContent").css("display","inline");
			$("#divContent").empty();
			$("#divContent").load("views/support/createUser.html", function(){

			});
		});
	};
}