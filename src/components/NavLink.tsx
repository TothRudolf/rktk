import { BrowserRouter as Router, Link, useLocation } from "react-router-dom"

const NavLink: React.FC<{ path: string; children: React.ReactNode }> = ({ path, children }) => {
    const location = useLocation();
    const isActive = location.pathname === path;
  
    return (
      <Link
        to={path}
        className={`relative text-lg font-semibold ${
          isActive ? "text-[#fff5f3]" : "text-gray-300"
        } hover:text-white transition`}
      >
        {children}
        {isActive && (
          <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff5f3]"></span>
        )}
      </Link>
    );
    
  };
  export default NavLink;