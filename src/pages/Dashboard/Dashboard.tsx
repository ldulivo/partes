import { FC, useEffect, useState } from "react";
import "./DashboardClass.scss";
import { getData, getToken, password, urlAPI, username } from "../../services";
import { Link } from "react-router-dom";
import { SvgRight } from "../../components/SvgRight";
import { SvgPerson } from "../../components/SvgPerson";
import { SvgPc } from "../../components/SvgPc";

interface CountInterface {
  Column1: number
}

const Dashboard: FC = () => {
  const [tokenApi, setTokenApi] = useState<string>('');
  const [vClientesDatos, SetvClientesDatos] = useState<number>(0);
  const [vPartesDatos, SetvPartesDatos] = useState<number>(0);



  useEffect(() => {
    if (tokenApi === '') return;
    const loadDataPartes = async () => {
      const partesCount: CountInterface[] = await getData(
        urlAPI,
        tokenApi,
        "vPartesCount",
        0,
        1
      )
      SetvPartesDatos(await partesCount[0].Column1)
    }

    const loadDataClientes = async () => {
      const loadDataClientes: CountInterface[] = await getData(
        urlAPI,
        tokenApi,
        "vClientesCount",
        0,
        1
      )
      SetvClientesDatos(await loadDataClientes[0].Column1)
    }

    loadDataPartes();
    loadDataClientes()
  }, [tokenApi])
  
  useEffect(() => {
    console.log({vClientesDatos});
  }, [vClientesDatos])
  
  useEffect(() => {
    console.log({vPartesDatos});
  }, [vPartesDatos])

  useEffect(() => {
    const login = async () => {
      setTokenApi(await getToken(urlAPI, username, password));
    }
    login();
  }, [])
  return (
    <div className="Dashboard">
      <div className="Dashboard--card clientes">
        <main>
          <div>
            <span>{!vClientesDatos ? 0 : vClientesDatos}</span>
            <p>Clientes</p>
          </div>
          <SvgPerson />
        </main>
        <footer>
          <Link to={"/clientes"}>
            <p>Ver detalles</p>
            <SvgRight />
          </Link>
        </footer>
      </div>
      <div className="Dashboard--card partes">
        <main>
          <div>
            <span>{!vPartesDatos ? 0 : vPartesDatos}</span>
            <p>Partes</p>
          </div>
          <SvgPc />
        </main>
        <footer>
          <Link to={"/partes"}>
            <p>Ver detalles</p>
            <SvgRight />
          </Link>
        </footer>
      </div>
    </div>
  )
}

export { Dashboard }