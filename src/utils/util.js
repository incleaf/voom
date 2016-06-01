import React from 'react';

export const splitText = (text) =>
  text.split('\n').map((item, index) => (
    <span key={index}>
      {item}
      <br />
    </span>
));
