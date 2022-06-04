import SectionWrapper from "./SectionWrapper";

const NewsletterSection = () => {
  return (
    <SectionWrapper>
      <div className="newsletter border-4 border-blue-600 rounded-t-[3rem] sm:rounded-t-[7rem] p-7 sm:p-10 pb-0 sm:pb-0 mb-5 sm:mb-10 max-w-screen-md mx-auto">
        <div className="header text-center">
          <h2>Subscribe to our newsletter</h2>
          <p className="text-sm max-w-md mx-auto">
            Stay updated with our educational news. We promise not to spam with
            update. Subscribe now.
          </p>
        </div>
        <form className="bg-slate-100 w-fit mx-auto">
          <div className="input-group flex gap-2 justify-center mt-5 -mb-5 px-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white border-2 border-orange-700 outline-none p-2 rounded-md w-full sm:w-96 md:w-[30rem]"
            />
            <button className="rounded-md btn-primary py-2 px-4">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterSection;
