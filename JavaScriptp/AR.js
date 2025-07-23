const tema = localStorage.getItem("tema");

if (tema === "escuro") {
  document.body.style.backgroundColor = "rgb(15, 23, 42)";
  document.body.style.color = "rgb(255, 251, 245)";

document.getElementById("header").style.backgroundColor = "rgb(3, 169, 244)";

  document.getElementById("footer").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("footer").style.color = "rgb(255, 251, 245)"
document.getElementById("topo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("topo").style.color = "rgb(255, 251, 245)"

document.getElementById("ARcard1").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("ARbt1").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("ARbt1").style.color = "rgb(255, 251, 245)"
 
document.getElementById("ARcard2").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("ARbt2").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("ARbt2").style.color = "rgb(255, 251, 245)"

document.getElementById("ARcard3").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("ARbt3").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("ARbt3").style.color = "rgb(255, 251, 245)"

document.getElementById("ARcard4").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("ARbt4").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("ARbt4").style.color = "rgb(255, 251, 245)"

document.getElementById("TL1").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("TL2").style.backgroundColor = "rgb(3, 169, 244)"

} 

else {
  document.body.style.backgroundColor = "rgb(255, 243, 224)";
  document.body.style.color = "rgb(38, 50, 56)";

document.getElementById("header").style.backgroundColor = "rgb(245, 124, 0)";

  document.getElementById("footer").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("footer").style.color = "rgb(38, 50, 56)"
document.getElementById("topo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("topo").style.color = "rgb(38, 50, 56)"

document.getElementById("ARcard1").style.backgroundColor = "rgb(255, 224, 178)";
document.getElementById("ARbt1").style.backgroundColor = "rgb(245, 124, 0)";
document.getElementById("ARbt1").style.color = "rgb(38, 50, 56)";

document.getElementById("ARcard2").style.backgroundColor = "rgb(255, 224, 178)";
document.getElementById("ARbt2").style.backgroundColor = "rgb(245, 124, 0)";
document.getElementById("ARbt2").style.color = "rgb(38, 50, 56)";

document.getElementById("ARcard3").style.backgroundColor = "rgb(255, 224, 178)";
document.getElementById("ARbt3").style.backgroundColor = "rgb(245, 124, 0)";
document.getElementById("ARbt3").style.color = "rgb(38, 50, 56)";

document.getElementById("ARcard4").style.backgroundColor = "rgb(255, 224, 178)";
document.getElementById("ARbt4").style.backgroundColor = "rgb(245, 124, 0)";
document.getElementById("ARbt4").style.color = "rgb(38, 50, 56)";


}


const topo = document.getElementById("topo")

function upage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

topo.addEventListener("click", upage);