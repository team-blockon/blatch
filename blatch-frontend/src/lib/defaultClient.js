import axios from 'axios';

const defaultClient = axios.create({
  baseURL: 'http://localhost:8000'
});

export default defaultClient;
