let btns = document.querySelectorAll("button");
const bodyStyle = document.body.style;
const rootStyle = document.querySelector("#root");
let i;
i = btns.length;
const initialize = () => {
  bodyStyle.margin = "0%";
  bodyStyle.padding = "0%";
};
initialize();

const addButton = () => {
  let con = document.querySelector("#root");

  let newButton = document.createElement("button");
  newButton.innerHTML = "Click Me";
  newButton.id = i + 1;
  i = i + 1;
  newButton.addEventListener("click", () => {
    addButton();
  });
  con.appendChild(newButton);
};

function getRandomInt() {
  min = 0;
  max = 255;
  return Math.floor(Math.random() * (max - min) + min);
}

for (btn of btns) {
  btn.addEventListener("click", () => {
    addButton();
    console.log("fire..............");
  });
}
