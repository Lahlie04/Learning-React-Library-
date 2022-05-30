
/////////////////// FUNCTIONAL BASE COMPONENT/////////////////////////////////

// Everyting that you want to use, you have to import it, even the css.
// import React from "react";
// import logo from './logo.svg';
// import './App.css';

//Functional base component
// function App(){
// //JSX(return) expressions must have one parent element, so to cheat it, you can rap your things with a div.
// //whenever we want to use a class on the div we don't write class, we write className
// // rafca
//   return(
//     <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" />
//        <p>The logo of React js</p>
//      </header>
//     </div>
//   )

// }

// //so that you can be able to use the function app anywhere you want to.
// export default App;





/////////////////// CLASS BASE COMPONENT/////////////////////////////////

import React from "react";
import logo from "./img-1.jpg"
import "./App.css"

class App extends React.Component{
  render(){
  return(
    <div> 
      <img src ={logo} width = "100"  height = "100" />
</div>
  )
  }
}

export default App




