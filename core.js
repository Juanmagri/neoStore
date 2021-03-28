const API = "https://api.exchangeratesapi.io/latest";
let convert = document.querySelector("#converter");
let from = document.querySelector("#currency-from");
let to = document.querySelector("#currency-to");

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

let usd;
getData(API)
   .then(response1 => {
      usd = response1.rates.USD;
   })
   .catch(err => console.error(err))

convert.addEventListener("click", () => {
   let fromValue = from.value;
   let tooValue = to.value;
   console.log(fromValue + " " + tooValue);
})