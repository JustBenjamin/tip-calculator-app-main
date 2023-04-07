const bill = document.getElementById("bill")
const custom = document.getElementById("custom")
const people = document.getElementById("people")
const reset = document.getElementById("reset")
const tip = document.getElementById("tip")
const total = document.getElementById("total")
const btn = document.getElementsByTagName("button");




// percentage variable
let tipPercentage = 0;

// percentage rate function
function percentageRate(rate) {
    
    btn.onclick = function() {
        btn.style.backgroundColor = "var(--Strongcyan)";

    }    

    switch(rate) {
        case 5:
            tipPercentage = 0.05 
            break;
        case 10:
            tipPercentage = 0.10
            break;
        case 15:
            tipPercentage = 0.15
            break;
        case 25:
            tipPercentage = 0.25 
            break;
        case 50:
            tipPercentage = 0.50
            break;
      
    }
  
 
    totalAmountperPerson()
   
}




    //custom tip
    custom.addEventListener("keyup", function() {

        let tipPercentage = parseInt(custom.value)/100;
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
    

    })



// tip amounts when bill filled
 bill.addEventListener("keyup", function() {
        totalAmountperPerson()
        btn.active = function() {
            btn.style.backgroundColor = "var(--Strongcyan)";
    
        }  
    })   

// tip amounts when people filled
people.addEventListener("keyup", function() {
    if (people.value == 0) {
        document.getElementById("error").innerHTML = "Can't be zero"
        people.style.borderColor = "#ff6347";
    
      } 
      
      else {
        document.getElementById("error").innerHTML = " "
        people.style.borderColor = "var(--Strongcyan)";
        
      }
    
    
        totalAmountperPerson()

    })



reset.addEventListener("click", function() {
    window.location.reload()
})







function totalAmountperPerson() {

   
// tip amount / person
let percentageAmount = parseInt(bill.value) * tipPercentage;
let tipAmount = percentageAmount / parseInt(people.value)


// total amount / person
let totalPerPersonBeforeTip = parseInt(bill.value) / parseInt(people.value)
let totalPerPersonAfterTip = totalPerPersonBeforeTip + tipAmount
  
  if (people.value == NaN || people.value == ""  ) {
      tip.innerHTML = "$0.00";
      total.innerHTML = "$0.00";
     
  } else {
      tip.innerHTML = "$" + tipAmount.toFixed(2);
      total.innerHTML = "$" + totalPerPersonAfterTip.toFixed(2);
    
  }

  
    
}