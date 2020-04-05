const BASE_URL = 'https://kapi-lineas-ruddy.now.sh/api';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  lineas: {
    list() {
      return callApi('/lineas');
    },
    create(linea) {
      // throw new Error('500: Server error');
      return callApi(`/lineas/new`, {
        method: 'POST',
        body: JSON.stringify(linea),
      });
    },
    read(lineaId) {
      return callApi(`/lineas/${lineaId}`);
    },
    update(lineaId, updates) {
      return callApi(`/lineas/${lineaId}/update`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(lineaId) {
      return callApi(`/lineas/${lineaId}/delete`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
