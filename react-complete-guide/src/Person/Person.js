import React from 'react';

const person = (gorgonzola) => {
  return (
    <div>
      <p>I'm {gorgonzola.name}. I am {gorgonzola.age}</p>
      <p>{gorgonzola.children}</p>
    </div>
  )
}

export default person;