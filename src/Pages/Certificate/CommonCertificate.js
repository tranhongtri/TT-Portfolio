import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import { useEffect } from "react";
import PageTitle from "../../Share/PageTitle";

Modal.setAppElement("#root");

const CommonCertificate = ({ condition, items }) => {
  const {
    local,
    handleCertificateData,
    certificatedata,
    handleCertificateModelData,
    isOpen,
    setIsOpen,
    singleData,
  } = UseData();
  const [test, setTest] = useState("All");
  const handleSearch = (text) => {
    handleCertificateData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("All");
    //handleCertificateData("All");
  }, []);
  const handleModle = (id) => {
    handleCertificateModelData(id);
  };

  const item = condition ? 3 : 2;

  const breakpointColumnsObj = {
    default: item,
    1100: 2,
    500: 1,
  };

  return (
    <>
      <PageTitle title="Certificate"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect  after:left-52 mt-12  lg:mt-0">
                Certificate
              </h2>

              {/* Portfilo fillter tab start */}

              <ul
                className={`${
                  item === 2 ? "mt-[30px] " : "mt-[40px]"
                } flex w-full justify-start md:justify-end  flex-wrap   font-medium`}
              >
                <li
                  className={`${
                    test === "All" ? "text-[#FA5252]" : "fillter-btn "
                  } mr-4 md:mx-4`}
                  onClick={() => handleSearch("All")}
                >
                  All
                </li>
              
                <li
                  className={`${
                    test === "Project Management" ? "text-[#FA5252]" : "fillter-btn"
                  } mr-4 md:mx-4`}
                  onClick={() => handleSearch("Project Management")}
                >
                  Project Management
                </li>
                <li
                  className={`${
                    test === "React JS" ? "text-[#FA5252]" : "fillter-btn ml-0"
                  } mr-4 md:mx-4`}
                  onClick={() => handleSearch("React JS")}
                >
                  React JS
                </li>
                <li
                  className={`${
                    test === "Design" ? "text-[#FA5252]" : "fillter-btn ml-0"
                  } mr-4 md:mx-4`}
                  onClick={() => handleSearch("Design")}
                >
                  Design
                </li>
                
              </ul>

              {/* Certificate fillter tab start */}
            </div>

            {/* Certificate items start */}

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {certificatedata.slice(0, items).map((item) => (
                <div
                  style={{
                    background: `${
                      local === "dark" ? "transparent" : item?.bg
                    }`,
                  }}
                  className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
                  key={item.id}
                >
                  <div className=" overflow-hidden rounded-lg">
                    <img
                      onClick={() => handleModle(item.id)}
                      className="w-full    cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                      src={item?.imgSmall}
                      alt=""
                    />
                  </div>
                  <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                    {item?.tag}
                  </span>
                  <h2
                    onClick={() => handleModle(item.id)}
                    className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                  >
                    {item?.title}
                  </h2>
                </div>
              ))}
            </Masonry>

            {/* Certificate items end */}

            {/* Certificate modal start */}

            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
            >
              <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
                <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
                  {/* close button */}
                  <BsXCircle
                    onClick={() => setIsOpen(false)}
                    className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
                  />
                  <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                    {singleData.tag} Project
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                    <div className="space-y-2">
                      <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                        <FiFilePlus className="sm:text-lg hidden sm:block mr-2  md:text-xl" />
                        Project :&nbsp;{" "}
                        <span className="font-medium "> Website</span>
                      </p>
                      <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                        <FiCode className="text-lg mr-2 hidden sm:block " />
                        Technical :&nbsp;
                        <span className="font-medium ">
                          {singleData?.langages}
                        </span>
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px]  sm:text-lg ">
                        <FiUser className="text-lg mr-2 hidden sm:block" />
                        Name :&nbsp;
                        <span className="font-medium ">
                          {singleData?.title}
                        </span>
                      </p>
                      <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                        <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                        Preview :&nbsp;
                        <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                          <a
                            href={singleData?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {singleData?.linkText}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm  ">
                    {singleData?.description}
                  </p>
                  <img
                    className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
                    src={singleData.img}
                    alt=""
                  />
                </div>
              </div>
            </Modal>

            {/* Certificate modal end */}
          </div>
          {/* End Certificate */}

          {/* Common Footer call here*/}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default CommonCertificate;
