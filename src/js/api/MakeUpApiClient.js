'use es6';

import 'whatwg-fetch';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}


function doSearch(product, response) {
  let queryParam = `?product_type=${product.product}`;
  queryParam = product.category ? `${queryParam}&category=${product.category}` : queryParam;
  return fetch(`${BASE_URL}${queryParam}`, {
    accept: 'application/json',
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(response);
}


const MakeUpApiClient = { doSearch };
export default MakeUpApiClient;
