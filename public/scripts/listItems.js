var host="/api/";
function mockApiRequestList(url){
	//// usage example 
	var http = new Http();
	return http.makeRequest('GET', host + url).then(
	function (response) {
	    return response;
	}, function (error) {
	    return error;
	});

}


function mockApiRequestItem(url,id){
	//// usage example 
	var http = new Http();
	return http.makeRequest('GET', host+ url +id).then(
	function (response) {
	    return response;
	}, function (error) {
	    return error;
	});

}