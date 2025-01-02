import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const DogList = () => {
  const url = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },

    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetch when switching tabs
    refetchOnReconnect: false, // Prevent refetch when reconnecting to the internet
    refetchInterval: false,
  });

  if (isLoading) {
    return <p>Loading ............</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <section>
      {data.map((dog) => (
        <Link
          to={`/${dog.id}`}
          key={dog.id}
          state={{ dog }} // Passing the entire dog data object
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
      ))}
    </section>
  );
};

export default DogList;
