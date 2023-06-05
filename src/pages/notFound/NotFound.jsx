import { Link } from "react-router-dom";

import "./notfound.css";
import { useEffect } from "react";
const NotFound = () => {
  useEffect(() => {
    document.title = "Gym Clone | Trang Hiện Không Tồn Tại";
  }, []);
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
