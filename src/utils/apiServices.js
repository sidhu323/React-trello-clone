/* eslint-disable no-console */
import { config } from './config';

const createParameterizedUrl = (url, params) => {
  let newUrl = url;
  Object.keys(params).forEach((param) => {
    const regex = new RegExp(`{${param}}`, 'g');
    newUrl = newUrl.replace(regex, params[param]);
  });
  return newUrl.replace(new RegExp('//', 'g'), '/');
};

const createQueriedUrl = (url, queries) => {
  let newUrl = url;

  // adding API and Client key to query
  let updatedQueries = queries || {};

  updatedQueries = { ...queries, key: config.apiKey, token: config.clientToken };
  Object.keys(updatedQueries).forEach((query, index) => {
    newUrl
      += index > 0 ? `&${query}=${updatedQueries[query]}` : `?${query}=${updatedQueries[query]}`;
  });
  return newUrl;
};

const crudData = async (
  apiEndpoint,
  method,
  parameterObject,
  payload,
  queryObject,
) => {
  let modifiedApiEndpoint = apiEndpoint;
  if (parameterObject) {
    modifiedApiEndpoint = createParameterizedUrl(
      modifiedApiEndpoint,
      parameterObject,
    );
  }

  modifiedApiEndpoint = createQueriedUrl(modifiedApiEndpoint, queryObject);

  try {
    const res = await fetch(config.baseAddress + modifiedApiEndpoint, {
      method,
      //   credentials: "include",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
};

export default crudData;
