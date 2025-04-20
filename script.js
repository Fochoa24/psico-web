// Esperar que todo el contenido esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animación al entrar en pantalla
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Botón "Ver más / Ver menos"
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const moreText = button.previousElementSibling || button.nextElementSibling;
      if (moreText) {
        const isHidden = moreText.classList.contains('hidden');
        moreText.classList.toggle('hidden');
        button.textContent = isHidden ? 'Ver menos' : 'Ver más';
      }
    });
  });

});
