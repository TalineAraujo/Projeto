import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
    <>
      {/* Adiciono o Router (BrowserRouter) para mostrar ao React que minha aplicação possui rotas */}
      <Router>
        {/* Carrego o componente onde defino as rotas */}
        <RoutesComponent />
      </Router>
    </>
  );
}

export default App;
