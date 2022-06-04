import { FaCamera } from "react-icons/fa";

const ReasonCard = ({ title, text, icon }) => {
  return (
    <div className="reason-card bg-white border border-gray-300 rounded-xl hover:shadow-xl transition hover:shadow-slate-300 p-3">
      <div className="icon bg-orange-700 bg-opacity-20 rounded-full w-fit p-2 text-orange-700 mb-2 text-xl">
        <FaCamera />
      </div>
      <h4 className="card-title font-semibold">{title}</h4>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore
        distinctio eum facilis!
      </p>
      <button className="cursor-pointer">Read more...</button>
    </div>
  );
};

export default ReasonCard;
