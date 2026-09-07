// Lions Club Rudolstadt-Heidecksburg – kleines Basis-Skript
// Mobile Navigation + aktive Menüpunkte + aktuelles Jahr im Footer

document.addEventListener("DOMContentLoaded", function () {
  // Mobiles Menü ein-/ausklappen
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Menü nach Klick auf einen Link automatisch schließen (mobil)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Aktuelle Seite im Menü hervorheben
  var currentPage = (window.location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Jahreszahl(en) im Footer automatisch aktuell halten
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
