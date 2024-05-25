import { newData } from "../data";

const NewSection = () => {
  return (
    <article
      id="new"
      className="flex flex-col w-full items-center justify-center my-5 lg:col-start-3 lg:my-0 lg:items-start lg:mb-10 "
    >
      <div className="bg-veryDarkBlue w-5/6">
        <div className="py-2 px-5">
          <h2 className="text-softOrange text-3xl font-semiBold font-Inter py-5 lg:text-4xl">
            New
          </h2>
          {newData.map((data, index: number) => (
            <div key={index}>
              <h3 className="text-xl mb-2 font-bold text-InterRegular text-offWhite">
                {data.title}
              </h3>
              <p className="text-sm text-grayishBlue">{data.desc}</p>
              <hr className="w-72 my-8 font-100 text-grayishBlue self-center" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default NewSection;
