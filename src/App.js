import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';


function App() {
  const [showTrip, setShowTrip] = useState(true)
  return (
    <div className="App">
      <button onClick={()=> setShowTrip(false)}>Hide Trips</button>
     {showTrip && <TripList/>}
    </div>
  );
}

export default App;
