import './App.css';
// import Circle from './Circle';
import Shapes from './Shapes';

function App() {
  const values={radius:5,length:10,breath:8,side:15,height:12,base:13}
  // const r=5;
  return (
    <div className="App">
      <h1>FootBall</h1>
      <img src='wc1684112.jpg' alt='Football' height={"400px"} width={"800px"} ></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, <br></br> illo. Voluptatum corrupti corporis earum voluptate odio commodi eius temporibus voluptatem labore iure, quas tenetur fugiat <br></br> deleniti dolor architecto aspernatur quod reiciendis magnam blanditiis eaque ratione ea asperiores natus assumenda. Quasi aliquam sint deserunt <br></br> aspernatur qui ab nihil porro magni repellendus.</p>
      <button>Book your Match</button>
      <br></br>
      <br></br>
      <Shapes values={values}/>
      {/* <Circle radius={r}/> */}
    </div>
  );
}

export default App;
