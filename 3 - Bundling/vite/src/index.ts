// import styles
import "./styles/globals.css";
import headerStyles from "./styles/header.module.css";
import zama from "./content/zama.png";

const header = document.createElement("header");
header.className = headerStyles.header;
document.body.appendChild(header);

const h1 = document.createElement("h1");
h1.className = headerStyles.title;
h1.textContent = "La innovación empieza cuando \"npm start\" por fin arranca.";

header.appendChild(h1);

const img = document.createElement("img");
img.src = zama;
header.appendChild(img);

console.log(`Entorno: `, import.meta.env.VITE_APP_ENV);