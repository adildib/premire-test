



import React from 'react';


import Profil from "./Profil";
import Form from './form';




export default function Centent(){


    const utilisateur="admin";


  const  resultat   =()=> utilisateur=='admin' ? <Profil /> : <Form>  saisir votre nom</Form>;


return(
<>



{resultat()}



</>

)

}