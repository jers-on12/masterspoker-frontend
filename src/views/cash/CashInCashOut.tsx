import Logo from "../../assets/logo.png";
import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

const CashInCashOut: React.FC = () => {
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
    <div className="flex justify-center relative">
      <Helmet>
        <title>Cash In | Out - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="login-wrapper mx-4 mb-16">
        <img className="w-80 mb-4" src={Logo} />
        {error && (
          <div className="w-full bg-[#7b2121] py-[0.8em] px-4 text-[0.8rem] font-[400] text-[#aeaeae] mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center justify-center mt-3 mb-12">
          
          <Link
            className="rounded-lg w-9/12 bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] mt-10 text-center text-white"
            to="#"
          >
            Cash In
          </Link>
          <Link
            className="rounded-lg w-9/12 bg-[#7b2121] py-[0.8em] px-[1.5em] text-[1rem] font-[600] mt-6 text-center text-white"
            to="#"
          >
            Cash Out
          </Link>
        </div>

        <div className="flex items-center justify-around w-80 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div>  
      </div>

      
    </div>
  );
};

export default CashInCashOut;
