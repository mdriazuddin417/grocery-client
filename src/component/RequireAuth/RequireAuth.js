import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);

  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  let location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (error) {
    toast.error(error.message);
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <h3 className="text-red-500 text-4xl font-bold">
          Your Email is not verified
        </h3>
        <h3 className="text-[#153df0] text-1xl font-semibold">
          Please Verify your Email address
        </h3>
        <button
          className="btn btn2"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify Email
        </button>
      </div>
    );
  }

  return children;
}
export default RequireAuth;
