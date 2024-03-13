import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Sobre from './ProvaHarryPotter/Sobre/Sobre'
import Casas from './ProvaHarryPotter/Casas/Casas';
import Personagens from './ProvaHarryPotter/Personagens/Personagens';
import Menu from './ProvaHarryPotter/Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="display-prova">
          <Route path="/" exact component={Sobre} />
          <Route path="/Casas" component={Casas} />
          <Route path="/Personagens" component={Personagens} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
