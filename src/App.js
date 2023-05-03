import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/ContextProvider";
import NotFound from "./Share/NotFound";
import Preview from "./Share/Preview";

const About = lazy(() => import("./Pages/About/About"));
const AboutTwo = lazy(() => import("./Pages/About/AboutTwo"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Home = lazy(() => import("./Pages/Home/Home"));
const HomePage = lazy(() => import("./Pages/Home/HomePage"));
const HomeTwo = lazy(() => import("./Pages/Home/HomeTwo"));
const Portfilo = lazy(() => import("./Pages/Portfilo/Portfilo"));
const PortfiloTwo = lazy(() => import("./Pages/Portfilo/PortfiloTwo"));
const Personal = lazy(() => import("./Pages/Personal/Personal"));
const PersonalTwo = lazy(() => import("./Pages/Personal/PersonalTwo"));
const Resume = lazy(() => import("./Pages/Resume/Resume"));
const ResumeTwo = lazy(() => import("./Pages/Resume/ResumeTwo"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/preview" element={<Preview />} />
              <Route path="/home" element={<Home />}>
                <Route index element={<HomePage />} />
                <Route path="homePage" element={<HomePage />} />
                <Route path="resume" element={<Resume />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="works" element={<Portfilo />} />
                <Route path="personal" element={<Personal />} />
              </Route>
              <Route path="/" element={<HomeTwo />}>
                <Route index element={<AboutTwo />} />
                <Route path="about" element={<AboutTwo />} />
                <Route path="resume" element={<ResumeTwo />} />
                <Route path="work" element={<PortfiloTwo />} />
                <Route path="personal" element={<PersonalTwo />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
