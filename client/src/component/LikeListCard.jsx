import { PiNoteFill } from "react-icons/pi";
import { BiSolidDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItem } from "../store/likeList";

const LikeListCard = (props) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(DeleteItem(props.id));
  };
  const darkMode = useSelector((state) => state.setting.darkMode);
  return (
    <div>
      <div
        className={`flex gap-[10px] w-[355px] p-3 rounded-lg ${
          darkMode ? "bg-slate-600" : "bg-none"
        }`}
      >
        <div className="w-[150px] h-[200px] cursor-pointer">
          <img className="w-full h-full object-cover" src={props.img} alt="" />
        </div>
        <div className="flex flex-col justify-between w-[240px]">
          <div className="flex flex-col gap-2">
            <div className="text-xl cursor-pointer">{props.name}</div>
            <div className="font-thin text-sm ">{props.category}</div>
            <div className="font-thin text-sm ">{props.complete}</div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              onClick={handleDeleteItem}
              className="flex hover:text-red-600 text-black items-center bg-slate-200 gap-1 w-max px-2 rounded-lg cursor-pointer text-sm"
            >
              <BiSolidDislike />
              <p className="border-l-[1px] border-black pl-1">Dislike</p>
            </div>
            <div className="text-violet-500 font-mono cursor-pointer ">
              <div className="flex items-center gap-1 border-b  border-dashed border-violet-300 ">
                <PiNoteFill />
                <span>Chapter</span>
              </div>
              <div className="flex items-center gap-1 border-b  border-dashed border-violet-300">
                <PiNoteFill />
                <span>Chapter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeListCard;
