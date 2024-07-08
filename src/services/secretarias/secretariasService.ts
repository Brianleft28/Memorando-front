/**
 * Este archivo contiene las funciones que se encargan de realizar las peticiones al servidor para la creación, actualización y eliminación de secretarias.
 */
import type { Secretaria } from "./secretarias.type";

/**
 * @base Almacena el nombre incial de la url de la API. 
 * @type {string}
 * @default  http://localhost:3000/api/v1/
 */

const base = "http://localhost:3000/api/v1/";

/**
 *  @nameSecretarias
 * @ Obtiene las secretarias
 */
export const getSecretarias = async () => {
  const url = `${base}secretarias`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Error al obtener las secretarias", error);
    throw error;
  }
};

/**
 * Esta función se encarga de crear una secretaria.
 * @param secretaria Objeto que representa la secretaria a crear.
 * @returns Promesa que resuelve al objeto de respuesta de la creación de la secretaria.
 */
export async function createSecretaria(
  secretaria: Secretaria
): Promise<void> {
  const url = `${base}secretarias`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(secretaria),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status}, ocurrio un error al crear la secretaria`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error al crear la secretaria", error);
    throw error;
  }
}

export async function updateSecretarias(
  id: number,
  secretaria: Secretaria
): Promise<void> {
  const json = JSON.stringify({ nombre: secretaria });
  const url = `${base}secretarias/${id}`;
  console.log(url);
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  };
  console.log(json);
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error("Error al actualizar la secretaria", error);
    throw error;
  }
}

export async function deleteSecretaria(id: number): Promise<void> {
  const url = `${base}secretarias/${id}`;
  const options = {
    method: "DELETE",
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status}, ocurrio un error al eliminar la secretaria`
      );
    }
    const responseJson = response.json();
    return responseJson;
  } catch (error) {
    console.error("Error al eliminar la secretaria", error);
    throw error;
  }
}
