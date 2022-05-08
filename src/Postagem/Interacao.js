import React from "react"


export default function Interacao(props){

const [ classButton, setClassButton]= React.useState("icone2")
const [ nameButton , setNameButton]=React.useState("heart-outline")

function curtir(){
   
    if(classButton=="icone2 preenchido" ){
        setClassButton("icone2 ") 
        setNameButton("heart-outline")     
    } else{
        setClassButton("icone2 preenchido")
        setNameButton("heart")
    }
  
}

    return(
        <div class="interacao">
                              
        <div class="interacao2">
        <ion-icon onClick={curtir}class={classButton} name={nameButton}></ion-icon>
            <ion-icon class="icone2"name="chatbubble-outline"></ion-icon>
            <ion-icon class="icone2"name="paper-plane-outline"></ion-icon>
        </div>
        <div class="interacao3">
            <ion-icon class="icone2" name="bookmark-outline"></ion-icon>
        </div>
        
    </div>
    )
}