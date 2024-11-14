import { Link, useNavigate } from "react-router-dom";

const PhotoFrameCard = ({ frame }) => {
  return (
    <div>
      <Link
        to={`${frame.id}`} // Make sure to use `frame.id` here
        className="rounded-sm"
      >
        {/* Image Section with Dynamic Border Color */}
        <div
          className={`relative md:h-96 md:w-[271.53px] border shadow-inner rounded-sm overflow-hidden`}
        >
          {/* Inner Container for White Shadow Effect */}
          <div className="h-full w-full bg-secondary p-[2px] rounded-sm shadow-lg">
            <div className="h-full w-full rounded-sm overflow-hidden">
              <img
                src={frame.image}
                alt={frame.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhotoFrameCard;
