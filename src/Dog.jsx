import React, { useState } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { IoPawOutline } from 'react-icons/io5';
import DogDetails from './DogDetails';
const Dog = ({ dog, getDogDescription }) => {
  const [isLike, setIsLike] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="dog-container" onClick={() => setShowDetails(true)}>
      <div className="image-container">
        <img src={dog.url} alt={`Dog ${dog.id}`} loading="lazy" />
      </div>
      <div className="info-container">
        <div className="details">
          {dog.breeds.length > 0 ? (
            <div className="dog-details">
              <h3>
                {dog.breeds[0].name}{' '}
                <IoPawOutline
                  style={{ paddingLeft: '0.2rem', fontSize: '0.85rem' }}
                />
              </h3>
              <p className="bred">
                <div className="span-class">Bred For</div>{' '}
                {dog.breeds[0].bred_for || 'Not Available'}
              </p>
              <p className="breed">
                <GiSittingDog className="sitting-dog" />
                {dog.breeds[0].breed_group || 'Not Available'}
              </p>
              {/* <p className="temperament">
                <div className="span-class">Temperament</div>{' '}
                {dog.breeds[0].temperament}
              </p> */}
            </div>
          ) : (
            <div className="span-class">Breed information not available</div>
          )}
        </div>
        <div className="like">
          {isLike ? (
            <FaHeart
              className="like-icon"
              onClick={(e) => {
                e.stopPropagation();
                setIsLike(!isLike);
              }}
            />
          ) : (
            <TiHeartOutline
              className="like-icon"
              onClick={(e) => {
                e.stopPropagation();
                setIsLike(!isLike);
              }}
            />
          )}
        </div>
      </div>
      <DogDetails
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        dog={dog}
        getDogDescription={getDogDescription}
      />
    </article>
  );
};

export default Dog;
