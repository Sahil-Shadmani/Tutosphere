import React from "react";
import { 
  FaCalculator, 
  FaBookOpen, 
  FaCode, 
  FaFlask, 
  FaLandmark, 
  FaBrain, 
  FaLaptopCode, 
  FaThLarge 
} from "react-icons/fa";

const subjectList = [
  {
    id: 1,
    name: "Mathematics",
    icon: <FaCalculator />,
    color: "#0063ff",
  },
  {
    id: 2,
    name: "English",
    icon: <FaBookOpen />,
    color: "#00c986",
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaCode />,
    color: "#922aee",
  },
  {
    id: 4,
    name: "Science",
    icon: <FaFlask />,
    color: "#ea7516",
  },
  {
    id: 5,
    name: "History",
    icon: <FaLandmark />,
    color: "#075267",
  },
  {
    id: 6,
    name: "Psychology",
    icon: <FaBrain />,
    color: "#986d1d",
  },
  {
    id: 7,
    name: "Web Development",
    icon: <FaLaptopCode />,
    color: "#b93838",
  },
  {
    id: 8,
    name: "See All Subjects",
    icon: <FaThLarge />,
    color: "#464646",
  },
];

const SubjectCard = () => {
  return (
    <>
      <div id="subjects" className="container pt-4 pb-6 md:pt-16 md:pb-8 scroll-mt-16 md:scroll-mt-10">

        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Explore Subjects
          </h1>

          <p className="font-semibold text-3xl">
            Find a Tutor for Any Subject
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {subjectList.map((subject) => {
            return (
              <div
                key={subject.id}
                className="border rounded-lg border-secondary/20 p-3 sm:p-4 flex justify-start items-center gap-3 sm:gap-4 hover:!scale-105 hover:!shadow-xl transition-all duration-200 cursor-pointer"
              >
                <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center text-lg shrink-0"
                >
                  {subject.icon}
                </div>

                <p className="font-medium text-slate-800 text-xs sm:text-sm leading-tight">{subject.name}</p>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default SubjectCard;