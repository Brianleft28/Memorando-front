/**
 * @ base is a constant that contains the URL of the API
 * @type {string}
 * @default http://localhost:3000/api/v1/
 */

const base = "http://localhost:3000/api/v1/";

/**
 * @getMemos
 * This function is responsible for getting the memos
 * @returns {Promise<>} that resolves to the response object of the memos
 */

export const getMemos = async () => {
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
    console.log(data.body);
    return data.body;
  } catch (error) {
    console.error("Error getting memos", error);
    throw error;
  }
};
