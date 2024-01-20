import { useRef, useState } from 'react'


function App() {

  return (
       <>
          <Color></Color>
      </>
  )
}

   function Color(){

          const divRef=useRef();
          const [backgroundColor,setbackgroundColor]=useState('black');

           const divStyle={
                    height:"300px",
                    width:"400px",
                    border:"2px solid black", 
                    backgroundColor:backgroundColor,          
           }

       return(
            <div>
                    <div style={divStyle} ref={divRef} ></div>
                       <button onClick={()=>{
                           setbackgroundColor("red");
                       }}>red</button>
                       <button onClick={()=>{
                           setbackgroundColor("blue");
                       }}>blue</button>
                       <button onClick={()=>{
                           setbackgroundColor("yellow");
                       }}>yellow</button>
                       <button onClick={()=>{
                            setbackgroundColor("green");
                       }}>green</button>
                       <button onClick={()=>{
                            setbackgroundColor("black");
                       }}>black</button>
                       <button onClick={()=>{
                            setbackgroundColor("violet");
                       }}>violet</button>
            </div>
       )
   }

export default App
