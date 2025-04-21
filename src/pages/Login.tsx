
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BGCHeader from "@/components/BGCHeader";
import BGCNav from "@/components/BGCNav";
import BGCBox from "@/components/BGCBox";

const Login: React.FC = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded credentials for demo: studentId: 230241088, password: demo
    if (studentId === "230241088" && password === "DepartmentofCSS") {
      localStorage.setItem("bgc_loggedin", "1");
      navigate("/");
    } else {
      setShowError(true);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col">
      <div className="w-full max-w-5xl mx-auto mt-8 mb-3">
        <BGCHeader />
        <BGCNav loggedIn={false} />
      </div>
      <BGCBox>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-[#0e3681] pb-4 pt-2">Please login!</h2>
          <form className="w-full max-w-sm flex flex-col items-center space-y-2" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex w-full justify-end">
              <label className="w-28 pr-2 text-right text-sm">StudentID :</label>
              <input
                type="text"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                className="border border-gray-400 rounded h-7 px-2 w-48 text-base"
                autoFocus
                required
              />
            </div>
            <div className="flex w-full justify-end">
              <label className="w-28 pr-2 text-right text-sm">Password :</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-gray-400 rounded h-7 px-2 w-48 text-base"
                required
              />
            </div>
            <div className="text-gray-600 text-xs mb-2 pl-1 pt-2">Please enter login information.</div>
            {showError && (
              <div className="text-red-600 text-sm pb-2">Invalid StudentID or Password!</div>
            )}
            <div className="flex flex-row space-x-3 py-1">
              <button
                type="submit"
                className="bg-[#117538] text-white rounded px-6 py-1 border border-[#117538] font-semibold"
                style={{ minWidth: 70 }}
              >login</button>
              <button
                type="button"
                onClick={handleClose}
                className="bg-white text-black rounded px-6 py-1 border border-gray-400 font-semibold hover:bg-gray-100"
              >close</button>
            </div>
          </form>
          <div className="mt-6">
            <a
              className="text-sm text-blue-900 underline hover:text-blue-700"
              href="#"
              tabIndex={0}
              onClick={e => { e.preventDefault(); alert("Forgot password feature not implemented."); }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </BGCBox>
    </div>
  );
};

export default Login;
