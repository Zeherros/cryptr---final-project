const axios = require("axios");
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get("/:symbol/:interval", async (req, res) => {
  const symbol = req.params.symbol;
  const interval = req.params.interval;
    const response = await axios.get('https://binance43.p.rapidapi.com/klines', {
    params: {symbol: symbol, interval: interval, limit: '500'}, headers: {
      'X-RapidAPI-Key': 'bb1228910bmsh1d1f3865c0cb8e8p1413dejsna0dd23cbc20e',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
    } 
  });
  console.log(response.data);
  res.json(response.data);
  
})

app.listen(3300, () => {
  console.log("Listening on port 3300");
})