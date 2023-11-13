"use strict";

const navToggleBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.getElementById("primary-navigation");

//EVENT LISTENER
navToggleBtn.addEventListener("click", (e) => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggleBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggleBtn.setAttribute("aria-expanded", false);
  }

  console.log(navToggleBtn.getAttribute("aria-expanded"));
});
