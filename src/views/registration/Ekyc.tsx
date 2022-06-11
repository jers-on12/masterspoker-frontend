import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import BackIcon from "../../assets/backbtn.png";
import RightIcon from "../../assets/RightIcon.png";
import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import Helmet from "react-helmet";
import Stepper from 'react-stepper-horizontal';

interface Progress {
  route: string;
  name: string;
  data: any;
}

const Ekyc: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progress: any = localStorage.getItem("__registration_progress");
    try {
      const progressData: Progress = JSON.parse(progress);
      if (progressData.name !== "ekyc") {
        navigate(progressData.route);
        return;
      }
    } catch (err) {
      navigate("/register");
    }
  }, []);

  return (
    <div className="flex justify-center relative">
      <Helmet>
        <title>EKYC - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
      <div className="w-96 h-12 bg-red-900 fixed -z-[-1]">
          
          <div className="flex flex-row"> 
            <Link to="#">
                <img className="w-[20px] h-auto pt-5 pl-3" src={BackIcon} />
            </Link>
            <h4 className="pt-3 pl-3 text-[#fff]">Choose An ID</h4>
           </div>   
      </div>
      <div className="login-wrapper w-96 mx-4 mb-16">
         <div>
           <Stepper steps={ [{title: ''}, {title: ''}, {title: ''}] } activeStep={ 0 } size={ 10 } circleFontSize={0} defaultBarColor={'#4e0709'} 
            activeColor={'#fff'} activeBorderColor={'#ae1016'} defaultBorderWidth={2} />
         </div>
         <h4 className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[1rem] font-[400] text-left mt-8">Which ID do you have?</h4>
          <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-2 mb-4">Make sure you have a real and valid ID to ensure a smooth process.</p>
          <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
              <div className="border-b-2 border-[#23252f] text-[#fff] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                SELECT YOUR ID
              </div>
          </div>

          <div className="flex flex-col flex-start w-80 mx-auto mb-2">
            <Link to="/proof-of-identity">
                <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                  <div>UMID</div>
                  <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                </div>
            </Link>
            
          </div>

          <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
            <Link to="/proof-of-identity">
                  <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                    <div>TIN ID</div>
                    <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                  </div>
              </Link>
           </div>

           <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
            <Link to="/proof-of-identity">
                  <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                    <div>Passport</div>
                    <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                  </div>
              </Link>
            </div>

            <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
              <Link to="/proof-of-identity">
                    <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                      <div>Driver's License</div>
                      <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                    </div>
                </Link>
              </div>

              <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                <Link to="/proof-of-identity">
                    <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                      <div>Barangay ID</div>
                      <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                    </div>
                </Link>
              </div>  

              <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                <Link to="/proof-of-identity">
                    <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                      <div>Postal ID</div>
                      <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                    </div>
                </Link>
              </div>

              <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                <Link to="/proof-of-identity">
                    <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                      <div>Voter's ID</div>
                      <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                    </div>
                </Link>
              </div>

              <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                <Link to="/proof-of-identity">
                    <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                      <div>Senior Citizen Card</div>
                      <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                    </div>
                </Link>
              </div>

              <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                  <Link to="/proof-of-identity">
                      <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                        <div>Alien Immigrant COR</div>
                        <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                      </div>
                  </Link>
                </div>

                <div className="flex flex-col flex-start mt-1 w-80 mx-auto mb-2">
                 <Link to="/proof-of-identity">
                      <div className="flex flex-row border-b-2 border-[#23252f] text-[#bcbcbe] w-full pb-1 px-[8px] text-[.8rem] font-[400] text-left">
                        <div>SSS Card</div>
                        <img className="w-[6px] h-[8px] ml-auto mt-1" src={RightIcon} />
                      </div>
                  </Link>
                </div> 

      </div>
      <div className="flex items-center justify-around w-96 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div>
    </div>
  );
};

export default Ekyc;
