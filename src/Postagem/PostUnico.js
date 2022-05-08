

import Interacao from "./Interacao"
import Curtidas from "./Curtidas"

function Usuario(props){
    return(
       <div class="usuario">
               <div class="perfil">
               <img src={props.perfil}/>
               <h1>{props.nome}</h1>
               </div>
                   <div class="pontinhos">
                       <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                   </div>
   </div>
    )
}

 function Imagem(props){
    return(
        <div  class="imagem">
        <img class=" alice" src={props.imagem}/>
        </div>
    )
}

export default function PostUnico(props){

    
    return(
        <div class="post"> 
                         
                        <Usuario perfil={props.perfil} nome={props.nome} />
                        <Imagem  imagem={props.imagem}/>
                        <Interacao />
                        <Curtidas />
        </div> 
    )
}