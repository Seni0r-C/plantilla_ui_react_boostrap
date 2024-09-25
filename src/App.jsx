import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import IngresoCarro from './pages/ejemplo/ejemplo';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin Layout, por ejemplo: Login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ejemplo" element={<IngresoCarro />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
