import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import "./gallery.css";
import GalleryImg from "../../images/gallery1.jpg";
import GalleryImg2 from "../../images/gallery2.jpg";
import GalleryImg3 from "../../images/gallery3.jpg";
import GalleryImg4 from "../../images/gallery4.jpg";
import GalleryImg5 from "../../images/gallery5.jpg";
import GalleryImg6 from "../../images/gallery6.jpg";
import GalleryImg7 from "../../images/gallery7.jpg";
import GalleryImg8 from "../../images/gallery8.jpg";
import { useEffect } from "react";

import { searchs } from "../../data";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gym Clone | Câu Lạc Bộ";
  }, []);
  // const galleryLength = 15;
  // const images = [];
  const [search, setSearch] = useState(false);
  // for (let i = 1; i < galleryLength; i++)
  //   images.push(require(`../../images/gallery${i}.jpg`));
  const [query, setQuery] = useState("");
  return (
    <>
      <Header title="Câu Lạc Bộ" image={HeaderImage}>
        Chúng tôi có hệ thống câu lạc trải dài khắp các tỉnh thành nhằm giúp
        khách hàng ở khắp mọi nơi có thể thỏa sức rèn luyện sức khỏe cũng như
        thỏa mãn đam mê thể hình.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          <div className="gallery__search">
            <div className="gallery__count">
              <h1>35+ Câu Lạc Bộ</h1>
            </div>
            <div className="gallery__position">
              <div className="gallery__input">
                <input
                  type="text"
                  placeholder="Chọn Thành Phố Của Bạn"
                  onChange={(e) => setQuery(e.target.value)}
                  onClick={() => setSearch((prev) => !prev)}
                  className="search__input"
                />
                {search ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
              </div>
              <ul
                className={`search__links ${
                  search ? "show__search" : "hide__search"
                }`}
              >
                {searchs
                  .filter((name) => name.name.toLowerCase().includes(query))
                  .map(({ name }, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setSearch((prev) => !prev)}
                      >
                        {name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          {/* {images.map((image, index) => {
            return (
              <article key={index} className="gallery__container-item">
                <img src={image} alt={`Gallery Image ${index + 1}`} />
                <span>-Câu Lạc Bộ-</span>
              </article>
            );
          })} */}
          <div className="gallery__list-item">
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Cần Thơ</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Thành phố Cần Thơ</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Hà Nội</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Thành phố Hà Nội</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg2} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Đà Nẵng</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Thành phố Đà Nẵng</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg3} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Khánh Hòa</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại tỉnh Khánh Hòa</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg4} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Bình Dương</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Tỉnh Bình Dương</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg5} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Đồng Nai</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Tỉnh Đồng Nai</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg6} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Bà Rịa - Vũng Tàu</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Tỉnh Bà Rịa - Vũng Tàu</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg7} alt="Gallery Image" />
              </div>
            </div>
            <div className="gallery__item">
              <div className="left__contain">
                <div className="left__content">
                  <div className="title">
                    <h2>Hồ Chí Minh</h2>
                  </div>
                  <div className="explore-more">
                    <a href="/">Xem phòng tập tại Thành phố Hồ Chí Minh</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="right__contain">
                <img src={GalleryImg8} alt="Gallery Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="gallery__question">
          <h2>Các Câu Hỏi Thường Gặp</h2>
          <div className="gallery__question-item">
            <h4>
              Hội viên có thể tập luyện ở các phòng tập khác nơi mình đăng ký
              lúc đầu hay không?
            </h4>
            <p>
              Cơ sở tập luyện sẽ tùy theo hạng thẻ mà hội viên đăng ký lúc đầu.
              California Fitness & Yoga luôn cố gắng tạo điều kiện để mang lại
              sự tiện lợi và dịch vụ tốt nhất cho hội viên. Vì vậy, hội viên từ
              hạng thẻ Mars trở lên đều có thể tham gia hầu hết các phòng tập
              trong hệ thống mà không có bất kỳ trở ngại nào.
            </p>
          </div>
          <div className="gallery__question-item">
            <h4>Trang thiết bị ở các cơ sở có giống nhau hay không?</h4>
            <p>
              Về cơ bản, hệ thống phòng tập California Fitness and Yoga đều được
              trang bị đầy đủ các thiết bị, dụng cụ với những khu vực tập luyện
              riêng biệt. Tuy nhiên, ở mỗi trung tâm sẽ có những thiết kế riêng
              đáp ứng những nhu cầu khác nhau của khách hàng nhằm tạo ra những
              trải nghiệm mới lạ và không trùng lặp.
            </p>
          </div>
          <div className="gallery__question-item">
            <h4>
              Các dịch vụ tiện ích mở rộng tại phòng tập bao gồm những gì?
            </h4>
            <p>
              Cơ sở tập luyện sẽ tùy theo hạng thẻ mà hội viên đăng ký lúc đầu.
              California Fitness & Yoga luôn cố gắng tạo điều kiện để mang lại
              sự tiện lợi và dịch vụ tốt nhất cho hội viên. Vì vậy, hội viên từ
              hạng thẻ Mars trở lên đều có thể tham gia hầu hết các phòng tập
              trong hệ thống mà không có bất kỳ trở ngại nào.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
