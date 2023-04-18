const baseUrl = "http://localhost:3030/jsonstore/clothing";

export const getClothing = async () => {
  const response = await fetch(baseUrl);

  const result = await response.json();

  return Object.values(result);
};

export const addClothing = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};

export const getClothingById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);

  const result = await response.json();

  return result;
};
