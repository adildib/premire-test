import React from 'react';

import Fruit from "./friut"

const user={

    name:'lima',
    imgurl:'https://i.imgur.com/yXOvdOSs.jpg',
    imgSize:90

}



export default function Profil(){

return(

<>


  <h1>{user.name}</h1>


  <img src={user.imgurl} style={{width:user.imgSize , height:user.imgSize}}  alt={user.name}/>
 
<h1>Favorite food  for {user.name} :</h1>


<Fruit> </Fruit>


  </>

)
}