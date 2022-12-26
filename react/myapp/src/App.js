import React from 'react';
import Card from "./components/Card/Card.jsx";
import Data from "./Data.json";


const App=()=>{ 
  var items = [];
  for (var i = 0; i < Data.length; i++) {
    items.push(
    <Card 
    name={Data[i].name} 
    age={Data[i].age} 
    skillStatus={Data[i].skillStatus} 
    />);
  }

  return (
    <>
    {items}
    </>
  );
}

export default App;
