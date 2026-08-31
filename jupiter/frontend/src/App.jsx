import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Equipe from './pages/Equipe/Equipe';
import Projetos from './pages/Projetos/Projetos';
import Patrocinadores from './pages/Patrocinadores/Patrocinadores';
import Contato from './pages/Contato/Contato';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="patrocinadores" element={<Patrocinadores />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
