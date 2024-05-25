import mobileImage from "../assets/images/image-web-3-mobile.jpg";
import desktopImage from "../assets/images/image-web-3-desktop.jpg";

const MainSection = () => {
  return (
    <article
      id="home"
      className="flex flex-col items-start my-3 mx-2 lg:grid lg:grid-cols-2 lg:col-span-2 lg:mt-10 lg:mx-0"
    >
      <picture className="mb-4 flex justify-center w-full lg:col-span-2">
        <source media="(min-width: 1024px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="" className="w-3/5 lg:w-4/5" />
      </picture>
      <div className="lg:col-start-1 md:flex md:justify-start lg:justify-center">
        <h1 className="w-2/3 my-3 font-bold text-3xl font-Inter md:text-5xl ">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <p className="flex flex-col font-light leading-6 text-sm font-InterRegular md:text-lg md:self-center lg:col-start-2 lg:text-xl md:w-5/6">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
        <a className="cursor-pointer hover:text-offWhite hover:bg-veryDarkBlue  mt-8 bg-softRed uppercase text-offWhite tracking-[0.2rem] py-2 px-5 text-center w-48">
          read more
        </a>
      </p>
    </article>
  );
};

export default MainSection;
