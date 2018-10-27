import defaultClient from 'lib/defaultClient';

export const saveVideo = base64 => {
  return defaultClient.post('/api/record', { base64 });
};
