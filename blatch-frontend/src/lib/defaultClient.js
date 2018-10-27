import axios from 'axios';

// 벡앤드와 연결.
const defaultClient = axios.create({
  baseURL: 'http://localhost:8000'
});

export default defaultClient;
