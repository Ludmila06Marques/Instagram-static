import PostUnico from "./PostUnico"
export default function Post(){

    const usuarios=[{
        perfil:"/img/meowed 2.png"
        ,
        nome:"meowed"
        , imagem:"/img/post3.jpg"
    },
    {
        perfil:"/img/meowed 2.png"
        ,
        nome:"LELELEL"
        , imagem:"/img/post3.jpg"
    },
    {
        perfil:"/img/meowed 2.png"
        ,
        nome:"meoLELLELEwed"
        , imagem:"/img/post3.jpg"
    }
      
    ]
    const postagens = usuarios.map(item=> <PostUnico perfil={item.perfil} nome={item.nome} imagem={item.imagem} />)
    

    return(
    <div>
       {postagens}
    </div>
             
    )
}