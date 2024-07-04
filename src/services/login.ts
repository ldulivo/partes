const getToken = async (urlAPI: string, username: string, password: string) => {
  const url = `${urlAPI}token`;
  const b64Token = btoa(username + ':' + password); // Codificar credenciales en Base64
  const headers = {
    'Authorization': `Basic ${b64Token}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const options = {
    method: 'POST',
    headers,
    body: 'grant_type=password' // Datos de la solicitud
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Token obtenido:', data); // Imprimir token
    const token = await data.access_token;
    return token;
  } catch (error) {
    console.error('Error al obtener token:', error);
  }
}

export { getToken };