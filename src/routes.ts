import Login from "./views/Login";
import Register from "./views/registration/Register";
import OTPVerification from "./views/registration/OtpVerification";
import Ekyc from "./views/registration/Ekyc";
import ProofIdentity from "./views/registration/ProofIdentity";

export default [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/otp-verification",
    element: OTPVerification,
  },
  {
    path: "/ekyc-verification",
    element: Ekyc,
  },
  {
    path: "/proof-of-identity",
    element: ProofIdentity,
  },
];
