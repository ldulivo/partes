import { FC, useEffect, useState } from "react";
import { getData, getToken, password, urlAPI, username } from "../../services";
import { GridExample } from "../../demoGrid";
import { VClientesDatoInterface } from "../../vClientesDatoInterface";

const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString('sp-sp', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
  });
};

const Clientes: FC = () => {
  const [tokenApi, setTokenApi] = useState<string>('');
  const [vPartesDatos, SetvPartesDatos] = useState<VClientesDatoInterface[]>();

  useEffect(() => {
    if (tokenApi === '') return;
    const loadData = async () => {
      SetvPartesDatos(await getData(
        urlAPI,
        tokenApi,
        "vClientesDatos",
        0,
        500
      ))
    }

    loadData();
  }, [tokenApi])
  
  useEffect(() => {
    console.log(vPartesDatos);
  }, [vPartesDatos])

  useEffect(() => {
    const login = async () => {
      setTokenApi(await getToken(urlAPI, username, password));
    }
    login();
  }, [])

  const colDefs = [
    {
      field: 'IdCliente',
      width: 100,
      checkboxSelection: true,
    },
    {
      field: 'Cliente',
      width: 500
    },
    // {
    //   field: 'price',
    //   width: 130,
    //   valueFormatter: (params) => {
    //       return params.value.toLocaleString() + ' €';
    //   },
    // },
    {
      field: 'FechaAlta',
      valueFormatter: dateFormatter,
    },
    // {
    //   field: 'electric',
    //   cellClassRules: {
    //       // apply green to electric cars
    //       'rag-green': params => params.value === true,
    //   },
    //   width: 120,
    //   // cellRenderer: MissionResultRenderer // cellRenderer: puede llamar una funcion
    // },
    {
      field: 'E_Mail'
    }
  ]

  return (
    <>
    {
        vPartesDatos ?
          <GridExample
            rowData={vPartesDatos}
            colDefs={colDefs}
          />
          : null
      }
    </>
  )
};

export { Clientes };