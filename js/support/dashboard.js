function DashBoard(){
	var that = this;

	this.idioma = new IdiomaDataTables();

	this.loadDashBoard = function(){
		$("#divContent").css("display","inline");
		$("#divContent").empty();
		$("#divContent").load("views/support/dashboard.html", function(){

		});
	};

	this.ClickDashBoard = function(){
		$("#dashboard").click(function(){
			that.loadDashBoard();
		});
	}
}