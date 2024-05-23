const MainSection = () => {
  return (
    <article
      id="home"
      className="flex flex-col items-start md:col-span-1 md:justify-center lg:col-span-2 lg:grid lg:grid-cols-2"
    >
      <div className="mb-4 flex justify-center w-full lg:h-96 lg:col-span-2">
        <img
          className="w-2/3 lg:w-11/12"
          src="./assets/images/image-web-3-mobile.jpg"
          alt=""
        />
      </div>
      <h1 className="w-80 pl-3 my-3 font-bold text-4xl font-Inter sm:w-full lg:col-span-1 lg:w-96 lg:text-6xl">
        The Bright Future of Web 3.0?
      </h1>
      <p className="pl-3 flex flex-col font-light leading-6 text-sm font-InterRegular lg:col-span-1 lg:text-lg">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
        <a className="cursor mt-8 bg-softRed uppercase text-offWhite tracking-[0.2rem] py-2 px-5 text-center lg:col-start-2 lg:w-1/2">
          read more
        </a>
      </p>
    </article>
  );
};

export default MainSection;
