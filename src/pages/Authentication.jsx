import { signInWithGoogle } from "../utils/Authentication";

import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";

const Authentication = () => {
  const SignIn = async () => {
    const response = await signInWithGoogle();
    console.log(response);
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
