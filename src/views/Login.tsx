import Logo from "../assets/logo.png";
import UserIcon from "../assets/loginpage_usernameicon.png";
import LockIcon from "../assets/loginpage_lockicon.png";
import LanguageIcon from "../assets/loginpage_languageicon.png";
import SupportIcon from "../assets/loginpage_supporticon.png";
import PagcorIcon from "../assets/loginpage_pagcor.png";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onLoginSubmit = (e: any) => {
    console.log(fields);
  };

  return (
    <div className="flex justify-center">
      <div className="login-wrapper mx-4">
        <img className="w-96 mb-4" src={Logo} />
        <Input
          type="text"
          imageClass="w-4"
          placeholder="Email or Phone Number"
          onChange={(e: any) => setFields({ ...fields, email: e.target.value })}
          value={fields.email}
          icon={UserIcon}
        />
        <Input
          containerClass="mt-3"
          type="password"
          placeholder="Password"
          onChange={(e: any) =>
            setFields({ ...fields, password: e.target.value })
          }
          value={fields.password}
          imageClass="w-3"
          icon={LockIcon}
        />
        <div className="flex justify-end mt-5 text-[#45464b] text-[0.8rem]">
          <Link to="/forgot">Forgot password?</Link>
        </div>
        <div className="flex justify-center mt-8">
          <Input
            containerClass="text-[#aeaeae] text-[0.9rem]"
            inputClass="w-4 mr-2"
            type="checkbox"
            label="Keep me logged in"
            onChange={(e: any) =>
              setFields({ ...fields, remember: e.target.checked })
            }
            checked={fields.remember}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <button
            onClick={onLoginSubmit}
            className="rounded-full w-full bg-[#7b2121] py-[0.8em] px=[1.5em] text-[1rem] font-[600] text-white"
          >
            Login
          </button>
          <Link
            className="text-[#aeaeae] text-[1rem] font-[600] mt-3"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex justify-between mt-10">
          <Link to="#">
            <img className="w-9" src={LanguageIcon} />
          </Link>
          <Link to="#">
            <img className="w-9" src={SupportIcon} />
          </Link>
        </div>
        <div className="flex justify-center mt-1">
          <a href="https://www.pagcor.ph/" target="_blank">
            <img className="w-10" src={PagcorIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
