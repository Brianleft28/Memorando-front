import { writable } from "svelte/store";
import type { Secretaria } from "./secretarias.type.ts";
import { deleteSecretaria as deleteSecretariaService } from "../services/secretarias/secretariasService";
export const secretarias = writable([]);

/**
 * @function getSecretarias
 * @description Obtiene las secretarias
 * @returns {Promise<Secretaria[]>}
 * @example const secretarias = await getSecretarias();
 */
const url = "http://localhost:3000/api/v1/secretarias";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSecretarias = async () => {
  const response = await fetch(url, options);
  const data = await response.json();

  secretarias.set(data.body); // Actualiza la store
  return data.body;
};
/**
 * @function addSecretaria
 * @description Agrega una nueva secretaria
 * @param nuevaSecretaria {Secretaria}
 * @returns {void}
 */
export const addSecretaria = (nuevaSecretaria: Secretaria) => {
  secretarias.update((currentSecretarias: Secretaria[]) => {
    return [...currentSecretarias, nuevaSecretaria];
  });
  getSecretarias();
};
/* update */
/**
 * @function updateSecretaria
 * @description Actualiza una secretaria
 *  Actualiza una secretaria
 * @param id
 * @param secretaria
 * @returns {void}
 */
export const updateSecretaria = (id, secretaria) => {
  const url = `http://localhost:3000/api/v1/secretarias/${id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre: secretaria }),
  };

  fetch(url, options)
    .then((response) => {
      /*  */
      if (!response.ok) {
        throw new Error(
          `Error: ${response.status}, ocurrio un error al actualizar la secretaria`
        );
      }
      getSecretarias();
    })
    .catch((error) => {
      console.error("Error al actualizar la secretaria", error);
      throw error;
    });
};

/**
 *  Elimina una secretaria
 * @param id
 * @returns
 */
export const deleteSecretaria = (id) => {
  secretarias.update((currentSecretarias) => {
    return currentSecretarias.filter(
      (secretaria: Secretaria[]) => secretaria.id !== id
    );
  });
  deleteSecretariaService(id);
  getSecretarias();
};
