/* eslint-disable react/prop-types */
import MyContext from "./MyContext";

function MyState({ children }) {
  const user = JSON.parse(localStorage.getItem("millennium"));

  // Get All Photo frames
  // const
  return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
}

export default MyState;
