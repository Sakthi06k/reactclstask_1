import React from 'react'

function Triangle(props) {
    const {base,height}=props
    const areaOfTheTriangle=0.5*base*height;
  return (
    <div>
        <p>The area of the Triangle was :{areaOfTheTriangle}</p>
    </div>
  )
}

export default Triangle