import Login from "./views/Login";
import Register from "./views/registration/Register";
import OTPVerification from "./views/registration/OtpVerification";

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
];
