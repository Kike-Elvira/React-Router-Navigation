import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/componentes/card.css"
import { useState,useEffect } from "react";
import { buscar } from "../components/api/api";

const Post = ({url}) => {

    const [post,setPost] = useState({})

    const { id } = useParams(); // acceder al complemento de la url en este caso lo nombramos id

    const navigate =  useNavigate(); // navegar a una ruta en especifico 

    useEffect(() => {
      buscar(`/posts/${id}`,setPost).catch(() =>{ // accedemos al catch de la promesa y le mandamos una ruta ineccistente para que nos mande a nuestra pagina de error
       navigate("/not-found-err-404")
      }) // mandamos a llmar la funcion de nuestra api donde mandamos la url de donde va a solicitar la info y el arreglo setpost para que en el nos retorne la info
    }, [id]) // cada vez que cambie el id se va a volver a solicitar la informacion a el JSON-server
    
 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post;
