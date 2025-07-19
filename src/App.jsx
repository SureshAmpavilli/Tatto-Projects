import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAdvocate from "./pages/RegisterAdvocate";
import ClientRegistration from "./pages/ClientRegistration";

import Header from "./components/Header";
import LayoutPage from "./components/Profile-Layout";
import MatchesPage from "./pages/MatchsPage";
import ActivityPage from "./pages/Activitypage";
import FraudAlert from "./pages/FraudAlert";
import TermsOfService from "./pages/TermsOfService";
import ThirdPartyTermsForAdvocates from "./pages/Third-Party";
import PrivacyPolicyPage from "./pages/Privacy-Policy";
import CookiePolicy from './pages/Cookie-Policy';
import PrivacyFeatures from './pages/Privacy-Features';
import SummonsNotices from './pages/Summons';
import Grievances from './pages/Grievances';
import RefundPolicy from './pages/Refund-Policy';
import HelpPage from './pages/Help';
import EAdvocateCentersPage from './pages/E-AdovacateCenters';
import FindAdvocatesPage from './pages/Find Advocates';
import LegalResourcesPage from './pages/Legal Resources';
import HowItWorksPage from './pages/Howitworks';
import SupportPage from './pages/Support';
import MembershipPage from './pages/Membership options';
import CareersPage from './pages/Careers';
import JoinPlatformPage from './pages/Join Platform';
import FindClientsPage from './pages/Find Clients';
import PricingPage from './pages/Pricing';
import SuccessStoriesPage from './pages/Success Stories';
import AdvancedSearchPage from './pages/Advanced Search';
import SiteMapPage from './pages/Site Map';
import CreateBlogPage from './pages/Create blog';
import AboutUsPage from './pages/About Us';
import AdvocateWorks from './pages/Advocate_Works';
import ClientWorks from './pages/Client_AdvocateWorks';
import Credites from './pages/Credits';
import Blog from './pages/Create blog';




// ✅ Layout to show Header only on Home page ("/")
function OnlyHomeLayout({ children }) {
  const { pathname } = useLocation();
  const showHeader = pathname === "/";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {showHeader && <Header />}
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <OnlyHomeLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/advocate" element={<RegisterAdvocate />} />
          <Route path="/register/client" element={<ClientRegistration />} />
             <Route path="/frud-alert" element={<FraudAlert />} />
              <Route path="/terms-service" element={<TermsOfService />} />
                <Route path="/third-party" element={<ThirdPartyTermsForAdvocates />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/privacy-features" element={<PrivacyFeatures />} />
      <Route path="/summons-notices" element={<SummonsNotices />} />
      <Route path="/grievances" element={<Grievances />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
       <Route path="/help" element={<HelpPage />} />
      <Route path="/e-advocate-centers" element={<EAdvocateCentersPage />} />
       <Route path="/find-advocates" element={<FindAdvocatesPage />} />
      <Route path="/legal-resources" element={<LegalResourcesPage />} />
      <Route path="/howitworks" element={<HowItWorksPage />} />
      <Route path="/support" element={<SupportPage />} />
       <Route path="/membership" element={<MembershipPage />} />
        <Route path="/careers" element={<CareersPage />} />
          <Route path="/join" element={<JoinPlatformPage />} />
      <Route path="/find-clients" element={<FindClientsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/success-stories" element={<SuccessStoriesPage />} />
       <Route path="/advanced-search" element={<AdvancedSearchPage />} />
      <Route path="/site-map" element={<SiteMapPage />} />
      <Route path="/create-blog" element={<CreateBlogPage />} />
      <Route path="/about" element={<AboutUsPage />} />
       <Route path="/advocate_works" element={<AdvocateWorks />} />
       <Route path="/client_works" element={<ClientWorks />} />
         <Route path="/credites" element={<Credites />} />
   <Route path="/blog" element={<Blog />} />
  

          {/* Profile Layout and Nested Routes */}
          <Route path="/layout" element={<LayoutPage />}>
            <Route index element={<Navigate to="matches" />} />
            <Route path="matches" element={<MatchesPage />} />
            <Route path="activity" element={<ActivityPage />} />
           
          </Route>
        </Routes>
      </OnlyHomeLayout>
    </Router>
  );
}

export default App;
