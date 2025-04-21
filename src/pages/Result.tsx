
import React from "react";
import { useNavigate } from "react-router-dom";
import BGCHeader from "@/components/BGCHeader";
import BGCNav from "@/components/BGCNav";
import BGCBox from "@/components/BGCBox";

const resultData = {
  cgpa: 3.150,
  completed: 60,
  before: 20,
  inThis: 9,
  totalCourses: 29,
  gpaTable: [
    { semester: "233", ch: "17.0", gpa: "2.650", cgpa: "2.650" },
    { semester: "241", ch: "22.0", gpa: "3.030", cgpa: "2.850" },
    { semester: "243", ch: "21.0", gpa: "3.790", cgpa: "3.150" },
  ],
  items: [
    { semester: "233", course: "07-0222-BS107", title: "Bangladesh Studies", type: "", credit: "1.0", result: "B+", comments: "" },
    { semester: "233", course: "07-0231-ELC105", title: "English Language Course", type: "", credit: "2.0", result: "B+", comments: "" },
    { semester: "233", course: "07-0411-ACC106", title: "Principles of Accounting and Management", type: "", credit: "2.0", result: "C+", comments: "" },
    { semester: "233", course: "07-0533-PHY LAB110", title: "Lab-3:based on CSE1103", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "233", course: "07-0533-PHY103", title: "Physics-I", type: "", credit: "2.0", result: "B-", comments: "" },
    { semester: "233", course: "07-0541-MATH104", title: "Mathematics-I", type: "", credit: "3.0", result: "F", comments: "" },
    { semester: "233", course: "07-0611-CF LAB108", title: "Lab-1:based on CSE1101", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "233", course: "07-0611-CF101", title: "Computer Fundamentals and Applications", type: "", credit: "3.0", result: "A-", comments: "" },
    { semester: "233", course: "07-0613-CP LAB109", title: "Lab-2:based on CSE1102", type: "", credit: "1.0", result: "A", comments: "" },
    { semester: "233", course: "07-0613-CP102", title: "Structured Computer Programming with C", type: "", credit: "3.0", result: "C", comments: "" },
    { semester: "241", course: "07-0311-ECON211", title: "Economics", type: "", credit: "2.0", result: "B", comments: "" },
    { semester: "241", course: "07-0533-PHY Lab210", title: "Lab-4 based on CSE 1204", type: "", credit: "1.0", result: "B", comments: "" },
    { semester: "241", course: "07-0533-PHY204", title: "Physics-II", type: "", credit: "2.0", result: "C+", comments: "" },
    { semester: "241", course: "07-0541-MATH205", title: "Mathematics-II", type: "", credit: "3.0", result: "C", comments: "" },
    { semester: "241", course: "07-0613-CPLUS Lab209", title: "Lab-3: based on CSE 1203", type: "", credit: "2.0", result: "A+", comments: "" },
    { semester: "241", course: "07-0613-CPLUS203", title: "Computer Programming with C++", type: "", credit: "3.0", result: "B", comments: "" },
    { semester: "241", course: "07-0613-DS Lab208", title: "Lab-2: based on CSE 1202", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "241", course: "07-0613-DS202", title: "Data Structure", type: "", credit: "3.0", result: "A+", comments: "" },
    { semester: "241", course: "07-0619-PE206", title: "Professional Ethics of Computing", type: "", credit: "1.0", result: "B", comments: "" },
    { semester: "241", course: "07-0713-BEE Lab207", title: "Lab-1: based on CSE 1201", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "241", course: "07-0713-BEE201", title: "Basic Electrical Engineering", type: "", credit: "3.0", result: "D", comments: "" },
    { semester: "243", course: "07-0541-MATH305", title: "Mathematics-III", type: "", credit: "3.0", result: "A-", comments: "" },
    { semester: "243", course: "07-0542-STAT306", title: "Statistics", type: "", credit: "2.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0613-JAVA Lab309", title: "Lab-3: based on 07-0613-JAVA304", type: "", credit: "2.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0613-JAVA304", title: "Computer Programming with JAVA", type: "", credit: "3.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0619-DM302", title: "Discrete Mathematics", type: "", credit: "3.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0714-BE Lab308", title: "Lab-2: based on 07-0714-BE303", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0714-BE303", title: "Basic Electronics", type: "", credit: "3.0", result: "B+", comments: "" },
    { semester: "243", course: "07-0714-DLD Lab307", title: "Lab-1: based on 07-0714-DLD301", type: "", credit: "1.0", result: "A+", comments: "" },
    { semester: "243", course: "07-0714-DLD301", title: "Digital Logic Design", type: "", credit: "3.0", result: "A-", comments: "" },
  ]
};

const ResultPage: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="text-center mt-1">
          <div className="text-2xl font-semibold text-[#131965] mb-2">Result</div>
        </div>
        <div className="py-1 px-1 text-center">
          <div className="mt-2 text-xl mb-2">
            <span className="font-bold">Semester:</span> 251&nbsp;
            <span className="italic text-gray-700">(Spring 2025)</span>
            &nbsp;<span className="font-bold">Student:</span> 230241088 Anik Das
            <br />
            <span className="font-bold">Adviser:</span>
          </div>
          <hr className="mt-4 mb-2 border-gray-300" />
          <div className="text-base mt-6 mb-2 text-center font-semibold max-w-2xl mx-auto">
            <div className="mt-2"><span className="font-bold text-black">CGPA:</span> {resultData.cgpa.toFixed(3)}</div>
            <div>Total Credit Hours completed :{resultData.completed}.0</div>
            <div>Number of Courses Completed Before This semester :{resultData.before}</div>
            <div>Number of Courses Completed in This semester :{resultData.inThis}</div>
            <div className="pb-1">Total Number of Courses Completed :{resultData.totalCourses}</div>
            <div className="pt-4 pb-1 font-bold
              ">Semester-wise GPA</div>
          </div>
          {/* GPA Table */}
          <div className="flex justify-center">
            <table className="border-collapse my-2 w-auto text-sm">
              <thead>
                <tr>
                  <th className="bg-[#117538] text-white border border-[#117538] px-4 py-2 font-bold">Semester</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-4 py-2 font-bold">Credit Hours Completed</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-4 py-2 font-bold">GPA</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-4 py-2 font-bold">CGPA</th>
                </tr>
              </thead>
              <tbody>
                {resultData.gpaTable.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-[#117538] px-4 py-2 bg-white">{row.semester}</td>
                    <td className="border border-[#117538] px-4 py-2 bg-white">{row.ch}</td>
                    <td className="border border-[#117538] px-4 py-2 bg-white">{row.gpa}</td>
                    <td className="border border-[#117538] px-4 py-2 bg-white">{row.cgpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Type Table */}
          <div className="font-semibold text-center mt-3 mb-2">Type-wise number of courses:</div>
          <div className="flex justify-center">
            <table className="border-collapse w-auto text-base">
              <thead>
                <tr>
                  <th className="bg-[#117538] text-white border border-[#117538] px-7 py-1 font-bold">Type</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-7 py-1 font-bold">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#117538] px-7 py-1 bg-white font-bold">Type</td>
                  <td className="border border-[#117538] px-7 py-1 bg-white">#</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="font-semibold text-center mt-3 mb-2">Result of completed/registered courses:</div>
          <div className="overflow-x-auto max-w-full pb-4">
            <table className="border-collapse w-full min-w-[700px] text-xs">
              <thead>
                <tr>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Semester</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Course</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Course Title</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Type</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Credit</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Result</th>
                  <th className="bg-[#117538] text-white border border-[#117538] px-2 py-1 font-bold">Comments</th>
                </tr>
              </thead>
              <tbody>
                {resultData.items.map((r, i) => (
                  <tr key={i}>
                    <td className="border border-[#117538] px-2 py-1">{r.semester}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.course}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.title}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.type}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.credit}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.result}</td>
                    <td className="border border-[#117538] px-2 py-1">{r.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </BGCBox>
    </div>
  );
};

export default ResultPage;

