import React from 'react';
import './App.css';
import ShitDashboard from './ShitDashboard';
import AddCase from './AddCase';
import ShitDialog from './ShitDialog';

function App(props) {
  return (
    <div id='ShitAllofPage'>
      <ShitDashboard/>
      <hr/>
      <AddCase/>
      {/* <ShitDialog/> */}
      
    </div>
  );
}

export default App;
