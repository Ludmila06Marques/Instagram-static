
import B1 from "./B1"
export default function Sbaixo(){

    const stories=[{
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ,
      {
        img:"/img/stories_background.jpg"
      }
      ]
      const printar= stories.map(item=> <B1 img={item.img}/>)


    return(
    <div class="sbaixo">      
       {printar}
     
    </div>)

}