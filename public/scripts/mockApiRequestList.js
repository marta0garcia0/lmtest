
var host="/api/";
function mockApiRequestList(url){
	try {
		var http = new Http();
		return http.makeRequest('GET', host + url).then(
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
module.exports = mockApiRequestList;
