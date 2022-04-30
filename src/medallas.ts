import "./styles.css";

document.getElementById("app2").innerHTML = `
<h1>Medallas</h1>
<div>
</div>`;

let potition: number = Number(prompt("Ingrese posicion de la carrera"));

switch (potition) {
  case 1:
    console.log("Primera posicion");
    break;
  case 2:
    console.log("Segunda posicion");
    break;
  case 3:
    console.log("Tercera posicion");
    break;
  default:
    console.log("certificado de participacion");
    break;
}
