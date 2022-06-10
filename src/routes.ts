import Login from "./views/Login";
import Register from "./views/registration/Register";
import OTPVerification from "./views/registration/OtpVerification";
import Ekyc from "./views/registration/Ekyc";
import ProofIdentity from "./views/registration/ProofIdentity";
import CashInCashOut from "./views/cash/CashInCashOut";
import CashIn from "./views/cash/CashIn";
import DirectDebit from "./views/cash/DirectDebit";
import Card from "./views/cash/Card";
import Ewallet from "./views/cash/Ewallet";
import OverTheCounter from "./views/cash/OverTheCounter";
import CashOut from "./views/cash/CashOut";
import CashOutSelected from "./views/cash/CashOutSelected";

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
  {
    path: "/cash-in-cash-out",
    element: CashInCashOut,
  },
  {
    path: "/cash-in",
    element: CashIn,
  },
  {
    path: "/direct-debit",
    element: DirectDebit,
  },
  {
    path: "/card",
    element: Card,
  },
  {
    path: "/e-wallet",
    element: Ewallet,
  },
  {
    path: "/over-the-counter",
    element: OverTheCounter,
  },
  {
    path: "/cash-out",
    element: CashOut,
  },
  {
    path: "/cash-out-selected",
    element: CashOutSelected,
  },
];
