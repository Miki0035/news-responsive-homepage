import { cardData } from "../data";
const Card = () => {
  return (
    <article className="flex justify-center items-center w-full my-5 lg:col-span-3  lg:my-5">
      <div className="flex flex-col  w-full mx-4 my-4 justify-evenly md:flex-row md:justify-evenly">
        {cardData.map((data, index: number) => (
          <div className="flex my-2 md:flex-col lg:flex-row" key={index}>
            <div className="w-48 md:self-center md:w-54 lg:w-32">
              <img className="w-full" src={data.image} alt="pc image" />
            </div>
            <div className="flex flex-col w-5/6 px-2 justify-start md:w-48 lg:w-64">
              <h4 className="text-grayishBlue text-3xl font-bold">
                {data.number}
              </h4>
              <h5 className="text-md my-1 text-veryDarkBlue font-Inter font-bold hover:text-softRed cursor-pointer">
                {data.title}
              </h5>
              <p className="text-sm leading-loose text-darkGrayishBlue my-2 font-InterRegular font-light">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Card;
