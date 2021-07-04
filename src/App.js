import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Amrit");
  const [age, setAge] = useState(31);
  const [no, setno] = useState(2);

  const increment = () => {
    setno((prevNo) => prevNo + 1);
    setno((prevNo) => prevNo + 1);
    setno((prevNo) => prevNo + 1);
  }

  return (
    <div className="App">
     <h1> React Hooks</h1>
     <h3>{name}</h3>
     <h3>{age}</h3>
     <h3>{no}</h3>
     <button onClick={()=>setName("Monty")}>Change name</button>
     <br/>
     <button onClick={()=>setAge(age+1)}>Change age</button>
     <br/>
     <button onClick={()=>increment()}>Increment by 3</button>
    </div>
  );
}



export default App;
