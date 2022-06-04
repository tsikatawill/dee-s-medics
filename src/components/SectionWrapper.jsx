import React from "react";

const SectionWrapper = ({ title, description, children }) => {
  return (
    <section className="expert-doctors">
      <div className="container py-5 sm:py-10">
        <div className="header text-center">
          <h2 className="capitalize text-blue-700 text-3xl font-semibold">
            {title}
          </h2>
          <p className="max-w-sm text-sm  mx-auto">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
