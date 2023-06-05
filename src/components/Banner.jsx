import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../images/banner1.jpg";
import Banner2 from "../images/banner2.jpg";
import Banner3 from "../images/banner3.jpg";
import Banner4 from "../images/banner4.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Banner1} alt="/" />
          <div className="submit__banner">
            <div className="content">
              <h4>THỬ THÁCH THAY ĐỔI HÌNH THỂ CALIFORNIA 2023</h4>
              <span>
                <strong>CAN'T STOP US</strong>
              </span>
            </div>
            <div></div>
            <a href="/" alt="/" className="submit__btn">
              <button className="btn lg sm">Tham Gia Thử Thách Ngay</button>
            </a>
          </div>
        </div>
        <div>
          <img src={Banner2} alt="/" />
          <div className="submit__banner">
            <div className="content">
              <h4 className="">
                <span>CAN'T STOP</span>

                <span>SUMMER</span>
              </h4>
              <p style={{ color: "var(--color-text)" }}>
                Giới thiệu bạn bè và tích lũy điểm để nhận Bộ Sưu Tập mùa hè
                giới hạn
              </p>
            </div>
            <div></div>
            <a href="/" alt="/" className="submit__btn">
              <button className="btn lg sm">MỜI BẠN BÈ CÙNG THAM GIA</button>
            </a>
          </div>
        </div>
        <div>
          <img src={Banner3} alt="/" />
          <div className="submit__banner">
            <div className="content">
              <h4>
                <span style={{ fontSize: "1.5rem" }}>
                  TRIỂN KHAI CHECK-IN BẰNG APP LIVWELL
                </span>
                <span style={{ fontSize: "3.5rem" }}>TỪ NGÀY 01.06.2023</span>
              </h4>
              <p>THAY CHO THẺ VẬT LÝ TẠI CÁC CLB TRÊN TOÀN QUỐC</p>
            </div>
            <div></div>
            <a href="/" alt="/" className="submit__btn">
              <button className="btn lg sm">TẢI APP LIVWELL NGAY</button>
            </a>
          </div>
        </div>
        <div>
          <img src={Banner4} alt="/" />
          <div className="submit__banner">
            <div className="content">
              <h4>
                <span style={{ fontSize: "2rem" }}>
                  SỐNG TRONG TỪNG BƯỚC NHẢY
                </span>
                <span>CALI STEP UP</span>
              </h4>
              <p>
                Tổng giải thưởng lên đến 500.000.000đ dành cho đội chiến thắng
              </p>
            </div>
            <div></div>
            <a href="/" alt="/" className="submit__btn">
              <button className="btn lg sm">SO TÀI BƯỚC NHẢY</button>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
