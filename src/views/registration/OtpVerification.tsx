import UserIcon from "../../assets/loginpage_usernameicon.png";
import Input from "../../components/Input";
import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

interface Progress {
  route: string;
  name: string;
  data: any;
}

const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(59);
  const [data, setData] = useState<any>();
  const [otpId, setOTPId] = useState<any>();

  useEffect(() => {
    let timer: any;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeLeft]);

  useEffect(() => {
    const progress: any = localStorage.getItem("__registration_progress");
    try {
      const progressData: Progress = JSON.parse(progress);
      if (progressData.name !== "otp") {
        navigate(progressData.route);
        return;
      }

      setData(progressData.data);
      setOTPId(progressData.data.otp_id);
    } catch (err) {
      navigate("/register");
    }
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

  const onOTPResend = async (e: any) => {
    if (timeLeft > 0) {
      return;
    }

    if (!data) {
      return;
    }

    const otpResponse = await HttpClient(
      "auth/register/player/otp/phone/resend",
      {
        method: "POST",
        body: JSON.stringify({ email: data.email, number: data.phone_number }),
      }
    );

    if (otpResponse.status !== 201) {
      setSubmitting(false);
      setError("Something wen't wrong, please try again.");
      return;
    }

    const otp_id = await otpResponse.text();
    setOTPId(otp_id);
    setTimeLeft(59);
    setError("One-time password code has been sent.");
  };

  const onSubmit = async (e: any) => {
    setSubmitting(true);

    if (code.length < 1) {
      setError("OTP Code is required.");
      setSubmitting(false);
      return;
    }

    const verify = await HttpClient("auth/register/player/otp/phone/verify", {
      method: "POST",
      body: JSON.stringify({ id: otpId, otp: code }),
    });

    if (verify.status !== 201) {
      const result = await verify.json();
      setError(
        Array.isArray(result.message)
          ? result.message.join("<br/>")
          : result.message
      );
      setSubmitting(false);
      return;
    }

    localStorage.setItem(
      "__registration_progress",
      JSON.stringify({ route: "/ekyc-verification", name: "ekyc", data })
    );

    setTimeout(() => {
      navigate("/ekyc-verification");
    }, 2000);
  };

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
          <span
            onClick={onOTPResend}
            className={`text-[#7b2121] ${
              timeLeft === 0 ? "cursor-pointer" : ""
            }`}
          >
            RESEND{timeLeft > 0 ? ` [in ${timeLeft} sec]` : ""}
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
            className={`w-56 rounded-lg mt-12 mb-16 bg-[#7b2121] py-[0.3em] px-[0.5em] text-[1rem] font-[600] ${
              isSubmitting ? "text-[#aeaeae]" : "text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Next"}
          </button>
        </div>
        <div className="flex items-center justify-around w-96 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
