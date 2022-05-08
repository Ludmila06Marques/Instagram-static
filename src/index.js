
import ReactDOM from "react-dom"
import Story  from "./Story"
import Post from "./Post"
import Side from "./SideBarr/Side"
ReactDOM.render(Story(), document.querySelector(".parte1"))
ReactDOM.render(Post(), document.querySelector(".parte2"))
ReactDOM.render(Side(), document.querySelector(".sidebar"))
