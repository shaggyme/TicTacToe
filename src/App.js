import logo from './logo.svg';
import './App.css';

import Board from './TicTacToeGames/Board';

function App() {
  return (
    <div className="App">
    <h1 style={{fontFamily: "'Courier New', Courier, monospace", textAlign: "center"}}> Tic Tac Toe Game </h1>
      <Board />
    </div>
  );
}

export default App;
