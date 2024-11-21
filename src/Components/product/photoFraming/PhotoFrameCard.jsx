import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PhotoFrameCard = ({ frame }) => {
  return (
    <div className="shadow-sm">
      <Link
        to={`${frame.id}`} // Make sure to use `frame.id` here
        className="rounded-sm"
      >
        {/* Image Section with Dynamic Border Color */}
        <div
          className={`relative md:h-96 md:w-[271.53px] border shadow-inner rounded-sm overflow-hidden`}
        >
          {/* Inner Container for White Shadow Effect */}
          <div className="h-full w-full bg-white p-[2px] rounded-sm shadow-lg">
            <div className="h-full w-full rounded-sm overflow-hidden">
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                src={frame.image}
                alt={frame.name}
                className="h-full border border-primary w-full flex items-center justify-between object-contain"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhotoFrameCard;
