import logo from './logo.svg';
import './App.css';
import AddExpenses from './Components/AddExpenses';
import ListExpenses from './Components/ListExpenses';

function App() {
  return (
    <div className="App container mx-auto">
        <AddExpenses />
        <ListExpenses />
    </div>
  );
}

export default App;
