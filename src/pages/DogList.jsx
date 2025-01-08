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
