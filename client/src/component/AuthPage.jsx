import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../store/Auth";
const AuthPage = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const userInLocal = localStorage.getItem("user");
//   if (userInLocal) {
//     const userLogin = JSON.parse(userInLocal);
//     dispatch(setUserLogin(userLogin));
//     return
//   }

  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthPage;
