let btnCalcular = document.getElementById("btnCalc");
let suma: number = 0;

btnCalcular.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  console.log("el primer número es", valor1);
  let valor2: number = Number(dato2.value);
  console.log("el segundo número es", valor2);
  let suma: number = valor1 + valor2;
  console.log("el resultado de la suma es" + suma);
});
