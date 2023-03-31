const bill = document.getElementById("bill")
const people = document.getElementById("people")
const reset = document.getElementById("reset")
const tip = document.getElementById("tip")
const total = document.getElementById("total")




// percentage variable
let tipPercentage = 0;

// percentage rate function
function percentageRate(rate) {
    
    switch(rate) {
        case 5:
            tipPercentage = 0.05
            document.getElementById("five").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("ten").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifteen").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("twentyfive").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifty").style.backgroundColor = "var(--Verydarkcyan)";
            
    
            break;
        case 10:
            tipPercentage = 0.10
            document.getElementById("ten").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("five").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifteen").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("twentyfive").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifty").style.backgroundColor = "var(--Verydarkcyan)";
            break;
        case 15:
            tipPercentage = 0.15
            document.getElementById("fifteen").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("five").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("ten").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("twentyfive").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifty").style.backgroundColor = "var(--Verydarkcyan)";
            break;
        case 25:
            tipPercentage = 0.25 
            document.getElementById("twentyfive").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("five").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifteen").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("ten").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifty").style.backgroundColor = "var(--Verydarkcyan)";
            break;
        case 50:
            tipPercentage = 0.50
            document.getElementById("fifty").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("five").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("fifteen").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("twentyfive").style.backgroundColor = "var(--Verydarkcyan)";
            document.getElementById("ten").style.backgroundColor = "var(--Verydarkcyan)";
            break;
        case 100:
            tipPercentage = 0.50
            document.getElementById("custom").style.backgroundColor = "var(--Strongcyan)";
            document.getElementById("custom").style.color = "var(--White)";
            break;
    
    }


    // tip amount / person
    let percentageAmount = parseInt(bill.value) * tipPercentage;
    let tipAmount = percentageAmount / parseInt(people.value)


    // total amount / person
    let totalPerPersonBeforeTip = parseInt(bill.value) / parseInt(people.value)
    let totalPerPersonAfterTip = totalPerPersonBeforeTip + tipAmount

    if (people.value == NaN || people.value == "" ) {
        tip.innerHTML = "$0.00";
        total.innerHTML = "$0.00";
    } else {
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        total.innerHTML = "$" + totalPerPersonAfterTip.toFixed(2);
    }

}



reset.addEventListener("click", function() {
    window.location.reload()
})









