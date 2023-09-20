import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65059de7ef808d3c66f03dd3.mockapi.io',
});

export const gethAdvertsFromMockAPI = async () => {
  try {
    const response = await instance.get(
      'https://65059de7ef808d3c66f03dd3.mockapi.io/adverts'
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
