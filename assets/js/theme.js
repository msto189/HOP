(function () {
  "use strict";

  var toggleButton = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector(".nav");
  if (toggleButton && nav) {
    toggleButton.addEventListener("click", function () {
      var visible = nav.style.display === "flex";
      nav.style.display = visible ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "72px";
      nav.style.right = "16px";
      nav.style.background = "#111";
      nav.style.padding = "12px";
      nav.style.border = "1px solid #262626";
    });
  }

  var cards = document.querySelectorAll(".fade-in");
  if (cards.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }
})();
