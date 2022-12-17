import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./context/User";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import FAQ from "./pages/FAQ";
import AddingGoals from "./pages/AddingGoals";
import Profile from "./pages/Profile";

const App = () => {
  const { currentUser } = useContext(UserContext);

  const path = currentUser && currentUser.displayName.split(" ").join("");

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
            <Navigate to={`/${path}/profile`} />
          )
        }></Route>
      <Route
        path={`/${path}`}
        element={
          currentUser != null ? <FAQ /> : <Navigate to={"/authentication"} />
        }></Route>
      <Route path={`${path}/add`} element={<AddingGoals />}></Route>
      <Route path={`${path}/profile`} element={<Profile />}></Route>
    </Routes>
  );
};

export default App;
