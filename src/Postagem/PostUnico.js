
import React from "react"
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


    
    const [ classButton, setClassButton]= React.useState("icone2")
    const [ nameButton , setNameButton]=React.useState("heart-outline")
   function Curtir(){
   
        if(classButton=="icone2 preenchido" ){
            setClassButton("icone2 ") 
            setNameButton("heart-outline")     
        } else{
            setClassButton("icone2 preenchido")
            setNameButton("heart")
        }
      
    }
    return(
        <div onClick={Curtir} class="post"> 
                         
                        <Usuario perfil={props.perfil} nome={props.nome} />
                        <Imagem  imagem={props.imagem}/>
                        <Interacao />
                        <Curtidas />
        </div> 
    )
}