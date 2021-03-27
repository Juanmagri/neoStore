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

getData(API)
   .then(response1 => {
      console.log(response1.rates.USD);
   })
   .catch(err => console.error(err))