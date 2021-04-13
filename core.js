// Converter Script //
let API = "https://api.ratesapi.io/api/latest";
let exchange = document.querySelector("#exchanged");
let convert = document.querySelector("#converter");
let amount = document.querySelector("#amount");
let from = document.querySelector("#currency-from");
let to = document.querySelector("#currency-to");

const getCurrencies = async () => {
   const response = await fetch(API);
   const data = await response.json();
   return data.rates;
}

const assignThem = async () => {
   const currencyList = await getCurrencies();
   let toValue = to.value;
   let fromValue = from.value;
   let amountSubmitted = amount.value;
   let toCurr = currencyList[toValue];
   let fromCurr = currencyList[fromValue];
   if (fromValue === toValue) {
   exchange.textContent = amountSubmitted;
   } else if (fromValue === "EUR") {
      exchange.textContent = (amountSubmitted * toCurr).toFixed(4);
   } else if (toValue === "EUR") {
      exchange.textContent = (amountSubmitted / fromCurr).toFixed(4);
   } else {
      exchange.textContent = ((amountSubmitted / fromCurr) / (amountSubmitted / toCurr)).toFixed(4);
   }
   exchange.classList.remove("d-none")
}

convert.addEventListener("click", assignThem);

amount.addEventListener("keyup", (eve) => {
   if (eve.keyCode === 13) {
      convert.click()
   }
});

// /Converter Script //
