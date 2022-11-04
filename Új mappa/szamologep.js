function Szamol(muvelet) {
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
  
    if ((muvelet = "osszead")) {
      document.getElementById("vege").innerHTML =
        parseFloat(szam1) + parseFloat(szam2);
    } else if ((muvelet = "kivon")) {
      document.getElementById("vege").innerHTML =
        parseFloat(szam1) - parseFloat(szam2);
    } else if ((muvelet = "szoroz")) {
      document.getElementById("vege").innerHTML =
        parseFloat(szam1) * parseFloat(szam2);
    } else {
      document.getElementById("vege").innerHTML =
        parseFloat(szam1) / parseFloat(szam2);
    }
  }