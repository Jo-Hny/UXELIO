// Toggle menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("nav-open");
    }
  });
}

// Année dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Bouton WhatsApp dans le formulaire de contact
const btnWhatsApp = document.getElementById("contact-whatsapp");
if (btnWhatsApp) {
  btnWhatsApp.addEventListener("click", () => {
    const name = document.getElementById("name")?.value.trim() || "(non précisé)";
    const email = document.getElementById("email")?.value.trim() || "(non précisé)";
    const message = document.getElementById("message")?.value.trim() || "(aucun message)";

    const text = `Bonjour, je suis intéressé par un site web.%0A%0A` +
      `Nom / activité : ${encodeURIComponent(name)}%0A` +
      `Email : ${encodeURIComponent(email)}%0A%0A` +
      `Projet : ${encodeURIComponent(message)}`;

    const phone = "33752048662"; // à adapter si tu veux
    const url = `https://wa.me/${phone}?text=${text}`;
    window.location.href = url;
  });
}
