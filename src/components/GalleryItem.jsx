import { gallerys } from "../data";
import "../pages/gallery/gallery.css";
const GalleryItem = () => {
  return (
    <div className="gallery__item">
      {gallerys.map(({ id, title, more, icon }) => {
        return (
          <div className="left__contain" key={id}>
            <div className="left__content">
              <div className="title">{title}</div>
              <div className="description">{more}</div>
            </div>
            <div className="explore-more">{icon}</div>
          </div>
        );
      })}
      {gallerys.map(({ image }, index) => {
        return (
          <div className="right__contain" key={index}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryItem;
