'use es6';

import 'whatwg-fetch';
import { maxPriceOfProduct, minRatingOfProduct } from '../constants/ProductParameters';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

function createQueryParam(product, maxPrice, minRating) {
  let queryParam = `?product_type=${product.product}`;
  queryParam = product.category //If there is a product category add to request
    ? `${queryParam}&product_category=${product.category}`
    : queryParam;
  // If price range hasn't been changed don't add to requst
  queryParam = maxPrice === maxPriceOfProduct
    ? queryParam
    : `${queryParam}&price_less_than=${maxPrice}`;
  // If rating hasn't been changes don't add to request
  queryParam = minRating === minRatingOfProduct
    ? queryParam
    : `${queryParam}&rating_greater_than=${minRating}}`;
  return queryParam;
}

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

function doSearch(product, maxPrice, minRating, response) {
  const queryParam = createQueryParam(product, maxPrice, minRating);
  return fetch(`${BASE_URL}${queryParam}`, {
    accept: 'application/json',
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(response);
}


const MakeUpApiClient = { doSearch };
export default MakeUpApiClient;
