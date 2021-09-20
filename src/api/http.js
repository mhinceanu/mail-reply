const httpConfig = {
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
};

const http = {
  get: (headers = {}) => ({
    method: 'GET',
    ...httpConfig,
    headers: {
      ...httpConfig.headers,
      ...headers
    }
  }),
  post: (payload, headers = {}) => ({
    method: 'POST',
    ...httpConfig,
    headers: {
      ...httpConfig.headers,
      ...headers
    },
    body: JSON.stringify(payload)
  }),
  put: (payload, headers) => ({
    method: 'PUT',
    ...httpConfig,
    headers: {
      ...httpConfig.headers,
      ...headers
    },
    body: JSON.stringify(payload)
  }),
  delete: (headers) => ({
    method: 'DELETE',
    ...httpConfig,
    headers: {
      ...httpConfig.headers,
      ...headers
    }
  }),
  htmlHeaders: {
    'Content-Type': 'text/plain'
  }
};

export default http;
