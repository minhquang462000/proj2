import logo from "../image/th.jpg"



const Footer = () => {
  return <div className=" flex m-auto flex-col py-6 gap-4  items-center mt-5 border-t-[1px] border-gray-800">
    <div className="w-32 ">
          <img
            className="rounded-2xl"
            src={logo}
            alt=""
          />
        </div>
    <div className="flex gap-14">
        <span>Terms of service</span>
        <span>DMCA</span>
        <span> Contact</span>
        <span>Sitemap</span>
    </div>
    <div className="text-sm text-gray-400">Thichdoctruyen does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</div>
    <div className="text-sm text-gray-400">© Thichdoctruyen</div>
   <button className="bg-violet-700 py-1 px-2 rounded-2xl">Lấy mã</button>
  </div>;
};

export default Footer;

