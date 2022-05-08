
export default function Pessoas(props){
    return(
      <div class="partedebaixo">
    <div class="pessoas"> 
        <div class="conjunto">
                
                <img src={props.imagem}/>
                <div class="textinho">
                <h1><strong>{props.nome}</strong></h1>  
                
                <h2>{props.name}</h2>
              </div>
                </div>
            <div class="seguir">
                Seguir
            </div>
        </div>
      
  </div>
  )
}