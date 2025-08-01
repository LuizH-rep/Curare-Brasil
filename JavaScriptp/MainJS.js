const user = JSON.parse(localStorage.getItem("usuarios"));

/*--Troca de tema--*/
const bt = document.getElementById("btema");
const tema = localStorage.getItem("tema");
let mod = tema === "escuro";

if (tema === "escuro") {
  document.body.style.backgroundColor = "rgb(15, 23, 42)";
  

  document.getElementById("header").style.backgroundColor = "rgb(55, 71, 79)";
  document.getElementById("Htext").style.color = "rgb(255, 251, 245)";

  document.getElementById("Hbt1").style.backgroundColor = "rgb(55, 71, 79)";
  document.getElementById("Hbt1").style.color = "rgb(255, 251, 245)";
  document.getElementById("Hbt2").style.backgroundColor = "rgb(55, 71, 79)";
  document.getElementById("Hbt2").style.color = "rgb(255, 251, 245)";
  document.getElementById("Hbt3").style.backgroundColor = "	rgb(3, 169, 244)";
  document.getElementById("Hbt3").style.color = "rgb(255, 251, 245)";

  document.getElementById("side").style.backgroundColor = "	rgb(55, 71, 79)";

  document.getElementById("sideB1").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("sideB1").style.color = "rgb(255, 251, 245)";
  document.getElementById("sideB2").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("sideB2").style.color = "rgb(255, 251, 245)";
  document.getElementById("btema").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("btema").style.color = "rgb(255, 251, 245)";
  document.getElementById("btema").textContent = "tema ⏾";

  document.getElementById("btPe1").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe2").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe3").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe4").style.backgroundColor = "rgb(15, 23, 42)";

  document.getElementById("btPe1").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe2").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe3").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe4").style.color = "rgb(255, 251, 245)";

  document.getElementById("Abt1").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt2").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt3").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt4").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt5").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt6").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt7").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt8").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt9").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt10").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt11").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt12").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt13").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt14").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt15").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt16").style.backgroundColor = "rgb(15, 23, 42)";

  document.getElementById("Abt1").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt2").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt3").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt4").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt5").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt6").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt7").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt8").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt9").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt10").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt11").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt12").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt13").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt14").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt15").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt16").style.color = "rgb(255, 251, 245)";

  document.getElementById("Mtext").style.color = "rgb(255, 251, 245)";
  document.getElementById("Mtext").style.backgroundColor = "rgb(55, 71, 79)";

  document.getElementById("Dpe").style.backgroundColor = "rgb(3, 169, 244)"
  document.getElementById("Dpe").style.color = "rgb(255, 251, 245)"

  document.getElementById("pe1").style.backgroundColor = "rgb(15, 23, 42)"
  document.getElementById("pe2").style.backgroundColor = "rgb(15, 23, 42)"
  document.getElementById("Dpe").style.color = "rgb(255, 251, 245)"

  document.getElementById("listP").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("listP").style.color = "rgb(255, 251, 245)"

  document.getElementById("ArS").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("ArD2").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("ArD").style.color = "rgb(255, 251, 245)"
    document.getElementById("ArBT").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("ArBT").style.color = "rgb(255, 251, 245)"

