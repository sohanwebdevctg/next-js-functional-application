import React from 'react';
import AboutBanner from '../components/about/AboutBanner';
import OurGoal from '../components/about/OurGoal';

const AboutPage = () => {
  return (
    <div>
      {/* about banner section start */}
      <AboutBanner></AboutBanner>
      {/* about banner section end */}
      {/* our goal section start */}
      <OurGoal></OurGoal>
      {/* our goal section end */}
    </div>
  );
};

export default AboutPage;