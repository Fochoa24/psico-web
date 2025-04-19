// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      destino.scrollIntoView({ behavior: 'smooth' });
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
  
  // Botón para mostrar más texto
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const moreText = button.nextElementSibling;
      moreText.classList.toggle('hidden');
      button.textContent = moreText.classList.contains('hidden') ? 'Ver más' : 'Ver menos';
    });
  });
  