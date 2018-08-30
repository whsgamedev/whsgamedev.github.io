function fold(id)
{
	var container = document.getElementById(id);
	var collection = container.children;
	collection[collection.length-1].style.display = '';
	
	console.log(collection.length); 
	
	if(collection.length-1 > 9)
	{
		collection[8].style.marginRight = 15;
		collection[collection.length-1].style.display = '';
		
		for(var i = 9; i<collection.length; i++)
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
		console.log(btnId);
		var btn = document.getElementById(btnId).children[0];
		
		btn.style.display = "none";
	}
	
}

function toggle(id, sec)
{
	var container = document.getElementById(id);
	var collection = container.children;
	
	var btn = sec.children[0];
	
	for(var i = 9; i<collection.length; i++)
	{
		if(collection[i].style.display == "none")
		{
			collection[i].style.display = "";
			btn.src = "uparrow.png";
		}
		else
		{
			collection[i].style.display = "none";
			btn.src = "downarrow.png";
		}
	}
}
