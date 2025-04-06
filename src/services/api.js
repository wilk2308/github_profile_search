import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um status code fora do intervalo 2xx
      console.error('Erro de resposta do servidor:', error.response.data);
      throw new Error('Perfil não encontrado'); // Ou outra mensagem de erro apropriada
    } else if (error.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error('Erro de requisição:', error.request);
      throw new Error('Erro de rede');
    } else {
      // Algo aconteceu na configuração da requisição que causou um erro
      console.error('Erro na configuração da requisição:', error.message);
      throw new Error('Erro desconhecido');
    }
  }
};