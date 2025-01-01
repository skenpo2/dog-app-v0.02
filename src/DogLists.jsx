import React, { useState, useEffect } from 'react';
import Dog from './Dog';
import Search from './Search';
import Loading from './Loading';
import Title from './Title';
import { useGlobalContext } from './Context';

const DogLists = () => {
  const { dogName } = useGlobalContext();
  //   const [dogs, setDogs] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   console.log(dogName);

  //   // function to generate a short description for a dog breed
  //   const getDogDescription = (breed) => {
  //     if (!breed) return 'No description available.';
  //     return `${breed.name} is known for being ${
  //       breed.temperament || 'of unique temperament'
  //     }. ${breed.bred_for ? `Originally bred for ${breed.bred_for}.` : ''}`;
  //   };

  //   useEffect(() => {
  //     const fetchDogs = async () => {
  //       setIsLoading(true);
  //       setError(null);

  //       const headers = new Headers({
  //         'Content-Type': 'application/json',
  //         'x-api-key':
  //           'live_a9drXwPxYrLZApKKi9C0cnVfI2wRmicL2haMYtmTbChl8lPXU7giy8DMDdYmzIJQ',
  //       });

  //       const url = new URL('https://api.thedogapi.com/v1/images/search');
  //       url.searchParams.append('size', 'med');
  //       url.searchParams.append('mime_types', 'jpg');
  //       url.searchParams.append('format', 'json');
  //       url.searchParams.append('has_breeds', 'true');
  //       url.searchParams.append('limit', '15');

  //       const requestOptions = {
  //         method: 'GET',
  //         headers: headers,
  //       };

  //       try {
  //         const response = await fetch(url, requestOptions);
  //         if (!response.ok) throw new Error(`Error: ${response.status}`);
  //         const data = await response.json();
  //         setDogs(data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchDogs();
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <div className="container">
  //         <Loading />
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }

  return console.log(dogName);
  //     <section className="container">
  //       <Title />
  //       <Search />
  //       <div className="dogs-container">
  //         {dogs.map((dog) => (
  //           <Dog key={dog.id} dog={dog} getDogDescription={getDogDescription} />
  //         ))}
  //       </div>
  //     </section>
  //   );
};

export default DogLists;
