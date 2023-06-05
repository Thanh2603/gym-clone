import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_6.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { useEffect } from "react";
import "./plans.css";

const Plans = () => {
  useEffect(() => {
    document.title = "Gym Clone | Hội Viên";
  }, []);
  return (
    <>
      <Header
        title="LỢI ÍCH CỦA THÀNH VIÊN CALIFORNIA 
        FITNESS & YOGA"
        image={HeaderImage}
      ></Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{price}</h1>
                <h2>VND</h2>
                <h4>Quyền Lợi Đặc Trưng</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disable" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Chọn Gói</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
