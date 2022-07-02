const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());
app.get("/", async (req, res) => {
    const response =  await axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
    headers: {
      'X-CMC_PRO_API_KEY': '10625a76-2e34-49af-8f9a-51414299fdfe',
    },
  });
  console.log(response.data);
  res.json(response.data);
  
})

app.listen(3100, () => {
  console.log("Listening on port 3100");
});