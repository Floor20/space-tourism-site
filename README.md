# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Homepage](https://github.com/Floor20/space-tourism-site/assets/28377567/d056c315-a6d9-4fad-9995-2b38c9f53bc0)

### Links

- Live Site URL: (https://space-tourist-site.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project was a huge stepping stone for me in understanding both how to utilize custom properties and utility classes, as well as understanding the importance of accessibility using ARIA, semantic HTML, and using a mobile-first approach, as noted in the below code snippets:

```html
<button class="mobile-nav-toggle" aria-controls="primary-navigation">
  <span class="sr-only" aria-expanded="false">Menu</span>
</button>
```

```css
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

.d-block {
  display: block;
}
```

```js
function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;
  const targetImage = targetTab.getAttribute("data-image");

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]');
  hideContent(mainContainer, "picture");
  showContent(mainContainer, targetPanel);
  showContent(mainContainer, targetImage);
}
```

### Continued development

I want to learn more about using CSS Grid for my future layouts as well as ARIA and accessibility in my HTML to ensure all users of my sites and projects have a smooth experience.

### Useful resources

- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me to understand the fundamentals of CSS grid, and I have much more to learn.

## Author

- Frontend Mentor - [@Floor20](https://www.frontendmentor.io/profile/Floor20)
- Github - [@Floor20](https://github.com/Floor20)

## Acknowledgments

I very much appreciate the knowledge and guidance from Kevin Powell on this project. His expansive knowledge of CSS helped immensely in understanding this layout and the mobile-first approach.
