function MeuPerfil(props){
    return(
             <div class="partedecima">    
        <img src="/img/catanacomics 1 (1).png"/>
                  <div class="textinho">
                  <h1><strong>{props.user}</strong></h1>  
                  
                  <h1>{props.nome}</h1>
                  </div>
                  </div>       
    )
}
 export default function Exibir(){
    return(
        <MeuPerfil user="catanacomics" nome="Catana"/>

    )
}