const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
const header = document.querySelector('.header');

// Ajuste la position du menu sous le header
function updateNavMobilePosition() {
  const headerHeight = header.offsetHeight;
  navMobile.style.top = `${headerHeight}px`;
  navMobile.style.height = `calc(100vh - ${headerHeight}px)`;
}
updateNavMobilePosition();
window.addEventListener('resize', updateNavMobilePosition);

// Toggle menu
burger.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');

  // Change l’icône
  burger.textContent = isOpen ? '✕' : '☰';

  // Bloque/débloque le scroll du body
  document.body.style.overflow = isOpen ? 'hidden' : '';

  // Si on ferme le menu, on s'assure qu'il se cache bien
  if (!isOpen) {
    navMobile.classList.remove('open');
  }
});
