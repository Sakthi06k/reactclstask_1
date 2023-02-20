import React from 'react'

function Circle(props) {
    const {radius}= props
    const areaOfTheCircle=3.14*radius*radius
  return (
    <div>
        <p>The Area of the Circle: {areaOfTheCircle}</p>
        </div>
  )
}

export default Circle