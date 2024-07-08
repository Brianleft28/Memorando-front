import type { Memo } from "./memosTypes";
import type { MemosFiltered } from "./memosTypes";
const base = "http://localhost:3000/api/v1/";

/**
 * @getMemos
 * This function is responsible for getting the memos
 * @returns Promise that resolves to the response object of the memos
 */

export const getMemos = async(): Promise<Memo[]> => {
  const url = `${base}memos`;
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
    throw error;
  }
};

/**
 * @getMemoFiltered
 * This function is responsible for getting the memos filtered by the secretaria_id and estado_id
 *
 */

export const getMemosFiltered = async(): Promise<MemosFiltered[]> => {
  const url = `${base}memosFiltrado`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status}, an error occurred while fetching the memos`
      );
    }
    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Error fetching memos", error);
    throw error;
  }
};

/**
 * @getMemosFilteredByDate
 * This function is responsible for getting the memos filtered by the date
 * @param date
 */

  export const getMemosFilteredByDate = async (date: string) => {
/* 
    function convertirAFechaISO(fecha: string){
      const fechaObj = new Date(fecha);
      const fechaISO = fechaObj.toISOString();
      return fechaISO;
    }
    const fechaFormateada = convertirAFechaISO(date);
   */
    const fechaSinGuiones = date.replace(/-/g, '');
    const url = `${base}memos/${fechaSinGuiones}/filtrado`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    try {
      const response = await fetch(url, options);
      console.log(response)
      if (!response.ok) {
        throw new Error(
          `Error: ${response.status}, an error occurred while fetching the memos by date`
        );
      }
      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error("Error fetching memos by date", error);
      throw error;
    }
  }

/**
 * @getMemoFilteredById
 * Esta función es responsable de obtener los memos filtrados por el id
 */

export const getMemoFilteredById = async (id: number) => {
    const url = `${base}memos/${id}/filtrado`;
    const options = {
      method: "GET",
      headers: {
        "Contet-type": "application/json"
      }  
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(
          `Error: ${response.status}, an error occurred while fetching the memo by id`
        );
      }
      const data = await response.json();
      return data.body;
  }   catch (error) {
      console.error("Error fetching memo by id", error);
      throw error;
  }
}

/**
 * @createMemo
 * This function is responsible for creating a memo
 * @param memo
 * @returns {Promise<>} that resolves to the response object of the created memo
 */

export const createMemo = async (param: Memo) => {
  const url = `http://localhost:3000/api/v1/memos/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  };

  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw new Error(
        `Error: ${response.status}, an error occurred while creating the memo`
      );
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * @findOneFiltered
 * This function is responsible for getting a memo by id filtered by the secretaria_id and estado_id
 * @param id
 * @returns {Promise<>} that resolves to the response object of the memo
 */

export const findOneFiltered = async (id: number) => {
  const url = `${base}memos/detail/${id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status}, an error occurred while fetching the memo`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching memo", error);
    throw error;
  }
};
