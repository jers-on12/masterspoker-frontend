const HttpClient = (input: string, init?: RequestInit) =>
  fetch(`${import.meta.env.VITE_API_ENDPOINT_URL}/${input}`, {
    mode: "cors",
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

export default HttpClient;
