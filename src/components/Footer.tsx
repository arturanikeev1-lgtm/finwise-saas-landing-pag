import Container from './Container';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Бренд */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">SELLER PRO</h2>
          <p>Современные решения для роста вашего бизнеса.</p>
        </div>

        {/* Быстрые ссылки */}
        <div>
          <h3 className="text-white font-semibold mb-2">Навигация</h3>
          <ul className="space-y-1">
            <li><a href="#portfolio" className="hover:text-white">Примеры работ</a></li>
            <li><a href="#pricing" className="hover:text-white">Цены</a></li>
            <li><a href="#testimonials" className="hover:text-white">Отзывы</a></li>
          </ul>
        </div>

        {/* Контакты и соцсети */}
        <div>
          <h3 className="text-white font-semibold mb-2">Контакты</h3>
          <p>Email: address@yoursite.com</p>
          <p>Телефон: +1 (123) 456-7890</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://t.me/sellerprotop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@pro.seller.global?si=v1CivTUTsX9BCLVZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </Container>

      <div className="text-center text-gray-500 text-xs mt-10">
        © 2025 SELLER PRO. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
