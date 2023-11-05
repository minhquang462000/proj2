import {
  FaGlasses,
  FaFileDownload,
  FaFacebookF,
  FaDiscord,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { ChangeMode } from "../store/setting";
import { useDispatch, useSelector } from "react-redux";
const HeaderPage = () => {
  const darkMode = useSelector((state) => state.setting.darkMode);
  const dispatch = useDispatch();
  const handleChangeMode = () => {
    dispatch(ChangeMode());
    console.log(ChangeMode());
  };

  return (
    <nav className="bg-violet-700 w-screen ">
      <div className="flex justify-between py-3 items-center w-[1200px] m-auto">
        <div className="flex gap-6 ">
          <div className=" flex justify-center items-center gap-2 border-r pr-6 border-gray-500">
            <FaGlasses />
            <p>Đọc ngẫu nhiên</p>
          </div>
          <div className=" flex justify-center items-center gap-2 cursor-pointer">
            <FaFileDownload />
            <p>Tải app</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className=" flex gap-3 border-r pr-6 border-gray-500">
            <span>Cộng đồng:</span>
            <span className=" flex items-center  gap-1 cursor-pointer">
              <FaFacebookF />
              <p>Facebook</p>
            </span>
            <span className="flex items-center  gap-1 cursor-pointer">
              <FaDiscord />
              <p>Discord</p>
            </span>
          </div>
          <div
            className=" flex items-center gap-1 cursor-pointer"
            onClick={handleChangeMode}
          >
            <span className=" text-sm">
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
            <span className=" text-sm">
              {darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
