import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  px-8 gap-y-8 grid">
        {data.map((dog) => {
          const { bred_for, breed_group, height, name, temperament, weight } =
            dog.breeds[0];
          return (
            <article
              className=" flex shadow-md items-center rounded-lg w-full "
              key={dog.id}
            >
              <img
                className="block w-full h-56 object-cover rounded-lg"
                src={dog.url}
                alt="dog picture"
              />

              <div className=" flex flex-col w-full m-4 p-4 gap-4">
                <div className=" flex items-center justify-between w-full">
                  <h3 className="text-xl font-sans font-bold"> {name}</h3>
                  <span className="block">
                    <FaRegHeart className="text-red-500" />
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  <span className=" font-semibold text-red-500 text-md">
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
