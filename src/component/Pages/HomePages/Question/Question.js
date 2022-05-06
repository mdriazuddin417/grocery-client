import React from "react";
import img from "../../../../image/bg_1.jpg";

const Question = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-16 p-5">
      <p className="header  mb-5  text-center ">Frequently Asked Questions</p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <img src={img} alt="" className="w-full h-full rounded shadow" />
        </div>
        <div>
          <p className=" text-md font-thin text-gray-500 mb-5">
            QUESTIONS & ANSWER
          </p>

          <div className="accordion h-full" id="accordionExample5">
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne5">
                <button
                  className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne5"
                  aria-expanded="true"
                  aria-controls="collapseOne5"
                >
                  Should I buy organic vegetables?
                </button>
              </h2>
              <div
                id="collapseOne5"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne5"
              >
                <div className="accordion-body py-4 px-5">
                  Organic foods are generally good for you and for the
                  environment. Even though organic fruits and vegetables are
                  more expensive than conventional produce, the true long term
                  benefits to health and environment are suggested to be
                  sizeable.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingTwo5">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo5"
                  aria-expanded="false"
                  aria-controls="collapseTwo5"
                >
                  How do you identify organic vegetables?
                </button>
              </h2>
              <div
                id="collapseTwo5"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo5"
              >
                <div className="accordion-body py-4 px-5">
                  Organic vegetables look similar to conventional vegetables.
                  Since there is no use of chemical fertilizers and pesticides,
                  they may often look natural, smaller, irregular and less
                  attractive. A dot, scar or hole is not uncommon. Identify by
                  trusted source and not the product.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingThree5">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree5"
                  aria-expanded="false"
                  aria-controls="collapseThree5"
                >
                  Is organic food safer?
                </button>
              </h2>
              <div
                id="collapseThree5"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree5"
              >
                <div className="accordion-body py-4 px-5">
                  Organic farming does not employ chemical fertilizers &
                  pesticides, does not utilize sewage water and hence has lower
                  pesticide residues and contamination in food. This translates
                  to safer food. Natural and biological control agents are
                  considered to be less toxic and to leave less or no residues,
                  though this is to be proven conclusively.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
