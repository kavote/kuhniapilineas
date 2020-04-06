const BASE_URL = 'https://kapi-lineas-ruddy.now.sh/api';
//const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
    /*.then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));*/
  const data = await response.json();

  return data;
}

const api = {
  lineas: {
    list() {
      let data = callApi('/lineas', {
        method: 'GET',
        redirect: 'follow',
      });
      return data;
    },
    create(linea) {
      // throw new Error('500: Server error');
      return callApi(`/lineas/new`, {
        method: 'POST',
        body: JSON.stringify(linea),
      });
    },
    read(lineaId) {
      let data = callApi(`/lineas/${lineaId}`, {
        method: 'GET',
        redirect: 'follow'
      });
      return data;
    },
    update(lineaId, updates) {
      let linea = {id:updates._id,linea:updates.linea,usuario:updates.usuario,usufecha:updates.usufecha,usuhora:updates.usuhora,numero:updates.numero};
      return callApi(`/lineas/${lineaId}/update`, {
        method: 'POST',
        body: JSON.stringify(linea),
        redirect: 'follow',
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(lineaId) {
      return callApi(`/lineas/${lineaId}/remove`, {
        method: 'POST',
        redirect: 'follow'
      });
    },
  },
};

export default api;
