const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});


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

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const destinatario = "ppauloaandre80@gmail.com";

  const assunto = encodeURIComponent(subject);
  const corpo = encodeURIComponent(
    `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
  );

  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
}