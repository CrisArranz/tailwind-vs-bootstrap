import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui";
import { Home, Bootstrap, Tailwind } from "./pages";

function App() {
  return (
    <>
      <Navbar options={['Inicio', 'TailwindCSS', 'Bootstrap']} className=""/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwindcss" element={<Tailwind />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
      </Routes>
    </>
  );
}

export default App;
