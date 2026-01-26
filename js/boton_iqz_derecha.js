let currentIndex = 0;
const total = 3;
let autoTimer = null;

const contenido = document.querySelector('.carrusel-contenido');

function moverCarrusel() {
  const ancho = getComputedStyle(document.documentElement)
    .getPropertyValue('--ancho-carrusel');
  contenido.style.transform =
    `translateX(calc(-${currentIndex} * ${ancho}))`;
}

function activarManual() {
  contenido.classList.add('manual');
  clearTimeout(autoTimer);

  autoTimer = setTimeout(() => {
    volverAuto();
  }, 4000); // ⏱ 4 segundos sin tocar nada
}

function volverAuto() {
  // Forzamos la posición actual como punto inicial
  contenido.classList.remove('manual');

  // Truco clave: reiniciar animación desde índice actual
  contenido.style.animation = 'none';
  void contenido.offsetWidth; // reflow
  contenido.style.animation = '';

  // Ajustamos el delay para que continúe desde donde quedó
  const duracion = 20; // segundos (igual al CSS)
  const delay = -(duracion / total) * currentIndex;
  contenido.style.animationDelay = `${delay}s`;
}

function nextImage() {
  activarManual();
  currentIndex = (currentIndex + 1) % total;
  moverCarrusel();
}

function prevImage() {
  activarManual();
  currentIndex = (currentIndex - 1 + total) % total;
  moverCarrusel();
}
