import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponentA } from './Component/ComponentA';
import { ComponentC } from './Component/ComponentC';
import { CustomReactContextProvider } from './Component/reactContextProvider';

function App() {
  return (
    <div className="App">
      <ComponentA></ComponentA>
      <CustomReactContextProvider value="Demo Value"> {/*Provider used to provide the demo value */}
        <ComponentC>
        </ComponentC>
      </CustomReactContextProvider>

    </div>
  );
}

export default App;