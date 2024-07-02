import AboutBanner from "@/components/about/AboutBanner";
import OurGoal from "@/components/about/OurGoal";
import OurMember from "@/components/about/OurMember";
import Services from "@/components/about/Services";


const AboutPage = () => {
  return (
    <div>
      {/* about banner section start */}
      <AboutBanner></AboutBanner>
      {/* about banner section end */}
      {/* our goal section start */}
      <OurGoal></OurGoal>
      {/* our goal section end */}
      {/* our member section start */}
      <OurMember></OurMember>
      {/* our member section end */}
      {/* services section start */}
      <Services></Services>
      {/* services section end */}
    </div>
  );
};

export default AboutPage;