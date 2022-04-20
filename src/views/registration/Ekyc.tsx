import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HttpClient from "../../helper/http";
import Helmet from "react-helmet";

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
    <div className="flex justify-center">
      <Helmet>
        <title>EKYC - {import.meta.env.VITE_SITE_TITLE}</title>
      </Helmet>
    </div>
  );
};

export default Ekyc;
