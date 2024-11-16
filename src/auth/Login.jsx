import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  // User login function
  const handleLogin = async () => {
    if (!userLogin.email || !userLogin.password) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      const user = userCredential.user;

      // Store user data in localStorage
      localStorage.setItem(
        "millennium",
        JSON.stringify({ uid: user.uid, email: user.email })
      );

      toast.success("Login Successfully");
      navigate("/"); // Redirect on successful login
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-secondary px-6 py-5 border border-white rounded-sm shadow-md w-full max-w-md sm:px-8 sm:py-6">
        {/* Top Heading */}
        <div className="mb-4 sm:mb-5">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-white">
            Login Form
          </h2>
        </div>
        {/* Input Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={userLogin.email}
            onChange={handleChangeInput}
            placeholder="Email Address"
            className="bg-white border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent text-secondary"
          />
        </div>
        {/* Input Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleChangeInput}
            placeholder="Password"
            className="bg-white border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent text-secondary"
          />
        </div>
        {/* Login Button */}
        <div className="mb-4">
          <button
            type="button"
            className="bg-primary hover:bg-primary-dark w-full text-white text-center py-2 font-normal rounded-md"
            onClick={handleLogin}
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
