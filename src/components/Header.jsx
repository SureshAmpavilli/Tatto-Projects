import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import MultiColumnDropdown from "./MultiColumn";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For SEARCH dropdown
  const dropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);

  // Handle outside clicks for both dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleProfilesClick = () => {
    setShowDropdown(true);

    const scrollToProfiles = () => {
      const el = document.getElementById("profiles");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scrollToProfiles, 300);
    } else {
      scrollToProfiles();
    }

    setOpen(false);
  };

  const navLink =
    "relative text-lg font-medium transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-black/80 dark:hover:text-white/80";

  const logoLink =
    "text-2xl font-bold tracking-wide transition-colors hover:text-black/90 dark:hover:text-white/90";

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-navbar w-full sticky top-0 z-50 bg-white/70 dark:bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between lg:h-[80px]">
        {/* Logo */}
        <Link to="/" className={logoLink}>
        <div className="flex flex-row items-center">
  <img
    src="/Advocate-Logo.png"
    alt="Advocate Logo"
    className="h-[70px] w-[200px] object-contain invert-0 dark:invert -mt-[1px]"
  />
  <span className="ml-[-50px] text-lg font-semibold">E‑Advocate Services</span>
</div>



        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* SEARCH dropdown */}
        <div className="relative inline-block text-left" ref={searchDropdownRef}>
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-black dark:text-white font-semibold flex items-center space-x-1 hover:underline"
  >
    <span>SEARCH</span>
    <svg
      className="w-4 h-4 ml-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </button>

  {isOpen && (
    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-black dark:bg-white z-50 text-white dark:text-black font-bold text-sm border border-white/10">
      <a
        href="#search"
        onClick={() => setIsOpen(false)}
        className="block px-4 py-2 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black   transition"
      >
        Search
      </a>
      <a
        href="#search-by-id"
        onClick={() => setIsOpen(false)}
        className="block px-4 py-2 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black   transition"
      >
        Search by Profile ID
      </a>
        <a
        href="#search-by-id"
        onClick={() => setIsOpen(false)}
        className="block px-4 py-2 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black   transition"
      >
        More Tasks
      </a>
    </div>
  )}
</div>

          {/* Browse Profiles Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <span onClick={handleProfilesClick} className={navLink}>
              Browse Profiles
            </span>
            {showDropdown && (
              <div className="absolute left-0 top-full mt-[30px] z-50 w-max bg-white text-black dark:bg-black dark:text-white rounded shadow-lg border border-gray-200 dark:border-white/20 ml-[-400px] h-[500px]">
                <div className="text-inherit [&_*]:text-inherit">
                  <MultiColumnDropdown />
                </div>
              </div>
            )}
          </div>

        
          <span onClick={() => scrollToSection("blog")} className={navLink}>Blog</span>
            <span onClick={() => scrollToSection("about")} className={navLink}>About</span>
          <span onClick={() => scrollToSection("help")} className={navLink}>Help</span>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 text-sm font-medium rounded border border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 text-sm font-medium rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Register
          </button>
          <button onClick={toggleTheme} className="glass-btn px-3 py-2">
            {theme === "dark" ? "🌕" : "🌗"}
          </button>
        </div>

        {/* Mobile burger icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl glass-btn p-1"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 space-y-2 bg-white/70 dark:bg-black/40 backdrop-blur-md"
          >
            <span onClick={scrollToTop} className={navLink}>Home</span>
            <span onClick={() => scrollToSection("about")} className={navLink}>About</span>
            <span onClick={handleProfilesClick} className={navLink}>Browse Profiles</span>
            <span onClick={() => scrollToSection("blog")} className={navLink}>Blog</span>
             <span onClick={() => scrollToSection("help")} className={navLink}>Help</span>

            <button
              onClick={() => { setOpen(false); navigate("/login"); }}
              className="block w-full text-left px-3 py-2 text-sm rounded border border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
            >
              Login
            </button>
            <button
              onClick={() => { setOpen(false); navigate("/register"); }}
              className="block w-full text-left px-3 py-2 text-sm rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              Register
            </button>
            <button
              onClick={() => { toggleTheme(); setOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm glass-btn rounded"
            >
              {theme === "dark" ? "🌕" : "🌗"} Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
