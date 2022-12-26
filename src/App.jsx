// Packages
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

// Context
import { UserContext } from "./context/User";

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
  const { currentUser } = useContext(UserContext);

  const userName = currentUser && currentUser.displayName.split(" ").join("");

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
