import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certificates",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="App.jsx">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 rounded-full object-cover border-2 border-[#00F3FF] shadow-[0_0_15px_rgba(0,243,255,0.4)] transition duration-300 hover:shadow-[0_0_35px_rgba(0,243,255,0.9)] hover:scale-105 hover:rotate-3"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          <li>
            <a
              href="#home"
              className="text-[#00F3FF] border-b-2 border-[#00F3FF] pb-1"
            >
              Home
            </a>
          </li>

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-[#00F3FF] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00F3FF] cursor-pointer"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-5 flex flex-col items-center gap-6 bg-[#0B0F13]/95 py-6 rounded-xl border border-[#00F3FF]/10">

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-[#00F3FF]"
          >
            Home
          </a>

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-[#00F3FF] transition"
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;