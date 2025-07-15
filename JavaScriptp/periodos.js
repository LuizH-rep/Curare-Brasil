const tema = localStorage.getItem("tema");

if (tema === "escuro") {
  document.body.style.backgroundColor = "rgb(15, 23, 42)";
  document.body.style.color = "rgb(255, 251, 245)";

  document.getElementById("header").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("col1").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("Ctext1").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("col2").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("Ctext2").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("col3").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("Ctext3").style.backgroundColor = "rgb(55, 71, 79)";
    document.getElementById("col4").style.backgroundColor = "rgb(3, 169, 244)";
  document.getElementById("Ctext4").style.backgroundColor = "rgb(55, 71, 79)";

  document.getElementById("Pbt1").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Pbt1").style.color = "rgb(255, 251, 245)";
  document.getElementById("Pbt2").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Pbt2").style.color = "rgb(255, 251, 245)";
  document.getElementById("Pbt3").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Pbt3").style.color = "rgb(255, 251, 245)";
  document.getElementById("Pbt4").style.backgroundColor = "rgb(15, 23, 42)";
  document.getElementById("Pbt4").style.color = "rgb(255, 251, 245)";

  document.getElementById("footer").style.backgroundColor = "rgb(3, 169, 244)"
document.getElementById("footer").style.color = "rgb(255, 251, 245)"
document.getElementById("topo").style.backgroundColor = "rgb(55, 71, 79)"
document.getElementById("topo").style.color = "rgb(255, 251, 245)"
 
} 

else {
  document.body.style.backgroundColor = "rgb(255, 243, 224)";
  document.body.style.color = "rgb(38, 50, 56)";

  document.getElementById("header").style.backgroundColor = "rgb(245, 124, 0)";

  document.getElementById("col1").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("Ctext1").style.backgroundColor = "rgb(255, 224, 178)";
      document.getElementById("col2").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("Ctext2").style.backgroundColor = "rgb(255, 224, 178)";
    document.getElementById("col3").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("Ctext3").style.backgroundColor = "rgb(255, 224, 178)";
    document.getElementById("col4").style.backgroundColor = "rgb(245, 124, 0)";
  document.getElementById("Ctext4").style.backgroundColor = "rgb(255, 224, 178)";

  document.getElementById("Pbt1").style.backgroundColor = "rgb(255, 243, 224)";
  document.getElementById("Pbt1").style.color = "rgb(38, 50, 56)";
  document.getElementById("Pbt2").style.backgroundColor = "rgb(255, 243, 224)";
  document.getElementById("Pbt2").style.color = "rgb(38, 50, 56)";
  document.getElementById("Pbt3").style.backgroundColor = "rgb(255, 243, 224)";
  document.getElementById("Pbt3").style.color = "rgb(38, 50, 56)";
  document.getElementById("Pbt4").style.backgroundColor = "rgb(255, 243, 224)";
  document.getElementById("Pbt4").style.color = "rgb(38, 50, 56)";

  document.getElementById("footer").style.backgroundColor = "rgb(245, 124, 0)"
document.getElementById("footer").style.color = "rgb(38, 50, 56)"
document.getElementById("topo").style.backgroundColor = "rgb(255, 224, 178)"
document.getElementById("topo").style.color = "rgb(38, 50, 56)"
}


const topo = document.getElementById("topo")

function upage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

topo.addEventListener("click", upage);