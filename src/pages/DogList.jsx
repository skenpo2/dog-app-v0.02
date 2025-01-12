import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  grid grid-cols-4 gap-4 px-8 py-4">
        {data.map((dog) => {
          const { bred_for, breed_group, height, name, temperament, weight } =
            dog.breeds[0];
          return (
            <article
              className="bg-slate-100 flex flex-col shadow-md items-center rounded-lg "
              key={dog.id}
            >
              <img
                className="block w-full h-48 object-cover rounded-lg"
                src={dog.url}
                alt="dog picture"
                width={'100px'}
                height={'100px'}
              />

              <div className=" flex flex-col gap-4 m-4 p-2">
                <div className=" flex items-center justify-between w-full">
                  <h3 className="text-xl font-sans font-bold"> {name}</h3>
                  <span className="block">
                    <FaRegHeart />
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  {' '}
                  <span className=" font-normal text-md">Bred for : </span>{' '}
                  {bred_for}{' '}
                </p>
                <p>{breed_group} </p>
                <p> {height.metric} </p>
                <p> {temperament}</p>
                <p>{weight.metric} </p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default DogList;
