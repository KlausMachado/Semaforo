let buttons = document.getElementById("buttons");
let img = document.getElementById("img");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAuto();

  turnOn[event.target.id]();
};

const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);

const changeLight = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAuto = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  auto: () => (intervalId = setInterval(changeLight, 1000)),
};

buttons.addEventListener("click", trafficLight);
