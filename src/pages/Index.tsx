
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("bgc_loggedin") === "1";
    if (loggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
};

export default Index;
