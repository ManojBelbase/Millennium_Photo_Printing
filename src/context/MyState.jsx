/* eslint-disable react/prop-types */
import MyContext from "./myContext";

function MyState({ children }) {
  const user = JSON.parse(localStorage.getItem("millennium"));

  // Get All Photo frames
  // const
  return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
}

export default MyState;
