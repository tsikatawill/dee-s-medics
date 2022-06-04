const TestimonialCard = ({ name, position, text }) => {
  return (
    <div className="testimonial-card text-white w-full mx-auto border-2 py-10 cursor-move">
      <div className="bg  w-[90%] sm:w-[80%] md:w-[60%] mx-auto relative">
        <div className="bg-middle rounded-2xl bg-blue-700 opacity-30 h-60 w-full -right-4 -top-4 sm:-right-10 sm:-top-10 absolute w-xl mx-auto"></div>
        <div className="bg-middle rounded-2xl bg-blue-700 opacity-50 h-60 w-full -right-2 -top-2 sm:-right-5 sm:-top-5 absolute w-xl mx-auto"></div>
      </div>
      <div className="main bg-blue-700 p-5 text-center h-60 flex flex-col relative justify-center rounded-2xl  w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <div className="header mb-2">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-sm mb-2">{position}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
