import React, { useState } from 'react'

function Frt() {


const [listfr,setListfr] =useState([]);

const [newfrt,setNewfrt]=useState('');

const addfrt=(e)=>{
e.preventDefault();

setListfr([...listfr,newfrt]);    
setNewfrt('');


}


  return (
    <>
    
    <form onSubmit={addfrt} >
    
    <input type="text" placeholder='nouveau fruit' value={newfrt} onChange={(e)=>{setNewfrt(e.target.value)}} />
    <button type='submit'>Ajouter</button>                                            

    </form>

Liste fruits:

<ul>{listfr.map((fruit,index)=><li key={index}>{fruit}</li>)}</ul>



    </>
  )
}

export default Frt



/*  Authentification :
Un utilisateur entre son nom d'utilisateur et 
son mot de passe pour se connecter à un système.

Autorisation :
Une fois authentifié, l'utilisateur peut avoir accès à certaines parties du système en fonction 
de ses rôles et 
permissions. Par exemple, un employé peut accéder à ses propres fichiers de paie, mais
 seul le gestionnaire des ressources humaines
 peut accéder à tous les fichiers de paie des employés. */