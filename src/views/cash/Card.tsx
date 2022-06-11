import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import JcbIcon from "../../assets/jcb.png";
import VisaIcon from "../../assets/visa.png";
import MastercardIcon from "../../assets/mastercard.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

const Card: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    expiry_date: "",
    security_code: "",
    cardholder_name: "",
  });
  const [isDirectDebiting, setDirectDebiting] = useState(false);

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

  const onDebitConfirm = async (e: any) => {
    if (fields.email.length < 1) {
      setError("Email or Phone Number is required.");
      return;
    }

    if (fields.expiry_date.length < 1) {
      setError("Expiry Date is required.");
      return;
    }

    const { email, expiry_date, ...restOfFields } = fields;

    setDirectDebiting(true);

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

      setDirectDebiting(false);
      return;
    }

    setDirectDebiting(false);
    navigate("/dashboard");
  };


  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Card- {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper w-96 mx-4">
  
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}

      <div className="w-full flex flex-col">
        <h2 className="text-[#aeaeae] text-[1rem] font-[600] mb-2">Card</h2> 
           <div className="flex flex-col bg-gray-600 rounded-lg">
              <div className="flex justify-center mt-5 mb-10">
                  <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-14" src={JcbIcon} />
                        </Link>
                  </div> 
                  <div className="rounded-lg p-1 ml-3 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-14" src={VisaIcon} />
                        </Link>
                  </div> 
                  <div className="rounded-lg p-1 ml-3 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-14" src={MastercardIcon} />
                        </Link>
                  </div> 
              </div>

              <div className="flex justify-center mt-4 w-10/12 mx-auto">
                  <Input
                    type="text"
                    imageClass="w-4"
                    placeholder="Email or Phone Number"
                    onChange={(e: any) => setFields({ ...fields, email: e.target.value })}
                    value={fields.email}
                  />
              </div>

              <div className="flex flex-row justify-center mt-4 w-10/12 mx-auto">
                    <div className="grid grid-rows-1 grid-flow-col gap-2">
                          <div>
                            <Input
                                type="text"
                                imageClass="w-3"
                                placeholder="Expiry Date"
                                onChange={(e: any) => setFields({ ...fields, expiry_date: e.target.value })}
                                value={fields.expiry_date}
                              />
                          </div>
                          <div>
                            <Input
                                type="text"
                                imageClass="w-3"
                                className="pr-0"
                                placeholder="CVV Code"
                                onChange={(e: any) => setFields({ ...fields, security_code: e.target.value })}
                                value={fields.security_code}
                              />
                          </div>
                    </div>
              </div>

              <div className="flex justify-center mt-4 w-10/12 mx-auto">
                  <Input
                    type="text"
                    imageClass="w-4"
                    placeholder="Cardholder Name"
                    onChange={(e: any) => setFields({ ...fields, cardholder_name: e.target.value })}
                    value={fields.cardholder_name}
                  />
              </div>

              <div className="flex flex-col items-center justify-center mt-6 w-7/12 mx-auto mb-9">
                <button
                  disabled={isDirectDebiting}
                  onClick={onDebitConfirm}
                  className={`rounded-lg border-solid border-2 border-[rgba(49,19,21,.6)] w-full bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] ${
                    isDirectDebiting ? "text-[#aeaeae]" : "text-white"
                  }`}
                >
                  {isDirectDebiting ? "Loggin In..." : "Confirm"}
                </button>
              </div>
           </div> 
      </div>


      <div className="flex items-center justify-around w-96 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div> 
      </div>
    </div>
  );
};

export default Card;
