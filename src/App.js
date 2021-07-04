import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link , Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

const Home = () => {

  const [inp, setInp] = useState(50); 

  useEffect(() => {    
    return () => {
      //code cleanup
      console.log("Home component unmounted..!!");
    }
  }, [])

  useEffect(() => {
    console.log("useEffect - conditonal rendering..!!");
  }, [inp])

  return (
    <div>
      <h3>This is home page</h3>
      <h3>{inp}</h3>
      <button onClick={()=>{  setInp(inp+1) }}>Increment inp</button>
      <br/>
      <Link to="/about">Go to about</Link>
    </div>
  )
}

const About = () => {

  const [name, setName] = useState("Amrit");
  const [age, setAge] = useState(31);
  const [no, setno] = useState(2);

  const increment = () => {
    setno((prevNo) => prevNo + 1);
    setno((prevNo) => prevNo + 1);
    setno((prevNo) => prevNo + 1);
  }

  useEffect(() => {
    console.log("useEffect called in about page, bahaves like componentDidMount()")
    
  }, [])

  useEffect(() => {
    //this will get called once at load time
    //plus on every age increment
    console.log("useEffect called in for age..!!") 
  }, [age])

  return (
    <div>
      <h3>This is about page</h3>
      <h3> React Hooks</h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{no}</h3>
      <button onClick={()=>setName("Monty")}>Change name</button>
      <br/>
      <button onClick={()=>setAge(age+1)}>Change age</button>
      <br/>
      <button onClick={()=>increment()}>Increment by 3</button>

      <br/>
    </div>
  )
}


export default App;
