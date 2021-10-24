const { default: axios } = require("axios");

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '100',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': '2141cd14-65a3-441b-bc5b-d41906444d43'
    },
    json: true,
    gzip: true
  };
  
const getCryptoList = () => {
  axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" ,requestOptions).then(response => {
    console.log('API call response:', response.data.data);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
}
getCryptoList()