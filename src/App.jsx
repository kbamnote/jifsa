import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense, lazy } from "react";
import Loading from "./components/common/Loading";
import StructuredData from "./components/seo/StructuredData";

// Lazy imports for all pages to improve initial load time
const LandingPage = lazy(() => import("./components/pages/landingPage/LandingPage"));
const ContactUs = lazy(() => import("./components/pages/contactUsPage/ContactUs"));
const HeroGallery = lazy(() => import("./components/pages/galleryPage/HeroGallery"));
const ResedentPage = lazy(() => import("./components/pages/resedentialPage/ResedentPage"));
const JifsaVandM = lazy(() => import("./components/pages/aboutUsPage/dropdown/jifsaVandM/JifsaVandM"));
const MembershipAndAcc = lazy(() => import("./components/pages/aboutUsPage/dropdown/membership-and-acc/MembershipAndAcc"));
const CoursePage = lazy(() => import("./components/pages/coursesPage/qualificationPage/CoursePage"));
const OnlineCoursePage = lazy(() => import("./components/pages/coursesPage/onlineCoursePage/OnlineCoursePage"));
const FaqPage = lazy(() => import("./components/pages/coursesPage/faqPage/FaqPage"));
const AdvisoryBoard = lazy(() => import("./components/pages/aboutUsPage/dropdown/advisory-board/AdvisoryBoard"));
const ChairmanMessage = lazy(() => import("./components/pages/aboutUsPage/dropdown/chairman-message/ChairmanMessage"));
const VchairpersonMessage = lazy(() => import("./components/pages/aboutUsPage/dropdown/vice-chairperson-message/VchairpersonMessage"));
const DirectorsMessage = lazy(() => import("./components/pages/aboutUsPage/dropdown/director-message/DirectorsMessage"));
const RecruitedStudent = lazy(() => import("./components/pages/placementPage/recruitedStudent/RecruitedStudent"));
const StudentTestimonial = lazy(() => import("./components/pages/placementPage/studentTestimonialPage/StudentTestimonial"));
const ScopeFire = lazy(() => import("./components/pages/placementPage/scopeFireAndSafety/ScopeFire"));
const DemandPage = lazy(() => import("./components/pages/placementPage/demandAndSupplyPage/DemandPage"));
const FutureProspectAndScope = lazy(() => import("./components/pages/placementPage/futureProspects/FutureProspectAndScope"));
const SafetyProgramAndCareer = lazy(() => import("./components/pages/placementPage/safetyProgram/SafetyProgramAndCareer"));
const PlacementCellPage = lazy(() => import("./components/pages/placementPage/placementCell/PlacementCellPage"));
const PressReleasePage = lazy(() => import("./components/pages/placementPage/pressReleasePage/PressReleasePage"));
const AdmissionForm = lazy(() => import("./components/pages/studendCornerPage/admisssionFormPage/AdmissionForm"));
const PracticalTrainingForm = lazy(() => import("./components/pages/studendCornerPage/practicalTrainingForm/PracticalTrainingForm"));
const PlacementFormPage = lazy(() => import("./components/pages/studendCornerPage/placementFormPage/PlacementFormPage"));
const StudentPage = lazy(() => import("./components/pages/studendCornerPage/studentComplaintPage/StudentPage"));
const CertificationPage = lazy(() => import("./components/pages/studendCornerPage/certificateVerificationPage/CertificationPage"));
const MarksheetPage = lazy(() => import("./components/pages/studendCornerPage/marksheetCorectionPage/MarksheetPage"));
const Careers = lazy(() => import("./components/pages/careers/Careers"));

// Loading fallback component - only for landing page
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <Loading />
  </div>
);

function App() {
  return (
    <>
      <Routes>
        {/* Only the landing page has loading spinner */}
        <Route path="/" element={
          <Suspense fallback={<LoadingFallback />}>
            <LandingPage />
          </Suspense>
        } />
        {/* All other routes load without loading spinner */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<HeroGallery />} />
        <Route path="/resedent" element={<ResedentPage />} />
        <Route path="/vision-mission" element={<JifsaVandM />} />
        <Route path="/membership" element={<MembershipAndAcc />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/directors-message" element={<DirectorsMessage />} />
        <Route path="/qualifications" element={<CoursePage />} />
        <Route path="/online-courses" element={<OnlineCoursePage />} />
        <Route path="/fire-safety-faqs" element={<FaqPage />} />
        <Route path="/recruited-students" element={<RecruitedStudent />} />
        <Route path="/student-testimonials" element={<StudentTestimonial />} />

        {/* Placement-related routes */}
        <Route path="/scope-fire-safety" element={<ScopeFire />} />
        <Route path="/demand-supply-fire-safety" element={<DemandPage />} />
        <Route path="/future-prospects" element={<FutureProspectAndScope />} />
        <Route path="/safety-career" element={<SafetyProgramAndCareer />} />
        <Route path="/placement-cell" element={<PlacementCellPage />} />
        <Route path="/press-release" element={<PressReleasePage />} />

        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/practical-training-forms" element={<PracticalTrainingForm />} />
        <Route path="/placement-forms" element={<PlacementFormPage />} />
        <Route path="/student-complaint" element={<StudentPage />} />
        <Route path="/certificate-verification" element={<CertificationPage />} />
        <Route path="/marksheet-correction" element={<MarksheetPage />} />
        <Route path="/vice-chairperson-message" element={<VchairpersonMessage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <SpeedInsights />
      <StructuredData />
    </>
  );
}

export default App;