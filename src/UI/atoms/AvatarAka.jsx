import React from 'react';

const AvatarAka = ({ src, alt, rounded = 'full', size = 'w-10 h-10' }) => {
  return (
    <img
      className={`${size} rounded-${rounded}`}
      src={src}
      alt={alt}
    />
  );
};

export default AvatarAka;
