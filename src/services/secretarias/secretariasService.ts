/**
 * Este archivo contiene las funciones que se encargan de realizar las peticiones al servidor para la creación, actualización y eliminación de secretarias.
 */
import type { Secretaria } from "./secretarias.type";
/**
 * Esta función se encarga de crear una secretaria.
 * @param secretaria Objeto que representa la secretaria a crear.
 * @returns Promesa que resuelve al objeto de respuesta de la creación de la secretaria.
 */

export async function createSecretaria(
  secretaria: Secretaria
): Promise<Secretaria> {
  const url = "http://localhost:3000/api/v1/secretarias";
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
  const json = JSON.parse(secretaria as unknown as string);
  const url = `http://localhost:3000/api/v1/secretarias/${id}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  };
  try {
    const response = await fetch(url, options);

    console.log(response);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status}, ocurrio un error al actualizar la secretaria`
      );
    }
  } catch (error) {
    console.error("Error al actualizar la secretaria", error);
    throw error;
  }
}

export async function deleteSecretaria(id: number): Promise<void> {
  const url = `http://localhost:3000/api/v1/secretarias/${id}`;
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
  } catch (error) {
    console.error("Error al eliminar la secretaria", error);
    throw error;
  }
}
