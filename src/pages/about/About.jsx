/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "../../components/Header";
import HeaderImage from "../../images/AboutUs_1900x800px.jpg";
import VisionImage from "../../images/social1.png";
import MissionImage from "../../images/social2.png";
import FamilyLogo from "../../images/family-logo1.png";
import FamilyLogo2 from "../../images/family-logo2.png";
import FamilyLogo3 from "../../images/family-logo3.png";
import FamilyLogo4 from "../../images/family-logo4.png";
import FamilyLogo5 from "../../images/family-logo5.png";
import { useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    document.title = "Gym Clone | Về Chúng Tôi";
  }, []);
  return (
    <>
      <Header title="Về Chúng Tôi" image={HeaderImage}>
        "TẠI CALIFORNIA FITNESS & YOGA, SỨ MỆNH CỦA CHÚNG TÔI LÀ MANG LẠI SỨC
        KHOẺ, NIỀM HẠNH PHÚC VÀ HY VỌNG ĐẾN 100 TRIỆU NGƯỜI DÂN VIỆT NAM"
        <p>Dane Fort, CEO Fitness Lifestyle Group</p>
      </Header>
      <section className="about_story">
        <div className="container about__story-container">
          <div className="about__section-image"></div>
          <div className="about__section-content">
            <div className="about__section-title">
              <div className="big__text">CALIFORNIA - NƠI BẠN THUỘC VỀ</div>
              <div className="small__text">
                Hãy là một phần trong hành trình kiến tạo nên một Việt Nam khoẻ
                mạnh. Gia nhập vào một trong những môi trường làm việc hấp dẫn
                nhất trong lĩnh vực phát triển sức khoẻ toàn diện ngay hôm nay!
              </div>
            </div>
            <div className="about__section-number-contain">
              <div className="about__section-left">
                <div className="num-big-text">37+</div>
                <div className="num-small-text">CÂU LẠC BỘ</div>
              </div>
              <div className="about__section-midle">
                <div className="num-big-text">500k</div>
                <div className="num-small-text">HỘI VIÊN</div>
              </div>
              <div className="about__section-right">
                <div className="num-big-text">4000+</div>
                <div className="num-small-text">NHÂN VIÊN</div>
              </div>
            </div>
            <div className="about__secion-family-brand-contain">
              <div className="family-brand-title">
                CÁC THƯƠNG HIỆU CỦA CHÚNG TÔI
              </div>
              <div className="logo__contain">
                <a href="">
                  <img src={FamilyLogo} alt="" />
                </a>
                <a href="">
                  <img src={FamilyLogo2} alt="" />
                </a>
                <a href="">
                  <img src={FamilyLogo3} alt="" />
                </a>
                <a href="">
                  <img src={FamilyLogo4} alt="" />
                </a>
                <a href="">
                  <img src={FamilyLogo5} alt="" />
                </a>
              </div>
              <a href="/plans" className="about__btn">
                <button className="btn lg">
                  Bắt đầu sự nghiệp tại CALIFORNIA
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="corporate-social-contain">
        <section className="about__vision">
          <div className="container about__vision-container">
            <div className="about__section-content">
              <h1>CHƯƠNG TRÌNH HỢP TÁC ĐỔI MỚI</h1>
              <p>
                Chúng tôi hợp tác cùng nhiều công ty, học viện để nâng cao nhận
                thức của cộng đồng trong việc xây dựng lối sống lành mạnh và
                thói quen rèn luyện trong cuộc sống.
              </p>
              <p>
                Tinifit là một trong những chương trình hợp tác tâm huyết nhất
                của chúng tôi trong thời gian vừa qua. Đây là mô hình độc quyền
                kết hợp việc tập luyện với các hoạt động vui chơi dành cho trẻ
                em được phát triển bởi TiniWorld và California. Tinifit sẽ đi
                vào hoạt động tại hơn 20 cơ sở toàn quốc.
              </p>
            </div>
            <div className="about__section-image hover-img">
              <img src={VisionImage} alt="Our Vision Image" />
            </div>
          </div>
        </section>
        <section className="about__mission">
          <div className="container about__mission-container">
            <div className="about__section-image hover-img">
              <img src={MissionImage} alt="Our Mission Image" />
            </div>
            <div className="about__section-content">
              <h1>HOẠT ĐỘNG XÃ HỘI</h1>
              <p>
                Tại California, chúng tôi cam kết mang lại những giá trị tốt đẹp
                cho cộng đồng, cải thiện chất lượng cuộc sống của mọi người
                thông qua việc tập luyện và tiếp cận các dịch vụ chăm sóc sức
                khoẻ.
              </p>
              <p>
                Chính vì vậy, chúng tôi đã hợp tác với Vinacapital Foundation
                trong chương trình Quỹ Nhịp tim Việt Nam nhằm hỗ trợ phẫu thuật
                tim bẩm sinh cho 10,000 trẻ em nghèo dưới 18 tuổi - mong muốn
                đem lại nhịp đập khoẻ mạnh cho thế hệ tương lai.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
