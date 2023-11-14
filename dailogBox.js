const playWithBox =()=> {
    let pmt = prompt("Put any thing in here !!!", "");
    if (pmt !== null || pmt !== ''){
        let head = document.querySelector("#root .heading");
        head.innerHTML = pmt;
        alert(pmt);
    }
}

