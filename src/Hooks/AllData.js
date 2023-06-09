import { useEffect, useState } from "react";
// for work_images
// import work1 from "../assets/images/work_images/work-1.png";
// import work2 from "../assets/images/work_images/work-2.png";
// import work3 from "../assets/images/work_images/work-3.png";
// import work4 from "../assets/images/work_images/work-4.png";
// import work101 from "../assets/images/work_images/work-101.png";
// import work102 from "../assets/images/work_images/work-102.png";
// import work103 from "../assets/images/work_images/work-103.png";
// import work104 from "../assets/images/work_images/work-104.png";
// import work105 from "../assets/images/work_images/work-105.png";
// import work201 from "../assets/images/work_images/work-201.png";



// works small images
import workSmall1 from "../assets/images/work_images/small/work-1.png";
import workSmall2 from "../assets/images/work_images/small/work-2.png";
import workSmall3 from "../assets/images/work_images/small/work-3.png";
import workSmall4 from "../assets/images/work_images/small/work-4.png";
import workSmall101 from "../assets/images/work_images/small/work-101.png";
import workSmall102 from "../assets/images/work_images/small/work-102.png";
import workSmall103 from "../assets/images/work_images/small/work-103.png";
import workSmall104 from "../assets/images/work_images/small/work-104.png";
import workSmall105 from "../assets/images/work_images/small/work-105.png";
import workSmall201 from "../assets/images/work_images/small/work-201.png";
import workSmall202 from "../assets/images/work_images/small/work-202.png";
import workSmall203 from "../assets/images/work_images/small/work-203.png";


// // personal_images
// import personal1 from "../assets/images/personal_images/personal-1.png";
// import personal2 from "../assets/images/personal_images/personal-2.png";
// import personal3 from "../assets/images/personal_images/personal-3.png";

// personal small images
import personalSmall1 from "../assets/images/personal_images/small/personal-1.png";
import personalSmall2 from "../assets/images/personal_images/small/personal-2.png";
import personalSmall3 from "../assets/images/personal_images/small/personal-3.png";
import personalSmall4 from "../assets/images/personal_images/small/personal-4.png";
import personalSmall5 from "../assets/images/personal_images/small/personal-5.png";

// certificate images
import certificate1 from "../assets/images/certificate_images/certificate-1.png";
import certificate2 from "../assets/images/certificate_images/certificate-2.png";
import certificate3 from "../assets/images/certificate_images/certificate-3.png";

// certificate small images
import certificateSmall1 from "../assets/images/certificate_images/small/certificate-1.png";
import certificateSmall2 from "../assets/images/certificate_images/small/certificate-2.png";
import certificateSmall3 from "../assets/images/certificate_images/small/certificate-3.png";



// personal small images
// import personalSmall1 from "../assets/images/personal_images/small/personal-1.png";



// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/1.STK.png";
import img2 from "../assets/images/slider/2.CAR.png";
import img3 from "../assets/images/slider/3.CBL.png";
import img4 from "../assets/images/slider/4.SYD.png";
import img5 from "../assets/images/slider/5.HAW.png";
import img6 from "../assets/images/slider/6.GWS.png";
import img7 from "../assets/images/slider/7.GCT.png";
import img8 from "../assets/images/slider/8.FRE.png";
import img9 from "../assets/images/slider/9.NRL.png";
//  icon use as img here
import icon1 from "../assets/images/icons/icon-1.png";
import icon2 from "../assets/images/icons/icon-2.png";
import icon3 from "../assets/images/icons/icon-3.png";
import icon4 from "../assets/images/icons/icon-4.png";
import icon5 from "../assets/images/icons/icon-5.png";
import icon6 from "../assets/images/icons/icon-6.png";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
// import { FaBlogger } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox, FiGrid } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
// import { FaCertificate } from "react-icons/fa"; 
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // fillter personal data
  const handlePersonalData = (text) => {
    if (text === "All") {
      setPersonalData(personalItems);
    } else {
      const findPersonalData = personalItems.filter((item) => item.tag === text);
      setPersonalData(findPersonalData);
    }
  };

  // find items for personal  modal open
  const handlePersonalModelData = (id) => {
    const find = personalItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };


  // fillter certificate data
  const handleCertificateData = (text) => {
    if (text === "All") {
      setCertificateData(certificateItems);
    } else {
      const findCertificateData = certificateItems.filter((item) => item.tag === text);
      setCertificateData(findCertificateData);
    }
  };

  // find items for certificate  modal open
  const handleCertificateModelData = (id) => {
    const find = certificateItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for portfolio section
  const workItems = [
    {
      id: "202",
      tag: "Mobile App",
      title: "BeautyGo",
      // img: work201,
      imgSmall: workSmall202,
      bg: "#DCDDE2",
      client: "BeautyGo",
      langages: "Swift, Kotlin, NodeJS",
      link: "http://www.beautygo.co.kr/",
      linkText: "beautygo.co.kr",
      description:
      (
        <span>
Project duration: February 2023 - present
<br /><br />			Project details: 
<br /><br />			BeautyGo is a cutting-edge mobile app that revolutionizes the way users book beauty services. Designed for both customers and artists, BeautyGo offers a seamless platform with two distinct apps: the User App and the Artist App.
<br /><br />			With the User App, individuals can easily browse and book a wide range of beauty services for themselves and their friends. Whether it's a haircut, manicure, or spa treatment, users can effortlessly find and schedule multiple services, all in one convenient location.
<br /><br />			The Artist App caters to artists looking to showcase their services and connect with potential customers. Artists can easily register their services on the app, providing a streamlined and efficient way to showcase their skills and expand their customer base.
<br /><br />			Project scale: medium scale with high complexity
<br /><br />			Project URL: http://www.beautygo.co.kr/
<br /><br />			Project type: from scratch
<br /><br />			Project domain:
<br /><br />			advertisement
<br /><br />			Project role:
<br /><br />			Project Manager, cum BA and Scrum Master
<br /><br />			Team size: 
<br /><br />			8 members (1 PM, 2 BE, 1 Web, 2 iOS, 2 Android)
<br /><br />			Platforms: 
<br /><br />			iOS: User App, Artist App
<br /><br />			Android: User App, Artist App
<br /><br />			Web: Admin Web
<br /><br />			Technical: 
<br /><br />			iOS: SWIFT
<br /><br />			Android: KOTLIN
<br /><br />			Web: React Typescript
<br /><br />			Backend: Node JS, My SQL
<br /><br />			Summary: 
<br /><br />			-Managing and Analyzing for all tasks of iOS, Android, Backend and Web
<br /><br />			-Mastering all Sprints at the beginning of the project
<br /><br />			-Managing task planning, arranging tasks for each sprint based on team capacity, project timeline and client's requires as well as giving details to each task and sub-task
<br /><br />			-Structuring Jira Version, Epic, Stories and Tasks
<br /><br />			-Managing tasks against burndown chart
<br /><br />			-Analyzing all storyboards for the project at the beginning
<br /><br />			-Managing to finish the project in a tight deadline

        </span>
      ),
    },
    {
      id: "203",
      tag: "Mobile App",
      title: "Vivid Plus",
      // img: work201,
      imgSmall: workSmall203,
      bg: "#DCDDE2",
      client: "Vivid Plus",
      langages: "Swift, Kotlin, NodeJS",
      link: "http://www.vivid-plus.co.kr/",
      linkText: "vivid-plus.co.kr",
      description:
      (
        <span>
Project duration: February 2023 - present
<br /><br />Project details: 
<br /><br />Vivid Plus is an innovative mobile app designed to revolutionize brand advertising. With Vivid Plus, users can effortlessly access a wide range of brand advertisements, offering a seamless and convenient experience. 
<br /><br />By leveraging this platform, brands can significantly enhance the speed and efficiency of their promotional campaigns, while simultaneously expanding their customer reach. Vivid Plus empowers brands to connect with their target audience in a more impactful and engaging manner, ultimately maximizing their advertising potential.
<br /><br />Project scale: medium scale
<br /><br />Project URL: http://www.vivid-plus.co.kr/
<br /><br />Project type: from scratch
<br /><br />Project domain:
<br /><br />advertisement
<br /><br />Project role:
<br /><br />Project Manager, cum BA and Scrum Master
<br /><br />Team size: 
<br /><br />7 members (1 PM, 2 BE, 2 Web, 1 iOS, 1 Android)
<br /><br />Platforms: 
<br /><br />iOS: User App
<br /><br />Android: User App
<br /><br />Web: Brand Admin, Super Admin
<br /><br />Technical: 
<br /><br />iOS: SWIFT
<br /><br />Android: KOTLIN
<br /><br />Web: Angular Typescript
<br /><br />Backend: Node JS, My SQL
<br /><br />Summary: 
<br /><br />-Managing and Analyzing for all tasks of iOS, Android, Backend and Web
<br /><br />-Mastering all Sprints at the beginning of the project
<br /><br />-Managing task planning, arranging tasks for each sprint based on team capacity, project timeline and client's requires as well as giving details to each task and sub-task
<br /><br />-Structuring Jira Version, Epic, Stories and Tasks
<br /><br />-Managing tasks against burndown chart
<br /><br />-Analyzing all storyboards for the project at the beginning
<br /><br />-Managing to finish the project in a tight deadline

        </span>
      ),

    },
    {
      id: "201",
      tag: "Mobile App",
      title: "Malllog",
      // img: work201,
      imgSmall: workSmall201,
      bg: "#DCDDE2",
      client: "Malllog",
      langages: "Swift, Kotlin, NodeJS",
      link: "https://malllog.net",
      linkText: "malllog.net",
      description:
      (
        <span>
Project duration: September 2022 - present
<br /><br />Project details: 
<br /><br />Malllog is a social media platform which entertains users through video sharing content and allows sellers to promote their products through Market TV, Challenges and Matchings.
<br /><br />In addition, Malllog provides Marketplace feature to sellers hence they can build their stores, manage products and setup contents through Seller CMS admin.
<br /><br />Malllog is a user-generated content app where users create and edit their own videos and share them with other users.
<br /><br />Project scale: medium scale with high complexity
<br /><br />Project URL: https://malllog.net/
<br /><br />Project type: Maintenance and improvement
<br /><br />Project domain:
<br /><br />social media and video sharing
<br /><br />Project role:
<br /><br />Project Manager, cum BA, Tester and Designer
<br /><br />Team size: 
<br /><br />8 members (1 PM, 2 BE, 1 Web, 2 iOS, 2 Android)
<br /><br />Platforms: 
<br /><br />iOS: User App, Seller App
<br /><br />Android: User App, Seller App
<br /><br />Web: Seller Admin, Super Admin
<br /><br />Technical: 
<br /><br />iOS: SWIFT
<br /><br />Android: KOTLIN
<br /><br />Web: Angular JS
<br /><br />Backend: Node JS, Mongo DB
<br /><br />Achievements: 
<br /><br />-Transferring a Failed project to a Success project
<br /><br />-Fixing lots of bugs on iOS, Android, Admin sites and Backend
<br /><br />-Performing numerous updates based on client’s requests
<br /><br />-Revamping logic flows for Backend and Web development
<br /><br />-Building full storyboards from no storyboard project
<br /><br />-Building UX/UI for Mobile Apps and Websites
<br /><br />-Reviewing all features and improving their flows
<br /><br />-Managing to finish the project in a tight deadline
<br /><br />-Building Test Cases for the project

        </span>
      ),
    },
    {
      id: "104",
      tag: "Web Application",
      title: "AI Color Confirm",
      // img: work104,
      imgSmall: workSmall104,
      bg: "#DCDDE2",
      client: "Brickmate",
      langages: "Angular, PHP, MySQL",
      link: "https://colorconfirm.com",
      linkText: "colorconfirm.com",
      description:
      (
        <span>
Project duration: July 2022 - December 2023
<br /><br />Project details: 
<br /><br />The AI Color Confirmation service is a revolutionary color comparison solution that enables users to effortlessly compare fabric colors without the need for colorists. By harnessing the power of advanced algorithms, this service offers a time-saving and cost-effective alternative for users, eliminating the traditional reliance on subjective human assessments.
<br /><br />With the AI Color Confirmation service, users can expect objective and accurate figures and results, ensuring a reliable and consistent approach to color comparison. The algorithm program analyzes and compares the colors of different fabrics, providing users with an efficient and convenient solution that streamlines their decision-making process.
<br /><br />Project scale: medium scale
<br /><br />Project URL: https://colorconfirm.com/
<br /><br />Project type: from scratch
<br /><br />Project domain:
<br /><br />textile
<br /><br />Project role:
<br /><br />Project Manager, cum BA and Tester
<br /><br />Team size: 
<br /><br />5 members (1 PM, 2 BE, 2 Web)
<br /><br />Platforms: 
<br /><br />Web: User Web, Admin Web
<br /><br />Technical: 
<br /><br />Web: Angular JS
<br /><br />Backend: PHP, My SQL
<br /><br />Summary: 
<br /><br />-Managing and Analyzing for all tasks of iOS, Android, Backend and Web
<br /><br />-Mastering all Sprints of the project
<br /><br />-Managing task planning, arranging tasks for each sprint based on team capacity, project timeline and client's requires as well as giving details to each task and sub-task
<br /><br />-Structuring Jira Version, Epic, Stories and Tasks
<br /><br />-Managing tasks against burndown chart
<br /><br />-Analyzing all storyboards for the project
<br /><br />-Managing to finish the project in a tight deadline
<br /><br />-Building Test Cases for the project

        </span>
      ),
    },
    
    {
      id: "1",
      tag: "Business System",
      title: "Fulfilment System",
      // img: work1,
      imgSmall: workSmall1,
      bg: "#DCDDE2",
      client: "TPF Group",
      langages: ".NET, C#, SQL Server",
      link: "https://fulfilment.tpf.com.au/",
      linkText: "fulfilment.tpf.com.au",
      description:
      (
        <span>
Project duration: July 2017 - January 2020
<br /><br />Project details: 
<br /><br />TPF Sports Fulfillment system is highly complex, with multiple stages of order processing, inventory management, and shipping logistics that need to be carefully coordinated.
<br /><br /> It integrated multiple internal systems and third party data suppliers to handle and complete orders for Australian sporting clubs. 
<br /><br />This typically includes receiving and processing orders, picking and packing products, shipping them to the customer, and handling returns or exchanges quickly, accurately, and efficiently. 
<br /><br />With Personalisation system, Fulfilment Portal, Parcel Tracker, Shipment Management system, Loyalty Management system, WMS and Production system, TPF Sports Fulfilment system was one of strongest Fulfilment platforms in Australia.
<br /><br />Project scale: medium scale with high complexity 
<br /><br />Project URL: https://fulfilment.tpf.com.au/
<br /><br />Project type: from scratch
<br /><br />Project domain:
<br /><br />sports
<br /><br />Project role:
<br /><br />Project Manager, cum BA and Tester
<br /><br />Team size: 
<br /><br />7 members (1 PM, 1 BA, 1 Frontend, 1 Backend, 1 DB, 2 Testers)
<br /><br />Platforms: 
<br /><br />Web: User Web, Admin Web
<br /><br />Technical: 
<br /><br />ASP.NET, SQL Server
<br /><br />Achievements: 
<br /><br />-Improving Fulfilment system's features and functions
<br /><br />-Building Personalisation system
<br /><br />-Building Fulfilment Portal for clubs’ self administration
<br /><br />-Building Parcel Tracker
<br /><br />system
<br /><br />-Building Shipment Management system
<br /><br />-Building Loyalty Management system
<br /><br />-Building Production system
<br /><br />-Building Fulfilment and Financial reports on Portal
<br /><br />-Building On-demand related features

        </span>
      ),
    },   
    {
      id: "103",
      tag: "Web Application",
      title: "Mber+ Platform",
      // img: work103,
      imgSmall: workSmall103,
      bg: "#DCDDE2",
      //bg: "#FFF3FC",
      client: "TPF Sport",
      langages: ".NET, C#, SQL Server",
      link: "https://mberplus.com.au/",
      linkText: "mberplus.com.au",
      description:
      (
        <span>
Project duration: February 2020 - May 2022
<br /><br />Project details: 
<br /><br />Mber+ is an exciting web project that seamlessly integrates the membership data of Australian Sport Clubs with the Mber+ Shop & Admin and TPF Fulfillment system. This powerful integration brings forth a groundbreaking experience for members, revolutionizing how they redeem their membership packs, rewards, and shop for sports items.
<br /><br />With Mber+, members can enjoy a comprehensive platform that consolidates their membership information, making it easily accessible and user-friendly. The Mber+ Shop & Admin feature offers a seamless and intuitive interface, empowering members to effortlessly browse and select from a wide range of sports-related products and merchandise.
<br /><br />Project scale: medium scale with high complexity
<br /><br />Project URL: https://mberplus.com.au/
<br /><br />Project type: from scratch 
<br /><br />Project domain:
<br /><br />sports
<br /><br />Project role:
<br /><br />Project Manager
<br /><br />Team size: 
<br /><br />12 members (1 PM, 1 BA, 3 Frontend, 3 Backend, 1 DB, 3 Testers)
<br /><br />Platforms: 
<br /><br />Web: User Web, Admin Web
<br /><br />Technical: 
<br /><br />ASP.NET, SQL Server
<br /><br />Summary: 
<br /><br />-Building Shop template
<br /><br />-Building complex Admin template
<br /><br />-Integrating with 3rd party data providers
<br /><br />-Integrating with Payment Gateways
<br /><br />-Integrating with Fulfilment system
<br /><br />-Integrating with Parcel Tracker system
<br /><br />-Building Personalisation feature
<br /><br />-Building My account feature for members
<br /><br />-Building complicated membership packages
<br /><br />-Building administrative features for clubs
<br /><br />-Building report features for Admin system
<br /><br />-Building On-demand related features

        </span>
      ),
    }, 
    {
      id: "103",
      tag: "Web Application",
      title: "Cricket Blast Shop",
      // img: work103,
      imgSmall: workSmall105,
      bg: "#DCDDE2",
      //bg: "#FFF3FC",
      client: "Cricket Blast",
      langages: ".NET, C#, SQL Server",
      link: "https://shop.cricketblast.com.au/",
      linkText: "shop.cricketblast.com.au",
      description:
      (
        <span>
Project duration: March 2020 - December 2020
<br /><br />Project details: 
<br /><br />Cricket Blast Shop is the ultimate destination for participants to redeem their exclusive membership packs. With a wide range of products available, cricket centers can easily purchase top-quality equipment and packs from Cricket Blast Australia, ensuring they have everything they need for a thrilling cricket experience.
<br /><br />Project scale: medium scale
<br /><br />Project URL: https://shop.cricketblast.com.au/
<br /><br />Project type: from scratch
<br /><br />Project domain:
<br /><br />sports
<br /><br />Project role:
<br /><br />Project Manager, cum BA and Tester
<br /><br />Team size: 
<br /><br />8 members (1 PM, 2 Frontend, 2 Backend, 1 DB, 2 Testers)
<br /><br />Platforms: 
<br /><br />Web: User Web, Admin Web
<br /><br />Technical: 
<br /><br />ASP.NET, SQL Server
<br /><br />Summary: 
<br /><br />-Developing a comprehensive project plan that included timelines and resource allocation
<br /><br />-Ensuring the project meets all of Cricket Australia's strict requirements
<br /><br />-Successfully managing operation and Fulfilment of the Shop
<br /><br />-Leading a cross-functional team of designers, developers, operation team and warehouse team to ensure that all deliverables were completed on time and to the highest standards
<br /><br />-Building Personalisation system
<br /><br />-Integrating with Fulfilment system
<br /><br />-Integrating with 3rd party data providers
<br /><br />-Building Admin system
<br /><br />-Building report features for Admin system
<br /><br />-Integrating with Payment Gateway
<br /><br />-Building core features for Mber+ project

        </span>
      ),
    }, 
    {
      id: "101",
      tag: "Web Application",
      title: "Client Fulfilment Portal",
      // img: work101,
      imgSmall: workSmall101,
      bg: "#DCDDE2",
      client: "TPF Sport",
      langages: ".NET, C#, SQL Server",
      link: "https://portal.tpf.com.au/",
      linkText: "portal.tpf.com.au",
      description:
        "Client Fulfilment Portal was built to aim club admins to manage membership orders as well as membership details. By having Client Fulfilment Portal, club admins can now manage members' expectation and inquiries with ease. In addition, the portal has many built-in reports which offer clubs convenience in their decision making.",
    },
    {
      id: "2",
      tag: "Business System",
      title: "Production System",
      // img: work2,
      imgSmall: workSmall2,
      bg: "#E7D4BD",
      client: "TPF Group",
      langages: ".NET, C#, SQL Server",
      link: "https://production.tpf.com.au/",
      linkText: "production.tpf.com.au",
      description:
        "Production System was built in to create an advantage edge to TPF Fulfilment Membership business. In stead of processing standard item lists to members, Production System allows TPF Fulfilment to produce Personalised Items to members. With multiple production methods such as printing, embroidery and laser-engraving, Production System had been continuously upgraded to satisfy new production models. Managing personalised items to process correct items to correct members is another aspect which had been solved by Production System.",
    },
    
    {
      id: "3",
      tag: "Business System",
      title: "Shipment Management",
      // img: work3,
      imgSmall: workSmall3,
      bg: "#FEF2F2",
      client: "TPF Group",
      langages: ".NET, C#, SQL Server",
      link: "https://shipment.tpf.com.au/",
      linkText: "shipment.tpf.com.au",
      description:
        "In Covid-19 period, shipment management quickly became chaotic topic with long delays and high transportation costs. TPF Group had to adapt by changing shipment method from Air Freight to Sea Freight and breaking down shipping process into smaller pieces for saving costs. That brought in the requirement of a system that could manage all shipments in details to advise clients and members in a timely manner and support Finance team in controlling shipment costs. That was how Shipment Management system was built.",
    },
    {
      id: "4",
      tag: "Business System",
      title: "Quotation system",
      // img: work4,
      imgSmall: workSmall4,
      bg: "#E0CAF9",
      client: "TPF Group",
      langages: ".NET, C#, SQL Server",
      link: "https://quotation.tpf.com.au/",
      linkText: "quotation.tpf.com.au",
      description:
        "This is my first project which I has started my Project Management career. Quotation system was built to assist Account Managers to quickly advise quotations to clients with ease and convenience. Connecting to product system and supplier system as well as getting updated regularly, quotation system creates significant advantages in winning orders for TPF business.",
    },
    
    {
      id: "102",
      tag: "Web Application",
      title: "Membership Parcel Tracker",
      // img: work102,
      imgSmall: workSmall102,
      bg: "#FFD9E3",
      client: "TPF Sport",
      langages: ".NET, C#, SQL Server",
      link: "https://tracker.tpf.com.au/",
      linkText: "tracker.tpf.com.au",
      description:
        "Membership Parcel Tracker is a place where members can easily track their membership parcels with a high level of tracking details. With Membership Parcel Tracker, members can know exactly where their current membership packages are and receive notifications when parcels nearly arrive. It helps members save their time and efforts of contacting clubs' admins and improves customer experience towards building clubs' brandings.",
    },
   

    // {
    //   id: "105",
    //   tag: "Web Application",
    //   title: "Malllog Admin Websites",
    //   // img: work105,
    //   imgSmall: workSmall105,
    //   bg: "#E9FAFF",
    //   client: "Malllog",
    //   langages: "Angular, Node JS, MongoDB",
    //   link: "https://malllog.net",
    //   linkText: "malllog.net",
    //   description:
    //     "Malllog Admin sites manage various functions of Mobile Apps. The Admin sites include  Sellers Admin and Malllog Admin which together help Sellers and Malllog efficiently manage their stores and applications.",
    // },
  ];
  const [data, setData] = useState(workItems);

  const personalItems = [
    {
      id: "1",
      tag: "Portfolio",
      title: "Digital Portfolio",
      // img: personal1,
      imgSmall: personalSmall1,
      bg: "#E9FAFF",
      client: "Josh Tran",
      langages: "React JS",
      link: "https://tranhongtri.vercel.app/",
      linkText: "tranhongtri.vercel.app",
      description:
        "Welcome to my digital portfolio, featuring my first-ever React project! Within this portfolio, you'll discover a collection of my professional and personal projects, showcasing my journey and accomplishments.",
    },
    {
      id: "2",
      tag: "Portfolio",
      title: "Learning Journey",
      // img: personal2,
      imgSmall: personalSmall2,
      bg: "#FFFAE9",
      client: "Josh Tran",
      langages: "Next JS",
      link: "https://tranhongtri-learning.vercel.app/",
      linkText: "tranhongtri-learning",
      description:
        "Welcome to my Learning Journey and Certificate Portfolio! Within this project, I invite you to explore my continuous learning journey and discover the certifications I've obtained along the way.",
    },
    {
      id: "3",
      tag: "E-Commerce",
      title: "Softdrink Store",
      // img: personal3,
      imgSmall: personalSmall3,
      bg: "#FFFAE9",
      client: "Josh Tran",
      langages: "Next JS",
      link: "https://softdrink.vercel.app/",
      linkText: "softdrink.vercel.app",
      description:
        "Welcome to my personal E-Commerce project! Through this endeavor, I aim to deepen my understanding of programming for E-Commerce sites and explore various E-Commerce features.",
    },
    {
      id: "4",
      tag: "E-Commerce",
      title: "Today Fruit Store",
      // img: personal3,
      imgSmall: personalSmall4,
      bg: "#F5F6F8",
      client: "Josh Tran",
      langages: "Next JS",
      link: "https://todayfruit-store.vercel.app/",
      linkText: "todayfruit-store.vercel.app",
      description:
        "Welcome to my personal E-Commerce project! Through this endeavor, I aim to deepen my understanding of programming for E-Commerce sites and explore various E-Commerce features.",
    },
    {
      id: "5",
      tag: "Portfolio",
      title: "My CV",
      // img: personal2,
      imgSmall: personalSmall5,
      bg: "#F5F6F8",
      client: "Josh Tran",
      langages: "HTML, CSS, Bootstrap",
      link: "https://tranhongtri-cv.vercel.app/",
      linkText: "tranhongtri-cv",
      description:
        "To learn more about my qualifications and experience, I invite you to visit my online CV, which can be accessed by visiting this website. There, you will find a comprehensive overview of my professional background, skills, and achievements. Feel free to explore the details of my work history, educational background, and any notable projects or certifications I have acquired. This online CV serves as a convenient platform to showcase my expertise and potential contributions to your organization. Don't hesitate to navigate through the website to gain a deeper understanding of my capabilities and suitability for the desired position.",
    },
  ];
  const [personaldata, setPersonalData] = useState(personalItems);


  const certificateItems = [
    {
      id: "1",
      tag: "Project Management",
      title: "Project Management 1",
      img: certificate1,
      imgSmall: certificateSmall1,
      bg: "#E9FAFF",
      client: "Josh Tran",
      langages: "React JS",
      link: "https://jt17-certificate.vercel.app/",
      linkText: "jt17-certificate.vercel.app",
      description:
        "This is my first digital portfolio and also my first ever React project. Through my portfolio, you can learn more about work projects that I have done and also my personal projects.",
    },
    {
      id: "2",
      tag: "React JS",
      title: "React JS",
      img: certificate2,
      imgSmall: certificateSmall2,
      bg: "#DCDDE2",
      client: "Josh Tran",
      langages: "Next JS",
      link: "https://jt17-certificate.vercel.app/",
      linkText: "jt17-certificate.vercel.app",
      description:
        "This is my Certificate and Client Portfolio project. In this project, you can learn more about my client portfolio and my continuous learning journey.",
    },
    {
      id: "3",
      tag: "Design",
      title: "Figma",
      img: certificate3,
      imgSmall: certificateSmall3,
      bg: "#FFFAE9",
      client: "Josh Tran",
      langages: "Next JS",
      link: "https://jt17-certificate.vercel.app/",
      linkText: "jt17-certificate.vercel.app",
      description:
        "This is my personal E-Commerce project. This project will teach me more about programming for a E-Commerce site as well as E-Commerce features.",
    },
  ];
  const [certificatedata, setCertificateData] = useState(certificateItems);


  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One, not use
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "07",
      name: "Personal",
      link: "/home/personal",
      icon: <FiGrid />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Work",
      link: "/work",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "07",
      name: "Personal",
      link: "/personal",
      icon: <FiGrid />,
    },
    // {
    //   id: "05",
    //   name: "Certificate",
    //   link: "/certificate",
    //   icon: <FaCertificate />,
    // },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon1,
      title: "Client Management",
      des: "Managing projects for more than 70 international clients",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon6,
      title: "App Development",
      des: "Business Systems, Web Apps, CMS Admins and Mobile Apps",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "3",
      icon: icon2,
      title: "International",
      des: "13+ working years in international environments",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "4",
      icon: icon3,
      title: "Team Management",
      des: "Coaching teams with Agile mindset and high motivation",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "5",
      icon: icon5,
      title: "Technical Knowledge",
      des: "7+ years of Data Analysis, FrontEnd, BackEnd, Server, etc.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "6",
      icon: icon4,
      title: "Business Experience",
      des: "Expert in business, processes and operations",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    // {
    //   id: 1,
    //   date: "2008-2011",
    //   title: "Bachelor of Commerce",
    //   place: "RMIT University, HCMC, VN",
    //   bg: "#FFF4F4",
    // },
    

    // {
    //   id: 2,
    //   date: "2019 - Now",
    //   title: "Project Management Courses",
    //   place: "Udemy",
    //   bg: "#FFF1FB",
    // },

    // {
    //   id: 3,
    //   date: "2022 - Now",
    //   title: "Project Management Courses",
    //   place: "Linkedin Learning",
    //   bg: "#FFF4F4",
    // },
    {
      id: 1,
      date: "Jul 2017 - Jun 2022",
      title: "Project Manager",
      place: "TPF GROUP",
      bg: "#EEF5FA",

    },
    {
      id: 2,
      date: "May 2013 - Jun 2015",
      title: "Purchasing Coordinator",
      place: "TPF GROUP",
      bg: "#EEF5FA",
    },
    {
      id: 3,
      date: "Feb 2012 - Sep 2012",
      title: "WMS Admin",
      place: "ZALORA VIETNAM",
      bg: "#FFF1FB",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "Jul 2022 - Present",
      title: "Project Manager",
      place: "BRICKMATE GROUP",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "Jul 2015 - Jun 2017",
      title: "Logistics Coordinator",
      place: "TPF GROUP",
      bg: "#EEF5FA",
    },
    {
      id: 3,
      date: "Oct 2012 - Apr 2013",
      title: "Delivery Coordinator",
      place: "ZALORA VIETNAM",
      bg: "#FFF1FB",
    },

    // {
    //   id: 3,
    //   date: "Jul 2015 - Jun 2017",
    //   title: "Logistics Coordinator",
    //   place: "TPF GROUP",
    //   bg: "#EEF5FA",
    // },
    // {
    //   id: 4,
    //   date: "May 2013 - Jun 2015",
    //   title: "Purchasing Coordinator",
    //   place: "TPF GROUP",
    //   bg: "#EEF5FA",
    // },
    // {
    //   id: 5,
    //   date: "Feb 2012 - Apr 2013",
    //   title: "Delivery Coordinator & WMS Admin",
    //   place: "ZALORA VIETNAM",
    //   bg: "#EEF5FA",
    // },

  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2014 - 2015",
      title: "Jr. Web Developer",
      place: "Creative Gigs.",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2015-2017",
      title: "Best Freelancer",
      place: "Fiver & Upwork Level 2 & Top Rated",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Client Management",
      number: "86",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "English skills",
      number: "89",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Team Management",
      number: "87",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Project Management",
      number: "88",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "0333 421 255",
      item2: "0333 421 255",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "tranhongtri@gmail.com",
      item2: "tranhongtri@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "District 7",
      item2: "HCMC, Vietnam",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    handlePersonalData,
    handleCertificateData,
    data,
    personaldata,
    certificatedata,
    singleData,
    handleModelData,
    handlePersonalModelData,
    handleCertificateModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
