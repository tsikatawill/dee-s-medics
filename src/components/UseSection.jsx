import { FaCheckDouble } from "react-icons/fa";
import UseImg from "../images/easy-to-use.jpg";
const UseSection = () => {
  return (
    <section className="use">
      <div className="container py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="left">
          <div className="image-wrapper rounded-[3rem] border border-gray-400 overflow-hidden">
            <img src={UseImg} alt="easy.jpg" />
          </div>
        </div>
        <div className="right">
          <div className="header">
            <h2 className="capitalize text-blue-700 text-3xl font-semibold">
              Very Easy way to use
            </h2>
            <p className=" text-sm  mx-auto">
              Lorem ipsm dolor sit consectetur, adipisicing elit. Doloremque in
              et exercitationem iste lor lorems!
            </p>
          </div>

          <div className="steps flex flex-col gap-10 mt-10">
            <div className="step-card flex gap-2">
              <div className="icon rounded-full p-2 text-white bg-red-400 h-fit">
                <FaCheckDouble />
              </div>
              <div className="text">
                <h4>Install the app</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dolores laboriosam placeat, neque incidunt eius?
                </p>
              </div>
            </div>
            <div className="step-card flex gap-2">
              <div className="icon rounded-full p-2 text-white bg-orange-400 h-fit">
                <FaCheckDouble />
              </div>
              <div className="text">
                <h4>Login or signup</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dolores laboriosam placeat, neque incidunt eius?
                </p>
              </div>
            </div>
            <div className="step-card flex gap-2">
              <div className="icon rounded-full p-2 text-white bg-green-400 h-fit">
                <FaCheckDouble />
              </div>
              <div className="text">
                <h4>Login or signup</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dolores laboriosam placeat, neque incidunt eius?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseSection;
