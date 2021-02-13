import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import ModalComponent from './components';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const Modal = () =>  {
  return (
    <div className="license-modal">
      <h1>モーダル</h1>
    </div>
  )
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div>
        <h2>Header!</h2>
      </div>
      {Home()}
      <Switch>
        <Route path="/social">
          <div>
            <h1>social!</h1>
          </div>
        </Route>
        <Route path="/">
          <div>
            <h1>index!</h1>
          </div>
        </Route>
      </Switch>
      <div>
        <h3>footer!</h3>
        <div onClick={()=>setIsModalOpen(true)}>
          <h3>ボタン</h3>
        </div>
        <ModalComponent modalIsOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)} children={Modal()} contentLabel="license-modal" />
      </div>
    </Router>
  );
}


export default App;
