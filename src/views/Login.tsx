import Logo from "../assets/logo.png";
import UserIcon from "../assets/loginpage_usernameicon.png";
import LockIcon from "../assets/loginpage_lockicon.png";
import LanguageIcon from "../assets/loginpage_languageicon.png";
import SupportIcon from "../assets/loginpage_supporticon.png";
import PagcorIcon from "../assets/loginpage_pagcor.png";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../helper/http";
import Helmet from "react-helmet";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isLoggingIn, setLoggingIn] = useState(false);

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

  const onLoginSubmit = async (e: any) => {
    if (fields.email.length < 1) {
      setError("Email or Phone Number is required.");
      return;
    }

    if (fields.password.length < 1) {
      setError("Password is required.");
      return;
    }

    const { remember, email, ...restOfFields } = fields;

    setLoggingIn(true);

    const response = await HttpClient("auth/login", {
      method: "POST",
      body: JSON.stringify({ ...restOfFields, username: email }),
    });

    const result = await response.json();

    if (response.status === 400) {
      setError(
        Array.isArray(result.message)
          ? result.message.join("<br/>")
          : result.message
      );

      setLoggingIn(false);
      return;
    }

    localStorage.setItem(
      "__user_meta_data",
      JSON.stringify({ ...result, remember })
    );

    setLoggingIn(false);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Login - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper mx-4">
        <img className="w-96 mb-4" src={Logo} />
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}
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
            disabled={isLoggingIn}
            onClick={onLoginSubmit}
            className={`rounded-full w-full bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] ${
              isLoggingIn ? "text-[#aeaeae]" : "text-white"
            }`}
          >
            {isLoggingIn ? "Loggin In..." : "Log In"}
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
