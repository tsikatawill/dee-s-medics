const ExpertCard = ({ image, name, title, variant }) => {
  return (
    <div
      className={`expert-card bg-white hover:shadow-lg rounded-3xl shadow-gray-400 ${
        variant === "news" ? "w-full sm:w-[80%] md:w-full mx-auto" : "w-72"
      } `}
    >
      <div
        className={`image-wrapper ${
          variant === "news" ? "h-72" : "h-52 w-52 sm:h-72 sm:w-72 mx-auto"
        } rounded-3xl overflow-hidden bg-red-400`}
      >
        <img
          src={image}
          alt="doc"
          className={`hover:scale-110 ${variant === "news" && "w-full h-full"}`}
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
