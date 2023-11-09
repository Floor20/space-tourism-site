"use strict";

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

// navigates focus with keyboard
tabList.addEventListener("keydown", changeTabFocus);

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) tabFocus = 0;
  }

  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) tabFocus = tabs.length - 1;
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

// activates focused tab on "enter"
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    mainContainer
      .querySelectorAll('[role="tabpanel"]')
      .forEach((panel) => panel.setAttribute("hidden", true));

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

    console.log(tabContainer);
  });
});
