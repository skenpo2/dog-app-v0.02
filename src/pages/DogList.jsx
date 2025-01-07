import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm';

const url = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
  import.meta.env.VITE_API_KEY
}`;

const dogQuery = (searchDog) => {
  return {
    queryKey: ['dog', searchDog || ''],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchDog = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(dogQuery(searchDog));
    return { searchDog };
  };

const DogList = () => {
  const searchDog = useLoaderData();
  const { data } = useQuery(dogQuery(searchDog));
  console.log(data);

  return (
    <>
      <SearchForm />
      <section>
        <h1>hello word </h1>
        {/* {data.map((dog) => (
          <Link
            to={`/${dog.id}`}
            key={dog.id}
            // state={{ dog }} // Passing the entire dog data object
          >
            <article>
              <img
                src={dog.url}
                alt="dog picture"
                width={'100px'}
                height={'100px'}
              />
            </article>
          </Link>
        ))} */}
      </section>
    </>
  );
};

export default DogList;
