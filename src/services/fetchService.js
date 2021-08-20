export const fetchService = async (url, method, body) => {
  let res;
  console.log(method);
  if (method !== 'GET') {
    res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
  else {
    res = await fetch(url, {
      method
    });
  }
  const json = await res.json();
  return json;
};
