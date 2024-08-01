import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import IngresoClientes from './pages/Ingreso/Clientes';
import IngresoCarro from './pages/Ingreso/Carro';
import IngresoRevisiones from './pages/Ingreso/Revision/Revision';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingreso/vehiculo" element={<IngresoCarro />} />
          <Route path="/ingreso/clientes" element={<IngresoClientes />} />
          <Route path="/ingreso/revisiones" element={<IngresoRevisiones />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
