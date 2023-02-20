import React from 'react'

function Square(props) {
    const {side}=props;
    const areaOfTheSquare=side*side
  return (
    <div>
        <p>The area of the Square : {areaOfTheSquare}</p>
    </div>
  )
}

export default Square