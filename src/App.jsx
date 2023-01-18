import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// Packages
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userSelector } from "./redux/User/User-Selector";
import { userAction } from "./redux/User/User-Action";
import { isSignedIn } from "./utils/Authentication";

// Page
import {
  Home,
  Authentication,
  FAQ,
  AddingGoals,
  Profile,
  Dashboard,
  Goals,
} from "./pages";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const userName = currentUser && currentUser.displayName.split(" ").join("");

  useEffect(() => {
    isSignedIn((user) => {
      dispatch(userAction(user));
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route
        path="/authentication"
        element={
          currentUser == null ? (
            <Authentication />
          ) : (
            <Navigate to={`/${userName}/goals`} />
          )
        }></Route>

      {/* When the user is signed in */}
      <Route path={`${userName}/add-goals`} element={<AddingGoals />}></Route>
      <Route path={`${userName}/profile`} element={<Profile />}></Route>
      <Route path={`${userName}/dashboard`} element={<Dashboard />}></Route>
      <Route path={`${userName}/goals`} element={<Goals />}></Route>
    </Routes>
  );
};

export default App;
