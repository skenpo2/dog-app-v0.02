import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  px-6 gap-y-8 grid">
        {data.map((dog) => {
          const { bred_for, breed_group, height, name, temperament, weight } =
            dog.breeds[0];
          return (
            <article
              className=" flex shadow-md h-36 justify-between items-center  gap-2 rounded-2xl w-full "
              key={dog.id}
            >
              <div className=" w-5/12 rounded-2xl h-full">
                <img
                  className="block w-full h-full object-cover rounded-2xl"
                  src={dog.url}
                  alt="dog picture"
                />
              </div>

              <div className=" w-7/12 flex flex-col  p-2 gap-4">
                <div className=" flex items-center justify-between w-full">
                  <h3 className="text-lg font-sans font-bold"> {name}</h3>
                  <span className="block">
                    <FaRegHeart className="text-red-500" />
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  <span className=" font-semibold text-red-500 text-sm">
                    Bred for :{' '}
                  </span>{' '}
                  {bred_for}{' '}
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
