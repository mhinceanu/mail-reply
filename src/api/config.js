// import config from '../constants/config';
// const { serviceURl } = config;

// const proxiedServiceUrl = process.env.NODE_ENV === 'development'
//     ? `http://localhost:3001/api?url=${serviceURl}`
//     : '';
const proxy = 'http://localhost:3001/';

const paths = {
  dictionary: () => `${proxy}api/dictionary`
};

export default paths;
