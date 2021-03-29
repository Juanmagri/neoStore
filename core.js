// Converter Script //
let convert = document.querySelector("#converter");
let amount = document.querySelector("#amount");
let from = document.querySelector("#currency-from");
let to = document.querySelector("#currency-to");
let fromValue, toValue, amountSubmitted, toVar;

fromValue = "EUR";
toValue = "USD";

const converting = () => {
   fromValue = from.value;
   toValue = to.value;
   amountSubmitted = amount.value;
   toVar = eval(toValue);
   if (fromValue === "EUR") {
      exchange.innerHTML = parseFloat((toVar * amountSubmitted).toFixed(6));   //It firstly converts the string into a variable (toVar), then multiplies it by the input value with maximum 6 decimal places and lastly parseFloat is used not to show unnecessary zeros.
   }
}

amount.addEventListener("keyup", (eve) => {
   if (eve.keyCode === 13) {
      convert.click();
   }
})
convert.addEventListener("click", converting);

// /Converter Script //

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

getData(API)
   .then(response1 => {
      USD = response1.rates.USD;    EUR = response1.rates.EUR;    JPY = response1.rates.JPY;
      AUD = response1.rates.AUD;    CAD = response1.rates.CAD;    CHF = response1.rates.CHF;
      CNY = response1.rates.CNY;    HKD = response1.rates.HKD;    NZD = response1.rates.NZD;
      SEK = response1.rates.SEK;    KRW = response1.rates.KRW;    SGD = response1.rates.SGD;
      NOK = response1.rates.NOK;    MXN = response1.rates.MXN;    INR = response1.rates.INR;
      RUB = response1.rates.RUB;    ZAR = response1.rates.ZAR;    TRY = response1.rates.TRY;
      BRL = response1.rates.BRL;
      exchange.innerHTML = USD;
   })
   .catch(err => console.error(err))

// /API requests //