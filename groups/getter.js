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

if ( !data.groups.hasOwnProperty(name)) {
  window.location.href = "nomem.html";
}

function runoff() {
  document.getElementById("tab").innerHTML = data.groups[name].name+" - Groups";
  document.getElementById("name").innerHTML = data.groups[name].name;
  document.getElementById("title").innerHTML = data.groups[name].name;
  document.getElementById("desc").innerHTML = data.groups[name].desc;
  if ( data.groups[name].pfp != null) {
    document.getElementById("pfp").innerHTML = "<img src=\"../"+data.groups[name].pfp+"\">";
  }

  var currentmembersadd = "";

  if (data.groups[name].currentmembers != null) {
    document.getElementById("currentheader").innerHTML = "Current Members";

    document.getElementById("currentmembers").classList.add('container');
  }

  for (var i in data.groups[name].currentmembers) {
    currentmembersadd += "<a href=\"../members/member.html?m="+
      i+
      "\" class=\"person\">";
    if ( data.members[i].pfp !=  null) {
      currentmembersadd += "<img src=\"../";
      currentmembersadd += data.members[i].pfp;
      currentmembersadd += "\"></img>";
    }
    currentmembersadd += "<div><h3>";
    currentmembersadd += data.members[i].name;
    currentmembersadd += "</h3><p>";
    currentmembersadd += data.groups[name].currentmembers[i];
    currentmembersadd += "</p></div></a>";
  }

  document.getElementById("currentmembers").innerHTML = currentmembersadd;

  var pastmembersadd = "";

  if ( data.groups[name].pastmembers != null) {
    document.getElementById("pastheader").innerHTML= "Past Members";
    document.getElementById("pastmembers").classList.add('container');
  }

  for (var i in data.groups[name].pastmembers) {
    pastmembersadd += "<a href=\"../members/member.html?m="+
    i+
    "\" class=\"person\">";
    if ( data.members[i].pfp !=  null) {
      pastmembersadd += "<img src=\"../";
      pastmembersadd += data.members[i].pfp;
      pastmembersadd += "\"></img>";
    }
    pastmembersadd += "<div><h3>";
    pastmembersadd += data.members[i].name;
    pastmembersadd += "</h3><p>";
    pastmembersadd += data.groups[name].pastmembers[i];
    pastmembersadd += "</p></div></a>";
  }

  document.getElementById("pastmembers").innerHTML = pastmembersadd;

  var gamesadd = "";

  for ( var i in data.groups[name].games) {
    gamesadd += "<div class=\"game\"><a href=\"../games/game.html?m="+
      data.groups[name].games[i]+
      "\"><img src = \"../"+
      data.games[data.groups[name].games[i]].icon+
      "\"></img><br>"+
      data.games[data.groups[name].games[i]].name+
      "<p>"+
      data.games[data.groups[name].games[i]].shortdesc+
      "</p></a></div>";
  }

  document.getElementById("games").innerHTML = gamesadd;

}

window.onload = runoff;
