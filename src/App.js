import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
     <Login></Login>
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
