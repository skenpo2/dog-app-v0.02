import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../App';

// API URL
const url = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
  import.meta.env.VITE_API_KEY
}`;

// Loader function to preload data
export const dogListLoader = async () => {
  const queryKey = ['dogs'];

  // Check if data is already cached
  const cachedData = queryClient.getQueryData(queryKey);

  if (!cachedData) {
    // Fetch and cache data
    await queryClient.prefetchQuery(queryKey, async () => {
      const response = await axios.get(url);
      return response.data;
    });
  }

  // Return cached data
  return queryClient.getQueryData(queryKey);
};

// DogList component
const DogList = () => {
  // Load data preloaded by the loader
  const preloadedData = useLoaderData();

  // Use React Query to manage and cache the data
  const {
    data = preloadedData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['dogs'],
    queryFn: async () => preloadedData, // Use preloaded data if available
    initialData: preloadedData, // Set preloaded data as the initial state
  });

  // Handle loading state
  if (isLoading) {
    return <p>Loading dogs...</p>;
  }

  // Handle error state
  if (isError) {
    return <p>Error loading dogs: {error.message}</p>;
  }

  // Render the list of dogs
  console.log(data);
  return (
    <h1>hello</h1>
    // <section>
    //   <h1>Dog List</h1>
    //   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    //     {data.map((dog) => (
    //       <Link
    //         to={`/${dog.id}`}
    //         key={dog.id}
    //         state={{ dog }} // Pass the dog object as state
    //         style={{
    //           display: 'block',
    //           textDecoration: 'none',
    //           textAlign: 'center',
    //         }}
    //       >
    //         <article>
    //           <img
    //             src={dog.url}
    //             alt="dog"
    //             width="150px"
    //             height="150px"
    //             style={{ borderRadius: '8px', objectFit: 'cover' }}
    //           />
    //           <p>View Dog</p>
    //         </article>
    //       </Link>
    //     ))}
    //   </div>
    // </section>
  );
};

export default DogList;
