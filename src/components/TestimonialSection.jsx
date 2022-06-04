import SectionWrapper from "./SectionWrapper";
import TestimonialCard from "./TestimoniaCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, John Co.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, omnis repellendus.",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "PRO, John Co.",
      text: "Clorer sit amet consectetur adipisicing elit. Voluptas, omnis repellendus.",
    },
    {
      id: 3,
      name: "Johnny Donee",
      position: "CTO, Feeli Co.",
      text: "Lorem ipsum dolor sit a adipisicing elit. Voluptas, omnis repellendus.",
    },
  ];

  return (
    <SectionWrapper
      title="What our clients are saying"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, natus!"
    >
      <div className="slider mt-5 relative">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          items={1}
          margin={10}
          nav
          dots
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              position={testimonial.position}
              text={testimonial.text}
            />
          ))}
        </OwlCarousel>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;
