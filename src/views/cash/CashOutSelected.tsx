import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import BackIcon from "../../assets/backbtn.png";
import GcashTransparentIcon from "../../assets/gcash-transparent.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

const CashOutSelected: React.FC = () => {
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


  return (
    <div className="flex justify-center relative">
      <Helmet>
        <title>Cash Out - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="w-96 h-12 bg-red-900 fixed">
          <div className="flex flex-row"> 
            <Link to="#">
                <img className="w-[20px] h-auto pt-5 pl-3" src={BackIcon} />
            </Link>
            <h4 className="pt-3 pl-3 text-[#fff]">Cash Out</h4>
           </div>   
      </div>
      <div className="login-wrapper w-80 mx-auto">
   
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}

        <div className="w-full flex flex-col mt-3 mb-16">

             <div className="flex flex-col">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Balance</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <h5 className="pl-5 text-yellow-400 font-bold">P 1000.00</h5>
                  </div>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row">
                     <div className="ml-5 pr-2 pb-2 pt-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                    </div>
                    <h5 className="text-[#fff] pt-3 pl-2">GCASH</h5>
                  </div>
                </div>
             </div> 
  
             <div className="flex flex-col mt-1.5">
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex justify-center w-60 mx-auto border-t-2 border-[#22242e]">
                      <h5 className="text-[#79797c] pt-2 text-xs">Enter Amount</h5>
                  </div>
                  <div className="flex justify-center w-10/6 mx-auto">
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
                        <div className="flex justify-center w-10/12 mx-auto">
                            <Input
                                type="text"
                                imageClass="w-4"
                                placeholder="Account Name"
                                onChange={(e: any) => setFields({ ...fields, account_name: e.target.value })}
                                value={fields.account_name}
                            />
                        </div>
                        <div className="flex justify-center w-10/12 mx-auto">
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
                            className={`w-56 rounded-lg border-solid border-2 border-[rgba(49,19,21,.6)] w-full bg-[#7b2121] py-[0.3em] px-[0.5em] text-[1rem] font-[600] ${
                                isEwallet ? "text-[#aeaeae]" : "text-white"
                            }`}
                            >
                            {isEwallet ? "Loggin In..." : "Confirm"}
                            </button>
                        </div>
                </div>
                
             </div> 

            
            
        </div>    


        
      </div>
      <div className="flex items-center justify-around w-80 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div>  
    </div>
  );
};

export default CashOutSelected;
