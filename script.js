// Identificar elementos DOM
const precioDescuento = document.getElementById('precio-con-descuento');
const precioOriginal = document.getElementById('precio-original');
const button = document.getElementById('calcular1');
const descuento = document.getElementById('porcentaje-descuento');
const alerta1 = document.getElementById('alerta1');

// Calcular porcentaje de descuento
button.addEventListener('click', (e) => {
  e.preventDefault();

  const precioDescuentoValor = precioDescuento.value;
  const precioOriginalValor = precioOriginal.value;
  const porcentDesc = (precioOriginalValor - precioDescuentoValor) / precioOriginalValor;

  if ((precioDescuentoValor === '') || (precioOriginalValor === '')) {
    descuento.innerText = 'Debes introducir dos valores numéricos para realizar el cálculo';
    alerta1.classList.remove('visually-hidden');
  } else if (precioDescuentoValor > precioOriginalValor) {
    descuento.innerText = `El precio final es mayor que el original, así que no hay descuento, sino un recargo del ${(porcentDesc * 100).toFixed(2) * -1} %`;
    alerta1.classList.remove('visually-hidden');
  } else {
    descuento.innerText = `Descuento: ${(porcentDesc * 100).toFixed(2)} %`;
    alerta1.classList.remove('visually-hidden');
  }

});

// Calcular precio original
const precioDescuento2 = document.getElementById('precio-con-descuento-2');
const button2 = document.getElementById('calcular2');
const descuento2 = document.getElementById('pct-descuento-2');
const alerta2 = document.getElementById('alerta2');
const precioOriginal2 = document.getElementById('precio-original2')

button2.addEventListener('click', (e) => {
  e.preventDefault();
  const precioFinal2 = precioDescuento2.value;
  const descuentoValor = descuento2.value / 100;

  if ((precioFinal2 === '') || (descuentoValor === '')) {
    precioOriginal2.innerText = 'Debes introducir dos valores numéricos para realizar el cálculo';
    alerta2.classList.remove('visually-hidden');
  } else if ((descuento2.value < 0) || (descuento2.value > 100)) {
    precioOriginal2.innerText = 'El porcentaje de descuento debe estar entre 0 y 100.';
    alerta2.classList.remove('visually-hidden');
  } else if (precioFinal2 < 0) {
    precioOriginal2.innerText = 'El precio final debe ser mayor o igual a 0.';
    alerta2.classList.remove('visually-hidden');
  } else {
    const precioOriginalValor = precioFinal2 / (1 - descuentoValor);
    precioOriginal2.innerText = `Precio original: ${precioOriginalValor.toFixed(2)}`;
    alerta2.classList.remove('visually-hidden');
  }

});

// Calcular precio final
const precioOriginal3 = document.getElementById('precio-original-3');
const button3 = document.getElementById('calcular3');
const descuento3 = document.getElementById('pct-descuento-3');
const alerta3 = document.getElementById('alerta3');
const precioFinal3 = document.getElementById('precio-final-3')

button3.addEventListener('click', (e) => {
  e.preventDefault();
  const precioOriginal3Val = precioOriginal3.value;
  const descuentoValor = descuento3.value;

  if ((precioOriginal3Val === '') || (descuentoValor === '')) {
    precioFinal3.innerText = 'Debes introducir dos valores numéricos para realizar el cálculo';
    alerta3.classList.remove('visually-hidden');
  } else if ((precioOriginal3Val <= 0)) {
    precioFinal3.innerText = 'El precio original debe ser superior a 0.';
    alerta3.classList.remove('visually-hidden');
  } else if ((descuentoValor < 0) || (descuentoValor > 100) ) {
    precioFinal3.innerText = 'El porcentaje de descuento debe estar entre 0 y 100.';
    alerta3.classList.remove('visually-hidden');
  } else {
    const precioFinalValor = (precioOriginal3Val * (100 - descuentoValor) / 100);
    precioFinal3.innerText = `Precio final: ${precioFinalValor.toFixed(2)}`
    alerta3.classList.remove('visually-hidden');
  }



});