document.getElementById("footer").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("footer").style.color = "rgb(255, 251, 245)"
document.getElementById("topo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("topo").style.color = "rgb(255, 251, 245)"

document.getElementById("sair").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("sair").style.color = "rgb(255, 251, 245)"



} else {
  document.body.style.backgroundColor = "	rgb(255, 243, 224)";

  document.getElementById("header").style.backgroundColor =
    "rgb(255, 224, 178)";
  document.getElementById("Htext").style.color = "rgb(38, 50, 56)";

  document.getElementById("Hbt1").style.backgroundColor = "rgb(255, 224, 178)";
  document.getElementById("Hbt1").style.color = "rgb(38, 50, 56)";
  document.getElementById("Hbt2").style.backgroundColor = "rgb(255, 224, 178)";
  document.getElementById("Hbt2").style.color = "rgb(38, 50, 56)";
  document.getElementById("Hbt3").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("Hbt3").style.color = "rgb(38, 50, 56)";

  document.getElementById("side").style.backgroundColor = "rgb(255, 224, 178)";

  document.getElementById("sideB1").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("sideB1").style.color = "rgb(38, 50, 56)";
  document.getElementById("sideB2").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("sideB2").style.color = "rgb(38, 50, 56)";
  document.getElementById("btema").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("btema").style.color = "rgb(38, 50, 56)";
  document.getElementById("btema").textContent = "tema ☀︎";

    document.getElementById("btPe1").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe2").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe3").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe4").style.backgroundColor ="rgb(255, 243, 224)";

    document.getElementById("btPe1").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe2").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe3").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe4").style.color = "rgb(38, 50, 56)";

    document.getElementById("Abt1").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt2").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt3").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt4").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt5").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt6").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt7").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt8").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt9").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt10").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt11").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt12").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt13").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt14").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt15").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt16").style.backgroundColor ="rgb(255, 243, 224)";

    document.getElementById("Abt1").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt2").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt3").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt4").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt5").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt6").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt7").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt8").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt9").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt10").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt11").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt12").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt13").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt14").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt15").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt16").style.color = "rgb(38, 50, 56)";

  document.getElementById("Mtext").style.color = "rgb(38, 50, 56)";
  document.getElementById("Mtext").style.backgroundColor = "rgb(255, 224, 178)";

  document.getElementById("Dpe").style.backgroundColor = "rgb(245, 124, 0)"
  document.getElementById("Dpe").style.color = "rgb(38, 50, 56)"

  document.getElementById("pe1").style.backgroundColor = "rgb(255, 243, 224)"
  document.getElementById("pe2").style.backgroundColor = "rgb(255, 243, 224)"
  document.getElementById("Dpe").style.color = "rgb(38, 50, 56)"

  document.getElementById("listP").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("listP").style.color = "rgb(38, 50, 56)"

  document.getElementById("ArS").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("ArD2").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("ArD").style.color = "rgb(38, 50, 56)"
  document.getElementById("ArBT").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("ArBT").style.color = "rgb(38, 50, 56)"

document.getElementById("footer").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("footer").style.color = "rgb(38, 50, 56)"
document.getElementById("topo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("topo").style.color = "rgb(38, 50, 56)"

document.getElementById("sair").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("sair").style.color = "rgb(38, 50, 56)"
}

