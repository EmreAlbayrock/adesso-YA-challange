import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Units from "./pages/units/Units";
import UnitDetail from "./pages/unitDetail/UnitDetail";
import "./app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/unit/:id" element={<UnitDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
