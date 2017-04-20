function AppBeginSupport(){
	var that = this;

	var objCreateTicketS = new CreateTicketS();
	var objSolveTicket = new SolveTicket();
	var objTicketCategories = new TicketCategories();
	var objCreateUser = new CreateUser();
	var objCreateCompany = new CreateCompany();
	var objDashBoard = new DashBoard();
	try {
		objDashBoard.loadDashBoard();
		objDashBoard.ClickDashBoard();
		objCreateTicketS.loadTicketUI();
		objSolveTicket.loadSolveTicket();
		objTicketCategories.loadTicketCategories();
		objCreateUser.loadCreateUser();
		objCreateCompany.loadCreateCompany();
	}
	catch(x) {
		console.log("AppBegin.AppBeginSupport --- " + x);
	}
}