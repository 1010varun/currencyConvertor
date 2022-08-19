import React, { useState } from "react";
import './App.css';
import Buttons from './components/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import { Input, Label } from "reactstrap"

const App = () => {

  const [amount, setAmount] = useState();
  const [converted, setConverted] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const Amount = event => {
    setAmount(event.target.value);
  }

  const changeFrom = event => {
    setFrom(event.target.value);
  }

  const changeTo = event => {
    setTo(event.target.value);
  }

  const convert = () => {
    if(from === "Rupees" && to === "Dollar"){
      setConverted(amount/80);
    }
  }
  
  return (
    <div>
      <Navbar/>
      <Label id="firstLable">Enter Amount : 
      <Input placeholder="Enter Amount" onChange={Amount} value={amount} id="firstInput"/>
      </Label><br></br>
      <Label id="fromLable"> Change From : 
      <Input type="select" onChange={changeFrom} value={from} id="from">
        <option>Rupees</option>
        <option>Dollar</option>
      </Input>
      <Label id="toLable">To : 
      <Input type="select" onChange={changeTo} value={to} id="from">
        <option>Rupees</option>
        <option>Dollar</option>
      </Input>
      </Label>
      </Label>
      <div id="button" onClick={convert}>Convert</div>
      <Label id="convertedLable">Converted Value : 
        <Input value={converted + "  " + to} id="converted" disabled/>
      </Label>
    </div>
  );
}

export default App;
