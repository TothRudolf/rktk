import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.jpg";
import Program from "./components/Program";
import Koszonto from "./components/Koszonto";
import Szekciok from "./components/Szekciok";
import Bizotsag from "./components/Bizotsag";
import NavLink from "./components/NavLink";
import Jelentkezes from "./components/Jelentkezés";
import Apaczai400 from "./components/Apaczai400";
import Partnerek from "./components/Partnerek";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Köszöntő", path: "/", component: Koszonto },
    { name: "Szekciók", path: "/szekciok", component: Szekciok },
    { name: "Bizottságok", path: "/bizottsagok", component: Bizotsag },
    { name: "Program", path: "/program", component: Program },
    { name: "Jelentkezés", path: "/jelentkezes", component: Jelentkezes },
    { name: "Apáczai 400", path: "/apaczai400", component: Apaczai400 },
    { name: "Partnerek és támogatók", path: "/tamogatok", component: Partnerek },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-[rgb(209,40,52)] text-white py-4 shadow-lg">
          <div className="w-full px-6 flex justify-between items-center">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="h-16 w-16 md:h-32 md:w-32 rounded-lg shadow-md" />
              <Link to="/" className="text-xl md:text-3xl font-bold hover:opacity-90 transition">
                RKTK - Romániai Középiskolás <br /> Tudományos Konferencia
              </Link>
            </div>
            
            {/* Hamburger Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {links.map((link, index) => (
                <NavLink key={index} path={link.path}>{link.name}</NavLink>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center space-y-4 bg-red-600 py-4">
              {links.map((link, index) => (
                <Link key={index} to={link.path} onClick={() => setMenuOpen(false)} className="text-white text-lg font-semibold">
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Page Content */}
        <main className="p-8 max-w-5xl mx-auto">
          <Routes>
            {links.map((link) => (
              <Route key={link.name} path={link.path} element={<link.component />} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
