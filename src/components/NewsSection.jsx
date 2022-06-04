import ExpertCard from "./ExpertCard";
import SectionWrapper from "./SectionWrapper";
import Covid from "../images/injection.jpg";
import Climb from "../images/climbing.webp";
import Drugs from "../images/drugs.jpg";

const NewsSection = () => {
  return (
    <SectionWrapper
      title="Important News"
      description="LoLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae!"
    >
      <div className="news-items grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-center">
        <ExpertCard
          image={Drugs}
          name="Drug abuse"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum."
          variant="news"
        />
        <div className="flex flex-col gap-10">
          <ExpertCard
            image={Covid}
            name="Covid-19 vaccine"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum."
            variant="news"
          />
          <ExpertCard
            image={Climb}
            name="Monkey pox on the rise"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum."
            variant="news"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NewsSection;
