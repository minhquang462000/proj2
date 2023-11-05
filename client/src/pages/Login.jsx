import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../store/Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("nmquang@gmail.com");
  const [password, setPassword] = useState("123456");

  const [isShowPass, setIsShowPass] = useState(false);

  //   useEffect(() => {}, [email, password]);

  const dispatch = useDispatch();
  const navigate =useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const handleChangeShowPass = (e) => {
    const checked = e.target.checked;
    setIsShowPass(checked);
  };
  const handleLogin = () => {
    const getUserServer = async () => {
      const res = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      if (res.data.length === 0) {
        alert("Sai thông tin tài khoản");
      } else {
        dispatch(setUserLogin(res.data[0]));
        localStorage.setItem("user", JSON.stringify(res.data[0]))
        navigate("/")
      }
    };
    getUserServer();
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 border p-10 rounded-xl shadow-2xl w-96 items-center">
        <div className=" text-center text-4xl">Logo</div>
        <div className="flex flex-col gap-1 w-full">
          <label className="font-bold" htmlFor="">
            Email:
          </label>
          <input
            className="outline-none border border-black px-2 py-1 rounded-md"
            onChange={handleChange}
            name="email"
            type="text"
            value={email}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="font-bold" htmlFor="">
            Password:
          </label>
          <input
            className="outline-none border border-black px-2 py-1 rounded-md"
            onChange={handleChange}
            name="password"
            type={isShowPass ? "text" : "password"}
            value={password}
          />
        </div>
        <div className="flex gap-1 w-full">
          <input
            type="checkbox"
            id="showpass"
            onChange={handleChangeShowPass}
          />
          <label className="font-bold" htmlFor="showpass">
            Show password
          </label>
        </div>
        <button
          className="bg-blue-500 font-bold  text-white w-max px-8 py-2 rounded-xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
