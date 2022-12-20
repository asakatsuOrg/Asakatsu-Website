import { signInWithGoogle } from "../utils/Authentication";
import { storingUserData } from "../utils/Firestore";

import Button from "../components/Button";

import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
  const SignIn = async () => {
    const { user } = await signInWithGoogle();
    storingUserData(user);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Button buttonType={"google"} onClick={SignIn}>
        <FcGoogle /> Sign In with Google
      </Button>
    </div>
  );
};

export default Authentication;
