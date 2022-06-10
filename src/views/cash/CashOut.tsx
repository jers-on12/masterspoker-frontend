import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import BackIcon from "../../assets/backbtn.png";
import BpiTransparentIcon from "../../assets/bpi-transparent.png";
import GcashTransparentIcon from "../../assets/gcash-transparent.png";
import GrabTransparentIcon from "../../assets/grabpay-transparent.png";
import PaymayaTransparentIcon from "../../assets/paymaya-transparent.png";
import ShopeeTransparentIcon from "../../assets/shopee-transparent.png";
import UbTransparentIcon from "../../assets/ub-transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

const CashOut: React.FC = () => {
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

        <div className="w-full flex flex-col mt-3">

             <div className="flex flex-col">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Balance</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <h5 className="pl-5 text-yellow-400 font-bold">P 1000.00</h5>
                  </div>
                </div>
             </div> 
  
             <div className="flex flex-col">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Cards</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                    </div>    
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                    </div>  
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                    </div>  
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                    </div> 
                  </div>
                </div>
             </div> 

             <div className="flex flex-col mt-1.5">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">E-Wallets</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                     <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>    
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GrabTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={PaymayaTransparentIcon} />
                        </Link>
                      </div>   
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={ShopeeTransparentIcon} />
                        </Link>
                      </div> 
                  </div>
                </div>
             </div> 

             <div className="flex flex-col mt-1.5">
                <div className="grid grid-col gap-4 place-items-start">
                  <h4 className="text-[#fff] text-[.8rem] px-2 pt-2">Banks</h4>
                </div>
                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={BpiTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={UbTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                  </div>
                </div>

                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                  </div>
                </div>

                <div className="grid grid-col gap-4 place-items-start">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                  </div>
                </div>

                <div className="grid grid-col gap-4 place-items-start mb-8">
                  <div className="flex flex-row pr-2 pb-2 pt-1.5">
                    <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div> 
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
                      </div>  
                      <div className="ml-1.5">   
                        <Link to="#">
                            <img className="w-9" src={GcashTransparentIcon} />
                        </Link>
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
    </div>
  );
};

export default CashOut;
