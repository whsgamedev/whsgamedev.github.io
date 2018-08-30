function search(){

  var input=document.getElementById("search_bar");

  var ucase=input.value.toUpperCase();

  var T1 = "games";

  var T2 = "groups";

  var T3 = "members";

  var t1 = 0;

  var t2 = 0;

  var t3 = 0;

  var profile=document.getElementById("profiles");

  var listitem=profile.getElementsByTagName("li");

  for (var i = 0; i < listitem.length; i++){
      var a = listitem[i].getElementsByTagName("a")[0];
      console.log("this"+listitem[i].getElementsByTagName("a")[0]);

      for(var j = 0; j < listitem.length; j++){
          if(a.innerHTML.indexOf("T1") > -1){
              t1 = i;
          }
          if(a.innerHTML.indexOf("T2") > -1){
              t2 = i;
          }
          if(a.innerHTML.indexOf("T3") > -1){
              t3 = i;
          }
          console.log(t1 + " " + t2 + " " + t3);
      }

      if(a.innerHTML.toUpperCase().indexOf(ucase) > -1 ) { //display section title
         if(a.innerHTML.indexOf(T1) > -1 && a.innerHTML.indexOf(T2) <= -1){
           listitem[t1].style.display = "";
         }
         else if(a.innerHTML.indexOf(T2) > -1  && a.innerHTML.indexOf(T3) <= -1){
           listitem[t2].style.display = "";
         }

         else if(a.innerHTML.indexOf(T3) > -1){
            listitem[t3].style.display = "";
         }
            listitem[i].style.display = ""; //display match
      }
      else{
          listitem[i].style.display = "none";
      }
  }
}
