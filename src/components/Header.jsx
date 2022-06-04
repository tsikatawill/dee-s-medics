import HeaderImg from "../images/header.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container flex gap-2 py-5 sm:py-10">
        <div className="left w-full md:w-2/3">
          <div className="left-inner flex flex-col items-center text-center sm:text-left sm:items-start">
            <h1 className="font-medium text-[2.5rem] sm:text-[3.5rem] leading-[3.5rem] sm:leading-[4rem] md:leading-[4.5rem] mb-5">
              Advancing Public health through{" "}
              <span className=" border-4 border-orange-700 rounded-[50%]">
                digital
              </span>{" "}
              technology.
            </h1>
            <p className="text-xl my-5">
              They provide for care and change your lives. Taking care of your
              health is our priority.
            </p>
            <ul className="flex gap-2 md:gap-5 text-sm sm:text-xl whitespace-nowrap flex-wrap justify-center">
              <li className="flex gap-2 items-center">
                <FaCheckCircle />
                Best outcome.
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle />
                Better care.
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle />A Healthier you.
              </li>
            </ul>
            <div className="cta mt-7">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="right hidden md:inline-flex md:w-1/3">
          <div className="right-inner rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-md shadow-gray-600">
            <img src={HeaderImg} alt="header.jpg" style={{ height: "450px" }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
