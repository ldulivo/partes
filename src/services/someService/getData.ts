const getData = async (
  urlAPI: string,
  token: string,
  vista: string,
  page: number = 0,
  pageSize: number = 10,
  // filtro:string = '',
  // orden: string = ''
) => {
  const apiUrlFetch = `${urlAPI}webapi/list/API_ERP/${vista}?page=${page}&pageSize=${pageSize}`;
  console.log("\n\n get", apiUrlFetch)

  try {
    const response = await fetch(apiUrlFetch, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8'
      },
      // mode: 'no-cors'
    });

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return null; // Or handle error differently (e.g., throw)
  }
};

export { getData };