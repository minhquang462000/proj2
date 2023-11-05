import Headernavbar from "../component/HeaderNavBar";
import HeaderPage from './../component/HeaderPage';
import Footer from './../component/Footer';

const CompletePage = () => {
   return  <div className="w-screen bg-gray-900 h-full  font-semibold text-white">
   <HeaderPage />
   <div className="w-[1200px] m-auto ">
     <Headernavbar />
     <div>Complete Page</div>
     <Footer />
   </div>
 </div>
};

export default CompletePage;
