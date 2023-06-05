import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg.jpg";
import { useEffect } from "react";

import "./contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Gym Clone | Liên Hệ Với Chúng Tôi";
  }, []);
  return (
    <>
      <Header image={HeaderImage}></Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper-left">
            <div className="contact__left-title">
              <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
            </div>
          </div>
          <div className="contact__wrapper-right">
            <div className="contact__right-address">
              <div className="title">
                <h2>ĐỊA ĐIỂM | LOCATION</h2>
              </div>
              <div className="content">
                TNL Plaza - Tầng 3, 346 Bến Vân Đồn, Phường 11, Quận 4, TP Hồ
                Chí Minh
              </div>
            </div>
            <div className="contact__right-open-time">
              <div className="title">
                <h2>GIỜ HOẠT ĐỘNG | OPENING HOURS</h2>
              </div>
              <div className="time-contain">
                <div className="oprerating-hours">
                  <div className="date">Thứ 2 đến thứ 6</div>
                  <div className="time">9am to 6pm</div>
                </div>
                <div className="oprerating-hours">
                  <div className="date">Thứ 7, CN</div>
                  <div className="time">9am to 1pm</div>
                </div>
              </div>
            </div>
            <div className="contact__right-contact">
              <div className="title">
                <h2>LIÊN HỆ | CONTACT</h2>
              </div>
              <div className="content">
                <a
                  href="tel:+8428 7107 7889"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tels: (+8428) 7107 7889
                </a>
                <a
                  href="tel:1800 6995"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Hotline: 1800 6995
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
