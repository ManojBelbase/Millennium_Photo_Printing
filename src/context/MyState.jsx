/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("millennium"));

  // Get All Photo frames
  const [getAllPhotoFrames, setGetAllPhotoFrames] = useState([]);

  const getAllPhotoFramesFunction = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "photoframe"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let photoFrameArray = [];
        QuerySnapshot.forEach((doc) => {
          photoFrameArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllPhotoFrames(photoFrameArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPhotoFramesFunction();
  }, []);
  return (
    <MyContext.Provider value={{ user, loading, getAllPhotoFrames }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
