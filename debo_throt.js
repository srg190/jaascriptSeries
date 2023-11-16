// performance optimization, rate limiting to certain function or method

// Debouncing -------------------------
let cnt = 0;
const getData = () => {
  // call an api get data
  console.log("fetching data ...", cnt++);
};
// above function will call every key stroke
// need a better solution so the at least a given time interval after that function will call

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// Throttling
