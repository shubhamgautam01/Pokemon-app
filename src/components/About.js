import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () =>{
  return(
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis consectetur, repellat qui culpa dolores, quasi maiores repudiandae omnis sapiente natus voluptatibus minima excepturi at facere repellendus placeat delectus? Atque.</p>
    </div>
  )
}

export default Rainbow(About);