var MAX_VAL = 12;

function fold(id, data)
{
	var bound = (id == "people" ? MAX_VAL : MAX_VAL-4); //max people: 12 max others: 8
	var datanum = Object.keys(data).length;
	var container = document.getElementById(id);
	var collection = container.children;
	collection[collection.length-1].style.display = '';
	
	console.log("data: "+datanum+" HTML: "+collection.length);
	
	if(datanum-1 > bound)
	{
		//collection[8].style.marginRight = 15;
		collection[collection.length-1].style.display = '';

		for(var i = bound; i<collection.length; i++)
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
	var bound = (id == "people" ? MAX_VAL : MAX_VAL-4);
		
	var container = document.getElementById(id);
	var collection = container.children;
	
	var btn = sec.children[0];
	
	for(var i = bound; i<collection.length; i++)
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

/*function hideall(data)
{
	fold("games", data.games);
	fold("teams", data.teams);
	fold("people", data.people);
}*/
