import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 lg:mt-0 mt-7">
          <p className="font-semibold text-red-500">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error normal-case bg-red-500 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
