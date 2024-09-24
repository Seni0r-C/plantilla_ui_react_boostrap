import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import IngresoCarro from './pages/ejemplo/ejemplo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejemplo" element={<IngresoCarro />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
