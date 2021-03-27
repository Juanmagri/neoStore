let API = "https://api.exchangeratesapi.io/latest";

const getData = (URL_API, callback) => {
   const req = new XMLHttpRequest();
   req.open("GET", URL_API, true);
   req.onreadystatechange = (eve) => {
      if (req.readyState === 4) {
         if (req.status === 200) {
            callback(null, JSON.parse(req.responseText))
         } else {
            let err = new Error("Whooops!");
            return callback(err, null);
         }
      }
   }
   req.send();
}

getData(API, function(error1, data1) {
   if (error1) return console.error(error1)
   console.log(data1.rates.USD)
});