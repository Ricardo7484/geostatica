import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InsertScreen } from "./screens/InsertScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import { Samples } from "./screens/Samples";


function App() {
  /*
    peso: KN/m³
  */
  const pesoEspecifico = {
    materiais: [{
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '0-2',
      peso: 13
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '3-5',
      peso: 15
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '6-10',
      peso: 17
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '11-19',
      peso: 19
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '20-inf',
      peso: 21
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '0-4',
      peso: 18
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '5-8',
      peso: 18
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '19-40',
      peso: 20
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '41-inf',
      peso: 20
    }]
  }

  return (
    <div className="content">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InsertScreen />} />
            <Route path="/amostras/:level/:layers" element={<Samples />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;