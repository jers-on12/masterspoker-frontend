import Logo from "../../assets/logo.png";
import UserIcon from "../../assets/loginpage_usernameicon.png";
import LockIcon from "../../assets/loginpage_lockicon.png";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

interface Progress {
  route: string;
  name: string;
}

const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    // const progress: any = localStorage.getItem("__registration_progress");
    // try {
    //   const progressData: Progress = JSON.parse(progress);
    //   if (progressData.name !== "otp") {
    //     navigate(progressData.route);
    //   }
    // } catch (err) {
    //   navigate("/register");
    // }
  }, []);

  useEffect(() => {
    let timeout: any;

    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [error]);

  const onSubmit = async (e: any) => {};

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>One-Time Password - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper mx-4 max-w-sm">
        <div className="w-96 mb-12"></div>
        <h2 className="text-[#aeaeae] text-[1rem] font-[600] mb-2">
          One-time Password
        </h2>
        <div className="text-[0.9rem] font-[400] text-[#aeaeae] my-5">
          You will receive a One-Time Password (OTP) on your registered mobile
          number
        </div>
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}
        <Input
          containerClass="mb-2"
          type="text"
          imageClass="w-4"
          placeholder="XXXXXX"
          onChange={(e: any) => setCode(e.target.value)}
          value={code}
          icon={UserIcon}
        />
        <div className="text-[0.9rem] font-[400] text-[#aeaeae] my-5">
          Did not receive code?{" "}
          <span className="text-[#7b2121] cursor-pointer">
            RESEND [in 59 sec]
          </span>
        </div>
        <div className="text-[0.9rem] font-[400] text-[#aeaeae] my-5">
          If you need to change your mobile number, you may do so through{" "}
          <span className="font-[500]">More &gt; Update Profile</span>
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <button
            disabled={isSubmitting}
            onClick={onSubmit}
            className={`w-full bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] ${
              isSubmitting ? "text-[#aeaeae]" : "text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
