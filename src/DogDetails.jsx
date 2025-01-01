import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IoPawOutline } from 'react-icons/io5';
import { GiSittingDog } from 'react-icons/gi';
const DogDetails = ({
  dog,
  showDetails,
  setShowDetails,
  getDogDescription,
}) => {
  return (
    <article
      className={
        showDetails ? 'visible details-container' : 'details-container'
      }
    >
      <div className="details-image">
        <img src={dog.url} alt={`Dog ${dog.id}`} loading="lazy" />
        <FaArrowLeft
          className="image-back"
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(false);
          }}
        />

        <FaHeart className="image-like" />
      </div>
      <div className="overlay-down">
        <div className="overlay-info-container">
          {dog.breeds.length > 0 ? (
            <div className="overlay-info">
              <div className="info-left">
                <h3>
                  {dog.breeds[0].name}
                  <IoPawOutline
                    style={{ paddingLeft: '0.2rem', fontSize: '1.2rem' }}
                  />
                </h3>
                <p className="bred">
                  {dog.breeds[0].bred_for || 'Not Available'}
                </p>
              </div>
              <div className="info-right">
                <p className="breed">
                  <GiSittingDog className="sitting-dog" />
                  {dog.breeds[0].breed_group || 'Not Available'}
                </p>
              </div>
            </div>
          ) : (
            <div className="span-class">Breed information not available</div>
          )}
        </div>
        <div className="dog-properties">
          <div className="life-span">
            <h4>Life Span</h4>
            <p>{dog.breeds[0].life_span}</p>
          </div>
          <div className="weight">
            <h4>Height</h4>
            <p>{dog.breeds[0].height.metric}(m)</p>
          </div>
          <div className="height">
            <h4>Weight</h4>
            <p>{dog.breeds[0].weight.metric}(kg)</p>
          </div>
        </div>
        <div className="dog-description">
          <p>{getDogDescription(dog.breeds[0])}</p>{' '}
        </div>
        <div className="btn-container">
          <button>
            <p>Adopt</p>
            <IoPawOutline style={{ marginLeft: '4px', color: 'white' }} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default DogDetails;
