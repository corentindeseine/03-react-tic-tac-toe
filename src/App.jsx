import Player from './components/Player';
import Header from './components/Header';
import GameBoard from './components/GameBoard';



function App() {
  return (
    <main>
      <Header />
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='Player 1' symbol='X'/>
          <Player initialName='Player 2' symbol='O'/>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App;
