function parseQuery(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("query var not found");
}

var name = parseQuery('m');

if ( !data.members.hasOwnProperty(name)) {
  window.location.href = "nomem.html";
}

function runoff() {
  document.getElementById("tab").innerHTML = data.members[name].name+" - Members";
  document.getElementById("name").innerHTML = data.members[name].name;

  if ( data.members[name].pfp != null) {
    document.getElementById("pfp").innerHTML = "<img src=\"../"+data.members[name].pfp+"\">";
  }

  document.getElementById("title").innerHTML = data.members[name].name;
  document.getElementById("desc").innerHTML = data.members[name].desc;

  var groupsadd = "";

  for (var i in data.members[name].groups) {
    groupsadd += "<a href=\"../groups/group.html?m="+
      data.members[name].groups[i]+
      "\"class=\"team\">";
    if (data.groups[data.members[name].groups[i]].pfp != null) {
      groupsadd += "<img src=\"../"+
        data.groups[data.members[name].groups[i]].pfp+
        "\">";
    }
    groupsadd += "<div><h3>"+
      data.groups[data.members[name].groups[i]].name+
      "</h3>";
      if (data.groups[data.members[name].groups[i]].currentmembers[name] != null) {
        groupsadd += "<p id=\"extra\">"+data.groups[data.members[name].groups[i]].currentmembers[name];
      } else {
        groupsadd += "<p>"+data.groups[data.members[name].groups[i]].pastmembers[name];
      }
      groupsadd += "</p></div></a>";
  }

  document.getElementById("groups").innerHTML = groupsadd;

  var gamesadd = "";

  for (var i in data.members[name].games) {
    gamesadd += "<a href=\"../games/game.html?m="+
      data.members[name].games[i]+
      "\" class=\"game\"><img src = \"../"+
      data.games[data.members[name].games[i]].icon+
      "\"><br>"+
      data.games[data.members[name].games[i]].name+
      "<p>"+
      data.games[data.members[name].games[i]].shortdesc+
      "</p><p id=\"extra\">"+
      data.games[data.members[name].games[i]].creators[name]+
      "</p></a>";
  }

  document.getElementById("games").innerHTML = gamesadd;

}

window.onload = runoff;
