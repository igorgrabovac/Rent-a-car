let dateFrom = document.querySelector("#dateFrom");
let dateTo = document.querySelector("#dateTo");
let submit = document.querySelector("#submit");

let avai = document.querySelector("#avai");
let notA = document.querySelector("#notA");

let car1 = document.querySelector("#list1 .car1")
let car2 = document.querySelector("#list1 .car2")
let car3 = document.querySelector("#list1 .car3")

//seting minimum date to be today

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
dateFrom.setAttribute("min", today);

//disabling buttons
dateTo.disabled = true;
submit.disabled = true;



dateFrom.addEventListener("change", e => {
    let dateToMin = dateFrom.value;

    dateTo.disabled = false;

    dateTo.setAttribute("min", dateToMin);
    dateTo.addEventListener("change", e => {

        submit.disabled = false;
    })
})
submit.addEventListener("click", e => {
    e.preventDefault();
    avai.classList.remove("d");
    notA.innerHTML = "Available cars:";
    window.scrollTo(0, 750)
})

car1.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#list1 .car1").classList.remove("notUsed");
    document.querySelector("#list1 .car1").classList.add("used");
    document.querySelector("#list2 .car1").classList.remove("d");
    document.querySelector("#list3 .car1").classList.remove("d");

    document.querySelector("#list1 .car2").classList.remove("used");
    document.querySelector("#list1 .car2").classList.add("notUsed");
    document.querySelector("#list2 .car2").classList.add("d");
    document.querySelector("#list3 .car2").classList.add("d");

    document.querySelector("#list1 .car3").classList.remove("used");
    document.querySelector("#list1 .car3").classList.add("notUsed");
    document.querySelector("#list2 .car3").classList.add("d");
    document.querySelector("#list3 .car3").classList.add("d");

})
car2.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#list1 .car1").classList.remove("used");
    document.querySelector("#list1 .car1").classList.add("notUsed");
    document.querySelector("#list2 .car1").classList.add("d");
    document.querySelector("#list3 .car1").classList.add("d");

    document.querySelector("#list1 .car2").classList.add("used");
    document.querySelector("#list1 .car2").classList.remove("notUsed");
    document.querySelector("#list2 .car2").classList.remove("d");
    document.querySelector("#list3 .car2").classList.remove("d");

    document.querySelector("#list1 .car3").classList.remove("used");
    document.querySelector("#list1 .car3").classList.add("notUsed");
    document.querySelector("#list2 .car3").classList.add("d");
    document.querySelector("#list3 .car3").classList.add("d");

})

car3.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#list1 .car1").classList.remove("used");
    document.querySelector("#list1 .car1").classList.add("notUsed");
    document.querySelector("#list2 .car1").classList.add("d");
    document.querySelector("#list3 .car1").classList.add("d");

    document.querySelector("#list1 .car2").classList.remove("used");
    document.querySelector("#list1 .car2").classList.add("notUsed");
    document.querySelector("#list2 .car2").classList.add("d");
    document.querySelector("#list3 .car2").classList.add("d");

    document.querySelector("#list1 .car3").classList.add("used");
    document.querySelector("#list1 .car3").classList.remove("notUsed");
    document.querySelector("#list2 .car3").classList.remove("d");
    document.querySelector("#list3 .car3").classList.remove("d");
})