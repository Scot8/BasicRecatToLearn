
import './App.css';
import { useState, useEffect } from 'react';




function Copy() {


 

  const [title, setTitle] = useState("Its not working now! ");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You have changed this to " + counter);
  }, [counter]);

  const updateTitle = () => {setTitle("Its working now ");}
const updateCounterP = () => {setCounter(counter+1);}
const updateCounterM = () => {setCounter(counter-1);}

  return(
  <>
  <button onClick = {updateTitle}>Set Title</button>
<p>Title: {title}</p>

<button onClick = {updateCounterM}>-</button>
<p>Counter: {counter}</p>
<button onClick = {updateCounterP}>+</button>
</>
  )
}


const Person = (props) => {
  return(
    <>
    <h2>Name: {props.name}</h2>
    <h2>Last Name: {props.ln}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  
  const eg1 = "Scott";
const eg2 = null;





  return (
    <>{ /*start tag*/ }

    <div className = "Example1"> 
      <>
      <h1>Example 1</h1>
      <h2>{eg1}</h2>
        </>
      </div>

{
// we need <> </> for rendering out 2 tags h1 and h2
}

    <div className = "Example2">
      <>
      <h1> Example 2 </h1>
        {eg2 ? ( <> <h2> {eg2} </h2> </>) : 

        (<> <h2> test </h2>
        <h2> its gonna load </h2>
         </>)

        }
        </>

      </div>

      <div className = "Example3">
        <h1>Example 3</h1>
        <Person name = {'Johnyy'} ln = {'walker'} age = {'21'}/>
        --------------------------------------------------------
        <Person name = {'coool'} ln = {'drinks'} age = {'45'}/>
        </div>


        <div className = "Example4">
          <>
          <h1>Example 4</h1>
          <Copy />
            </>
          </div>
      
      
      
      </> // end tag

  );
}


export default App



