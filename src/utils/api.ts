import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demo6396395.mockable.io',
});

export const fetchBoards = async () => {
  const response = await api.get('/bcf-boards');
  return response.data;
};

export const fetchPrompts = async () => {
  const response = await api.get('/prompts');
  return response.data;
};
