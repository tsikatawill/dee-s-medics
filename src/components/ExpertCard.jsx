const ExpertCard = ({ image, name, title, variant }) => {
  return (
    <div
      className={`expert-card bg-white hover:shadow-lg border-4 rounded-3xl shadow-gray-400 ${
        variant === "news"
          ? "w-full sm:w-[80%] md:w-full mx-auto"
          : "w-full lg:w-60"
      } `}
    >
      <div
        className={`image-wrapper ${
          variant === "news" ? "h-72" : "h-60"
        } rounded-3xl overflow-hidden`}
      >
        <img
          src={image}
          alt="doctor.jpg"
          className="object-cover h-full w-full hover:scale-110"
        />
      </div>
      <div className={`details ${variant !== "news" && "text-center"}  p-5`}>
        <p className="text-blue-700 font-semibold">{name}</p>
        <p
          className={`text-sm py-1 ${
            variant !== "news" && "whitespace-nowrap"
          } `}
        >
          {title}
        </p>
        {variant === "news" && (
          <button className="text-red-500">Read more</button>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;
