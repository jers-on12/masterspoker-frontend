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

  /** Set States */
  const initialValues = {
    username: "",
    email: "",
    phone_number: "",
    password: "",
    conf_password: "",
    eula: false,
    aboveAge: false,
  };
  const [formFields, setFormFields] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isRegistering, setRegistering] = useState(false);

  /** User Effect */
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
    // Debugging
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isRegistering) {
      console.log(formFields);
    }
  }, [formErrors]);

  /** Actions */
  const handleChange = (e:any) => {
    const { name, value, checked } = e.target;
    setFormFields({ ...formFields, [name]: 
      name == 'eula' || name == 'aboveAge' ? checked : value 
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const frontValidate = await validate(formFields, "fields");
    
    // passed front end validation
    if(Object.keys(frontValidate).length === 0){
      // API Calls
      const regAPI = await initialRegister();

      if(regAPI.message.length > 1) { // 1: Only otp id is the error
        var validateErr = regAPI.message.filter((e:string) => e !== 'otp_id should not be empty');
        const backValidate = await validate({...validateErr}, "apiFields");
        if((Object.keys(backValidate).length) >= 1) {
          return; // return error
        }
      }
      else { // proceed to OTP Verification
        const otpHash = await requestOTPHash();
        console.log(otpHash);
        if(otpHash != 'error') { 
          setRegistering(true);
          const formFieldsOTP:object = Object.assign({...formFields}, {otp_id: otpHash});
          // Set route to OTP Verify Form
          localStorage.setItem(
            "__registration_progress",
            JSON.stringify({ route: "/otp-verification", name: "otp", formFieldsOTP })
          );
          navigate("/otp-verification");
        }
      }
    }
  };

  const validate = (values:any, type: string) => {
    let errors:any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // email format
    switch(type) {
      case "fields": // front end validation
        if (!values.username) {
          errors.username = "User Name is required.";
        }
        if (!values.email) {
          errors.email = "Email is required.";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.phone_number) {
          errors.phone_number = "Phone Number is required.";
        }
        if (!values.password) {
          errors.password = "Password is required.";
        }
        if (!values.conf_password) {
          errors.conf_password = "Confirm Password is required.";
        }
        if (values.password !== values.conf_password) {
          errors.conf_password = "Password doesn't match the confirm password.";
        }
        if (!values.eula) {
          errors.eula = "You must agree the terms and conditions.";
        }
        if (!values.aboveAge) {
          errors.aboveAge = "You must 21 years old above to use this platform.";
        }
        break;
      case "apiFields": // back end validation
        errors = {...values}; // assign the errors 
        break;
      default:
        break;
    }
    console.log(errors);
    setFormErrors(errors);
    return errors;
  };

  /** API Calls
   * Change to redux after presentation
  */

  const initialRegister = async () => {
    /** Check backend validation
     * OTP Error will receive since not set
    */
    const frmDtls = Object.assign({...formFields}, {name: formFields.username, otp_id: null});

    const validateDtls = await HttpClient("auth/register/player", {
      method: "POST",
      body: JSON.stringify(frmDtls),
    });

    const validateRes = await validateDtls.json();
    console.log(frmDtls);
    console.log(validateRes);

    return validateRes;
  }

  const requestOTPHash = async() => {
    const otpRequest = await HttpClient("auth/register/player/otp/phone", {
      method: "POST",
      body: JSON.stringify({
        number: formFields.phone_number,
        email: formFields.email,
      }),
    }); 

    // sure resp is success since backend validation succeed    
    if(otpRequest.status != 201) { // returns json
      const otpResponse:any = await otpRequest.json();
      const otpValidate = await validate({otp : otpResponse.message}, "apiFields");
      if(Object.keys(otpValidate).length >= 1) {
        return 'error';
      }
    }
    else {
      return otpRequest.text();
    }
  }

  return (
    <div className="flex justify-center relative">
      <Helmet>
        <title>Register - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper w-96">
        <img className="w-80 mx-auto mb-4" src={Logo} />
        <h2 className="text-[#fff] text-[1rem] font-[400] mb-6">Sign Up</h2>
          {Object.keys(formErrors).length >= 1 && !isRegistering && (
            <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
              {
                // stucked: fix this warning issue later
                Object.keys(formErrors).map((key) => <li key={key}>{formErrors[key]}</li> )
              }
            </div>
          )}
        <form onSubmit={handleSubmit}>
        <Input
          containerClass="mb-2"
          type="text"
          name="username"
          imageClass="w-4"
          placeholder="User Name (No Spaces)"
          onChange={handleChange}
          value={formFields.username}
          icon={UserIcon}
        />
        <Input
          containerClass="mb-2"
          type="email"
          name="email"
          imageClass="w-4"
          placeholder="Email"
          onChange={handleChange}
          value={formFields.email}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="number"
          name="phone_number"
          imageClass="w-4"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formFields.phone_number}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="password"
          name="password"
          imageClass="w-4"
          placeholder="Password"
          onChange={handleChange}
          value={formFields.password}
          icon={LockIcon}
        />
        <Input
          containerClass="mb-2"
          type="password"
          name="conf_password"
          imageClass="w-4"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formFields.conf_password}
          icon={LockIcon}
        />
        <div className="flex flex-col justify-start items-start">
          <Input
            containerClass="text-[#aeaeae] text-[0.9rem] justify-left"
            type="checkbox"
            name="eula"
            inputClass="w-4 mr-2 bg-zinc-900 text-gray-500 pr-0"
            label="I agree to the terms and conditions"
            onChange={handleChange}
            checked={formFields.eula}
          />
          <Input
            containerClass="text-[#aeaeae] text-[0.9rem] justify-left"
            type="checkbox"
            name="aboveAge"
            inputClass="w-4 mr-2 bg-zinc-900 text-gray-500 pr-0"
            label="I am 21 years old and above"
            onChange={handleChange}
            checked={formFields.aboveAge}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-3 mb-6">
          <button
            disabled={isRegistering}
            type="submit"
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
      </form>
      </div>
    </div>
  );
};

export default Register;
