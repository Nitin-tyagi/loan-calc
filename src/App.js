import {useState,useEffect} from "react";
import './App.css';

function App() {

const [principle,setPrinciple]=useState(0);
const [rate,setRate]=useState(0);
const [year,setYear]=useState(0);
const [emi,setEmi]=useState(0);

const handleChange=(e)=>{
  // console.log(e.target.id,e.target.value);
  const id=e.target.id;
  const value=parseInt(e.target.value);
  if(id==="principle"){
    setPrinciple(value);
  }
  else if(id==="rate"){
    setRate(value);
  }
  else{
    setYear(value);
  }
 
}
console.log(principle,rate,year);

// p(r(1+r)^y/((1+r)^y)-1)

const calculateEMI=()=>{
  let r=rate;
if(principle && r && year){
  
   r=r/12/100; //per month
   const calcPower=Math.pow(1+r,year*12);
   const amount=principle*(r*calcPower/(calcPower-1));
   setEmi(Math.round(amount));
   console.log(amount);
}

}

useEffect(()=>{
calculateEMI();
},[principle,rate,year])

  return (
   
    <div className="loan-calc">
     
     <h2>Mortgage Calculater</h2>
     <div className="input-field">
      <label >Principle</label>
      <input type="number" id="principle" onChange={handleChange}/>
      <label >Rate</label>
      <input type="number" id="rate" onChange={handleChange}/>
      <label >Year</label>
      <input type="number" id="year" onChange={handleChange}/>
     </div>
     <div className="output">
    {/* { `Your EMI is ${emi}` } */}
    your EMI is {emi}
     </div>
     </div>
    
  );
}

export default App;
