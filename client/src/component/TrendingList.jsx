import { AiFillEye, AiFillLike } from "react-icons/ai";
import { MdStickyNote2 } from "react-icons/md";
import { FaGlasses, FaRegEye } from "react-icons/fa";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddToLikeListPage } from "../store/likeList";
const TrendingList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(" http://localhost:3000/products");
      setProductList(res.data);
    };
    getProduct();
  }, []);

  const dispatch = useDispatch();

  const handleAppToLikeList = (item) => {
    dispatch(AddToLikeListPage(item));
  };

  return (
    <div className="">
      <div className="flex flex-col gap-4 mt-3 overflow-hidden ">
        <div className="text-xl">Trending</div>
        <div className="grid grid-cols-6 overflow-hidden h-[200px]">
          {productList &&
            productList.map((item) => {
              return (
                <div key={item.id} className="flex flex-row h-[200px]">
                  <div className="flex  w-[40px]  text-center gap-2 relative bg-gradient-to-t from-black to-gray-500 ">
                    <p className=" absolute w-[200px] h-[50px] -rotate-90 -translate-x-[80px] translate-y-[60px] p-4 ">
                      {item.name}
                    </p>
                    <p className=" font-bold text-2xl -rotate-90 absolute left-0 right-0 bottom-0 w-[40px] h-[40px]">
                      {item.id}
                    </p>
                  </div>

                  <div className=" cursor-pointer relative w-[140px]  h-[200px] group ">
                    {" "}
                    <img
                      className="object-cover h-full absolute "
                      src={item.img}
                      alt=""
                    />
                    <div className=" absolute bg-gray-700 p-2 items-start h-full w-full flex flex-col justify-between opacity-0 group-hover:opacity-100  duration-500  text-sm">
                      <div className="flex flex-col">
                        <div> {item.name}</div>
                        <div className="flex items-center gap-1 ">
                          <span>
                            <AiFillEye />
                          </span>
                          <p>0000</p>
                        </div>
                        <div className="flex items-center gap-1 ">
                          <span>
                            <MdStickyNote2 />
                          </span>
                          <p>Chapter</p>
                        </div>
                        <button
                          className="flex items-center gap-1 bg-slate-400 text-black rounded-lg w-max px-1 mt-2 "
                          onClick={() => handleAppToLikeList(item)}
                        >
                          <span className="flex gap-1 ">
                            <AiFillLike />
                          </span>
                          <p className=" ">Yêu thích</p>
                        </button>
                      </div>
                      <div className="flex flex-col items-center text-xs  gap-2 ">
                        <button className="flex items-center gap-1 bg-yellow-500 rounded-lg px-4  text-black  py-1">
                          <span>
                            <FaGlasses />
                          </span>
                          <p>Đọc ngay</p>
                        </button>
                        <button className="flex items-center gap-1 bg-gray-800 rounded-lg px-4 py-1">
                          <span>
                            <HiMiniInformationCircle />
                          </span>
                          <p>Thông tin</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TrendingList;
