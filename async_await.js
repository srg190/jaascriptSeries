// async-await and
// promise vs async-await

// always returns promise

// const p = new Promise((res, rej) => {
//   res("Promise Resolved Value!!!");
// });
// // async function getData() {
// //   return "return anything will wrap up wit promise";
// // }

// async function getData() {
//     return p;
// }
// const data = getData();
// // console.log(data); // Promise { 'return anything will wrap up wit promise' }
// data.then((res) => console.log(res));

/////////////////////////////////////////////////
// asyn-await combo is used to handle promises

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved Value!!!");
  }, 10000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved Value!!!");
  }, 5000);
});
async function handlePromise() {
//   debugger;
  const val1 = await p1;
  console.log(val1);
  console.log(" Namstey Async1"); // only print when all above are executed

//   debugger;
  const val2 = await p2;
  console.log(val2);
  console.log(" Namstey Async2");
}
// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namastey Promise"); // js will not for it so it will print first
// }
// getData()
handlePromise();

const apiCall = async () => {
  try {
    const data = await fetch(api_uri);
    const res = data.json();
    console.log(res);
  } catch (error) {}
};