function cor() {
  if (!mod) {
    document.body.style.backgroundColor = "rgb(15, 23, 42)";

    document.getElementById("header").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("Htext").style.color = "rgb(255, 251, 245)";

    document.getElementById("Hbt1").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("Hbt1").style.color = "rgb(255, 251, 245)";
    document.getElementById("Hbt2").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("Hbt2").style.color = "rgb(255, 251, 245)";
    document.getElementById("Hbt3").style.backgroundColor = "	rgb(3, 169, 244)";
    document.getElementById("Hbt3").style.color = "rgb(255, 251, 245)";

    document.getElementById("side").style.backgroundColor = "	rgb(55, 71, 79)";

    document.getElementById("sideB1").style.backgroundColor =
      "rgb(3, 169, 244)";
    document.getElementById("sideB1").style.color = "rgb(255, 251, 245)";
    document.getElementById("sideB2").style.backgroundColor =
      "rgb(3, 169, 244)";
    document.getElementById("sideB2").style.color = "rgb(255, 251, 245)";
    document.getElementById("btema").style.backgroundColor = "rgb(3, 169, 244)";
    document.getElementById("btema").style.color = "rgb(255, 251, 245)";
    document.getElementById("btema").textContent = "tema ⏾";

   document.getElementById("btPe1").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe2").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe3").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("btPe4").style.backgroundColor = "rgb(15, 23, 42)";

  document.getElementById("btPe1").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe2").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe3").style.color = "rgb(255, 251, 245)";
  document.getElementById("btPe4").style.color = "rgb(255, 251, 245)";

  document.getElementById("Abt1").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt2").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt3").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt4").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt5").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt6").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt7").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt8").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt9").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt10").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt11").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt12").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt13").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt14").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt15").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Abt16").style.backgroundColor = "rgb(15, 23, 42)";

  document.getElementById("Abt1").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt2").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt3").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt4").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt5").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt6").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt7").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt8").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt9").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt10").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt11").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt12").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt13").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt14").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt15").style.color = "rgb(255, 251, 245)";
  document.getElementById("Abt16").style.color = "rgb(255, 251, 245)";

    document.getElementById("Mtext").style.color = "rgb(255, 251, 245)";
    document.getElementById("Mtext").style.backgroundColor = "rgb(55, 71, 79)";

    document.getElementById("Dpe").style.backgroundColor = "rgb(3, 169, 244)"
    document.getElementById("Dpe").style.color = "rgb(255, 251, 245)"

    document.getElementById("pe1").style.backgroundColor = "rgb(15, 23, 42)"
    document.getElementById("pe2").style.backgroundColor = "rgb(15, 23, 42)"
    document.getElementById("Dpe").style.color = "rgb(255, 251, 245)"

  document.getElementById("Mtext").style.color = "rgb(255, 251, 245)";
  document.getElementById("Mtext").style.backgroundColor = "rgb(55, 71, 79)";


  document.getElementById("listP").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("listP").style.color = "rgb(255, 251, 245)"

  document.getElementById("ArS").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("ArD2").style.backgroundColor = "rgb(55, 71, 79)"
  document.getElementById("ArD").style.color = "rgb(255, 251, 245)"
  document.getElementById("ArBT").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("ArBT").style.color = "rgb(255, 251, 245)"

document.getElementById("footer").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("footer").style.color = "rgb(255, 251, 245)"
document.getElementById("topo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("topo").style.color = "rgb(255, 251, 245)"

document.getElementById("sair").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("sair").style.color = "rgb(255, 251, 245)"

    localStorage.setItem("tema", "escuro");
  } else {
    document.body.style.backgroundColor = "	rgb(255, 243, 224)";

    document.getElementById("header").style.backgroundColor ="rgb(255, 224, 178)";
    document.getElementById("Htext").style.color = "rgb(38, 50, 56)";

    document.getElementById("Hbt1").style.backgroundColor =
      "	rgb(255, 224, 178)";
    document.getElementById("Hbt1").style.color = "rgb(38, 50, 56)";
    document.getElementById("Hbt2").style.backgroundColor =
      "	rgb(255, 224, 178)";
    document.getElementById("Hbt2").style.color = "rgb(38, 50, 56)";
    document.getElementById("Hbt3").style.backgroundColor = "rgb(245, 124, 0)";
    document.getElementById("Hbt3").style.color = "rgb(38, 50, 56)";

    document.getElementById("side").style.backgroundColor =
      "rgb(255, 224, 178)";

    document.getElementById("sideB1").style.backgroundColor =
      "rgb(245, 124, 0)";
    document.getElementById("sideB1").style.color = "rgb(38, 50, 56)";
    document.getElementById("sideB2").style.backgroundColor =
      "rgb(245, 124, 0)";
    document.getElementById("sideB2").style.color = "rgb(38, 50, 56)";
    document.getElementById("btema").style.backgroundColor = "rgb(245, 124, 0)";
    document.getElementById("btema").style.color = "rgb(38, 50, 56)";
    document.getElementById("btema").textContent = "tema ☀︎";

    document.getElementById("btPe1").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe2").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe3").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("btPe4").style.backgroundColor ="rgb(255, 243, 224)";

    document.getElementById("btPe1").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe2").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe3").style.color = "rgb(38, 50, 56)";
    document.getElementById("btPe4").style.color = "rgb(38, 50, 56)";

    document.getElementById("Abt1").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt2").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt3").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt4").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt5").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt6").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt7").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt8").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt9").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt10").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt11").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt12").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt13").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt14").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt15").style.backgroundColor ="rgb(255, 243, 224)";
    document.getElementById("Abt16").style.backgroundColor ="rgb(255, 243, 224)";

    document.getElementById("Abt1").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt2").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt3").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt4").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt5").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt6").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt7").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt8").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt9").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt10").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt11").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt12").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt13").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt14").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt15").style.color = "rgb(38, 50, 56)";
    document.getElementById("Abt16").style.color = "rgb(38, 50, 56)";

    document.getElementById("Mtext").style.color = "rgb(38, 50, 56)";
    document.getElementById("Mtext").style.backgroundColor ="rgb(255, 224, 178)";

    document.getElementById("Dpe").style.backgroundColor = "rgb(245, 124, 0)"
    document.getElementById("Dpe").style.color = "rgb(38, 50, 56)"

    document.getElementById("pe1").style.backgroundColor = "rgb(255, 243, 224)"
    document.getElementById("pe2").style.backgroundColor = "rgb(255, 243, 224)"
    document.getElementById("Dpe").style.color = "rgb(38, 50, 56)"

  document.getElementById("listP").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("listP").style.color = "rgb(38, 50, 56)"

  document.getElementById("ArS").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("ArD2").style.backgroundColor = "rgb(255, 224, 178)"
  document.getElementById("ArD").style.color = "rgb(38, 50, 56)"
    document.getElementById("ArBT").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("ArBT").style.color = "rgb(38, 50, 56)"

