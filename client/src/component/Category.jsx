const Category = () => {
  return (
    <div className="w-[600px] h-[500px] bg-gray-800 rounded-xl absolute hidden group-hover:block hover:block top-14 z-10" >
    <ul className="p-2 grid grid-cols-5 gap-3 text-center m-auto ">
      <li className="hover:bg-gray-600  w-24 h-max  p-2 px-3 rounded-xl cursor-pointer">
        Manga
      </li>
    </ul>
  </div>
   
  );
};
export default Category;
