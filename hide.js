var MAX_VAL = 8;

function fold(id, data)
{
	var container = document.getElementById(id);
	var collection = container.children;
	collection[collection.length-1].style.display = '';
	
	console.log("data: "+Object.keys(data).length+" HTML: "+collection.length);
	
	if(Object.keys(data).length-1 > MAX_VAL)
	{
		//collection[8].style.marginRight = 15;
		collection[collection.length-1].style.display = '';

		for(var i = MAX_VAL; i<collection.length; i++)
		{
			if(collection[i].innerHTML != undefined && collection[i].className != "unhide")
			{
				collection[i].style.display = "none";
			}
		}
	}
	else
	{
		var btnId = id.substr(0, 1)+"hide";
		var btn = document.getElementById(btnId).children[0];

		btn.style.display = "none";
	}
	
};

function toggle(id, sec)
{
	var container = document.getElementById(id);
	var collection = container.children;
	
	var btn = sec.children[0];
	
	for(var i = MAX_VAL; i<collection.length; i++)
	{
		if(collection[i].style.display == "none")
		{
			collection[i].style.display = "";
			btn.src = "media/uparrow.png";
		}
		else
		{
			collection[i].style.display = "none";
			btn.src = "media/downarrow.png";
		}
	}
}
