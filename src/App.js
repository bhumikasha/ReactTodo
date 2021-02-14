import './App.css';
import Todo from './component/todo';
import Quiz from './component/quiz';

function App() {
  return (
    <div className="App">
      <header>
        <Todo></Todo>
        <Quiz></Quiz>
      </header>
    </div>
  );
}

export default App;
