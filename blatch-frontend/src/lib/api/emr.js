import defaultClient from 'lib/defaultClient';

export const getEmr = () => {
  return defaultClient.post('/api/emr');
};
