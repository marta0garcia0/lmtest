function showList(){
	var url= "hotels/";
	var list= mockApiRequestList(url).then(
		function (response) {
	    var data = dataParser(response);
		var container = document.getElementById("content");
	    data.forEach(function (d){
	    	var c=document.createElement('div');
	    	c.className="content-row";
	    	c.addEventListener ("click",  function(){
    			showItem(d);
			}, false);
	    	var s=document.createElement('span');
	    	s.textContent=d.name;
	    	c.append(s);
	    	container.append(c);
	    });
	}, function (error) {
	    return error;
	});
}

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