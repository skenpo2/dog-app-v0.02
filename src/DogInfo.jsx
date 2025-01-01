import React, { useState, useEffect } from 'react';

const DogInfo = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // function to generate a short description for a dog breed
  const getDogDescription = (breed) => {
    if (!breed) return 'No description available.';
    return `${breed.name} is known for being ${
      breed.temperament || 'of unique temperament'
    }. ${
      breed.bred_for ? `Originally bred for ${breed.bred_for}.` : ''
    } Lifespan: ${breed.life_span || 'Unknown.'}`;
  };

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true);
      setError(null);

      const headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key':
          'live_a9drXwPxYrLZApKKi9C0cnVfI2wRmicL2haMYtmTbChl8lPXU7giy8DMDdYmzIJQ',
      });

      const url = new URL('https://api.thedogapi.com/v1/images/search');
      url.searchParams.append('size', 'med');
      url.searchParams.append('mime_types', 'jpg');
      url.searchParams.append('format', 'json');
      url.searchParams.append('has_breeds', 'true');
      url.searchParams.append('limit', '10');

      const requestOptions = {
        method: 'GET',
        headers: headers,
      };

      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setDogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (isLoading) {
    return <p>Loading dogs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Dog Info</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {dogs.map((dog) => (
          <div
            key={dog.id}
            style={{
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '8px',
              width: '200px',
            }}
          >
            <img
              src={dog.url}
              alt={`Dog ${dog.id}`}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            {dog.breeds.length > 0 ? (
              <div>
                <h3>{dog.breeds[0].name}</h3>
                <p>{getDogDescription(dog.breeds[0])}</p>
              </div>
            ) : (
              <p>Breed information not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogInfo;
