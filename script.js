const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Abrir / Fechar menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});


window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop <= 100 && sectionTop >= -section.offsetHeight + 100){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active');
    }
  });
});

