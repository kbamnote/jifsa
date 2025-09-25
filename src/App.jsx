import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ContactUs from "./components/pages/contactUsPage/ContactUs";
import HeroGallery from "./components/pages/galleryPage/HeroGallery";
import ResedentPage from "./components/pages/resedentialPage/ResedentPage";
import JifsaVandM from "./components/pages/aboutUsPage/dropdown/jifsaVandM/JifsaVandM";
import MembershipAndAcc from "./components/pages/aboutUsPage/dropdown/membership-and-acc/MembershipAndAcc";
import CoursePage from "./components/pages/coursesPage/qualificationPage/CoursePage";
import OnlineCoursePage from "./components/pages/coursesPage/onlineCoursePage/OnlineCoursePage";
import FaqPage from "./components/pages/coursesPage/faqPage/FaqPage";
import AdvisoryBoard from "./components/pages/aboutUsPage/dropdown/advisory-board/AdvisoryBoard";
import ChairmanMessage from "./components/pages/aboutUsPage/dropdown/chairman-message/ChairmanMessage";
import VchairpersonMessage from "./components/pages/aboutUsPage/dropdown/vice-chairperson-message/VchairpersonMessage";
import DirectorsMessage from "./components/pages/aboutUsPage/dropdown/director-message/DirectorsMessage";
import RecruitedStudent from "./components/pages/placementPage/recruitedStudent/RecruitedStudent";
import StudentTestimonial from "./components/pages/placementPage/studentTestimonialPage/StudentTestimonial";
import ScopeFire from "./components/pages/placementPage/scopeFireAndSafety/ScopeFire";
import DemandPage from "./components/pages/placementPage/demandAndSupplyPage/DemandPage";
import FutureProspectAndScope from "./components/pages/placementPage/futureProspects/FutureProspectAndScope";
import SafetyProgramAndCareer from "./components/pages/placementPage/safetyProgram/SafetyProgramAndCareer";
import PlacementCellPage from "./components/pages/placementPage/placementCell/PlacementCellPage";
import PressReleasePage from "./components/pages/placementPage/pressReleasePage/PressReleasePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<HeroGallery />} />
        <Route path="/resedent" element={<ResedentPage />} />
        <Route path="/vision-mission" element={<JifsaVandM />} />
        <Route path="/membership" element={<MembershipAndAcc />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route
          path="/vice-chairperson-message"
          element={<VchairpersonMessage />}
        />
        <Route path="/directors-message" element={<DirectorsMessage />} />
        <Route path="/qualifications" element={<CoursePage />} />
        <Route path="/online-courses" element={<OnlineCoursePage />} />
        <Route path="/fire-safety-faqs" element={<FaqPage />} />
        <Route path="/recruited-students" element={<RecruitedStudent />} />
        <Route path="/student-testimonials" element={<StudentTestimonial />} />

        {/* Placement-related routes from both branches */}
        <Route path="/scope-fire-safety" element={<ScopeFire />} />
        <Route path="/demand-supply-fire-safety" element={<DemandPage />} />
        <Route path="/future-prospects" element={<FutureProspectAndScope />} />
        <Route path="/safety-career" element={<SafetyProgramAndCareer />} />
        <Route path="/placement-cell" element={<PlacementCellPage />} />
        <Route path="/press-release" element={<PressReleasePage />} />
      </Routes>

      <SpeedInsights />
    </>
  );
}

export default App;
