import React from 'react'

function Rectangle(props) {
    const {length,breath}=props
    const areaOfTheRectangle=length*breath
  return (
    <div>
        <p>The area of the rectangle was: {areaOfTheRectangle}</p>
    </div>
  )
}

export default Rectangle