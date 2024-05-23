import { cardData } from "../data";
const Card = () => {
  return (
    <article className="flex flex-col w-full my-2 md:items-center md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-3 lg:items-start">
      <div className="flex  w-full mx-4 my-4 justify-evenly md:w-4/5 lg:w-5/6">
        {cardData.map((data, index: number) => (
          <div key={index}>
            <div className="w-48">
              <img className="w-full" src={data.image} alt="pc image" />
            </div>
            <div className="flex flex-col w-full px-2 min-[500px]:self-center lg:self-start">
              <h4 className="text-grayishBlue text-3xl font-bold lg:text-4xl">
                {data.number}
              </h4>
              <h5 className="text-md my-1 text-veryDarkBlue font-Inter font-bold">
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
