const form1 = document.getElementById("form1");
const rangeBtn = document.getElementById("rangeBtn")
form1.addEventListener("click", () => {
    const range = document.getElementById("range").value;
    // console.log(range);
    rangeBtn.innerText = `${range}`
})
const form2 = document.getElementById("form2");
const rangeBtn2 = document.getElementById("rangeBtn2")

form2.addEventListener("click", () => {
    const range2 = document.getElementById("range2").value;
    rangeBtn2.innerText = `${range2}`

})
const form3 = document.getElementById("form3");
const rangeBtn3 = document.getElementById("rangeBtn3")
form3.addEventListener("click", () => {
    const range3 = document.getElementById("range3").value;
    rangeBtn3.innerText = `${range3}`

})
// const formVal1 = range.value
// const formVal2 = range2.value
// const formVal3 = range3.value


// function static(formVal1, formVal2, formVal3) {
//     return (formVal1 + formVal2 + formVal3) * 2
// }
// // static(1, 2, 2)
// console.log(static());


// function usd(static) {
//     return static / 1.70
// }
// // usd(1, 2, 2)
// console.log(Math.floor(usd(10, 20, 25)));

// function tl(static) {
//     return static * 19.33
// }
// // tl(1, 2, 2)
// console.log(Math.floor(tl(10, 20, 25)));


// // const en = 2;
// // const hund = 2;
// // const ceki = 2;

// const finalBtn = document.getElementById("finalBtn")
// finalBtn.innerText =`${static}`



