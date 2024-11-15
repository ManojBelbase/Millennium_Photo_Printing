import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const useDeletePhotoFrame = () => {
  const navigate = useNavigate();
  const { loading, setLoading, getAllPhotoFramesFunction } =
    useContext(MyContext);

  const deletePhotoFrame = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Frame?"
    );
    if (!isConfirmed) {
      return;
    }
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "photoframe", id));
      toast.success("Phtot frame deleted successfully");
      navigate("/shop/photo_frames");
      getAllPhotoFramesFunction();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return { deletePhotoFrame, loading };
};

export default useDeletePhotoFrame;
