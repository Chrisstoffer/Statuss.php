
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { title: "Home", to: "/" },
  { title: "Course Evaluation", to: "/course-evaluation" },
  { title: "Preregistration", to: "/preregistration" },
  { title: "Schedule", to: "/schedule" },
  { title: "Registration", to: "/registration" },
  { title: "Billing", to: "/billing" },
  { title: "Admit Card", to: "/admit-card" },
  { title: "Result", to: "/result" },
  { title: "Profile", to: "/profile" },
  { title: "Logout", to: "/logout" }
];

const BGCNav: React.FC<{ loggedIn?: boolean }> = ({ loggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Only show Login button if not logged in and on login page, otherwise menu.
  if (!loggedIn) {
    return (
      <div className="w-full bg-[#117538] rounded-b-xl px-1">
        <div className="flex">
          <button
            onClick={() => navigate("/login")}
            className="text-white font-semibold text-base px-7 py-2 rounded-md hover:bg-[#095b27] transition"
            style={{ minWidth: 120 }}
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#117538] rounded-b-xl px-1">
      <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide whitespace-nowrap">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || (item.to === "/" && location.pathname === "/home");
          return (
            <button
              key={item.title}
              className={`${
                isActive
                  ? "bg-[#055d1d] text-white"
                  : "bg-transparent text-white hover:bg-[#095b27]"
              } font-semibold text-sm px-3 py-2 rounded-md transition flex-shrink-0`}
              onClick={() => item.to === "/logout" ? navigate("/login") : navigate(item.to)}
            >
              {item.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BGCNav;
