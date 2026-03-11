
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

      <Player name='Neimar' goal='200'></Player>
      <Player name='Ambappe' goal='157'></Player>
      <Player name='Ronaldo' goal='250'></Player>

      <Salami event='Eid' salami='200'></Salami>
      <Salami event='BirthDay' salami='500'></Salami>
      <Salami event='BreackUp' salami='100'></Salami>
      <Salami event='Graduation'></Salami>
      

    </>
  )
}


function Salami({event, salami = 0 }){
  return(
    <div className='style'>
      <h2>Event: {event}</h2>
      <h4>Salami: {salami}</h4>
    </div>
  )
}


function Player({name, goal}){
  return(
    <div className='player'>
      <h2>Player Name: {name}</h2>
      <h4>Goal Score: {goal}</h4>
    </div>
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
      <h4 style={{color: 'darkcyan'}}>Product Details Under Bellow</h4>
      <p>Pd Name: {props.name}</p>
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
