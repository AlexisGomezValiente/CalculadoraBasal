//!ESTO ERA EL ALGORITMO DE SOLUCION QUE PEDIAN
// let pesokg = 31;
// let liquido = 0;
// let resto = 0;

// if (pesokg <= 30) {
//   resto = pesokg % 10;
//   if (pesokg <= 10) liquido = pesokg * 100;

//   if (pesokg > 10 && pesokg <= 20) liquido = resto * 50 + 1000;

//   if (pesokg > 20 && pesokg < 30) liquido = resto * 20 + 1500;

//   if (pesokg == 30) liquido = 1700;
// } else if (pesokg > 30) {
//   liquido = Math.floor(((pesokg * 4 + 7) / (pesokg + 90)) * 2000);
//   //En este caso se multiplica por 2000, pero luego cambiare dandole la opcion
//   //al medico que pueda elegir entre 1500 o 2000
// }

// let total = liquido;
// let mantenimiento = Math.round(liquido / 24);
// let mm2 = Math.floor(mantenimiento * 1.5);

// console.log(liquido + " cc / 24hr."); //liquido total por dia
// console.log(mantenimiento + " cc / hr."); //mantenimiento por hora
// console.log(mm2 + " m+m/2"); //m+m/2



//!APARTIR DE ACA ES EL SCRIPT PARA EL PROYECTO
let peso = document.getElementById("peso");
let calcular = document.getElementById("calcular");
let resultado1 = document.getElementById("resultados1");
let resultado2 = document.getElementById("resultados2");

const calculo = () => {
  let pesokg = Number(peso.value);
  let liquido = 0;
  let resto = 0;

  if (pesokg <= 30) {
    resto = pesokg % 10;
    if (pesokg <= 10) liquido = pesokg * 100;

    if (pesokg > 10 && pesokg <= 20) liquido = resto * 50 + 1000;

    if (pesokg > 20 && pesokg < 30) liquido = resto * 20 + 1500;

    if (pesokg == 30) liquido = 1700;
  } else if (pesokg > 30) {
    liquido = Math.floor(((pesokg * 4 + 7) / (pesokg + 90)) * 2000);
    //En este caso se multiplica por 2000, pero luego cambiare dandole la opcion
    //al medico que pueda elegir entre 1500 o 2000
  }

  let total = liquido;
  let mantenimiento = Math.round(liquido / 24);
  let mm2 = Math.floor(mantenimiento * 1.5);

  resultado1.innerText = total + "cc/24hr.";
  resultado2.innerText = mantenimiento +  "cc/hr. " + mm2 + "m+m/2 ";
};

calcular.addEventListener("click", calculo);