// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN("blabla"));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN("37"));
// console.log(Number.isNaN("37.37"));
// console.log(Number.isNaN(""));
// console.log(Number.isNaN(" "));

const throttle = (fn, limit) => {
  let inThrottle;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

const fetchData = () => {
  console.log("Fetching data...");
};

const throttledFetchData = throttle(fetchData, 300);

// Attach throttled function to an event
window.addEventListener("scroll", throttledFetchData);

// input event
const inputElement = document.getElementById("myInput");

inputElement.addEventListener("input", function () {
  console.log("Input changed:", this.value);
});

inputElement.addEventListener("change", function () {
  console.log("Input value changed (focus lost):", this.value);
});

inputElement.addEventListener("focus", function () {
  console.log("Input focused");
});

inputElement.addEventListener("blur", function () {
  console.log("Input blurred");
});

// Button events
const buttonElement = document.getElementById("myButton");

buttonElement.addEventListener("click", function () {
  console.log("Button clicked");
});

buttonElement.addEventListener("dblclick", function () {
  console.log("Button double-clicked");
});

buttonElement.addEventListener("mousedown", function () {
  console.log("Mouse down on button");
});

buttonElement.addEventListener("mouseup", function () {
  console.log("Mouse up on button");
});

// Mouse Event
const divElement = document.getElementById("myDiv");

divElement.addEventListener("mouseover", function () {
  console.log("Mouse over the div");
});

divElement.addEventListener("mouseout", function () {
  console.log("Mouse out of the div");
});

divElement.addEventListener("mousemove", function (event) {
  console.log(`Mouse moved at (${event.clientX}, ${event.clientY})`);
});

divElement.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevents the default context menu
  console.log("Right-clicked on the div");
});

divElement.addEventListener("mousedown", function () {
  console.log("Mouse down on the div");
});

divElement.addEventListener("mouseup", function () {
  console.log("Mouse up on the div");
});

divElement.addEventListener("click", function () {
  console.log("Mouse clicked on the div");
});

divElement.addEventListener("dblclick", function () {
  console.log("Mouse double-clicked on the div");
});
