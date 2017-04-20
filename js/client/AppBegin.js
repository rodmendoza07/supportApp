function AppBeginClient() {
	var that = this;

	var objCreateTicket = new CreateTicket();
	var objHistory = new History();
	try {
		objHistory.loadHistory();
		objHistory.ClickHistory();
		objCreateTicket.loadTicketUI();
	}
	catch(x) {
		console.log("AppBegin.AppBeginClient --- " + x);
	}

}