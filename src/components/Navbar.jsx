import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Headerimg from '../assets/headerimg.jpg';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'رواد في صناعة الزجاج والاستركشر';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index = (index + 1) % (fullText.length + 1);
    }, 150); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="flex arabic-text flex-wrap items-center justify-between p-3 bg-[#fcece4]">
      <div className="text-3xl font-bold hidden md:block arabic-text">المدينه للزجاج</div>


        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <img
              className={`toggle ${menuOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Open menu"
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close menu"
            />
          </button>
        </div>

        <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right mt-5 md:mt-0`}>
          {/* <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-3"> </a> */}
          <NavLink to='/'  className="block md:inline-block hover:text-blue-500 px-3 py-3"> الصفحه الرئيسيه</NavLink>
          <NavLink to='/ourserve'  className="block md:inline-block hover:text-blue-500 px-3 py-3">خدماتنا</NavLink>
          <a href="#map-section" className="block md:inline-block hover:text-blue-500 px-3 py-3">موقعنا</a>
        </div>

        <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full text-end md:flex md:w-auto px-2 py-2 md:rounded`}>
          <a href="tel:+123">
            <div className="flex justify-end">
            <a href="tel:+9660506172365" className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
  اتصل بنا
</a>

            </div>
          </a>
        </div>
      </nav>

      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img 
            src={Headerimg} 
            alt="Background Image" 
            className="object-cover object-center w-full h-full" 
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              شركة المدينه للزجاج
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              {displayedText}
            </p>
            <motion.a
               href="tel:+9660506172365"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              اتصل بنا
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
