import './App.css'
import Maison from './Components/Maison/Maison'
import NavBar from './Components/NavBar'
import Person from './Components/Person/Person'
import Player from './Components/Player/Player'
import Voiture from './Components/Voiture/Voiture'
import Animal from './Components/Animal/Animal'
import Machine from './Components/Machine a sous/Machine'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      <div className="audi">
        <Voiture />
      </div>

      <div className="main">
        <div className="nav">
          <NavBar />
        </div>

        <div>
          <h1>Hello World !</h1>

          <Person />

          <Player />

          <Maison />

          <Animal bete="Singe" />
          {/* <Animal bete="Lion" /> */}
          {/* <Animal bete="Aigle" />
          <Animal bete="Cheval" /> */}

          <h1>Machines à sous!</h1>
          <Machine s1="🍒" s2="🍒" s3="🍒" />
          <Machine s1="🍇" s2="🍒" s3="🍊" />

          <hr></hr>
          <Counter />

          <hr></hr>

        </div>
      </div>
    </div>
  )
}

export default App
