import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, Component } from "react";
import GamingLabIcon from "../../assets/gaming-lab.png";
import PagCor2Icon from "../../assets/pagcor2.png";
import BackIcon from "../../assets/backbtn.png";
import CameraIcon from "../../assets/camera.png";
import Input from "../../components/Input";
import Select from "../../components/Select";
// @ts-ignore: Unreachable code error
import Stepper from 'react-stepper-horizontal';
import Webcam from 'react-webcam';
import Helmet from "react-helmet";


const ProofIdentity: React.FC = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
  const sections = [
    { title: '' },
    { title: '' },
    { title: '' },
  ];

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  const [isShowVideo, setIsShowVideo] = useState(false);
    const webcamRef = useRef(null);
    
    const videoConstraints = {
        width: 320,
        height: 200,
        facingMode: "user"
    }

    const videoConstraints2 = {
      width: 206,
      height: 270,
      facingMode: "user"
  }

    return (
        <div className="flex justify-center relative">
          <Helmet>
            <title>Proof of Identity - {import.meta.env.VITE_SITE_TITLE}</title>
          </Helmet>
          <div className="w-96 h-12 bg-red-900 fixed -z-[-1]">
              
              <div className="flex flex-row"> 
                <Link to="#">
                    <img className="w-[20px] h-auto pt-5 pl-3" src={BackIcon} />
                </Link>
                <h4 className="pt-3 pl-3 text-[#fff]">Account Verification</h4>
               </div>   
          </div>
          <div className="login-wrapper w-96 mx-4 mb-12">
              <div>
              <Stepper
              className="relative z-10"
              steps={sections}
              activeStep={currentPage}
              size={8}
              circleFontSize={0}	
              activeColor={'#fff'}
              defaultBarColor={'#4e0709'}
              completeColor="#fff"
              completeBarColor={'#4e0709'}
              activeBorderColor={'#ae1016'}
              defaultBorderWidth={1}
            />
    
            {currentPage === 0 && (
              <>
                 <div>
                   <h4 className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[1rem] font-[400] text-left mt-8">Proof of Identity</h4>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-4 mb-1">Take a picture or send an ID from your Gallery</p>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-1 mb-4">Keep the credentials inside the box, press "Capture"
                        to take the photo once ready or press "Upload" to upload a picture of your ID 
                        from your gallery.
                   </p>
                  </div>
                  <div className="camView grid justify-items-center">
                        <Webcam className="rounded-3xl" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
                        <button className="mt-8 mb-12 w-[50px] bg-red-900 rounded-full p-3" onClick={next}>
                           <img className="w-6" src={CameraIcon} />
                        </button>
       
                   </div>
              </>
            )}
    
            {currentPage === 1 && (
              <>
                <div>
                   <h4 className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[1rem] font-[400] text-left mt-2">Prepare to Scan your Face</h4>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-4 mb-1">Make sure you are in a well-lit room and hold the phone</p>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-1 mb-4">as shown in the picture. </p>
                  </div>
                  <div className="camView grid justify-items-center">
                        <Webcam className="rounded-full" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints2} />
                        <button className="mt-8 mb-12 w-[50px] bg-red-900 rounded-full p-3" onClick={next}>
                           <img className="w-6" src={CameraIcon} />
                        </button>
                   </div>
              </>
            )}
    
            {currentPage === 2 && (
              <>
                <div>
                   <h4 className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[1rem] font-[400] text-left mt-2">Tell us more about yourself</h4>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mt-4">To fully protect your account, we need these additional information for</p>
                   <p className="text-[#bcbcbe] w-full pb-1 px-[8px] text-[.7rem] font-[400] text-left mb-4"> verification.</p>
                  </div>
                <div className="grid grid-col w-96 mx-auto">
                <h4 className="text-[#bcbcbe] w-full pb-1 pl-4 px-[8px] text-[1rem] font-[400] text-left">PERSONAL INFORMATION</h4>
                  <div className="w-11/12 mt-1 mx-auto  grid justify-items-center">
                  <Input
                      containerClass="mb-2"
                      type="number"
                      placeholder=""
                    />
                     <Select
                      containerClass="mb-2"
                    />
                    <Input
                      containerClass="mb-2"
                      type="number"
                      placeholder="Address"
                    />
                     <Input
                      containerClass="mb-2"
                      type="number"
                      placeholder="Work Details (Job Position)"
                    />
                    <Select
                      containerClass="mb-2"
                    />
                     <Input
                      containerClass="mb-2"
                      className="h-5px"
                      type="number"
                      placeholder="Company Name"
                    />
                    <Select
                      containerClass="mb-2"
                    />
                    <button
                      className='rounded-lg w-7/12 bg-[#7b2121] text-white py-[0.15em] px-[1em] text-[1rem] mb-14 mt-6 font-[600]' 
                    >
                      Next
                    </button>
                  </div>
               
                </div>
              </>
            )}
              </div>
    
    
          </div>
          <div className="flex items-center justify-around w-96 mx-auto absolute bottom-0">
           <div><img className="w-28" src={PagCor2Icon} /></div>
           <div><img className="w-32" src={GamingLabIcon} /></div>
        </div>
        </div>
      );
    };
    
    export default ProofIdentity;
    