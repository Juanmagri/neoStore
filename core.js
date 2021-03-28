
// API requests //
const API = "https://api.exchangeratesapi.io/latest";
let exchange = document.querySelector("#exchanged");

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

let usd, jpy;
getData(API)
   .then(response1 => {
      USD = response1.rates.USD;    jpy = response1.rates.JPY;    jpy = response1.rates.JPY
      exchange.innerHTML = USD;
      
   })
   .catch(err => console.error(err))


// /API requests //

// Converter Script //
let convert = document.querySelector("#converter");
let amount = document.querySelector("#amount");
let from = document.querySelector("#currency-from");
let to = document.querySelector("#currency-to");
let fromValue, toValue;

convert.addEventListener("click", () => {
   fromValue = from.value;
   toValue = to.value;
   amountSubmitted = amount.value;
   if (fromValue === "EUR"  && toValue === "USD") {
      exchange.innerHTML = USD * amountSubmitted;
   }
})

// /Converter Script //