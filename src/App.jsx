import Player from './components/Player';
import Header from './components/Header';


function App() {
  return (
    <main>
      <Header />
      <div id='game-container'>
        <ol id='players'>
          <Player name='Player 1' symbol='X'/>
          <Player name='Player 2' symbol='O'/>
        </ol>
      </div>
    </main>
  )
}

export default App;
