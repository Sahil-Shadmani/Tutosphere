import React from "react";
import { FaBook } from "react-icons/fa";

const subjectList = [
  {
    id: 1,
    name: "Engineering",
    icon: <FaBook />,
    color: "#0063ff",
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaBook />,
    color: "#922aee",
  },
  {
    id: 4,
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
  },
  {
    id: 5,
    name: "History",
    icon: <FaBook />,
    color: "#075267",
  },
  {
    id: 6,
    name: "Psychology",
    icon: <FaBook />,
    color: "#986d1d",
  },
  {
    id: 7,
    name: "Web design",
    icon: <FaBook />,
    color: "#b93838",
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
  },
];

const SubjectCard = () => {
  return <>
    <div className="container py-14 md:py-24">
        
        {/* Header Section */}

        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-orange-500">Our tutor subjects</h1>
            <p className="font-semibold text-3xl">Find Online Tutor in Any Subject</p>
        </div>

        {/* Cards Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {subjectList.map((subject)=>{
                return (
                    <div key={subject.id} className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl transition-all duration-200 cursor-pointer ">
                        <div style={{color:subject.color,backgroundColor: subject.color+"20"}} className="w-10 h-10 rounded-md flex justify-center items-center">{subject.icon}</div>
                        <p>{subject.name}</p>

                    </div>
                )
            })}
        </div>

    </div>
  </>;
};

export default SubjectCard;