import { writable } from 'svelte/store';

export const secretarias = writable([]);


const url = 'http://localhost:3000/api/v1/secretarias';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getSecretarias = async () => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.body);
  
  secretarias.set(data.body); // Actualiza la store
  return data.body; 
};


export const addSecretaria = (nuevaSecretaria) => {
    secretarias.update(currentSecretarias => {
      return [...currentSecretarias, nuevaSecretaria];
    });
    getSecretarias();
  };