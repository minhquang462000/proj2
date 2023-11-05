import Image from "../image/giphy.gif";
import Category from "./Category";

const CardHot = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" bg-[url('https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-anime-co-trang.jpg')] relative  bg-cover bg-right h-80 overflow-hidden  ">
        <div className="absolute w-full h-full bg-black bg-opacity-40  backdrop-blur"></div>
        <div className="absolute w-full h-full grid grid-cols-2 px-20">
          <div className=" flex flex-col items-start justify-center gap-2">
            <div>Chapter</div>
            <div className="text-2xl">Tiên hiệp truyện </div>
            <div className="text-sm">Mô tả</div>
            <div className=" flex text-xs font-mono gap-1">
              <span className="border border-white px-2 rounded-sm">
                Shounen
              </span>
              <span className="border border-white px-2 rounded-sm">
                Truyện màu
              </span>
              <span className="border border-white px-2 rounded-sm">
                Manga
              </span>
            </div>
            <div className="flex gap-2 text-black mt-2">
              <button className="bg-yellow-500 px-2 py-1 rounded-md">
                Đọc ngay
              </button>
              <button className="bg-white px-2 py-1 rounded-md">
                Thông tin
              </button>
            </div>
          </div>
          <div className="w-[300px] h-80 mr-28 border-x-[15px] shadow-2xl ml-20">
            <img
              className="w-[400px] h-80  object-cover"
              src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-anime-co-trang.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <p>
          Thichdoctruyen là một ứng dụng trên thiết bị di động cho phép người
          dùng đọc truyện trực tuyến hoặc offline. App truyện cung cấp cho người
          dùng một kho truyện đa dạng về thể loại như Manga, manhua, manhwa,
          tiểu thuyết, ngôn tình, đam mỹ, kiếm hiệp, tu tiên, kinh dị, hành
          động, phiêu lưu … và cho phép tìm kiếm và đọc truyện một cách thuận
          tiện. App truyện cũng cho phép người dùng tải xuống các chương truyện
          để đọc offline, cập nhật các chương mới nhất và kết nối với cộng đồng
          người đọc để chia sẻ và bình luận về các bộ truyện.{" "}
        </p>
      </div>
      <div className="flex gap-3 items-center w-full bg-slate-800 p-2 rounded-lg">
        <img
          className=" w-14 h-14 object-cover rounded-full border-white border-4 "
          src={Image}
          alt=""
        />
        <div>
          <p className="text-sm">Chia sẻ App Truyện</p>
          <p className="text-sm font-thin"> Với bạn bè</p>
        </div>
      </div>
    </div>
  );
};

export default CardHot;
