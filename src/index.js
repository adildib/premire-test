import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hellow from './tester/Hellow';
import Form from './tester/form';
import Friut from './tester/friut';
import Profil from './tester/Profil';
import Centent from './tester/Centent';
import Frt from './tester/Frt';
import Revisio from './tester/img/revision';
import Revision from './tester/img/revision';
const root = ReactDOM.createRoot(document.getElementById('root'));  


const fruitarry = ['orange','lemon','poms']


root.render( 

  <React.StrictMode>

    <Hellow  nam='adil el'/>


<Revision />


    

<Frt />

  </React.StrictMode>
);

//  voila mon compenent principal    <Centent  /> 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












