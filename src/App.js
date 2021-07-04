import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link , Route} from 'react-router-dom';
import Jokes from './components/Jokes';

class App extends React.Component {

  myheading = React.createRef()

  componentDidMount(){
    console.log("heading innerText = ", this.myheading.current.innerText);
  }
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <h2 ref={this.myheading}>React Hooks</h2>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/jokes" component={Jokes} />
        </div>
      </BrowserRouter>
    )
  }
  
}

const Columns = () => {
    return (
      <React.Fragment>
        <td>Monty</td>
        <td>Honey</td>
        <td>Mickey</td>
      </React.Fragment>
    )
}

function MyFragment(){
   return (
     <div>
        <h3>This data is from MyFragment</h3>
        <h3>name : Amrit</h3>
        <h3>age : 31</h3>
        <table style={{border:'1 blue solid'}}>
          <tbody>
            <tr>
              <Columns />
            </tr>
          </tbody>
        </table>
     </div>
   )
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
      <MyFragment />
      <h3>{inp}</h3>
      <button onClick={()=>{  setInp(inp+1) }}>Increment inp</button>
      <br/>
      <Link to="/about">Go to about</Link>
      <br/>
      <Link to="/jokes">Go to jokes</Link>
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
