function runoff() {

  var gamesadd = "";

  for ( var i in data.games) {
    gamesadd += "<li class=\"game\"><a href=\"games/game.html?m="+
      i+
      "\"><img src = \""+
      data.games[i].icon+
      "\"></img><br>"+
      data.games[i].name+
      "<p>"+
      data.games[i].shortdesc+
      "</p><div class=\"hiddentext\" style =\"display: none;\">games</div></a></li>";
  }

  document.getElementById("games").innerHTML = gamesadd;
  fold("games", data.games);

  var groupsadd = "";

  for (var i in data.groups) {
    groupsadd += "<li class=\"team\"><a href=\"groups/group.html?m="+
      i+
      "\">";
    if (data.groups[i].pfp != null) {
      groupsadd += "<img src=\""+
        data.groups[i].pfp+
        "\">";
    }
    groupsadd += "<div><h3>"+
      data.groups[i].name+
      "</h3>";
    groupsadd += "<p id=\"extra\">Members: "+
      Object.keys(data.groups[i].currentmembers).length+
      "</p></div><div class=\"hiddentext\" style=\"display: none;\">groups</div></a></li>";
  }

  document.getElementById("teams").innerHTML = groupsadd;
  fold("teams", data.groups);

  var membersadd = "";

  for (var j in data.members) {
    membersadd += "<li class=\"person\"><a href=\"members/member.html?m="+
      j+
      "\">";
    if ( data.members[j].pfp !=  null) {
      membersadd += "<img src=\"";
      membersadd += data.members[j].pfp;
      membersadd += "\"></img>";
    }
    membersadd += "<div><h3>";
    membersadd += data.members[j].name;
    membersadd += "</h3><p>";
    for ( var i in data.members[j].groups) {
      membersadd += data.groups[data.members[j].groups[0]].name + ": "+
      data.groups[data.members[j].groups[0]].currentmembers[j];
      break;
    }
    membersadd += "</p></div><div class=\"hiddentext\" style=\"display: none;\">members</div></a></li>";
  }

  document.getElementById("people").innerHTML = membersadd;
  fold("people", data.members);

}

window.onload = runoff;
