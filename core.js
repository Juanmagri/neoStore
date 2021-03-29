// API //
const API = "https://api.exchangeratesapi.io/latest";

const getData = (URL_API) => {
   return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open("GET", URL_API, true);
      req.onreadystatechange = () => {
         if (req.readyState === 4) {
            req.status = 200
               ? resolve(JSON.parse(req.responseText))
               : reject(new Error("Oops, error " + req.status));
         }
      }
      req.send();
   })
}
// /API //

// Converter Script //
let convert = document.querySelector("#converter");
let amount = document.querySelector("#amount");
let from = document.querySelector("#currency-from");
let to = document.querySelector("#currency-to");
let exchange = document.querySelector("#exchanged");
let fromValue, toValue, amountSubmitted, toVar, valueInEUR, AAA, BBB;

toValue = to.value;

const converting = () => {
   fromValue = from.value;
   toValue = to.value;
   amountSubmitted = amount.value;
   valueInEUR1 = `response1.rates.`+fromValue;
   valueInEUR2 = `response1.rates.`+toValue;

   getData(API)
   .then(response1 => {
      AAA = eval(valueInEUR1);
      BBB = eval(valueInEUR2);
      if (fromValue === "EUR") {
         exchange.innerHTML = parseFloat((BBB * amountSubmitted).toFixed(3));   //It firstly converts the string into a variable (toVar), then multiplies it by the input value with maximum 6 decimal places and lastly parseFloat is used not to show unnecessary zeros.
      } else if (toValue === "EUR") {
         exchange.innerHTML = parseFloat((1/(AAA)).toFixed(3));
      } else {
         exchange.innerHTML = parseFloat((BBB / eval(valueInEUR1)).toFixed(3));
      }
   })
   .catch(err => console.error(err))

   exchanged.classList.remove("d-none");
}

amount.addEventListener("keyup", (eve) => {
   if (eve.keyCode === 13) {
      convert.click();
   }
})
convert.addEventListener("click", converting);

// /Converter Script //