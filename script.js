function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = [
  "Software Developer",
  "Frontend Developer",
  "Project Manager",
  "Student Athlete",
];

const element = document.getElementById("typewriter");
let sleepTime = 100;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let curWordIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = texts[curWordIndex];

    for (let i = 0; i < curWord.length; i++) {
      element.innerHTML = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(1000);

    for (let i = curWord.length; i > 0; i--) {
      element.innerHTML = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);

    if (curWordIndex === texts.length - 1) {
      curWordIndex = 0;
    } else {
      curWordIndex++;
    }
  }
};
writeLoop();
