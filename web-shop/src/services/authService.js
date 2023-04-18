const baseUrl = "http://localhost:3030/users";

export const login = async (data) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 403) {
    return response;
  }

  const result = await response.json();

  return result;
};

export const register = async (data) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.status === 409) {
    return response;
  }

  const result = await response.json();

  return result;
};
