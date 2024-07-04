// import { AgGridReact } from "ag-grid-react"
// import { useState } from "react";

// import { useEffect, useState } from "react";
// import { getData, getToken, password, urlAPI, username } from "./services";

// import { GridExample } from "./demoGrid"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Partes } from "./pages/Partes/Partes";
import { Clientes } from "./pages/Clientes/Clientes";

function App() {

  // const [columnDefs, setColumnDefs] = useState([
  //   { field: 'athlete' },
  //   { field: 'sport' },
  //   { field: 'age' }
// ]);

  return (
    <>
    <h1>Hercules</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/partes" element={<Partes />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
