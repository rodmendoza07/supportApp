function ProgressBar(){
	var that =  this;

	this.loadBar = function() {
		$("#pageWrapper").append(
			'<div class="progress progress-xs">'
                + '<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">'
                    	+ '<span class="sr-only">60% Complete (warning)</span>'
                + '</div>'
            + '</div>'

		);
	};
}