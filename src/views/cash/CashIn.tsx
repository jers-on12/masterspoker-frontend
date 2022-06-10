import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import JcbIcon from "../../assets/jcb.png";
import VisaIcon from "../../assets/visa.png";
import MastercardIcon from "../../assets/mastercard.png";
import GcashIcon from "../../assets/gcash.png";
import GrabpayIcon from "../../assets/grabpay.png";
import PaymayaIcon from "../../assets/paymaya.png";
import ShopeeIcon from "../../assets/shopee.png";
import ElevenIcon from "../../assets/7-eleven.png";
import WesternIcon from "../../assets/western.png";
import BpiIcon from "../../assets/bpi.png";
import UbIcon from "../../assets/ub.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

const CashIn: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
    <div className="flex justify-center">
      <Helmet>
        <title>Cash In - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper w-96 mx-4">
   
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}

        <div className="w-full flex flex-col mt-3">
             <h2 className="text-[#aeaeae] text-[1rem] font-[600] mb-2">Cash In</h2>   
             <div className="flex flex-col bg-gray-600 rounded-lg">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Card</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-end">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={JcbIcon} />
                        </Link>
                    </div>    
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={VisaIcon} />
                        </Link>
                    </div>  
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={MastercardIcon} />
                        </Link>
                    </div>  
                  </div>
                </div>
             </div> 

             <div className="flex flex-col bg-gray-600 rounded-lg mt-1.5">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">E-Wallet</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-end">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={GcashIcon} />
                        </Link>
                    </div>    
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={GrabpayIcon} />
                        </Link>
                    </div>  
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={PaymayaIcon} />
                        </Link>
                    </div>  
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={ShopeeIcon} />
                        </Link>
                    </div> 
                  </div>
                </div>
             </div> 

             <div className="flex flex-col bg-gray-600 rounded-lg mt-1.5">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Over The Counter</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-end">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={ElevenIcon} />
                        </Link>
                    </div>    
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={WesternIcon} />
                        </Link>
                    </div>  
                  </div>
                </div>
             </div> 

             <div className="flex flex-col bg-gray-600 rounded-lg mt-1.5 mb-4">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Direct Debit</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-end">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="rounded-lg p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={BpiIcon} />
                        </Link>
                    </div>    
                    <div className="rounded-lg ml-1.5 p-1 bg-white border-solid border-2 border-gray-400">   
                        <Link to="#">
                            <img className="w-12" src={UbIcon} />
                        </Link>
                    </div>  
                  </div>
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

export default CashIn;