document.getElementById("footer").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("footer").style.color = "rgb(38, 50, 56)"
document.getElementById("topo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("topo").style.color = "rgb(38, 50, 56)"

document.getElementById("sair").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("sair").style.color = "rgb(38, 50, 56)"

    localStorage.setItem("tema", "claro");
  }

  mod = !mod;
}

/*--Side menu--*/

bt.addEventListener("click", cor);

const menu = document.getElementById("Hbt3");
let menuMod = false;

function menuShow() {
  if (!menuMod) {
    document.getElementById("side").style.display = "flex";
  } else {
    document.getElementById("side").style.display = "none";
  }

  menuMod = !menuMod;
}

menu.addEventListener("click", menuShow);

const Ph = document.getElementById("sideB1");
let phMod = false;

function phMenu() {
  if (!phMod) {
    document.getElementById("Periodos").style.display = "flex";
    document.getElementById("sideB1").textContent = "Períodos Históricos ⬆";
  } else {
    document.getElementById("Periodos").style.display = "none";
    document.getElementById("sideB1").textContent = "Períodos Históricos ⬇";
  }

  phMod = !phMod;
}

Ph.addEventListener("click", phMenu);

const Ar = document.getElementById("sideB2");
let ArMod = false;

function ArMenu() {
  if (!ArMod) {
    document.getElementById("Artistas").style.display = "flex";
    document.getElementById("sideB2").style.borderRadius =
      "0rem 0rem 0rem 0rem";
    document.getElementById("sideB2").textContent = "Artistas ⬆";
  } else {
    document.getElementById("Artistas").style.display = "none";
    document.getElementById("sideB2").style.borderRadius =
      "0rem 0rem .0rem .0rem";
    document.getElementById("sideB2").textContent = "Artistas ⬇";
  }

  ArMod = !ArMod;
}

Ar.addEventListener("click", ArMenu);




if(!user){
    alert("Acesso negado ! Faça login primeiro");
    window.location.href = "index.html";

} else {

    document.getElementById("sair").addEventListener("click", () => {
        localStorage.removeItem("usuarios");
        alert("Você saiu, obrigado por usar nosso site!");
        window.location.href = "index.html"
    })
}

/*---topo da pagina---*/

const topo = document.getElementById("topo")

function upage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

topo.addEventListener("click", upage);


