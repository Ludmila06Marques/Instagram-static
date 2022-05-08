import S1 from "./S1"

 export default function Scima(){
const stories=[{
  img:"/img/9gag 1.png", nome:"aaaaaa"
}
,
{
  img:"/img/9gag 1.png", nome:"bbbbbb"
}
,
{
  img:"/img/9gag 1.png", nome:"cccccc"
}
,
{
  img:"/img/9gag 1.png", nome:"dddddd"
}
,
{
  img:"/img/9gag 1.png", nome:"eeeeee"
}
,
{
  img:"/img/9gag 1.png", nome:"ffffff"
}
,
{
  img:"/img/9gag 1.png", nome:"ggggggg"
}
,
{
  img:"/img/9gag 1.png", nome:"hhhhhh"
}
]
const printar= stories.map(item=> <S1 img={item.img} nome={item.nome}/>)



    return(

        <div class="scima"> 
        {printar}
      
         </div>
    )
}


