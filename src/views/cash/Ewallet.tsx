import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import GcashIcon from "../../assets/gcash.png";
import GrabpayIcon from "../../assets/grabpay.png";
import PaymayaIcon from "../../assets/paymaya.png";
import ShopeeIcon from "../../assets/shopee.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

const Ewallet: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    phone_number: "",
    account_name: "",
  });
  const [isEwallet, setEwallet] = useState(false);

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

  const onEwalletConfirm = async (e: any) => {
    if (fields.phone_number.length < 1) {
      setError("Phone Number is required.");
      return;
    }

    if (fields.account_name.length < 1) {
      setError("Account Name is required.");
      return;
    }

    const { phone_number, account_name, ...restOfFields } = fields;

    setEwallet(true);

  };


  return (
    <div className="flex justify-center">
      <Helmet>
        <title>E-wallet - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper w-96 mx-4">
  
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}

      <div className="w-full flex flex-col">
        <h2 className="text-[#aeaeae] text-[1rem] font-[600] mb-2">E-Wallet</h2> 
           <div className="flex flex-col bg-gray-600 rounded-lg">
              <div className="flex justify-center mt-5 mb-10">
                  <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-16" src={GcashIcon} />
                        </Link>
                  </div> 
                  <div className="rounded-lg p-1 ml-1.5 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-16" src={GrabpayIcon} />
                        </Link>
                  </div> 
                  <div className="rounded-lg p-1 ml-1.5 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-16" src={PaymayaIcon} />
                        </Link>
                  </div> 
                  <div className="rounded-lg p-1 ml-1.5 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-16" src={ShopeeIcon} />
                        </Link>
                  </div> 
              </div>

              <div className="flex justify-center mt-4 w-10/12 mx-auto">
              <Input
                  containerClass="mb-2"
                  type="number"
                  imageClass="w-4"
                  placeholder="Phone Number"
                  onChange={(e: any) =>
                    setFields({ ...fields, phone_number: e.target.value })
                  }
                  value={fields.phone_number}
                />
              </div>

              <div className="flex justify-center mt-4 w-10/12 mx-auto">
                  <Input
                    type="text"
                    imageClass="w-4"
                    placeholder="Account Name"
                    onChange={(e: any) => setFields({ ...fields, account_name: e.target.value })}
                    value={fields.account_name}
                  />
              </div>

              <div className="flex flex-col items-center justify-center mt-6 w-7/12 mx-auto mb-9">
                <button
                  disabled={isEwallet}
                  onClick={onEwalletConfirm}
                  className={`rounded-lg border-solid border-2 border-[rgba(49,19,21,.6)] w-full bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] ${
                    isEwallet ? "text-[#aeaeae]" : "text-white"
                  }`}
                >
                  {isEwallet ? "Loggin In..." : "Confirm"}
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

export default Ewallet;
