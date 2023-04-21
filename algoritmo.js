const imagenConstante = document.querySelector("#imagen-1");
const titulo = document.querySelector("#texto");
const enlacePagina = document.querySelector("#link-pagina");
const cuerpoPagina = document.querySelector("body");

let datoDePsobilidades = prompt("ingrese la opccion 1,2 o 3");

const LINK_PAGINA_PROGRAMADOR = "https://erick-c3.github.io/Trayecto-de-Programador-/";
const LINK_DISCORD = "https://discord.com/";
const LINK_PAGINA_STACK_OVERFLOW = "https://es.stackoverflow.com/";

const IMAGEN_1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwt1hxLgtLE2yNdu1wt0UGmk7kUz2eYvnYhpGvkPlCJVpWmnD8JnguabThbrKtRgsl2E&usqp=CAU";
const IMAGEN_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMreYRHzeKwtg8_awQ-oiPmZD9tPxGU9ixRwEfqxxO02o24R9e2DJ8CZjpyUbd-ceVqs&usqp=CAU";
const IMAGEN_3 = "https://edteam-media.s3.amazonaws.com/blogs/original/bc768df7-80db-409d-8a6d-a74ec1686de3.jpg";

function miPrimeraFuncion(pagina,texto,imagen,link) {
    cuerpoPagina.style.backgroundColor= pagina;
    cuerpoPagina.style.color= texto;
    imagenConstante.src = imagen;
    enlacePagina.href= link; 
    
}
if (datoDePsobilidades == 1) {
    miPrimeraFuncion ("orange" , "black", IMAGEN_1, LINK_PAGINA_PROGRAMADOR); 
} else if (datoDePsobilidades == 2) {
    miPrimeraFuncion ("black","white", IMAGEN_2, LINK_DISCORD);
} else if (datoDePsobilidades == 3) {
    miPrimeraFuncion("pink","green",IMAGEN_3,LINK_PAGINA_STACK_OVERFLOW);
}