import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeComponent from './component/CakeComponent'
import IceCreamComponent from './component/IceCreamComponent'
import {Provider} from 'react-redux'
import store from './redux/store'


export class App extends React.Component
{

   render (){
     return (
       <Provider store={store}>
      <div className="App">
      <CakeComponent></CakeComponent>
      <IceCreamComponent></IceCreamComponent>
    </div>
    </Provider>
     )
   }
}


export default App;
