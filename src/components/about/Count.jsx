'use client'

import CountUp from "react-countup";

const Count = ({item}) => {
  return (
    <CountUp start={0}
    end={item}
    scrollSpyDelay={200}
    enableScrollSpy="true"
    duration={10.00} />
  );
};

export default Count;