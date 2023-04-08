import React from "react";
//import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
//import LineItem from "./LineItem";
import ResumeCardTwo from "./ResumeCardTwo";

const ResumeTwo = () => {
  //const { lineArray } = UseData();
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-12 px-4 md:px-0">
              {/*Resume page title */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {/* resume items map */}
                <ResumeCardTwo />
              </div>
            </div>
          </div>
          {/* End .container */}

          

          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default ResumeTwo;
