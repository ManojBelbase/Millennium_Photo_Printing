// import { IoCreateOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import MyContext from "../../../context/MyContext";
import IDCardData from "./IDCardData";
import IDCards from "./IDCard";

const IDCardContainer = () => {
  // const { user } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="my-2 bg-secondary border-accent border p-4 shadow-md ">
      <div className="flex items-center justify-between mb-3">
        {/* Back button */}
        <button
          className="px-2 py-[6px] bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 shadow-md hover:shadow-accent"
          onClick={() => navigate("/")}
        >
          <MdArrowBack className="text-2xl" />
          <span>Back</span>
        </button>
        {/* Create Frame Icon */}
        {/* {user && (
          <Link
            to={"/admin/create_IDCards"}
            className="flex items-center justify-center gap-2 md:gap-3 border px-2 py-[6px] shadow-md hover:shadow-accent bg-secondary  border-accent"
          >
            <IoCreateOutline className="text-2xl" />
            <span className="">Create</span>
          </Link>
        )} */}
      </div>
      <div>
        <h1 className="font-medium  text-xl mb-4">Choose Design</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {IDCardData.map((IDCard, i) => (
          <IDCards key={i} IDCard={IDCard} />
        ))}
      </div>
    </div>
  );
};

export default IDCardContainer;
