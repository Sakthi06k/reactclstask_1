import React from 'react'
class Perimeter extends React.Component{
    render(){
        var l=5
        var b=10
        var peri=2*(l+b)
        return (
            <div>
                <p>Perimeter={peri}</p>
            </div>
        )
    }
}
class Area extends React.Component{
    render(){
        var l=5
        var b=10
        var area=(l+b)
        return(
            <div>
                <p>Area={area}</p>
            </div>
        )
    }
}

export default Perimeter;
export { Area };