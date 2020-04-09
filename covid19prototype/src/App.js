import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Widget from './components/Widget/Widget';
import Search from './components/Search/Search';
// import Banner from './components/Banner/Banner';
// import Table from './components/TableComponent/Table/Table';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route path="/"  component={Header} />
      {/* <Route path="/" exact component={Banner} /> */}
      <Route path="/globalstat" component={Widget} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;
