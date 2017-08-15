function displayer (data){
	var ratSc={
		0:"zero",
		1:"one",
		2:"two",
		3:"three",
		4:"four",
		5:"five",
	};
	var container = document.getElementById("content-descript");
    while(container.children.length>0){
    	container.children[0].remove();
    }
	var c=document.createElement('div');
	c.className="desc-container";
	var ic=document.createElement('div');
	ic.className="pic-container";

	var i=document.createElement('img');
	i.className="pic-wrap";
	i.src=data.imgUrl;
	ic.append(i);
	c.append(ic);

	var cc=document.createElement('div');
	cc.className="info-c";
	var dd=document.createElement('div');
	dd.className="info-wrapper";
	var d=document.createElement('div');
	d.className="info-container";
    var s=document.createElement('span');
    s.textContent=data.name;
    d.append(s);
    var d2=document.createElement('div');
    d2.className="rating-crop";
	var i2=document.createElement('img');
	i2.className="rating "+ratSc[data.rating];
	i2.src="images/ratings.png";
	d2.append(i2);
	d.append(d2);
	dd.append(d);
	cc.append(dd);
	var dd= document.createElement('div');
	var d= document.createElement('div');
	var s= document.createElement('span');
	var s1= document.createElement('span');
	dd.className="price-wrapper";
	d.className="price-container";
	s.className="pink price";
	s.textContent= "£"+data.price;
	s1.className="sub-info";
	s1.textContent="Total hotel stay";
	d.append(s);
	d.append(s1);
	dd.append(d);
	cc.append(dd);
	c.append(cc);
	container.append(c);
}
module.exports = displayer;
