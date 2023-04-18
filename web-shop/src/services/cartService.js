const baseUrl = "http://localhost:3030/jsonstore/cart";

export const getCartItems = async () => {
  const response = await fetch(baseUrl);

  const result = response.json();

  return result;
};

export const addCartItem = async (data) => {
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

export const deleteCartItemById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

  const result = response.json();

  return result;
};
