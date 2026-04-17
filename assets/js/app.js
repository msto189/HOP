(function () {
  "use strict";

  var menuButton = document.querySelector("[data-menu-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("is-open");
      if (mobileMenu.classList.contains("is-open")) {
        mobileMenu.style.display = "flex";
        mobileMenu.style.position = "absolute";
        mobileMenu.style.top = "72px";
        mobileMenu.style.right = "16px";
        mobileMenu.style.flexDirection = "column";
        mobileMenu.style.padding = "12px";
        mobileMenu.style.background = "#111";
        mobileMenu.style.border = "1px solid #242424";
      } else {
        mobileMenu.style.display = "";
        mobileMenu.style.position = "";
      }
    });
  }

  var elements = document.querySelectorAll(".reveal");
  if (elements.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }
})();
