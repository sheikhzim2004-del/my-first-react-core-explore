
import './App.css'

function App() {


  return (
    <>
      <h1>Vite + React Core Concept</h1>
      <Person></Person>
      <Isrich></Isrich>
      <Isrich></Isrich>
      <Me></Me>
      <Devloper name='Najiba' teck='Lead Actress'></Devloper>
      <Devloper name='Kamal' teck='Hero/Actor'></Devloper>
      <Devloper name='Moushumi' teck='JS'></Devloper>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px'}}>
      <Product name='Phone' brand='Symphony' price='22000' expensive='true' color='Chocolate'></Product>
      <Product name='Car' brand='Lamborgini' price='6400000' expensive='true' color='White'></Product>
      <Product name='Bike' brand='Gixer' price='500000' expensive='false' color='Black'></Product>
      </div>

    </>
  )
}

function Product(props){
  return(
    <div style={{
      color: 'sky',
      fontSize: '26px',
      padding: '20px',
      margin: '2px',
      border: '3px dotted green',
      borderRadius: '20px',
    }}>
      <h4>Product Details Under Bellow</h4>
      <p>Product Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>Expensive: {props.expensive}</p>
      <p>color: {props.color}</p>
    </div>
  )
}

function Devloper(props){
  return(
    <div style={{
      color: 'tomato',
      border: '5px solid green',
      padding: '5px',
      margin: '3px',
      borderRadius: '20px'
    }}>
      <h3>Devloper: {props.name}</h3>
      <p>Tecknology: {props.teck}</p>
    </div>
  )
}


function Person(){
  const institute = 'Programing Hero';
  const name = 'Kamal';
  return(
    <>
    <h2>I am a student by: {institute}</h2>
    <p>My name is: {name}</p>
    </>
  )
}


function Isrich(){
  const isRich = 'true';
  return(
    <div>
      <h3 className='style'>I am a Rich person: {isRich}</h3>
    </div>
  )
}

const leftText = {
  color: 'red',
  textAlign: 'left'
}

function Me(){
  return(
    <div>
      <h2>Whatever I have</h2>
      <ul style={leftText}>
        <li>A Computer</li>
        <li>Smart Watch</li>
        <li>Mackbook</li>
        <li>Two Girlfriend</li>
      </ul>
    </div>
  )
}

export default App
