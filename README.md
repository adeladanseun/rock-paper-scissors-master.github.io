# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Rock, Paper, Scissors solution](#frontend-mentor---rock-paper-scissors-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](design/Screenshot%20Capture%20-%202024-08-02%20-%2002-36-49.png)

### Links

- Solution URL: [Github](https://github.com/adeladanseun/rock-paper-scissors-master.github.io)
- Live Site URL: [Github Pages](https://github.com/adeladanseun.github.io/rock-paper-scissors-master.github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
I learned how to create template generators, started off using the template HTML tag but it had problems with multiple use so I instead created my own function to handle the creation of the template class
```js
function generateTemplate(imageLocation = "images/icon-paper.svg", addClickEvent = false, className = '') {
  const circle = document.createElement("div");
    circle.classList.add("circle");
    if (className) {
        circle.classList.add(className)
    }
  circle.dataset["value"] = imageLocation.slice(12, -4)
  for (let i = 0; i < 20; i++) {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    if (i === 8) {
      layer.classList.add("image");
      const img = document.createElement("img");
      img.src = imageLocation;
      img.alt = imageLocation.slice(7, -4);
      layer.appendChild(img);
    }
    circle.appendChild(layer);
  }
  if (addClickEvent) {
    circle.addEventListener('click', (e) => circleEvent(circle))
  }
  return circle;
}
}
```
## Author

- Github - [adeladanseun](https://www.github.com/adeladanseun)
- Frontend Mentor - [@adeladanseun](https://www.frontendmentor.io/profile/adeladanseun)
- LinkedIn - [@oluwaseunadeladan](https://www.linkedin.com/in/oluwaseunadeladan/)
