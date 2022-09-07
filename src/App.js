
import './App.css'
import {useState} from 'react'


function App(){
  const[inputNamber1, setInputNamber1]= useState();
  const[inputNamber2, setInputNamber2]= useState();
  const[result, setResult]=useState();



  const Add =()=>{
  setResult(parseInt(inputNamber1)+ parseInt(inputNamber2));
  }
  const Sub =()=>{
    setResult(parseInt(inputNamber1)- parseInt(inputNamber2));
  }
  const Mul =()=>{
    setResult(parseInt(inputNamber1)* parseInt(inputNamber2));
  }
  const Div =()=>{
    setResult(parseInt(inputNamber1)/ parseInt(inputNamber2));
  }
  const Rem =()=>{
    setResult(parseInt(inputNamber1)% parseInt(inputNamber2));
  }


  return (
    
    <div className="App">
      <div class="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 d-flex justify-content-center">
    <form className="from mt-5 p-5 bg-light shadow font-monospace">
      <h3>Calculator</h3>
      
       <input className="form-control" value={inputNamber1} onChange={(e)=>{setInputNamber1(e.target.value)}}/>
       <input className="form-control" value={inputNamber2} onChange={(e)=>{setInputNamber2(e.target.value)}}/>
       <br/>
      <button type="button" class="btn btn-secondary" onClick={Add}>+</button>
      <button type="button" class="btn btn-outline-secondary" onClick={Sub}>-</button>
      <button type="button" class="btn btn-secondary" onClick={Mul}>*</button>
      <button type="button" class="btn btn-outline-secondary" onClick={Div}>/</button>
      <button type="button" class="btn btn-secondary" onClick={Rem}>%</button>
      <p>{result}</p>
      </form>
      </div>
    </div>
 </div>
  );
  }

export default App
