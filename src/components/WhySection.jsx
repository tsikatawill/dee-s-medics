import React from "react";
import ReasonCard from "./ReasonCard";
import SectionWrapper from "./SectionWrapper";

const WhySection = () => {
  return (
    <SectionWrapper
      title="Why choose dee's medics"
      description="Lorem ipsm dolor sit consectetur, adipisicing elit. Doloremque in et    exercitationem iste lor lorems!"
    >
      <div className="reason-cards grid grid-cols-3 gap-5 mt-10">
        <ReasonCard title="Easy to use" />
        <ReasonCard title="Saves your money" />
        <ReasonCard title="24/7 online treatment" />
      </div>
    </SectionWrapper>
  );
};

export default WhySection;
