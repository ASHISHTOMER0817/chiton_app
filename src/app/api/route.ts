import axios from 'axios'
import { exit } from 'process';


export async function DataFetch () {
//       const options = {
//             method: 'GET',
//             url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list',
//   headers: {
//         'X-RapidAPI-Key': 'b1de8876damsh6882c98db67483bp17156djsnced71ceb7ee8',
//         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//       }
// };

// try {
//       const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
//       console.error(error);
// }

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
//      process.exit()
      
} catch (error) {
	console.error(error);
}
}