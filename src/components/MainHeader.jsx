import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100 Days Of Work Out</h4>
          <h1>CHÚNG TÔI LÀ CALIFORNIA</h1>
          <p>
            Là thương hiệu về sức khỏe lớn nhất Việt Nam, California Fitness &
            Yoga được xây dựng để mang lại hạnh phúc và tạo ra những khoảnh khắc
            viên mãn cho bạn trong cuộc sống bằng việc cung cấp các dịch vụ phát
            triển sức khỏe thể chất, dinh dưỡng và tinh thần toàn diện.
          </p>
          <Link to="/plans" className="btn lg">
            Tìm Hiểu Thêm
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
