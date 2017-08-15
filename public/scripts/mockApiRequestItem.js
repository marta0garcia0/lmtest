function mockApiRequestItem(url,id){
	try {
		var http = new Http();
		return http.makeRequest('GET', host+ url +id).then(
		function (response) {
		    return response;
		}, function (error) {
		    return error;
		});
	}
	catch(err) {
    	return err;
	}
}
module.exports = mockApiRequestItem;
