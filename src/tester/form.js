export default function Form({titre,inputnam,children}){
   
   
   

    return(

<>


<label>{titre}</label>

<input name={inputnam} type='texte' />

<div> {children} </div>

</>
)
}