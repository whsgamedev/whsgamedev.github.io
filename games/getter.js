
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

if ( !data.games.hasOwnProperty(name)) {
  window.location.href = "nomem.html";
}

function runoff() {
  document.getElementById("tab").innerHTML = data.games[name].name+" - Games";
  document.getElementById("name").innerHTML = data.games[name].name;
  document.getElementById("title").innerHTML = data.games[name].name;
  document.getElementById("desc").innerHTML = data.games[name].desc;

  var mediarolladd = "";

  for (var i in data.games[name].pictures) {
    mediarolladd +="<div class=\"slide fade\"><img src=\"../";
    mediarolladd += data.games[name].pictures[i];
    mediarolladd += "\" style=\"width:100%\"></div>";
  }

  for (var i in data.games[name].videos) {
    mediarolladd += "<div class=\"slide fade\"><video src=\"../";
    mediarolladd += data.games[name].videos[i];
    mediarolladd += "\" type=\"video/mp4\" controls style=\"width:100%\"></div>";
  }

  document.getElementById("mediaroll").innerHTML=mediarolladd;

  var dotsadd = "";

  for (var i in data.games[name].pictures) {
    dotsadd += "<img src=\"../";
    dotsadd += data.games[name].pictures[i];
    dotsadd += "\" class=\"dot\" onclick=\"currentSlide(";
    dotsadd += Number(i)+1;
    dotsadd += ")\">";
  }

  for (var i in data.games[name].videos) {
    dotsadd += "<video src=\"../";
    dotsadd += data.games[name].videos[i];
    dotsadd += "\" class=\"dot\" onclick=\"currentSlide(";
    dotsadd += Number(i)+1+data.games[name].pictures.length;
    dotsadd += ")\"></video>";
  }

  document.getElementById("dots").innerHTML=dotsadd;

  var downloadadd = "Download: ";

  for (var i in data.games[name].download) {
    downloadadd += "<a href=\""+data.games[name].download[i]+"\">"+
      i+
      "</a> | ";
  }

  downloadadd += "<br>";

  document.getElementById("download").innerHTML = downloadadd;

  var creatorsadd = "";

  for (var i in data.games[name].creators) {
    creatorsadd += "<a href=\"../members/member.html?m="+
      i+
      "\" class=\"creator\">";
    if ( data.members[i].pfp !=  null) {
      creatorsadd += "<img src=\"../";
      creatorsadd += data.members[i].pfp;
      creatorsadd += "\"></img>";
    }
    creatorsadd += "<div><h3>";
    creatorsadd += data.members[i].name;
    creatorsadd += "</h3><p>";
    creatorsadd += data.games[name].creators[i];
    creatorsadd += "</p></div></a>";
  }

  document.getElementById("creators").innerHTML = creatorsadd;

  showSlides(slideIndex);

}

window.onload = runoff;
