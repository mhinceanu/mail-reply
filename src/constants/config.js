const { hostname } = window.location;
let sufix = '_LOCAL';

if (hostname.includes('dev')) {
  sufix = '_DEV';
} else if (hostname.includes('qa')) {
  sufix = '_QA';
} else if (hostname.includes('prod')) {
  sufix = '_PROD';
}

const SERVICE_URL = process.env[`REACT_APP_SERVICE_URL${sufix}`];

const config = {
  serviceUrl: SERVICE_URL
};

export default config;
