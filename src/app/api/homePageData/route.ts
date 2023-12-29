import axios from 'axios'


export async function GET () {

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
  params: {
    lang: 'en',
    country: 'us',
    productcode: '0839915011'
  },
  headers: {
    'X-RapidAPI-Key': 'b1de8876damsh6882c98db67483bp17156djsnced71ceb7ee8',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data)
      const productDetails = response.data
      return productDetails;
//      process.exit()
      
} catch (error) {
	console.error(error);
}
}