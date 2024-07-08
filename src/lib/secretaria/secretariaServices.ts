/**
 * @name base
 * @description URL base de la API
 */

const base = "http://localhost:3000/api/v1/";

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
