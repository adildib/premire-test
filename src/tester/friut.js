import { useState } from "react"

export default function Fruit(){

  const  fruit= [{name:'orange',fr:true,id:1},{name:'lemon',fr:true,IdleDeadline:2},
        {name:'botato',fr:false,'id':2}
      ]

const [qt,setQt]=useState(0)

const plus=()=>{

  setQt(qt+1);

}


 moins=()=>{

  setQt(qt-1);

}


let displayfr= ()=>fruit.map(frui => <li key={frui.id} style={{ color:frui.fr?'orange':'green'}} >{frui.name} <button onClick={plus}>+</button> <button onClick={moins}>-</button> {qt}</li>

)


return(



<>


<h1>Liste :</h1>



<ul>{displayfr()}</ul>


</>



)



}