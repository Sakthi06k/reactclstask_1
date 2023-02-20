import React from 'react'

function Sphere(props) {
    const {radius}=props
    const areaOfTheSphere=4*3.14*radius*radius;
  return (
    <div>
        <p>The area of the Sphere was: {areaOfTheSphere}</p>
    </div>
  )
}

export default Sphere