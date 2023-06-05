import { Link } from "react-router-dom";
import Logo from "../images/logo.gym.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p className="footer__suport">Support</p>
          <a href="tel:18006995" className="footer__tel">
            1800 6995
          </a>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/nguyen-nhat-thanh-3b2657261/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="footer__icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006777150196"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/_26030_0/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram className="footer__icon" />
            </a>
            <a
              href="https://twitter.com/Nhat1832"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter className="footer__icon" />
            </a>
          </div>
        </article>
        <article>
          <h4>Danh Mục</h4>
          <Link to="/about">Về Chúng Tôi</Link>
          <Link to="/plans">Kế Hoạch</Link>
          <Link to="/trainers">Huấn Luyện Viên</Link>
          <Link to="/gallery">Phòng Tập</Link>
          <Link to="/contact">Liên Hệ</Link>
        </article>
        <article>
          <h4>Dịch Vụ</h4>
          <Link to="/s">Dance</Link>
          <Link to="/s">GroupX</Link>
          <Link to="/s">Yoga</Link>
          <Link to="/s">Công Nghệ giảm mỡ Hypoxi</Link>
          <Link to="/trainers">Huấn Luyện Viên Cá Nhân</Link>
        </article>{" "}
        <article>
          <h4>Công Ty</h4>
          <Link to="/about">Về Chúng Tôi</Link>
          <Link to="/s">Điều Kiện Sử Dụng</Link>
          <Link to="/s">Chính sách bảo mật</Link>
          <Link to="/s">Chính sách thanh toán</Link>
          <Link to="/s">Chính sách giải quyết khiếu nại</Link>
          <Link to="/contact">Liên Hệ</Link>
          <Link to="/s">Tuyển dụng</Link>
        </article>
        <article className="footer__info">
          <h4>Thông Tin</h4>
          <p>
            Công ty TNHH Trung Tâm Thể Dục Thể Hình & Yoga California Số 126
            Hùng Vương, P.12, Q.5, Tp. Hồ Chí Minh, Việt Nam Mã số thuế:
            0305060028
          </p>
          <p>
            Khi phát sinh thanh toán, vui lòng chỉ thanh toán cho công ty
            California Fitness & Yoga, không giao dịch hay chuyển khoản vào tài
            khoản không phải của Công ty California.
          </p>
        </article>
      </div>
      <div className="footer__copyright">
        <small>© California Fitness & Yoga Center 2021</small>
      </div>
    </footer>
  );
};

export default Footer;
