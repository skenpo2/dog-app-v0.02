import { useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';

const DogList = () => {
  const { dogList: data } = useSelector((store) => store.dog);
  return (
    <>
      <section className="mx-auto  px-8 py-4  gap-2">
        {data.map((dog) => (
          <article key={dog.id}>
            <img
              src={dog.url}
              alt="dog picture"
              width={'100px'}
              height={'100px'}
            />
          </article>
        ))}
      </section>
    </>
  );
};

export default DogList;
