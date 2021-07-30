import './App.css';
import Header from './components/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/profile';
import Room from './components/room';
import Signin from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/profile" component={Profile} />
        <Route path="/chat" component={Room} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
