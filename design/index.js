//const template = document.getElementById("circle-template")
const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");
const playerChoice = document.querySelector('.playerChoice')
const randomChoice = document.querySelector('.randomChoice')
const gameStatus = document.querySelector('.status')
const gameWinStatus = document.querySelector('.status .win')
const gameReplayStatus = document.querySelector('.status .replay')
const scoreBoard = document.getElementById("score")
const rulesEl = document.querySelector('.rules p')
const cancelEl = document.querySelector('.rules .cancel')
const imageList = [
  "images/icon-scissors.svg",
  "images/icon-paper.svg",
  "images/icon-rock.svg",
  "images/icon-lizard.svg",
  "images/icon-spock.svg"
];
const killMap = {
  "scissors": ["paper", "lizard"],
  "paper": ["rock", "spock"],
  "rock": ["lizard", "scissors"],
  "lizard": ["spock", "paper"],
  "spock": ["scissors", "rock"]
}
const bgMap = {
  "scissors": "hsl(40, 84%, 53%)",
  "paper": "hsl(230, 89%, 65%)",
  "rock": "hsl(349, 70%, 56%)",
  "lizard": "hsl(261, 72%, 63%)",
  "spock": "(189, 58%, 57%)"
};
rulesEl.addEventListener("click", () => {
  document.getElementById("rulesImg").classList.toggle('showImg')
})
cancelEl.addEventListener("click", () => {
  document.getElementById("rulesImg").classList.toggle('showImg')
})
gameReplayStatus.addEventListener('click', () => {
  resetToFrame1()
})
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
    layer.style['border-color'] = bgMap[circle.dataset['value']]
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
function circleEvent(circle) {
  circle.classList.remove("select");
  generateFrame2(circle);
  frame2.scrollIntoView();
}
function generateFrame1() {
  frame1.children[0].appendChild(generateTemplate("images/icon-scissors.svg", true, className = 'select'));
  frame1.children[1].appendChild(generateTemplate("images/icon-paper.svg", true, className = 'select'));
  frame1.children[2].appendChild(generateTemplate("images/icon-rock.svg", true, className = 'select'));
  frame1.children[3].appendChild(generateTemplate("images/icon-lizard.svg", true, className = 'select'));
  frame1.children[4].appendChild(generateTemplate("images/icon-spock.svg", true, className = 'select'));
}
function regenerateFrame(frame = frame1) {
  [...frame.children].forEach(child => {
    //console.log(child)
    if (child.firstChild) {
      child.removeChild(child.firstChild)
    }
  })
  generateFrame1()
}
generateFrame1()
function generateFrame2(userChoice) {
  //handle user choice
if (!playerChoice.children.length) {
    playerChoice.appendChild(userChoice);
  }
  if (!randomChoice.children.length) {
    setTimeout(() => {
      randomChoice.appendChild(generateRandomChoice());
      randomChoice.style['animationPlayState'] = 'paused'
      setTimeout(() => {
        if (killMap[userChoice.dataset["value"]].includes(randomChoice.firstChild.dataset["value"])) {
          gameWinStatus.innerText = "YOU WIN"
          scoreBoard.innerText = parseInt(scoreBoard.innerText) + 1
        } else if (userChoice.dataset["value"] === randomChoice.firstChild.dataset["value"]) {
          gameWinStatus.innerText = "STALEMATE"
        } else {
          gameWinStatus.innerText = "YOU LOSE"
        }
        gameStatus.classList.add('show')
      }, 600)
    }, 3000)
  }
  frame2.scrollIntoView()
}
function generateRandomChoice() {
  return generateTemplate(imageList[Math.round((Math.random()*232734))%(imageList.length)])
}
function resetToFrame1() {
  const arrayObject = [playerChoice, randomChoice];
  gameStatus.classList.remove('show')
  regenerateFrame(frame1)
  setTimeout(() => {
    frame1.scrollIntoView()
    setTimeout(() => {
      arrayObject.forEach((item) => {
        [...item.children].forEach((child) => {
          item.removeChild(child);
        });
      });
    }, 300)
  }, 500)
}