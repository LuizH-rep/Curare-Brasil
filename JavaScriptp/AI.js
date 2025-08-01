const topo = document.getElementById("topo")

function upage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

topo.addEventListener("click", upage);

const tema = localStorage.getItem("tema");

if (tema === "escuro") {
  document.body.style.backgroundColor = "rgb(15, 23, 42)";
  document.body.style.color = "rgb(255, 251, 245)";

document.getElementById("header").style.backgroundColor = "rgb(3, 169, 244)";

  document.getElementById("footer").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("footer").style.color = "rgb(255, 251, 245)"
document.getElementById("topo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("topo").style.color = "rgb(255, 251, 245)"


document.getElementById("Hbt").style.backgroundColor = "rgb(55, 71, 79)" 
document.getElementById("Hbt").style.color = "rgb(255, 251, 245)"

document.getElementById("AIinfo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("AIinfo").style.color = "rgb(255, 251, 245)"

document.getElementById("OAtittle").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("OAcard1").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("OAcard2").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("OAcard3").style.backgroundColor = "rgb(3, 169, 244)"

document.getElementById("OAtext1").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("OAtext2").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("OAtext3").style.backgroundColor = "rgb(15, 23, 42)"

document.getElementById("OA1").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("OA2").style.backgroundColor = "rgb(15, 23, 42)"
document.getElementById("OA3").style.backgroundColor = "rgb(15, 23, 42)"



} 

else {
  document.body.style.backgroundColor = "rgb(255, 243, 224)";
  document.body.style.color = "rgb(38, 50, 56)";

document.getElementById("header").style.backgroundColor = "rgb(245, 124, 0)";

  document.getElementById("footer").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("footer").style.color = "rgb(38, 50, 56)"
document.getElementById("topo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("topo").style.color = "rgb(38, 50, 56)"

document.getElementById("Hbt").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("Hbt").style.color = "rgb(38, 50, 56)"

document.getElementById("AIinfo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("AIinfo").style.color = "rgb(38, 50, 56)"

document.getElementById("OAtittle").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("OAcard1").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("OAcard2").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("OAcard3").style.backgroundColor = "rgb(245, 124, 0)"

document.getElementById("OAtext1").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("OAtext2").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("OAtext3").style.backgroundColor = "rgb(255, 243, 224)"


document.getElementById("OA1").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("OA2").style.backgroundColor = "rgb(255, 243, 224)"
document.getElementById("OA3").style.backgroundColor = "rgb(255, 243, 224)"


}


