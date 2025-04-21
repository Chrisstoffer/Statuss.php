
import React from "react";
import { useNavigate } from "react-router-dom";
import BGCHeader from "@/components/BGCHeader";
import BGCNav from "@/components/BGCNav";
import BGCBox from "@/components/BGCBox";

const dashboardLinks = [
  { label: "Billing History", path: "/billing" },
  { label: "Current Status", path: "/current-status" },
  { label: "Preregistration", path: "/preregistration" },
  { label: "Class Schedule", path: "/schedule" },
  { label: "My Profile", path: "/profile" },
  { label: "Change Password", path: "#" },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleDashboardLink = (link: string) => {
    if (link === "#") {
      alert("Change Password feature not implemented.");
    } else {
      navigate(link);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("bgc_loggedin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col">
      <div className="w-full max-w-5xl mx-auto mt-8 mb-3">
        <BGCHeader />
        <BGCNav loggedIn />
      </div>
      <BGCBox>
        <div className="text-left">
          <div className="text-sm mb-3">
            You are logged in as: <span className="font-bold">230241088</span>
            &nbsp;
            <a
              href="/login"
              className="text-[#450776] underline text-xs"
              onClick={e => {
                e.preventDefault();
                handleLogout();
              }}
            >(log out)</a>
          </div>
        </div>
        <div className="py-1 px-3 text-center">
          <div className="mt-2 text-xl mb-2">
            <span className="font-bold">Semester:</span> 251&nbsp;
            <span className="italic text-gray-700">(Spring 2025)</span>
            &nbsp;<span className="font-bold">Student:</span> 230241088 Anik Das
            <br />
            <span className="font-bold">Adviser:</span>
          </div>
          <hr className="mt-6 mb-2 border-gray-300" />
          <div className="flex flex-col items-center mt-6 space-y-2 pb-6">
            {dashboardLinks.map(link => (
              <button
                key={link.label}
                className="text-[#117538] font-bold underline text-lg hover:text-[#055d1d] transition rounded px-2 py-0.5"
                style={{ border: "none", background: "none" }}
                onClick={() => handleDashboardLink(link.path)}
                tabIndex={0}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </BGCBox>
    </div>
  );
};

export default Home;
