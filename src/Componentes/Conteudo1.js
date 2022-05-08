import Story from "./Story";
import Post from "./Post";
import Side from "../SideBarr/Side";
export default function Conteudo1 (){
    return(
        <div class="conteudo">
        <div class="conteudo1">
       <Story />
       <Post /> 
        </div>
        <div class="sidebar">   
        <Side />
        </div>  
        </div>  
    )
}