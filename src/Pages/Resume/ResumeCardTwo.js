import React from "react";
import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import UseData from "../../Hooks/UseData";

const ResumeCardTwo = () => {
  const { educationArray, experiencesArray } = UseData();
  const { local } = UseData();

  return (
    <>
      
      <div>
        {/* <!-- Experience contain --> */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-6xl text-[#F95054]">
            <MdOutlineSchool />
          </div>
          <h4 className="text-5xl dark:text-white font-medium"> Experience </h4>
        </div>

        {experiencesArray.map((item) => (
          <div
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${local === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {item.date}
            </span>
            <h3 className="text-xl dark:text-white"> {item.title} </h3>
            <p className="dark:text-[#b7b7b7]">{item.place}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-6xl text-[#F95054]">
            <MdOutlineBusinessCenter />
          </div>
          <h4 className="text-5xl dark:text-white font-medium"> Education </h4>
        </div>
        {/* end flex */}

        {educationArray.map((item) => (
          <div
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${local === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {item.date}
            </span>
            <h3 className="text-xl dark:text-white"> {item.title} </h3>
            <p className="dark:text-[#b7b7b7]">{item.place}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default ResumeCardTwo;
