import './App.css';

//UI Components
import Header from './components/large/Header'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

//IMPORT REDUX/STATE MANAGEMENT COMPONENTS
import { Provider } from 'react-redux';
import setAuthToken from './components/utlis/setAuthToken'
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Login/>
        <Register/>
      </Provider>
    </div>
  );
}

export default App;
