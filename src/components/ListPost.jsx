import { useState, useEffect } from "react";
import "../assets/css/componentes/card.css"
import { buscar } from "./api/api";
import { Link } from "react-router-dom";

const ListPosts = ({ url }) => {
    const [posts,setPost] = useState([])
    useEffect(() => { 
        buscar(url,setPost) // buscar resive la url donde se encuentra la info que queremos solicitar y el segundo parametro resive esa informacion
    }, [url]) // cada vez que resivamos una url de una ruta diferente vamos a hacer una nueva busqueda para eso se usa esta linea
    return (
        <section className="posts container">
              {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article >
                            <h3 className="post-card__title">
                                {title}
                            </h3>
                            <p className="post-card__meta">{metadescription}</p>
                        </article>
                    </Link>
                })
            }
        </section>
    )
}

export default ListPosts;