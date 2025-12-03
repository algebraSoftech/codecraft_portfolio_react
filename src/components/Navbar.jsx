import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { MdOutlineDensityMedium } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setToggle(!toggle);

  const controlNavbar = useCallback(() => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent mt-3"
    >
      <div className="flex justify-between items-center mx-auto w-11/12 md:w-4/5 h-16 md:h-20 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl px-4 md:px-6 shadow-xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          CodeCraft Team
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-white">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer px-4 py-2 rounded-xl hover:bg-white/10 transition"
            >
              <a href={`#${item.id}`}>{item.label}</a>
            </motion.li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        {/* <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="hidden md:flex px-4 py-2 rounded-xl bg-green-500 text-white text-sm shadow-lg hover:bg-green-600"
        >
          WhatsApp
        </a> */}
        <div></div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button onClick={handleToggle}>
            {toggle ? (
              <RxCross1 className="text-2xl" />
            ) : (
              <MdOutlineDensityMedium className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl text-white flex flex-col py-6 space-y-6 z-40"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg text-center"
                >
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.label}
                  </a>
                </motion.li>
              ))}

              {/* Mobile WhatsApp Button */}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
