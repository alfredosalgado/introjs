const precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnMas = document.querySelector(".btn-mas");
const btnMenos = document.querySelector(".btn-menos");

precioSpan.innerHTML = precio;

btnMas.addEventListener("click", () => {
  cantidad = cantidad + 1;
  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = precio * cantidad;
});

btnMenos.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = precio * cantidad;
  }
});