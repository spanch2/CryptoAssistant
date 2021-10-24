const { default: axios } = require("axios");
cryptoList = []
cryptos = []
const url = "https://crypto-bot-8b64.azurewebsites.net/qnamaker/knowledgebases/19319ae4-8504-48f3-a9fd-f3f220ec6dba/generateAnswer"
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
  
const getCryptoList = async () => {
  const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" ,requestOptions).catch((err) => {
    console.log('API call error:', err.message);
  });
    // console.log('API call response:', response.data.data);
    for (let c of response.data.data) {
        c.name = c.name.toLowerCase()
        cryptoList.push(c.name)
    }
    cryptos = response.data.data
    
}

const parseInput = async (inputString) => {
    await getCryptoList();
    let targetCrypto = "bitcoin"
    const strArray = inputString.split(" ");
    for (let word of strArray) {
        word = word.toLowerCase()
        if (cryptoList.includes(word)) {
            targetCrypto = word;
        }
    }
    const res = await callApi(inputString);
    if (res.answers[0].answer !== undefined) {
      if (res.answers[0].answer === 'The current price of {crypto} is {price}.') {
        let stringResponse = res.answers[0].answer;
        stringResponse = stringResponse.replace('{crypto}', targetCrypto)
        const index = cryptoList.findIndex((elem) => elem === targetCrypto)
        stringResponse = stringResponse.replace('{price}', "$" + Math.round(cryptos[index].quote.USD.price))
        console.log(stringResponse)
        return stringResponse;
      }
      else {
        return res.answers[0].answer
      }
    }
    else {
      return undefined
    }
}

const callApi = async (question) => {
  const res = await axios.post(url, {question}, {
    headers: {
    "Content-Type": "application/json",
    Authorization: "89b76ed5-7a4e-45fb-9e97-867fca2d4a55"
  }
})
  return res.data;
}


module.exports = parseInput;