import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_7.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
import { useEffect } from "react";
import "./trainers.css";

const Trainers = () => {
  useEffect(() => {
    document.title = "Gym Clone | Huấn Luyện Viên";
  }, []);
  return (
    <>
      <Header
        title="CHƯƠNG TRÌNH HUẤN LUYỆN VIÊN CÁ NHÂN TẠI CALIFORNIA FITNESS & YOGA"
        image={HeaderImage}
      ></Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
