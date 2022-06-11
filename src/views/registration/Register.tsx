import Logo from "../../assets/logo.png";
import UserIcon from "../../assets/loginpage_usernameicon.png";
import LockIcon from "../../assets/loginpage_lockicon.png";
import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

interface Progress {
  route: string;
  name: string;
  data: any;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  /** Set states */
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    username: "",
    complete_name: "",
    phone_number: "",
    email: "",
    password: "",
    conf_password: "",
    eula: false,
    aboveAge: false,
  });
  const [isRegistering, setRegistering] = useState(false);

  useEffect(() => {
    const progress = localStorage.getItem("__registration_progress");
    const progressData: Progress = JSON.parse(
      progress || '{ "name": "register", "route": "/register" }'
    );

    if (progressData.name !== "register") {
      navigate(progressData.route);
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

  const onRegisterSubmit = async (e: any) => {
    if (fields.complete_name.length < 1) {
      setError("Complete Name is required.");
      return;
    }

    if (fields.phone_number.length < 1) {
      setError("Phone Number is required.");
      return;
    }

    if (fields.email.length < 1) {
      setError("Email is required.");
      return;
    }

    if (fields.password.length < 1) {
      setError("Password is required.");
      return;
    }

    if (fields.conf_password.length < 1) {
      setError("Confirm Password is required.");
      return;
    }

    if (fields.password !== fields.conf_password) {
      setError("Password doesn't match the confirm password.");
      return;
    }

    if (!fields.eula) {
      setError("You must agree the terms and conditions.");
      return;
    }

    if (!fields.aboveAge) {
      setError("You must 21 years old above to use this platform.");
      return;
    }

    setRegistering(true);

    const otpResponse = await HttpClient("auth/register/player/otp/phone", {
      method: "POST",
      body: JSON.stringify({
        number: fields.phone_number,
        email: fields.email,
      }),
    });

    if (otpResponse.status !== 201) {
      setRegistering(false);
      setError("Something wen't wrong, please try again.");
      return;
    }

    const otp_id = await otpResponse.text();

    const data = {
      otp_id,
      name: fields.complete_name,
      username: fields.username,
      email: fields.email,
      phone_number: fields.phone_number,
      password: fields.password,
    };

    const response = await HttpClient("auth/register/player", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (
      response.status === 400 &&
      result.message !== "Phone number does not verified."
    ) {
      setError(
        Array.isArray(result.message)
          ? result.message.join("<br/>")
          : result.message
      );

      setRegistering(false);

      return;
    }

    localStorage.setItem(
      "__registration_progress",
      JSON.stringify({ route: "/otp-verification", name: "otp", data })
    );

    setTimeout(() => {
      navigate("/otp-verification");
    }, 2000);
  };

  return (
    <div className="flex justify-center relative">
      <Helmet>
        <title>Register - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper w-96">
        <img className="w-80 mx-auto mb-4" src={Logo} />
        <h2 className="text-[#fff] text-[1rem] font-[400] mb-6">Sign Up</h2>
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}
        <Input
          containerClass="mb-2"
          type="text"
          imageClass="w-4"
          placeholder="User name (No Spaces)"
          onChange={(e: any) =>
            setFields({ ...fields, username: e.target.value })
          }
          value={fields.username}
          icon={UserIcon}
        />
        <Input
          containerClass="mb-2"
          type="text"
          imageClass="w-4"
          placeholder="Complete Name"
          onChange={(e: any) =>
            setFields({ ...fields, complete_name: e.target.value })
          }
          value={fields.complete_name}
          icon={UserIcon}
        />
        <Input
          containerClass="mb-2"
          type="email"
          imageClass="w-4"
          placeholder="Email"
          onChange={(e: any) => setFields({ ...fields, email: e.target.value })}
          value={fields.email}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="number"
          imageClass="w-4"
          placeholder="Phone Number"
          onChange={(e: any) =>
            setFields({ ...fields, phone_number: e.target.value })
          }
          value={fields.phone_number}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="password"
          imageClass="w-4"
          placeholder="Password"
          onChange={(e: any) =>
            setFields({ ...fields, password: e.target.value })
          }
          value={fields.password}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="password"
          imageClass="w-4"
          placeholder="Confirm Password"
          onChange={(e: any) =>
            setFields({ ...fields, conf_password: e.target.value })
          }
          value={fields.conf_password}
          icon={LockIcon}
        />
        <div className="flex flex-col justify-start items-start">
          <Input
            containerClass="text-[#aeaeae] text-[0.9rem] justify-left"
            type="checkbox"
            inputClass="w-4 mr-2 bg-zinc-900 text-gray-500 pr-0"
            label="EULA agree to the terms and conditions"
            onChange={(e: any) =>
              setFields({ ...fields, eula: e.target.checked })
            }
            checked={fields.eula}
          />
          <Input
            containerClass="text-[#aeaeae] text-[0.9rem] justify-left"
            type="checkbox"
            inputClass="w-4 mr-2 bg-zinc-900 text-gray-500 pr-0"
            label="21 years old above"
            onChange={(e: any) =>
              setFields({ ...fields, aboveAge: e.target.checked })
            }
            checked={fields.aboveAge}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-3 mb-6">
          <button
            disabled={isRegistering}
            onClick={onRegisterSubmit}
            className={`w-56 rounded-lg mt-12 mb-16 bg-[#7b2121] py-[0.3em] px-[0.5em] text-[1rem] font-[600] ${
              isRegistering ? "text-[#aeaeae]" : "text-white"
            }`}
          >
            {isRegistering ? "Registering..." : "Next"}
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

export default Register;
