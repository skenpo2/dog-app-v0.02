import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  px-6 gap-y-8 grid md:grid md:grid-cols-2 md:gap-x-6 md:px-24 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:px-24">
        {data.map((dog) => {
          const { bred_for, breed_group, height, name, temperament, weight } =
            dog.breeds[0];
          return (
            <article
              className=" flex shadow-md h-36 justify-between items-center  gap-2 rounded-2xl w-full  md:flex md:flex-col md:h-auto  lg:flex lg:flex-col lg:h-auto "
              key={dog.id}
            >
              <div className=" w-5/12 rounded-2xl h-full md:w-full lg:w-full">
                <img
                  className="block w-full h-full object-cover rounded-2xl  md:h-48 lg:h-56"
                  src={dog.url}
                  alt="dog picture"
                />
              </div>

              <div className=" w-7/12 flex flex-col  p-2 gap-4 md:w-full md:p-4 lg:w-full lg:p-6">
                <div className=" flex items-center justify-between w-full">
                  <h3 className="text-lg font-sans font-bold"> {name}</h3>
                  <span className="block">
                    <FaRegHeart className="text-red-500" />
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  <span className=" font-semibold text-red-500 text-sm">
                    Bred for:
                  </span>
                  {'  '}
                  {bred_for || 'No Information Available'}
                </p>
                {/* <p>{breed_group} </p>
                <p> {height.metric} </p>
                <p> {temperament}</p>
                <p>{weight.metric} </p> */}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default DogList;
