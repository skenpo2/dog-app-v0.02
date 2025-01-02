import { NavLink, useLocation } from 'react-router-dom';

const SingleDog = () => {
  const location = useLocation();
  const dog = location.state?.dog; // Access the passed dog data

  if (!dog) {
    return <p>No data available for this dog.</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img src={dog.url} alt={`Image of dog`} width="150px" />
      <div style={{ marginTop: '10px' }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'blue' }}>
          Go back
        </NavLink>
      </div>
    </div>
  );
};

export default SingleDog;
