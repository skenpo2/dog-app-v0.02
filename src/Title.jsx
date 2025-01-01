import React from 'react';
import { FaShieldDog } from 'react-icons/fa6';

const Title = () => {
  return (
    <header>
      {<FaShieldDog className="logo" />}
      <h1>Furever Friends</h1>
    </header>
  );
};

export default Title;
