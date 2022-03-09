import logo from './logo.svg';
import './App.css';
import {Title} from './components/Title';
import {DiceApp} from './components/DiceApp';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <DiceApp/>
       
        
      </header>
    </div>
  );
}

export default App;
