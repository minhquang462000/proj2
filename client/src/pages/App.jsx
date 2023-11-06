import { useEffect, useState } from "react";
import HeaderPage from "../component/HeaderPage";
import HeaderNavbar from "../component/HeaderNavBar";
import Footer from "../component/Footer";
import CardHot from "../component/CardHot";
import TrendingList from "../component/TrendingList";
import axios from "axios";
import Loading from "../component/Loading";
import { useSelector } from "react-redux";
function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const darkMode = useSelector((state) => state.setting.darkMode);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const res = await axios.get("http://localhost:3000/products");
      setProductList(res.data);
      setIsLoading(false);
    };
    getProduct();
  }, []);
  return (
    <>
      <div
        className={`w-screen ${
          darkMode ? "bg-gray-900" : "bg-violet-500"
        } h-full  font-semibold text-white `}
      >
        <HeaderPage />
        <HeaderNavbar />
        <div className="w-[1200px] m-auto ">
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              {" "}
              <CardHot />
              <TrendingList />
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
