import Pessoas from "./Pessoas"
import MeuPerfil from "./MeuPerfil"
import Titulo from "./Titulo"
export default function Side(){

const barra=[{
  imagem:"/img/catanacomics 1 (1).png",
  nome:"catanacomics",
  name:"Catana"
},
{
  imagem:"/img/catanacomics 1 (1).png",
  nome:"catanacomics",
  name:"Catana"
},
{
  imagem:"/img/catanacomics 1 (1).png",
  nome:"catanacomics",
  name:"Catana"
},
{
  imagem:"/img/catanacomics 1 (1).png",
  nome:"catanacomics",
  name:"Catana"
},
{
  imagem:"/img/catanacomics 1 (1).png",
  nome:"catanacomics",
  name:"Catana"
}]

const sugestoes= barra.map(item=> <Pessoas imagem={item.imagem} nome={item.nome} name={item.name} />)


    return(
      <div>
                  <MeuPerfil/>
                  <Titulo/>
                {sugestoes}
      </div>
      
    )
}