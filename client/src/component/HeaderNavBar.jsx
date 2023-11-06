import { HiSearch, HiUserCircle } from "react-icons/hi";
import { BiSolidChevronDown } from "react-icons/bi";
import Category from "./Category";
import logo from "../image/th.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderNavbar = () => {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };
  const darkMode = useSelector((state) => state.setting.darkMode);
  const handleGotoLikePage = () => {
    navigate("/yeuthich");
  };

  return (
    <nav className={`w-screen ${darkMode ? null : "bg-violet-500"}`}>
      <div className="flex m-auto justify-between py-2 w-[1200px]">
        <div className=" flex gap-8 items-center">
          <div className="w-32 cursor-pointer" onClick={handleClickLogo}>
            <img className="rounded-2xl" src={logo} alt="" />
          </div>
          <div className="cursor-pointer hover:text-yellow-500">Hoàn thành</div>
          <div className="relative group h-full ">
            <span className=" h-full flex flex-grow items-center cursor-pointer hover:text-yellow-500">
              <p>Thể loại</p>
              <BiSolidChevronDown />
            </span>
            <Category />
          </div>

          <div
            className="cursor-pointer hover:text-yellow-500"
            onClick={handleGotoLikePage}
          >
            {" "}
            Yêu thích
          </div>
          <div className="cursor-pointer hover:text-yellow-500">
            {" "}
            Truyện mới
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-5 cursor-pointer bg-white py-[3px] px-2 rounded-md text-black">
            <label
              className="cursor-pointer bg-violet-300 py-[1px] text-[12px] px-2 rounded-md text-violet-700 hover:bg-violet-700 hover:text-white"
              htmlFor=""
            >
              LỌC
            </label>
            <input
              className="outline-none"
              type="text"
              placeholder="Tìm kiếm truyện..."
            />
            <HiSearch />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <HiUserCircle />
            <p>Member</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HeaderNavbar;
