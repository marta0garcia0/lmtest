function showItem(item){
	var url= "hotels/";
	var itemId=String(item.id);
	var i= mockApiRequestItem(url, itemId).then(
		function (response) {
	    var data = dataParser(response);
		displayer(data);
	}, function (error) {
	    return error;
	});

}
module.exports = showItem;