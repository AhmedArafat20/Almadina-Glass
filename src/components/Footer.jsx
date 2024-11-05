
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-100 " style={{ height: '100px' }}>
      <div className="text-lg font-bold">شركة المدينه</div>
          <div className="text-lg">
              <a href="tel:+9660506172365">0506172365</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 hover:text-blue-800 ml-4" size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 hover:text-pink-800" size={24} />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-600 hover:text-green-800" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
