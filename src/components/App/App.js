import React, { useState } from 'react';
import './App.scss';

import Input from '../Input/Input';
import Numbers from '../Numbers/Numbers';
import Actions from '../Actions/Actions';


function App() {
  const [state, setState] = useState({
    input: '',
    memory: '',
    add: false,
    substract: false,
    divis: false,

  });

  //debugger; 

  const putInput = (num) => () => {
    setState({
      ...state,
      input: state.input + num,
    });
  };

  const add = () => {    
    // if(state.memory === '') {
    //   const memo = state.input;
    //   return memo
    // } else {
    //   const memo = parseInt(state.memory)+parseInt(state.input);
    //  return memo
    // };

    const memo = state.memory === '' ? state.input : parseInt(state.memory)+parseInt(state.input)

    setState({
      ...state,
      memory: memo, 
      input: '',
      add: true,
      substract: false,
      divis: false,
    });    
  };

  const set = (seting) => {
    
  }

  const substract = () => {    
    const memo = state.memory === '' ? state.input : parseInt(state.memory)+parseInt(state.input)

    setState({
      ...state,
      memory: memo, 
      input: '',
      substract: true,
      add: false,
      divis: false,
    });    
  };

  const divis = () => { 
    const memo = state.memory === '' ? state.input : parseInt(state.memory)+parseInt(state.input)
   
    setState({
      ...state,
      memory: memo, 
      input: '',
      divis: true,
      add: false,
      substract: false,
    });    
  };

  const clear = () => {
    setState({
      ...state,
      input: '',
      memory: '',
    });
  };

  const equal = () => {
    if(state.add) {
      const result = parseInt(state.memory)+parseInt(state.input);
      console.log('result =>', result);      
      setState({
        ...state,
        input: result
      });
    };

    if(state.substract) {
      const result = parseInt(state.memory)-parseInt(state.input);
      console.log('result =>', result);      
      setState({
        ...state,
        input: result
      });
    }

    if(state.divis) {
      const result = parseInt(state.memory)/parseInt(state.input);
      console.log('result =>', result);      
      setState({
        ...state,
        input: result
      });
    }

  };
  
   
  return (
    <div className="App">
      <Input value={state.input} />
      <Numbers putInput={putInput} clear={clear} />
      <Actions add={add} equal={equal} substract={substract} divis={divis} />
    </div>
  );
}

export default App;
