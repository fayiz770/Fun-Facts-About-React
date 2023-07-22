import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [option, setOption] = React.useState(false)
  function switches(){
    setOption(!option)
    console.log(option)
  }
  return (
    <div className="App">
      <Header
        option={option}
        switches={switches} 
      />
      <Main
        option={option} 
      />
    </div>
  );
}

export default App;
