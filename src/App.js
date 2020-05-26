import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeComponent from './component/CakeComponent'
import {Provider} from 'react-redux'
import store from './redux/store'


export class App extends React.Component
{

   render (){
     return (
       <Provider store={store}>
      <div className="App">
      <CakeComponent></CakeComponent>
    </div>
    </Provider>
     )
   }

    handle() {
    
   }
}


export default App;
