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

module.exports = showList;