import Conteudo1 from "./Conteudo1"
import Topao from "../Topo/Topao"
import BarraBaixa from "./BarraBaixa"
export default function Instagram(){
    return(
        <div class="root">
        <div class="fixar">
        <Topao />
        </div>
        <div class="resto">
          <Conteudo1 /> 
        </div>
        <BarraBaixa />
        </div>
    )
}