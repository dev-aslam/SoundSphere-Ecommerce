import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../../../api/services/User/authUser";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../../../../features/authUserSlice";

const OAuth = () => {
  const dispatach = useDispatch();

  const responseMessage = async (response) => {
    const token = response.credential;
    try {
      const backendResponse = await googleLogin({ token });
      dispatach(setUserCredentials({ ...backendResponse }));
    } catch (error) {
      console.log("Google login error: ", error.message);
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};
export default OAuth;
