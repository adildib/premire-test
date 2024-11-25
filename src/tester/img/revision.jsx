
 import React,{useState,useEffect} from "react";
  
 export default function Revision(){


 const[newmrq,setNewmrq]=useState('');
 const[marques,setMarques]=useState([]);



const addmrq= (e)=>{ 
    e.preventDefault();

    setMarques([...marques,newmrq]);

    setNewmrq('');


     
 }

 return(

<>

<form onSubmit={addmrq}>


<input type="text" placeholder="new marque" value={newmrq} onChange={(e)=>setNewmrq( e.target.value)}   />

<button>Ajouter</button>

</form>




<ul>

{marques.map((marq,index)=><li key={index}>{marq}</li>)}

</ul>



</>
)}