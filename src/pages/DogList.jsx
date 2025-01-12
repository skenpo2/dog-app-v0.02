import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  grid grid-cols-4 gap-4 px-8 py-4">
        {data.map((dog) => (
          <article
            className="bg-slate-100 flex flex-col justify-center shadow-md items-center rounded-lg  pb-6"
            key={dog.id}
          >
            <img
              className="block w-full h-40 object-cover rounded-lg"
              src={dog.url}
              alt="dog picture"
              width={'100px'}
              height={'100px'}
            />

            <div className="">
              <p> image text here</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default DogList;
