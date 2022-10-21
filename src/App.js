
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';

function App() {

  const [flights, setFlights] =useState([]);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:9090/list")
    .then(result => result.json())
    .then(result_json => setFlights(result_json))
  }, []);


  return (
    <div className="App">
     <Form vector = {flights} />
    </div>
  );
}

export default App;
