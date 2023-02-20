import React from 'react'
import Circle from './Circle'
import Square from './Square'
import Rectangle from './Rectangle'
import Triangle from './Triangle'
import Sphere from './Sphere'
// import Area from './Area'
import Perimeter, { Area } from './Area';
function Shapes(props) {
    // const {length}=props
  return (
    <div>
    <Circle radius={props.values.radius}/>
    <Square side={props.values.side}/>
    <Rectangle length={props.values.length} breath={props.values.breath}/>
    <Triangle base={props.values.base} height={props.values.height}/>
    <Sphere radius={props.values.radius}/>
    <Area/>
    <Perimeter/>
    </div>
  )
}

export default Shapes