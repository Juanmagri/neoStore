// Main content //
let converter = document.querySelector("#cont-main-converter");
let rates = document.querySelector("#cont-main-exchange");
let converterAccess = document.querySelector("#c-converter-btn");
let ratesAccess = document.querySelector("#x-rate-btn");

converterAccess.addEventListener("click", () => {
   converterAccess.style.backgroundColor = "var(--white-font)";
   converterAccess.style.borderBottomRightRadius = "0.9rem";
   ratesAccess.style.backgroundColor = "var(--gray-button)";
   rates.classList.add("d-none");
   converter.classList.remove("d-none");
})

ratesAccess.addEventListener("click", () => {
   ratesAccess.style.backgroundColor = "var(--white-font)";
   converterAccess.style.backgroundColor = "var(--gray-button)";
   converter.classList.add("d-none");
   rates.classList.remove("d-none");
})

// /Main content //

// Converter //
let API = "https://api.ratesapi.io/api/latest";
let exchange = document.querySelector("#exchanged");
let convert = document.querySelector("#convert");
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

// /Converter //


// Exchange rate chart//
const getRates = async () => {
   const currencyList = await getCurrencies();
   let rateRows = document.querySelectorAll(".rate-row");
   let i = 1;

   while (i < rateRows.length) {
      let curr = rateRows[i].querySelectorAll("td")[0].textContent;

      rateRows[i].querySelectorAll("td")[1].textContent = currencyList[curr];
      i++;
   }
}

getRates();


const a = (n) => {
   document.querySelectorAll(".rate-row")[n].querySelectorAll("td")[1].textContent = 1;
}

// /Exchange rate chart//
