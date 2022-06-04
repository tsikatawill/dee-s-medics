import ExpertCard from "./ExpertCard";
import Nurse1 from "../images/nurse1.jpg";
import Nurse2 from "../images/nurse2.jpg";
import Nurse3 from "../images/nurse3.jpg";
import SectionWrapper from "./SectionWrapper";

const ExpertSection = () => {
  return (
    <SectionWrapper
      title="Meet our expert doctors"
      description="Lorem ipsm dolor sit consectetur, adipisicing elit. Doloremque in et
      exercitationem iste lor lorems!"
    >
      <div className="expert-cards flex justify-between overflow-auto pb-5 sm:pb-0 sm:overflow-hidden gap-5 mt-10">
        <ExpertCard
          name="Dr. Janet Tsikata"
          title="Psychiatric Specialist"
          image={Nurse1}
        />
        <ExpertCard
          name="Dr. Casprine A."
          title="Peadiatric Specialist"
          image={Nurse2}
        />
        <ExpertCard
          name="Dr. Osemu IX"
          title="Gynaecological Specialist"
          image={Nurse3}
        />
      </div>
    </SectionWrapper>
  );
};

export default ExpertSection;
