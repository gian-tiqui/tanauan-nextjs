import Cgtv from "./components/sub-components/Cgtv";
import CityHighlights from "./components/sub-components/CityHighlights";
import Divider from "./components/sub-components/Divider";
import Footer from "./components/sub-components/Footer";
import LogoDivider from "./components/sub-components/LogoDivider";
import MobileApp from "./components/sub-components/MobileApp";
import NewsCarousel from "./components/sub-components/NewsCarousel";
import PublicServices from "./components/sub-components/PublicServices";
import StatusUpdates from "./components/sub-components/StatusUpdates";
import VideoHeader from "./components/sub-components/VideoHeader";

const Home = () => {
  return (
    <div className="static w-full h-full">
      <div id="video-header">
        <VideoHeader />
      </div>
      <div id="divider-news">
        <Divider text="News & Publication" />
      </div>
      <div id="news-carousel">
        <NewsCarousel />
      </div>
      <div id="divider-more-news">
        <Divider text="More news" />
      </div>
      <div id="public-services">
        <PublicServices />
      </div>
      <div id="mobile-app">
        <MobileApp />
      </div>
      <div id="logo-divider">
        <LogoDivider />
      </div>
      <div id="cgtv">
        <Cgtv />
      </div>
      <div id="status-updates">
        <StatusUpdates />
      </div>
      <div id="city-highlights">
        <CityHighlights />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
