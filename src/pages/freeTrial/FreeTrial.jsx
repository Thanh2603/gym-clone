import React from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import HeaderImg from "../../images/head_bg_8.jpg";
import TrialImg from "../../images/trial.jpg";
import "./freeTrial.css";
const FreeTrial = () => {
  useEffect(() => {
    document.title =
      "Gym Clone | Quyền Lợi Khi Đăng Ký Thành Viên Tại California Fitness & Yoga";
  }, []);
  return (
    <div className="trial">
      <div className="trial__banner">
        <div className="banner__item">
          <Header image={HeaderImg}></Header>
          <div className="submit_trying">
            <div className="submit-trying-left">
              <div className="">
                <h1>TRẢI NGHIỆM TẬP MIỄN PHÍ</h1>
              </div>
              <div className="info">
                <span>
                  Hãy để lại thông tin và chúng tôi sẽ liên hệ bạn trong vòng
                  24h! (Khi phát sinh thanh toán, vui lòng chỉ thanh toán cho
                  công ty California Fitness & Yoga, không giao dịch hay chuyển
                  khoản vào tài khoản không phải của Công ty California)
                </span>
              </div>
            </div>
            <div className="submit-trying-right">
              <form action="" className="form">
                <input type="text" name="name" placeholder="Họ Và Tên" />
                <input type="text" name="phone" placeholder="Số Điện Thoại" />
                <input type="email" name="email" placeholder="Email" />
                <button className="btn lg">ĐĂNG KÝ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="trial__member">
        <div className="member__contain-left">
          <h2>LỢI ÍCH CỦA THÀNH VIÊN CALIFORNIA FITNESS & YOGA</h2>
          <ul>
            <li>Vị trí CLB thuận tiện khắp cả nước</li>
            <li>Chương trình tập luyện không giới hạn</li>
            <li>HLV tiêu chuẩn Quốc Tế</li>
            <li>Đa dạng gói hội viên phù hợp với nhu cầu</li>
            <li>Ưu đãi sức khoẻ từ ứng dụng đổi điểm lấy quà Livwell</li>
            <li>
              Bảo hiểm tai nạn cá nhân lên đến 01 tỷ đồng dành cho hội viên mới
            </li>
            <li>Đa dạng ưu đãi từ đối tác</li>
          </ul>
        </div>
        <div className="member__contain-right">
          <div>
            <img src={TrialImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
