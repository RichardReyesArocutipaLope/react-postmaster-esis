// const baseUrl = "https://api-nestjs-heroes.herokuapp.com";
const baseUrl = "https://ciistacna.com/api"

const fetchSinToken = (endpoint, data, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`;
  // const url = `/${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

const fetchConToken = (endpoint, data = {}, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`;
  // const url = `/${endpoint}`;
  const token = localStorage.getItem('Token') || '';

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Authorization': token
      }
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}

export {
  fetchConToken,
  fetchSinToken,
}