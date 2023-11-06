import HeaderPage from "../component/HeaderPage";
import HeaderNavbar from "../component/HeaderNavBar";
import Footer from "../component/Footer";
import Loading from "../component/Loading";
import { useSelector } from "react-redux";
import LikeListCard from "../component/LikeListCard";

const LikePage = () => {
  const darkMode = useSelector((state) => state.setting.darkMode);
  const LikeList = useSelector((state) => state.likeList.likeList);
  return (
    <div
      className={`w-screen ${
        darkMode ? "bg-gray-900" : "bg-white "
      } h-full  font-semibold
      ${darkMode ? "text-white" : "text-black "}`}
    >
      <HeaderPage />
      <HeaderNavbar />
      <div className="w-[1200px] m-auto ">
        <div className="my-4 grid grid-cols-2 gap-2 w-[60%] overflow-hidden">
          {" "}
          {LikeList.map((item) => {
            return (
              <div key={item.id}>
                <LikeListCard
                  img={item.img}
                  name={item.name}
                  category={item.category}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[40%]"></div>
        <Footer />
      </div>
    </div>
  );
};

export default LikePage;
