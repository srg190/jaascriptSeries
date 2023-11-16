// Promise
const cart = ["shoes", "pants", "kurtas"];

// some methods
createOrder(cart);
proceedToPayment(orderId);

// above 2 are api's so we've to call asyncronus way to call
// both of them dependent to each other

// createOrder -> proceedPayment

// one way to solve this problem

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
//   // here passing the function over another func
// });

// after create order is called then passing
// power to other api don't know about who made
// what wil happen just giving the control to other api

// Now using promise to resolve this issues

// Promise
// const promise = createOrder(cart);

// when this line execute, createOrder return promise(here empty object)
// empty object {data: undefined}
// afte fullfilled data will automatically filled with datas

// promise.then(() => {
//   // once {data: datas}
//   // it will automatically execute next promise / function
//   proceedToPayment(orderId);
//   // here attching the function over another func.
// });

// in promise we've  strong controll

const GITHUB_API = "https://catfact.ninja/fact";
// debugger
const user = fetch(GITHUB_API);
user.then((data) => console.log(data));
// console.log(user);
// print promise(<pending>)
// and when open it will show (fullfiled)
// just because js not wait for code to run
// and after somtime data filled in undefined data

// let us having more apis

showOrderSummary(paymentInfo);
updateWalletBalance();
// all of them dependent to each other

createOrder(cart, () => {
  proceedToPayment(orderId, () => {
    showOrderSummary(paymentInfo, () => {
      updateWalletBalance();
    });
  });
});
// we reached in callback hell\]
// to solve this issue using promise chaining

createOrder(cart)
  .then((orderId) => {
    proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    showOrderSummary(paymentInfo);
  })
  .then(() => {
    updateWalletBalance();
  })
  .catch((err) => {
    console.log(err);
  });
