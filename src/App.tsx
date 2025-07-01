import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import DishDetails from './componentes/PratoDetalhes';
import FormularioPrato from './componentes/FormularioPrato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DishDetails />} />
        <Route path="/editar-prato/:id" element={<FormularioPrato />} />
        <Route path="/novo-prato" element={<FormularioPrato />} />
        <Route path="/deletar-prato/:id" element={<h1>Deletar o prato</h1>} />
      </Routes>
    </Router>
  );
}

export default App;