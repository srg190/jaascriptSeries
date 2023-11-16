// Callbacks, Promise and Async-await

const data = [
  { name: "Michael", profession: "Software Engineer" },
  { name: "Mridul", profession: "Software Engineer" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((v, i) => {
      output += `<li>${v.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createData(newData) {
//   setTimeout(() => {
//     data.push(newData);
//   }, 2000);
// }

// createData({ name: "Mohan", profession: "Electrician" });
// getData(); // still can't get data
// and dom is also not refreshing

// above problem can be solved by using CAllBAcks

// function createData(newData, callback) {
//   setTimeout(() => {
//     data.push(newData);
//     callback();
//   }, 2000);
// }
// // Using Callbacks
// createData({ name: "Mohan", profession: "Electrician" }, getData);
// getData();

// May if we stuck in Pyramid of doom then

// Now we're going to promise

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.push(newData);
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Some error is found");
//       }
//       getData();
//     }, 2000);
//   });
// }
// createData({ name: "Mohan", profession: "Electrician" })
//   .then(getData)
//   .catch(() => console.log("Error is found"));

// Async-await to solve asynchronus call in synchronus way

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Some error is found");
      }
    }, 2000);
  });
}

async function start() {
  await createData({ name: "Mohan", profession: "Electrician" });
  // untill above resolved not execute doen one
  console.log("Hello");
  getData();
}
start();
