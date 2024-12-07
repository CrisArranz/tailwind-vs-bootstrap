import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui";
import { Home, Bootstrap, Tailwind } from "./pages";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    setIsDark(prev => !prev);
  }

  return (
    <>
      <Navbar options={['Inicio', 'TailwindCSS', 'Bootstrap']} className="" onDarkMode={handleDark} isDark={isDark}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwindcss" element={<Tailwind />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
      </Routes>
    </>
  );
}

export default App;
